import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useJobsStore = defineStore('jobs', () => {
    const jobs = ref([]);
    const loading = ref(false);
    async function fetchJobs() {
        loading.value = true;
        try {
            // TODO: Replace with actual API call
            jobs.value = [
                {
                    id: 1,
                    title: 'Senior Frontend Developer',
                    company: 'Tech Corp',
                    companyId: 1,
                    location: 'Remote',
                    salary: '$120k - $150k',
                    type: 'Full-time',
                    description: 'We are looking for an experienced frontend developer...',
                    requirements: [
                        'Bachelor\'s degree in Computer Science',
                        '5+ years of experience',
                        'Strong JavaScript skills'
                    ],
                    benefits: [
                        'Competitive salary',
                        'Remote work',
                        'Health insurance'
                    ],
                    createdAt: new Date().toISOString()
                }
            ];
        }
        finally {
            loading.value = false;
        }
    }
    async function createJob(job) {
        loading.value = true;
        try {
            // TODO: Replace with actual API call
            const newJob = {
                ...job,
                id: jobs.value.length + 1,
                createdAt: new Date().toISOString()
            };
            jobs.value.push(newJob);
            return newJob;
        }
        finally {
            loading.value = false;
        }
    }
    return {
        jobs,
        loading,
        fetchJobs,
        createJob
    };
});
