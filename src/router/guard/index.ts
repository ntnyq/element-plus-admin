/**
 * @file Router guard
 * @module router/guard
 * @author ntnyq <https://github.com/ntnyq>
 */

import { usePermissionGuard } from './permission'
import type { Router } from 'vue-router'

// Do not change the guard order
export function setupRouterGuard(router: Router): void {
  usePermissionGuard(router)
}
