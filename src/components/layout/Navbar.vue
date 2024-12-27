<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useAuthStore } from '../../stores/auth'

const authStore = useAuthStore()

defineProps<{
  isDark: boolean
}>()

defineEmits<{
  (e: 'toggleTheme'): void
}>()

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'Companies', path: '/companies' },
  { name: 'Profile', path: '/profile' },
]
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="text-xl font-bold text-primary-600">
            Hiring Inbox
          </RouterLink>
          <div class="ml-10 flex space-x-4">
            <RouterLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.path"
              class="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400"
              :class="$route.path === item.path ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300'"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <template v-if="authStore.isAuthenticated">
            <span class="text-sm">{{ authStore.user?.name }}</span>
            <button @click="authStore.logout" class="text-sm text-gray-600 hover:text-primary-600">
              Sign Out
            </button>
          </template>
          <template v-else>
            <RouterLink to="/login" class="btn-primary">
              Sign In
            </RouterLink>
          </template>
          <button
            @click="$emit('toggleTheme')"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <SunIcon v-if="isDark" class="h-6 w-6" />
            <MoonIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>