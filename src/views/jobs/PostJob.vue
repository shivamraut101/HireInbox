<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const job = ref({
  title: '',
  location: '',
  type: 'Full-time',
  salary: '',
  description: '',
  requirements: '',
  benefits: ''
})

const handleSubmit = () => {
  // TODO: Implement job posting
  console.log('Posting job:', job.value)
  router.push('/jobs')
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="card">
      <h1 class="text-3xl font-bold mb-6">Post a New Job</h1>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-1">Job Title</label>
          <input
            type="text"
            v-model="job.title"
            required
            class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          >
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              v-model="job.location"
              required
              class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            >
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Job Type</label>
            <select
              v-model="job.type"
              class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Salary Range</label>
          <input
            type="text"
            v-model="job.salary"
            placeholder="e.g., $80k - $100k"
            required
            class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          >
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Job Description</label>
          <textarea
            v-model="job.description"
            rows="5"
            required
            class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Requirements</label>
          <textarea
            v-model="job.requirements"
            rows="4"
            required
            placeholder="Enter each requirement on a new line"
            class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Benefits</label>
          <textarea
            v-model="job.benefits"
            rows="4"
            required
            placeholder="Enter each benefit on a new line"
            class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
        </div>

        <button type="submit" class="btn-primary">
          Post Job
        </button>
      </form>
    </div>
  </div>
</template>