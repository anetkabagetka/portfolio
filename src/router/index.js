import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WorksView from '@/views/WorksView.vue'
import SpinnerView from '@/views/SpinnerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/works', name: 'works', component: WorksView },
    { path: '/spinner', name: 'spinner', component: SpinnerView },
  ],
})

export default router
