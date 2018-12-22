import Layout from '@/views/layout/Layout'

const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/Login')
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
        meta: { icon: 'dashboard', title: '仪表盘' }
      }
    ]
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
        component: () => import('@/views/guide'),
        meta: { icon: 'guide', title: '导航' }
      }
    ]
  },

  {
    path: '/home',
    name: 'Home',
    component: Layout,
    redirect: 'index',
    meta: { icon: 'example', title: '示例' },
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        component: () => import('@/views/Home'),
        meta: { title: '主页' }
      },
      {
        path: 'test',
        name: 'HomeTest',
        component: () => import('@/views/Home/test'),
        meta: { title: '测试' }
      }
    ]
  }
]

export default routes
