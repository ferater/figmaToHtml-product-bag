import { defineStore } from "pinia";

export const useColorsStore = defineStore("colors", {
  state: () => {
    const colors = ["blue", "purple", "brown"];
    const activeColor = "blue";
  },
  actions: {},
});
