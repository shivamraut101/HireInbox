<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

watch(isDark, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})
</script>

<template>
  <div class="min-h-screen">
    <Navbar :isDark="isDark" @toggle-theme="isDark = !isDark" />
    <main class="container mx-auto px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>