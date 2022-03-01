<template>
  <view class="container-img" style="height: 100%">
    <view class="car-card container-r">
      <view class="left citem">
        <view class="row container-flex-start">
          <text class="car-name">北汽EC200</text><text class="car-tag">电车</text>
        </view>
        <view class="row">
          <text class="price">43元/天<text class="price-tag">（低至）</text></text>
        </view>
      </view>
      <view class="right container-img">
        <view>
          <image
            src="../../static/motor/moto2.png"
            class="carImage img100"
            mode="aspectFit"
          ></image>
          <view class="parameter">2座 | 可续航<text class="strong">205</text>km</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'MotoPanelComp',
    props: {},
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style lang="scss">
  .car-card {
    width: 95vw;
    height: 100%;
    max-width: 100%;
    border-radius: 20rpx;
    padding: 40rpx;
    background-color: $uni-bg-color;
    margin-right: 20rpx;
    &:last-child {
      margin-right: 0;
    }
  }
  .left {
  }
  .right {
  }
  .carImage {
    width: 280rpx;
    height: 160rpx;
  }
  .parameter {
    font-size: 28rpx;
    color: $uni-text-color-grey;
    text-align: center;
  }
  .strong {
    color: $uni-text-color;
    font-size: 36rpx;
    font-weight: 550;
  }
  .row {
    line-height: 2;
    font-size: 45rpx;
  }
  .car-name {
    margin-right: 20rpx;
  }
  .price {
    color: $theme-color;
  }
  .car-tag {
    color: #eeeef5;
    background-color: #91919d;
    padding: 0 20rpx;
    font-size: 24rpx;
    border-radius: $uni-border-radius-oval;
  }
  .price-tag {
    font-size: 30rpx;
    color: $uni-text-color-grey;
  }
</style>
