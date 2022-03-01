<template>
  <view>
    <ActiveHeader title="我的钱包">
      <template #r-icon>
        <view class="r-icon" hover-class="filter" @click="accountBill">
          <text class="iconfont iconzhangdan" style="font-size: inherit"></text>
        </view>
      </template>
    </ActiveHeader>
    <view class="content">
      <view class="account-money">
        <view class="box-top money-icon">
          <text class="iconfont iconrenminbi"></text>
        </view>
        <view class="box-mid money-number"> 0.00 </view>
        <view class="box-btm container-r">
          <view class="">
            <text style="margin-right: 20rpx">总金额</text>
            <text class="iconfont iconwenhao" style="font-size: 34rpx"></text>
          </view>
          <view class="">
            <button type="default" class="charge" hover-class="filter">充值</button>
          </view>
        </view>
      </view>
      <view class="account-box">
        <view class="cell-row container-r">
          <view class="l-title">
            <text class="icon" style="border-color: #7e82ff"></text
            ><text class="balance">本金余额</text>
          </view>
          <view class="r-content"> <text class="number">0.00</text>元 </view>
        </view>
        <view class="cell-row container-r">
          <view class="l-title">
            <text class="icon" style="border-color: #fc78a2"></text
            ><text class="balance">赠送余额</text>
          </view>
          <view class="r-content"> <text class="number">0.00</text>元 </view>
        </view>
        <view class="cell-row container-r">
          <view class="l-title">
            <text class="icon" style="border-color: #fdcf17"></text
            ><text class="balance">充值卡余额</text>
          </view>
          <view class="r-content"> <text class="number">0.00</text>元 </view>
        </view>
      </view>
      <view class="main-box container-r">
        <view class="main-box-l"> <text class="iconfont iconzhima"></text>微信支付分 </view>
        <view class="main-box-r">
          申请免押<text class="iconfont iconjiantou" style="margin-left: 20rpx"></text>
        </view>
      </view>
      <view class="other-box">
        <view class="cell-row container-r">
          <view class="l-title">
            <text class="icon" style="border-color: #82e1f8"></text
            ><text class="balance">缴纳押金</text
            ><text class="iconfont iconwenhao" style="margin-left: 20rpx"></text>
          </view>
          <view class="r-content">
            去充值<text class="iconfont iconjiantou" style="margin-left: 20rpx"></text>
          </view>
        </view>
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
      // 前往账单页
      accountBill() {
        console.log('ss')
        uni.navigateTo({
          url: '/pages/bill/index',
        })
      },
    },
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>
