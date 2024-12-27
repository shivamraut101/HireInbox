<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const company = ref({
  id: route.params.id,
  name: 'Tech Corp',
  industry: 'Technology',
  location: 'San Francisco, CA',
  size: '1000-5000 employees',
  description: 'Leading technology company focused on innovation',
  about: `Tech Corp is a leading technology company that has been at the forefront of innovation for over a decade. We specialize in creating cutting-edge solutions that help businesses transform their digital presence.`,
  openPositions: [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      type: 'Full-time',
      location: 'San Francisco, CA',
    },
  ],
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="card mb-6">
      <div class="flex justify-between items-start mb-6">
        <div>
          <h1 class="text-3xl font-bold mb-2">{{ company.name }}</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">{{ company.description }}</p>
        </div>
        <RouterLink :to="`/companies/${company.id}/jobs`" class="btn-primary">
          View All Jobs
        </RouterLink>
      </div>

      <div class="grid grid-cols-3 gap-4 mb-6">
        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 class="font-medium mb-1">Industry</h3>
          <p>{{ company.industry }}</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 class="font-medium mb-1">Location</h3>
          <p>{{ company.location }}</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 class="font-medium mb-1">Company Size</h3>
          <p>{{ company.size }}</p>
        </div>
      </div>

      <div class="prose dark:prose-invert max-w-none">
        <h2 class="text-xl font-semibold mb-4">About {{ company.name }}</h2>
        <p class="mb-6">{{ company.about }}</p>

        <h2 class="text-xl font-semibold mb-4">Open Positions</h2>
        <div class="space-y-4">
          <div
            v-for="position in company.openPositions"
            :key="position.id"
            class="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div>
              <h3 class="font-medium">{{ position.title }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ position.type }} · {{ position.location }}
              </p>
            </div>
            <RouterLink :to="`/jobs/${position.id}`" class="btn-primary">
              View Job
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>