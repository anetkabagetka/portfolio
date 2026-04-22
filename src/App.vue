<script setup>
import "./style.css";
import Cursor from "./components/Cursor.vue";
</script>

<template>
    <div :class="$route.name + '-page'">
        <Cursor />
        <RouterView />
    </div>
</template>

<style scoped></style>
