<script setup lang="ts">
import { ref } from 'vue'
import { useCompaniesStore } from '@/stores/companies'

const companiesStore = useCompaniesStore()

const form = ref({
  name: '',
  industry: '',
  location: '',
  size: '',
  description: '',
  about: ''
})

const emit = defineEmits<{
  (e: 'submit'): void
}>()

async function handleSubmit() {
  await companiesStore.createCompany(form.value)
  emit('submit')
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label class="block text-sm font-medium mb-1">Company Name</label>
      <input
        type="text"
        v-model="form.name"
        required
        class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
      >
    </div>

    <div>
      <label class="block text-sm font-medium mb-1">Industry</label>
      <input
        type="text"
        v-model="form.industry"
        required
        class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
      >
    </div>

    <div>
      <label class="block text-sm font-medium mb-1">Location</label>
      <input
        type="text"
        v-model="form.location"
        required
        class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
      >
    </div>

    <div>
      <label class="block text-sm font-medium mb-1">Company Size</label>
      <select
        v-model="form.size"
        required
        class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
      >
        <option>1-10 employees</option>
        <option>11-50 employees</option>
        <option>51-200 employees</option>
        <option>201-500 employees</option>
        <option>501-1000 employees</option>
        <option>1000+ employees</option>
      </select>
    </div>

    <div>
      <label class="block text-sm font-medium mb-1">Short Description</label>
      <input
        type="text"
        v-model="form.description"
        required
        class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
      >
    </div>

    <div>
      <label class="block text-sm font-medium mb-1">About Company</label>
      <textarea
        v-model="form.about"
        rows="4"
        required
        class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
      ></textarea>
    </div>

    <button type="submit" class="btn-primary">
      Create Company Profile
    </button>
  </form>
</template>