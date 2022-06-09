import { IForm } from '@/bast-ui/form';

export const formConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '分类ID',
      placeholder: '请输入ID'
    },
    {
      field: 'name',
      type: 'input',
      label: '分类名称',
      placeholder: '请输入分类名称'
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
    padding: '1.5rem 0rem'
  },
  colLayout: {
    span: 8
  },
  labelWith: '10rem'
};
