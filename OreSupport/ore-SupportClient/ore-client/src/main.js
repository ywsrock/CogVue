import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'

//開発環境
Vue.config.productionTip = false
//axiosグローバル設定


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
