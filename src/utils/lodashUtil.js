import Lodash from 'lodash'

export default {
  install: function (Vue, name = '_') {
    Object.defineProperty(Vue.prototype, name, { value: Lodash })
  }
}
