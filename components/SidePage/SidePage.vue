<template>
  <view>
    <view class="sidePage-container container-r">
      <view class="login-state">
        <view class="default" @tap="goPersonalCenter">
          <view class="head-frame">
            <image src="../../static/img/person.png" class="default-head" mode=""></image>
          </view>
          <text class="default-text" v-if="!isLogin">登录/注册</text>
          <text class="default-text" v-if="isLogin">
            <text class="h-name">{{ realName }}</text>
            <text class="h-phone">{{ phoneCode }}</text>
          </text>
        </view>
        <view class="menu">
          <view class="menu-item" data-url="/pages/myTrail/index" @tap="goPage">
            <text class="iconfont iconditu"></text>
            <text class="menu-item-text">我的行程</text>
          </view>
          <view class="menu-item" data-url="/pages/myWallet/index" @tap="goPage">
            <text class="iconfont icontianchongxing-"></text>
            <text class="menu-item-text">我的钱包</text>
          </view>
          <view class="menu-item">
            <text class="iconfont iconyouhuiquan"></text>
            <text class="menu-item-text">优惠券</text>
          </view>
          <view class="menu-item">
            <text class="iconfont iconxiaoxizhongxin"></text>
            <text class="menu-item-text">消息中心</text>
          </view>
          <view class="menu-item">
            <text class="iconfont iconkefu"></text>
            <text class="menu-item-text">客服中心</text>
          </view>
          <view class="menu-item" data-url="/pages/about/index" @tap="goPage">
            <text class="iconfont iconguanyu"></text>
            <text class="menu-item-text">关于我们</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'my-sidePage',
    data() {
      return {}
    },
    computed: {
      ...mapState(['isLogin', 'realName', 'phoneCode']),
    },
    methods: {
      goPage(e) {
        console.log(e)
        let url = e.currentTarget.dataset.url
        console.log(url)
        uni.navigateTo({
          url: url,
          success: () => {
            console.log('成功跳转')
          },
          fail: (err) => {
            console.log('失败跳转', err)
          },
        })
      },
      goPersonalCenter() {
        if (!this.isLogin) {
          this.nav('/pages/login/index')
        } else {
          this.nav('/pages/personalCenter/index')
        }
      },
    },
  }
</script>

<style lang="scss">
  .sidePage-container {
    width: 200vw;
    height: 100vh;
    padding: 0 40rpx;
    background-color: #19181b;
    .login-state {
      .default {
        padding: 20rpx 0;
      }
      .menu {
      }
    }
  }
  .default {
    color: #fff;
    display: flex;
    align-items: center;
    .head-frame {
      width: 120rpx;
      height: 120rpx;
      background-color: #fff;
      border-radius: 50%;
      margin-right: 20rpx;
      overflow: hidden;
      .default-head {
        width: 100%;
        height: 100%;
      }
    }
    .default-text {
      font-size: 35rpx;
    }
    .h-name {
      font-weight: 550;
      display: block;
    }
    .h-phone {
      font-size: 28rpx;
      display: block;
    }
  }
  .menu {
    color: #fff;
    .menu-item {
      padding: 20rpx 0;
      border-radius: $uni-border-radius-oval;
      .iconfont {
        margin-right: 40rpx;
        margin-left: 20rpx;
      }
      .menu-item-text {
        font-size: 30rpx;
      }
      &:hover {
        background-color: $theme-color;
      }
    }
  }
</style>
