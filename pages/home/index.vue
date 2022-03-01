<template>
  <view class="body">
    <view :class="['page-body', showSidePage ? 'popout' : '']">
      <!-- #ifdef H5 -->
      <baiduMap></baiduMap>
      <!-- #endif -->
      <!-- #ifdef MP-WEIXIN -->
      <qqMap mapName="home" @emitMarkerTap="onEmitMarkerTap" @emitMapTap="onEmitMapTap"></qqMap>
      <view class="map-center-part">
        <view class="mcp-prompt-box" @click="goSearch">
          <u-icon
            name="arrow-right"
            size="14px"
            labelSize="14px"
            label="附近店铺"
            labelPos="left"
          ></u-icon>
        </view>
        <image src="../../static/home/flag.png" class="mcp-flag-frame"></image>
      </view>
      <!-- #endif -->
      <view class="icon personal container-img" @tap="openMenu">
        <text class="iconfont icongerenzhongxin"></text>
      </view>
      <view class="icon search container-img" @tap="goSearch">
        <text class="iconfont iconsousuo"></text>
      </view>
      <view class="icon me container-img" @tap="showMe">
        <text class="iconfont icongenzongdingwei"></text>
      </view>

      <view class="bottom-box">
        <!-- <motoInfoBox></motoInfoBox> -->
        <defaultInfoBox :basic-data="basicData" v-show="showInfoBox"></defaultInfoBox>
        <view class="scan-btn container-img filter" @click="scanOperate">
          <u-icon
            name="scan"
            size="28"
            color="#ff5500"
            label="扫码借还"
            labelSize="20px"
            labelColor="#fff"
          ></u-icon>
        </view>
      </view>

      <!-- 遮罩层 -->
      <view class="mask-layer" v-show="showSidePage" @tap="openMenu"></view>
    </view>

    <view :class="['side-page', showSidePage ? 'transformX' : '']">
      <SidePage></SidePage>
    </view>
  </view>
</template>

<script>
  import baiduMap from '@/components/map/baiduMap.vue'
  import qqMap from '@/components/map/qqMap.vue'
  import motoInfoBox from '@/components/infoBoxPanel/motoInfoBox'
  import defaultInfoBox from '@/components/infoBoxPanel/defaultInfoBox'

  export default {
    data() {
      return {
        showSidePage: false,
        basicData: {
          storeLat: 11,
          storeLng: 11,
          storeSrc: 'https://img2.baidu.com/it/u=3053060571,3383828306&fm=26&fmt=auto',
          storeName: '生产队饭堂',
          businessHours: '周一到周日 10:00-23:00',
          storeAddress: '广东省贵州市曹县西门庆大道起风路22号门庆大道起风路22号门庆大道起风路22号',
          storeNumber: 75,
          storeTips: '不在规定位置停车，将按时间扣除押金',
        },
        showInfoBox: false,
        presentDevice: { deviceImei: -1, index: -1, preIndex: -1 },
      }
    },
    components: {
      baiduMap,
      qqMap,
      motoInfoBox,
      defaultInfoBox,
    },
    methods: {
      onEmitMarkerTap(e) {
        this.showInfoBox = true
        console.log('emitMarkerTap', e)
        this.basicData.storeLat = e.latitude
        this.basicData.storeLng = e.longitude
      },
      onEmitMapTap() {
        this.showInfoBox = false
      },
      openMenu() {
        this.showSidePage = !this.showSidePage
      },
      goSearch() {
        uni.navigateTo({
          url: '/pages/searchLocation/index',
        })
      },
      showMe() {
        console.log('1111')
        uni.$emit('map-operation', {
          action: 'location',
        })
      },
      // 扫码
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
    },
    onShow() {},
  }
</script>

<style lang="scss">
  @import './index.scss';
  .map-center-part {
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translateX(-50%);

    .mcp-prompt-box {
      position: relative;
      padding: 10rpx 20rpx;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0px 2px 5px 1px #d2d2d2;
      border: 1px solid #f2f2f2;
      &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 0;
        border: 8rpx solid transparent;
        border-left-color: #fff;
        border-bottom-color: #fff;
        transform: translateX(-50%) rotate(-45deg);
      }
    }
    .mcp-flag-frame {
      width: 60rpx;
      height: 70rpx;
      position: relative;
      left: 45%;
      top: 7px;
    }
  }
  .bottom-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    padding: 10rpx 20rpx 20rpx;
    justify-content: space-around;
    margin-bottom: env(safe-area-inset-bottom);
    background-color: transparent;
  }
  .scan-btn {
    width: 95%;
    padding: 20rpx;
    box-sizing: border-box;
    font-size: 28rpx;
    background-color: #3f3f3f;
    border-radius: 5px;
    color: #fff;
    font-family: 550;
  }
</style>
