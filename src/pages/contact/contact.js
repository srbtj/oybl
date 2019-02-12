import Vue from 'vue'
import App from './contact.vue'
import './contact.scss'
import store from '@/store'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
