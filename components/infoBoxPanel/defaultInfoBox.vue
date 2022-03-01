<template>
  <view class="d-info-box">
    <view class="d-info-wrapper">
      <view class="box--header container-r">
        <view class="header-cell-start">
          <u-image width="180rpx" height="180rpx" radius="5px" :src="basicData.storeSrc"></u-image>
        </view>
        <view class="header-cell-middle container-l">
          <view class="middle-top m-line-1">{{ basicData.storeName }}</view>
          <view class="middle-center container-flex-start">
            <u-icon
              name="clock-fill"
              color="#ccc"
              labelColor="#ccc"
              :label="basicData.businessHours"
              labelPos="right"
              labelSize="14px"
            ></u-icon>
          </view>
          <view class="middle-bottom">
            <view style="color: #ccc" class="m-line-2">
              <view style="display: inline-block">
                <u-icon name="map-fill" color="#ccc"></u-icon>
              </view>
              {{ basicData.storeAddress }}</view
            >
          </view>
        </view>
        <view class="header-cell-end container-img filter" @click="scanOperate">
          <u-icon
            name="scan"
            size="30px"
            space="5px"
            label="借还"
            labelPos="bottom"
            labelSize="16px"
            :bold="true"
          ></u-icon>
        </view>
      </view>
      <view class="box--body container-r">
        <view class="state" v-if="basicData.storeNumber != 0"
          >可停放车位剩余 {{ basicData.storeNumber }} 位</view
        >
        <view class="state" v-else>已停满</view>
        <view class="navi-btn container-flex-start filter" @click="navigate">
          <u-icon name="map-fill" color="#fff" label="导航" labelColor="#fff"></u-icon>
        </view>
      </view>
    </view>
    <view class="box--footer container-r" @click="goDetail">
      <view class="cell-l">
        <u--text type="info" :lines="2" size="12px" :text="basicData.storeTips"></u--text>
      </view>
      <view class="cell-r">
        <u-icon name="arrow-right" labelSize="14px" label="详情" labelPos="left"></u-icon>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'defaultInfoBox',
    props: {
      basicData: {
        type: Object,
        default: {},
      },
    },
    data() {
      return {}
    },
    methods: {
      scanOperate() {
        // #ifndef H5
        uni.scanCode({
          onlyFromCamera: true,
          success: (res) => {
            console.log(res)
          },
          fail: (err) => {
            console.log(err)
          },
        })
        // #endif
      },
      // 导航
      navigate() {
        uni.$emit('map-operation', {
          action: 'chooseLocation',
          latitude: this.basicData.storeLat,
          longitude: this.basicData.storeLng,
        })
      },
      goDetail(){
        uni.navigateTo({
          url: '/pages/itemDetail/index'
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .d-info-box {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 3%;
    z-index: 100;
    width: 95%;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #fff;
    .d-info-wrapper {
      padding: 20rpx;
    }
    .box--header {
      height: 180rpx;
      margin-bottom: 20rpx;
      .header-cell-start {
      }
      .header-cell-middle {
        align-items: unset;
        margin-left: 20rpx;
        height: 100%;
      }
      .header-cell-end {
        width: 60px;
        height: 100%;
        padding: 30rpx;
        border-radius: 10rpx;
        box-sizing: border-box;
        background-color: #f9fafc;
        color: #888989;
      }
    }
    .box--body {
      .state {
        color: $theme-color;
        font-size: 14px;
      }
      .navi-btn {
        display: inline-block;
        padding: 10rpx 12rpx;
        border-radius: 3px;
        background-color: $theme-color;
        color: white;
      }
    }
    .box--footer {
      border-top: 1px solid#f2f2f2;
      padding: 20rpx;
      .cell-l {
      }
      .cell-r {
      }
    }
  }
  .middle-bottom {
    align-items: unset;
    font-size: 14px;
  }
</style>
