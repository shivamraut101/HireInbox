import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useCompaniesStore = defineStore('companies', () => {
    const companies = ref([]);
    const loading = ref(false);
    async function fetchCompanies() {
        loading.value = true;
        try {
            // TODO: Replace with actual API call
            companies.value = [
                {
                    id: 1,
                    name: 'Tech Corp',
                    industry: 'Technology',
                    location: 'San Francisco, CA',
                    size: '1000-5000 employees',
                    description: 'Leading technology company focused on innovation',
                    about: 'Tech Corp is a leading technology company...'
                }
            ];
        }
        finally {
            loading.value = false;
        }
    }
    async function createCompany(company) {
        loading.value = true;
        try {
            // TODO: Replace with actual API call
            const newCompany = {
                ...company,
                id: companies.value.length + 1
            };
            companies.value.push(newCompany);
            return newCompany;
        }
        finally {
            loading.value = false;
        }
    }
    return {
        companies,
        loading,
        fetchCompanies,
        createCompany
    };
});
