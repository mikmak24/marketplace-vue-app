import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/pages/Home.vue'
import WalmartDashboard from '../views/pages/Walmart/Dashboard.vue'
import WalmartUploadItems from '../views/pages/Walmart/UploadItems.vue'



const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/wm-dashboard',
    name: 'WalmartDashboard',
    component: WalmartDashboard
  },
  {
    path: '/wm-uploaditems',
    name: 'WalmartUploadItems',
    component: WalmartUploadItems
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
