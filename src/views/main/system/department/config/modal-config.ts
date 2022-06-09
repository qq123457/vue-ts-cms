import { IForm } from '@/bast-ui/form';

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'select',
      label: '部门领导',
      placeholder: '请选择部门领导',
      options: []
    },
    {
      field: 'parentId',
      type: 'select',
      label: '挂靠单位',
      placeholder: '请选择挂靠单位',
      options: []
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {}
};
