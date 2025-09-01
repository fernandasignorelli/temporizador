import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/App.vue'
import Projetos from '@/pages/Projetos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: Projetos,
    },
  ],
})

export default router
