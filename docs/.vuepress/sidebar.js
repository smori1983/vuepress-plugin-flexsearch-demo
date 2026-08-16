const fs = require('node:fs');
const path = require('node:path');

class Sidebar {
  /**
   * @param {string} basePath
   * @param {Object.<string, {lang: string}>} locales
   */
  constructor(basePath, locales) {
    /**
     * @type {string}
     * @private
     */
    this._basePath = basePath;

    /**
     * @type {Object.<string, {lang: string}>}
     * @private
     */
    this._locales = locales;
  }

  /**
   * @param {string} target
   * @return {string[]}
   */
  collect(target) {
    const localeBasePath = this._getLocaleBasePath(target);
    const excludeDirectories = this._getExcludeDirectories(target);

    const targetDirectories = fs.readdirSync(localeBasePath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .filter(dirent => dirent.name !== '.vuepress')
      .filter(dirent => {
        if (target === '/') {
          return excludeDirectories.includes(dirent.name) === false;
        } else {
          return true;
        }
      })
      .map(dirent => dirent.name)
      .sort();

    return targetDirectories
      .map((dir) => {
        return fs.readdirSync(path.join(localeBasePath, dir), { withFileTypes: true })
          .filter(dirent => dirent.isFile())
          .filter(dirent => /\.md/.test(dirent.name))
          .map(dirent => path.join(target, dir, dirent.name))
          .sort();
      })
      .reduce((prev, current) => {
        return prev.concat(current);
      }, []);
  }

  /**
   * @param {string} target
   * @return {string}
   * @private
   */
  _getLocaleBasePath(target) {
    return `${this._basePath}/${target}`.replace(/\/+/g, '/');
  }

  /**
   * @param {string} target
   * @return {string[]}
   * @private
   */
  _getExcludeDirectories(target) {
    //
    // If target is root, directories of other locales should be excluded.
    //
    if (target === '/') {
      return Object.keys(this._locales)
        .filter(localeBasePath => localeBasePath !== target)
        .map(localeBasePath => localeBasePath.replace(/^\/|\/$/g, ''));
    } else {
      return [];
    }
  }
}

module.exports = Sidebar;
