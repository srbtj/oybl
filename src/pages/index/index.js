import Vue from 'vue'
import App from './index.vue'
import './index.scss'
import animated from 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from '@/store'
Vue.use(VueAwesomeSwiper)
Vue.use(animated)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
