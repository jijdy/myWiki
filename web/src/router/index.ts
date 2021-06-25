import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AdminEbook from '../views/admin/admin-ebook.vue'
import AdminCategory from '../views/admin/admin-category.vue'
import AdminDoc from '../views/admin/admin-doc.vue'
import Doc from '../views/doc.vue'
import User from "../views/admin/admin-user.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/user',
    name: 'user',
    component: User
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
  path: '/admin',
      name: 'AdminEbook',
      component: AdminEbook
  },
  {
  path: '/category',
      name: 'AdminCategory',
      component: AdminCategory
  },
  {
  path: '/doc',
      name: 'AdminDoc',
      component: AdminDoc
  },
  {
  path: '/isDoc',
      name: 'Doc',
      component: Doc
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
