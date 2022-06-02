import { IBreadcrumb } from '@/bast-ui/breadcrumb';
import { RouteRecordRaw } from 'vue-router';

let firstMenu: any = null;
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

        if (route) {
          routes.push(route);
          if (firstMenu === null) firstMenu = menu;
        }
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };
  _recurseGetRoute(userMenu);

  return routes;
}

export function pathMapBreadcrumbs(userMenu: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = [];

  pathMapToMenu(userMenu, currentPath, breadcrumbs);
  console.log();
  return breadcrumbs;
}

export function pathMapToMenu(
  userMenu: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenu) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name });
        breadcrumbs?.push({ name: findMenu.name });
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }

  return null;
}

export { firstMenu };
