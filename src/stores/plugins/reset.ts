import { cloneDeep } from 'es-toolkit'
import type { PiniaPluginContext } from 'pinia'

export function resetSetupStore(context: PiniaPluginContext) {
  const setupSyntaxIds = ['setup-store']

  if (setupSyntaxIds.includes(context.store.$id)) {
    const { $state } = context.store
    const defaultState = cloneDeep($state)

    context.store.$reset = () => {
      context.store.$patch(defaultState)
    }
  }
}
