export type SystemErrorCode = number | string

/**
 * error
 */
export interface SystemAxiosError {
  code: SystemErrorCode
  message: string
  scope: 'axios'
}
export interface SystemBackendError {
  code: SystemErrorCode
  message: string
  scope: 'backend'
}
export interface SystemRequestError {
  code: SystemErrorCode
  message: string
  scope: 'request'
}
export interface SystemUnknownError {
  code: SystemErrorCode
  message: string
  scope: 'unknown'
}

/**
 * system error
 */
export type SystemError =
  | SystemAxiosError
  | SystemBackendError
  | SystemRequestError
  | SystemUnknownError
