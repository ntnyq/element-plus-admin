/**
 * @file HTTP request
 * @module utils/request
 * @author ntnyq <https://github.com/ntnyq>
 */

import type { AxiosInstance } from 'axios'
import axios from 'axios'
// import store from '@/store'
import * as storage from '@/utils/storage'
import { HTTP_REQUEST_TIMEOUT_MILLISECONDS } from '@/constants/request'

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
  baseURL: process.env.VUE_APP_API_HOST || `/`,
  timeout: HTTP_REQUEST_TIMEOUT_MILLISECONDS,
})

instance.interceptors.request.use(config => {
  if (storage.getToken()) {
    (config.headers as $TODO).Authorization = storage.getToken()
  }

  (config.headers as $TODO)[`X-Requested-With`] = `XMLHttpRequest`

  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  const { status, data = {} } = res.data || {}

  if (status === undefined) {
    return Promise.reject(new Error(`Missed status in response`))
  }

  switch (status) {
    case ``:
      return data

    default:
      return data
  }
}, error => {
  if (error.code === `ECONNABORTED` && error.message.includes(`timeout`)) {
    console.log(1)
  }

  return Promise.reject(error)
})

const service = {
  get: <T = $TODO> (url: string, params: Parameters<AxiosInstance['get']>): Promise<HTTPResult<T>> => axios.get(url, { params }),
  post: <T = $TODO> (url: string, params: Parameters<AxiosInstance['post']>, options?: $TODO): Promise<HTTPResult<T>> => axios.post(url, params, options),
  put: <T = $TODO> (url: string, params: Parameters<AxiosInstance['put']>): Promise<HTTPResult<T>> => axios.put(url, params),
  delete: <T = $TODO> (url: string, params: Parameters<AxiosInstance['delete']>): Promise<HTTPResult<T>> => axios.delete(url, { params }),
  head: <T = $TODO> (url: string, params: Parameters<AxiosInstance['head']>): Promise<HTTPResult<T>> => axios.head(url, { params }),
  options: <T = $TODO> (url: string, params: Parameters<AxiosInstance['options']>): Promise<HTTPResult<T>> => axios.options(url, { params }),
  patch: <T = $TODO> (url: string, params: Parameters<AxiosInstance['patch']>): Promise<HTTPResult<T>> => axios.patch(url, { params }),
}

export default service
