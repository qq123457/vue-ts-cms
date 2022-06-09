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
      minWidth: 80,
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '新价格',
      minWidth: 80,
      slotName: 'newPrice'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: 100,
      slotName: 'image'
    },
    {
      prop: 'status',
      label: '状态',
      minWidth: 100,
      slotName: 'status'
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
  title: '商品列表'
};
