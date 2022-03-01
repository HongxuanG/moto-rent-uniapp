<template>
  <view>
    <HeaderBar></HeaderBar>
    <view class="top-bar">
      <view class="container container-r" :style="{ 'padding-bottom': height + 'px' }">
        <view class="back-icon" @click="back()">
          <text class="iconfont iconfanhui"></text>
        </view>
        <slot name="r-icon"></slot>
        <view id="moveBox" class="title-text" :style="{ top: top, left: left }">
          <text>{{ title }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'ActiveHeader',
    props: ['title', 'scrollTop'],
    data() {
      return {
        height: 50,
        top: false,
        left: false,
      }
    },
    watch: {
      scrollTop(val, oldVal) {},
    },
    methods: {},
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted')
      const query = uni.createSelectorQuery().in(this)
      query
        .select('#moveBox')
        .boundingClientRect((data) => {
          this.top = data.top
          this.left = data.left
          console.log(this.top, this.left)
        })
        .exec()
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
    beforeDestroy() {
      console.log('beforeDestroy')
    },
    destroyed() {
      console.log('destroyed')
    },
  }
</script>

<style lang="scss">
  $topBar-height: 120rpx;
  .top-bar {
    width: 100%;
    .container {
      width: 90%;
      height: $topBar-height;
      position: relative;
      box-sizing: content-box;
      margin: 0 auto;
    }
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
    .title-text {
      position: absolute;
      font-size: 50rpx;
      top: $topBar-height;
      left: 0;
    }
  }
  .boxshadow {
    box-shadow: 0 3px 5px 0px #d3d3d3;
  }
</style>
