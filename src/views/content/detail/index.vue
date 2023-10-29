<template>
  <div>
    <!-- <div class="other-header">
        <img src="@/assets/image/chuju.jpg" alt="">
        <button class="go-back">返回</button>
    </div> -->
    <button class="go-back" @click="goBack">返回</button>
    <div class="other-title">
      <div class="title-text" v-for="v in info" :key="v.product_id">
        <img :src="v.product_img_url" alt="" />
        <p><i>￥</i>{{ v.product_uprice }}</p>
        <p>{{ v.product_name }}</p>
        <p>{{ v.product_detail }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getDetail } from "@/api/api.js";
import { mainStore } from "../../../store/index.js";
import { storeToRefs } from "pinia";
const myMainStore = mainStore();
const { isShowBottom } = storeToRefs(myMainStore);
const route = useRoute();
const router = useRouter();
const info = ref([]);
onMounted(async () => {
  // console.log(route.params.id);
  let { data } = await getDetail({ mId: route.params.id });
  // console.log(data[1]);
  info.value = data[1];
  isShowBottom.value = false;
});
onUnmounted(() => {
  myMainStore.$patch((state) => {
    state.isShowBottom = true;
  });
});
const goBack = () => router.push("/home");
</script>
<style lang="less" scoped></style>
