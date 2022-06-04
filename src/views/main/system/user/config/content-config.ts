import { ITable } from '@/bast-ui/table/types';

export const contentTableConfig: ITable = {
  propList: [
    {
      prop: 'id',
      label: 'ID'
    },
    {
      prop: 'name',
      label: '昵称',
      minWidth: 100
    },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: 100
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      minWidth: 120
    },
    {
      prop: 'enable',
      label: '状态',
      minWidth: 100,
      slotName: 'enable'
    },
    {
      prop: 'departmentId',
      label: '部门',
      minWidth: 100,
      slotName: 'departmentId'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: 180,
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: 180,
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
