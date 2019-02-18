<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner :bgName="'news-bg'" :txtName="'news-txt'"/>
      <div class="breadcrumb">
        <div class="main-wrap">
          <a class="crumb-link crumb-arrow" href="news.html">新闻动态</a>
          <span class="crumb-text">新闻详情</span>
        </div>
      </div>
      <div class="main-wrap">
        <div class="news-info-wrap">
          <div class="news-info"></div>
        </div>
        <div class="news-ad"><img src="../../assets/wx-gzh.png"/></div>
      </div>
    </div>
    <m-footer />
  </div>
</template>

<script>
import '_s/common/index.scss'
import './news-detail.scss'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import handleScroll from '../../mixins/index'
import mBanner from '_c/banner'
export default {
  name: 'news-detail',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner},
  data () {
    return {
      curIndex: 2
    }
  }
}
</script>

