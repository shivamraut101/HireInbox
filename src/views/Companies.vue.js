import { onMounted } from 'vue';
import { useCompaniesStore } from '../stores/companies';
import { useAuthStore } from '../stores/auth';
const companiesStore = useCompaniesStore();
const authStore = useAuthStore();
onMounted(() => {
    companiesStore.fetchCompanies();
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
    if (__VLS_ctx.authStore.user?.type === 'company' && !__VLS_ctx.authStore.user?.companyId) {
        const __VLS_0 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            to: ("/companies/new"),
            ...{ class: ("btn-primary") },
        }));
        const __VLS_2 = __VLS_1({
            to: ("/companies/new"),
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
        placeholder: ("Search companies..."),
        ...{ class: ("w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600") },
    });
    if (__VLS_ctx.companiesStore.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-center py-8") },
        });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("grid md:grid-cols-2 gap-6") },
        });
        for (const [company] of __VLS_getVForSourceType((__VLS_ctx.companiesStore.companies))) {
            const __VLS_6 = {}.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
                key: ((company.id)),
                to: ((`/companies/${company.id}`)),
                ...{ class: ("card hover:shadow-lg transition-shadow") },
            }));
            const __VLS_8 = __VLS_7({
                key: ((company.id)),
                to: ((`/companies/${company.id}`)),
                ...{ class: ("card hover:shadow-lg transition-shadow") },
            }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
                ...{ class: ("text-xl font-semibold mb-2") },
            });
            (company.name);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
                ...{ class: ("text-gray-600 dark:text-gray-400 mb-4") },
            });
            (company.description);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex items-center text-sm") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("font-medium mr-2") },
            });
            (company.industry);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex items-center text-sm") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("font-medium mr-2") },
            });
            (company.location);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex items-center text-sm") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("font-medium mr-2") },
            });
            (company.size);
            __VLS_11.slots.default;
            var __VLS_11;
        }
    }
    ['flex', 'justify-between', 'items-center', 'mb-8', 'text-3xl', 'font-bold', 'btn-primary', 'mb-6', 'w-full', 'px-4', 'py-2', 'rounded-lg', 'border', 'dark:bg-gray-700', 'dark:border-gray-600', 'text-center', 'py-8', 'grid', 'md:grid-cols-2', 'gap-6', 'card', 'hover:shadow-lg', 'transition-shadow', 'text-xl', 'font-semibold', 'mb-2', 'text-gray-600', 'dark:text-gray-400', 'mb-4', 'space-y-2', 'flex', 'items-center', 'text-sm', 'font-medium', 'mr-2', 'flex', 'items-center', 'text-sm', 'font-medium', 'mr-2', 'flex', 'items-center', 'text-sm', 'font-medium', 'mr-2',];
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
            companiesStore: companiesStore,
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
