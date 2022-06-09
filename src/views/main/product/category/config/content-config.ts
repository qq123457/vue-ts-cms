import { ITable } from '@/bast-ui/table/types';

export const contentTableConfig: ITable = {
  propList: [
    {
      prop: 'id',
      label: '分类Id',
      minWidth: 100
    },
    {
      prop: 'name',
      label: '分类名称',
      minWidth: 100
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: 120,
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: 100,
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: 120,
      slotName: 'handler'
    }
  ],
  showIndexColumn: false,
  showSelectColumn: true,
  title: '角色列表'
};
