import { Module } from 'vuex';
import { IRootState } from '@/store/types';
import { ISystemState } from './types';
import { getPageListData } from '@/service/main/system/system';
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      usersList: [],
      usersCount: 0,
      menuList: [],
      menuCount: 0,
      roleList: [],
      roleCount: 0,
      departmentList: [],
      departmentCount: 0,
      goodsList: [],
      goodsCount: 0
    };
  },
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list;
    },
    changeUsersCount(state, count: number) {
      state.usersCount = count;
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list;
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count;
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list;
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count;
    },
    changeDepartmentList(state, list: any[]) {
      state.departmentList = list;
    },
    changeDepartmentCount(state, count: number) {
      state.departmentCount = count;
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list;
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  actions: {
    // 请求当页面的数据
    async getPageList({ commit }, payload: any) {
      const { pageName, queryInfo } = payload;
      const url = `/${pageName}/list`;
      const dataResult = await getPageListData(url, queryInfo);
      const { list, totalCount } = dataResult.data;
      commit(
        `change${pageName.replace(pageName[0], pageName[0].toUpperCase())}List`,
        list
      );
      commit(
        `change${pageName.replace(
          pageName[0],
          pageName[0].toUpperCase()
        )}Count`,
        totalCount
      );
    }
  }
};
export default systemModule;
