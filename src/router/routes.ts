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
    meta: {
      hidden: true,
    },
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/common/redirect.vue'),
      },
    ],
  },

  {
    path: '/not-found',
    meta: {
      hidden: true,
    },
    component: () => import('@/views/common/not-found.vue'),
  },

  {
    path: '/sign-in',
    name: 'SignIn',
    meta: {
      hidden: true,
    },
    component: () => import('@/views/sign-in/index.vue'),
  },

  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {},
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)',
    redirect: '/not-found',
    meta: {
      hidden: true,
    },
  },
]

export default routes
