<script setup>
import { ref, reactive, computed } from "vue";
import { useProductStore } from "../stores/product";
const productStore = useProductStore();
</script>
<template>
    <div class="slide-selector">
        <div class="selector rounded" v-for="(n, index) in productStore.porducts" :key="n"
            @click="productStore.changePosition(index)">
        </div>
    </div>
</template>

