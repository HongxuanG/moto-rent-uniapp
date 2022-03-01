<template>
  <view>
    <view class="page login">
      <HeaderBar></HeaderBar>

      <view class="l-wrap">
        <view class="w-title">
          <text>手机号登录</text>
        </view>
        <view class="w-form">
          <view class="f-input">
            <view class="i-item">
              <input type="text" placeholder="请输入手机号" v-model="form.mobile" />
            </view>
            <view class="i-item">
              <input type="password" placeholder="请输入验证码" v-model="form.code" />
              <text class="btn btn-disable" v-if="time">{{ time }}S后重发</text>
              <text class="btn" v-else @tap="sendCode">获取验证码</text>
            </view>
          </view>
          <view class="f-btn" @click="login">
            <text>登录</text>
          </view>
        </view>
        <view class="w-service">
          <text>点击登录即同意</text>
          <text @tap="nav('/pages/h5/index')">《用户手册》</text>
        </view>
        <!-- #ifdef H5 -->
        <view class="w-third">
          <view class="t-title">
            <text>第三方账号登录：</text>
          </view>
          <view class="t-entry">
            <view class="e-item">
              <text class="iconfont" style="color: #f56467">&#xe642;</text>
            </view>
            <view class="e-item">
              <text class="iconfont" style="color: #07c160">&#xe620;</text>
              <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doWeixinLogin"></button>
            </view>
            <view class="e-item">
              <text class="iconfont" style="color: #23a0f0">&#xe666;</text>
            </view>
          </view>
        </view>
        <!-- #endif -->
        <!-- #ifdef MP-WEIXIN -->
        <view class="w-third">
          <view class="t-entry">
            <view class="e-item">
              <text class="iconfont" style="color: #07c160">&#xe620;</text>
              <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doWeixinLogin"></button>
            </view>
          </view>
          <text class="quick-login container-img">快速登录</text>
        </view>
        <!-- #endif -->
        <view class="b-bottom container-img">
          <view class="l-back" @click="goback">
            <text class="iconfont" style="margin-right: 10rpx">&#xe607;</text>
            <text class="">返回</text>
          </view>
        </view>
      </view>
      <u-toast ref="uToast" />
    </view>
  </view>
</template>

<script>
  import { isLogin, doLogin } from '../../utils/api'
  export default {
    data() {
      return {
        time: 0,
        form: {
          mobile: '',
          code: '',
        },
      }
    },
    methods: {
      // 点击登录
      login() {
        this.basicValidate()
        if (!this.$u.test.code(this.form.code, 6)) {
          console.log(11)
          return this.$refs.uToast.show({
            message: '验证码格式有误',
          })
        }
        // 编写手机登录的代码
        doLogin().then((res) => {
          
          uni.setStorage({
            key: 'userInfo',
            data: res.errMsg,
          })
        })
      },
      doWeixinLogin() {},
      sendCode() {
        this.basicValidate()
        let timer = null
        this.time = 60
        timer = setInterval((_) => {
          if (this.time <= 0) {
            clearInterval(timer)
            timer = null
            return
          }
          this.time = this.time - 1
        }, 1000)
      },
      goback() {
        uni.navigateBack({
          delta: 1,
        })
      },
      // 基础校验
      basicValidate(){
        if (!this.form.mobile) {
          return this.$refs.uToast.show({
            message: '手机号必填',
          })
        }
        if (!this.$u.test.mobile(this.form.mobile)) {
          return this.$refs.uToast.show({
            message: '手机号格式有误',
          })
        }
      }
    },
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>
