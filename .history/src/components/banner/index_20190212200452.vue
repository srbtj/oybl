<template>
  <div class="banner-wrap">
    <div class="banner-txt"></div>
  </div>
</template>
<script>
export default {
  name: 'banner',
  props: {
    className: {
      type: String
    }
  },
  computed: {
    classWrap () {
      return this.className
    }
  }
}
</script>

