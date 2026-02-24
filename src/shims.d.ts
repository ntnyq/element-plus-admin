export {}

declare module 'vue' {
  export interface ComponentCustomProperties {}

  // https://github.com/vuejs/language-tools/issues/465
  // Export interface GlobalDirectives {}
  // Export interface GlobalComponents {}
}
