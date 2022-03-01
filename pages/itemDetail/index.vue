<template>
  <view class="item-detail">
    <ExpandableHeadBar>
      <template #h-mid>
        <view class="">详细信息</view>
      </template>
    </ExpandableHeadBar>
    <view class="content citem">
      <view class="item-card">
        <view class="item-image">
          <u-image width="100%" height="400rpx" :src="storeSrc"></u-image>
        </view>
        <view class="item-body">
          <view class="item-top-left">
            <view class="item-name m-line-1">{{ storeName }}</view>
            <view class="item-info-cell container-flex-start">
              <u-icon
                name="clock-fill"
                color="#ccc"
                labelColor="#ccc"
                :label="businessHours"
                labelPos="right"
                labelSize="14px"
              ></u-icon>
            </view>
            <view class="item-info-cell container-flex-start">
              <u-icon
                name="clock-fill"
                color="#ccc"
                labelColor="#ccc"
                label="店铺号码：867051422"
                labelPos="right"
                labelSize="14px"
              ></u-icon>
            </view>
            <view class="item-info-cell">
              <view style="color: #ccc" class="m-line-2">
                <view style="display: inline-block">
                  <u-icon name="map-fill" color="#ccc"></u-icon>
                </view>
                {{ storeAddress }}</view
              >
            </view>
          </view>
          <view class="item-top-right">
            <view class="scan-btn container-img citem filter" @click="scanOperate">
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
            <view class="navi-btn container-flex-start filter" @click="navigate">
              <u-icon name="map-fill" color="#fff" labelSize="24rpx" label="导航" labelColor="#fff"></u-icon>
            </view>
          </view>
        </view>
        <view class="item-bottom container-r">
          <view class="state" v-if="storeNumber != 0"
            >可停放车位剩余 {{ storeNumber }} 位</view
          >
          <view class="state full" v-else>已停满</view>
        </view>
        <view class="item-tips">
          <view class="m-line-2">
            不在规定位置停车，将按时间扣除押金不在规定位置停车，将按时间扣除押金不在规定位置停车，将按时间扣除押金不在规定位置停车，将按时间扣除押金不在规定位置停车，将按时间扣除押金
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'itemDetail',
    data(){
      return {
        storeSrc: 'https://img2.baidu.com/it/u=3053060571,3383828306&fm=26&fmt=auto',
        storeName: '小红书',
        businessHours: '周一到周日 10:00-23:00',
        storeAddress: '广东省贵州市曹县西门庆大道起风路22号门庆大道起风路22号门庆大道起风路22号',
        storeNumber: 75
      }
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
    },

  }
</script>
<style lang="scss">
@import './index.scss';

</style>