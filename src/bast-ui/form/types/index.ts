import type { FormRules } from 'element-plus';

type IFormType = 'input' | 'password' | 'select' | 'datepicker';
interface OptionType {
  title: string;
  value: any;
}
export interface IFormItem {
  field: string;
  type: IFormType;
  label: string;
  rules?: FormRules[];
  placeholder: any;
  // select
  options?: OptionType[];
  // 争对特殊的属性
  otherOptions?: any;
  isHidden?: boolean;
}

export interface IForm {
  formItems: IFormItem[];
  labelWith?: string;
  itemStyle?: any;
  colLayout?: any;
}
