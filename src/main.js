import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex/store'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);
// Vue.use(Element, { size: 'small', zIndex: 3000 });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
