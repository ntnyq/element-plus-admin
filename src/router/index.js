import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

let router = new VueRouter({
  routes,
  scrollBehavior () {
    return { y: 0 }
  }
})

export default router
