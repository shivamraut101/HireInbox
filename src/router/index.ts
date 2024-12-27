import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from '../views/Jobs.vue'
import Companies from '../views/Companies.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import PostJob from '../views/jobs/PostJob.vue'
import CompanyProfile from '../views/companies/CompanyProfile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/jobs/:id',
      name: 'job-details',
      component: JobDetails
    },
    {
      path: '/post-job',
      name: 'post-job',
      component: PostJob
    },
    {
      path: '/companies',
      name: 'companies',
      component: Companies
    },
    {
      path: '/companies/:id',
      name: 'company-profile',
      component: CompanyProfile
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router