<template>
  <div id="headerWrap" :class="{fixed: getFixed}">
    <div class="main-wrap">
      <div class="logo">
        <a class="logo-link logo-spit" href="index.html"><i class="icon iconfont icon-qiluhaologo"></i></a>
        <a class="logo-link" target="_blank" href="http://www.sdgswl.com"><img class="sdgswl-img" src="../../assets/sdgswl-logo.png"></a>
      </div>
      <div class="nav">
        <ul class="nav-list">
          <li class="nav-item"
            :class="{'active': activeIndex === index}"
            v-for="(nav, index) in navArrs" :key="'nav_' + index"
            @mouseenter="mouseEnter(index)"
            @mouseleave="mouseLeave">
            <a :href="nav.href" class="nav-link">{{nav.txt}}</a>
          </li>
        </ul>
        <div class="wx-info">
          <i class="icon iconfont icon-weixin"></i>
          <span class="wx-ercode">
            <img src="../../assets/index-wx-code.png" class="wx-img"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './index.scss'
export default {
  name: 'mHeader',
  props: {
    curIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getFixed () {
      return this.$store.getters.getFixed
    }
  },
  data () {
    return {
      activeIndex: this.curIndex,
      navArrs: [
        { href: 'index.html', txt: '齐鲁号' },
        { href: 'train.html', txt: '班列概况'},
        { href: 'news.html', txt: '新闻动态'},
        { href: 'about.html', txt: '关于平台'},
        { href: 'contact.html', txt: '联系我们'}
      ]
    }
  },
  methods: {
    mouseEnter (index) {
      this.activeIndex = index
    },
    mouseLeave () {
      this.activeIndex = this.curIndex
    }
  }
}
</script>
