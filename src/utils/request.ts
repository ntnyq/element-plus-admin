/**
 * @file HTTP request
 * @module utils/request
 * @author ntnyq <https://github.com/ntnyq>
 */

import axios from 'axios'
import { HTTP_REQUEST_TIMEOUT_MILLISECONDS } from '@/constants/request'
import { ENV } from '@/constants/config'
import { tokenStorage } from '@/utils/storage'
import type { AxiosInstance } from 'axios'

export enum HTTPStatus {
  SUCCESS = 1,
  ERROR = 0,
}

interface HTTPResult<T = $TODO> {
  status: HTTPStatus.SUCCESS
  message: string
  result: T
}

const instance = axios.create({
  baseURL: ENV.BASE_URL,
  timeout: HTTP_REQUEST_TIMEOUT_MILLISECONDS,
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  },
})

instance.interceptors.request.use(
  config => {
    if (tokenStorage.get()) {
      config.headers!.Authorization = tokenStorage.get()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  res => {
    const { status, data = {} } = res.data || {}

    if (status === undefined) {
      return Promise.reject(new Error('Missed status in response'))
    }

    switch (status) {
      case '':
        return data

      default:
        return data
    }
  },
  error => {
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      console.log('timeout')
    }
    return Promise.reject(error)
  },
)

const service = {
  get: <T = $TODO>(url: string, params: Parameters<AxiosInstance['get']>): Promise<HTTPResult<T>> =>
    axios.get(url, { params }),
  post: <T = $TODO>(
    url: string,
    params: Parameters<AxiosInstance['post']>,
    options?: $TODO,
  ): Promise<HTTPResult<T>> => axios.post(url, params, options),
  put: <T = $TODO>(url: string, params: Parameters<AxiosInstance['put']>): Promise<HTTPResult<T>> =>
    axios.put(url, params),
  delete: <T = $TODO>(
    url: string,
    params: Parameters<AxiosInstance['delete']>,
  ): Promise<HTTPResult<T>> => axios.delete(url, { params }),
  head: <T = $TODO>(
    url: string,
    params: Parameters<AxiosInstance['head']>,
  ): Promise<HTTPResult<T>> => axios.head(url, { params }),
  options: <T = $TODO>(
    url: string,
    params: Parameters<AxiosInstance['options']>,
  ): Promise<HTTPResult<T>> => axios.options(url, { params }),
  patch: <T = $TODO>(
    url: string,
    params: Parameters<AxiosInstance['patch']>,
  ): Promise<HTTPResult<T>> => axios.patch(url, { params }),
}

export default service
