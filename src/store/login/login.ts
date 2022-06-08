import { Module } from 'vuex';
import { IRootState } from '../types';
import { ILoginState } from './types';
import {
  accountLoginRequest,
  userInfoByIDRequest,
  userMenusByIDRequest
} from '@/service/login/login';
import type { AccountLoginType } from '@/service/login/types';
import localCache from '@/utils/cache';
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus';
import router from '@/router';
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenu: {},
      permissions: []
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      localCache.setCache('token', token);
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      localCache.setCache('userInfo', userInfo);
      state.userInfo = userInfo;
    },
    changeUserMenu(state, userMenu: any) {
      localCache.setCache('userMenu', userMenu);
      state.userMenu = userMenu;
      // userMenus => routes
      // 注册动态路由
      const routes = mapMenusToRoutes(userMenu);
      routes.forEach((route) => router.addRoute('main', route));

      // 获取用户按钮权限
      const permissions = mapMenusToPermissions(userMenu);
      state.permissions = permissions;
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, paylaod: AccountLoginType) {
      // 1. 登录请求
      const loginResult = await accountLoginRequest(paylaod);
      if (loginResult.code !== 0) return false;
      const { id, token } = loginResult.data;
      commit('changeToken', token);

      // 发送初始化请求（完整的role/department）
      dispatch('getInitialDataAction', null, { root: true });
      // 2. 请求用户信息
      await userInfoByIDRequest(id).then((res) => {
        commit('changeUserInfo', res.data);
      });

      // 3. 请求用户菜单
      await userMenusByIDRequest(id).then((res) => {
        commit('changeUserMenu', res.data);
      });

      return true;
    },
    // 处理刷新vuex状态消失
    updateAction({ commit, dispatch }) {
      const token = localCache.getCache('token');
      if (token) {
        commit('changeToken', token);
      }

      if (token) {
        // 发送初始化请求（完整的role/department）
        dispatch('getInitialDataAction', null, { root: true });
      }

      const userInfo = localCache.getCache('userInfo');
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }

      const userMenu = localCache.getCache('userMenu');
      if (userMenu) {
        commit('changeUserMenu', userMenu);
      }
    }
  }
};

export default loginModule;
