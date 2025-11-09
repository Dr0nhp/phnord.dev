<template>
  <div id="app">
    <TheHeader />

    <main class="page-content-wrapper">
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<style scoped>

#app {
  min-height: 99vh;
  display: flex;
  flex-direction: column;
}

.page-content-wrapper {
  flex-grow: 1;
}
</style>