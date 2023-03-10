import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogListView from "../views/BlogListView.vue";
import BlogList2View from "../views/BlogList2View.vue";
import BlogDetailView from "../views/BlogDetailView.vue";
import Pinia1View from "../views/Pinia1View.vue";
import Pinia2View from "../views/Pinia2View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/blogs",
      name: "blogs",
      component: BlogListView,
    },
    {
      path: "/blogs2",
      name: "blogs2",
      component: BlogList2View,
    },
    {
      path: "/blog/:id",
      name: "blog",
      component: BlogDetailView,
    },
    {
      path: "/pinia1",
      name: "pinia1",
      component: Pinia1View,
    },
    {
      path: "/pinia2",
      name: "pinia2",
      component: Pinia2View,
    },
  ]
})

export default router
