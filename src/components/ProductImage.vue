<script setup>
import { useProductStore } from "../stores/product";
const productStore = useProductStore();
</script>
<template>
  <div class="product-image" :class="productStore.activeColor">
    <h1>michael kors</h1>

        <img
          :src="`src/assets/img/women_bag_${productStore.activeColor}.png`"
          :alt="`women_bag_${productStore.activeColor}`"
        />


  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
