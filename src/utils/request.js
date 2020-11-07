import axios from 'axios'
import Qs from 'qs'
import {
  Message,
  MessageBox,
} from 'element-ui'
import store from '@/store'
import {
  getToken,
} from '@/utils/auth'
import {
  CODE_SUCCESS,
  CODE_NO_AUTH,
  CODE_NOT_LOGIN,
  CODE_WRONG_PARAMS,
} from '@/constants/http-status'

const {
  VUE_APP_API_HOST,
  VUE_APP_REQUEST_TIMEOUT = 1e4,
} = process.env

const instance = axios.create({
  baseURL: VUE_APP_API_HOST,
  timeout: VUE_APP_REQUEST_TIMEOUT,
  withCredentials: true,
})

instance.interceptors.request.use(
  req => {
    // Set token here
    req.headers.TICKET = getToken()

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
      const fd = new FormData()

      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
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
  },
)

instance.interceptors.response.use(
  res => {
    const { data = {} } = res

    switch (data.code) {
      case CODE_SUCCESS:
        return data.data

      case CODE_NO_AUTH:
        Message.warning({ message: data.msg || '当前用户无操作权限' })

        return Promise.reject(new Error(data.msg || '当前用户无操作权限'))

      case CODE_NOT_LOGIN:
        MessageBox.confirm(
          '您的登录状态已失效，您可以选择重新登录，或者停留在此页面',
          '提示',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning',
          },
        )
          .then(async () => {
            await store.dispatch('logoutFE')
            window.location.reload()
          })

        return Promise.reject(new Error(data.msg || '身份验证失败，需重新登录'))

      case CODE_WRONG_PARAMS:
        Message.error({ message: data.msg || '请求参数有误' })

        return Promise.reject(new Error(data.msg || '请求参数有误'))

      default:
        Message.error({ message: data.msg || '未知的状态码' })

        return Promise.reject(new Error(data.msg || '未知的状态码'))
    }
  },
  err => {
    if (err.code === 'ECONNABORTED' && err.message.includes('timeout')) {
      Message.error({ message: '接口响应超时，请重试' })
    } else {
      Message.error({ message: err.message || '接口响应出错' })
    }
    return Promise.reject(err)
  },
)

export default function (path, {
  method = 'POST',
  params = {},
  options = {},
} = {}) {
  method = method.toUpperCase()

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
