<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner :bgName="'about-bg'" :txtName="'about-txt'"/>
      <div class="main-wrap">

      </div>
      <div class="event-wrap">
        <div class="main-wrap">
          <m-summary :title="'大事件'" />
          <div class="event-flex">
            <div class="flex-item">
              <div class="item-title">里程碑  砥砺前行</div>
              <div class="item-desc">从项目调研、与各地市货源组织单位对接， 到省级平台统筹运营准备、技术创新</div>
            </div>
            <div class="flex-item"></div>
          </div>
        </div>
      </div>
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
import mSummary from '_c/summary'
export default {
  name: 'about',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner, mSummary},
  data () {
    return {
      curIndex: 3
    }
  }
}
</script>

