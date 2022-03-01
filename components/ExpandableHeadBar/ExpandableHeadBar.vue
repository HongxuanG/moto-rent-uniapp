<template>
  <view>
    <HeaderBar></HeaderBar>
    <view class="top-bar container-r">
      <view class="back-icon" @click="back()">
        <text class="iconfont iconfanhui"></text>
      </view>
      <view class="top-bar-ctr">
        <slot name="h-mid"></slot>
      </view>
      <slot name="h-right"></slot>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'ExpandableHeadBar',
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .top-bar {
    width: 90%;
    position: relative;
    margin: 0 auto;
    min-height: 120rpx;
    padding: 20rpx 0;
    .back-icon {
      padding-right: 40rpx;
      .iconfont {
        font-size: 46rpx;
        font-weight: 800;
        background-image: -webkit-linear-gradient(left, red, #fd8403);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .top-bar-ctr {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 28rpx;
      color: #333;
    }
  }
</style>
