import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GlassView from '../views/GlassView.vue'
import ProductView from '../views/ProductView.vue'
import MenuView from '../views/MenuView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'


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
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }, 
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    } 
  ]
})

export default router
