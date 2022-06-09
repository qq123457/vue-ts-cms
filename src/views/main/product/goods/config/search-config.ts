import { IForm } from '@/bast-ui/form';
import { placeholderSign } from 'element-plus/es/components/table-v2/src/private';

export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'status',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { title: '上架', value: 1 },
        { title: '下架', value: 0 }
      ]
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '当前价格',
      placeholder: '请输入当前价格'
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选择创建时间范围',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  itemStyle: {
    padding: '0.5rem 0rem'
  },
  colLayout: {
    span: 8
  },
  labelWith: '10rem'
};
