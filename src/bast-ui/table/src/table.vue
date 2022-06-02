<template>
  <div class="wk-table">
    <div class="header">
      <slot name="header">
        <h4 class="heading-4 title">
          {{ title }}
        </h4>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        minWidth="80"
        align="center"
      ></el-table-column>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits } from 'vue';
import { IProp } from '../types';
const props = withDefaults(
  defineProps<{
    listData: any[];
    propList: IProp[];
    showIndexColumn?: boolean;
    showSelectColumn?: boolean;
    title?: string;
  }>(),
  {
    showIndexColumn: false,
    showSelectColumn: false,
    title: ''
  }
);
const emit = defineEmits<{
  (e: 'selectionChange', value: any): void;
}>();
const handleSelectionChange = (value: any) => {
  console.log(value);
  emit('selectionChange', value);
};
</script>

<style scoped>
.title {
  padding: 1rem 0;
}
</style>
