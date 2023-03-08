import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      porducts: [
        {
          pId:1,
          brand:"michael kors",
          pPic:"women_bag",
          pName:"Hope Large Two-Tone Saffiano Leather Satchel",
          pStyle: "351GGYx847",
          pPrice: "x1x.65",
          pColors: ["green", "purple", "brown"],
          activeColor: "green",
        },
        {
          pId:2,
          brand:"michael kors mens",
          pPic:"33S2MHDB2T",
          pName:"Hudson Leather Backpack",
          pStyle: "33S2MHDB2T",
          pPrice: "x7x.50",
          pColors: ["lightblue", "black", "cream"],
          activeColor: "cream",
        },
        {
          pId:3,
          brand:"michael kors",
          pPic:"33F2LBKB6O",
          pName:"Brooklyn Quilted Nylon Backpack",
          pStyle: "33F2LBKB6O",
          pPrice: "x6x.55",
          pColors: ["blue", "red"],
          activeColor: "red",
        },
      ],
      pos: 0,
    };
  },
  getters: {
    contentPosition: (state) => {
      return state.pos+'%';
    }
  },
  actions: {
    changeActiveColor(pId, cIndex) {
      let product = this.porducts.filter((product) => product.pId == pId);
      product[0].activeColor = product[0].pColors[cIndex];
      console.log(product[0].activeColor)
    },
    changePosition(index){
      this.pos = ((100*index)*-1)
    }
  },
});
