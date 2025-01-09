import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const job = ref({
    id: route.params.id,
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    location: 'Remote',
    salary: '$120k - $150k',
    type: 'Full-time',
    description: [
        '5+ years of experience with modern JavaScript frameworks',
        'Strong understanding of Vue.js or React',
        'Experience with TypeScript',
        'Knowledge of modern CSS practices',
        'Experience with responsive design'
    ].join('\n'),
    requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of frontend development experience',
        'Strong proficiency in JavaScript/TypeScript',
        'Experience with Vue.js or React',
        'Knowledge of modern frontend build tools'
    ],
    benefits: [
        'Competitive salary',
        'Remote work options',
        'Health insurance',
        'Flexible hours',
        '401(k) matching'
    ]
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
        ...{ class: ("flex justify-between items-start") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-3xl font-bold mb-2") },
    });
    (__VLS_ctx.job.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-xl text-gray-600 dark:text-gray-400 mb-4") },
    });
    (__VLS_ctx.job.company);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex space-x-4 mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full") },
    });
    (__VLS_ctx.job.location);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full") },
    });
    (__VLS_ctx.job.type);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full") },
    });
    (__VLS_ctx.job.salary);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("btn-primary") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("prose dark:prose-invert max-w-none") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-semibold mb-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6 whitespace-pre-line") },
    });
    (__VLS_ctx.job.description);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-semibold mb-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("list-disc pl-6 mb-6") },
    });
    for (const [req] of __VLS_getVForSourceType((__VLS_ctx.job.requirements))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: ((req)),
            ...{ class: ("mb-2") },
        });
        (req);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-semibold mb-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("list-disc pl-6") },
    });
    for (const [benefit] of __VLS_getVForSourceType((__VLS_ctx.job.benefits))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: ((benefit)),
            ...{ class: ("mb-2") },
        });
        (benefit);
    }
    ['max-w-4xl', 'mx-auto', 'card', 'mb-6', 'flex', 'justify-between', 'items-start', 'text-3xl', 'font-bold', 'mb-2', 'text-xl', 'text-gray-600', 'dark:text-gray-400', 'mb-4', 'flex', 'space-x-4', 'mb-6', 'px-3', 'py-1', 'bg-gray-100', 'dark:bg-gray-700', 'rounded-full', 'px-3', 'py-1', 'bg-gray-100', 'dark:bg-gray-700', 'rounded-full', 'px-3', 'py-1', 'bg-gray-100', 'dark:bg-gray-700', 'rounded-full', 'btn-primary', 'prose', 'dark:prose-invert', 'max-w-none', 'text-xl', 'font-semibold', 'mb-2', 'mb-6', 'whitespace-pre-line', 'text-xl', 'font-semibold', 'mb-2', 'list-disc', 'pl-6', 'mb-6', 'mb-2', 'text-xl', 'font-semibold', 'mb-2', 'list-disc', 'pl-6', 'mb-2',];
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
            job: job,
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
