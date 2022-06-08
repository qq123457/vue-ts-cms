import { ITable } from '@/bast-ui/table/types';

export const contentTableConfig: ITable = {
  propList: [
    {
      prop: 'name',
      label: '菜单名称',
      minWidth: 100
    },
    {
      prop: 'type',
      label: '类型',
      minWidth: 60
    },
    {
      prop: 'permission',
      label: '按钮权限',
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
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false,
  title: '菜单列表'
};
