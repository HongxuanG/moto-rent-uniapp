<template>
  <view class="passwordSetting container">
    <ExpandableHeadBar></ExpandableHeadBar>
    <view class="content">
      <view class="content-title">修改密码</view>
      <view class="body">
        <text class="send-to"> 验证码发送至：173****5534 </text>
        <view class="input-bar container-r">
          <view class="input-code citem">
            <view class="labels">
              <input
                :class="['label', isFocus && index == code.length ? 'active' : '']"
                v-for="(item, index) in 4"
                :key="index"
                :value="code.length >= index + 1 ? code[index] : ''"
                @focus="onFocus"
                :focus="false"
                maxlength="1"
              />
            </view>
            <input
              type="number"
              v-model="code"
              @input="onInput"
              :focus="isFocus"
              maxlength="4"
              class="number-input"
              id="code"
              @blur="onBlur"
            />
          </view>
          <view class="get-code disable" @click="getCode">获取验证码</view>
        </view>
        <view class="button next" hover-class="filter">下一步</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data: () => ({
      code: '',
      isFocus: false,
    }),
    computed: {},
    methods: {
      onInput(e) {
        console.log(e)
        this.code = e.detail.value
      },
      onFocus() {
        console.log('sss')
        this.isFocus = true
      },
      onBlur() {
        this.isFocus = false
      },
      getCode() {},
    },
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>
