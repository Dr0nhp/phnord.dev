<template>
    <TheHeader />

    <main class="page-content-wrapper">
      <RouterView />
    </main>

    <TheFooter />
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>