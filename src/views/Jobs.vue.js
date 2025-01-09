import { onMounted } from 'vue';
import { useJobsStore } from '../stores/jobs';
import { useAuthStore } from '../stores/auth';
const jobsStore = useJobsStore();
const authStore = useAuthStore();
onMounted(() => {
    jobsStore.fetchJobs();
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center mb-8") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-3xl font-bold") },
    });
    if (__VLS_ctx.authStore.user?.type === 'company') {
        const __VLS_0 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            to: ("/post-job"),
            ...{ class: ("btn-primary") },
        }));
        const __VLS_2 = __VLS_1({
            to: ("/post-job"),
            ...{ class: ("btn-primary") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_5.slots.default;
        var __VLS_5;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        type: ("text"),
        placeholder: ("Search jobs..."),
        ...{ class: ("w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600") },
    });
    if (__VLS_ctx.jobsStore.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-center py-8") },
        });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-4") },
        });
        for (const [job] of __VLS_getVForSourceType((__VLS_ctx.jobsStore.jobs))) {
            const __VLS_6 = {}.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
                key: ((job.id)),
                to: ((`/jobs/${job.id}`)),
                ...{ class: ("card hover:shadow-lg transition-shadow block") },
            }));
            const __VLS_8 = __VLS_7({
                key: ((job.id)),
                to: ((`/jobs/${job.id}`)),
                ...{ class: ("card hover:shadow-lg transition-shadow block") },
            }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex justify-between items-start") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
                ...{ class: ("text-xl font-semibold") },
            });
            (job.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
                ...{ class: ("text-gray-600 dark:text-gray-400") },
            });
            (job.company);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mt-2 space-x-2") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("inline-block px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded") },
            });
            (job.location);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("inline-block px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded") },
            });
            (job.type);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("inline-block px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded") },
            });
            (job.salary);
            __VLS_11.slots.default;
            var __VLS_11;
        }
    }
    ['flex', 'justify-between', 'items-center', 'mb-8', 'text-3xl', 'font-bold', 'btn-primary', 'mb-6', 'w-full', 'px-4', 'py-2', 'rounded-lg', 'border', 'dark:bg-gray-700', 'dark:border-gray-600', 'text-center', 'py-8', 'space-y-4', 'card', 'hover:shadow-lg', 'transition-shadow', 'block', 'flex', 'justify-between', 'items-start', 'text-xl', 'font-semibold', 'text-gray-600', 'dark:text-gray-400', 'mt-2', 'space-x-2', 'inline-block', 'px-2', 'py-1', 'text-sm', 'bg-gray-100', 'dark:bg-gray-700', 'rounded', 'inline-block', 'px-2', 'py-1', 'text-sm', 'bg-gray-100', 'dark:bg-gray-700', 'rounded', 'inline-block', 'px-2', 'py-1', 'text-sm', 'bg-gray-100', 'dark:bg-gray-700', 'rounded',];
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
            jobsStore: jobsStore,
            authStore: authStore,
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
