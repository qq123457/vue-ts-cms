import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IRootState } from './types';
import loginModule from './login/login';
import systemModule from './main/system/system';
import dashboardModule from './main/analysis/dashboard';
import { getPageListData } from '@/service/main/system/system';
const store = createStore<IRootState>({
  state: () => {
    return {
      name: '12312',
      entireDepartment: [],
      entireRole: [],
      entireMenu: [],
      entireUsers: []
    };
  },
  mutations: {
    changeEntireDepartment(state, list: any[]) {
      state.entireDepartment = list;
    },
    changeEntireRole(state, list: any[]) {
      state.entireRole = list;
    },
    changeEntireMenu(state, list: any[]) {
      state.entireMenu = list;
    },
    changeEntireUses(state, list: any[]) {
      state.entireUsers = list;
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 1. 请求部门和角色数据

      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      });
      const { list: departmentList } = departmentResult.data;

      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      });

      const { list: roleList } = roleResult.data;

      const menuResult = await getPageListData('/menu/list', {});
      const { list: menuList } = menuResult.data;

      const usersResult = await getPageListData('/users/list', {});
      const { list: usersList } = usersResult.data;
      commit('changeEntireDepartment', departmentList);
      commit('changeEntireRole', roleList);
      commit('changeEntireMenu', menuList);
      commit('changeEntireUses', usersList);
    }
  },
  modules: {
    login: loginModule,
    system: systemModule,
    dashboard: dashboardModule
  }
});

// 加载缓存中的数据
export function setupStore() {
  store.dispatch('login/updateAction');
}

import { IStoreType } from './types';
import menu from '@/router/main/system/menu/menu';

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
