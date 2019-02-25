<template>
  <div id="container">
    <m-header />
    <div id="main">
      <!-- banner -->
      <div class="banner-wrap">
        <div class="main-wrap">
          <div class="banner-title animated fadeInDown"><img src="../../assets/banner-title.png" class="banner-title-img"/></div>
          <div class="banner-desc animated fadeInUp"><img src="../../assets/banner-desc.png" class="banner-desc"/></div>
        </div>
        <div class="banner-btn">
          <div class="main-wrap">
            <div class="banner-btn-desc animated fadeInLeft">
              <span class="banner-icon">
                <i class="icon iconfont icon-qiluhaopingtai"></i>
              </span>
              <div class="banner-desc-txt">
                <span class="txt-title">“齐鲁号”欧亚班列  信息化管理平台</span>
                <span class="txt-desc">省级运营信息平台系统</span>
              </div>
            </div>
            <div class="btn-info animated fadeInRight" @click="gotoPT">进入信息平台 <i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </div>
      </div>
      <!-- news -->
      <div class="news-wrap">
        <div class="main-wrap">
          <m-summary :title="'新闻动态'">
            <a href="news.html" class="load-more" slot="more">
              更多<i class="icon iconfont icon-gengduo"></i>
            </a>
          </m-summary>
          <div class="news-info">
            <div class="flex-item">
              <div class="news-img"><img :src="news.src"/></div>
              <div class="news-desc">
                <div class="news-title">
                  <i class="icon iconfont icon-top1"></i>
                  <span class="title-h2">{{news.title}}</span>
                </div>
                <span class="news-detail">{{news.desc}}</span>
              </div>
            </div>
            <ul class="news-list">
              <li class="news-item" v-for="(news, i) in newsArrs" :key="'news_' + i" @click="linkToNewsDetail(news.id)">
                <div class="news-title">{{news.title}}</div>
                <span class="news-date">{{news.date}}<i class="icon iconfont icon-gengduo"></i></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- video -->
      <div class="video-wrap">
        <div class="main-wrap">
          <swiper :options="swiperOptions" ref="mySwiper">
            <swiper-slide v-for="(video, i) in videoArrs" :key="'video_' + i">
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
      <!-- train -->
      <mTrain :class="'index-train'">
        <!-- <div slot="title"> -->
          <m-summary :title="'班列概况'" slot="title" :class="'train-summary'">
            <a href="contact.html" class="load-more" slot="more">
              更多详情<i class="icon iconfont icon-gengduo"></i>
            </a>
          </m-summary>
      </mTrain>
      <!-- contact -->
      <div class="main-wrap">
        <div class="contact-wrap animate">
          <m-summary :title="'联系我们'">
            <a href="contact.html" class="load-more" slot="more">
              更多详情<i class="icon iconfont icon-gengduo"></i>
            </a>
          </m-summary>
          <mContact :hasColor="true"/>
        </div>
      </div>
    </div>
    <m-footer />
  </div>
</template>
<script>
import '_s/common/index.scss';
import './index.scss'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import mSummary from '_c/summary'
import mContact from '_c/contact'
import mTrain from '_c/train'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import handleScroll from '../../mixins/index'
import api from '@/api'
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
  name: 'index',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mSummary, mContact, mTrain, swiper, swiperSlide},
  data () {
    return {
      swiperOptions,
      news: { src: require('../../assets/news-img.png'), title: '“齐鲁号”零散集结班列首发齐鲁号零散集结班列首发', desc: '2018年12月22日，“齐鲁号”欧亚班列烟台首发仪式在烟台港集装箱码头隆重举行，烟台市委、市政府、烟台海关、山东高速物流集团、烟台车务段、烟台港集团等单位相关烟台市委、市政府、烟台海关、山东高速物流集团、烟台车务段、烟台港集团等单位相关…'},
      newsArrs: [
        { title: '远东路桥中国区班列管理团队一行到访物流集团', id: 1, date: '2018-01-02'},
        { title: '远东路桥中国区班列管理团队一行到访物流集团', id: 2, date: '2018-01-02'},
        { title: '远东路桥中国区班列管理团队一行到访物流集团', id: 3, date: '2018-01-02'},
        { title: '远东路桥中国区班列管理团队一行到访物流集团', id: 4, date: '2018-01-02'}
      ],
      videoArrs: [
        { src: require('../../assets/video-img.png'), title: '“齐鲁号”零散集结班列首发', desc: '2018年12月22日，“齐鲁号”欧亚班列烟台首发仪式在烟台港集装箱码头隆重举行，烟台市委、市政府、烟台海关等单位相关负责同志出席了首发仪式。'},
        { src: require('../../assets/video-img.png'), title: '“齐鲁号”零散集结班列首发', desc: '这是描述信息'},
        { src: require('../../assets/video-img.png'), title: '“齐鲁号”零散集结班列首发', desc: '2018年12月22日，“齐鲁号”欧亚班列烟台首发仪式在烟台港集装箱码头隆重举行，烟台市委、市政府、烟台海关等单位相关负责同志出席了首发仪式。'},
        { src: require('../../assets/video-img.png'), title: '“齐鲁号”零散集结班列首发', desc: '2018年12月22日，“齐鲁号”欧亚班列烟台首发仪式在烟台港集装箱码头隆重举行，烟台市委、市政府、烟台海关等单位相关负责同志出席了首发仪式。'}
      ]
    }
  },
  methods: {
    linkToNewsDetail (id) {
      window.location.href = `news-detail.html?id=${id}`
    },
    gotoPT () {
      window.location.href="javascript:;"
    }
  },
  mounted () {
    this.handleAnimate();
    addEventListener('scroll', this.handleAnimate, false)
  },
  beforeDestroy () {
    removeEventListener('scroll', this.handleAnimate, false)
  }
}
</script>
