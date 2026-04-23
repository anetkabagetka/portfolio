<template>
    <div :class="['cursor', mode]" :style="{ transform: `translate(${x}px,${y}px) translate(-50%,-50%)` }" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const x = ref(0);
const y = ref(0);
const mode = ref('cursor--light');
const moveCursor = (e) => {
    x.value = e.clientX;
    y.value = e.clientY;
    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (!element) return;
    const bg = getEffectiveBackgroundColor(element);
    if (isLight(bg)) {
        mode.value = 'cursor--blue';
    } else {
        mode.value = 'cursor--light';
    }
};
function getEffectiveBackgroundColor(element) {
    let current = element;
    while (current && current !== document.documentElement) {
        const bg = getComputedStyle(current).backgroundColor;
        if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            return bg;
        }
        current = current.parentElement;
    }
    return getComputedStyle(document.body).backgroundColor;
}
function isLight(color) {
    const rgb = color.match(/\d+/g);
    if (!rgb) return false;
    const [r, g, b] = rgb.map(Number);
    // Calculate brightness using the formula: (R*299 + G*587 + B*114) / 1000
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 180; // Threshold for light/dark
}
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
    width: 25px;
    height: 25px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    transform: translate(-50%, -50%);
    transition: background-color 0.3s, border-color 0.3s;
}

.cursor--light {
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.cursor--blue {
    background-color: rgba(67, 69, 156, 0.3);
    border: 1px solid rgba(67, 69, 156, 0.3);
}
</style>