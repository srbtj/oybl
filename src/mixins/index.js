export default {
  methods: {
    handleScroll () {
      let width = document.documentElement.clientWidth
      if (width <= 750) return false
      let top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 250) {
        this.$store.commit('setFixed', 1)
      } else {
        this.$store.commit('setFixed', 0)
      }
    },
    handleAnimate () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      let ch = document.documentElement.clientHeight
      let dom = document.querySelectorAll(".animate")
      Array.prototype.slice.call(dom).forEach(v => {
        if(top + ch > v.offsetTop){
          var delay = v.dataset.delay;
          if(delay){
            setTimeout(() => {
              v.style.opacity = 1;
              v.classList.add(v.dataset.ani)
            }, delay)
          }else{
            v.style.opacity = 1;
            v.classList.add(v.dataset.ani)
          }
        }else{
          v.classList.remove(v.dataset.ani)
          v.style.opacity = 0;
        }
      })
    }
  },
  mounted () {
    addEventListener('scroll', this.handleScroll, false)
  },
  beforeDestroy () {
    removeEventListener('scroll', this.handleScroll, false)
  }
}
