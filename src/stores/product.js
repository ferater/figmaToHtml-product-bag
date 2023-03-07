import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      colors: ["blue", "purple", "brown"],
      activeColor:"blue"
    };
  },
  getters: {},
  actions: {
    changeActiveColor(color,index) {
      this.activeColor = this.colors[index];
    },
  },
});
