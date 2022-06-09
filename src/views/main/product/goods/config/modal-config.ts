import { IForm } from '@/bast-ui/form';

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价格',
      placeholder: '请输入原价格'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '新价格',
      placeholder: '请输入新价格'
    },
    {
      field: 'imgUrl',
      type: 'input',
      label: '图片Url',
      placeholder: '请输入图片Url'
    },
    {
      field: 'status',
      type: 'select',
      label: '商品状态',
      placeholder: '请选择商品状态',
      options: [
        { title: '上架', value: 1 },
        { title: '下架', value: 0 }
      ]
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {}
};
