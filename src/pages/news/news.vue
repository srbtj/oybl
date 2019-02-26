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
        <div class="news-info-wrap">
          <ul class="news-list">
            <li class="news-item" @click="goToDetail()">
              <div class="news-push">
                <img src="../../assets/news-img.png" class="news-img"/>
                <div class="news-info">
                  <div class="news-date">2019/01/15</div>
                  <div class="news-title">俄铁物流集装箱运输部总经理Alan Kaluhov一行到访物流集团</div>
                  <div class="news-desc">1月15日下午，俄铁物流集装箱运输部总经理、远东路桥俄罗斯区总经理Alan Kaluhov先生，远东路桥俄罗斯销售和项目经理Evgenia Bagraeva女士一行到访物流集团，商谈“齐鲁号”欧亚班列北线通道的境外合作事宜，物流集团党委书记、董事长张仰进，副总经理刘颖及班列项目组有关人员参加了会谈…</div>
                </div>
              </div>
              <!-- <div class="news-default">
                <div class="news-title">自主品牌汽车首次搭乘“齐鲁号”欧亚班列走出国门</div>
                <div class="news-info">
                  <span class="publish">发布者: 物流集团</span>
                  <span class="count">浏览次数: 2080</span>
                  <span class="date">2019/01/01</span>
                </div>
                <div class="news-desc">1月1日，一辆辆满载着自主品牌SUV的大型货车驶入山东高速国储物流有限公司济南（国储）铁路国际场站，标志着我国自主品牌汽车出口俄罗斯物流项目最终花落“齐鲁号”…</div>
              </div> -->
            </li>
            <li class="news-item">
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
            <li class="news-item">
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
            <li class="news-item">
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
            <li class="news-item">
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
            <li class="news-item">
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
            <li class="news-item">
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
          <div class="news-pages">
            <pager
              :total-page="totalPage"
              :init-page="page"
              @go-page="goPage"></pager>
          </div>
        </div>
        <!-- 广告 -->
        <div class="news-ad"><img src="../../assets/wx-gzh.png"/></div>
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
import pager from 'vue-simple-pager'
import api from '@/fetch/api'
export default {
  name: 'news',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner, pager},
  data () {
    return {
      curIndex: 2,
      totalPage: 10,
      page: 1,
      newsArrs: []
    }
  },
  methods: {
    getAllNews () {
      api.getStickNews({pageSize: 1, pageNo: 1, type: 1}).then(res => {
        console.log(res)
      })
    },
    goPage (data) {
      this.page = data.page
    },
    goToDetail () {
      window.location.href = `news-detail.html?id=1`
    }
  },
  mounted () {
    this.getAllNews()
  }
}
</script>

