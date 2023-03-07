<script setup>
import { Icon } from "@iconify/vue";
import AppMenu from "./AppMenu.vue";
import SlideSelector from "./SlideSelector.vue";

import { useProductStore } from "../stores/product";
const productStore = useProductStore();
console.log(productStore.colors);
</script>
<template>
  <div class="product-details">
    <AppMenu />
    <div class="details">
      <div class="stars">
        <img src="../assets/img/stars.svg" alt="" />
      </div>
      <div class="product-name">
        <h3>Hope Large Two-Tone Saffiano Leather Satchel</h3>
      </div>
      <div class="product-code">
        <h3>Style 351GGYx847</h3>
      </div>
      <div class="price">
        <h1>$365.65</h1>
      </div>
      <div class="variants">
        <h3>Colors</h3>
        <div class="colors">
          <template v-for="(color,index) in productStore.colors">
            <div
              class="rounded color"
              :class="color, {'color-active': productStore.activeColor == color }"
              @click="productStore.changeActiveColor(color,index)"
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
    <SlideSelector />
  </div>
</template>
