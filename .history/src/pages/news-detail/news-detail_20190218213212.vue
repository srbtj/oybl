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
            <div class="news-date">2019/01/15</div>
            <div class="news-title">俄铁物流集装箱运输部总经理Alan Kaluhov一行到访物流集团</div>
            <div class="news-desc">1月15日下午，俄铁物流集装箱运输部总经理、远东路桥俄罗斯区总经理Alan Kaluhov先生，远东路桥俄罗斯销售和项目经理Evgenia Bagraeva女士一行到访物流集团，商谈“齐鲁号”欧亚班列北线通道的境外合作事宜，物流集团党委书记、董事长张仰进，副总经理刘颖及班列项目组有关人员参加了会谈…</div>
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

