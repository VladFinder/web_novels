import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from '../components/MainScreen.vue'
import EmotionCalendar from '../components/EmotionCalendar.vue'
import TestEmotionSelect from '../components/TestEmotionSelect.vue'

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
  },
  {
    path: '/test',
    name: 'Test',
    component: TestEmotionSelect
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
