import { ROUTE_NAME, ROUTE_PATH } from '@/constants/route'
import { defineRoutes } from '@/utils/define'

export const routes = defineRoutes([
  {
    path: '/login',
    name: ROUTE_NAME.login,
    component: () => import('@/views/user/login/index.vue'),
    meta: {},
  },
  {
    path: ROUTE_PATH.root,
    name: ROUTE_NAME.root,
    component: () => import('@/layout/index.vue'),
    redirect: { name: ROUTE_NAME.dashboard },
    meta: {},
    children: [
      {
        path: ROUTE_PATH.dashboard,
        name: ROUTE_NAME.dashboard,
        component: () => import('@/views/dashboard/index.vue'),
        meta: {},
      },
    ],
  },
])
