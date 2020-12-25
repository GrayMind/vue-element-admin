// import Vue from 'vue'
import { createApp } from 'vue'

// import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

// import Element from 'element-ui'
import ElementPlus from 'element-plus'
import './styles/element-variables.scss'
// import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import errorHandler from './utils/error-log' // error log

import * as filters from './filters' // global filters

import SvgIcon from '@/components/SvgIcon'// svg component

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// Vue.use(Element, {
//   size: Cookies.get('size') || 'medium', // set element-ui default size
//   locale: enLang // 如果使用中文，无需设置，请删除
// })

// Vue.config.productionTip = false

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.component('svg-icon', SvgIcon)
// register global utility filters
app.config.globalProperties.$filters = filters
app.mount('#app')

errorHandler(app)

// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })
