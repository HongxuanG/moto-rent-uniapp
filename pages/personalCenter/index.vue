<template>
  <view class="personal-center container">
    <ActiveHeader title="个人中心"></ActiveHeader>
    <view class="citem container">
      <view class="content citem" id="content">
        <view class="message-card">
          <view class="mc-info">
            <view class="username">张三1qqq</view>
            <text class="info">173 2456 1234</text>
          </view>
          <view class="mc-bottom container-r">
            <text class="time">2021-04-29注册</text>
            <button type="default" class="btn">未认证</button>
          </view>
        </view>
        <view class="section">
          <view class="section-item container-r" @click="passwordSetting">
            <view class="cell-title container-flex-start">
              <text class="iconfont" style="color: #ff6974">&#xe684;</text>
              <text>密码设置</text>
            </view>
            <view class="arrows">
              <text class="iconfont iconjiantou"></text>
            </view>
          </view>
          <view class="section-item container-r" @click="phoneNumberSetting">
            <view class="cell-title container-flex-start">
              <text class="iconfont" style="color: #78adfa">&#xe63a;</text>
              <text>修改手机号</text>
            </view>
            <view class="arrows">
              <text class="iconfont iconjiantou"></text>
            </view>
          </view>
        </view>
      </view>
      <view class="bottom-button container-img" hover-class="filter" @click="logout">
        <view class="checkout-accrount"> 退出账号 </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      logout() {
        // 提交mutation
        this.$store.commit('SET_IS_LOGIN', false)
        uni.removeStorage({ key: 'userInfo' })
        setTimeout((_) => {
          this.back()
        }, 1000)
      },
      phoneNumberSetting() {
        uni.navigateTo({
          url: '/pages/passwordSetting/index',
        })
      },
      passwordSetting() {
        uni.navigateTo({
          url: '/pages/passwordSetting/index',
        })
      },
    },
    onLoad() {},
    mounted() {},
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>
