import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsItem from '../views/ProductsItem.vue'
import PastOrders from '../views/PastOrders.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/ProductsItem',
    name: 'ProductsItem',
    component: ProductsItem
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: PastOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
