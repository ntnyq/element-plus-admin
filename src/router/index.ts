/**
 * @file App router
 * @module router/index
 * @author ntnyq <https://github.com/ntnyq>
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
