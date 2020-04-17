import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import kits from '@/components/kits'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.use(kits)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
