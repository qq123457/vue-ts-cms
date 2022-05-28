import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IRootState } from './types';
import loginModule from './login/login';
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
    login: loginModule
  }
});

// 加载缓存中的数据
export function uploadCache() {
  store.dispatch('login/updateAction');
}

import { IStoreType } from './types';
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
