import { ref } from 'vue';
import { useCompaniesStore } from '@/stores/companies';
const companiesStore = useCompaniesStore();
const form = ref({
    name: '',
    industry: '',
    location: '',
    size: '',
    description: '',
    about: ''
});
const emit = defineEmits();
async function handleSubmit() {
    await companiesStore.createCompany(form.value);
    emit('submit');
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
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
        value: ((__VLS_ctx.form.name)),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        type: ("text"),
        value: ((__VLS_ctx.form.industry)),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        type: ("text"),
        value: ((__VLS_ctx.form.location)),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.form.size)),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
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
        value: ((__VLS_ctx.form.description)),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.form.about)),
        rows: ("4"),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: ("submit"),
        ...{ class: ("btn-primary") },
    });
    ['space-y-6', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'btn-primary',];
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
            form: form,
            handleSubmit: handleSubmit,
        };
    },
    __typeEmits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
