<template>
  <div class="wk-table">
    <div class="header">
      <div>
        <slot name="header">
          <h4 class="heading-4 title">
            {{ title }}
          </h4>
        </slot>
      </div>
      <div>
        <slot name="headerHandler"> </slot>
      </div>
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
            <slot :name="item.slotName ?? ''" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="page.currentPage"
          v-model:page-size="page.pageSize"
          :page-sizes="[10, 20, 30, 40, 50]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits, ref } from 'vue';

import { IProp } from '../types';
const props = withDefaults(
  defineProps<{
    listData: any[];
    propList: IProp[];
    showIndexColumn?: boolean;
    showSelectColumn?: boolean;
    title?: string;
    dataCount: number;
    page?: any;
  }>(),
  {
    showIndexColumn: false,
    showSelectColumn: false,
    title: '',
    page: () => ({ currentPage: 0, pageSize: 10 })
  }
);

const emit = defineEmits<{
  (e: 'selectionChange', value: any): void;
  (e: 'update:page', value: any): void;
}>();

const handleSelectionChange = (value: any) => {
  console.log(value);
  emit('selectionChange', value);
};

const small = ref(false);
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (pageSize: number) => {
  console.log(pageSize);
  emit('update:page', { ...props.page, pageSize });
};
const handleCurrentChange = (currentPage: number) => {
  console.log(currentPage);
  emit('update:page', { ...props.page, currentPage });
};
</script>

<style scoped>
.title {
  padding: 1rem 0;
}
.header {
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0 0;
  /* border-top: 1rem solid #ccc; */
}
.footer {
  display: flex;
  flex-direction: row-reverse;
  padding: 2rem 0;
}
</style>
