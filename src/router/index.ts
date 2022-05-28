import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import localCache from '@/utils/cache';
import { mapMenusToRoutes } from '@/utils/map-menus';
import store from '@/store';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/Main.vue')
    // children: [] // -> 根据userMenus 决定
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

router.beforeEach((to: any) => {
  if (to.name !== 'login') {
    if (!localCache.getCache('token')) return { name: 'login' };
  }

  // userMenus => routes
  const userMenu = (store.state as any).login.userMenu;
  const routes = mapMenusToRoutes(userMenu);
  routes.forEach((route) => router.addRoute('main', route));
});

export default router;
