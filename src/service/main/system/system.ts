import wkRequest from '@/service';
import { IDataType } from '@/service/types';
// 返回页面查询数据
export function getPageListData(url: string, queryInfo: any) {
  return wkRequest.post<IDataType>({
    url,
    data: queryInfo
  });
}
// 删除数据
// /user/id
export function deleteRecordById(url: string) {
  return wkRequest.delete<IDataType>({
    url
  });
}
export function createPageData(url: string, newData: any) {
  return wkRequest.post<IDataType>({
    url: url,
    data: newData
  });
}
export function editPageData(url: string, editData: any) {
  return wkRequest.patch<IDataType>({
    url: url,
    data: editData
  });
}
