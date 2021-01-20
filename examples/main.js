/*
 * @Author: zenghe
 * @Date: 2021-01-14 15:06:07
 * @LastEditTime: 2021-01-20 10:50:26
 * @LastEditors: Do not edit
 * @FilePath: \lib-starter\examples\main.js
 * @Description:
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import sui from '@/index' // 引入组件库
Vue.use(sui)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
