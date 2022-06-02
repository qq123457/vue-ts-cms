<template>
  <div class="form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWith">
      <el-row :gutter="24">
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                ></el-input>
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select style="width: 100%" v-model="formData[item.field]">
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                    v-bind="item.otherOptions"
                  >
                    {{ option.title }}</el-option
                  >
                </el-select>
              </template>

              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[item.field]"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, ref, watch } from 'vue';
import { IFormItem } from '../types';

const props = withDefaults(
  defineProps<{
    formItems: IFormItem[];
    labelWith?: string;
    itemStyle?: any;
    colLayout?: any;
    modelValue: any;
  }>(),
  {
    labelWith: '10rem',
    itemStyle: {
      padding: '1rem 4rem'
    },
    colLayout: {
      xl: 6, // => 1920px 4
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    }
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', obj: any): void;
}>();

// 拷贝，保持单项数据流
const formData = ref({ ...props.modelValue });

// 实现监听
watch(formData.value, (newValue) => emit('update:modelValue', newValue), {
  deep: true
});
</script>

<style scoped>
/* .header {
  text-align: center;
}

.footer {
  text-align: right;
} */
</style>
