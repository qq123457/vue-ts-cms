import type { FormRules } from 'element-plus';

type IFormType = 'input' | 'password' | 'select' | 'datepicker';
interface OptionType {
  title: string;
  value: any;
}
export interface IFormItem {
  type: IFormType;
  label: string;
  rules?: FormRules[];
  placeholder: any;
  // select
  options?: OptionType[];
  // 争对特殊的属性
  otherOptions?: any;
}

export interface IForm {
  formItems: IFormItem[];
  labelWith?: string;
  itemStyle?: any;
  colLayout?: any;
}
