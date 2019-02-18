<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner :bgName="'news-bg'" :txtName="'news-txt'"/>
      <div class="breadcrumb">
        <div class="main-wrap">
          <span class="crumb-text crumb-arrow">新闻动态</span>
        </div>
      </div>
      <div class="main-wrap">
        <ul class="news-list">
          <li class="news-item">
            <div class="news-push"></div>
            <div class="news-default"></div>
          </li>
        </ul>
        <div class="news-ad"></div>
      </div>
    </div>
    <m-footer />
  </div>
</template>

<script>
import '_s/common/index.scss'
import './news.scss'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import handleScroll from '../../mixins/index'
import mBanner from '_c/banner'
export default {
  name: 'news',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner},
  data () {
    return {
      curIndex: 2
    }
  }
}
</script>

