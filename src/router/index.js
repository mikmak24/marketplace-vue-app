import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/pages/Home.vue'
import OrderManagement from '../views/pages/Walmart/OrderManagement.vue'
import WalmartUploadItems from '../views/pages/Walmart/UploadItems.vue'
import OrdersTable from '../views/pages/Walmart/OrdersTable.vue'
import EclipseTable from '../views/pages/Walmart/EclipseTable.vue'
import DueOrdersTable from '../views/pages/Walmart/DueOrdersTable.vue'

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
    path: '/wm-neworders',
    name: 'OrderManagement',
    component: OrderManagement
  },
  {
    path: '/wm-uploaditems',
    name: 'WalmartUploadItems',
    component: WalmartUploadItems
  },
  {
    path: '/wm-orderstable',
    name: 'OrdersTable',
    component: OrdersTable
  },
  {
    path: '/wm-eclipsetable',
    name: 'EclipseTable',
    component: EclipseTable
  },
  {
    path: '/wm-dueorders',
    name: 'DueOrdersTable',
    component: DueOrdersTable
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
