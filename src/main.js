import Vue from 'vue'
import App from './App.vue'
// store
import store from './vuex/store';
// router link
import router from './router/router';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
