import wkRequest from '@/service';
import { IDataType } from '@/service/types';
// 返回页面查询数据
export function getPageListData(url: string, queryInfo: any) {
  return wkRequest.post<IDataType>({
    url,
    data: queryInfo,
    showLoading: true
  });
}
