<template>
    <div class="folder">
        <nav class="folder-menu">
            <RouterLink to="/" exact-active-class="active" class="home-link">home</RouterLink>
            <RouterLink to="/about" exact-active-class="active" class="about-link">about</RouterLink>
            <RouterLink to="/works" exact-active-class="active" class="works-link">works</RouterLink>
        </nav>
        <div class="folder-content">
            <div class="shadow-box"></div>
            <h2 class="welcome-title">*Welcome*</h2>
        </div>
    </div>
</template>

<script setup>
// show spinner view for 1.25 seconds before loading the page clicked by the user
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
    const links = document.querySelectorAll('.folder-menu a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            router.push('/spinner');
            setTimeout(() => {
                router.push(href);
            }, 1250);
        });
    });
});
</script>

<style scoped>
.shadow-box {
    position: absolute;
    right: 0;
    top: 0;
    left: auto;
    width: 406px;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.1);
    filter: blur(1px);
    z-index:18;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.5);
}
</style>