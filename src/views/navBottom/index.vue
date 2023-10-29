<template>
  <div class="example">
    <div class="footer">
      <div class="footer-seat">
        <div class="footer-lists">
          <ul>
            <li v-for="v in navData" :key="v.path">
              <router-link :to="v.path" active-class="selected">
                <i class="iconfont" :class="v.icon"></i>
                <span>{{ v.title }}</span>
              </router-link>
              <span class="count" v-show="v.path == '/shop'">{{
                totalCount
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { navData } from "../../utils/common";
import { basketStore } from "../../store/basket";
import { storeToRefs } from "pinia";
const mybasketStore = basketStore();
const { totalCount } = storeToRefs(mybasketStore);
</script>
<style lang="less" scoped></style>
