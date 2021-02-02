import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/VueSession.js'
import './plugins/VueQuillEditor.js'
import router from './router'
import store from './store/index'
import './guard'
import LoadScript from 'vue-plugin-load-script';
import Axios from 'axios'
import vuetify from './plugins/vuetify' // path to vuetify export
import DatetimePicker from 'vuetify-datetime-picker'
Vue.use(DatetimePicker)
Vue.use(LoadScript);

//開発環境
Vue.config.productionTip = false
//開発モード
Vue.config.devtools = true;

// 開発環境の場合、下記のの処理実施
if (Vue.config.devtools) {
  // 開発時、下記の内容追加
  Vue.prototype.$http = Axios
  require('./mock');
}


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
