<template>
    <div class="work" v-for="work in works" :key="work.id"> 
        <img :src="work.image" :alt="work.title" class="work-image">
        <h3 class="work-title">{{ work.title }}</h3>
        <p class="work-description">{{ work.description }}</p>
    </div>
</template>

<script setup>
import { works } from '@/data/works.js';
</script>

<style scoped>
.work {
    box-shadow: 10px 16px 16px rgba(0, 0, 0, 0.2);
    margin-top: 60px;
}
</style>