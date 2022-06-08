<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="500px"
      center
      :destroy-on-close="true"
    >
      <wk-form v-bind="modalConfig" v-model="formData"></wk-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="default" @click="dialogVisible = false"
            >取消</el-button
          >
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineExpose, withDefaults, watch } from 'vue';
import WkForm, { IForm } from '@/bast-ui/form';
import { useStore } from '@/store';
const props = withDefaults(
  defineProps<{
    modalConfig: IForm;
    pageName: string;
    defaultInfo?: any;
    title: string;
    otherInfo?: any;
  }>(),
  {
    defaultInfo: () => ({}),
    otherInfo: () => ({})
  }
);
const dialogVisible = ref(false);
const formData = ref({});

// 监听
watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      (formData.value as any)[`${item.field}`] = (newValue as any)[
        `${item.field}`
      ];
    }
  }
);

// 处理保存按钮点击
const store = useStore();
const handleConfirmClick = () => {
  dialogVisible.value = false;
  if (Object.keys(props.defaultInfo).length !== 0) {
    store.dispatch('system/editPageDataAction', {
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    });
  } else {
    store.dispatch('system/createPageDataAction', {
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    });
  }
};
defineExpose({
  dialogVisible
});
// props.modalConfig.formItems.forEach(item: IFormItem => {
//   formData.
// })
</script>

<style scoped></style>
