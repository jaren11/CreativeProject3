import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

import mock from './mock-data.js'

require('./assets/css/styles.css')

let data = {
  cars: mock,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
