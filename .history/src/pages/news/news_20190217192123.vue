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
            <div class="news-default">
              <div class="news-title">自主品牌汽车首次搭乘“齐鲁号”欧亚班列走出国门</div>
              <div class="news-info">
                <span class="publish">发布者: 物流集团</span>
                <span class="count">浏览次数: 2080</span>
                <span class="date">2019/01/01</span>
              </div>
              <div class="news-desc">1月1日，一辆辆满载着自主品牌SUV的大型货车驶入山东高速国储物流有限公司济南（国储）铁路国际场站，标志着我国自主品牌汽车出口俄罗斯物流项目最终花落“齐鲁号”…</div>
            </div>
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

