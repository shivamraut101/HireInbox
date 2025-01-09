import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/auth';
const authStore = useAuthStore();
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
];
const stats = [
    { number: '10K+', label: 'Active Jobs' },
    { number: '5K+', label: 'Companies' },
    { number: '1M+', label: 'Job Seekers' },
    { number: '500K+', label: 'Successful Hires' }
]; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-20") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("relative py-20 -mt-8") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("absolute inset-0 bg-gradient-to-br from-primary-600/10 to-primary-600/5 dark:from-primary-900/20 dark:to-primary-900/10") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("relative max-w-5xl mx-auto text-center px-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 text-transparent bg-clip-text") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col sm:flex-row gap-4 justify-center") },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ((__VLS_ctx.authStore.isAuthenticated ? '/jobs' : '/register')),
        ...{ class: ("btn-primary text-lg px-8 py-3") },
    }));
    const __VLS_2 = __VLS_1({
        to: ((__VLS_ctx.authStore.isAuthenticated ? '/jobs' : '/register')),
        ...{ class: ("btn-primary text-lg px-8 py-3") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    (__VLS_ctx.authStore.isAuthenticated ? 'Browse Jobs' : 'Get Started');
    __VLS_5.slots.default;
    var __VLS_5;
    const __VLS_6 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        to: ("/companies"),
        ...{ class: ("px-8 py-3 text-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700") },
    }));
    const __VLS_8 = __VLS_7({
        to: ("/companies"),
        ...{ class: ("px-8 py-3 text-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_11.slots.default;
    var __VLS_11;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("max-w-7xl mx-auto px-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 md:grid-cols-4 gap-8 text-center") },
    });
    for (const [stat] of __VLS_getVForSourceType((__VLS_ctx.stats))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((stat.label)),
            ...{ class: ("space-y-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-4xl font-bold text-primary-600 dark:text-primary-400") },
        });
        (stat.number);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-gray-600 dark:text-gray-300") },
        });
        (stat.label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("py-16") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-3xl font-bold text-center mb-12") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid md:grid-cols-2 lg:grid-cols-4 gap-8") },
    });
    for (const [feature] of __VLS_getVForSourceType((__VLS_ctx.features))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((feature.title)),
            ...{ class: ("card hover:shadow-lg transition-shadow text-center group") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-4xl mb-4 transform group-hover:scale-110 transition-transform") },
        });
        (feature.icon);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-xl font-semibold mb-2") },
        });
        (feature.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-gray-600 dark:text-gray-400") },
        });
        (feature.description);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("relative py-16") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("absolute inset-0 bg-primary-600 dark:bg-primary-800 rounded-3xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("relative max-w-4xl mx-auto text-center px-4 py-16") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-3xl font-bold text-white mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-xl text-primary-100 mb-8") },
    });
    const __VLS_12 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        to: ("/register"),
        ...{ class: ("inline-block px-8 py-3 text-lg bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors") },
    }));
    const __VLS_14 = __VLS_13({
        to: ("/register"),
        ...{ class: ("inline-block px-8 py-3 text-lg bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_17.slots.default;
    var __VLS_17;
    ['space-y-20', 'relative', 'py-20', '-mt-8', 'absolute', 'inset-0', 'bg-gradient-to-br', 'from-primary-600/10', 'to-primary-600/5', 'dark:from-primary-900/20', 'dark:to-primary-900/10', 'relative', 'max-w-5xl', 'mx-auto', 'text-center', 'px-4', 'text-5xl', 'md:text-6xl', 'font-bold', 'mb-6', 'bg-gradient-to-r', 'from-primary-600', 'to-primary-800', 'dark:from-primary-400', 'dark:to-primary-600', 'text-transparent', 'bg-clip-text', 'text-xl', 'md:text-2xl', 'text-gray-600', 'dark:text-gray-300', 'mb-8', 'max-w-3xl', 'mx-auto', 'flex', 'flex-col', 'sm:flex-row', 'gap-4', 'justify-center', 'btn-primary', 'text-lg', 'px-8', 'py-3', 'px-8', 'py-3', 'text-lg', 'bg-white', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-200', 'rounded-lg', 'hover:bg-gray-50', 'dark:hover:bg-gray-700', 'transition-colors', 'border', 'border-gray-200', 'dark:border-gray-700', 'py-12', 'bg-white', 'dark:bg-gray-800', 'rounded-2xl', 'shadow-lg', 'max-w-7xl', 'mx-auto', 'px-4', 'grid', 'grid-cols-2', 'md:grid-cols-4', 'gap-8', 'text-center', 'space-y-2', 'text-4xl', 'font-bold', 'text-primary-600', 'dark:text-primary-400', 'text-gray-600', 'dark:text-gray-300', 'py-16', 'text-3xl', 'font-bold', 'text-center', 'mb-12', 'grid', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-8', 'card', 'hover:shadow-lg', 'transition-shadow', 'text-center', 'group', 'text-4xl', 'mb-4', 'transform', 'group-hover:scale-110', 'transition-transform', 'text-xl', 'font-semibold', 'mb-2', 'text-gray-600', 'dark:text-gray-400', 'relative', 'py-16', 'absolute', 'inset-0', 'bg-primary-600', 'dark:bg-primary-800', 'rounded-3xl', 'relative', 'max-w-4xl', 'mx-auto', 'text-center', 'px-4', 'py-16', 'text-3xl', 'font-bold', 'text-white', 'mb-4', 'text-xl', 'text-primary-100', 'mb-8', 'inline-block', 'px-8', 'py-3', 'text-lg', 'bg-white', 'text-primary-600', 'rounded-lg', 'hover:bg-primary-50', 'transition-colors',];
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
            authStore: authStore,
            features: features,
            stats: stats,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
