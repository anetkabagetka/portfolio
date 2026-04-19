<template>
    <img src="@/assets/spinner.png" alt="Loading..." class="spinner" />
</template>

<script setup>

</script>

<style scoped>
.spinner {
    max-width: 510px;
    position: fixed;
    z-index: 100;
    animation: spin 3s linear infinite;
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>