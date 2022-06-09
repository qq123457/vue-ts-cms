import { IForm } from '@/bast-ui/form';

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {}
};
