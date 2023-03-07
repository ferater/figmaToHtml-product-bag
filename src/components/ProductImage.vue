<script setup>
import { useProductStore } from "../stores/product";
const productStore = useProductStore();
</script>
<template>
  <div class="product-image" :class="productStore.activeColor">
    <h1>michael kors</h1>

        <transition name="translate">
          <img
          :src="`src/assets/img/women_bag_${productStore.activeColor}.png`"
          :alt="`women_bag_${productStore.activeColor}`"
          :key="`src/assets/img/women_bag_${productStore.activeColor}.png`"
        />
        </transition>


  </div>
</template>
