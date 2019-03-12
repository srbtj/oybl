<template>
  <div id="footerWrap">
    <div class="main-wrap">
      <div class="footer-logo  mobile-hide"><img src="../../assets/footer-logo.png" class="footer-img"/></div>
      <nav class="footer-nav">
        <a v-for="(nav,i) in navArrs" :key="'n_' + i"
          class="nav-link" :href="nav.href">
          {{nav.txt}}
        </a>
      </nav>
      <div class="footer-copy mobile-hide">
        <span class="copy-txt">Copyright @ 2018 SHANGDONG HIGH SPEED LOGISTICS GROUP CO.LTD, All Rights Reserved.</span>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss'
export default {
  name: 'mFooter',
  data () {
    return {
      navArrs: [
        { href: 'index.html', txt: '齐鲁号' },
        { href: 'train.html', txt: '班列概况'},
        { href: 'news.html', txt: '新闻动态'},
        { href: 'about.html', txt: '关于平台'},
        { href: 'contact.html', txt: '联系我们'}
      ]
    }
  }
}
</script>

