<template>
    <Folder />
    <div id="particles-js"></div>
</template>

<script setup>
import Folder from '@/components/Folder.vue';
import { onMounted } from 'vue';
import particlesConfig from '@/assets/particlesjs-config.json';
import particlesSource from 'particles.js?raw';
const flowerUrl = new URL('../assets/flower.svg', import.meta.url).href;

onMounted(() => {
    const initParticles = () => {
        if (window.particlesJS) {
            const particlesOptions = JSON.parse(JSON.stringify(particlesConfig));
            particlesOptions.particles.shape.type = 'image';
            particlesOptions.particles.shape.image.src = flowerUrl;
            window.particlesJS('particles-js', particlesOptions);
        }
    };

    if (window.particlesJS) {
        initParticles();
        return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = particlesSource;
    document.head.appendChild(script);

    requestAnimationFrame(initParticles);
});
</script>

<style scoped>
#particles-js {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    pointer-events: none;
}
</style>