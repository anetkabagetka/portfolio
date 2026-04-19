<template>
    <nav class="folder-menu navigation">
        <RouterLink to="/" exact-active-class="active" class="home-link">home</RouterLink>
        <RouterLink to="/about" exact-active-class="active" class="about-link">about</RouterLink>
        <RouterLink to="/works" exact-active-class="active" class="works-link">works</RouterLink>
    </nav>
</template>

<script setup>
// show spinner view for 1.25 seconds before loading the page clicked by the user
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
    const links = document.querySelectorAll('.folder-menu.navigation a');
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