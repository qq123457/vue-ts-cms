import { RouteRecordRaw } from 'vue-router';

export function mapMenusToRoutes(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  // 1. 加载所有默认的routes
  const allRoutes: RouteRecordRaw[] = [];
  // 加载所有路由文件，path(相对于第一个参数的路径)->file
  const routeFiles = require.context('../router/main', true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1]);
    allRoutes.push(route.default);
  });

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) routes.push(route);
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };
  _recurseGetRoute(userMenu);

  return routes;
}
