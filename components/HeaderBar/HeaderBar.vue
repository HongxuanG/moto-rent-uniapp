<template>
  <view class="header-content">
    <view class="state-bar" :style="{ height: statusBarHeight + 'px' }"></view>
    <view class="head-bar" :style="{ height: menuButtonHeight + 'px' }"> </view>
  </view>
</template>

<script>
  export default {
    name: 'HeaderBar',
    data() {
      return {
        statusBarHeight: 0,
        menuButtonHeight: 0,
      }
    },
    methods: {
      getStateBarHeight() {
        let info = uni.getSystemInfoSync()
        this.statusBarHeight = info.statusBarHeight
        console.log(info)
      },
      getMenuButtonHeight() {
        let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
        let paddingSize = menuButtonInfo.top - this.statusBarHeight
        this.menuButtonHeight = menuButtonInfo.bottom - this.statusBarHeight + paddingSize
        console.log(menuButtonInfo)
      },
    },
    created() {
      this.getStateBarHeight()
      // #ifdef MP-WEIXIN
      this.getMenuButtonHeight()
      // #endif
    },
  }
</script>

<style lang="scss"></style>
