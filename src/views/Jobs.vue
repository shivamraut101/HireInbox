<script setup lang="ts">
import { onMounted } from 'vue'
import { useJobsStore } from '../stores/jobs'
import { useAuthStore } from '../stores/auth'

const jobsStore = useJobsStore()
const authStore = useAuthStore()

onMounted(() => {
  jobsStore.fetchJobs()
})
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Available Jobs</h1>
      <RouterLink 
        v-if="authStore.user?.type === 'company'"
        to="/post-job" 
        class="btn-primary"
      >
        Post a Job
      </RouterLink>
    </div>
    
    <div class="mb-6">
      <input
        type="text"
        placeholder="Search jobs..."
        class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
      >
    </div>

    <div v-if="jobsStore.loading" class="text-center py-8">
      Loading jobs...
    </div>

    <div v-else class="space-y-4">
      <RouterLink
        v-for="job in jobsStore.jobs"
        :key="job.id"
        :to="`/jobs/${job.id}`"
        class="card hover:shadow-lg transition-shadow block"
      >
        <div class="flex justify-between items-start">
          <div>
            <h2 class="text-xl font-semibold">{{ job.title }}</h2>
            <p class="text-gray-600 dark:text-gray-400">{{ job.company }}</p>
            <div class="mt-2 space-x-2">
              <span class="inline-block px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded">
                {{ job.location }}
              </span>
              <span class="inline-block px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded">
                {{ job.type }}
              </span>
              <span class="inline-block px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded">
                {{ job.salary }}
              </span>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>