import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ExHome.vue'
import Courses from '../views/EXCourseCatalogue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    },
  ]
})

export default router
