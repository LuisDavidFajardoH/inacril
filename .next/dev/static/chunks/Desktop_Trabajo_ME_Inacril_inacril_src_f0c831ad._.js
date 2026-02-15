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
"[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryCarousel",
    ()=>CategoryCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/box/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/container/container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/heading/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/text/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/image/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/stack/v-stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
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
const categories = [
    {
        title: 'Acrílicos, PETG y Señalética',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
        color: 'rgba(72, 52, 117, 0.8)' // Muted Plum
    },
    {
        title: 'Imagen Corporativa Integral',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
        color: 'rgba(130, 103, 39, 0.8)' // Deep Ochre
    },
    {
        title: 'Mobiliario Exterior y Fachadas',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        color: 'rgba(34, 64, 110, 0.8)' // Slate Blue
    },
    {
        title: 'Mobiliario Interior y HPL',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        color: 'rgba(35, 78, 64, 0.8)' // Sage Green
    },
    {
        title: 'Puertas Cortafuego RF',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
        color: 'rgba(55, 59, 62, 0.8)' // Graphite
    },
    {
        title: 'Cubiertas en Policarbonato',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
        color: 'rgba(43, 49, 78, 0.8)' // Atmospheric Blue
    }
];
const CategoryCarousel = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "eb9f190fa829c704d96615e497984f1b53ee51fa3ba840e641c9206ec191bb3b") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eb9f190fa829c704d96615e497984f1b53ee51fa3ba840e641c9206ec191bb3b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            opacity: "0.4",
            pointerEvents: "none",
            backgroundImage: "radial-gradient(#CBD5E0 1px, transparent 1px)",
            backgroundSize: "40px 40px"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "cyan.600",
            fontWeight: "bold",
            fontSize: "xs",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            children: "PRODUCTOS"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            maxW: "8xl",
            px: 8,
            mb: 12,
            position: "relative",
            zIndex: "1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                align: "flex-start",
                gap: 1,
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                        color: "gray.800",
                        fontSize: "4xl",
                        fontWeight: "200",
                        children: [
                            "Nuestras Líneas de ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                as: "span",
                                fontWeight: "bold",
                                children: "Producción"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
                                lineNumber: 62,
                                columnNumber: 194
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
                        lineNumber: 62,
                        columnNumber: 117
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
                lineNumber: 62,
                columnNumber: 78
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
        ];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            delay: 3000
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            bg: "gray.50",
            py: 24,
            position: "relative",
            overflow: "hidden",
            borderY: "1px solid",
            borderColor: "gray.200",
            children: [
                t0,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    px: 4,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                        modules: t3,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        autoplay: t4,
                        loop: true,
                        breakpoints: {
                            640: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            },
                            1440: {
                                slidesPerView: 4
                            }
                        },
                        style: {
                            paddingBottom: "40px"
                        },
                        children: categories.map(_temp)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
                        lineNumber: 85,
                        columnNumber: 137
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
                    lineNumber: 85,
                    columnNumber: 125
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
};
_c = CategoryCarousel;
function _temp(cat, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            height: "500px",
            position: "relative",
            role: "group",
            overflow: "hidden",
            cursor: "pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                    src: cat.image,
                    alt: cat.title,
                    objectFit: "cover",
                    w: "100%",
                    h: "100%",
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    filter: "brightness(0.9)",
                    _groupHover: {
                        transform: "scale(1.1)",
                        filter: "brightness(1)"
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
                    lineNumber: 105,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    p: 10,
                    bg: cat.color,
                    backdropFilter: "blur(12px)",
                    transition: "all 0.4s",
                    height: "110px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    textAlign: "left",
                    _groupHover: {
                        height: "150px",
                        bg: cat.color.replace("0.8", "0.95")
                    },
                    boxShadow: "0 -10px 40px rgba(0,0,0,0.1)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                            w: "40px",
                            h: "2px",
                            bg: "white",
                            mb: 4,
                            transition: "all 0.4s",
                            _groupHover: {
                                w: "70px",
                                bg: "cyan.300"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
                            lineNumber: 111,
                            columnNumber: 51
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            color: "white",
                            fontSize: "lg",
                            fontWeight: "600",
                            lineHeight: "1.2",
                            letterSpacing: "0.01em",
                            textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                            children: cat.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
                            lineNumber: 114,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            color: "whiteAlpha.900",
                            fontSize: "xs",
                            fontWeight: "bold",
                            mt: 4,
                            opacity: "0",
                            transform: "translateY(10px)",
                            transition: "all 0.4s",
                            _groupHover: {
                                opacity: 1,
                                transform: "translateY(0)"
                            },
                            children: "VER DETALLES →"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
                            lineNumber: 114,
                            columnNumber: 163
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
                    lineNumber: 108,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "120px",
                    border: "0px solid",
                    borderColor: "whiteAlpha.400",
                    transition: "all 0.3s",
                    _groupHover: {
                        borderLeftWidth: "8px"
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
                    lineNumber: 117,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
            lineNumber: 105,
            columnNumber: 35
        }, this)
    }, index, false, {
        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx",
        lineNumber: 105,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CategoryCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SolutionsSection",
    ()=>SolutionsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/box/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/container/container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/heading/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/text/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$simple$2d$grid$2f$simple$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/simple-grid/simple-grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/flex/flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$icon$2f$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/icon/icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/stack/v-stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/image/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/library.js [app-client] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
'use client';
;
;
;
;
;
;
const MotionBox = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
_c = MotionBox;
const sectors = [
    {
        title: 'Construcción',
        subtitle: 'e Infraestructura',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        color: 'rgba(34, 64, 110, 0.8)',
        image: '/santa fe.jpg'
    },
    {
        title: 'Institucional',
        subtitle: 'y Educativo',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"],
        color: 'rgba(43, 49, 78, 0.8)',
        image: '/plaza.jpg'
    },
    {
        title: 'Retail',
        subtitle: 'y Comercio',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"],
        color: 'rgba(26, 32, 44, 0.8)',
        image: '/santa fe.jpg'
    },
    {
        title: 'Publicidad y Visual',
        subtitle: 'Merchandising',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
        color: 'rgba(72, 52, 117, 0.8)',
        image: '/plaza.jpg'
    }
];
const SolutionsSection = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "db1811a453cd85fc604584ad1a836caae9e388d1724d9dc6e9e50bf4a7e46aa4") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db1811a453cd85fc604584ad1a836caae9e388d1724d9dc6e9e50bf4a7e46aa4";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            bg: "radial-gradient(circle at 50% 0%, rgba(0, 163, 255, 0.15) 0%, rgba(10, 16, 33, 0.85) 70%)",
            backdropFilter: "blur(2px)",
            zIndex: "0"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "cyan.400",
            fontWeight: "bold",
            fontSize: "xs",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            children: "Sectores de Aplicación"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            spacing: 4,
            textAlign: "center",
            mb: 20,
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                    color: "white",
                    fontSize: {
                        base: "3xl",
                        md: "5xl"
                    },
                    fontWeight: "bold",
                    letterSpacing: "-0.02em",
                    children: "Soluciones según tu tipo de proyecto"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                    lineNumber: 58,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    color: "whiteAlpha.700",
                    fontSize: "lg",
                    maxW: "2xl",
                    children: "Sistemas especializados diseñados para responder a los estándares más exigentes de cada industria."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                    lineNumber: 61,
                    columnNumber: 98
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            base: 1,
            md: 2
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            position: "relative",
            py: 32,
            bgImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop')",
            bgSize: "cover",
            bgPosition: "center",
            bgAttachment: "fixed",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    maxW: "8xl",
                    px: 8,
                    position: "relative",
                    zIndex: "1",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$simple$2d$grid$2f$simple$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleGrid"], {
                            columns: t3,
                            spacing: 8,
                            children: sectors.map(_temp)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                            lineNumber: 78,
                            columnNumber: 278
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                    lineNumber: 78,
                    columnNumber: 214
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
};
_c1 = SolutionsSection;
function _temp(sector, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
        position: "relative",
        height: "220px",
        bg: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(15px)",
        border: "1px solid",
        borderColor: "whiteAlpha.100",
        overflow: "hidden",
        cursor: "pointer",
        whileHover: {
            scale: 1.02,
            borderColor: "whiteAlpha.400",
            boxShadow: "0 20px 40px rgba(0, 163, 255, 0.15)"
        },
        transition: {
            duration: 0.3
        },
        role: "group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                zIndex: "0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                    src: sector.image,
                    alt: sector.title,
                    objectFit: "cover",
                    w: "100%",
                    h: "100%",
                    filter: "brightness(0.5) contrast(1.1)",
                    transition: "all 0.8s ease",
                    _groupHover: {
                        filter: "brightness(0.7) contrast(1.2)",
                        transform: "scale(1.1)"
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                    lineNumber: 92,
                    columnNumber: 93
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                lineNumber: 92,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                position: "absolute",
                top: "-50%",
                left: "-50%",
                w: "200%",
                h: "200%",
                bg: "radial-gradient(circle, rgba(0, 163, 255, 0.1) 0%, transparent 50%)",
                opacity: "0",
                transition: "opacity 0.5s",
                _groupHover: {
                    opacity: 1
                },
                zIndex: "1"
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                lineNumber: 95,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                h: "100%",
                position: "relative",
                zIndex: "2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                        w: "140px",
                        align: "center",
                        justify: "center",
                        bg: "whiteAlpha.100",
                        borderRight: "1px solid",
                        borderColor: "whiteAlpha.200",
                        transition: "all 0.3s",
                        _groupHover: {
                            bg: "whiteAlpha.200"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$icon$2f$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            as: sector.icon,
                            w: 12,
                            h: 12,
                            color: "white",
                            transition: "all 0.3s",
                            _groupHover: {
                                color: "cyan.300",
                                transform: "scale(1.1)"
                            },
                            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                            lineNumber: 99,
                            columnNumber: 10
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                        lineNumber: 97,
                        columnNumber: 67
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                        flex: "1",
                        align: "center",
                        px: 10,
                        bg: "linear-gradient(to right, rgba(0,0,0,0.6), transparent)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                            align: "flex-start",
                            gap: 1,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    color: "white",
                                    fontSize: "3xl",
                                    fontWeight: "bold",
                                    lineHeight: "1.1",
                                    letterSpacing: "-0.03em",
                                    children: sector.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                                    lineNumber: 102,
                                    columnNumber: 208
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    color: "cyan.400",
                                    fontSize: "lg",
                                    fontWeight: "400",
                                    children: sector.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                                    lineNumber: 102,
                                    columnNumber: 323
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                            lineNumber: 102,
                            columnNumber: 173
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                        lineNumber: 102,
                        columnNumber: 74
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
                lineNumber: 97,
                columnNumber: 21
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx",
        lineNumber: 86,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "MotionBox");
__turbopack_context__.k.register(_c1, "SolutionsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectHighlight",
    ()=>ProjectHighlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/box/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/container/container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/heading/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/text/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/button/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/stack/v-stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/flex/flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/image/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
;
;
;
;
const MotionBox = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
_c = MotionBox;
const MotionVStack = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"]);
_c1 = MotionVStack;
const ProjectHighlight = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "6f48f7a9beb3ebe52961eefd4b638cbe58443ca8c5379acb2e0fc8a876dc791e") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f48f7a9beb3ebe52961eefd4b638cbe58443ca8c5379acb2e0fc8a876dc791e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            base: "auto",
            md: "800px"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "0",
            initial: {
                scale: 1.1
            },
            whileInView: {
                scale: 1
            },
            transition: {
                duration: 1.5,
                ease: "easeOut"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                    src: "/MULTIPLAZA-1-1.webp",
                    alt: "Proyecto Multiplaza",
                    objectFit: "cover",
                    w: "100%",
                    h: "100%",
                    filter: "brightness(0.6)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                    lineNumber: 37,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    bg: "linear-gradient(to right, rgba(10, 16, 33, 0.9) 0%, rgba(10, 16, 33, 0.4) 50%, transparent 100%)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                    lineNumber: 37,
                    columnNumber: 131
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            x: -50
        };
        t3 = {
            opacity: 1,
            x: 0
        };
        t4 = {
            duration: 0.8,
            delay: 0.2
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "cyan.400",
            fontWeight: "bold",
            fontSize: "sm",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            children: "PROYECTO DESTACADO"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            align: "flex-start",
            gap: 4,
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                    color: "white",
                    fontSize: {
                        base: "4xl",
                        md: "6xl"
                    },
                    fontWeight: "bold",
                    lineHeight: "1.1",
                    letterSpacing: "-0.02em",
                    children: "Sistema de cubiertas traslúcidas y revestimientos exteriores"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                    lineNumber: 76,
                    columnNumber: 49
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "whiteAlpha.900",
            fontSize: "xl",
            lineHeight: "relaxed",
            children: "Para crear espacios más luminosos, protegidos y coherentes con la imagen de la marca. Nuestra intervención en Multiplaza demuestra la versatilidad de la ingeniería plástica en grandes superficies."
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            maxW: "8xl",
            h: "100%",
            px: 8,
            position: "relative",
            zIndex: "1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                h: "100%",
                align: "center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionVStack, {
                    align: "flex-start",
                    gap: 8,
                    maxW: "2xl",
                    initial: t2,
                    whileInView: t3,
                    transition: t4,
                    children: [
                        t6,
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "xl",
                            bg: "#48BB78",
                            color: "white",
                            rounded: "md",
                            px: 10,
                            height: "60px",
                            fontSize: "md",
                            fontWeight: "bold",
                            rightIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                                lineNumber: 89,
                                columnNumber: 338
                            }, void 0),
                            _hover: {
                                bg: "#38A169",
                                transform: "translateX(5px)"
                            },
                            transition: "all 0.3s",
                            children: "Ver detalle del proyecto"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                            lineNumber: 89,
                            columnNumber: 215
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                    lineNumber: 89,
                    columnNumber: 109
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                lineNumber: 89,
                columnNumber: 79
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t11;
    let t12;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            base: "none",
            lg: "block"
        };
        t10 = {
            opacity: 0,
            scale: 0.8
        };
        t11 = {
            opacity: 1,
            scale: 1
        };
        t12 = {
            duration: 0.6,
            delay: 0.5
        };
        $[10] = t10;
        $[11] = t11;
        $[12] = t12;
        $[13] = t9;
    } else {
        t10 = $[10];
        t11 = $[11];
        t12 = $[12];
        t9 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    color: "whiteAlpha.600",
                    fontSize: "xs",
                    fontWeight: "bold",
                    letterSpacing: "widest",
                    children: "UBICACIÓN"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                    lineNumber: 130,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    fontSize: "lg",
                    fontWeight: "bold",
                    children: "Centro Comercial Multiplaza"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                    lineNumber: 130,
                    columnNumber: 116
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
            lineNumber: 130,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            position: "relative",
            height: t0,
            width: "100%",
            overflow: "hidden",
            bg: "#0a0a0a",
            children: [
                t1,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
                    position: "absolute",
                    bottom: "10%",
                    right: "8%",
                    p: 8,
                    bg: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid",
                    borderColor: "whiteAlpha.200",
                    color: "white",
                    display: t9,
                    initial: t10,
                    whileInView: t11,
                    transition: t12,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                        align: "flex-start",
                        gap: 6,
                        children: [
                            t13,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        color: "whiteAlpha.600",
                                        fontSize: "xs",
                                        fontWeight: "bold",
                                        letterSpacing: "widest",
                                        children: "MATERIAL"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                                        lineNumber: 137,
                                        columnNumber: 389
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        fontSize: "lg",
                                        fontWeight: "bold",
                                        children: "Policarbonato & HPL"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                                        lineNumber: 137,
                                        columnNumber: 488
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                                lineNumber: 137,
                                columnNumber: 384
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                w: "100%",
                                h: "1px",
                                bg: "whiteAlpha.300"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                                lineNumber: 137,
                                columnNumber: 562
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                color: "cyan.400",
                                fontWeight: "bold",
                                fontSize: "sm",
                                children: "Eficiencia Energética +85%"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                                lineNumber: 137,
                                columnNumber: 606
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                        lineNumber: 137,
                        columnNumber: 344
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
                    lineNumber: 137,
                    columnNumber: 100
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    return t14;
};
_c2 = ProjectHighlight;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MotionBox");
__turbopack_context__.k.register(_c1, "MotionVStack");
__turbopack_context__.k.register(_c2, "ProjectHighlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectForm",
    ()=>ProjectForm
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$input$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/input/input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$textarea$2f$textarea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/textarea/textarea.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$simple$2d$grid$2f$simple$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/simple-grid/simple-grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/image/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/stack/h-stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
'use client';
;
;
;
;
;
;
;
const MotionBox = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
_c = MotionBox;
const ProjectForm = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "38f2bce84e5a649b48a3943a350b166b766bba46f6fb60dd7db9427931b53d08") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "38f2bce84e5a649b48a3943a350b166b766bba46f6fb60dd7db9427931b53d08";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            base: 20,
            md: 32
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                    src: "/MULTIPLAZA-1-1.webp",
                    alt: "Multiplaza Background",
                    objectFit: "cover",
                    w: "100%",
                    h: "100%",
                    filter: "brightness(0.3) saturate(0.8)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 30,
                    columnNumber: 84
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    bg: "linear-gradient(to bottom, rgba(10, 16, 33, 0.9) 0%, rgba(10, 16, 33, 0.6) 100%)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 30,
                    columnNumber: 223
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            base: "column",
            lg: "row"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "cyan.400",
            fontWeight: "bold",
            fontSize: "xs",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            mb: 4,
            children: "CONTÁCTANOS"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            base: "4xl",
            md: "6xl"
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                    color: "white",
                    fontSize: t4,
                    fontWeight: "bold",
                    mb: 6,
                    lineHeight: "1.1",
                    children: [
                        "¿Tienes un gran ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                            lineNumber: 64,
                            columnNumber: 114
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            as: "span",
                            color: "cyan.400",
                            children: "proyecto en mente?"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                            lineNumber: 64,
                            columnNumber: 120
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 64,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    color: "whiteAlpha.800",
                    fontSize: "xl",
                    maxW: "xl",
                    children: "Nuestro equipo de ingeniería está listo para asesorarte en la especificación y diseño de tu próxima obra con los mejores materiales traslúcidos."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 64,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
            w: "50px",
            h: "50px",
            bg: "whiteAlpha.100",
            rounded: "full",
            align: "center",
            justify: "center",
            border: "1px solid",
            borderColor: "whiteAlpha.200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                size: 20,
                color: "#4FD1C5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                lineNumber: 71,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
            gap: 6,
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            color: "whiteAlpha.500",
                            fontSize: "xs",
                            fontWeight: "bold",
                            children: "TELÉFONO"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                            lineNumber: 78,
                            columnNumber: 35
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            color: "white",
                            fontWeight: "600",
                            children: "+57 601 234 5678"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                            lineNumber: 78,
                            columnNumber: 111
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 78,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
            w: "50px",
            h: "50px",
            bg: "whiteAlpha.100",
            rounded: "full",
            align: "center",
            justify: "center",
            border: "1px solid",
            borderColor: "whiteAlpha.200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                size: 20,
                color: "#4FD1C5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                lineNumber: 85,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
            gap: 6,
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            color: "whiteAlpha.500",
                            fontSize: "xs",
                            fontWeight: "bold",
                            children: "EMAIL"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                            lineNumber: 92,
                            columnNumber: 35
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            color: "white",
                            fontWeight: "600",
                            children: "contacto@inacril.com"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                            lineNumber: 92,
                            columnNumber: 108
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 92,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 92,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
            w: "50px",
            h: "50px",
            bg: "whiteAlpha.100",
            rounded: "full",
            align: "center",
            justify: "center",
            border: "1px solid",
            borderColor: "whiteAlpha.200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                size: 20,
                color: "#4FD1C5"
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                lineNumber: 99,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 99,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            flex: "1",
            align: "flex-start",
            gap: 10,
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                    align: "flex-start",
                    gap: 6,
                    w: "100%",
                    children: [
                        t7,
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
                            gap: 6,
                            children: [
                                t10,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                            color: "whiteAlpha.500",
                                            fontSize: "xs",
                                            fontWeight: "bold",
                                            children: "OFICINA CENTRAL"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                                            lineNumber: 106,
                                            columnNumber: 138
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                            color: "white",
                                            fontWeight: "600",
                                            children: "Bogotá, Colombia"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                                            lineNumber: 106,
                                            columnNumber: 221
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                                    lineNumber: 106,
                                    columnNumber: 133
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                            lineNumber: 106,
                            columnNumber: 112
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 106,
                    columnNumber: 60
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 106,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            base: 8,
            md: 12
        };
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    let t14;
    let t15;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            opacity: 0,
            y: 30
        };
        t14 = {
            opacity: 1,
            y: 0
        };
        t15 = {
            duration: 0.8
        };
        $[14] = t13;
        $[15] = t14;
        $[16] = t15;
    } else {
        t13 = $[14];
        t14 = $[15];
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            base: 1,
            md: 2
        };
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "whiteAlpha.700",
            fontSize: "sm",
            children: "Nombre Completo"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 156,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            align: "flex-start",
            gap: 2,
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$input$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    bg: "whiteAlpha.100",
                    border: "0",
                    _focus: {
                        bg: "whiteAlpha.200",
                        outline: "1px solid",
                        outlineColor: "cyan.400"
                    },
                    color: "white",
                    placeholder: "Escribe tu nombre"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 163,
                    columnNumber: 51
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "whiteAlpha.700",
            fontSize: "sm",
            children: "Empresa"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$simple$2d$grid$2f$simple$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleGrid"], {
            columns: t16,
            gap: 6,
            w: "100%",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                    align: "flex-start",
                    gap: 2,
                    children: [
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$input$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            bg: "whiteAlpha.100",
                            border: "0",
                            _focus: {
                                bg: "whiteAlpha.200",
                                outline: "1px solid",
                                outlineColor: "cyan.400"
                            },
                            color: "white",
                            placeholder: "Nombre de tu empresa"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                            lineNumber: 181,
                            columnNumber: 99
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 181,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            base: 1,
            md: 2
        };
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "whiteAlpha.700",
            fontSize: "sm",
            children: "Correo Electrónico"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 202,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            align: "flex-start",
            gap: 2,
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$input$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    type: "email",
                    bg: "whiteAlpha.100",
                    border: "0",
                    _focus: {
                        bg: "whiteAlpha.200",
                        outline: "1px solid",
                        outlineColor: "cyan.400"
                    },
                    color: "white",
                    placeholder: "email@ejemplo.com"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 209,
                    columnNumber: 51
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 209,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "whiteAlpha.700",
            fontSize: "sm",
            children: "Celular"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 220,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$simple$2d$grid$2f$simple$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleGrid"], {
            columns: t21,
            gap: 6,
            w: "100%",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                    align: "flex-start",
                    gap: 2,
                    children: [
                        t24,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$input$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            bg: "whiteAlpha.100",
                            border: "0",
                            _focus: {
                                bg: "whiteAlpha.200",
                                outline: "1px solid",
                                outlineColor: "cyan.400"
                            },
                            color: "white",
                            placeholder: "+57 3..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                            lineNumber: 227,
                            columnNumber: 99
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 227,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "whiteAlpha.700",
            fontSize: "sm",
            children: "Detalles del Proyecto"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 238,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            align: "flex-start",
            gap: 2,
            w: "100%",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$textarea$2f$textarea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                    bg: "whiteAlpha.100",
                    border: "0",
                    h: "150px",
                    _focus: {
                        bg: "whiteAlpha.200",
                        outline: "1px solid",
                        outlineColor: "cyan.400"
                    },
                    color: "white",
                    placeholder: "Cu\xE9ntanos un poco sobre lo que necesitas..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 245,
                    columnNumber: 60
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 245,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            bg: "#38A169",
            transform: "translateY(-2px)"
        };
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            position: "relative",
            py: t0,
            bg: "#0a0a0a",
            overflow: "hidden",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    maxW: "8xl",
                    px: 8,
                    position: "relative",
                    zIndex: "1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                        direction: t2,
                        gap: 16,
                        align: "center",
                        children: [
                            t11,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
                                flex: "1",
                                w: "100%",
                                bg: "rgba(255, 255, 255, 0.03)",
                                backdropFilter: "blur(20px)",
                                p: t12,
                                border: "1px solid",
                                borderColor: "whiteAlpha.200",
                                rounded: "xl",
                                initial: t13,
                                whileInView: t14,
                                transition: t15,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                                    gap: 6,
                                    children: [
                                        t20,
                                        t25,
                                        t27,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "xl",
                                            w: "100%",
                                            bg: "#48BB78",
                                            color: "white",
                                            _hover: t28,
                                            transition: "all 0.3s",
                                            fontWeight: "bold",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
                                                gap: 2,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                                                        lineNumber: 266,
                                                        columnNumber: 549
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        children: "Enviar Solicitud"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                                                        lineNumber: 266,
                                                        columnNumber: 567
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                                                lineNumber: 266,
                                                columnNumber: 533
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                                            lineNumber: 266,
                                            columnNumber: 426
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                            color: "whiteAlpha.500",
                                            fontSize: "xs",
                                            textAlign: "center",
                                            children: "Al enviar aceptas nuestro tratamiento de datos personales."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                                            lineNumber: 266,
                                            columnNumber: 614
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                                    lineNumber: 266,
                                    columnNumber: 395
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                                lineNumber: 266,
                                columnNumber: 189
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                        lineNumber: 266,
                        columnNumber: 139
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
                    lineNumber: 266,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx",
            lineNumber: 266,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    return t29;
};
_c1 = ProjectForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "MotionBox");
__turbopack_context__.k.register(_c1, "ProjectForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/box/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/container/container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$simple$2d$grid$2f$simple$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/simple-grid/simple-grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/stack/v-stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/stack/h-stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/text/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/link/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/image/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/flex/flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$icon$2f$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/icon/icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
'use client';
;
;
;
;
;
const Footer = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "109c704d6e0bfc5e95a64d1cc92665b9804c2bfa5d4c62d246793473aa882c3e") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "109c704d6e0bfc5e95a64d1cc92665b9804c2bfa5d4c62d246793473aa882c3e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Date().getFullYear();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const currentYear = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            base: "column",
            md: "row"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            base: "flex-start",
            md: "center"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            align: "flex-start",
            gap: 1,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                    src: "/logo-blanco.png",
                    alt: "Inacril Logo",
                    h: "60px",
                    objectFit: "contain"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 45,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    fontSize: "xs",
                    color: "whiteAlpha.800",
                    ml: 1,
                    children: "¡Somos calidad y servicio!"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 45,
                    columnNumber: 125
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            base: 4,
            lg: 6
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            w: "1px",
            h: "20px",
            bg: "whiteAlpha.400"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            _hover: {
                opacity: 0.7
            },
            children: "Sobre INACRIL"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            _hover: {
                opacity: 0.7
            },
            children: "Soluciones por sector"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            _hover: {
                opacity: 0.7
            },
            children: "Servicios"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            _hover: {
                opacity: 0.7
            },
            children: "Blog"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            _hover: {
                opacity: 0.7
            },
            children: "Sucursales"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
            direction: t1,
            justify: "space-between",
            align: t2,
            mb: 16,
            gap: 8,
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
                    gap: t4,
                    flexWrap: "wrap",
                    fontSize: "lg",
                    fontWeight: "400",
                    color: "white",
                    divider: t5,
                    children: [
                        t6,
                        t7,
                        t8,
                        t9,
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            _hover: {
                                opacity: 0.7
                            },
                            children: "Contacto"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                            lineNumber: 114,
                            columnNumber: 199
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 114,
                    columnNumber: 87
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 114,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            base: 1,
            md: 3
        };
        t13 = {
            base: 10,
            md: 24
        };
        $[13] = t12;
        $[14] = t13;
    } else {
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
            children: "Direcciones"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 140,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    fontWeight: "bold",
                    children: "Bogotá:"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 147,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    children: "Cra. 69 B No. 24A-35 Sur, Carvajal."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 147,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    fontWeight: "bold",
                    children: "Bucaramanga:"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 154,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    children: "CL 20 No. 19-63 San Francisco."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 154,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    fontWeight: "bold",
                    children: "Medellín:"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 161,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    children: "CLL 7 No. 50-89 Zona Industrial Coltabaco."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 161,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    fontWeight: "bold",
                    children: "Cali:"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 168,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    children: "Cra. 6 No. 24 - 42 San Nicolas."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 168,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    fontWeight: "bold",
                    children: "Tenjo:"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 175,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    children: "Parque empresarial San Isidro P.H. Autopista Medellín km. 6.8."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 175,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 175,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            align: "flex-start",
            gap: 8,
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                    align: "flex-start",
                    gap: 5,
                    fontSize: "xs",
                    lineHeight: "1.6",
                    opacity: "0.9",
                    children: [
                        t15,
                        t16,
                        t17,
                        t18,
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    fontWeight: "bold",
                                    children: "Barranquilla:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                                    lineNumber: 182,
                                    columnNumber: 161
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    children: "CLL 75 No. 72-40 Bodega 7 - parque empresarial METROTEX."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                                    lineNumber: 182,
                                    columnNumber: 205
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                            lineNumber: 182,
                            columnNumber: 156
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 182,
                    columnNumber: 51
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
            children: "Teléfonos"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 189,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    fontWeight: "bold",
                    children: "Bogotá:"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 196,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    children: "318 2726674"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 196,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 196,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    fontWeight: "bold",
                    children: "Zona Centro y Sur:"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 203,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    children: "3176697936"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 203,
                    columnNumber: 65
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 203,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            align: "flex-start",
            gap: 8,
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                    align: "flex-start",
                    gap: 4,
                    fontSize: "xs",
                    opacity: "0.9",
                    children: [
                        t22,
                        t23,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    fontWeight: "bold",
                                    children: "Zona Norte:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                                    lineNumber: 210,
                                    columnNumber: 129
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    children: "3158792455"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                                    lineNumber: 210,
                                    columnNumber: 171
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                            lineNumber: 210,
                            columnNumber: 124
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 210,
                    columnNumber: 51
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 210,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            align: "flex-start",
            gap: 10,
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    p: 3,
                    border: "1px solid",
                    borderColor: "whiteAlpha.400",
                    rounded: "sm",
                    bg: "whiteAlpha.100",
                    maxW: "80px",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                        gap: 1,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                src: "/logo-blanco.png",
                                alt: "PREAD",
                                opacity: "0.9",
                                h: "30px",
                                objectFit: "contain"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                                lineNumber: 217,
                                columnNumber: 172
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                fontSize: "8px",
                                textAlign: "center",
                                fontWeight: "bold",
                                children: "PREAD"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                                lineNumber: 217,
                                columnNumber: 259
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                        lineNumber: 217,
                        columnNumber: 156
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 217,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 217,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            _hover: {
                textDecoration: "underline"
            },
            children: "Trabaja con Nosotros"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 224,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            _hover: {
                textDecoration: "underline"
            },
            children: "Términos y Condiciones"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 233,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            _hover: {
                textDecoration: "underline"
            },
            children: "Política de Tratamiento de Datos"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 242,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            align: "flex-start",
            gap: 5,
            fontSize: "sm",
            children: [
                t26,
                t27,
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                    _hover: {
                        textDecoration: "underline"
                    },
                    children: "Política de Cookies"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 251,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 251,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    let t30;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$simple$2d$grid$2f$simple$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleGrid"], {
            columns: t12,
            spacing: t13,
            mb: 16,
            children: [
                t20,
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                    align: "flex-start",
                    justify: "space-between",
                    h: "100%",
                    gap: 10,
                    children: [
                        t29,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
                            gap: 4,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                                    lineNumber: 260,
                                    columnNumber: 159
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                                    lineNumber: 260,
                                    columnNumber: 189
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                                    lineNumber: 260,
                                    columnNumber: 220
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                                    lineNumber: 260,
                                    columnNumber: 250
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                            lineNumber: 260,
                            columnNumber: 143
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                    lineNumber: 260,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 260,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t30;
    } else {
        t30 = $[31];
    }
    let t31;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            bg: "rgb(93, 109, 155)",
            color: "white",
            pt: 20,
            pb: 10,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                maxW: "8xl",
                px: 8,
                children: [
                    t11,
                    t30,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                        borderTop: "1px solid",
                        borderColor: "whiteAlpha.300",
                        pt: 8,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            fontSize: "xs",
                            color: "whiteAlpha.700",
                            textAlign: "center",
                            children: [
                                "© ",
                                currentYear,
                                " INACRIL - Ingeniería en Acrílicos. Todos los derechos reservados."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                            lineNumber: 267,
                            columnNumber: 171
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                        lineNumber: 267,
                        columnNumber: 108
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                lineNumber: 267,
                columnNumber: 69
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 267,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t31;
    } else {
        t31 = $[32];
    }
    return t31;
};
_c = Footer;
const Heading = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "109c704d6e0bfc5e95a64d1cc92665b9804c2bfa5d4c62d246793473aa882c3e") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "109c704d6e0bfc5e95a64d1cc92665b9804c2bfa5d4c62d246793473aa882c3e";
    }
    let children;
    let props;
    if ($[1] !== t0) {
        ({ children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
    } else {
        children = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== children || $[5] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "white",
            fontSize: "lg",
            fontWeight: "bold",
            letterSpacing: "wider",
            textTransform: "uppercase",
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 298,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = children;
        $[5] = props;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    return t1;
};
_c1 = Heading;
const SocialIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "109c704d6e0bfc5e95a64d1cc92665b9804c2bfa5d4c62d246793473aa882c3e") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "109c704d6e0bfc5e95a64d1cc92665b9804c2bfa5d4c62d246793473aa882c3e";
    }
    const { icon } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            color: "cyan.400",
            borderColor: "cyan.400",
            transform: "translateY(-3px)"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== icon) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            w: "45px",
            h: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            rounded: "full",
            border: "1px solid",
            borderColor: "whiteAlpha.300",
            color: "whiteAlpha.700",
            _hover: t1,
            transition: "all 0.3s",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$icon$2f$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                as: icon,
                w: 5,
                h: 5
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
                lineNumber: 331,
                columnNumber: 213
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx",
            lineNumber: 331,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = icon;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c2 = SocialIcon;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Footer");
__turbopack_context__.k.register(_c1, "Heading");
__turbopack_context__.k.register(_c2, "SocialIcon");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$simple$2d$grid$2f$simple$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/simple-grid/simple-grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ServiceGrid$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ServiceGrid.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$CategoryCarousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/CategoryCarousel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$SolutionsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/SolutionsSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ProjectHighlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectHighlight.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ProjectForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ProjectForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Footer.jsx [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "7b642524d789be61bc2b221e810edb187a1bad336391ee20dee79ab3e6bc7f65") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7b642524d789be61bc2b221e810edb187a1bad336391ee20dee79ab3e6bc7f65";
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
            lineNumber: 54,
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
    let t6;
    let t7;
    let t8;
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
                            lineNumber: 83,
                            columnNumber: 255
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                        lineNumber: 83,
                        columnNumber: 177
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 83,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ServiceGrid$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceGrid"], {}, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$CategoryCarousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryCarousel"], {}, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ProjectHighlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectHighlight"], {}, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ProjectForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectForm"], {}, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$SolutionsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolutionsSection"], {}, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/santa fe.jpg",
                alt: "Experience",
                objectFit: "cover",
                w: "100%",
                h: "100%",
                filter: "brightness(0.3) grayscale(0.2)"
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                lineNumber: 105,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            base: "column",
            lg: "row"
        };
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "cyan.400",
            fontWeight: "bold",
            fontSize: "xs",
            mb: 4,
            letterSpacing: "0.2em",
            children: "NUESTRA FILOSOFÍA"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            base: "4xl",
            md: "6xl"
        };
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    let t14;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$heading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                    color: "white",
                    fontSize: t12,
                    fontWeight: "200",
                    lineHeight: "1.1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            as: "span",
                            display: "block",
                            children: "Innovamos para"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                            lineNumber: 140,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            as: "span",
                            fontWeight: "bold",
                            children: "construir el futuro"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                            lineNumber: 140,
                            columnNumber: 146
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 140,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            color: "whiteAlpha.800",
            fontSize: "xl",
            lineHeight: "relaxed",
            maxW: "xl",
            children: "Llevamos casi cinco décadas liderando la transformación de espacios a través de la ingeniería plástica de alta precisión. Cada proyecto es un testimonio de nuestra búsqueda incansable por la perfección y la funcionalidad."
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[14] = t13;
        $[15] = t14;
    } else {
        t13 = $[14];
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
            flex: "1",
            align: "flex-start",
            gap: 8,
            children: [
                t13,
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    size: "xl",
                    variant: "outline",
                    borderColor: "cyan.400",
                    color: "cyan.400",
                    rounded: "none",
                    px: 10,
                    _hover: {
                        bg: "cyan.400",
                        color: "black"
                    },
                    children: "Nuestra Historia"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 150,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            height: "300px",
            overflow: "hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/plaza.jpg",
                alt: "Detail 1",
                objectFit: "cover",
                w: "100%",
                h: "100%",
                filter: "brightness(0.7)",
                transition: "transform 0.6s",
                _hover: {
                    transform: "scale(1.1)"
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                lineNumber: 160,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            minH: "100vh",
            bg: "#0a0a0a",
            children: [
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    position: "relative",
                    py: 40,
                    overflow: "hidden",
                    children: [
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                            maxW: "8xl",
                            px: 8,
                            position: "relative",
                            zIndex: "1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                                direction: t10,
                                align: "center",
                                gap: 20,
                                children: [
                                    t15,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                        flex: "1",
                                        w: "100%",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$simple$2d$grid$2f$simple$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleGrid"], {
                                            columns: 2,
                                            spacing: 4,
                                            children: [
                                                t16,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                                    height: "300px",
                                                    overflow: "hidden",
                                                    mt: 8,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                                        src: "/santa fe.jpg",
                                                        alt: "Detail 2",
                                                        objectFit: "cover",
                                                        w: "100%",
                                                        h: "100%",
                                                        filter: "brightness(0.7)",
                                                        transition: "transform 0.6s",
                                                        _hover: {
                                                            transform: "scale(1.1)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                                        lineNumber: 169,
                                                        columnNumber: 341
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                                    lineNumber: 169,
                                                    columnNumber: 296
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                            lineNumber: 169,
                                            columnNumber: 255
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                        lineNumber: 169,
                                        columnNumber: 232
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                lineNumber: 169,
                                columnNumber: 181
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                            lineNumber: 169,
                            columnNumber: 121
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 169,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 171,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    return t17;
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
                    lineNumber: 179,
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
                                                lineNumber: 191,
                                                columnNumber: 77
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                as: "span",
                                                display: "block",
                                                children: slide.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                                lineNumber: 191,
                                                columnNumber: 129
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                        lineNumber: 188,
                                        columnNumber: 93
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                    lineNumber: 188,
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
                                    lineNumber: 191,
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
                                        lineNumber: 191,
                                        columnNumber: 341
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                                    lineNumber: 191,
                                    columnNumber: 318
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                            lineNumber: 179,
                            columnNumber: 349
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                        lineNumber: 179,
                        columnNumber: 281
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
                    lineNumber: 179,
                    columnNumber: 185
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
            lineNumber: 179,
            columnNumber: 35
        }, this)
    }, index, false, {
        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/app/page.js",
        lineNumber: 179,
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

//# sourceMappingURL=Desktop_Trabajo_ME_Inacril_inacril_src_f0c831ad._.js.map