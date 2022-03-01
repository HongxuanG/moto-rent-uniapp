<template>
  <view class="bill">
    <ActiveHeader id="activeHeader" title="交易明细"></ActiveHeader>
    <view class="content citem" id="content">
      <!-- <visibleScroll
        :originList="indexList"
        :listItemHeight="VSlistItemHeight"
        :contentHeight="VScontentHeight"
      >
        <template v-slot:default="slotProp">
          <view class="bill-card">
            <view class="bill-detail container-r">
              <view class="bill-number">订单号 {{ slotProp.item.billNumber }}</view>
              <view class="bill-amount">-￥{{ slotProp.item.billAmount }}</view>
            </view>
            <view class="bill-type">{{ slotProp.item.billType }}</view>
            <view class="bill-time">{{ slotProp.item.billTime }}</view>
          </view>
        </template>
      </visibleScroll> -->
      <scroll-view scroll-y="true" class="scroll-Y" @scroll="scrollList">
        <view class="scroll-bar" id="scrollBar" :style="{ height: scrollBarHeight }">
          <!-- 整个长列表的总长度 -->
        </view>
        <view
          class="scroll-list"
          ref="scrollListRef"
          :style="{ transform: `translate3d(0,${ offset }px,0)` }"
        >
          <!-- 可视区的列表 -->
          <view class="bill-card" ref="container" v-for="(item, index) in showList" :key="index">
            <view class="bill-detail container-r">
              <view class="bill-number">订单号 {{ item.billNumber }}</view>
              <view class="bill-amount">-￥{{ item.billAmount }}</view>
            </view>
            <view class="bill-type">{{ item.billType }}</view>
            <view class="bill-time">{{ item.billTime }}</view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  import { queryTransactionDetail } from '../../utils/api'
  import visibleScroll from '../../components/public/visibleScroll.vue'
  export default {
    name: 'bill',
    data() {
      return {
        startIndex: 0,
        endIndex: 10,
        offset: 0,
        indexList: [],
        VSlistItemHeight: 102,
        VScontentHeight: 0,
        pageLimit: 20,
        scrollBarHeight: 0,
      }
    },
    components: {
      visibleScroll,
    },
    computed: {
      showList() {
        return this.indexList.slice(this.startIndex, this.endIndex)
      },
    },
    methods: {
      scrollList(e) {
        console.log(e.target.scrollTop)
        const currentScrollTop = e.target.scrollTop
        this.startIndex = Math.floor(currentScrollTop / this.VSlistItemHeight)
        this.endIndex = this.startIndex + this.pageLimit + 1
        this.offset = this.startIndex * this.VSlistItemHeight
      },
      // 请求账单明细
      updateTransactionDetail() {
        queryTransactionDetail().then((res) => {
          this.indexList = res.errMsg
          console.log(this.indexList)
        })
      },
    },
    onLoad() {},
    onShow() {
      this.updateTransactionDetail()
      this.$nextTick(() => {
        let query = uni.createSelectorQuery()
        query.select('#content').boundingClientRect()
        query.select('.bill-card').boundingClientRect()

        query.exec((data) => {
          this.VScontentHeight = data[0].height
          this.VSlistItemHeight = data[1].height
          this.pageLimit = Math.ceil(this.VScontentHeight / this.VSlistItemHeight)
          this.scrollBarHeight = this.VSlistItemHeight * this.indexList.length + 'px'
          console.log(this.VSlistItemHeight, this.VScontentHeight, this.scrollBarHeight)
        })
      })
    },
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>
