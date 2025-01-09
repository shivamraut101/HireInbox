import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const userType = ref('jobseeker');
const form = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
});
const handleRegister = () => {
    // TODO: Implement registration logic
    console.log('Registering as:', userType.value, form.value);
    router.push('/login');
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("min-h-[80vh] flex items-center justify-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("card w-full max-w-md") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-2xl font-bold mb-6 text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex rounded-md shadow-sm") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.userType = 'jobseeker';
            } },
        ...{ class: (([
                'flex-1 px-4 py-2 text-sm rounded-l-md',
                __VLS_ctx.userType === 'jobseeker'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700'
            ])) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.userType = 'company';
            } },
        ...{ class: (([
                'flex-1 px-4 py-2 text-sm rounded-r-md',
                __VLS_ctx.userType === 'company'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700'
            ])) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        ...{ onSubmit: (__VLS_ctx.handleRegister) },
        ...{ class: ("space-y-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    (__VLS_ctx.userType === 'jobseeker' ? 'Full Name' : 'Company Name');
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
        type: ("email"),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    (__VLS_ctx.form.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        type: ("password"),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    (__VLS_ctx.form.password);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        type: ("password"),
        required: (true),
        ...{ class: ("w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600") },
    });
    (__VLS_ctx.form.confirmPassword);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: ("submit"),
        ...{ class: ("w-full btn-primary") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-4 text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-sm text-gray-600 dark:text-gray-400") },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ("/login"),
        ...{ class: ("text-primary-600 hover:text-primary-500") },
    }));
    const __VLS_2 = __VLS_1({
        to: ("/login"),
        ...{ class: ("text-primary-600 hover:text-primary-500") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_5.slots.default;
    var __VLS_5;
    ['min-h-[80vh]', 'flex', 'items-center', 'justify-center', 'card', 'w-full', 'max-w-md', 'text-2xl', 'font-bold', 'mb-6', 'text-center', 'mb-6', 'flex', 'rounded-md', 'shadow-sm', 'flex-1', 'px-4', 'py-2', 'text-sm', 'rounded-l-md', 'flex-1', 'px-4', 'py-2', 'text-sm', 'rounded-r-md', 'space-y-4', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'block', 'text-sm', 'font-medium', 'mb-1', 'w-full', 'rounded-md', 'border-gray-300', 'dark:bg-gray-700', 'dark:border-gray-600', 'w-full', 'btn-primary', 'mt-4', 'text-center', 'text-sm', 'text-gray-600', 'dark:text-gray-400', 'text-primary-600', 'hover:text-primary-500',];
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
            userType: userType,
            form: form,
            handleRegister: handleRegister,
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
