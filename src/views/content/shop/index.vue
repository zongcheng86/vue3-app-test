<template>
  <div class="basket">
    <ul>
      <li v-for="v in basketData" :key="v.product_id">
        <div class="basket-img">
          <img :src="v.product_img_url" />
        </div>
        <div class="basket-list">
          <span>{{ v.product_name }}</span>
          <span>￥{{ v.product_uprice }}</span>
          <span>数量：{{ v.count }}</span>
        </div>
      </li>
    </ul>
  </div>
  <div>{{ totalAmount }}</div>
</template>
<script setup>
import { basketStore } from "@/store/basket.js";
import { storeToRefs } from "pinia";

const mybasketStore = basketStore();
const { basketData, totalAmount } = storeToRefs(mybasketStore);
</script>
<style lang="less" scoped></style>
