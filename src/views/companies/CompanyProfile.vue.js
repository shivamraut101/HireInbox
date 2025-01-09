import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const company = ref({
    id: route.params.id,
    name: 'Tech Corp',
    industry: 'Technology',
    location: 'San Francisco, CA',
    size: '1000-5000 employees',
    description: 'Leading technology company focused on innovation',
    about: `Tech Corp is a leading technology company that has been at the forefront of innovation for over a decade. We specialize in creating cutting-edge solutions that help businesses transform their digital presence.`,
    openPositions: [
        {
            id: 1,
            title: 'Senior Frontend Developer',
            type: 'Full-time',
            location: 'Remote',
        },
        {
            id: 2,
            title: 'Backend Engineer',
            type: 'Full-time',
            location: 'San Francisco, CA',
        },
    ],
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
    (__VLS_ctx.company.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-xl text-gray-600 dark:text-gray-400") },
    });
    (__VLS_ctx.company.description);
    const __VLS_0 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ((`/companies/${__VLS_ctx.company.id}/jobs`)),
        ...{ class: ("btn-primary") },
    }));
    const __VLS_2 = __VLS_1({
        to: ((`/companies/${__VLS_ctx.company.id}/jobs`)),
        ...{ class: ("btn-primary") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-3 gap-4 mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("p-4 bg-gray-50 dark:bg-gray-700 rounded-lg") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.company.industry);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("p-4 bg-gray-50 dark:bg-gray-700 rounded-lg") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.company.location);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("p-4 bg-gray-50 dark:bg-gray-700 rounded-lg") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.company.size);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("prose dark:prose-invert max-w-none") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-semibold mb-4") },
    });
    (__VLS_ctx.company.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("mb-6") },
    });
    (__VLS_ctx.company.about);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-semibold mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [position] of __VLS_getVForSourceType((__VLS_ctx.company.openPositions))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((position.id)),
            ...{ class: ("flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("font-medium") },
        });
        (position.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-sm text-gray-600 dark:text-gray-400") },
        });
        (position.type);
        (position.location);
        const __VLS_6 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            to: ((`/jobs/${position.id}`)),
            ...{ class: ("btn-primary") },
        }));
        const __VLS_8 = __VLS_7({
            to: ((`/jobs/${position.id}`)),
            ...{ class: ("btn-primary") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_11.slots.default;
        var __VLS_11;
    }
    ['max-w-4xl', 'mx-auto', 'card', 'mb-6', 'flex', 'justify-between', 'items-start', 'mb-6', 'text-3xl', 'font-bold', 'mb-2', 'text-xl', 'text-gray-600', 'dark:text-gray-400', 'btn-primary', 'grid', 'grid-cols-3', 'gap-4', 'mb-6', 'p-4', 'bg-gray-50', 'dark:bg-gray-700', 'rounded-lg', 'font-medium', 'mb-1', 'p-4', 'bg-gray-50', 'dark:bg-gray-700', 'rounded-lg', 'font-medium', 'mb-1', 'p-4', 'bg-gray-50', 'dark:bg-gray-700', 'rounded-lg', 'font-medium', 'mb-1', 'prose', 'dark:prose-invert', 'max-w-none', 'text-xl', 'font-semibold', 'mb-4', 'mb-6', 'text-xl', 'font-semibold', 'mb-4', 'space-y-4', 'flex', 'justify-between', 'items-center', 'p-4', 'bg-gray-50', 'dark:bg-gray-700', 'rounded-lg', 'font-medium', 'text-sm', 'text-gray-600', 'dark:text-gray-400', 'btn-primary',];
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
            company: company,
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
