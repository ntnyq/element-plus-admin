/**
 * @file Element utils
 * @module utils/element
 * @author ntnyq <https://github.com/ntnyq>
 */

import type { VNode } from 'vue'
import type { MessageHandle, MessageOptions } from 'element-plus/lib'

enum ELMessageType {
  SUCCESS = `success`,
  ERROR = `error`,
  INFO = `info`,
  WARNING = `warning`,
}
type EMessageContent = string | VNode
type EIMessageOptions = Partial<MessageOptions>

export const message = {
  success (message: EMessageContent, options: EIMessageOptions): MessageHandle {
    return ElMessage({
      type: ELMessageType.SUCCESS,
      message,
      ...options,
    })
  },
  error (message: EMessageContent, options?: EIMessageOptions): MessageHandle {
    return ElMessage({
      type: ELMessageType.ERROR,
      message,
      ...options,
    })
  },
  warning (message: EMessageContent, options?: EIMessageOptions): MessageHandle {
    return ElMessage({
      type: ELMessageType.WARNING,
      message,
      ...options,
    })
  },
  info (message: EMessageContent, options?: EIMessageOptions): MessageHandle {
    return ElMessage({
      type: ELMessageType.INFO,
      message,
      ...options,
    })
  },
}
