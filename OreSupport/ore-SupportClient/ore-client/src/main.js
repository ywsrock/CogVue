import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/VueSession.js'
import router from './router'
import store from './store/index'
import './guard'
import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);

//開発環境
Vue.config.productionTip = false
//開発モード
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')