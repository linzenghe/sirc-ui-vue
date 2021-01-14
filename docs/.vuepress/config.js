/*
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
  evergreen:true,
  themeConfig:{
    nextLinks:true,
    prevLinks:true,
    docsDir: 'docs',
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/linzenghe/sirc-ui-vue' },
    ],
    sidebar:[
      {
        title:'基础说明',
        collapsable:false,
        children:[
          {
            title:'介绍',
            path: 'introduction',
            collapsable: false,
          }
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  plugins: [
    '@vuepress/back-to-top', // 回到顶部
    ['@vuepress/medium-zoom', { selector: 'img' }], // 放大
    ['demo-container', {component: 'CustomDemoBlock'}]
  ]
}
