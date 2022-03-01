import { HttpTask } from './http.task'

export class HttpService {
  #options = {} // 存储服务配置
  constructor(opts = {}) {
    const { timeout = 0, interceptor } = opts
    const { request = (cfg) => cfg, response = (res) => res } = interceptor || {}
    this.#options = {
      timeout: timeout || 0,
      interceptor: {
        request,
        response,
      },
    }
  }
  /**
   * @params {string} method GET POST PUT DELETE CONNECT HEAD OPTIONS TRACE
   */
  __factory(method) {
    return (url, data, config) => {
      return new Promise((resolve, reject) => {
        const { timeout, interceptor } = this.#options
        // 作为请求拦截器的参数传入 interceptor.request
        const requestParams = interceptor.request({
          ...config,
          url,
          method,
          timeout,
          data,
          header: {},
        })
        // DELETE 请求参数处理
        if (method === 'DELETE') {
          const params = Object.entries(data)
            .map(([key, val]) => `${key}=${val}`)
            .join('&')
          requestParams.url += requestParams.url.includes('?') ? params : `?${params}`
          requestParams.data = undefined
        }
        const task = uni.request({
          ...requestParams,
          data: requestParams.data || undefined,
          success(res) {
            resolve(
              interceptor.response({
                ...res,
                success: true,
              })
            )
          },
          fail(err) {
            reject(
              interceptor.response({
                ...err,
                success: false,
              })
            )
          },
          complete(final) {},
        })
        if (config.taskId) {
          HttpTask.TASKS[config.taskId] = task
        }
      })
    }
  }
  get = this.__factory('GET')

  post = this.__factory('POST')

  del = this.__factory('DELETE')
}
