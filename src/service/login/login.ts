import wkRequest from '..';
import { AccountLoginType } from './types';
import { IDataType } from '../types';

enum AccountLoginApi {
  ACCOUNT_LOGIN = '/login',
  USER_INFO = '/users/', // + id
  USER_MENUS = '/role/' // + id + /menu
}

// 登录请求
export function accountLoginRequest(account: AccountLoginType) {
  return wkRequest.post<IDataType>({
    url: AccountLoginApi.ACCOUNT_LOGIN,
    data: {
      ...account,
      name: 'coderwhy'
    }
  });
}

// 通过ID用户信息
export function userInfoByIDRequest(id: string) {
  return wkRequest.get<IDataType>({
    url: AccountLoginApi.USER_INFO + id
  });
}

// 通过ID请求用户菜单
export function userMenusByIDRequest(id: string) {
  return wkRequest.get<IDataType>({
    url: AccountLoginApi.USER_MENUS + id + '/menu'
  });
}
