<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const job = ref({
  id: route.params.id,
  title: 'Senior Frontend Developer',
  company: 'Tech Corp',
  location: 'Remote',
  salary: '$120k - $150k',
  type: 'Full-time',
  description: [
    '5+ years of experience with modern JavaScript frameworks',
    'Strong understanding of Vue.js or React',
    'Experience with TypeScript',
    'Knowledge of modern CSS practices',
    'Experience with responsive design'
  ].join('\n'),
  requirements: [
    'Bachelor\'s degree in Computer Science or related field',
    '5+ years of frontend development experience',
    'Strong proficiency in JavaScript/TypeScript',
    'Experience with Vue.js or React',
    'Knowledge of modern frontend build tools'
  ],
  benefits: [
    'Competitive salary',
    'Remote work options',
    'Health insurance',
    'Flexible hours',
    '401(k) matching'
  ]
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="card mb-6">
      <div class="flex justify-between items-start">
        <div>
          <h1 class="text-3xl font-bold mb-2">{{ job.title }}</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-4">{{ job.company }}</p>
          <div class="flex space-x-4 mb-6">
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
              {{ job.location }}
            </span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
              {{ job.type }}
            </span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
              {{ job.salary }}
            </span>
          </div>
        </div>
        <button class="btn-primary">Apply Now</button>
      </div>

      <div class="prose dark:prose-invert max-w-none">
        <h2 class="text-xl font-semibold mb-2">Job Description</h2>
        <div class="mb-6 whitespace-pre-line">{{ job.description }}</div>

        <h2 class="text-xl font-semibold mb-2">Requirements</h2>
        <ul class="list-disc pl-6 mb-6">
          <li v-for="req in job.requirements" :key="req" class="mb-2">
            {{ req }}
          </li>
        </ul>

        <h2 class="text-xl font-semibold mb-2">Benefits</h2>
        <ul class="list-disc pl-6">
          <li v-for="benefit in job.benefits" :key="benefit" class="mb-2">
            {{ benefit }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>