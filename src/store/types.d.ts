/**
 * @file Global state types
 * @module store/types
 * @author ntnyq <https://github.com/ntnyq>
 */

export type AppState = {
  language: string
  theme: string
  sidebar: {
    isOpen: boolean
    withoutAnimation: boolean
  }
}

export type UserState = {
  token: string
}

export type ViewState = {
  visitedViews: string[]
  cachedViews: string[]
}

export type RouterState = {
  routes: string[]
}

export type GlobalState = {
  app: AppState,
  user: UserState,
  view: ViewState,
  router: RouterState
}
