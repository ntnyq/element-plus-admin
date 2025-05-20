import path from 'node:path'

export const resolve = (...args: string[]): string =>
  path.resolve(import.meta.dirname, '..', ...args)
