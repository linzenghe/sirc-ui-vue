import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import sircUI from '@/index' // 引入组件库

Vue.use(sircUI, {
  getDictionary(keyList) {}
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
