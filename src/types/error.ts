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

export type SystemErrorCode = number | string
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
 * @pg
 */
export type SystemError =
  | SystemAxiosError
  | SystemBackendError
  | SystemRequestError
  | SystemUnknownError
