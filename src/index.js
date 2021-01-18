
import SButton from '../packages/Button'
const components = [SButton]

import { version } from '../package.json'

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component))
  // 或 components.map(component => Vue.use(component))

}

// 检测到Vue才执行，基于Vue
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  install,
  // 所有组件，必须具有install，才能使用Vue.use()
  ...components,
}