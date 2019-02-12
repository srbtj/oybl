<template>
  <div class="banner-wrap" :class="classWrap">
    <div class="banner-txt"></div>
  </div>
</template>
<script>
export default {
  name: 'banner',
  props: {
    className: {
      type: String,
      default: 'train-bg'
    }
  },
  computed: {
    classWrap () {
      return this.className
    }
  }
}
</script>

