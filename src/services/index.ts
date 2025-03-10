import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestConfig, RequestInterceptors } from './types'

const defaultConfig: RequestConfig = {
  timeout: 30_000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
}

export class HTTPClient {
  instance: AxiosInstance
  interceptors?: RequestInterceptors

  private static pendingRequests = []

  private static isRefreshing = false

  private static initConfig: RequestConfig = {}

  constructor(config: RequestConfig = {}) {
    this.instance = axios.create({ ...defaultConfig, ...config })

    this.interceptors = config.interceptors

    this.useInstanceInterceptors()
    this.useSharedInterceptors()
  }

  useInstanceInterceptors() {
    this.instance.interceptors.request.use(
      // @ts-expect-error FIXME: types
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )
  }

  useSharedInterceptors() {
    this.instance.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return err
      },
    )

    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        return err
      },
    )
  }

  request<T = any>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then(res => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch(err => {
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }

  put<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
}

export const http = new HTTPClient()
