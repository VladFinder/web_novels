import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from '../components/MainScreen.vue'
import EmotionCalendar from '../components/EmotionCalendar.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainScreen
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: EmotionCalendar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
