import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/pages/Home.vue'

//Walmart Routes
import WalmartUploadItems from '../views/pages/Walmart/UploadItems.vue'
import OrderManagement from '../views/pages/Walmart/OMNewOrders.vue'
import WCompleteOrders from '../views/pages/Walmart/OMCompleteOrders.vue'
import WPassDueOrders from '../views/pages/Walmart/OMPassOrders.vue'

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
    path: '/wm-completedorders',
    name: 'WCompleteOrders',
    component: WCompleteOrders
  },
  {
    path: '/wm-passorderstable',
    name: 'WPassDueOrders',
    component: WPassDueOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
