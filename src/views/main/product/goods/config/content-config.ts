import { ITable } from '@/bast-ui/table/types';

export const contentTableConfig: ITable = {
  propList: [
    {
      prop: 'name',
      label: '商品名称',
      minWidth: 80
    },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: 80
    },
    {
      prop: 'newPrice',
      label: '新价格',
      minWidth: 80
    },
    {
      prop: 'imageUrl',
      label: '商品图片',
      minWidth: 100,
      slotName: 'imageUrl'
    },
    {
      prop: 'enable',
      label: '状态',
      minWidth: 100,
      slotName: 'enable'
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
