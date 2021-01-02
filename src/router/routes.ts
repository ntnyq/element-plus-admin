/**
 * @file Constant routes
 * @module router/routes
 * @author ntnyq <https://github.com/ntnyq>
 */

import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: {
      hidden: true,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/common/redirect.vue'),
      },
    ],
  },
  {
    path: '/not-found',
    name: 'NotFound',
    meta: {
      hidden: true,
    },
    component: () => import('@/views/common/not-found.vue'),
  },

  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard-page/index.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)',
    name: 'Fallback',
    redirect: { name: 'NotFound' },
    meta: {
      hidden: true,
    },
  },
]

export default routes
