<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/" id="home">Phnord.dev</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>

    <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle dark mode">
      <span class="theme-toggle__icon">{{ isDark ? '☀️' : '🌙' }}</span>
    </button>
  </header>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const isDark = ref(false)

// Load saved theme preference
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.body.classList.add('dark-mode')
  }S
})

// Toggle theme
const toggleTheme = () => {
  isDark.value = !isDark.value

  if (isDark.value) {
    document.body.classList.add('dark-mode')
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('theme', 'light')
  }
}
</script>
