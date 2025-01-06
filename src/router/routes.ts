import { routeName, routePath } from '@/constants/route'
import { defineRoutes } from '@/utils/define'

export const routes = defineRoutes([
  {
    path: routePath.root,
    name: routeName.root,
    component: () => import('@/layout/index.vue'),
    redirect: { name: routeName.home },
    meta: {},
    children: [
      {
        path: '/home',
        name: routeName.home,
        component: () => import('@/views/home/index.vue'),
        meta: {},
      },
    ],
  },
])
