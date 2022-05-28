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
import { mapMenusToRoutes } from '@/utils/map-menus';
import router from '@/router';
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenu: {}
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

      const routes = mapMenusToRoutes(userMenu);
      routes.forEach((route) => router.addRoute('main', route));
    }
  },
  actions: {
    async accountLoginAction({ commit }, paylaod: AccountLoginType) {
      // 1. 登录请求
      const loginResult = await accountLoginRequest(paylaod);
      if (loginResult.code !== 0) return false;
      const { id, token } = loginResult.data;
      commit('changeToken', token);

      // 2. 请求用户信息
      userInfoByIDRequest(id).then((res) => {
        commit('changeUserInfo', res.data);
      });

      // 3. 请求用户菜单
      userMenusByIDRequest(id).then((res) => {
        commit('changeUserMenu', res.data);
      });

      return true;
    },
    // 处理刷新vuex状态消失
    updateAction({ commit }) {
      const token = localCache.getCache('token');
      if (token) {
        commit('changeToken', token);
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
