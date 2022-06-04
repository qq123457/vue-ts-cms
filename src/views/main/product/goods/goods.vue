<template>
  <div class="goods">
    <h2>goods</h2>
    <wk-page-content
      :contentTableConfig="contentTableConfig"
      page-name="goods"
    ></wk-page-content>
  </div>
</template>

<script setup lang="ts">
import WkPageContent from '@/components/page-content';
import WkPageSearch from '@/components/page-search';
import { contentTableConfig } from './config/content-config';
</script>

<style scoped></style>
