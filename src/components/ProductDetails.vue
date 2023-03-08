<script setup>
import { Icon } from "@iconify/vue";
import AppMenu from "./AppMenu.vue";
import { useProductStore } from "../stores/product";
const productStore = useProductStore();
defineProps({
  pId:Number,
  pName: String,
  pStyle: String,
  pPrice: String,
  pColors: Array,
  activeColor: String,
});
</script>
<template>
  <div class="product-details">
    <AppMenu />
    <div class="details">
      <div class="stars">
        <img src="../assets/img/stars.svg" alt="" />
      </div>
      <div class="product-name">
        <h3>{{ pName }}</h3>
      </div>
      <div class="product-code">
        <h3>Style {{ pStyle }}</h3>
      </div>
      <div class="price">
        <h1>${{ pPrice }}</h1>
      </div>
      <div class="variants">
        <h3>Colors</h3>
        <div class="colors">
          <template v-for="(color,index) in pColors">
            <div
              class="rounded color"
              :class="color, { 'color-active': activeColor == color }"
              @click="productStore.changeActiveColor(pId,index)"
            ></div>
          </template>
        </div>
      </div>
      <div class="quantity">
        <h3>Quantity</h3>
        <div class="quantity-select">
          <select name="quantity" id="quantity-select">
            <option value="n" v-for="n in 5" :key="n">{{ n }}</option>
          </select>
        </div>
      </div>
      <div class="favorites">
        <Icon icon="heroicons:heart" class="fav-icon x-scale" />
        <h5>Add to favorites</h5>
      </div>
      <div class="actions">
        <button class="cart-btn c-pointer x-scale">add to cart</button>
      </div>
    </div>
  </div>
</template>
