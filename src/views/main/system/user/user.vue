<template>
  <div class="user">
    <div class="search">
      <wk-page-search :searchFormConfig="searchFormConfig" pageName="users" />
    </div>
    <div class="content">
      <wk-table
        :listData="usersList"
        :propList="propList"
        :showIndexColumn="true"
        :showSelectColumn="true"
        @selectionChange="handleSelectionChange"
        title="用户列表"
      >
        <template #enable="scope">
          <el-button :type="scope.row.enable ? 'success' : 'danger'" plain>{{
            scope.row.enable ? '启动' : '禁用'
          }}</el-button>
        </template>
        <template #createAt="scope">
          <strong v-fm-date="'YYYY/MM/DD'">{{ scope.row.createAt }}</strong>
        </template>
        <template #updateAt="scope">
          <strong v-fm-date>{{ scope.row.createAt }}</strong>
        </template>
        <template #handler>
          <div class="handle-btns">
            <el-button type="primary" size="small" :link="true">
              <el-icon><Edit></Edit></el-icon>
              编辑
            </el-button>
            <el-button type="danger" size="small" :link="true">
              <el-icon><Delete></Delete></el-icon>
              删除
            </el-button>
          </div>
        </template>

        <!-- <template #header> 哈哈哈 </template> -->
      </wk-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formConfig as searchFormConfig } from './config/search-config';
import WkTable from '@/bast-ui/table';
import WkPageSearch from '@/components/page-search';
import { ITable, IProp } from '@/bast-ui/table/types';
import { computed } from 'vue';
import { useStore } from '@/store';
import { Edit, Delete } from '@element-plus/icons-vue';
const store = useStore();
const usersList = computed(() => store.state.system.usersList);
const propList: IProp[] = [
  {
    prop: 'id',
    label: 'ID'
  },
  {
    prop: 'name',
    label: '昵称',
    minWidth: 100
  },
  {
    prop: 'realname',
    label: '真实姓名',
    minWidth: 100
  },
  {
    prop: 'cellphone',
    label: '手机号码',
    minWidth: 120
  },
  {
    prop: 'enable',
    label: '状态',
    minWidth: 100,
    slotName: 'enable'
  },
  {
    prop: 'departmentId',
    label: '部门',
    minWidth: 100,
    slotName: 'departmentId'
  },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: 180,
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: 180,
    slotName: 'updateAt'
  },
  {
    label: '操作',
    minWidth: 120,
    slotName: 'handler'
  }
];

const handleSelectionChange = (value: any) => {
  console.log(value);
};
</script>

<style lang="scss" scoped>
.search {
  padding: 0.5rem 2rem;
}

.content {
  padding: 0 2rem;
}
</style>
