<script setup>
import ProductImage from "./ProductImage.vue";

import ProductDetails from "./ProductDetails.vue";
import { useProductStore } from "../stores/product";
const productStore = useProductStore();
console.log(productStore.contentPosition)
</script>

<template>
  <div class="content">
    <template v-for="puroduct in productStore.porducts">
      <ProductImage v-bind="puroduct" />
      <ProductDetails v-bind="puroduct" />
    </template>
  </div>
</template>

<style>
.content {
  translate: 0 v-bind('productStore.contentPosition');
}
</style>