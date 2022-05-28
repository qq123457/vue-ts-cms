<template>
  <div class="form">
    <el-form label-width="10rem">
      <el-row :gutter="24">
        <template v-for="(item, index) in formItems" :key="index">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                ></el-input>
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select style="width: 100%">
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
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { IFormItem } from '../types';
const props = withDefaults(
  defineProps<{
    formItems: IFormItem[];
  }>(),
  {
    formItems: () => []
  }
);
</script>

<style scoped></style>
