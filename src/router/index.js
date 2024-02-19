import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/heroinfo',
      name: 'heroinfo',
      /* Enligt vad jag läst mig till så gör sättet som jag importerar komponenten på nedan att
      komponenten gör en lazy load istället för att importera den som jag importerat HomeView */
      component: () => import('../views/HeroInfoView.vue')
    },
    {
      path: '/:hero',
      name: 'herocardinfo',
      component: () => import('../views/HeroCardInfoView.vue')
    }
  ]
})

export default router
