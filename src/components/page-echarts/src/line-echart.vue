<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import BaseEchart from '@/bast-ui/echart';
import { computed } from '@vue/reactivity';
import { defineProps } from 'vue';
const props = defineProps<{
  xLabels: string[];
  value: any[];
}>();
const options = computed(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xLabels
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.value,
        type: 'line',
        areaStyle: {}
      }
    ]
  };
});
</script>

<style scoped></style>
