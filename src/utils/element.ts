/**
 * @file Element utils
 * @module utils/element
 * @author ntnyq <https://github.com/ntnyq>
 */

import type { VNode } from 'vue'
import type { MessageHandler, MessageOptions } from 'element-plus'

enum ELMessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export const message = {
  success(message: string | VNode, options?: MessageOptions): MessageHandler {
    return ElMessage({
      type: ELMessageType.SUCCESS,
      message,
      ...options,
    })
  },
  error(message: string | VNode, options?: MessageOptions): MessageHandler {
    return ElMessage({
      type: ELMessageType.ERROR,
      message,
      ...options,
    })
  },
  warning(message: string | VNode, options?: MessageOptions): MessageHandler {
    return ElMessage({
      type: ELMessageType.WARNING,
      message,
      ...options,
    })
  },
  info(message: string | VNode, options?: MessageOptions): MessageHandler {
    return ElMessage({
      type: ELMessageType.INFO,
      message,
      ...options,
    })
  },
}
