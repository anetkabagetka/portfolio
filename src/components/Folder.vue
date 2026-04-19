<template>
    <div class="folder">
        <nav class="folder-menu">
            <RouterLink to="/" exact-active-class="active" class="home-link">home</RouterLink>
            <RouterLink to="/about" exact-active-class="active" class="about-link">about</RouterLink>
            <RouterLink to="/works" exact-active-class="active" class="works-link">works</RouterLink>
        </nav>
        <div class="folder-content">
            <h2>Welcome!</h2>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>