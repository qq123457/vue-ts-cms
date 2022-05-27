import { createStore } from 'vuex';
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
export default store;
