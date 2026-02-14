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
"[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceGrid",
    ()=>ServiceGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/box/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$simple$2d$grid$2f$simple$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/simple-grid/simple-grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/text/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/heading/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/stack/v-stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/image/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/flex/flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const MotionBox = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
_c = MotionBox;
const services = [
    {
        title: 'Trayectoria',
        highlight: 'que respalda',
        subtitle: 'tus decisiones',
        description: 'Casi cinco décadas trabajando con constructoras, arquitectos, acríleros y marcas, entendiendo las exigencias de obra, montaje y operación.',
        buttonText: 'Conocer más',
        image: '/santa fe.jpg'
    },
    {
        title: 'Materiales',
        highlight: 'de alto',
        subtitle: 'desempeño',
        description: 'Láminas, cubiertas, paneles y sistemas pensados para soportar el uso real: impacto, clima, tráfico de personas y mantenimiento frecuente.',
        buttonText: 'Ver líneas de producto',
        image: '/plaza.jpg'
    },
    {
        title: 'Acompañamiento',
        highlight: 'técnico',
        subtitle: 'cercano',
        description: 'Te ayudamos a elegir el material y el sistema adecuado para cada proyecto, con asesoría en especificación, detalle y montaje.',
        buttonText: 'Ver más servicios',
        image: '/plaza.jpg'
    },
    {
        title: 'Portafolio integral',
        highlight: 'en un solo',
        subtitle: 'proveedor',
        description: 'Desde cubiertas y fachadas hasta divisiones en HPL, puertas cortafuego y láminas para señalética, todo conectado en un mismo portafolio.',
        buttonText: 'Conocer productos',
        image: '/santa fe.jpg'
    }
];
const ServiceCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "2bedb62193e55b93d449dce439249618775d14f77104001039e220328d8231b0") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bedb62193e55b93d449dce439249618775d14f77104001039e220328d8231b0";
    }
    const { service, index } = t0;
    const isRightSide = index % 2 !== 0;
    const t1 = isRightSide ? "100%" : "-100%";
    let t2;
    if ($[1] !== t1) {
        t2 = {
            x: t1
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            x: 0
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t2) {
        t4 = {
            initial: t2,
            hover: t3
        };
        $[4] = t2;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const panelVariants = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            initial: {
                opacity: 1
            },
            hover: {
                opacity: 0
            }
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const staticVariants = t5;
    const t6 = (index + 1) % 2 !== 0 ? "1px solid" : "none";
    const t7 = index < 2 ? "1px solid" : "none";
    let t8;
    if ($[7] !== service.image || $[8] !== service.title) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
            src: service.image,
            alt: service.title,
            objectFit: "cover",
            w: "100%",
            h: "100%",
            filter: "brightness(0.3) grayscale(0.5)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 101,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = service.image;
        $[8] = service.title;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const t9 = isRightSide ? "flex-start" : "flex-end";
    const t10 = isRightSide ? "flex-start" : "flex-end";
    let t11;
    if ($[10] !== service.highlight) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            as: "span",
            fontWeight: "300",
            children: service.highlight
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 112,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = service.highlight;
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    let t12;
    if ($[12] !== service.title || $[13] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
            color: "white",
            fontSize: "3xl",
            fontWeight: "800",
            letterSpacing: "-1px",
            children: [
                service.title,
                " ",
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 120,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = service.title;
        $[13] = t11;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] !== service.subtitle) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "whiteAlpha.800",
            fontSize: "xl",
            fontWeight: "300",
            children: service.subtitle
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = service.subtitle;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== t10 || $[18] !== t12 || $[19] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            align: t10,
            gap: 0,
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t10;
        $[18] = t12;
        $[19] = t13;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== t14 || $[22] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
            as: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"],
            variants: staticVariants,
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            p: 12,
            direction: "column",
            justify: "center",
            align: t9,
            zIndex: "2",
            children: t14
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t14;
        $[22] = t9;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    const t16 = isRightSide ? "auto" : "0";
    const t17 = isRightSide ? "0" : "auto";
    let t18;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            duration: 0.5,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        };
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] !== service.description) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "gray.700",
            fontSize: "lg",
            fontWeight: "500",
            lineHeight: "1.4",
            children: service.description
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = service.description;
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    let t20;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            bg: "#38A169",
            transform: "translateY(-2px)"
        };
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    if ($[28] !== service.buttonText) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            as: "button",
            bg: "#48BB78",
            color: "white",
            px: 8,
            py: 3,
            rounded: "md",
            fontWeight: "bold",
            fontSize: "sm",
            _hover: t20,
            transition: "all 0.2s",
            children: service.buttonText
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 186,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = service.buttonText;
        $[29] = t21;
    } else {
        t21 = $[29];
    }
    let t22;
    if ($[30] !== t19 || $[31] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            align: "flex-start",
            gap: 8,
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 194,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t19;
        $[31] = t21;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] !== panelVariants || $[34] !== t16 || $[35] !== t17 || $[36] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
            variants: panelVariants,
            position: "absolute",
            top: "0",
            left: t16,
            right: t17,
            w: "70%",
            h: "100%",
            bg: "rgba(255, 255, 255, 0.98)",
            zIndex: "10",
            transition: t18,
            p: 12,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            children: t22
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 203,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = panelVariants;
        $[34] = t16;
        $[35] = t17;
        $[36] = t22;
        $[37] = t23;
    } else {
        t23 = $[37];
    }
    let t24;
    if ($[38] !== t15 || $[39] !== t23 || $[40] !== t6 || $[41] !== t7 || $[42] !== t8) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
            position: "relative",
            height: "450px",
            overflow: "hidden",
            initial: "initial",
            whileHover: "hover",
            borderRight: t6,
            borderBottom: t7,
            borderColor: "whiteAlpha.200",
            children: [
                t8,
                t15,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t15;
        $[39] = t23;
        $[40] = t6;
        $[41] = t7;
        $[42] = t8;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    return t24;
};
_c1 = ServiceCard;
const ServiceGrid = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "2bedb62193e55b93d449dce439249618775d14f77104001039e220328d8231b0") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bedb62193e55b93d449dce439249618775d14f77104001039e220328d8231b0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            base: 1,
            md: 2
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$simple$2d$grid$2f$simple$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleGrid"], {
            columns: t0,
            spacing: 0,
            children: services.map(_temp)
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 246,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            base: "none",
            md: "flex"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "cyan.400",
            fontSize: "10px",
            fontWeight: "bold",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            mb: 1,
            children: "Desde 1976"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 264,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            w: "30px",
            h: "1px",
            bg: "whiteAlpha.400",
            mb: 1
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 265,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            bg: "#0a0a0a",
            borderY: "1px solid",
            borderColor: "whiteAlpha.200",
            position: "relative",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    w: "160px",
                    h: "80px",
                    bg: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid",
                    borderColor: "whiteAlpha.300",
                    display: t2,
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "20",
                    boxShadow: "0 0 40px rgba(0, 163, 255, 0.1)",
                    flexDirection: "column",
                    textAlign: "center",
                    px: 2,
                    children: [
                        t3,
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "700",
                            lineHeight: "1.1",
                            children: [
                                "Calidad & ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
                                    lineNumber: 274,
                                    columnNumber: 561
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Servicio"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
                            lineNumber: 274,
                            columnNumber: 477
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
                    lineNumber: 274,
                    columnNumber: 101
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
            lineNumber: 274,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
};
_c2 = ServiceGrid;
function _temp(service, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
        service: service,
        index: index
    }, index, false, {
        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx",
        lineNumber: 282,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MotionBox");
__turbopack_context__.k.register(_c1, "ServiceCard");
__turbopack_context__.k.register(_c2, "ServiceGrid");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ServiceGrid$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx [app-client] (ecmascript)");
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
const MotionVStack = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"]);
_c = MotionVStack;
const MotionBox = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c4944f484532190ea0dab8e77cff03b249c310b8f244db416bcbe3331b468329") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4944f484532190ea0dab8e77cff03b249c310b8f244db416bcbe3331b468329";
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
                clickable: true
            },
            style: {
                height: "100%",
                width: "100%"
            },
            children: slides.map(_HomeSlidesMap)
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 49,
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
    let t4;
    let t5;
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
                            lineNumber: 75,
                            columnNumber: 255
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                        lineNumber: 75,
                        columnNumber: 177
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 75,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ServiceGrid$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceGrid"], {}, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryCarousel, {}, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            base: "column",
            lg: "row"
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "cyan.400",
            fontWeight: "bold",
            fontSize: "xs",
            mb: 4,
            letterSpacing: "widest",
            children: "SOBRE NOSOTROS"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            flex: "1",
            children: [
                t7,
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
                            lineNumber: 105,
                            columnNumber: 115
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 105,
                    columnNumber: 28
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    color: "whiteAlpha.700",
                    fontSize: "lg",
                    lineHeight: "relaxed",
                    children: "En Inacril combinamos décadas de experiencia con tecnología de vanguardia para ofrecer materiales que desafían los límites de la arquitectura tradicional. Desde fachadas dinámicas hasta revestimientos interiores de alto impacto."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 105,
                    columnNumber: 185
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            minH: "100vh",
            bg: "#0a0a0a",
            children: [
                t3,
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    bg: "#0a0a0a",
                    py: 32,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                        maxW: "8xl",
                        px: 8,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                            gap: 20,
                            direction: t6,
                            align: "center",
                            children: [
                                t8,
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
                                        lineNumber: 112,
                                        columnNumber: 230
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                    lineNumber: 112,
                                    columnNumber: 157
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                            lineNumber: 112,
                            columnNumber: 108
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                        lineNumber: 112,
                        columnNumber: 79
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 112,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    return t9;
}
_c2 = Home;
function _HomeSlidesMap(slide, index) {
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
                    lineNumber: 120,
                    columnNumber: 78
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                as: "span",
                                                display: "block",
                                                children: slide.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                                lineNumber: 132,
                                                columnNumber: 77
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                as: "span",
                                                display: "block",
                                                children: slide.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                                lineNumber: 132,
                                                columnNumber: 129
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                        lineNumber: 129,
                                        columnNumber: 93
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                    lineNumber: 129,
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
                                    lineNumber: 132,
                                    columnNumber: 203
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
                                        lineNumber: 132,
                                        columnNumber: 341
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                    lineNumber: 132,
                                    columnNumber: 318
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                            lineNumber: 120,
                            columnNumber: 349
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                        lineNumber: 120,
                        columnNumber: 281
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 120,
                    columnNumber: 185
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 120,
            columnNumber: 35
        }, this)
    }, index, false, {
        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
        lineNumber: 120,
        columnNumber: 10
    }, this);
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

//# sourceMappingURL=Desktop_Trabajo_ME_Inacril_inacril_src_03194f7a._.js.map