import type { PiniaPluginContext } from 'pinia'

export function resetSetupStore(context: PiniaPluginContext) {
  const setupSyntaxIds = ['setup-store']

  if (setupSyntaxIds.includes(context.store.$id)) {
    const { $state } = context.store

    // TODO: use deepClone for better compatibility
    const defaultState = structuredClone($state)

    context.store.$reset = () => {
      context.store.$patch(defaultState)
    }
  }
}
