<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner :bgName="'about-bg'" :txtName="'about-txt'"/>
      <div class="main-wrap">

      </div>
      <div class="event-wrap"></div>
    </div>
    <m-footer />
  </div>
</template>

<script>
import '_s/common/index.scss'
import './about.scss'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import handleScroll from '../../mixins/index'
import mBanner from '_c/banner'
export default {
  name: 'about',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner},
  data () {
    return {
      curIndex: 3
    }
  }
}
</script>

