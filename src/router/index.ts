import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import localCache from '@/utils/cache';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/loginview/LoginView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/mainview/MainView.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/notfound/NotFoundView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  if (to.name !== 'login') {
    if (!localCache.getCache('token')) return { name: 'login' };
  }
});

export default router;
