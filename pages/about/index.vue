<template>
  <view class="content">
    <view
      class="goback container-img"
      @click="goback()"
      :style="{ top: 'calc(40rpx + ' + capsuleTop + 'px)' }"
    >
      <text class="goback-icon iconfont iconfanhui"></text>
    </view>
    <!-- 背景 -->
    <view class="logo">
      <!-- logo -->
      <view class="logo-container">
        <image class="logo-img" src="../../static/img/logo.png" mode=""></image>
        <text class="app-name">多米智行</text>
      </view>
    </view>
    <!--  -->
    <view class="about-us">
      <view class="cell-item container-r">
        <text class="cell-title">微信公众号</text>
        <text class="cell-value">多米智联</text>
      </view>
      <view class="cell-item container-r">
        <text class="cell-title">联系电话</text>
        <text class="cell-value">1234512345</text>
      </view>
      <view class="cell-item container-r">
        <text class="cell-title">我们的官网</text>
        <text class="cell-value">www.ztinfo.net</text>
      </view>
    </view>
    <view class="copyright">
      <view> Copyright@广州市正唐信息技术有限公司 </view>
      <view> All rights reserved </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        capsuleTop: 0,
      }
    },
    onLoad() {},
    methods: {
      goback() {
        uni.navigateBack({
          delta: 1,
        })
      },
    },
    onLoad() {
      //#ifdef MP-WEIXIN
      uni.getSystemInfo({
        success: (res) => {
          console.log(res)
          console.log(res.statusBarHeight)
          this.capsuleTop = res.statusBarHeight
        },
      })
      //#endif
    },
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>
