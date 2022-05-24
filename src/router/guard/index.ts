/**
 * @file Router guard
 * @module router/guard
 * @author ntnyq <https://github.com/ntnyq>
 */

import type { Router } from 'vue-router'
import { usePermissionGuard } from './permission'

// Do not change the guard order
export function setupRouterGuard (router: Router): void {
  usePermissionGuard(router)
}
