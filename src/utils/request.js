import axios from 'axios'
import Qs from 'qs'
import { Notification } from 'element-ui'
import { API_HOST } from '@/config'
import { getToken } from '@/utils/auth'

// 若有多个业务域名，则创建多个实例
const instance = axios.create({
  baseURL: API_HOST || process.env.VUE_APP_API_HOST,
  timeout: process.env.VUE_APP_REQUEST_TIMEOUT || 1e4
})

/**
 * 实例请求拦截函数
 * @param  {Object} config 请求配置信息
 * @return {Object | Promise}        请求配置信息或错误信息
 */
instance.interceptors.request.use(
  config => {
    // Set token here
    config.headers['TICKET'] = getToken()

    // transform post data to queryString
    if (config.method === 'post' && config.headers['Content-Type'] !== 'multipart/form-data') {
      config.data = Qs.stringify(config.data)
    }

    // 文件上传
    // 只需要在Post请求时候将opts的headers属性设置为
    // { 'Content-Type': 'multipart/form-data' }
    // 即可。例：
    // const uploadImage = params => request('post', '/upload', params, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    //
    // 下面以使用FormData的file字段名来保存文件举例。
    // 若为单图上传，则将File类型保存到字段名`file`中即可。
    // 若为多图上传，则需将File类型的数据数组保存在`file[]`形式的字段内。
    if (config.headers['Content-Type'] === 'multipart/form-data') {
      const { data } = config
      let fd = new FormData()

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          if (key.endsWith('[]')) {
            data[key].forEach(item => {
              fd.append(key, item)
            })
          } else {
            fd.append(key, data[key])
          }
        }
      }

      config.data = fd
    }

    return config
  },
  err => {
    return Promise.reject(err)
  }
)

/**
 * 实例响应拦截函数
 * @param  {Object} res 请求响应信息
 * @return {Object | Promise}     请求响应信息或错误信息
 */
instance.interceptors.response.use(
  res => {
    const { data } = res

    if (data.code && data.code === '200') {
      return data
    } else if (data.code && data.code === '401') {
      window.location.href = '/path_to_your/login.html'
      return Promise.reject(data)
    } else {
      Notification.error(data.msg || '接口返回出错!')
      return Promise.reject(data)
    }
  },
  err => {
    if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
      Notification.error('接口请求超时，请刷新!')
    } else {
      Notification.error(err.msg || '接口返回出错!')
    }

    return Promise.reject(err)
  }
)

/**
 * 封装后导出的数据请求函数
 * @param  {String} method HTTP请求类型
 * @param  {String} path   请求路径
 * @param  {Object} params 请求参数
 * @param  {Object} opts   请求配置参数
 * @return {Promise}       异步Promise
 */
export default function (method, path, params = {}, opts = {}) {
  method = method.toLowerCase()

  switch (method) {
    case 'get':
      return instance.get(path, { params })
    case 'post':
      return instance.post(path, params, opts)
    case 'delete':
      return instance.delete(path, { params })
    case 'put':
      return instance.put(path, params)
    default:
      return Promise.reject(new Error(`未知的method---${method}`))
  }
}
