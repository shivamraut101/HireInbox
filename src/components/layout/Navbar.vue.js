import { RouterLink } from 'vue-router';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
const __VLS_props = defineProps();
const __VLS_emit = defineEmits();
const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Companies', path: '/companies' },
    { name: 'Profile', path: '/profile' },
]; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
        ...{ class: ("bg-white dark:bg-gray-800 shadow-lg") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container mx-auto px-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between h-16") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center") },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ("/"),
        ...{ class: ("text-xl font-bold text-primary-600") },
    }));
    const __VLS_2 = __VLS_1({
        to: ("/"),
        ...{ class: ("text-xl font-bold text-primary-600") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("ml-10 flex space-x-4") },
    });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navigation))) {
        const __VLS_6 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            key: ((item.name)),
            to: ((item.path)),
            ...{ class: ("px-3 py-2 rounded-md text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400") },
            ...{ class: ((__VLS_ctx.$route.path === item.path ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300')) },
        }));
        const __VLS_8 = __VLS_7({
            key: ((item.name)),
            to: ((item.path)),
            ...{ class: ("px-3 py-2 rounded-md text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400") },
            ...{ class: ((__VLS_ctx.$route.path === item.path ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300')) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        (item.name);
        __VLS_11.slots.default;
        var __VLS_11;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center space-x-4") },
    });
    if (__VLS_ctx.authStore.isAuthenticated) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-sm") },
        });
        (__VLS_ctx.authStore.user?.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.authStore.logout) },
            ...{ class: ("text-sm text-gray-600 hover:text-primary-600") },
        });
    }
    else {
        const __VLS_12 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            to: ("/login"),
            ...{ class: ("btn-primary") },
        }));
        const __VLS_14 = __VLS_13({
            to: ("/login"),
            ...{ class: ("btn-primary") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_17.slots.default;
        var __VLS_17;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.$emit('toggleTheme');
            } },
        ...{ class: ("p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700") },
    });
    if (__VLS_ctx.isDark) {
        const __VLS_18 = {}.SunIcon;
        /** @type { [typeof __VLS_components.SunIcon, ] } */ ;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
            ...{ class: ("h-6 w-6") },
        }));
        const __VLS_20 = __VLS_19({
            ...{ class: ("h-6 w-6") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    }
    else {
        const __VLS_24 = {}.MoonIcon;
        /** @type { [typeof __VLS_components.MoonIcon, ] } */ ;
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
            ...{ class: ("h-6 w-6") },
        }));
        const __VLS_26 = __VLS_25({
            ...{ class: ("h-6 w-6") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    }
    ['bg-white', 'dark:bg-gray-800', 'shadow-lg', 'container', 'mx-auto', 'px-4', 'flex', 'justify-between', 'h-16', 'flex', 'items-center', 'text-xl', 'font-bold', 'text-primary-600', 'ml-10', 'flex', 'space-x-4', 'px-3', 'py-2', 'rounded-md', 'text-sm', 'font-medium', 'hover:text-primary-600', 'dark:hover:text-primary-400', 'flex', 'items-center', 'space-x-4', 'text-sm', 'text-sm', 'text-gray-600', 'hover:text-primary-600', 'btn-primary', 'p-2', 'rounded-lg', 'hover:bg-gray-100', 'dark:hover:bg-gray-700', 'h-6', 'w-6', 'h-6', 'w-6',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterLink: RouterLink,
            SunIcon: SunIcon,
            MoonIcon: MoonIcon,
            authStore: authStore,
            navigation: navigation,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
