<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

const features = [
  {
    title: 'Smart Job Matching',
    description: 'Our AI-powered system matches you with the perfect opportunities based on your skills and preferences.',
    icon: '🎯'
  },
  {
    title: 'One-Click Apply',
    description: 'Apply to multiple positions quickly and easily with our streamlined application process.',
    icon: '🚀'
  },
  {
    title: 'Real-time Updates',
    description: 'Get instant notifications about application status, interview schedules, and new opportunities.',
    icon: '⚡'
  },
  {
    title: 'Video Interviews',
    description: 'Conduct seamless video interviews directly through our platform.',
    icon: '🎥'
  }
]

const stats = [
  { number: '10K+', label: 'Active Jobs' },
  { number: '5K+', label: 'Companies' },
  { number: '1M+', label: 'Job Seekers' },
  { number: '500K+', label: 'Successful Hires' }
]
</script>

<template>
  <div class="space-y-20">
    <!-- Hero Section -->
    <section class="relative py-20 -mt-8">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-primary-600/5 dark:from-primary-900/20 dark:to-primary-900/10"></div>
      <div class="relative max-w-5xl mx-auto text-center px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 text-transparent bg-clip-text">
          Your Dream Career Starts Here
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Connect with top companies, find your perfect role, and take the next step in your career journey with Hiring Inbox.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink 
            :to="authStore.isAuthenticated ? '/jobs' : '/register'" 
            class="btn-primary text-lg px-8 py-3"
          >
            {{ authStore.isAuthenticated ? 'Browse Jobs' : 'Get Started' }}
          </RouterLink>
          <RouterLink 
            to="/companies" 
            class="px-8 py-3 text-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
          >
            Explore Companies
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="space-y-2"
          >
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400">
              {{ stat.number }}
            </div>
            <div class="text-gray-600 dark:text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <h2 class="text-3xl font-bold text-center mb-12">Why Choose Hiring Inbox?</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="feature in features" 
          :key="feature.title"
          class="card hover:shadow-lg transition-shadow text-center group"
        >
          <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
            {{ feature.icon }}
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-16">
      <div class="absolute inset-0 bg-primary-600 dark:bg-primary-800 rounded-3xl"></div>
      <div class="relative max-w-4xl mx-auto text-center px-4 py-16">
        <h2 class="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Hiring Process?
        </h2>
        <p class="text-xl text-primary-100 mb-8">
          Join thousands of companies who trust Hiring Inbox for their recruitment needs.
        </p>
        <RouterLink 
          to="/register" 
          class="inline-block px-8 py-3 text-lg bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
        >
          Post Your First Job
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.btn-primary {
  @apply bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors;
}
</style>