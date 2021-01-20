import { Button } from 'ant-design-vue'
import Input from '../packages/Input'
import 'ant-design-vue/dist/antd.css'

import { version } from '../package.json'
const components = [Button, Input]
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) {
    return
  }
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  install,
  ...components
}
