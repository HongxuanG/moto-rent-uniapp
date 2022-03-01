import Vue from 'vue'
import App from './App'
import './css/global.scss'
import './plugins/mixins.js'
import store from './store/index.js'
import uView from '@/uni_modules/uview-ui'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(uView)

App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})
app.$mount()
