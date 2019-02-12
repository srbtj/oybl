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
          <div class="flex-common flex-left"></div>
          <div class="flex-common flex-right"></div>
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
export default {
  name: 'train',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner, mTrain, mSummary},
  data () {
    return {
      curIndex: 1
    }
  }
}
</script>

