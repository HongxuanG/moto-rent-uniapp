<template>
  <view class="search-page">
    <!-- <HeaderBar></HeaderBar> -->
    <ExpandableHeadBar>
      <template #h-right>
        <SearchBar
          class="citem"
          style="width: 250px"
          placeholder="搜索"
          v-model="keyword"
          @input="onInput"
          @confirm="onConfirm"
        ></SearchBar>
      </template>
    </ExpandableHeadBar>
    <view class="content citem">
      <scroll-view
        class="scroll-more"
        id="scrollMore"
        :style="{ height: scrollHeight + 'px' }"
        scroll-y="true"
        @scrolltolower="onScrollToLower"
      >
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        keyword: '',
        scrollHeight: 600,
      }
    },
    methods: {
      onConfirm(value) {
        console.log(value)
      },
      onInput(value) {
        console.log('input', value)
      },
      onScrollToLower() {
        console.log('到底了')
      },
      onItemTap(){
        console.log('1111')
      },
    },
    onLoad() {},
    onReady() {
      const query = uni.createSelectorQuery()
      query
        .select('.content')
        .boundingClientRect((res) => {
          this.scrollHeight = res.height
        })
        .exec()
    },
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>
