(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$absolute$2d$center$2f$absolute$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/absolute-center/absolute-center.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/button/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$span$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/span/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$spinner$2f$spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/spinner/spinner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = function Button(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "3fbdf9c372423788518cd30e2f4066d48161f107e0c1ea0becf7837cdf493ac6") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3fbdf9c372423788518cd30e2f4066d48161f107e0c1ea0becf7837cdf493ac6";
    }
    let children;
    let disabled;
    let loading;
    let loadingText;
    let rest;
    if ($[1] !== props) {
        ({ loading, disabled, loadingText, children, ...rest } = props);
        $[1] = props;
        $[2] = children;
        $[3] = disabled;
        $[4] = loading;
        $[5] = loadingText;
        $[6] = rest;
    } else {
        children = $[2];
        disabled = $[3];
        loading = $[4];
        loadingText = $[5];
        rest = $[6];
    }
    const t0 = loading || disabled;
    let t1;
    if ($[7] !== children || $[8] !== loading || $[9] !== loadingText) {
        t1 = loading && !loadingText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$absolute$2d$center$2f$absolute$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbsoluteCenter"], {
                    display: "inline-flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$spinner$2f$spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                        size: "inherit",
                        color: "inherit"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/button.jsx",
                        lineNumber: 41,
                        columnNumber: 76
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/button.jsx",
                    lineNumber: 41,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$span$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Span"], {
                    opacity: 0,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/button.jsx",
                    lineNumber: 41,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true) : loading && loadingText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$spinner$2f$spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                    size: "inherit",
                    color: "inherit"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/button.jsx",
                    lineNumber: 41,
                    columnNumber: 203
                }, this),
                loadingText
            ]
        }, void 0, true) : children;
        $[7] = children;
        $[8] = loading;
        $[9] = loadingText;
        $[10] = t1;
    } else {
        t1 = $[10];
    }
    let t2;
    if ($[11] !== ref || $[12] !== rest || $[13] !== t0 || $[14] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            disabled: t0,
            ref: ref,
            ...rest,
            children: t1
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/button.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[11] = ref;
        $[12] = rest;
        $[13] = t0;
        $[14] = t1;
        $[15] = t2;
    } else {
        t2 = $[15];
    }
    return t2;
});
_c1 = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/box/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/container/container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/heading/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/text/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/stack/v-stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/flex/flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/stack/h-stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/image/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$fade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectFade$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/swiper/modules/effect-fade.mjs [app-client] (ecmascript) <export default as EffectFade>");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const MotionVStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"]);
_c = MotionVStack;
const MotionBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
_c1 = MotionBox;
const slides = [
    {
        image: '/santa fe.jpg',
        title: 'Casi 50 años',
        subtitle: 'transformando espacios',
        description: 'con cubiertas, fachadas, mobiliario, puertas cortafuego y soluciones para publicidad.'
    },
    {
        image: '/plaza.jpg',
        title: 'Explora',
        subtitle: 'las líneas de producto',
        description: 'y descubre cómo podemos ayudarte a iluminar, proteger y comunicar mejor cada espacio.',
        buttonText: 'Cuéntanos tu Proyecto',
        align: 'flex-end',
        textAlign: 'right'
    }
];
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2c07fd635e3de5b5b1f20503699e865eacf60617557648d7de3c0372c04fb86c") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c07fd635e3de5b5b1f20503699e865eacf60617557648d7de3c0372c04fb86c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$fade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectFade$3e$__["EffectFade"]
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
            modules: t0,
            effect: "fade",
            speed: 1000,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                clickable: true,
                renderBullet: _temp
            },
            style: {
                height: "100%",
                width: "100%"
            },
            children: slides.map(_HomeSlidesMap)
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            transform: "scale(1.1)"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            position: "relative",
            h: "100vh",
            w: "100%",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    position: "fixed",
                    bottom: "30px",
                    left: "30px",
                    zIndex: "1000",
                    cursor: "pointer",
                    _hover: t2,
                    transition: "transform 0.2s",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                        bg: "#25D366",
                        p: 4,
                        rounded: "full",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                            src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                            alt: "WhatsApp",
                            w: "30px",
                            h: "30px"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                            lineNumber: 73,
                            columnNumber: 255
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                        lineNumber: 73,
                        columnNumber: 177
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 73,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            base: "column",
            lg: "row"
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "cyan.400",
            fontWeight: "bold",
            fontSize: "xs",
            mb: 4,
            letterSpacing: "widest",
            children: "SOBRE NOSOTROS"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            flex: "1",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                    color: "white",
                    fontSize: "4xl",
                    fontWeight: "300",
                    mb: 8,
                    children: [
                        "Líderes en soluciones de ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            as: "span",
                            fontWeight: "bold",
                            children: "Ingeniería Plástica"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                            lineNumber: 97,
                            columnNumber: 115
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 97,
                    columnNumber: 28
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    color: "whiteAlpha.700",
                    fontSize: "lg",
                    lineHeight: "relaxed",
                    children: "En Inacril combinamos décadas de experiencia con tecnología de vanguardia para ofrecer materiales que desafían los límites de la arquitectura tradicional. Desde fachadas dinámicas hasta revestimientos interiores de alto impacto."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 97,
                    columnNumber: 185
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            minH: "100vh",
            bg: "#0a0a0a",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    bg: "#0a0a0a",
                    py: 32,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                        maxW: "8xl",
                        px: 8,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                            gap: 20,
                            direction: t4,
                            align: "center",
                            children: [
                                t6,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                    flex: "1",
                                    h: "400px",
                                    w: "100%",
                                    bg: "whiteAlpha.100",
                                    position: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                        src: "/santa fe.jpg",
                                        alt: "Working",
                                        objectFit: "cover",
                                        w: "100%",
                                        h: "100%",
                                        filter: "grayscale(100%) opacity(0.5)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                        lineNumber: 104,
                                        columnNumber: 222
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                    lineNumber: 104,
                                    columnNumber: 149
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                            lineNumber: 104,
                            columnNumber: 100
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                        lineNumber: 104,
                        columnNumber: 71
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 104,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "eccbd82def53981e",
                    children: ".swiper-pagination{bottom:40px!important}.swiper-pagination-bullet{transition:all .3s;opacity:.6!important;background-color:#fff!important;border-radius:2px!important;width:14px!important;height:14px!important;margin:0 6px!important}.swiper-pagination-bullet-active{opacity:1!important}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
}
_c2 = Home;
function _HomeSlidesMap(slide, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            position: "relative",
            h: "100%",
            w: "100%",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                    src: slide.image,
                    alt: slide.title,
                    objectFit: "cover",
                    w: "100%",
                    h: "100%",
                    filter: "brightness(0.35)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 112,
                    columnNumber: 80
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    maxW: "8xl",
                    h: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    zIndex: "1",
                    px: 8,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                        h: "100%",
                        align: "center",
                        justify: slide.align || "flex-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionVStack, {
                            align: slide.align === "flex-end" ? "flex-end" : "flex-start",
                            textAlign: slide.textAlign || "left",
                            gap: 10,
                            maxW: "3xl",
                            initial: {
                                opacity: 0,
                                x: slide.align === "flex-end" ? 50 : -50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8,
                                ease: "easeOut"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                                    align: slide.align === "flex-end" ? "flex-end" : "flex-start",
                                    gap: 4,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                                        as: "h1",
                                        color: "white",
                                        fontSize: {
                                            base: "4xl",
                                            md: "7xl"
                                        },
                                        fontWeight: "bold",
                                        lineHeight: "1.1",
                                        letterSpacing: "-0.02em",
                                        children: [
                                            slide.title,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                                lineNumber: 124,
                                                columnNumber: 91
                                            }, this),
                                            slide.subtitle
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                        lineNumber: 121,
                                        columnNumber: 93
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                    lineNumber: 121,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    color: "whiteAlpha.900",
                                    fontSize: "2xl",
                                    maxW: "2xl",
                                    fontWeight: "400",
                                    lineHeight: "1.3",
                                    children: slide.description
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                    lineNumber: 124,
                                    columnNumber: 132
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
                                    gap: 6,
                                    pt: 4,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "xl",
                                        bg: "#48BB78",
                                        color: "white",
                                        rounded: "md",
                                        px: 10,
                                        fontSize: "md",
                                        fontWeight: "bold",
                                        _hover: {
                                            bg: "#38A169",
                                            transform: "translateY(-2px)"
                                        },
                                        transition: "all 0.3s",
                                        children: slide.buttonText || "Ver l\xEDneas de Producto"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                        lineNumber: 124,
                                        columnNumber: 270
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                    lineNumber: 124,
                                    columnNumber: 247
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                            lineNumber: 112,
                            columnNumber: 351
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                        lineNumber: 112,
                        columnNumber: 283
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 112,
                    columnNumber: 187
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 112,
            columnNumber: 37
        }, this)
    }, index_0, false, {
        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
        lineNumber: 112,
        columnNumber: 10
    }, this);
}
function _temp(index, className) {
    return `<span class="${className}" style="background-color: white; width: 12px; height: 12px; margin: 0 8px !important;"></span>`;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MotionVStack");
__turbopack_context__.k.register(_c1, "MotionBox");
__turbopack_context__.k.register(_c2, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Trabajo_ME_Inacril_inacril_src_1507664f._.js.map