<script setup lang="ts">
import { ref } from 'vue'

const profile = ref({
  name: 'John Doe',
  title: 'Senior Frontend Developer',
  email: 'john.doe@example.com',
  location: 'San Francisco, CA',
  about: 'Experienced frontend developer with a passion for creating beautiful and functional user interfaces.',
  experience: [
    {
      id: 1,
      company: 'Tech Corp',
      title: 'Senior Frontend Developer',
      period: '2020 - Present',
      description: 'Leading frontend development team and implementing new features.',
    },
    {
      id: 2,
      company: 'StartUp Inc',
      title: 'Frontend Developer',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple web applications.',
    },
  ],
  education: [
    {
      id: 1,
      school: 'University of Technology',
      degree: 'BS in Computer Science',
      year: '2018',
    },
  ],
  skills: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'HTML', 'CSS', 'Git'],
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="card mb-6">
      <div class="flex justify-between items-start mb-6">
        <div>
          <h1 class="text-3xl font-bold mb-2">{{ profile.name }}</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">{{ profile.title }}</p>
          <div class="mt-2 space-x-4">
            <span class="text-sm text-gray-600 dark:text-gray-400">
              {{ profile.email }}
            </span>
            <span class="text-sm text-gray-600 dark:text-gray-400">
              {{ profile.location }}
            </span>
          </div>
        </div>
        <button class="btn-primary">Edit Profile</button>
      </div>

      <div class="prose dark:prose-invert max-w-none">
        <h2 class="text-xl font-semibold mb-2">About</h2>
        <p class="mb-6">{{ profile.about }}</p>

        <h2 class="text-xl font-semibold mb-4">Experience</h2>
        <div class="space-y-6 mb-6">
          <div v-for="exp in profile.experience" :key="exp.id">
            <h3 class="font-medium">{{ exp.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ exp.company }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ exp.period }}</p>
            <p class="mt-2">{{ exp.description }}</p>
          </div>
        </div>

        <h2 class="text-xl font-semibold mb-4">Education</h2>
        <div class="space-y-4 mb-6">
          <div v-for="edu in profile.education" :key="edu.id">
            <h3 class="font-medium">{{ edu.school }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ edu.degree }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ edu.year }}</p>
          </div>
        </div>

        <h2 class="text-xl font-semibold mb-4">Skills</h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in profile.skills"
            :key="skill"
            class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>