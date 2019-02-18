import Vue from 'vue'
import App from './news-detail.vue'
// import './about.scss'
import store from '@/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
