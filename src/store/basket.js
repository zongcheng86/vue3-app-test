import { defineStore } from "pinia";

export const basketStore = defineStore("basket", {
  state: () => ({
    basketData: [],
  }),
  getters: {
    totalCount(state) {
      // let totalCount = 0;
      // state.basketData.forEach((item) => {
      //   totalCount += item.count;
      // });
      return state.basketData.reduce((totalCount, item) => {
        return totalCount + item.count;
      }, 0);
    },
    totalAmount(state) {
      return state.basketData
        .reduce((total, cur) => total + cur.count * cur.product_uprice, 0)
        .toFixed(2);
    }, //总金额
  },
  actions: {
    addItem(item) {
      // 第一种
      // let index = this.basketData.findIndex((v, index) => {
      //   return v.product_id == item.product_id;
      // });
      // if (index != -1) {
      //   this.basketData[index].count++;
      // } else {
      //   item = { ...item, count: 1 };
      //   this.basketData.push(item);
      // }
      // 第二种
      let lists = this.basketData.filter(
        (v) => v.product_id === item.product_id
      );
      if (lists.length > 0) {
        lists[0].count++;
      } else {
        item = { ...item, count: 1 };
        this.basketData.push(item);
      }
    },
    delItem(item) {
      this.basketData.filter((v) => !v.id == item.id);
    },
  },
});
