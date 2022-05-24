/// <reference types="vue/macros-global" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Common type defs
declare type Maybe<T> = T | undefined
declare type Nullable<T> = T | null
declare type CustomizedHTMLElement<T> = HTMLElement & T
declare type Indexable<T> = Record<string, T>
declare type $TODO = any
