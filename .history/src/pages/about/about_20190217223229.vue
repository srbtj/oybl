<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner :bgName="'about-bg'" :txtName="'about-txt'"/>
      <div class="main-wrap">
        <m-summary :title="'平台概况'" />
        <div class="pt-title">一带一路 “齐鲁号”欧亚班列综合物流品牌</div>
        <div class="pt-icon-wrap">
          <div class="pt-icon">
            <i class="icon iconfont icon-pinpai"></i>
            <i class="icon iconfont icon-banlie"></i>
            <i class="icon iconfont icon-pingtai"></i>
            <i class="icon iconfont icon-zhengce"></i>
            <i class="icon iconfont icon-yingxiao"></i>
          </div>
          <div class="icon-txt">
            <span class="txt">五统一</span>
          </div>
          <div class="pt-desc"></div>
        </div>
      </div>
      <div class="event-wrap">
        <div class="main-wrap">
          <m-summary :title="'大事件'" />
          <div class="event-flex">
            <div class="flex-item">
              <div class="item-title">里程碑  砥砺前行</div>
              <div class="item-desc">从项目调研、与各地市货源组织单位对接， 到省级平台统筹运营准备、技术创新</div>
            </div>
            <div class="flex-item">
              <div class="item-txt" v-for="(item, i) in eventItems" :key="'event_' + i">{{item}}</div>
            </div>
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
      curIndex: 3,
      eventItems: [
        '2018年9月20号开始开发省级运营平台系统',
        '2018年10月7号中控室大屏和中控台安装完毕',
        '2018年10月10号省级运营平台系统测试版完成',
        '…'
      ]
    }
  }
}
</script>

