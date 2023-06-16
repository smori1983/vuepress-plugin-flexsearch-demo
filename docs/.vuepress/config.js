const path = require('path');
const sidebar = require('./sidebar');

const locales = {
  '/': {
    lang: 'ja-JP',
  },
  '/en/': {
    lang: 'en-US',
  },
};

module.exports = {
  base: '/vuepress-plugin-flexsearch-demo/',
  title: 'vuepress-plugin-flexsearch Demo',
  dest: 'docs/.vuepress/dist',

  locales: locales,

  themeConfig: {
    searchPlaceholder: 'Search ( s, / )',

    locales: {
      '/': {
        nav: [
          { text: 'Debug', link: '/debug.md' },
        ],
        sidebar: [
          {
            title: 'Pages',
            collapsable: false,
            sidebarDepth: 0,
            children: sidebar.collect(path.resolve(__dirname, '..'), locales, '/'),
          },
        ],
      },
      '/en/': {
        nav: [
          { text: 'Debug', link: '/en/debug.md' },
        ],
        sidebar: [
          {
            title: 'Pages',
            collapsable: false,
            sidebarDepth: 0,
            children: sidebar.collect(path.resolve(__dirname, '..'), locales, '/en/'),
          },
        ],
      },
    },
  },

  plugins: [
    [require('./plugins/wikipedia-citation')],

    ['@smori1983/vuepress-plugin-flexsearch', {
      //searchHotKeys: ['s', '/'],
      //searchMaxSuggestions: 20,
      //searchPaths: null,
      //excerptAroundLength: 100,
      //excerptHeadText: '... ',
      //excerptTailText: ' ...',
      //tokenizerType: 'kuromoji.default',
      //ngramSize: 3,
      //uiAlignRightFactor: 10,
    }],
  ],

  markdown: {
    extendMarkdown: (md) => {
      md.set({ breaks: true });
    },
  },
};
