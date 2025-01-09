import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const job = ref({
    title: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    requirements: '',
    benefits: ''
});
const handleSubmit = () => {
    // TODO: Implement job posting
    console.log('Posting job:', job.value);
    router.push('/jobs');
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("max-w-4xl mx-auto") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("card") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-3xl font-bold mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        ...{ onSubmit: (__VLS_ctx.handleSubmit) },
        ...{ class: ("space-y-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        type: ("text"),
        value: ((__VLS_ctx.job.title)),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        type: ("text"),
        value: ((__VLS_ctx.job.location)),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.job.type)),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        type: ("text"),
        value: ((__VLS_ctx.job.salary)),
        placeholder: ("e.g., $80k - $100k"),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.job.description)),
        rows: ("5"),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.job.requirements)),
        rows: ("4"),
        required: (true),
        placeholder: ("Enter each requirement on a new line"),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.job.benefits)),
        rows: ("4"),
        required: (true),
        placeholder: ("Enter each benefit on a new line"),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: ("submit"),
        ...{ class: ("btn-primary") },
    });
    ['max-w-4xl', 'mx-auto', 'card', 'text-3xl', 'font-bold', 'mb-6', 'space-y-6', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'grid', 'grid-cols-2', 'gap-4', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'btn-primary',];
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
            handleSubmit: handleSubmit,
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
