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
      title: 'sirc-vue-ui',
      description: '一个牛逼的组件库'
    },
    '/en/': {
      lang: 'en-US',
      title: 'sirc-vue-ui',
      description: 'A cool component library'
    }
  },
  themeConfig:{
    nextLinks:true,
    prevLinks: true,
    editLinks: false,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        sidebar: {
          '/': genSidebarConfig('组件')
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: {
          '/en/': genSidebarConfig('component')
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'Github', link: 'https://github.com/linzenghe/sirc-ui-vue' },
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
    'demo-container',
    '@vuepress/back-to-top', // 回到顶部
    ['@vuepress/medium-zoom', { selector: 'img' }], // 放大
  ]
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
      ]
    }
  ]
}