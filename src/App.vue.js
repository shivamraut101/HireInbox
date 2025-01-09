import { ref, watch } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from './components/layout/Navbar.vue';
const isDark = ref(localStorage.getItem('theme') === 'dark');
watch(isDark, (newValue) => {
    if (newValue) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("min-h-screen") },
    });
    // @ts-ignore
    /** @type { [typeof Navbar, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Navbar, new Navbar({
        ...{ 'onToggleTheme': {} },
        isDark: ((__VLS_ctx.isDark)),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onToggleTheme': {} },
        isDark: ((__VLS_ctx.isDark)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onToggleTheme: (...[$event]) => {
            __VLS_ctx.isDark = !__VLS_ctx.isDark;
        }
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
        ...{ class: ("container mx-auto px-4 py-8") },
    });
    const __VLS_7 = {}.RouterView;
    /** @type { [typeof __VLS_components.RouterView, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    ['min-h-screen', 'container', 'mx-auto', 'px-4', 'py-8',];
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
            RouterView: RouterView,
            Navbar: Navbar,
            isDark: isDark,
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
