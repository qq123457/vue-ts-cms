import { IRootState } from '@/store/types';
import { Module } from 'vuex';
import { IDashboardState } from './types';
import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/service/analysis/dashboard';
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    };
  },
  mutations: {
    changeCategoryGoodsCount(state, list: any[]) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsFavor(state, list: any[]) {
      state.categoryGoodsFavor = list;
    },
    changeCategoryGoodsSale(state, list: any[]) {
      state.categoryGoodsSale = list;
    },
    changeAddressGoodsSale(state, list: any[]) {
      state.addressGoodsSale = list;
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCountResult = await getCategoryGoodsCount();
      commit('changeCategoryGoodsCount', categoryGoodsCountResult.data);

      const categoryGoodsSaleResult = await getCategoryGoodsSale();
      commit('changeCategoryGoodsSale', categoryGoodsSaleResult.data);

      const categoryGoodsFavorResult = await getCategoryGoodsFavor();
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult.data);

      const addressGoodsSaleResult = await getAddressGoodsSale();
      commit('changeAddressGoodsSale', addressGoodsSaleResult.data);
    }
  }
};

export default dashboardModule;
