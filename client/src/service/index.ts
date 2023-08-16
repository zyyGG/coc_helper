import Request from './request'
import { AxiosResponse } from 'axios'

import type { RequestConfig } from './request/types'

// 返回的数据接口，整体接口
export interface YWZResponse<T> {
  code: number,
  message: string,
  time: number,
  data: T
}

// 重写返回类型
interface YWZRequestConfig<T, R> extends RequestConfig<YWZResponse<R>> {
  data?: T
}

const request = new Request({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 60 * 5,
  headers: {
    token: import.meta.env.VITE_TEST_TOKEN
  },
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    },
  },
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {YWZRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const ywzRequest = <D = any, T = any>(config: YWZRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<YWZResponse<T>>(config)
}
// // 取消请求
// export const cancelRequest = (url: string | string[]) => {
//   return request.cancelRequest(url)
// }
// // 取消全部请求
// export const cancelAllRequest = () => {
//   return request.cancelAllRequest()
// }

export default ywzRequest
