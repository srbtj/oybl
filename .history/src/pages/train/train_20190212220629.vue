<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner :bgName="'train-bg'" :txtName="'train-txt'"/>
      <m-train :class="'train-train'">
        <m-summary :title="'班列概况'" slot="title" :class="'train-summary'"/>
      </m-train>
      <div class="train-city">
        <div class="main-wrap">
          <div class="flex-common flex-left">
            <m-summary :title="'欧亚国际货运省内班列'" :class="'color-white'"/>
          </div>
          <div class="flex-common flex-right">
            <swiper :options="swiperOptions" ref="mySwiper">
              <swiper-slide v-for="(city, i) in cityArrs" :key="'video_' + i">
                <div class="slide-info">
                  <div class="video-img">
                    <img :src="video.src" alt="" class="slide-img">
                    <i class="icon iconfont icon-bofang"></i>
                  </div>
                  <div class="slide-desc">
                    <div class="item-name">{{video.title}}</div>
                    <div class="item-desc">{{video.desc}}</div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <m-footer />
  </div>
</template>

<script>
import '_s/common/index.scss'
import './train.scss'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import handleScroll from '../../mixins/index'
import mBanner from '_c/banner'
import mTrain from '_c/train'
import mSummary from '_c/summary'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const swiperOptions = {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'my-bullet',
    bulletActiveClass: 'my-bullet-active'
  }
}

export default {
  name: 'train',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner, mTrain, mSummary, swiper, swiperSlide},
  data () {
    return {
      curIndex: 1,
      swiperOptions,
      cityArrs: [
        { src: '', name: '', desc: '' },
        { src: '', name: '', desc: '' },
        { src: '', name: '', desc: '' },
        { src: '', name: '', desc: '' },
        { src: '', name: '', desc: '' },
        { src: '', name: '', desc: '' },
        { src: '', name: '', desc: '' },
        { src: '', name: '', desc: '' },
        { src: '', name: '', desc: '' },
      ]
    }
  }
}
</script>

