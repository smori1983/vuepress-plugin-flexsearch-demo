---
home: false
---
# Demo site


[npm](https://www.npmjs.com/package/@smori1983/vuepress-plugin-flexsearch)


## Config

`.vuepress/config.js`

```js
module.exports = {

  plugins: [
    ['@smori1983/vuepress-plugin-flexsearch', {
      excerptAroundLength: 200,

      //searchHotKeys: ['s', '/'],
      //searchMaxSuggestions: 20,
      //searchPaths: null,
      //uiAlignRightFactor: 10,
      //excerptAroundLength: 100,
      //excerptHeadText: '... ',
      //excerptTailText: ' ...',
      //tokenizerType: 'kuromoji.default',
      //ngramSize: 3,
    }],
  ],

};
```
