<script setup>
defineProps({
  brand: String,
  pPic:String,
  activeColor: String
});
// console.log(p)
</script>
<template>
  <div class="product-image" :class="activeColor">
    <h2 class="brand-name">{{ brand }}</h2>

        <transition name="translatex">
          <img
          :src="`src/assets/img/${pPic}_${activeColor}.png`"
          :alt="`${pPic}_${activeColor}`"
          :key="`src/assets/img/${pPic}_${activeColor}.png`"
        />
        </transition>


  </div>
</template>
