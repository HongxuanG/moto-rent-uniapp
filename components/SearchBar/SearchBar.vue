<template>
  <view>
    <view class="input-bar">
      <input
        class="input-ele"
        type="text"
        :value="defaultValue"
        :placeholder="placeholder"
        @focus="onFocus"
        @blur="handleBlur"
        @input="handleInput"
        @confirm="onConfirm"
      />
      <text class="input-select iconfont iconsousuo1"></text>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'SearchBar',
    props: {
      value: {
        type: [String, Number],
        default: '',
      },
      placeholder: {
        type: String,
        default: '请输入内容',
      },
    },
    data() {
      return {
        defaultValue: this.value,
      }
    },
    watch: {
      value(nVal, oVal) {
        if (nVal != oVal) {
          this.defalutValue = nVal
        }
      },
    },
    methods: {
      onFocus(e) {
        this.$emit('focus', e.detail.value)
      },
      handleBlur(e) {
        this.$emit('blur', e.detail.value)
      },
      handleInput(e) {
        console.log(e.detail.value)
        let value = e.detail.value.trim()
        this.$emit('input', value)
        this.defaultValue = value
      },
      onConfirm(e) {
        this.$emit('confirm', e.detail.value)
      },
    },
  }
</script>

<style lang="scss">
  .input-bar {
    height: 100%;
    position: relative;
    padding: 10px 0 10px 40px;
    background-color: $uni-bg-color;
    border-radius: 10px;
    box-shadow: rgb(251, 237, 240) 0px 1px 3px 2px;
    .input-select {
      position: absolute;
      padding: 0 10px;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 46rpx;
      font-weight: 550;
      color: $uni-text-color-grey;
    }
    .input-ele {
      caret-color: #e58f2a;
    }
  }
</style>
