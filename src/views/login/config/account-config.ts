import { FormRules } from 'element-plus';

export const rules: FormRules = {
  name: [
    { required: true, message: '账户不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须时5~10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
};
