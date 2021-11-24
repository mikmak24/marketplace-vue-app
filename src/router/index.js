import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/pages/Home.vue'

//Walmart Routes
import WalmartUploadItems from '../views/pages/Walmart/UploadItems.vue'
import OrderManagement from '../views/pages/Walmart/OMNewOrders.vue'
import WCompleteOrders from '../views/pages/Walmart/OMCompleteOrders.vue'
import WPassDueOrders from '../views/pages/Walmart/OMPassOrders.vue'
import ItemsCollection from '../views/pages/Walmart/ItemsCollection.vue'
import WCancelOrders from '../views/pages/Walmart/OMCancelOrders.vue'


//Amazon Routes
import AMOrderManagement from '../views/pages/Amazon/OrderManagement.vue'

//Ebay Routes
import EBOrderManagement from '../views/pages/Ebay/OrderManagement.vue'

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
  },
  {
    path: '/wm-itemscollection',
    name: 'ItemsCollection',
    component: ItemsCollection
  },
  {
    path: '/wm-cancelorders',
    name: 'WCancelOrders',
    component: WCancelOrders
  },
  //Amazon
  {
    path: '/am-ordermanagement',
    name: 'AMOrderManagement',
    component: AMOrderManagement
  },
  //
  {
    path: '/eb-ordermanagement',
    name: 'EBOrderManagement',
    component: EBOrderManagement
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
