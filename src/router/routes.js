import Layout from '@/views/layout/Layout'

const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/Login'),
  },

  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard'),
        meta: { icon: 'dashboard', title: 'Dashboard' },
      },
    ],
  },

  {
    path: '/guide',
    name: 'Guide',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'GuideIndex',
        component: () => import('@/views/Common/Guide'),
        meta: { icon: 'guide', title: 'Guide' },
      },
    ],
  },

  {
    path: '/icons',
    name: 'Icons',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'IconsIndex',
        component: () => import('@/views/Icons'),
        meta: { icon: 'icon', title: 'Icons' },
      },
    ],
  },

  {
    path: '/home',
    name: 'Home',
    component: Layout,
    redirect: 'index',
    meta: { icon: 'example', title: 'Example' },
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        component: () => import('@/views/Home'),
        meta: { title: 'HomePage' },
      },
    ],
  },
]

export default routes
