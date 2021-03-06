import { IForm } from '@/bast-ui/form';

export const formConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'ID',
      placeholder: '请输入ID'
    },
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输部门名称'
    },
    {
      field: 'leader',
      type: 'select',
      label: '部门领导',
      placeholder: '请选择部门领导',
      options: []
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
