import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<null | {
    id: string
    name: string
    email: string
    type: 'company' | 'jobseeker'
  }>(null)

  const isAuthenticated = ref(false)

  function login(credentials: { email: string; password: string; type: 'company' | 'jobseeker' }) {
    // TODO: Implement actual authentication
    user.value = {
      id: '1',
      name: credentials.type === 'company' ? 'Tech Corp' : 'John Doe',
      email: credentials.email,
      type: credentials.type
    }
    isAuthenticated.value = true
  }

  function logout() {
    user.value = null
    isAuthenticated.value = false
  }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
})