import { ref } from 'vue';
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
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("max-w-4xl mx-auto") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("card mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-start mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-3xl font-bold mb-2") },
    });
    (__VLS_ctx.profile.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-xl text-gray-600 dark:text-gray-400") },
    });
    (__VLS_ctx.profile.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-2 space-x-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-sm text-gray-600 dark:text-gray-400") },
    });
    (__VLS_ctx.profile.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-sm text-gray-600 dark:text-gray-400") },
    });
    (__VLS_ctx.profile.location);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("btn-primary") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("prose dark:prose-invert max-w-none") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-semibold mb-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("mb-6") },
    });
    (__VLS_ctx.profile.about);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-semibold mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6 mb-6") },
    });
    for (const [exp] of __VLS_getVForSourceType((__VLS_ctx.profile.experience))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((exp.id)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("font-medium") },
        });
        (exp.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-gray-600 dark:text-gray-400") },
        });
        (exp.company);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-sm text-gray-600 dark:text-gray-400") },
        });
        (exp.period);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("mt-2") },
        });
        (exp.description);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-semibold mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4 mb-6") },
    });
    for (const [edu] of __VLS_getVForSourceType((__VLS_ctx.profile.education))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((edu.id)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("font-medium") },
        });
        (edu.school);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-gray-600 dark:text-gray-400") },
        });
        (edu.degree);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-sm text-gray-600 dark:text-gray-400") },
        });
        (edu.year);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-semibold mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-wrap gap-2") },
    });
    for (const [skill] of __VLS_getVForSourceType((__VLS_ctx.profile.skills))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            key: ((skill)),
            ...{ class: ("px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm") },
        });
        (skill);
    }
    ['max-w-4xl', 'mx-auto', 'card', 'mb-6', 'flex', 'justify-between', 'items-start', 'mb-6', 'text-3xl', 'font-bold', 'mb-2', 'text-xl', 'text-gray-600', 'dark:text-gray-400', 'mt-2', 'space-x-4', 'text-sm', 'text-gray-600', 'dark:text-gray-400', 'text-sm', 'text-gray-600', 'dark:text-gray-400', 'btn-primary', 'prose', 'dark:prose-invert', 'max-w-none', 'text-xl', 'font-semibold', 'mb-2', 'mb-6', 'text-xl', 'font-semibold', 'mb-4', 'space-y-6', 'mb-6', 'font-medium', 'text-gray-600', 'dark:text-gray-400', 'text-sm', 'text-gray-600', 'dark:text-gray-400', 'mt-2', 'text-xl', 'font-semibold', 'mb-4', 'space-y-4', 'mb-6', 'font-medium', 'text-gray-600', 'dark:text-gray-400', 'text-sm', 'text-gray-600', 'dark:text-gray-400', 'text-xl', 'font-semibold', 'mb-4', 'flex', 'flex-wrap', 'gap-2', 'px-3', 'py-1', 'bg-gray-100', 'dark:bg-gray-700', 'rounded-full', 'text-sm',];
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
            profile: profile,
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
