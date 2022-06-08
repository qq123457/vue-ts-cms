<template>
  <button @click="foo(callBack)">Show</button>
  <h1 v-if="isShow" ref="h1Ref">test nextTick</h1>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
const isShow = ref(false);
const h1Ref = ref<HTMLDivElement>();
type Fn = () => void;
const foo = (callBack?: Fn) => {
  isShow.value = !isShow.value;
  callBack && callBack();
};
const callBack = () => {
  nextTick(() => {
    console.log(h1Ref.value);
  });
};
</script>

<style scoped></style>
