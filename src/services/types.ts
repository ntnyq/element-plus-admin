import type { AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * Axios request config
 */
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
  showLoading?: boolean
}

export interface RequestInterceptors<T = AxiosResponse> {
  /**
   * Request interceptor
   *
   */
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  /**
   * Response interceptor
   */
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
