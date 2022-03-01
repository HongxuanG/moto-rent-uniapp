<template>
  <view class="info-box">
    <view class="top-bar container-r">
      <view class="top-left-box container-r" @tap="onswitchButton">
        <view
          data-type="0"
          :class="['switch-button', 'container-img', switchIndex === '0' ? 'active' : '']"
        >
          立即用车
        </view>
        <view
          data-type="1"
          :class="['switch-button', 'container-img', switchIndex === '1' ? 'active' : '']"
        >
          预约用车
        </view>
      </view>
      <view class="top-right-box container-img">
        <text class="current-page">{{ currentIndex + 1 }}<text class="total-page">/2</text></text>
      </view>
    </view>
    <view class="content-bar container-flex-start">
      <swiper
        style="width: 100%"
        :interval="3000"
        :duration="500"
        :current="currentIndex"
        @change="oncurrentChange"
      >
        <swiper-item>
          <MotoPanelComp></MotoPanelComp>
        </swiper-item>
        <swiper-item>
          <MotoPanelComp></MotoPanelComp>
        </swiper-item>
      </swiper>
    </view>
    <view class="bottom-bar container-r">
      <view class="icon-text container-img">
        <view class="frame container-img" @click="navigate">
          <text class="iconfont icondaohangguanli01"></text>
        </view>
      </view>
      <view class="slide-text citem">
        <view class="title"> 体育中心总站旁停车场 </view>
        <view class="description text-loop">
          体育中心总站旁停车场（大学城内环东路208号，车场内通道禁止停放，否则堵车需支付调度费用）555
        </view>
      </view>
      <view class="distance-text">
        <view class="oval"> 867.2m </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'motoInfoBox',
    data() {
      return {
        currentIndex: 0,
        switchIndex: '0',
      }
    },
    methods: {
      onswitchButton(e) {
        let index = e.target.dataset.type
        if (!index) return
        this.switchIndex = index
      },
      // 改变 current 时触发
      oncurrentChange(e) {
        this.currentIndex = e.detail.current
      },
    },
  }
</script>

<style lang="scss" scoped>
  .info-box {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    width: 100vw;
    box-sizing: border-box;
    background-color: transparent;
    .top-bar {
      margin-bottom: 10px;
      padding: 0 20rpx;

      .top-left-box {
        border-radius: $uni-border-radius-oval;
        background-color: $uni-bg-color;
        padding: 15rpx;
      }
      .switch-button {
        border-radius: $uni-border-radius-oval;
        font-size: 30rpx;
        color: $uni-text-color;
        padding: 15rpx 30rpx;
        background-color: $uni-bg-color;
        margin-right: 20rpx;
        &:last-child {
          margin-right: 0;
        }
      }
      .active {
        background-color: $theme-color;
        color: $uni-text-color-inverse;
      }
      .top-right-box {
        padding: 20rpx;
        background-color: $uni-bg-color;
        border-radius: $uni-border-radius-circle;
      }
      .current-page {
        font-size: 30rpx;
        color: $uni-text-color;
      }
      .total-page {
        color: $uni-text-color-grey;
        font-size: 24rpx;
      }
    }
    .content-bar {
      margin-bottom: 20rpx;
      box-sizing: border-box;
    }
    .bottom-bar {
      border-radius: $uni-border-radius-oval;
      background-color: $uni-bg-color;
      margin: 0 20rpx;
      margin-bottom: 15rpx;
      .icon-text {
        position: relative;
        z-index: 10;
        font-size: 26rpx;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 5px 0 0.5px 1px rgba(255, 255, 225, 1);
      }
      .iconfont {
        color: #fff;
        padding: 10rpx;
      }
      .frame {
        margin: 12rpx;
        border-radius: 50%;
        background-color: $theme-color;
      }
      .oval {
        margin: 12rpx;
        border-radius: $uni-border-radius-oval;
      }
      .slide-text {
        padding: 10rpx 0;
        font-size: 26rpx;
        background-color: #fff;
        overflow: hidden;
        white-space: nowrap;
      }
      .title {
        color: $uni-text-color;
      }
      .description {
        display: inline-block;
        color: $uni-text-color-grey;
        font-size: 24rpx;
      }
      .distance-text {
        position: relative;
        z-index: 10;
        background-color: #fff;
        color: $uni-text-color-grey;
        box-shadow: -5px 0 0.5px 1.5px rgba(255, 255, 225, 1);
        border-radius: $uni-border-radius-oval;
      }
    }
  }
</style>
