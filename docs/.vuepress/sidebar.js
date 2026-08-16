const fs = require('fs');
const path = require('path');

/**
 * @param {string} basePath
 * @param {Object.<string, {lang: string}>} locales
 * @param {string} target
 * @return {string[]}
 */
const collect = (basePath, locales, target) => {
  const localeBasePath = getLocaleBasePath(basePath, target);

  const excludeDirectories = getExcludeDirectories(locales, target);

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
 * @param {string}  basePath
 * @param {string} target
 * @return {string}
 */
const getLocaleBasePath = (basePath, target) => {
  return `${basePath}/${target}`.replace(/\/+/g, '/');
};

/**
 * @param {Object.<string, {lang: string}>} locales
 * @param {string} target
 * @return {string[]}
 */
const getExcludeDirectories = (locales, target) => {
  //
  // If target is root, directories of other locales should be excluded.
  //
  if (target === '/') {
    return Object.keys(locales)
      .filter(localeBasePath => localeBasePath !== target)
      .map(localeBasePath => localeBasePath.replace(/^\/|\/$/g, ''));
  } else {
    return [];
  }
};

module.exports.collect = collect;
