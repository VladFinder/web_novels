import { createRouter, createWebHistory } from 'vue-router';
import SplashScreen from '../components/SplashScreen.vue';
import MoodSelection from '../components/MoodSelection.vue';
import MainScreen from '../components/MainScreen.vue';
import MoodCalendar from '../components/MoodCalendar.vue';

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/mood', component: MoodSelection },
  {
    path: '/stories',
    component: () => import('../components/StoriesScreen.vue') // лениво грузим истории
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
