<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
    <div class="app-menu">
            <div class="search">
                <Icon icon="heroicons:magnifying-glass" class="app-icon c-pointer" />
            </div>
            <div class="cart">
                <Icon icon="heroicons:shopping-bag" class="app-icon c-pointer" />
            </div>
            <div class="account">
                <Icon icon="heroicons:user" class="app-icon c-pointer" />
            </div>
        </div>
</template>