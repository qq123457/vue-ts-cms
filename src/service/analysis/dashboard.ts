import wkRequest from '..';
import { IDataType } from '../types';

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}
export function getCategoryGoodsCount() {
  return wkRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  });
}

export function getCategoryGoodsSale() {
  return wkRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  });
}

export function getCategoryGoodsFavor() {
  return wkRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  });
}

export function getAddressGoodsSale() {
  return wkRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  });
}
