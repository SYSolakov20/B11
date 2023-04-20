import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GlassView from '../views/GlassView.vue'
import ProductView from '../views/ProductView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, 
    {
      path: '/material',
      name: 'material',
      component: GlassView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },  
  ]
})

export default router
