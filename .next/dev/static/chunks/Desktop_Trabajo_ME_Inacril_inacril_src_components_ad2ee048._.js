(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/color-mode.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorModeButton",
    ()=>ColorModeButton,
    "ColorModeIcon",
    ()=>ColorModeIcon,
    "ColorModeProvider",
    ()=>ColorModeProvider,
    "DarkMode",
    ()=>DarkMode,
    "LightMode",
    ()=>LightMode,
    "useColorMode",
    ()=>useColorMode,
    "useColorModeValue",
    ()=>useColorModeValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$client$2d$only$2f$client$2d$only$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/client-only/client-only.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$button$2f$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/button/icon-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$skeleton$2f$skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/skeleton/skeleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$span$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/span/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ColorModeProvider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            attribute: "class",
            disableTransitionOnChange: true,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/color-mode.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
}
_c = ColorModeProvider;
function useColorMode() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8";
    }
    const { resolvedTheme, setTheme, forcedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const colorMode = forcedTheme || resolvedTheme;
    let t0;
    if ($[1] !== resolvedTheme || $[2] !== setTheme) {
        t0 = ({
            "useColorMode[toggleColorMode]": ()=>{
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }
        })["useColorMode[toggleColorMode]"];
        $[1] = resolvedTheme;
        $[2] = setTheme;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const toggleColorMode = t0;
    let t1;
    if ($[4] !== colorMode || $[5] !== setTheme || $[6] !== toggleColorMode) {
        t1 = {
            colorMode,
            setColorMode: setTheme,
            toggleColorMode
        };
        $[4] = colorMode;
        $[5] = setTheme;
        $[6] = toggleColorMode;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    return t1;
}
_s(useColorMode, "lASBJ2nwC/NN2+AOud86XU4KBJY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
function useColorModeValue(light, dark) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8";
    }
    const { colorMode } = useColorMode();
    return colorMode === "dark" ? dark : light;
}
_s1(useColorModeValue, "2FlznkK71qNOMfMHVcz5TMepWEE=", false, function() {
    return [
        useColorMode
    ];
});
function ColorModeIcon() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8";
    }
    const { colorMode } = useColorMode();
    let t0;
    if ($[1] !== colorMode) {
        t0 = colorMode === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuMoon"], {}, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/color-mode.jsx",
            lineNumber: 96,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuSun"], {}, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/color-mode.jsx",
            lineNumber: 96,
            columnNumber: 46
        }, this);
        $[1] = colorMode;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
}
_s2(ColorModeIcon, "2FlznkK71qNOMfMHVcz5TMepWEE=", false, function() {
    return [
        useColorMode
    ];
});
_c1 = ColorModeIcon;
const ColorModeButton = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = _s3(function ColorModeButton(props, ref) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8";
    }
    const { toggleColorMode } = useColorMode();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$skeleton$2f$skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
            boxSize: "9"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/color-mode.jsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            _icon: {
                width: "5",
                height: "5"
            }
        };
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorModeIcon, {}, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/color-mode.jsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] !== props || $[5] !== ref || $[6] !== toggleColorMode) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$client$2d$only$2f$client$2d$only$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientOnly"], {
            fallback: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$button$2f$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                onClick: toggleColorMode,
                variant: "ghost",
                "aria-label": "Toggle color mode",
                size: "sm",
                ref: ref,
                ...props,
                css: t1,
                children: t2
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/color-mode.jsx",
                lineNumber: 140,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/color-mode.jsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[4] = props;
        $[5] = ref;
        $[6] = toggleColorMode;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}, "Wdt919dsfqsRc9Vn40kjp11vN0g=", false, function() {
    return [
        useColorMode
    ];
})), "Wdt919dsfqsRc9Vn40kjp11vN0g=", false, function() {
    return [
        useColorMode
    ];
});
_c3 = ColorModeButton;
const LightMode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = function LightMode(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8";
    }
    let t0;
    if ($[1] !== props || $[2] !== ref) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$span$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Span"], {
            color: "fg",
            display: "contents",
            className: "chakra-theme light",
            colorPalette: "gray",
            colorScheme: "light",
            ref: ref,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/color-mode.jsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[1] = props;
        $[2] = ref;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    return t0;
});
_c5 = LightMode;
const DarkMode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = function DarkMode(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74c17feaa89f7e936730875b0486db57e741aeb4e2b280cc9354ac560262dec8";
    }
    let t0;
    if ($[1] !== props || $[2] !== ref) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$span$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Span"], {
            color: "fg",
            display: "contents",
            className: "chakra-theme dark",
            colorPalette: "gray",
            colorScheme: "dark",
            ref: ref,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/color-mode.jsx",
            lineNumber: 179,
            columnNumber: 10
        }, this);
        $[1] = props;
        $[2] = ref;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    return t0;
});
_c7 = DarkMode;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "ColorModeProvider");
__turbopack_context__.k.register(_c1, "ColorModeIcon");
__turbopack_context__.k.register(_c2, "ColorModeButton$React.forwardRef");
__turbopack_context__.k.register(_c3, "ColorModeButton");
__turbopack_context__.k.register(_c4, "LightMode$React.forwardRef");
__turbopack_context__.k.register(_c5, "LightMode");
__turbopack_context__.k.register(_c6, "DarkMode$React.forwardRef");
__turbopack_context__.k.register(_c7, "DarkMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/provider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$styled$2d$system$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/styled-system/provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$preset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/preset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ui$2f$color$2d$mode$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/color-mode.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Provider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "974a31bc2511234cd3967ad92e74f030e71e11ba41bedebdf35368105b9d2e31") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "974a31bc2511234cd3967ad92e74f030e71e11ba41bedebdf35368105b9d2e31";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$styled$2d$system$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChakraProvider"], {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$preset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultSystem"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$src$2f$components$2f$ui$2f$color$2d$mode$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorModeProvider"], {
                ...props
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/provider.jsx",
                lineNumber: 16,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/ui/provider.jsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
}
_c = Provider;
var _c;
__turbopack_context__.k.register(_c, "Provider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/box/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/flex/flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/stack/h-stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/text/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/container/container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/link/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/stack/v-stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@chakra-ui/react/dist/esm/components/image/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const navItems = [
    {
        label: 'Acrílicos, PETG',
        subLabel: 'y Señalética',
        color: '#9F7AEA'
    },
    {
        label: 'Imagen Corporativa',
        subLabel: 'Integral',
        color: '#718096'
    },
    {
        label: 'Mobiliario Exterior',
        subLabel: 'y Fachadas',
        color: '#4299E1'
    },
    {
        label: 'Mobiliario Interior',
        subLabel: 'y Baños HPL',
        color: '#48BB78'
    },
    {
        label: 'Puertas Cortafuego',
        subLabel: 'RF 60-90-120',
        color: '#A0AEC0'
    },
    {
        label: 'Cubiertas en',
        subLabel: 'Policarbonato y UPVC',
        color: '#667EEA'
    }
];
const Navbar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "78f43a4bb8740cef62c378ae09f4aafc47442f812999944e7a3b4f4c739142de") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "78f43a4bb8740cef62c378ae09f4aafc47442f812999944e7a3b4f4c739142de";
    }
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            const handleScroll = ()=>{
                setScrolled(window.scrollY > 50);
            };
            window.addEventListener("scroll", handleScroll);
            return ()=>window.removeEventListener("scroll", handleScroll);
        };
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = scrolled ? "rgba(6, 18, 54, 0.98)" : "rgba(6, 18, 54, 0.6)";
    const t3 = scrolled ? "whiteAlpha.300" : "whiteAlpha.100";
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$link$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            href: "/",
            _hover: {
                textDecoration: "none"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$image$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/logo-blanco.png",
                alt: "Inacril Logo",
                h: "60px",
                objectFit: "contain"
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                lineNumber: 66,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
            gap: 8,
            display: {
                base: "none",
                xl: "flex"
            },
            children: navItems.map(_temp)
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            base: "none",
            md: "flex"
        };
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            as: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
            size: "18px",
            strokeWidth: 1.5,
            cursor: "pointer",
            _hover: {
                color: "cyan.400"
            },
            transition: "all 0.2s"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
            lineNumber: 93,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            as: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
            size: "18px",
            strokeWidth: 1.5,
            cursor: "pointer",
            _hover: {
                color: "cyan.400"
            },
            transition: "all 0.2s"
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t8;
    } else {
        t8 = $[7];
    }
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
            display: t6,
            gap: 6,
            children: [
                t7,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                    size: "18px",
                    strokeWidth: 1.5,
                    cursor: "pointer",
                    _hover: {
                        color: "cyan.400"
                    },
                    transition: "all 0.2s"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                    lineNumber: 111,
                    columnNumber: 47
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
            lineNumber: 111,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    let t10;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            bg: "cyan.400"
        };
        $[9] = t10;
    } else {
        t10 = $[9];
    }
    let t11;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$container$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            maxW: "8xl",
            px: 8,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$flex$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                h: "100px",
                align: "center",
                justify: "space-between",
                children: [
                    t4,
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
                        gap: 6,
                        children: [
                            t9,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$h$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
                                cursor: "pointer",
                                role: "group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                    w: "24px",
                                    h: "1px",
                                    bg: "white",
                                    position: "relative",
                                    _groupHover: t10,
                                    transition: "all 0.2s",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                            w: "24px",
                                            h: "1px",
                                            bg: "inherit",
                                            position: "absolute",
                                            top: "-6px"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                                            lineNumber: 129,
                                            columnNumber: 254
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                            w: "24px",
                                            h: "1px",
                                            bg: "inherit",
                                            position: "absolute",
                                            bottom: "-6px"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                                            lineNumber: 129,
                                            columnNumber: 322
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                                    lineNumber: 129,
                                    columnNumber: 161
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                                lineNumber: 129,
                                columnNumber: 123
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                        lineNumber: 129,
                        columnNumber: 103
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                lineNumber: 129,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
            lineNumber: 129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t11;
    } else {
        t11 = $[10];
    }
    let t12;
    if ($[11] !== t2 || $[12] !== t3) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            as: "nav",
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            zIndex: "1000",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            bg: t2,
            backdropFilter: "blur(12px)",
            color: "white",
            borderBottom: "1px solid",
            borderColor: t3,
            children: t11
        }, void 0, false, {
            fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
            lineNumber: 136,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t2;
        $[12] = t3;
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    return t12;
};
_s(Navbar, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c = Navbar;
function _temp(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        cursor: "pointer",
        position: "relative",
        role: "group",
        py: 2,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$stack$2f$v$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                align: "flex-start",
                gap: 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        fontSize: "10px",
                        fontWeight: "medium",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        opacity: 0.7,
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                        lineNumber: 146,
                        columnNumber: 119
                    }, this),
                    item.subLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$text$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        fontSize: "11px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        children: item.subLabel
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                        lineNumber: 146,
                        columnNumber: 261
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                lineNumber: 146,
                columnNumber: 84
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                position: "absolute",
                bottom: "-4px",
                left: "0",
                w: "100%",
                h: "3px",
                bg: item.color,
                transform: "scaleX(1)",
                transformOrigin: "left"
            }, void 0, false, {
                fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
                lineNumber: 146,
                columnNumber: 353
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/Desktop/Trabajo/ME/Inacril/inacril/src/components/Navbar.jsx",
        lineNumber: 146,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Trabajo_ME_Inacril_inacril_src_components_ad2ee048._.js.map