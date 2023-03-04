<script setup>
import { Icon } from "@iconify/vue";
import ProductImage from "./ProductImage.vue";
</script>

<template>
  <div class="content">
    <ProductImage />
    <div class="product-details">
      <div class="app-menu">
        <div class="search">
          <Icon icon="heroicons:magnifying-glass" class="app-icon" />
        </div>
        <div class="cart">
          <Icon icon="heroicons:shopping-bag" class="app-icon" />
        </div>
        <div class="account">
          <Icon icon="heroicons:user" class="app-icon" />
        </div>
      </div>
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
            <div class="rounded color green active"></div>
            <div class="rounded color purple"></div>
            <div class="rounded color brown"></div>
          </div>
        </div>
        <div class="quantity">
          <h3>Quantity</h3>
          <div class="quantity-input">
          <input type="number" name="" id="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
