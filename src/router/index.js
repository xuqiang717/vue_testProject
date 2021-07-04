import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.(以下写法为路由懒加载，需要用到时才从服务器加载)
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:userid',  
    name: 'User',
    component: () => import ('../views/User.vue' ),
    //children嵌套路由（即一个页面有多个组件嵌套而成）
    children:[
      {
        path: 'userInfo',
        component: () => import('../views/UserInfo.vue')
      },
      {
        path: 'userOrder',
        component: () => import('../views/UserOrder.vue')
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
