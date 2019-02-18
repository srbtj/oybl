<template>
  <div id="container">
    <m-header />
    <div id="main"></div>
    <m-footer />
  </div>
</template>

<script>
import '_s/common/index.scss'
import './news-detail.scss'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import handleScroll from '../../mixins/index'
export default {
  name: 'news-detail',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter},
  data () {
    return {
      curIndex: 1
    }
  }
}
</script>

