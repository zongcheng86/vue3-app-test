<template>
  <div class="c-wrap">
    <ul>
      <li v-for="v in props.listData" :key="v.product_id">
        <div class="c-wrap-img">
          <RouterLink :to="`/detail/${v.product_id}`"
            ><img :src="v.product_img_url"
          /></RouterLink>
          <h4>{{ v.product_name }}</h4>
          <div class="c-wrap-info">
            <i>￥</i>
            <b>{{ v.product_uprice }}</b>
            <span class="shoppingCart" @click="addProduct(v)">
              <i class="iconfont icon-gouwuche"></i>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
// import { categoryData } from "/src/utils/common.js";
import { basketStore } from "@/store/basket.js";

const mybasketStore = basketStore();
const { addItem } = mybasketStore;

const props = defineProps({
  listData: {
    type: Array,
    default: () => [{}],
  },
});
const addProduct = (item) => {
  addItem(item);
};
</script>
<style lang="less" scoped></style>
