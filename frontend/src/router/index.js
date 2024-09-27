// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../components/Layout.vue';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: HomePage },
      { path: 'about', component: AboutPage }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
