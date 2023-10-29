<template>
  <router-view />
  <navBottom v-if="isShowBottom"></navBottom>
</template>
<script setup>
import navBottom from "./views/navBottom/index.vue";
import { mainStore } from "./store";
import { storeToRefs } from "pinia";
const { isShowBottom } = storeToRefs(mainStore());
</script>
<style lang="less" scoped></style>
