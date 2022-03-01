import Vue from 'vue'

Vue.mixin({
  filters: {
    amount(n) {
      if (!n) {
        return 0.0
      }
      return n.toFixed(2)
    },
  },
  methods: {
    red: (url) => {
      uni.redirectTo({
        url: url,
      })
    },
    nav: (url) => {
      uni.navigateTo({
        url: url,
      })
    },
    back: () => {
      uni.navigateBack({
        delta: 1,
      })
    },
    swi: (url) => {
      uni.switchTab({
        url: url,
      })
    },
    toast(s) {
      uni.showToast({
        title: s,
        icon: 'none',
        duration: 2000,
      })
    },
  },
  onShareAppMessage(res) {
    return {
      title: '塔可开源，致力于企业级新零售解决方案',
      path: '/pages/index/index',
    }
  },
  onShareTimeline(res) {
    return {
      title: '塔可开源，致力于企业级新零售解决方案',
      path: '/pages/index/index',
    }
  },
})
