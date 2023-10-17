/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_PREFIX: string
  readonly VITE_APP_LOCALE: string
  readonly VITE_API_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
