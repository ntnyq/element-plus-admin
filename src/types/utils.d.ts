export type AnyFn<T = any, R = any> = (...args: T[]) => R
export type Arrayable<T> = T | T[]
export type Awaitable<T> = Promise<T> | T
export type MayBe<T> = T | undefined
export type Nullable<T> = T | null
