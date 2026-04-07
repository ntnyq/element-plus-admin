/**
 * @file elementPlus utils
 */

import { ElButton, ElDialog } from 'element-plus'
import { setupApp } from '@/setup'
import { waitFor } from '@/utils'
import type { AnyFn } from '@ntnyq/utils'
import type { ButtonType, DialogProps } from 'element-plus'

export interface ShowModalOptions {
  dialogProps?: Partial<DialogProps>
  showActions?: boolean
  confirmButtonText?: string
  confirmButtonType?: ButtonType
  cancelButtonText?: string
  cancelButtonType?: ButtonType
  onConfirm?: AnyFn
  unmountDelay?: number
}

const DEFAULT_DIALOG_PROPS: Partial<DialogProps> = {
  closeOnClickModal: false,
  lockScroll: false,
}

export function showModal(options: ShowModalOptions = {}) {
  const {
    showActions = true,
    confirmButtonText = '确认',
    cancelButtonText = '取消',
    confirmButtonType = 'primary',
    cancelButtonType = 'default',
    dialogProps = {},
  } = options

  const isDialogShow = ref(true)
  const isLoading = ref(false)
  const instanceRef = shallowRef()

  const dialog = () =>
    h(
      ElDialog,
      {
        ...DEFAULT_DIALOG_PROPS,
        ...dialogProps,
        modelValue: isDialogShow.value,
      },
      {
        default: () => h('div', { ref: instanceRef }, 'hello world'),
        footer: () =>
          showActions
            ? h(
                'div',
                {},
                {
                  default: () => [
                    h(
                      ElButton,
                      {
                        onClick() {
                          unmount()
                        },
                        type: cancelButtonType,
                      },
                      {
                        default: () => cancelButtonText,
                      },
                    ),
                    h(
                      ElButton,
                      {
                        async onClick() {
                          isLoading.value = true
                          try {
                            await options.onConfirm?.()
                            unmount()
                          } catch (err) {
                            console.log(err)
                          } finally {
                            isLoading.value = false
                          }
                        },
                        loading: isLoading.value,
                        type: confirmButtonType,
                      },
                      {
                        default: () => confirmButtonText,
                      },
                    ),
                  ],
                },
              )
            : null,
      },
    )

  const app = createApp(dialog)
  const wrapperEl = document.createElement('div')

  setupApp(app)

  document.body.append(wrapperEl)
  app.mount(wrapperEl)

  async function unmount() {
    isDialogShow.value = false
    await waitFor(options.unmountDelay ?? 1000)
    app.unmount()
    wrapperEl.remove()
  }

  return {
    isLoading,
    instanceRef,
    unmount,
  }
}
