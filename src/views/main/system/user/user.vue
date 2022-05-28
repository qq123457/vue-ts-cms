<template>
  <div class="user">
    <div class="search">
      <wk-form :form-items="formItems" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import WkForm, { IFormItem } from '@/bast-ui/form';

const formItems: IFormItem[] = [
  {
    type: 'input',
    label: 'ID',
    placeholder: '请输入ID'
  },
  {
    type: 'input',
    label: '用户名',
    placeholder: '请输入用户名'
  },
  {
    type: 'input',
    label: '密码',
    placeholder: '请输入密码'
  },
  {
    type: 'select',
    label: '喜欢的运动',
    placeholder: '请选择喜欢的运动',
    options: [
      { title: '篮球', value: 'basketball' },
      { title: '足球', value: 'football' }
    ]
  },
  {
    type: 'datepicker',
    label: '创建时间',
    placeholder: '请选择创建时间范围',
    otherOptions: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'daterange'
    }
  }
];
</script>

<style lang="scss" scoped>
.search {
  padding: 2rem;
}
</style>
