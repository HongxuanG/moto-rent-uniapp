<template>
  <view class="result-item" @click="onSearchItemTap">
    <view class="left">
      <view class="icon-background container-img">
        <text class="iconfont icondingwei1"></text>
      </view>
    </view>
    <view class="right">
      <view class="top container-r">
        <view class="location container-flex-start">
          <view class="location-text">{{ itemName }}</view>
        </view>
        <view class="distance">{{ distance }}</view>
      </view>
      <view class="bottom">
        <view class="text">
          {{itemAddress}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'SearchItem',
    props: {

    },
    data() {
      return {
        itemName: '体育中心总站旁停车场',
        itemAddress: '体育中心总站旁停车场（大学城内环东路208号，车场内通道禁止停放，否则堵车许支付调度费用）555',
        distance: '0.9km'
      }
    },
    methods: {
      onSearchItemTap(){

      }
    },
  }
</script>

<style lang="scss" scoped>
  .result-item {
    display: flex;
    padding: 30rpx 40rpx;
    margin-bottom: 20rpx;
    border: 1px solid #ccc;
    border-radius: 10px;
    .left {
      .icon-background {
        width: 60rpx;
        height: 60rpx;
        margin-right: 20rpx;
        background: -webkit-linear-gradient(top, red, #fd8403);
        border-radius: 50%;
        box-shadow: rgb(158, 141, 129) 0px 0px 1px 1px;
        .iconfont {
          color: #e9e0e1;
          font-size: 34rpx;
          text-shadow: 0px 1px 2px #333;
        }
      }
    }
    .right {
      flex: 1;
      .top {
      }
      .bottom {
        padding-top: 20rpx;
        .text {
          color: $uni-text-color-grey;
          font-family: $theme-font-family;
        }
      }
    }
  }
</style>
