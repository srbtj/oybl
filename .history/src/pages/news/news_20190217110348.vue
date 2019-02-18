<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner :bgName="'news-bg'" :txtName="'news-txt'"/>
      <div class="main-wrap">
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
import mSummary from '_c/summary'
export default {
  name: 'news',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner, mSummary},
  data () {
    return {
      curIndex: 2
    }
  }
}
</script>

