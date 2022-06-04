<template>
  <div class="page-search">
    <wk-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="heading-3" style="margin-bottom: 1rem; text-align: center">
          高级检索
        </h1>
      </template>
      <template #footer>
        <div style="text-align: right">
          <el-button @click="handleResetClick">
            <el-icon><Refresh /></el-icon>
            重置
          </el-button>
          <el-button type="primary" @click="handleSearchClick">
            <el-icon><Search /></el-icon>
            搜索
          </el-button>
        </div>
      </template>
    </wk-form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import WkForm, { IForm } from '@/bast-ui/form';
import { Search, Refresh } from '@element-plus/icons-vue';

const props = defineProps<{
  searchFormConfig: IForm;
  pageName: string;
}>();
// 表单属性
const formData = ref({});
props.searchFormConfig.formItems.forEach((formItem) =>
  Object.defineProperty(formData.value, formItem.field, {
    value: ''
  })
);

const emit = defineEmits<{
  (e: 'resetBtnClick'): void;
  (e: 'queryBtnClick', value: any): void;
}>();

const handleSearchClick = () => {
  emit('queryBtnClick', formData.value);
};
// 用户重置
const handleResetClick = () => {
  for (const key in formData.value) (formData.value as any)[key] = '';
  emit('resetBtnClick');
};
// const store = useStore();
// store.dispatch('system/getPageList', {
//   pageName: props.pageName,
//   queryInfo: {
//     offset: 0,
//     size: 10
//   }
// });
</script>

<style scoped></style>
