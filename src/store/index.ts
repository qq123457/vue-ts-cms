import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IRootState } from './types';
import loginModule from './login/login';
import systemModule from './main/system/system';
const store = createStore<IRootState>({
  state: () => {
    return {
      name: '12312'
    };
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login: loginModule,
    system: systemModule
  }
});

// 加载缓存中的数据
export function setupStore() {
  store.dispatch('login/updateAction');
}

import { IStoreType } from './types';
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
