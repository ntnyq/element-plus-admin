import Layout from '@views/layout/Layout'

const loadView = viewPath => () => import(`@views/${viewPath}`)

const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: loadView('Login')
  },

  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: loadView('Dashboard'),
        meta: { icon: 'dashboard', title: 'Dashboard' }
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
        component: loadView('Common/Guide'),
        meta: { icon: 'guide', title: 'Guide' }
      }
    ]
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
        component: loadView('Icons'),
        meta: { icon: 'icon', title: 'Icons' }
      }
    ]
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
        component: loadView('Home'),
        meta: { title: 'HomePage' }
      },
      {
        path: 'test',
        name: 'HomeTest',
        component: loadView('Home/test'),
        meta: { title: 'Test' }
      }
    ]
  }
]

export default routes
