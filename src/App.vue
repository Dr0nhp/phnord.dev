<template>
  <TheHeader v-if="!isFullPageRoute" />

  <main class="page-content-wrapper" :class="{ 'full-page': isFullPageRoute }">
    <RouterView />
  </main>

  <TheFooter v-if="!isFullPageRoute" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

const route = useRoute()

// Hide header/footer for full-page routes like the crafting calculator
const isFullPageRoute = computed(() => {
  return route.path === '/crafting-calc'
})
</script>

<style>
.page-content-wrapper.full-page {
  padding: 0 !important;
  margin: 0 !important;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>