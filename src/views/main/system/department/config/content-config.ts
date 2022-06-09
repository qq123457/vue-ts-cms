import { ITable } from '@/bast-ui/table/types';

export const contentTableConfig: ITable = {
  propList: [
    {
      prop: 'id',
      label: '部门id',
      minWidth: 100
    },
    {
      prop: 'name',
      label: '部门名称',
      minWidth: 100
    },
    {
      prop: 'leader',
      label: '部门领导',
      minWidth: 100
    },
    {
      prop: 'parentId',
      label: '部门靠挂单位',
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
