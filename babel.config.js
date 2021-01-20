
var { clearConsole } = require('./config/index')

var plugins = []
clearConsole && plugins.push('transform-remove-console')
plugins.push([
  'import',
  { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
])
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: plugins
}
