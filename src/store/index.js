import { defineStore } from "pinia";
export const mainStore = defineStore("main", {
  state: () => ({
    count: 10,
    isShowBottom: true,
  }),
});
