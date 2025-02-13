import { defineRoutes } from '@/utils/define'

// @unocss-include

export const errorRoutes = defineRoutes([
  {
    path: '/error',
    redirect: '/error/403',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '异常页面',
      icon: 'icon-ri:error-warning-line',
    },
    children: [
      {
        path: '/error/403',
        name: '403',
        component: () => import('@/views/error/403.vue'),
        meta: {
          title: '403',
        },
      },
      {
        path: '/error/404',
        name: '404',
        component: () => import('@/views/error/404.vue'),
        meta: {
          title: '404',
        },
      },
      {
        path: '/error/500',
        name: '500',
        component: () => import('@/views/error/500.vue'),
        meta: {
          title: '500',
        },
      },
    ],
  },
])
