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
          <div class="news-title">齐鲁号”零散集结班列首发</div>
          <div class="news-info">
            <span class="publish">发布者: 物流集团</span>
            <span class="count">浏览次数: 2080</span>
            <span class="date">2019/01/01</span>
          </div>
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

