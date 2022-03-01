<template>
  <view>
    <view
      class="list"
      :style="{ height: contentHeight + 'px' }"
      ref="contentRef"
      @scroll="scrollList"
    >
      <view class="scroll-bar" id="scrollBar" :style="{ height: scrollBarHeight }">
        <!-- 整个长列表的总长度 -->
      </view>
      <view
        class="scroll-list"
        ref="scrollListRef"
        :style="{ transform: `translate3d(0,${offset}px,0)` }"
      >
        <!-- 可视区的列表 -->
        <view class="item" ref="container" v-for="(item, index) in showList" :key="index">
          <slot :items="item"></slot>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        startIndex: 0,
        endIndex: 10,
        offset: 0,
        // scrollBarHeight: 0,
      }
    },
    props: {
      // 原始数据
      originList: {
        type: Array,
        default: () => [],
      },
      // 单个item的高度
      listItemHeight: {
        type: Number,
        default: 0,
      },
      // 容器的高度
      contentHeight: {
        type: Number,
        default: 0,
      },
    },
    watch: {},
    computed: {
      showList() {
        console.log('startIndex', this.startIndex)
        console.log('endIndex', this.endIndex)
        console.log('originList', this.originList)
        return this.originList.slice(this.startIndex, this.endIndex)
      },
      scrollBarHeight() {
        console.log(this.listItemHeight, this.originList.length)
        return this.listItemHeight * this.originList.length + 'px'
      },
      pageLimit() {
        let resLimit = Math.ceil(this.contentHeight / this.listItemHeight)
        this.endIndex = resLimit + 1
        console.log('pageLimit的endIndex', this.endIndex)
        return resLimit
      },
    },
    methods: {
      scrollList(e) {
        let currentScrollTop = e.target.scrollTop
        this.startIndex = Math.floor(currentScrollTop / this.listItemHeight)
        this.endIndex = this.startIndex + this.pageLimit + 1
        this.offset = this.startIndex * this.listItemHeight
      },
    },
    created() {},
    mounted() {
      
      console.log('contentHeight', this.contentHeight)
      console.log('listItemHeight', this.listItemHeight)
      //   this.pageLimit = Math.ceil(this.contentHeight / this.listItemHeight)
      //   console.log(this.pageLimit)
      //   let query = uni.createSelectorQuery().in(this)
      //   this.scrollBarHeight = this.listItemHeight * this.originList.length + 'px'
      //   console.log('scrollBarHeight', this.scrollBarHeight)
      // this.$refs.scrollBar.style.height = this.listItemHeight * this.originList.length + 'px'
      // + 1是为了多加载一个，让他滚动的时候看起来没有空位
      //   this.endIndex = this.pageLimit + 1
      this.$emit('scrollBottom')
    },
  }
</script>

<style lang="scss" scoped>
  .list {
    overflow: auto;
    position: relative;
  }
  .scroll-list {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transform: translate3d(0, 0, 0);
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>
