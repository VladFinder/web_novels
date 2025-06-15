import { createRouter, createWebHistory } from 'vue-router';
import SplashScreen from '../components/SplashScreen.vue';
import MoodSelection from '../components/MoodSelection.vue';
import MainScreen from '../components/MainScreen.vue';
import MoodCalendar from '../components/MoodCalendar.vue';
import StoriesScreen from '../components/StoriesScreen.vue';

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/mood', component: MoodSelection },
  { path: '/main', component: MainScreen },
  { path: '/calendar', component: MoodCalendar },
  { path: '/stories', component: StoriesScreen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
