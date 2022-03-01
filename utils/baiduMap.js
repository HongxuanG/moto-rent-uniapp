// 异步引入百度
export function baiduMap(ak) {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(baiduMap)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://api.map.baidu.com/api?v=3.0&ak=${ak}&s=1&callback=init`
    script.onerror = reject
    document.head.appendChild(script)
  })
}
