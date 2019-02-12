<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner :bgName="'train-bg'" :txtName="'train-txt'"/>
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
export default {
  name: 'train',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner, mTrain},
  data () {
    return {
      curIndex: 1
    }
  }
}
</script>

