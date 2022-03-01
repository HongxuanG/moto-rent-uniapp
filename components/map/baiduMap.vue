<template>
  <view class="baidu_map" id="baiduMap" style="width: 100%; height: 100%"></view>
</template>

<script>
  import { baiduMap } from '../../utils/baiduMap.js'
  export default {
    name: 'baiduMap_H5',
    data() {
      return {
        mapName: 'baidu',
        map: {},
        ak: 'nWRDt1QyDy8morOdrxHhS35AuAAwYduk',
      }
    },
    methods: {
      onMapOperation(op) {
        let actions = {
          setCenter: this.setCenter,
        }
        actions[op.action] && actions[op.action](op)
      },
      setCenter(op) {
        this.map.setCenter(new BMap.Point(op.lng, op.lat))
      },
      // 初始化百度地图
      initBaiduMap() {
        baiduMap(this.ak).then((baiduMap) => {
          let map = new BMap.Map('baiduMap', {
            coordsType: 3,
          })
          var point = new BMap.Point(116.39742, 39.909) // 创建点坐标
          map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
          map.enableScrollWheelZoom(true)
          this.map = map
        })
      },
      // 监听全局的自定义事件
      listenEvent() {
        uni.$on('map-operation', this.onMapOperation)
      },
      // 移除全局的自定义事件
      offEvent() {
        uni.$off('map-operation', this.onMapOperation)
      },
    },
    mounted() {
      this.listenEvent()
      this.initBaiduMap()
    },
    beforeDestroy() {
      this.offEvent()
    },
  }
</script>

<style></style>
