<template>
  <map
    :id="'qqMap_' + mapName"
    :latitude="latitude"
    :longitude="longitude"
    scale="16"
    style="width: 100%; height: 100vh"
    min-scale="3"
    max-scale="20"
    :markers="markers"
    :polyline="polyline"
    show-location
    @markertap="markerTap"
    @tap.self="mapTap"
    @regionchange="mapRegionchange"
  ></map>
</template>

<script>
  export default {
    name: 'qqMap_wx',
    props: {
      mapName: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        latitude: 23.048614,
        longitude: 113.38906,
        markers: [
          {
            id: 0,
            latitude: 23.048614,
            longitude: 113.38906,
            iconPath: '/static/svg/shop.svg',
            rotate: 0,
            width: 28,
            height: 36,
          },
          {
            id: 1,
            latitude: 23.05306157006161,
            longitude: 113.3874641829741,
            iconPath: '/static/svg/shop.svg',
            rotate: 0,
            width: 28,
            height: 36,
          },
          {
            id: 2,
            latitude: 23.047326357540886,
            longitude: 113.38985349635595,
            iconPath: '/static/svg/shop.svg',
            rotate: 0,
            width: 28,
            height: 36,
          },
          {
            id: 3,
            latitude: 23.047326357540886,
            longitude: 113.38845951624126,
            iconPath: '/static/svg/shop.svg',
            rotate: 0,
            width: 28,
            height: 36,
          },
          {
            id: 4,
            latitude: 23.048451195327136,
            longitude: 113.38785903248254,
            iconPath: '/static/svg/shop.svg',
            rotate: 0,
            width: 28,
            height: 36,
          },
        ],
        polyline: [],
        mapObject: {},
      }
    },
    methods: {
      initMap() {},
      addMarker() {},
      markerTap(e) {
        console.log(e)
        console.log('点击marker')
        let index = e.detail.markerId
        let { latitude, longitude } = this.markers[index]
        this.$emit('emitMarkerTap', this.markers[index])
      },
      mapTap(e) {
        console.log(e)
        console.log('点击地图')
        this.$emit('emitMapTap', e.detail)
      },
      // 拖动地图，地图视野改变
      mapRegionchange(e) {
        console.log('地图视野改变', e)
        if (e.type !== 'end') return
        let { latitude, longitude } = e.detail.centerLocation
        console.log('当前中心', latitude, longitude)
      },
      location() {
        uni.getLocation({
          type: 'gcj02',
          success: (res) => {
            console.log(res)
            this.setCenter({ latitude: res.latitude, longitude: res.longitude })
          },
          fail: (err) => {
            console.log(err)
          },
        })
      },
      chooseLocation({ latitude, longitude }) {
        console.log(latitude,longitude)
        uni.chooseLocation({
          latitude,
          longitude,
          success: (res) => {
            console.log(res)
          },
          fail: (err) => {
            console.log(err)
          },
        })
      },
      setCenter(res) {
        this.latitude = res.latitude
        this.longitude = res.longitude
        this.mapObject.moveToLocation({
          longitude: this.longitude,
          latitude: this.latitude,
        })
      },
      getCenter() {
        return {
          latitude: this.latitude,
          longitude: this.longitude,
        }
      },
      onMapOperation(op) {
        let actions = {
          setCenter: this.setCenter,
          getCenter: this.getCenter,
          location: this.location,
          chooseLocation: this.chooseLocation,
        }

        return actions[op.action] && actions[op.action](op)
      },
      listenEvent() {
        uni.$on('map-operation', this.onMapOperation)
      },
      offEvent() {
        uni.$off('map-operation', this.onMapOperation)
      },
    },
    created() {},
    mounted() {
      const map = uni.createMapContext('qqMap_' + this.mapName, this)
      this.mapObject = map
      this.listenEvent()
    },
    beforeDestroy() {
      this.offEvent()
    },
  }
</script>

<style></style>
