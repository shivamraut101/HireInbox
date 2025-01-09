import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useAuthStore = defineStore('auth', () => {
    const user = ref({
        id: null,
        name: null,
        email: null,
        type: null,
        companyId: null
    });
    const isAuthenticated = ref(false);
    // Update login to accept email, password, and type
    function login(credentials) {
        // You can log the credentials here to see what they look like
        console.log('Login credentials:', credentials);
        // Simulate successful login based on credentials (use password if necessary)
        user.value = {
            id: '1',
            name: credentials.type === 'company' ? 'Tech Corp' : 'John Doe',
            email: credentials.email,
            type: credentials.type,
            companyId: credentials.type === 'company' ? 'company-id-123' : null,
        };
        isAuthenticated.value = true;
    }
    function logout() {
        user.value = { id: null, name: null, email: null, type: null, companyId: null };
        isAuthenticated.value = false;
    }
    return {
        user,
        isAuthenticated,
        login,
        logout
    };
});
