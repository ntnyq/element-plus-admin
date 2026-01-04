import { ERROR_SHOW_DURATION, NO_SHOW_ERROR_CODE } from '@/constants/error'
import { waitFor } from '@/utils'
import type { SystemError } from '@/types'

const errorMessageStack = new Map<string | number, string>()

export function hasErrorMessage(error: SystemError) {
  return errorMessageStack.has(error.code)
}
export function addErrorMessage(error: SystemError) {
  if (hasErrorMessage(error)) {
    return
  }
  errorMessageStack.set(error.code, error.message)
}
export function removeErrorMessage(error: SystemError) {
  errorMessageStack.delete(error.code)
}

export interface ShowErrorMessageOptions {
  console?: boolean
}

export async function showErrorMessage(
  error: SystemError,
  options: ShowErrorMessageOptions = {},
) {
  if (
    !error.message
    || NO_SHOW_ERROR_CODE.includes(error.code)
    || hasErrorMessage(error)
  ) {
    return
  }

  addErrorMessage(error)

  if (options.console) {
    console.warn(error.code, error.message)
  }

  await waitFor(ERROR_SHOW_DURATION)
  removeErrorMessage(error)
}
