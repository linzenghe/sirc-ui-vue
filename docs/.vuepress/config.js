/*
 * @Author: zenghe
 * @Date: 2021-01-20 11:29:23
 * @LastEditTime: 2021-01-20 16:38:58
 * @LastEditors: Do not edit
 * @FilePath: \lib-starter\docs\.vuepress\config.js
 * @Description: 
 */
const pkg =require('../../package.json')
module.exports = {
  title: pkg.name,
  description: '快速搭建第三方库',
  head:[
    ['link',{
      rel:'icon',
      href:`/favicon.ico`
    }]
  ],
  base: '/',
  evergreen: true,
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig:{
    nextLinks:true,
    prevLinks: true,
    editLinks: false,
    docsDir: 'docs',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/guide/'  },
      { text: 'Github', link: 'https://github.com/linzenghe/sirc-ui-vue' }
    ],
    sidebar:[
      {
        title:'快速上手',
        collapsable:false,
        children:[
          '/guide/'
        ]
      },
      {
        title:'组件',
        collapsable:false,
        children:[
          '/component/input'
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public',
        '@src':'../../src'
      }
    }
  },
  plugins: [
    'demo-container',
    '@vuepress/back-to-top', // 回到顶部
    ['@vuepress/medium-zoom', { selector: 'img' }], // 放大
  ]
}
