<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userType = ref('jobseeker')
const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const handleRegister = () => {
  // TODO: Implement registration logic
  console.log('Registering as:', userType.value, form.value)
  router.push('/login')
}
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center">
    <div class="card w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Create an Account</h2>
      
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

      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">
            {{ userType === 'jobseeker' ? 'Full Name' : 'Company Name' }}
          </label>
          <input
            type="text"
            v-model="form.name"
            required
            class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          >
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            v-model="form.email"
            required
            class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          >
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            v-model="form.password"
            required
            class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          >
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            v-model="form.confirmPassword"
            required
            class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          >
        </div>

        <button type="submit" class="w-full btn-primary">
          Create Account
        </button>
      </form>

      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Already have an account?
          <RouterLink to="/login" class="text-primary-600 hover:text-primary-500">
            Sign in
          </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>