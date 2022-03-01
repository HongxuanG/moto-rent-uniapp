<template>
  <view class="myTrail">
    <ExpandableHeadBar>
      <template #h-mid>
        <view class="switch-title container-r" @click="switchTitle">
          <view :class="['title-item', currentIndex == '1' ? 'active' : '']" data-index="1">
            我的行程
          </view>
          <view :class="['title-item', currentIndex == '2' ? 'active' : '']" data-index="2">
            我的违章
          </view>
        </view>
      </template>
      <template #h-right>
        <view class="head-right-icon">
          <text
            class="iconfont icondayinji-cuxiantiao-fill"
            style="font-size: 40rpx; padding-left: 20rpx"
          ></text>
        </view>
      </template>
    </ExpandableHeadBar>
    <view class="content citem">
      <view class=""> </view>
      <view class="noData">
        <view class="noData-text"> -暂无数据- </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        currentIndex: 1,
      }
    },
    methods: {
      switchTitle(e) {
        let index = e.target.dataset.index
        if (!index || index == this.currentIndex) return
        this.currentIndex = index
      },
    },
    onLoad() {},
    onShow() {},
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>
