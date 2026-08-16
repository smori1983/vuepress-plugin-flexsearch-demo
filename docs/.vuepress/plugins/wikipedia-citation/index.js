/**
 * @typedef {import('vuepress-types').PluginOptionAPI} PluginOptionAPI
 */

const path = require('node:path');

/**
 * @return {PluginOptionAPI}
 */
module.exports = () => {
  return {
    name: 'demo-wikipedia-citation',

    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceAppFile.js'),
    ],
  };
};
