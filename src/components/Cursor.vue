<template>
    <div class="cursor" :style="{transform: `translate(${x}px,${y}px) translate(-50%,-50%)`}"/>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const x = ref(0);
const y = ref(0);
const moveCursor = (e) => {
    x.value = e.clientX;
    y.value = e.clientY;
};
onMounted(() => {
    window.addEventListener('mousemove', moveCursor);
});
onUnmounted(() => {
    window.removeEventListener('mousemove', moveCursor);
});
</script>

<style scoped>
.cursor {
   position: fixed;
   top: 0;
   left: 0;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   pointer-events: none;
   z-index: 9999;
   backdrop-filter: blur(4px);
   -webkit-backdrop-filter: blur(4px);
   background: rgba(255, 255, 255, 0.1);
   border: 1px solid rgba(255, 255, 255, 0.3);
   transform: translate(-50%,-50%);
   mix-blend-mode: difference;
}
:global(body) {
    cursor: none;
}
</style>