import { IForm } from '@/bast-ui/form';

export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入角色名称'
    },
    {
      field: 'createTime',
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
