<template>
  <div class="goods">
    <h2>goods</h2>
    <wk-page-content :contentTableConfig="contentTableConfig" page-name="goods">
      <template #image="scope">
        <el-image
          preview-teleported
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="4"
          fit="cover"
        />
      </template>

      <template #status="scope">
        <el-button :type="scope.row.status ? 'success' : 'danger'" plain>{{
          scope.row.status ? '上架' : '下架'
        }}</el-button>
      </template>

      <template #oldPrice="scope">{{ '$' + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ '$' + scope.row.newPrice }}</template>
    </wk-page-content>
  </div>
</template>

<script setup lang="ts">
import WkPageContent from '@/components/page-content';
import WkPageSearch from '@/components/page-search';
import { contentTableConfig } from './config/content-config';
</script>

<style scoped></style>
