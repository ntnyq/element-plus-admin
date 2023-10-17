import type { TInject } from '@/types'

// Common type defs
declare type Maybe<T> = T | undefined
declare type Nullable<T> = T | null
declare type CustomizedHTMLElement<T> = HTMLElement & T
declare type Indexable<T> = Record<string, T>
declare type $TODO = any

declare global {
  interface Window {
    // Extend types for window
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $inject: TInject
  }
}
