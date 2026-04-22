<template>
    <div class="work" v-for="work in works" :key="work.id"> 
        <img :src="work.image" :alt="work.title">
        <h3>{{ work.title }}</h3>
        <p>{{ work.description }}</p>
    </div>
</template>

<script setup>
import { works } from '@/data/works.js';
</script>