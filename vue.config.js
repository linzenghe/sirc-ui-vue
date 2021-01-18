const {join} = require('path')

module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    // 修改 pages 入口
    pages: {
        index: {
            entry: 'examples/main.js', // 入口
            template: 'public/index.html', // 模板
            filename: 'index.html' // 输出文件
        }
    },
    
    chainWebpack: (config) => { 

    }
}