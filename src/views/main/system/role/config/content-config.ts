import { ITable } from '@/bast-ui/table/types';

export const contentTableConfig: ITable = {
  propList: [
    {
      prop: 'name',
      label: '角色名称',
      minWidth: 100
    },
    {
      prop: 'intro',
      label: '权限介绍',
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
  showIndexColumn: true,
  showSelectColumn: true,
  title: '角色列表'
};
