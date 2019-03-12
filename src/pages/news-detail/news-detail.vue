<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner class="mobile-hide" :bgName="'news-bg'" :txtName="'news-txt'"/>
      <div class="breadcrumb mobile-hide">
        <div class="main-wrap">
          <a class="crumb-link crumb-arrow" href="news.html">新闻动态</a>
          <span class="crumb-text">新闻详情</span>
        </div>
      </div>
      <div class="main-wrap">
        <div class="news-info-wrap">
          <div class="news-title">齐鲁号”零散集结班列首发</div>
          <div class="news-info">
            <span class="publish">发布者: 物流集团</span>
            <span class="count">浏览次数: 2080</span>
            <span class="date">2019/01/01</span>
          </div>
          <div class="news-desc" v-html="desc"></div>
        </div>
        <div class="news-ad mobile-hide"><img src="../../assets/wx-gzh.png"/></div>
      </div>
    </div>
    <m-footer />
  </div>
</template>

<script>
import '_s/common/index.scss'
import './news-detail.scss'
import api from '@/fetch/api'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import handleScroll from '../../mixins/index'
import mBanner from '_c/banner'
import qs from 'qs'
export default {
  name: 'news-detail',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner},
  data () {
    return {
      curIndex: 2,
      news: {}
    }
  },
  methods: {
    getNewsDetail (id) {
      // debugger
      api.getNewsDetail(id).then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
    const querys = window.location.search
    const {id} = qs.parse(querys.replace('?', ''))
    console.log(qs.parse(querys.replace('?', '')))
    this.getNewsDetail(id)
  }
}
</script>

