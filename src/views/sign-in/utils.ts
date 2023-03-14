import i18n from '@/i18n'
import { message } from '@/utils/element'

export function showSuccessTip() {
  const { t } = i18n.global
  message.success(t(`tip.signInSuccess`))
}
