import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/skills/SkillsView.vue'
import SkillDetailsView from '../views/skills/SkillDetailsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsView
  },
  {
    path: '/skills/:id',
    name: 'SkillDetails',
    component: SkillDetailsView,
    props: true
  },
  // catch-all 404
  {
    path: '/:catchAll(.*)', // catches all routes that don't exist, exactly like this
    name: 'Not found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
