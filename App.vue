<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions(['initApp']),
    },
    onLaunch: function () {
      console.log('App Launch')
    },
    onShow: function () {
      this.initApp()
      console.log('App Show')
    },
    onHide: function () {
      console.log('App Hide')
    },
  }
</script>

<style lang="scss">
  /*每个页面公共css */
  @import '@/uni_modules/uview-ui/index.scss';
  @import url('./css/iconfont/iconfont.css');
  @import './css/global.scss';
</style>
