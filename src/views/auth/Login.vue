<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const userType = ref<'jobseeker' | 'company'>('jobseeker')
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    await authStore.login({
      email: email.value,
      password: password.value,
      type: userType.value
    })
    router.push('/')
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center">
    <div class="card w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign In to Hiring Inbox</h2>
      
      <div class="mb-6">
        <div class="flex rounded-md shadow-sm">
          <button
            @click="userType = 'jobseeker'"
            :class="[
              'flex-1 px-4 py-2 text-sm rounded-l-md',
              userType === 'jobseeker'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700'
            ]"
          >
            Job Seeker
          </button>
          <button
            @click="userType = 'company'"
            :class="[
              'flex-1 px-4 py-2 text-sm rounded-r-md',
              userType === 'company'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700'
            ]"
          >
            Company
          </button>
        </div>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            v-model="email"
            required
            class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          >
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            v-model="password"
            required
            class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          >
        </div>

        <button type="submit" class="w-full btn-primary">
          Sign In
        </button>
      </form>

      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?
          <RouterLink to="/register" class="text-primary-600 hover:text-primary-500">
            Sign up
          </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>