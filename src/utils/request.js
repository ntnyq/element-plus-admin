import axios from 'axios'
import Qs from 'qs'
import { Notification } from 'element-ui'
import router from '@router'
import { getToken, removeToken } from '@utils/auth'

const { VUE_APP_API_HOST, VUE_APP_REQUEST_TIMEOUT = 1e4 } = process.env

const instance = axios.create({
  baseURL: VUE_APP_API_HOST,
  timeout: VUE_APP_REQUEST_TIMEOUT
})

instance.interceptors.request.use(
  req => {
    // Set token here
    req.headers['TICKET'] = getToken()

    // transform post data to queryString
    if (req.method === 'post' && req.headers['Content-Type'] !== 'multipart/form-data') {
      req.data = Qs.stringify(req.data)
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
    if (req.headers['Content-Type'] === 'multipart/form-data') {
      const { data } = req
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

      req.data = fd
    }

    return req
  },
  err => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  res => {
    const { data } = res

    if (data.code && data.code === 200) {
      return data
    } else if (data.code && data.code === 401) {
      Notification.error('用户登陆过期，请重新登陆')
      removeToken()
      setTimeout(() => {
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }, 1e3)
      // window.location.href = '/path_to_your/login.html'
      // window.location.reload()
    } else {
      Notification.error(data.msg || '接口返回状态码异常!')
      return Promise.reject(new Error(data.msg || '接口返回状态码异常'))
    }
  },
  err => {
    if (err.code === 'ECONNABORTED' && err.message.includes('timeout')) {
      Notification.error('接口请求超时，请刷新!')
    } else {
      Notification.error(err.msg || '接口服务器异常!')
    }

    return Promise.reject(err)
  }
)

export default function (path, { method = 'POST', params = {}, options = {} } = {}) {
  method = method.toLowerCase()
  switch (method) {
    case 'GET':
      return instance.get(path, { params })

    case 'POST':
      return instance.post(path, params, options)

    case 'DELETE':
      return instance.delete(path, { params })

    case 'PUT':
      return instance.put(path, params)

    default:
      return Promise.reject(new Error(`未知的method--${method}`))
  }
}
