import { ROUTE_NAME, ROUTE_PATH } from '@/constants/route'
import { errorRoutes } from '@/router/modules/error'
import { defineRoutes } from '@/utils/define'

// @unocss-include

export const routes = defineRoutes([
  {
    path: '/login',
    name: ROUTE_NAME.login,
    component: () => import('@/views/user/login/index.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/redirect',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: true,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        name: ROUTE_NAME.redirect,
        component: () => import('@/views/common/redirect.vue'),
      },
    ],
  },
  {
    path: ROUTE_PATH.root,
    name: ROUTE_NAME.root,
    component: () => import('@/layout/index.vue'),
    redirect: { name: ROUTE_NAME.dashboard },
    meta: {
      title: '首页',
      breadcrumb: false,
    },
    children: [
      {
        path: ROUTE_PATH.dashboard,
        name: ROUTE_NAME.dashboard,
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '首页',
          icon: 'icon-ri:home-3-fill',
        },
      },
    ],
  },

  ...errorRoutes,
])
