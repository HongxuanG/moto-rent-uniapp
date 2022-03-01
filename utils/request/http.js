import { HttpService } from "./http.service";
// 导出 HttpService的实例对象
export default new HttpService({
  timeout: 6 * 1000,
  interceptor: {
    // 请求拦截
    request(config) {
      config.header.Authorization = uni.getStorageSync('token')
      return config
    },
    // 响应拦截
    response(event) {
      // 请求错误处理
      if (!event.success) {
        uni.showToast({
          title: event.errMsg,
          icon: 'none'
        });
        // 如果返回值为空，则请求的 catch 不会触发
        return event;
      }
      // 请求成功处理
      const {
        statusCode,
        data: {
          code,
          data,
          msg = '业务异常',
        }
      } = event;
      switch (statusCode) {
        case 200:
          switch (code) {
            case 200:
              return Promise.resolve(data);
            default:
              uni.showToast({
                title: msg,
                icon: 'none'
              });
          }
          return Promise.reject(msg);
        case 401:
          uni.showToast({
            title: 'token 已失效，请重新登录！',
            icon: 'none'
          });
          // other code
          break;
        default:
          uni.showToast({
            title: `response exception: ${statusCode}`,
            icon: 'none'
          });
          return Promise.reject(event);
      }
    }
  }
})