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
  ],

  markdown: {
    extendMarkdown: (md) => {
      md.set({ breaks: true });
    },
  },
};
