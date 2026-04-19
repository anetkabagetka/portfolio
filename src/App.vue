<script setup>
import "./style.css";
</script>

<template>
    <div :class="$route.name + '-page'">
        <RouterView />
    </div>
</template>

<style scoped></style>
