<template>
  <div class="example">
    <Category></Category>
    <List :listData="listData" />
  </div>
</template>
<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import Category from "./category/index.vue";
import List from "./list/index.vue";
import { getLists } from "@/api/api";

let listData = ref([]);
onMounted(async () => {
  listData.value = await getLists().then((res) => res.data.data);
  
});

</script>
<style lang="less" scoped></style>
