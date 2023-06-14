module.exports = {
  base: '/vuepress-plugin-flexsearch-demo/',
  title: 'vuepress-plugin-flexsearch Demo',
  dest: 'docs/.vuepress/dist',

  locales: {
    '/': {
      lang: 'ja-JP',
    },
    '/en/': {
      lang: 'en-US',
    },
  },

  themeConfig: {
    searchPlaceholder: 'Search ( s, / )',

    locales: {
      '/': {
        sidebar: [
        ],
      },
      '/en/': {
        sidebar: [
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
