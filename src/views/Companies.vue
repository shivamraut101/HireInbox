<script setup lang="ts">
import { onMounted } from 'vue'
import { useCompaniesStore } from '../stores/companies'
import { useAuthStore } from '../stores/auth'

const companiesStore = useCompaniesStore()
const authStore = useAuthStore()

onMounted(() => {
  companiesStore.fetchCompanies()
})
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Companies</h1>
      <RouterLink 
        v-if="authStore.user?.type === 'company' && !authStore.user?.companyId"
        to="/companies/new" 
        class="btn-primary"
      >
        Add Company
      </RouterLink>
    </div>
    
    <div class="mb-6">
      <input
        type="text"
        placeholder="Search companies..."
        class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
      >
    </div>

    <div v-if="companiesStore.loading" class="text-center py-8">
      Loading companies...
    </div>

    <div v-else class="grid md:grid-cols-2 gap-6">
      <RouterLink
        v-for="company in companiesStore.companies"
        :key="company.id"
        :to="`/companies/${company.id}`"
        class="card hover:shadow-lg transition-shadow"
      >
        <h2 class="text-xl font-semibold mb-2">{{ company.name }}</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">{{ company.description }}</p>
        <div class="space-y-2">
          <div class="flex items-center text-sm">
            <span class="font-medium mr-2">Industry:</span>
            {{ company.industry }}
          </div>
          <div class="flex items-center text-sm">
            <span class="font-medium mr-2">Location:</span>
            {{ company.location }}
          </div>
          <div class="flex items-center text-sm">
            <span class="font-medium mr-2">Size:</span>
            {{ company.size }}
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>