<template>
  <div class="banner-wrap" :class="classWrap">
    <div class="main-wrap">
      <div class="banner-txt"></div>
    </div>
  </div>
</template>
<script>
import './index.scss'
export default {
  name: 'banner',
  props: {
    bgName: {
      type: String,
      default: 'train-bg'
    },
    txtName: {
      type: String
    }
  },
  computed: {
    classWrap () {
      return this.bgName
    }
  }
}
</script>

