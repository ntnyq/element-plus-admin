/**
 * @file Dark composable
 */

import { withPrefix } from '@/utils'

export const isDark = useDark({
  storageKey: withPrefix('theme'),
})

export function toggleDark(event?: MouseEvent) {
  if (!event) {
    isDark.value = !isDark.value
  }
}
