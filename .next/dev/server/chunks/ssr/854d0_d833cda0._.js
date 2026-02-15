module.exports = [
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/clamp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
 //# sourceMappingURL=clamp.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
 //# sourceMappingURL=format-error-message.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production") {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
 //# sourceMappingURL=errors.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
 //# sourceMappingURL=is-numerical-string.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
/*#__NO_SIDE_EFFECTS__*/ const noop = (any)=>any;
;
 //# sourceMappingURL=noop.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/global-config.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
 //# sourceMappingURL=global-config.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
 //# sourceMappingURL=is-zero-value-string.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/warn-once.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
 //# sourceMappingURL=warn-once.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
 //# sourceMappingURL=time-conversion.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
 //# sourceMappingURL=array.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
 //# sourceMappingURL=subscription-manager.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memo",
    ()=>memo
]);
/*#__NO_SIDE_EFFECTS__*/ function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
 //# sourceMappingURL=memo.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
 //# sourceMappingURL=is-bezier-definition.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
 //# sourceMappingURL=velocity-per-second.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/pipe.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
 //# sourceMappingURL=pipe.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
 //# sourceMappingURL=cubic-bezier.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
 //# sourceMappingURL=ease.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
 //# sourceMappingURL=is-easing-array.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
 //# sourceMappingURL=mirror.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
 //# sourceMappingURL=reverse.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
 //# sourceMappingURL=back.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
 //# sourceMappingURL=anticipate.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
 //# sourceMappingURL=circ.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
 //# sourceMappingURL=map.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "progress",
    ()=>progress
]);
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
 //# sourceMappingURL=progress.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/motion-utils/dist/es/is-object.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
 //# sourceMappingURL=is-object.mjs.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Building2
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 12h4",
            key: "a56b0p"
        }
    ],
    [
        "path",
        {
            d: "M10 8h4",
            key: "1sr2af"
        }
    ],
    [
        "path",
        {
            d: "M14 21v-3a2 2 0 0 0-4 0v3",
            key: "1rgiei"
        }
    ],
    [
        "path",
        {
            d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
            key: "secmi2"
        }
    ],
    [
        "path",
        {
            d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
            key: "16ra0t"
        }
    ]
];
const Building2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("building-2", __iconNode);
;
 //# sourceMappingURL=building-2.js.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Building2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/library.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Library
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 6 4 14",
            key: "ji33uf"
        }
    ],
    [
        "path",
        {
            d: "M12 6v14",
            key: "1n7gus"
        }
    ],
    [
        "path",
        {
            d: "M8 8v12",
            key: "1gg7y9"
        }
    ],
    [
        "path",
        {
            d: "M4 4v16",
            key: "6qkkli"
        }
    ]
];
const Library = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("library", __iconNode);
;
 //# sourceMappingURL=library.js.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/library.js [app-ssr] (ecmascript) <export default as Library>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Library",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/library.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Store
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",
            key: "slp6dd"
        }
    ],
    [
        "path",
        {
            d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
            key: "o0xfot"
        }
    ],
    [
        "path",
        {
            d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",
            key: "wn3emo"
        }
    ]
];
const Store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("store", __iconNode);
;
 //# sourceMappingURL=store.js.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/store.js [app-ssr] (ecmascript) <export default as Store>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Store",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/store.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Megaphone
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
            key: "q8bfy3"
        }
    ],
    [
        "path",
        {
            d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
            key: "1853fq"
        }
    ],
    [
        "path",
        {
            d: "M8 6v8",
            key: "15ugcq"
        }
    ]
];
const Megaphone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("megaphone", __iconNode);
;
 //# sourceMappingURL=megaphone.js.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-ssr] (ecmascript) <export default as Megaphone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Megaphone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Send
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Phone
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }
    ]
];
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("phone", __iconNode);
;
 //# sourceMappingURL=phone.js.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Mail
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }
    ]
];
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("mail", __iconNode);
;
 //# sourceMappingURL=mail.js.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/react/dist/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>Portal,
    "normalizeProps",
    ()=>normalizeProps,
    "useMachine",
    ()=>useMachine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/core/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/types/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
// src/index.ts
var useSafeLayoutEffect = typeof globalThis.document !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
// src/bindable.ts
function useBindable(props) {
    const initial = props().value ?? props().defaultValue;
    const eq = props().isEqual ?? Object.is;
    const [initialValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialValue);
    const controlled = props().value !== void 0;
    const valueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(value);
    valueRef.current = controlled ? props().value : value;
    const prevValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(valueRef.current);
    useSafeLayoutEffect(()=>{
        prevValue.current = valueRef.current;
    }, [
        value,
        props().value
    ]);
    const setFn = (value2)=>{
        const prev = prevValue.current;
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(value2) ? value2(prev) : value2;
        if (props().debug) {
            console.log(`[bindable > ${props().debug}] setValue`, {
                next,
                prev
            });
        }
        if (!controlled) setValue(next);
        if (!eq(next, prev)) {
            props().onChange?.(next, prev);
        }
    };
    function get() {
        return controlled ? props().value : value;
    }
    return {
        initial: initialValue,
        ref: valueRef,
        get,
        set (value2) {
            const exec = props().sync ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"];
            exec(()=>setFn(value2));
        },
        invoke (nextValue, prevValue2) {
            props().onChange?.(nextValue, prevValue2);
        },
        hash (value2) {
            return props().hash?.(value2) ?? String(value2);
        }
    };
}
useBindable.cleanup = (fn)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>fn, []);
};
useBindable.ref = (defaultValue)=>{
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(defaultValue);
    return {
        get: ()=>value.current,
        set: (next)=>{
            value.current = next;
        }
    };
};
function useRefs(refs) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(refs);
    return {
        get (key) {
            return ref.current[key];
        },
        set (key, value) {
            ref.current[key] = value;
        }
    };
}
var useTrack = (deps, effect)=>{
    const render = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const called = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mounted = render.current;
        const run = mounted && called.current;
        if (run) return effect();
        called.current = true;
    }, [
        ...(deps ?? []).map((d)=>typeof d === "function" ? d() : d)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        render.current = true;
        return ()=>{
            render.current = false;
        };
    }, []);
};
// src/machine.ts
function useMachine(machine, userProps = {}) {
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const { id, ids, getRootNode } = userProps;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScope"])({
            id,
            ids,
            getRootNode
        });
    }, [
        userProps
    ]);
    const debug = (...args)=>{
        if (machine.debug) console.log(...args);
    };
    const props = machine.props?.({
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])(userProps),
        scope
    }) ?? userProps;
    const prop = useProp(props);
    const context = machine.context?.({
        prop,
        bindable: useBindable,
        scope,
        flush,
        getContext () {
            return ctx;
        },
        getComputed () {
            return computed;
        },
        getRefs () {
            return refs;
        },
        getEvent () {
            return getEvent();
        }
    });
    const contextRef = useLiveRef(context);
    const ctx = {
        get (key) {
            return contextRef.current?.[key].ref.current;
        },
        set (key, value) {
            contextRef.current?.[key].set(value);
        },
        initial (key) {
            return contextRef.current?.[key].initial;
        },
        hash (key) {
            const current = contextRef.current?.[key].get();
            return contextRef.current?.[key].hash(current);
        }
    };
    const effects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(/* @__PURE__ */ new Map());
    const transitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousEventRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eventRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        type: ""
    });
    const getEvent = ()=>({
            ...eventRef.current,
            current () {
                return eventRef.current;
            },
            previous () {
                return previousEventRef.current;
            }
        });
    const getState = ()=>({
            ...state,
            matches (...values) {
                return values.includes(state.ref.current);
            },
            hasTag (tag) {
                return !!machine.states[state.ref.current]?.tags?.includes(tag);
            }
        });
    const refs = useRefs(machine.refs?.({
        prop,
        context: ctx
    }) ?? {});
    const getParams = ()=>({
            state: getState(),
            context: ctx,
            event: getEvent(),
            prop,
            send,
            action,
            guard,
            track: useTrack,
            refs,
            computed,
            flush,
            scope,
            choose
        });
    const action = (keys)=>{
        const strs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(keys) ? keys(getParams()) : keys;
        if (!strs) return;
        const fns = strs.map((s)=>{
            const fn = machine.implementations?.actions?.[s];
            if (!fn) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])(`[zag-js] No implementation found for action "${JSON.stringify(s)}"`);
            return fn;
        });
        for (const fn of fns){
            fn?.(getParams());
        }
    };
    const guard = (str)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(str)) return str(getParams());
        return machine.implementations?.guards?.[str](getParams());
    };
    const effect = (keys)=>{
        const strs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(keys) ? keys(getParams()) : keys;
        if (!strs) return;
        const fns = strs.map((s)=>{
            const fn = machine.implementations?.effects?.[s];
            if (!fn) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])(`[zag-js] No implementation found for effect "${JSON.stringify(s)}"`);
            return fn;
        });
        const cleanups = [];
        for (const fn of fns){
            const cleanup = fn?.(getParams());
            if (cleanup) cleanups.push(cleanup);
        }
        return ()=>cleanups.forEach((fn)=>fn?.());
    };
    const choose = (transitions)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(transitions).find((t)=>{
            let result = !t.guard;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(t.guard)) result = !!guard(t.guard);
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(t.guard)) result = t.guard(getParams());
            return result;
        });
    };
    const computed = (key)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensure"])(machine.computed, ()=>`[zag-js] No computed object found on machine`);
        const fn = machine.computed[key];
        return fn({
            context: ctx,
            event: getEvent(),
            prop,
            refs,
            scope,
            computed
        });
    };
    const state = useBindable(()=>({
            defaultValue: machine.initialState({
                prop
            }),
            onChange (nextState, prevState) {
                if (prevState) {
                    const exitEffects = effects.current.get(prevState);
                    exitEffects?.();
                    effects.current.delete(prevState);
                }
                if (prevState) {
                    action(machine.states[prevState]?.exit);
                }
                action(transitionRef.current?.actions);
                const cleanup = effect(machine.states[nextState]?.effects);
                if (cleanup) effects.current.set(nextState, cleanup);
                if (prevState === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INIT_STATE"]) {
                    action(machine.entry);
                    const cleanup2 = effect(machine.effects);
                    if (cleanup2) effects.current.set(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INIT_STATE"], cleanup2);
                }
                action(machine.states[nextState]?.entry);
            }
        }));
    const hydratedStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    const statusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MachineStatus"].NotStarted);
    useSafeLayoutEffect(()=>{
        queueMicrotask(()=>{
            const started = statusRef.current === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MachineStatus"].Started;
            statusRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MachineStatus"].Started;
            debug(started ? "rehydrating..." : "initializing...");
            const initialState = hydratedStateRef.current ?? state.initial;
            state.invoke(initialState, started ? state.get() : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INIT_STATE"]);
        });
        const fns = effects.current;
        const currentState = state.ref.current;
        return ()=>{
            debug("unmounting...");
            hydratedStateRef.current = currentState;
            statusRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MachineStatus"].Stopped;
            fns.forEach((fn)=>fn?.());
            effects.current = /* @__PURE__ */ new Map();
            transitionRef.current = null;
            queueMicrotask(()=>{
                action(machine.exit);
            });
        };
    }, []);
    const getCurrentState = ()=>{
        if ("ref" in state) return state.ref.current;
        return state.get();
    };
    const send = (event)=>{
        queueMicrotask(()=>{
            if (statusRef.current !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MachineStatus"].Started) return;
            previousEventRef.current = eventRef.current;
            eventRef.current = event;
            let currentState = getCurrentState();
            const transitions = // @ts-ignore
            machine.states[currentState].on?.[event.type] ?? // @ts-ignore
            machine.on?.[event.type];
            const transition = choose(transitions);
            if (!transition) return;
            transitionRef.current = transition;
            const target = transition.target ?? currentState;
            debug("transition", event.type, transition.target || currentState, `(${transition.actions})`);
            const changed = target !== currentState;
            if (changed) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(()=>state.set(target));
            } else if (transition.reenter && !changed) {
                state.invoke(currentState, currentState);
            } else {
                action(transition.actions ?? []);
            }
        });
    };
    machine.watch?.(getParams());
    return {
        state: getState(),
        send,
        context: ctx,
        prop,
        scope,
        refs,
        computed,
        event: getEvent(),
        getStatus: ()=>statusRef.current
    };
}
function useLiveRef(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(value);
    ref.current = value;
    return ref;
}
function useProp(value) {
    const ref = useLiveRef(value);
    return function get(key) {
        return ref.current[key];
    };
}
function flush(fn) {
    queueMicrotask(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(()=>fn());
    });
}
var normalizeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNormalizer"])((v)=>v);
var Portal = (props)=>{
    const { children, container, disabled, getRootNode } = props;
    const isServer = ("TURBOPACK compile-time value", "undefined") === "undefined";
    if ("TURBOPACK compile-time truthy", 1) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
    //TURBOPACK unreachable
    ;
    const doc = undefined;
    const mountNode = undefined;
};
;
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/presence/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connect",
    ()=>connect,
    "machine",
    ()=>machine,
    "props",
    ()=>props
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/core/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/dom-query/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/types/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
// src/presence.connect.ts
function connect(service, _normalize) {
    const { state, send, context } = service;
    const present = state.matches("mounted", "unmountSuspended");
    return {
        skip: !context.get("initial"),
        present,
        setNode (node) {
            if (!node) return;
            send({
                type: "NODE.SET",
                node
            });
        },
        unmount () {
            send({
                type: "UNMOUNT"
            });
        }
    };
}
var machine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMachine"])({
    props ({ props: props2 }) {
        return {
            ...props2,
            present: !!props2.present
        };
    },
    initialState ({ prop }) {
        return prop("present") ? "mounted" : "unmounted";
    },
    refs () {
        return {
            node: null,
            styles: null
        };
    },
    context ({ bindable }) {
        return {
            unmountAnimationName: bindable(()=>({
                    defaultValue: null
                })),
            prevAnimationName: bindable(()=>({
                    defaultValue: null
                })),
            present: bindable(()=>({
                    defaultValue: false
                })),
            initial: bindable(()=>({
                    sync: true,
                    defaultValue: false
                }))
        };
    },
    exit: [
        "cleanupNode"
    ],
    watch ({ track, prop, send }) {
        track([
            ()=>prop("present")
        ], ()=>{
            send({
                type: "PRESENCE.CHANGED"
            });
        });
    },
    on: {
        "NODE.SET": {
            actions: [
                "setupNode"
            ]
        },
        "PRESENCE.CHANGED": {
            actions: [
                "setInitial",
                "syncPresence"
            ]
        }
    },
    states: {
        mounted: {
            on: {
                UNMOUNT: {
                    target: "unmounted",
                    actions: [
                        "clearPrevAnimationName",
                        "invokeOnExitComplete"
                    ]
                },
                "UNMOUNT.SUSPEND": {
                    target: "unmountSuspended"
                }
            }
        },
        unmountSuspended: {
            effects: [
                "trackAnimationEvents"
            ],
            on: {
                MOUNT: {
                    target: "mounted",
                    actions: [
                        "setPrevAnimationName"
                    ]
                },
                UNMOUNT: {
                    target: "unmounted",
                    actions: [
                        "clearPrevAnimationName",
                        "invokeOnExitComplete"
                    ]
                }
            }
        },
        unmounted: {
            on: {
                MOUNT: {
                    target: "mounted",
                    actions: [
                        "setPrevAnimationName"
                    ]
                }
            }
        }
    },
    implementations: {
        actions: {
            setInitial: ({ context })=>{
                if (context.get("initial")) return;
                queueMicrotask(()=>{
                    context.set("initial", true);
                });
            },
            invokeOnExitComplete: ({ prop, refs })=>{
                prop("onExitComplete")?.();
                const node = refs.get("node");
                if (!node) return;
                const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWindow"])(node);
                const event = new win.CustomEvent("exitcomplete", {
                    bubbles: false
                });
                node.dispatchEvent(event);
            },
            setupNode: ({ refs, event })=>{
                if (refs.get("node") === event.node) return;
                refs.set("node", event.node);
                refs.set("styles", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(event.node));
            },
            cleanupNode: ({ refs })=>{
                refs.set("node", null);
                refs.set("styles", null);
            },
            syncPresence: ({ context, refs, send, prop })=>{
                const presentProp = prop("present");
                if (presentProp) {
                    return send({
                        type: "MOUNT",
                        src: "presence.changed"
                    });
                }
                const node = refs.get("node");
                if (!presentProp && node?.ownerDocument.visibilityState === "hidden") {
                    return send({
                        type: "UNMOUNT",
                        src: "visibilitychange"
                    });
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    const animationName = getAnimationName(refs.get("styles"));
                    context.set("unmountAnimationName", animationName);
                    if (animationName === "none" || animationName === context.get("prevAnimationName") || refs.get("styles")?.display === "none" || refs.get("styles")?.animationDuration === "0s") {
                        send({
                            type: "UNMOUNT",
                            src: "presence.changed"
                        });
                    } else {
                        send({
                            type: "UNMOUNT.SUSPEND"
                        });
                    }
                });
            },
            setPrevAnimationName: ({ context, refs })=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    context.set("prevAnimationName", getAnimationName(refs.get("styles")));
                });
            },
            clearPrevAnimationName: ({ context })=>{
                context.set("prevAnimationName", null);
            }
        },
        effects: {
            trackAnimationEvents: ({ context, refs, send, prop })=>{
                const node = refs.get("node");
                if (!node) return;
                const onStart = (event)=>{
                    const target = event.composedPath?.()?.[0] ?? event.target;
                    if (target === node) {
                        context.set("prevAnimationName", getAnimationName(refs.get("styles")));
                    }
                };
                const onEnd = (event)=>{
                    const animationName = getAnimationName(refs.get("styles"));
                    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEventTarget"])(event);
                    if (target === node && animationName === context.get("unmountAnimationName") && !prop("present")) {
                        send({
                            type: "UNMOUNT",
                            src: "animationend"
                        });
                    }
                };
                const onCancel = (event)=>{
                    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEventTarget"])(event);
                    if (target === node && !prop("present")) {
                        send({
                            type: "UNMOUNT",
                            src: "animationcancel"
                        });
                    }
                };
                node.addEventListener("animationstart", onStart);
                node.addEventListener("animationcancel", onCancel);
                node.addEventListener("animationend", onEnd);
                const cleanupStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStyle"])(node, {
                    animationFillMode: "forwards"
                });
                return ()=>{
                    node.removeEventListener("animationstart", onStart);
                    node.removeEventListener("animationcancel", onCancel);
                    node.removeEventListener("animationend", onEnd);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextTick"])(()=>cleanupStyles());
                };
            }
        }
    }
});
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProps"])()([
    "onExitComplete",
    "present",
    "immediate"
]);
;
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/pagination/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anatomy",
    ()=>anatomy,
    "connect",
    ()=>connect,
    "ellipsisProps",
    ()=>ellipsisProps,
    "itemProps",
    ()=>itemProps,
    "machine",
    ()=>machine,
    "props",
    ()=>props,
    "splitEllipsisProps",
    ()=>splitEllipsisProps,
    "splitItemProps",
    ()=>splitItemProps,
    "splitProps",
    ()=>splitProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/anatomy/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/dom-query/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/core/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/types/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
// src/pagination.anatomy.ts
var anatomy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAnatomy"])("pagination").parts("root", "item", "ellipsis", "firstTrigger", "prevTrigger", "nextTrigger", "lastTrigger");
var parts = anatomy.build();
// src/pagination.dom.ts
var getRootId = (ctx)=>ctx.ids?.root ?? `pagination:${ctx.id}`;
var getFirstTriggerId = (ctx)=>ctx.ids?.firstTrigger ?? `pagination:${ctx.id}:first`;
var getPrevTriggerId = (ctx)=>ctx.ids?.prevTrigger ?? `pagination:${ctx.id}:prev`;
var getNextTriggerId = (ctx)=>ctx.ids?.nextTrigger ?? `pagination:${ctx.id}:next`;
var getLastTriggerId = (ctx)=>ctx.ids?.lastTrigger ?? `pagination:${ctx.id}:last`;
var getEllipsisId = (ctx, index)=>ctx.ids?.ellipsis?.(index) ?? `pagination:${ctx.id}:ellipsis:${index}`;
var getItemId = (ctx, page)=>ctx.ids?.item?.(page) ?? `pagination:${ctx.id}:item:${page}`;
var range = (start, end)=>{
    let length = end - start + 1;
    return Array.from({
        length
    }, (_, idx)=>idx + start);
};
var transform = (items)=>{
    return items.map((value)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(value)) return {
            type: "page",
            value
        };
        return {
            type: "ellipsis"
        };
    });
};
var ELLIPSIS = "ellipsis";
var getRange = (ctx)=>{
    const { page, totalPages, siblingCount, boundaryCount = 1 } = ctx;
    if (totalPages <= 0) return [];
    if (totalPages === 1) return [
        1
    ];
    const firstPageIndex = 1;
    const lastPageIndex = totalPages;
    const leftSiblingIndex = Math.max(page - siblingCount, firstPageIndex);
    const rightSiblingIndex = Math.min(page + siblingCount, lastPageIndex);
    const totalPageNumbers = Math.min(siblingCount * 2 + 3 + boundaryCount * 2, totalPages);
    if (totalPages <= totalPageNumbers) {
        return range(firstPageIndex, lastPageIndex);
    }
    const itemCount = totalPageNumbers - 1 - boundaryCount;
    const showLeftEllipsis = leftSiblingIndex > firstPageIndex + boundaryCount + 1 && Math.abs(leftSiblingIndex - firstPageIndex) > boundaryCount + 1;
    const showRightEllipsis = rightSiblingIndex < lastPageIndex - boundaryCount - 1 && Math.abs(lastPageIndex - rightSiblingIndex) > boundaryCount + 1;
    let pages = [];
    if (!showLeftEllipsis && showRightEllipsis) {
        const leftRange = range(1, itemCount);
        pages.push(...leftRange, ELLIPSIS);
        pages.push(...range(lastPageIndex - boundaryCount + 1, lastPageIndex));
    } else if (showLeftEllipsis && !showRightEllipsis) {
        pages.push(...range(firstPageIndex, firstPageIndex + boundaryCount - 1));
        pages.push(ELLIPSIS);
        const rightRange = range(lastPageIndex - itemCount + 1, lastPageIndex);
        pages.push(...rightRange);
    } else if (showLeftEllipsis && showRightEllipsis) {
        pages.push(...range(firstPageIndex, firstPageIndex + boundaryCount - 1));
        pages.push(ELLIPSIS);
        const middleRange = range(leftSiblingIndex, rightSiblingIndex);
        pages.push(...middleRange);
        pages.push(ELLIPSIS);
        pages.push(...range(lastPageIndex - boundaryCount + 1, lastPageIndex));
    } else {
        pages.push(...range(firstPageIndex, lastPageIndex));
    }
    for(let i = 0; i < pages.length; i++){
        if (pages[i] === ELLIPSIS) {
            const prevPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(pages[i - 1]) ? pages[i - 1] : 0;
            const nextPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(pages[i + 1]) ? pages[i + 1] : totalPages + 1;
            if (nextPage - prevPage === 2) {
                pages[i] = prevPage + 1;
            }
        }
    }
    return pages;
};
var getTransformedRange = (ctx)=>transform(getRange(ctx));
// src/pagination.connect.ts
function connect(service, normalize) {
    const { send, scope, prop, computed, context } = service;
    const totalPages = computed("totalPages");
    const page = context.get("page");
    const pageSize = context.get("pageSize");
    const translations = prop("translations");
    const count = prop("count");
    const getPageUrl = prop("getPageUrl");
    const type = prop("type");
    const previousPage = computed("previousPage");
    const nextPage = computed("nextPage");
    const pageRange = computed("pageRange");
    const isFirstPage = page === 1;
    const isLastPage = page >= totalPages;
    const pages = getTransformedRange({
        page,
        totalPages,
        siblingCount: prop("siblingCount"),
        boundaryCount: prop("boundaryCount")
    });
    return {
        count,
        page,
        pageSize,
        totalPages,
        pages,
        previousPage,
        nextPage,
        pageRange,
        slice (data) {
            return data.slice(pageRange.start, pageRange.end);
        },
        setPageSize (size) {
            send({
                type: "SET_PAGE_SIZE",
                size
            });
        },
        setPage (page2) {
            send({
                type: "SET_PAGE",
                page: page2
            });
        },
        goToNextPage () {
            send({
                type: "NEXT_PAGE"
            });
        },
        goToPrevPage () {
            send({
                type: "PREVIOUS_PAGE"
            });
        },
        goToFirstPage () {
            send({
                type: "FIRST_PAGE"
            });
        },
        goToLastPage () {
            send({
                type: "LAST_PAGE"
            });
        },
        getRootProps () {
            return normalize.element({
                id: getRootId(scope),
                ...parts.root.attrs,
                dir: prop("dir"),
                "aria-label": translations.rootLabel
            });
        },
        getEllipsisProps (props2) {
            return normalize.element({
                id: getEllipsisId(scope, props2.index),
                ...parts.ellipsis.attrs,
                dir: prop("dir")
            });
        },
        getItemProps (props2) {
            const index = props2.value;
            const isCurrentPage = index === page;
            return normalize.element({
                id: getItemId(scope, index),
                ...parts.item.attrs,
                dir: prop("dir"),
                "data-index": index,
                "data-selected": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(isCurrentPage),
                "aria-current": isCurrentPage ? "page" : void 0,
                "aria-label": translations.itemLabel?.({
                    page: index,
                    totalPages
                }),
                onClick () {
                    send({
                        type: "SET_PAGE",
                        page: index
                    });
                },
                ...type === "button" && {
                    type: "button"
                },
                ...type === "link" && getPageUrl && {
                    href: getPageUrl({
                        page: index,
                        pageSize
                    })
                }
            });
        },
        getPrevTriggerProps () {
            return normalize.element({
                id: getPrevTriggerId(scope),
                ...parts.prevTrigger.attrs,
                dir: prop("dir"),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(isFirstPage),
                "aria-label": translations.prevTriggerLabel,
                onClick () {
                    send({
                        type: "PREVIOUS_PAGE"
                    });
                },
                ...type === "button" && {
                    disabled: isFirstPage,
                    type: "button"
                },
                ...type === "link" && getPageUrl && previousPage && {
                    href: getPageUrl({
                        page: previousPage,
                        pageSize
                    })
                }
            });
        },
        getFirstTriggerProps () {
            return normalize.element({
                id: getFirstTriggerId(scope),
                ...parts.firstTrigger.attrs,
                dir: prop("dir"),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(isFirstPage),
                "aria-label": translations.firstTriggerLabel,
                onClick () {
                    send({
                        type: "FIRST_PAGE"
                    });
                },
                ...type === "button" && {
                    disabled: isFirstPage,
                    type: "button"
                },
                ...type === "link" && getPageUrl && {
                    href: getPageUrl({
                        page: 1,
                        pageSize
                    })
                }
            });
        },
        getNextTriggerProps () {
            return normalize.element({
                id: getNextTriggerId(scope),
                ...parts.nextTrigger.attrs,
                dir: prop("dir"),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(isLastPage),
                "aria-label": translations.nextTriggerLabel,
                onClick () {
                    send({
                        type: "NEXT_PAGE"
                    });
                },
                ...type === "button" && {
                    disabled: isLastPage,
                    type: "button"
                },
                ...type === "link" && getPageUrl && nextPage && {
                    href: getPageUrl({
                        page: nextPage,
                        pageSize
                    })
                }
            });
        },
        getLastTriggerProps () {
            return normalize.element({
                id: getLastTriggerId(scope),
                ...parts.lastTrigger.attrs,
                dir: prop("dir"),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(isLastPage),
                "aria-label": translations.lastTriggerLabel,
                onClick () {
                    send({
                        type: "LAST_PAGE"
                    });
                },
                ...type === "button" && {
                    disabled: isLastPage,
                    type: "button"
                },
                ...type === "link" && getPageUrl && {
                    href: getPageUrl({
                        page: totalPages,
                        pageSize
                    })
                }
            });
        }
    };
}
var machine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMachine"])({
    props ({ props: props2 }) {
        return {
            defaultPageSize: 10,
            siblingCount: 1,
            boundaryCount: 1,
            defaultPage: 1,
            type: "button",
            count: 1,
            ...props2,
            translations: {
                rootLabel: "pagination",
                firstTriggerLabel: "first page",
                prevTriggerLabel: "previous page",
                nextTriggerLabel: "next page",
                lastTriggerLabel: "last page",
                itemLabel ({ page, totalPages }) {
                    const isLastPage = totalPages > 1 && page === totalPages;
                    return `${isLastPage ? "last page, " : ""}page ${page}`;
                },
                ...props2.translations
            }
        };
    },
    initialState () {
        return "idle";
    },
    context ({ prop, bindable, getContext }) {
        return {
            page: bindable(()=>({
                    value: prop("page"),
                    defaultValue: prop("defaultPage"),
                    onChange (value) {
                        const context = getContext();
                        prop("onPageChange")?.({
                            page: value,
                            pageSize: context.get("pageSize")
                        });
                    }
                })),
            pageSize: bindable(()=>({
                    value: prop("pageSize"),
                    defaultValue: prop("defaultPageSize"),
                    onChange (value) {
                        prop("onPageSizeChange")?.({
                            pageSize: value
                        });
                    }
                }))
        };
    },
    watch ({ track, context, action }) {
        track([
            ()=>context.get("pageSize")
        ], ()=>{
            action([
                "setPageIfNeeded"
            ]);
        });
    },
    computed: {
        totalPages: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(({ prop, context })=>[
                context.get("pageSize"),
                prop("count")
            ], ([pageSize, count])=>Math.ceil(count / pageSize)),
        pageRange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(({ context, prop })=>[
                context.get("page"),
                context.get("pageSize"),
                prop("count")
            ], ([page, pageSize, count])=>{
            const start = (page - 1) * pageSize;
            return {
                start,
                end: Math.min(start + pageSize, count)
            };
        }),
        previousPage: ({ context })=>context.get("page") === 1 ? null : context.get("page") - 1,
        nextPage: ({ context, computed })=>context.get("page") === computed("totalPages") ? null : context.get("page") + 1,
        isValidPage: ({ context, computed })=>context.get("page") >= 1 && context.get("page") <= computed("totalPages")
    },
    on: {
        SET_PAGE: {
            guard: "isValidPage",
            actions: [
                "setPage"
            ]
        },
        SET_PAGE_SIZE: {
            actions: [
                "setPageSize"
            ]
        },
        FIRST_PAGE: {
            actions: [
                "goToFirstPage"
            ]
        },
        LAST_PAGE: {
            actions: [
                "goToLastPage"
            ]
        },
        PREVIOUS_PAGE: {
            guard: "canGoToPrevPage",
            actions: [
                "goToPrevPage"
            ]
        },
        NEXT_PAGE: {
            guard: "canGoToNextPage",
            actions: [
                "goToNextPage"
            ]
        }
    },
    states: {
        idle: {}
    },
    implementations: {
        guards: {
            isValidPage: ({ event, computed })=>event.page >= 1 && event.page <= computed("totalPages"),
            isValidCount: ({ context, event })=>context.get("page") > event.count,
            canGoToNextPage: ({ context, computed })=>context.get("page") < computed("totalPages"),
            canGoToPrevPage: ({ context })=>context.get("page") > 1
        },
        actions: {
            setPage ({ context, event, computed }) {
                const page = clampPage(event.page, computed("totalPages"));
                context.set("page", page);
            },
            setPageSize ({ context, event }) {
                context.set("pageSize", event.size);
            },
            goToFirstPage ({ context }) {
                context.set("page", 1);
            },
            goToLastPage ({ context, computed }) {
                context.set("page", computed("totalPages"));
            },
            goToPrevPage ({ context, computed }) {
                context.set("page", (prev)=>clampPage(prev - 1, computed("totalPages")));
            },
            goToNextPage ({ context, computed }) {
                context.set("page", (prev)=>clampPage(prev + 1, computed("totalPages")));
            },
            setPageIfNeeded ({ context, computed }) {
                if (computed("isValidPage")) return;
                context.set("page", 1);
            }
        }
    }
});
var clampPage = (page, totalPages)=>Math.min(Math.max(page, 1), totalPages);
var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProps"])()([
    "boundaryCount",
    "count",
    "dir",
    "getRootNode",
    "id",
    "ids",
    "onPageChange",
    "onPageSizeChange",
    "page",
    "defaultPage",
    "pageSize",
    "defaultPageSize",
    "siblingCount",
    "translations",
    "type",
    "getPageUrl"
]);
var splitProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSplitProps"])(props);
var itemProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProps"])()([
    "value",
    "type"
]);
var splitItemProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSplitProps"])(itemProps);
var ellipsisProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProps"])()([
    "index"
]);
var splitEllipsisProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSplitProps"])(ellipsisProps);
;
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/steps/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anatomy",
    ()=>anatomy,
    "connect",
    ()=>connect,
    "machine",
    ()=>machine,
    "props",
    ()=>props,
    "splitProps",
    ()=>splitProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/anatomy/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/dom-query/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/core/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/types/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
// src/steps.anatomy.ts
var anatomy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAnatomy"])("steps").parts("root", "list", "item", "trigger", "indicator", "separator", "content", "nextTrigger", "prevTrigger", "progress");
var parts = anatomy.build();
// src/steps.dom.ts
var getRootId = (ctx)=>ctx.ids?.root ?? `steps:${ctx.id}`;
var getListId = (ctx)=>ctx.ids?.list ?? `steps:${ctx.id}:list`;
var getTriggerId = (ctx, index)=>ctx.ids?.triggerId?.(index) ?? `steps:${ctx.id}:trigger:${index}`;
var getContentId = (ctx, index)=>ctx.ids?.contentId?.(index) ?? `steps:${ctx.id}:content:${index}`;
// src/steps.connect.ts
function connect(service, normalize) {
    const { context, send, computed, prop, scope } = service;
    const step = context.get("step");
    const count = prop("count");
    const percent = computed("percent");
    const hasNextStep = computed("hasNextStep");
    const hasPrevStep = computed("hasPrevStep");
    const isStepValid = (index)=>{
        return prop("isStepValid")?.(index) ?? true;
    };
    const isStepSkippable = (index)=>{
        return prop("isStepSkippable")?.(index) ?? false;
    };
    const getItemState = (props2)=>({
            triggerId: getTriggerId(scope, props2.index),
            contentId: getContentId(scope, props2.index),
            current: props2.index === step,
            completed: props2.index < step,
            incomplete: props2.index > step,
            index: props2.index,
            first: props2.index === 0,
            last: props2.index === count - 1,
            skippable: isStepSkippable(props2.index),
            isValid: ()=>isStepValid(props2.index)
        });
    const goToNextStep = ()=>{
        send({
            type: "STEP.NEXT",
            src: "next.trigger.click"
        });
    };
    const goToPrevStep = ()=>{
        send({
            type: "STEP.PREV",
            src: "prev.trigger.click"
        });
    };
    const resetStep = ()=>{
        send({
            type: "STEP.RESET",
            src: "reset.trigger.click"
        });
    };
    const setStep = (value)=>{
        send({
            type: "STEP.SET",
            value,
            src: "api.setValue"
        });
    };
    return {
        value: step,
        count,
        percent,
        hasNextStep,
        hasPrevStep,
        isCompleted: computed("completed"),
        isStepValid,
        isStepSkippable,
        goToNextStep,
        goToPrevStep,
        resetStep,
        getItemState,
        setStep,
        getRootProps () {
            return normalize.element({
                ...parts.root.attrs,
                id: getRootId(scope),
                dir: prop("dir"),
                "data-orientation": prop("orientation"),
                style: {
                    "--percent": `${percent}%`
                }
            });
        },
        getListProps () {
            const arr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromLength"])(count);
            const triggerIds = arr.map((_, index)=>getTriggerId(scope, index));
            return normalize.element({
                ...parts.list.attrs,
                dir: prop("dir"),
                id: getListId(scope),
                role: "tablist",
                "aria-owns": triggerIds.join(" "),
                "aria-orientation": prop("orientation"),
                "data-orientation": prop("orientation")
            });
        },
        getItemProps (props2) {
            const itemState = getItemState(props2);
            return normalize.element({
                ...parts.item.attrs,
                dir: prop("dir"),
                "aria-current": itemState.current ? "step" : void 0,
                "data-orientation": prop("orientation"),
                "data-skippable": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(itemState.skippable)
            });
        },
        getTriggerProps (props2) {
            const itemState = getItemState(props2);
            return normalize.button({
                ...parts.trigger.attrs,
                id: itemState.triggerId,
                role: "tab",
                dir: prop("dir"),
                tabIndex: !prop("linear") || itemState.current ? 0 : -1,
                "aria-selected": itemState.current,
                "aria-controls": itemState.contentId,
                "data-state": itemState.current ? "open" : "closed",
                "data-orientation": prop("orientation"),
                "data-complete": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(itemState.completed),
                "data-current": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(itemState.current),
                "data-incomplete": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(itemState.incomplete),
                onClick (event) {
                    if (event.defaultPrevented) return;
                    if (prop("linear")) return;
                    send({
                        type: "STEP.SET",
                        value: props2.index,
                        src: "trigger.click"
                    });
                }
            });
        },
        getContentProps (props2) {
            const itemState = getItemState(props2);
            return normalize.element({
                ...parts.content.attrs,
                dir: prop("dir"),
                id: itemState.contentId,
                role: "tabpanel",
                tabIndex: 0,
                hidden: !itemState.current,
                "data-state": itemState.current ? "open" : "closed",
                "data-orientation": prop("orientation"),
                "aria-labelledby": itemState.triggerId
            });
        },
        getIndicatorProps (props2) {
            const itemState = getItemState(props2);
            return normalize.element({
                ...parts.indicator.attrs,
                dir: prop("dir"),
                "aria-hidden": true,
                "data-complete": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(itemState.completed),
                "data-current": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(itemState.current),
                "data-incomplete": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(itemState.incomplete)
            });
        },
        getSeparatorProps (props2) {
            const itemState = getItemState(props2);
            return normalize.element({
                ...parts.separator.attrs,
                dir: prop("dir"),
                "data-orientation": prop("orientation"),
                "data-complete": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(itemState.completed),
                "data-current": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(itemState.current),
                "data-incomplete": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(itemState.incomplete)
            });
        },
        getNextTriggerProps () {
            return normalize.button({
                ...parts.nextTrigger.attrs,
                dir: prop("dir"),
                type: "button",
                disabled: !hasNextStep,
                onClick (event) {
                    if (event.defaultPrevented) return;
                    goToNextStep();
                }
            });
        },
        getPrevTriggerProps () {
            return normalize.button({
                dir: prop("dir"),
                ...parts.prevTrigger.attrs,
                type: "button",
                disabled: !hasPrevStep,
                onClick (event) {
                    if (event.defaultPrevented) return;
                    goToPrevStep();
                }
            });
        },
        getProgressProps () {
            return normalize.element({
                dir: prop("dir"),
                ...parts.progress.attrs,
                role: "progressbar",
                "aria-valuenow": percent,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuetext": `${percent}% complete`,
                "data-complete": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(percent === 100)
            });
        }
    };
}
var machine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMachine"])({
    props ({ props: props2 }) {
        return {
            defaultStep: 0,
            count: 1,
            linear: false,
            orientation: "horizontal",
            ...props2
        };
    },
    context ({ prop, bindable }) {
        return {
            step: bindable(()=>({
                    defaultValue: prop("defaultStep"),
                    value: prop("step"),
                    onChange (value) {
                        prop("onStepChange")?.({
                            step: value
                        });
                        const completed = value == prop("count");
                        if (completed) prop("onStepComplete")?.();
                    }
                }))
        };
    },
    computed: {
        percent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(({ context, prop })=>[
                context.get("step"),
                prop("count")
            ], ([step, count])=>step / count * 100),
        hasNextStep: ({ context, prop })=>context.get("step") < prop("count"),
        hasPrevStep: ({ context })=>context.get("step") > 0,
        completed: ({ context, prop })=>context.get("step") === prop("count")
    },
    initialState () {
        return "idle";
    },
    entry: [
        "validateStepIndex"
    ],
    states: {
        idle: {
            on: {
                "STEP.SET": [
                    {
                        guard: "isValidStepNavigation",
                        actions: [
                            "setStep"
                        ]
                    },
                    {
                        actions: [
                            "invokeOnStepInvalid"
                        ]
                    }
                ],
                "STEP.NEXT": [
                    {
                        guard: "isCurrentStepValid",
                        actions: [
                            "goToNextStep"
                        ]
                    },
                    {
                        actions: [
                            "invokeOnStepInvalid"
                        ]
                    }
                ],
                "STEP.PREV": {
                    actions: [
                        "goToPrevStep"
                    ]
                },
                "STEP.RESET": {
                    actions: [
                        "resetStep"
                    ]
                }
            }
        }
    },
    implementations: {
        guards: {
            isCurrentStepValid ({ context, prop }) {
                const current = context.get("step");
                if (prop("isStepSkippable")?.(current)) return true;
                const isStepValid = prop("isStepValid");
                if (!isStepValid) return true;
                return isStepValid(current);
            },
            isValidStepNavigation ({ context, event, prop }) {
                const current = context.get("step");
                if (event.value <= current) return true;
                if (prop("isStepSkippable")?.(current)) return true;
                const isStepValid = prop("isStepValid");
                if (!isStepValid) return true;
                return isStepValid(current);
            }
        },
        actions: {
            goToNextStep ({ context, prop }) {
                const count = prop("count");
                context.set("step", Math.min(context.get("step") + 1, count));
            },
            goToPrevStep ({ context }) {
                context.set("step", Math.max(context.get("step") - 1, 0));
            },
            resetStep ({ context }) {
                context.set("step", 0);
            },
            setStep ({ context, event }) {
                context.set("step", event.value);
            },
            validateStepIndex ({ context, prop }) {
                validateStepIndex(prop("count"), context.get("step"));
            },
            invokeOnStepInvalid ({ context, event, prop }) {
                prop("onStepInvalid")?.({
                    step: context.get("step"),
                    action: event.type === "STEP.NEXT" ? "next" : "set",
                    targetStep: event.value
                });
            }
        }
    }
});
var validateStepIndex = (count, step)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValueWithinRange"])(step, 0, count)) {
        throw new RangeError(`[zag-js/steps] step index ${step} is out of bounds`);
    }
};
var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProps"])()([
    "count",
    "defaultStep",
    "dir",
    "getRootNode",
    "id",
    "ids",
    "isStepSkippable",
    "isStepValid",
    "linear",
    "onStepChange",
    "onStepComplete",
    "onStepInvalid",
    "orientation",
    "step"
]);
var splitProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSplitProps"])(props);
;
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/tabs/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anatomy",
    ()=>anatomy,
    "connect",
    ()=>connect,
    "contentProps",
    ()=>contentProps,
    "machine",
    ()=>machine,
    "props",
    ()=>props,
    "splitContentProps",
    ()=>splitContentProps,
    "splitProps",
    ()=>splitProps,
    "splitTriggerProps",
    ()=>splitTriggerProps,
    "triggerProps",
    ()=>triggerProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/anatomy/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/dom-query/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/core/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/types/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
// src/tabs.anatomy.ts
var anatomy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAnatomy"])("tabs").parts("root", "list", "trigger", "content", "indicator");
var parts = anatomy.build();
var getRootId = (ctx)=>ctx.ids?.root ?? `tabs:${ctx.id}`;
var getListId = (ctx)=>ctx.ids?.list ?? `tabs:${ctx.id}:list`;
var getContentId = (ctx, value)=>ctx.ids?.content?.(value) ?? `tabs:${ctx.id}:content-${value}`;
var getTriggerId = (ctx, value)=>ctx.ids?.trigger?.(value) ?? `tabs:${ctx.id}:trigger-${value}`;
var getIndicatorId = (ctx)=>ctx.ids?.indicator ?? `tabs:${ctx.id}:indicator`;
var getListEl = (ctx)=>ctx.getById(getListId(ctx));
var getContentEl = (ctx, value)=>ctx.getById(getContentId(ctx, value));
var getTriggerEl = (ctx, value)=>value != null ? ctx.getById(getTriggerId(ctx, value)) : null;
var getIndicatorEl = (ctx)=>ctx.getById(getIndicatorId(ctx));
var getElements = (ctx)=>{
    const ownerId = CSS.escape(getListId(ctx));
    const selector = `[role=tab][data-ownedby='${ownerId}']:not([disabled])`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryAll"])(getListEl(ctx), selector);
};
var getFirstTriggerEl = (ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["first"])(getElements(ctx));
var getLastTriggerEl = (ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["last"])(getElements(ctx));
var getNextTriggerEl = (ctx, opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextById"])(getElements(ctx), getTriggerId(ctx, opts.value), opts.loopFocus);
var getPrevTriggerEl = (ctx, opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prevById"])(getElements(ctx), getTriggerId(ctx, opts.value), opts.loopFocus);
var getOffsetRect = (el)=>({
        x: el?.offsetLeft ?? 0,
        y: el?.offsetTop ?? 0,
        width: el?.offsetWidth ?? 0,
        height: el?.offsetHeight ?? 0
    });
var getRectByValue = (ctx, value)=>{
    const tab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemById"])(getElements(ctx), getTriggerId(ctx, value));
    return getOffsetRect(tab);
};
// src/tabs.connect.ts
function connect(service, normalize) {
    const { state, send, context, prop, scope } = service;
    const translations = prop("translations");
    const focused = state.matches("focused");
    const isVertical = prop("orientation") === "vertical";
    const isHorizontal = prop("orientation") === "horizontal";
    const composite = prop("composite");
    function getTriggerState(props2) {
        return {
            selected: context.get("value") === props2.value,
            focused: context.get("focusedValue") === props2.value,
            disabled: !!props2.disabled
        };
    }
    return {
        value: context.get("value"),
        focusedValue: context.get("focusedValue"),
        setValue (value) {
            send({
                type: "SET_VALUE",
                value
            });
        },
        clearValue () {
            send({
                type: "CLEAR_VALUE"
            });
        },
        setIndicatorRect (value) {
            const id = getTriggerId(scope, value);
            send({
                type: "SET_INDICATOR_RECT",
                id
            });
        },
        syncTabIndex () {
            send({
                type: "SYNC_TAB_INDEX"
            });
        },
        selectNext (fromValue) {
            send({
                type: "TAB_FOCUS",
                value: fromValue,
                src: "selectNext"
            });
            send({
                type: "ARROW_NEXT",
                src: "selectNext"
            });
        },
        selectPrev (fromValue) {
            send({
                type: "TAB_FOCUS",
                value: fromValue,
                src: "selectPrev"
            });
            send({
                type: "ARROW_PREV",
                src: "selectPrev"
            });
        },
        focus () {
            const value = context.get("value");
            if (!value) return;
            getTriggerEl(scope, value)?.focus();
        },
        getRootProps () {
            return normalize.element({
                ...parts.root.attrs,
                id: getRootId(scope),
                "data-orientation": prop("orientation"),
                "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(focused),
                dir: prop("dir")
            });
        },
        getListProps () {
            return normalize.element({
                ...parts.list.attrs,
                id: getListId(scope),
                role: "tablist",
                dir: prop("dir"),
                "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(focused),
                "aria-orientation": prop("orientation"),
                "data-orientation": prop("orientation"),
                "aria-label": translations?.listLabel,
                onKeyDown (event) {
                    if (event.defaultPrevented) return;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isComposingEvent"])(event)) return;
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contains"])(event.currentTarget, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEventTarget"])(event))) return;
                    const keyMap = {
                        ArrowDown () {
                            if (isHorizontal) return;
                            send({
                                type: "ARROW_NEXT",
                                key: "ArrowDown"
                            });
                        },
                        ArrowUp () {
                            if (isHorizontal) return;
                            send({
                                type: "ARROW_PREV",
                                key: "ArrowUp"
                            });
                        },
                        ArrowLeft () {
                            if (isVertical) return;
                            send({
                                type: "ARROW_PREV",
                                key: "ArrowLeft"
                            });
                        },
                        ArrowRight () {
                            if (isVertical) return;
                            send({
                                type: "ARROW_NEXT",
                                key: "ArrowRight"
                            });
                        },
                        Home () {
                            send({
                                type: "HOME"
                            });
                        },
                        End () {
                            send({
                                type: "END"
                            });
                        }
                    };
                    let key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEventKey"])(event, {
                        dir: prop("dir"),
                        orientation: prop("orientation")
                    });
                    const exec = keyMap[key];
                    if (exec) {
                        event.preventDefault();
                        exec(event);
                        return;
                    }
                }
            });
        },
        getTriggerState,
        getTriggerProps (props2) {
            const { value, disabled } = props2;
            const triggerState = getTriggerState(props2);
            return normalize.button({
                ...parts.trigger.attrs,
                role: "tab",
                type: "button",
                disabled,
                dir: prop("dir"),
                "data-orientation": prop("orientation"),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(disabled),
                "aria-disabled": disabled,
                "data-value": value,
                "aria-selected": triggerState.selected,
                "data-selected": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(triggerState.selected),
                "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(triggerState.focused),
                "aria-controls": triggerState.selected ? getContentId(scope, value) : void 0,
                "data-ownedby": getListId(scope),
                "data-ssr": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(context.get("ssr")),
                id: getTriggerId(scope, value),
                tabIndex: triggerState.selected && composite ? 0 : -1,
                onFocus () {
                    send({
                        type: "TAB_FOCUS",
                        value
                    });
                },
                onBlur (event) {
                    const target = event.relatedTarget;
                    if (target?.getAttribute("role") !== "tab") {
                        send({
                            type: "TAB_BLUR"
                        });
                    }
                },
                onClick (event) {
                    if (event.defaultPrevented) return;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOpeningInNewTab"])(event)) return;
                    if (disabled) return;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSafari"])()) {
                        event.currentTarget.focus();
                    }
                    send({
                        type: "TAB_CLICK",
                        value
                    });
                }
            });
        },
        getContentProps (props2) {
            const { value } = props2;
            const selected = context.get("value") === value;
            return normalize.element({
                ...parts.content.attrs,
                dir: prop("dir"),
                id: getContentId(scope, value),
                tabIndex: composite ? 0 : -1,
                "aria-labelledby": getTriggerId(scope, value),
                role: "tabpanel",
                "data-ownedby": getListId(scope),
                "data-selected": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(selected),
                "data-orientation": prop("orientation"),
                hidden: !selected
            });
        },
        getIndicatorProps () {
            const rect = context.get("indicatorRect");
            const rectIsEmpty = rect == null || rect.width === 0 && rect.height === 0 && rect.x === 0 && rect.y === 0;
            return normalize.element({
                id: getIndicatorId(scope),
                ...parts.indicator.attrs,
                dir: prop("dir"),
                "data-orientation": prop("orientation"),
                hidden: rectIsEmpty,
                style: {
                    "--transition-property": "left, right, top, bottom, width, height",
                    "--left": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPx"])(rect?.x),
                    "--top": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPx"])(rect?.y),
                    "--width": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPx"])(rect?.width),
                    "--height": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPx"])(rect?.height),
                    position: "absolute",
                    willChange: "var(--transition-property)",
                    transitionProperty: "var(--transition-property)",
                    transitionDuration: "var(--transition-duration, 150ms)",
                    transitionTimingFunction: "var(--transition-timing-function)",
                    [isHorizontal ? "left" : "top"]: isHorizontal ? "var(--left)" : "var(--top)"
                }
            });
        }
    };
}
var { createMachine } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setup"])();
var machine = createMachine({
    props ({ props: props2 }) {
        return {
            dir: "ltr",
            orientation: "horizontal",
            activationMode: "automatic",
            loopFocus: true,
            composite: true,
            navigate (details) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clickIfLink"])(details.node);
            },
            defaultValue: null,
            ...props2
        };
    },
    initialState () {
        return "idle";
    },
    context ({ prop, bindable }) {
        return {
            value: bindable(()=>({
                    defaultValue: prop("defaultValue"),
                    value: prop("value"),
                    onChange (value) {
                        prop("onValueChange")?.({
                            value
                        });
                    }
                })),
            focusedValue: bindable(()=>({
                    defaultValue: prop("value") || prop("defaultValue"),
                    sync: true,
                    onChange (value) {
                        prop("onFocusChange")?.({
                            focusedValue: value
                        });
                    }
                })),
            ssr: bindable(()=>({
                    defaultValue: true
                })),
            indicatorRect: bindable(()=>({
                    defaultValue: null
                }))
        };
    },
    watch ({ context, prop, track, action }) {
        track([
            ()=>context.get("value")
        ], ()=>{
            action([
                "syncIndicatorRect",
                "syncTabIndex",
                "navigateIfNeeded"
            ]);
        });
        track([
            ()=>prop("dir"),
            ()=>prop("orientation")
        ], ()=>{
            action([
                "syncIndicatorRect"
            ]);
        });
    },
    on: {
        SET_VALUE: {
            actions: [
                "setValue"
            ]
        },
        CLEAR_VALUE: {
            actions: [
                "clearValue"
            ]
        },
        SET_INDICATOR_RECT: {
            actions: [
                "setIndicatorRect"
            ]
        },
        SYNC_TAB_INDEX: {
            actions: [
                "syncTabIndex"
            ]
        }
    },
    entry: [
        "syncIndicatorRect",
        "syncTabIndex",
        "syncSsr"
    ],
    exit: [
        "cleanupObserver"
    ],
    states: {
        idle: {
            on: {
                TAB_FOCUS: {
                    target: "focused",
                    actions: [
                        "setFocusedValue"
                    ]
                },
                TAB_CLICK: {
                    target: "focused",
                    actions: [
                        "setFocusedValue",
                        "setValue"
                    ]
                }
            }
        },
        focused: {
            on: {
                TAB_CLICK: {
                    actions: [
                        "setFocusedValue",
                        "setValue"
                    ]
                },
                ARROW_PREV: [
                    {
                        guard: "selectOnFocus",
                        actions: [
                            "focusPrevTab",
                            "selectFocusedTab"
                        ]
                    },
                    {
                        actions: [
                            "focusPrevTab"
                        ]
                    }
                ],
                ARROW_NEXT: [
                    {
                        guard: "selectOnFocus",
                        actions: [
                            "focusNextTab",
                            "selectFocusedTab"
                        ]
                    },
                    {
                        actions: [
                            "focusNextTab"
                        ]
                    }
                ],
                HOME: [
                    {
                        guard: "selectOnFocus",
                        actions: [
                            "focusFirstTab",
                            "selectFocusedTab"
                        ]
                    },
                    {
                        actions: [
                            "focusFirstTab"
                        ]
                    }
                ],
                END: [
                    {
                        guard: "selectOnFocus",
                        actions: [
                            "focusLastTab",
                            "selectFocusedTab"
                        ]
                    },
                    {
                        actions: [
                            "focusLastTab"
                        ]
                    }
                ],
                TAB_FOCUS: {
                    actions: [
                        "setFocusedValue"
                    ]
                },
                TAB_BLUR: {
                    target: "idle",
                    actions: [
                        "clearFocusedValue"
                    ]
                }
            }
        }
    },
    implementations: {
        guards: {
            selectOnFocus: ({ prop })=>prop("activationMode") === "automatic"
        },
        actions: {
            selectFocusedTab ({ context, prop }) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    const focusedValue = context.get("focusedValue");
                    if (!focusedValue) return;
                    const nullable = prop("deselectable") && context.get("value") === focusedValue;
                    const value = nullable ? null : focusedValue;
                    context.set("value", value);
                });
            },
            setFocusedValue ({ context, event, flush }) {
                if (event.value == null) return;
                flush(()=>{
                    context.set("focusedValue", event.value);
                });
            },
            clearFocusedValue ({ context }) {
                context.set("focusedValue", null);
            },
            setValue ({ context, event, prop }) {
                const nullable = prop("deselectable") && context.get("value") === context.get("focusedValue");
                context.set("value", nullable ? null : event.value);
            },
            clearValue ({ context }) {
                context.set("value", null);
            },
            focusFirstTab ({ scope }) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    getFirstTriggerEl(scope)?.focus();
                });
            },
            focusLastTab ({ scope }) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    getLastTriggerEl(scope)?.focus();
                });
            },
            focusNextTab ({ context, prop, scope, event }) {
                const focusedValue = event.value ?? context.get("focusedValue");
                if (!focusedValue) return;
                const triggerEl = getNextTriggerEl(scope, {
                    value: focusedValue,
                    loopFocus: prop("loopFocus")
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    if (prop("composite")) {
                        triggerEl?.focus();
                    } else if (triggerEl?.dataset.value != null) {
                        context.set("focusedValue", triggerEl.dataset.value);
                    }
                });
            },
            focusPrevTab ({ context, prop, scope, event }) {
                const focusedValue = event.value ?? context.get("focusedValue");
                if (!focusedValue) return;
                const triggerEl = getPrevTriggerEl(scope, {
                    value: focusedValue,
                    loopFocus: prop("loopFocus")
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    if (prop("composite")) {
                        triggerEl?.focus();
                    } else if (triggerEl?.dataset.value != null) {
                        context.set("focusedValue", triggerEl.dataset.value);
                    }
                });
            },
            syncTabIndex ({ context, scope }) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    const value = context.get("value");
                    if (!value) return;
                    const contentEl = getContentEl(scope, value);
                    if (!contentEl) return;
                    const focusables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFocusables"])(contentEl);
                    if (focusables.length > 0) {
                        contentEl.removeAttribute("tabindex");
                    } else {
                        contentEl.setAttribute("tabindex", "0");
                    }
                });
            },
            cleanupObserver ({ refs }) {
                const cleanup = refs.get("indicatorCleanup");
                if (cleanup) cleanup();
            },
            setIndicatorRect ({ context, event, scope }) {
                const value = event.id ?? context.get("value");
                const indicatorEl = getIndicatorEl(scope);
                if (!indicatorEl) return;
                if (!value) return;
                const triggerEl = getTriggerEl(scope, value);
                if (!triggerEl) return;
                context.set("indicatorRect", getRectByValue(scope, value));
            },
            syncSsr ({ context }) {
                context.set("ssr", false);
            },
            syncIndicatorRect ({ context, refs, scope }) {
                const cleanup = refs.get("indicatorCleanup");
                if (cleanup) cleanup();
                const indicatorEl = getIndicatorEl(scope);
                if (!indicatorEl) return;
                const exec = ()=>{
                    const triggerEl = getTriggerEl(scope, context.get("value"));
                    if (!triggerEl) return;
                    const rect = getOffsetRect(triggerEl);
                    context.set("indicatorRect", (prev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEqual"])(prev, rect) ? prev : rect);
                };
                exec();
                const triggerEls = getElements(scope);
                const indicatorCleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callAll"])(...triggerEls.map((el)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resizeObserverBorderBox"].observe(el, exec)));
                refs.set("indicatorCleanup", indicatorCleanup);
            },
            navigateIfNeeded ({ context, prop, scope }) {
                const value = context.get("value");
                if (!value) return;
                const triggerEl = getTriggerEl(scope, value);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAnchorElement"])(triggerEl)) {
                    prop("navigate")?.({
                        value,
                        node: triggerEl,
                        href: triggerEl.href
                    });
                }
            }
        }
    }
});
var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProps"])()([
    "activationMode",
    "composite",
    "deselectable",
    "dir",
    "getRootNode",
    "id",
    "ids",
    "loopFocus",
    "navigate",
    "onFocusChange",
    "onValueChange",
    "orientation",
    "translations",
    "value",
    "defaultValue"
]);
var splitProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSplitProps"])(props);
var triggerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProps"])()([
    "disabled",
    "value"
]);
var splitTriggerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSplitProps"])(triggerProps);
var contentProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProps"])()([
    "value"
]);
var splitContentProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSplitProps"])(contentProps);
;
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/toast/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anatomy",
    ()=>anatomy,
    "connect",
    ()=>connect,
    "createStore",
    ()=>createToastStore,
    "group",
    ()=>group,
    "machine",
    ()=>machine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/dom-query/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/anatomy/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/core/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dismissable$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/dismissable/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/utils/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
// src/toast-group.connect.ts
var anatomy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAnatomy"])("toast").parts("group", "root", "title", "description", "actionTrigger", "closeTrigger");
var parts = anatomy.build();
// src/toast.dom.ts
var getRegionId = (placement)=>`toast-group:${placement}`;
var getRegionEl = (ctx, placement)=>ctx.getById(`toast-group:${placement}`);
var getRootId = (ctx)=>`toast:${ctx.id}`;
var getRootEl = (ctx)=>ctx.getById(getRootId(ctx));
var getTitleId = (ctx)=>`toast:${ctx.id}:title`;
var getDescriptionId = (ctx)=>`toast:${ctx.id}:description`;
var getCloseTriggerId = (ctx)=>`toast${ctx.id}:close`;
var defaultTimeouts = {
    info: 5e3,
    error: 5e3,
    success: 2e3,
    loading: Infinity,
    DEFAULT: 5e3
};
function getToastDuration(duration, type) {
    return duration ?? defaultTimeouts[type] ?? defaultTimeouts.DEFAULT;
}
var getOffsets = (offsets)=>typeof offsets === "string" ? {
        left: offsets,
        right: offsets,
        bottom: offsets,
        top: offsets
    } : offsets;
function getGroupPlacementStyle(service, placement) {
    const { prop, computed, context } = service;
    const { offsets, gap } = prop("store").attrs;
    const heights = context.get("heights");
    const computedOffset = getOffsets(offsets);
    const rtl = prop("dir") === "rtl";
    const computedPlacement = placement.replace("-start", rtl ? "-right" : "-left").replace("-end", rtl ? "-left" : "-right");
    const isRighty = computedPlacement.includes("right");
    const isLefty = computedPlacement.includes("left");
    const styles = {
        position: "fixed",
        pointerEvents: computed("count") > 0 ? void 0 : "none",
        display: "flex",
        flexDirection: "column",
        "--gap": `${gap}px`,
        "--first-height": `${heights[0]?.height || 0}px`,
        "--viewport-offset-left": computedOffset.left,
        "--viewport-offset-right": computedOffset.right,
        "--viewport-offset-top": computedOffset.top,
        "--viewport-offset-bottom": computedOffset.bottom,
        zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_Z_INDEX"]
    };
    let alignItems = "center";
    if (isRighty) alignItems = "flex-end";
    if (isLefty) alignItems = "flex-start";
    styles.alignItems = alignItems;
    if (computedPlacement.includes("top")) {
        const offset = computedOffset.top;
        styles.top = `max(env(safe-area-inset-top, 0px), ${offset})`;
    }
    if (computedPlacement.includes("bottom")) {
        const offset = computedOffset.bottom;
        styles.bottom = `max(env(safe-area-inset-bottom, 0px), ${offset})`;
    }
    if (!computedPlacement.includes("left")) {
        const offset = computedOffset.right;
        styles.insetInlineEnd = `calc(env(safe-area-inset-right, 0px) + ${offset})`;
    }
    if (!computedPlacement.includes("right")) {
        const offset = computedOffset.left;
        styles.insetInlineStart = `calc(env(safe-area-inset-left, 0px) + ${offset})`;
    }
    return styles;
}
function getPlacementStyle(service, visible) {
    const { prop, context, computed } = service;
    const parent = prop("parent");
    const placement = parent.computed("placement");
    const { gap } = parent.prop("store").attrs;
    const [side] = placement.split("-");
    const mounted = context.get("mounted");
    const remainingTime = context.get("remainingTime");
    const height = computed("height");
    const frontmost = computed("frontmost");
    const sibling = !frontmost;
    const overlap = !prop("stacked");
    const stacked = prop("stacked");
    const type = prop("type");
    const duration = type === "loading" ? Number.MAX_SAFE_INTEGER : remainingTime;
    const offset = computed("heightIndex") * gap + computed("heightBefore");
    const styles = {
        position: "absolute",
        pointerEvents: "auto",
        "--opacity": "0",
        "--remove-delay": `${prop("removeDelay")}ms`,
        "--duration": `${duration}ms`,
        "--initial-height": `${height}px`,
        "--offset": `${offset}px`,
        "--index": prop("index"),
        "--z-index": computed("zIndex"),
        "--lift-amount": "calc(var(--lift) * var(--gap))",
        "--y": "100%",
        "--x": "0"
    };
    const assign = (overrides)=>Object.assign(styles, overrides);
    if (side === "top") {
        assign({
            top: "0",
            "--sign": "-1",
            "--y": "-100%",
            "--lift": "1"
        });
    } else if (side === "bottom") {
        assign({
            bottom: "0",
            "--sign": "1",
            "--y": "100%",
            "--lift": "-1"
        });
    }
    if (mounted) {
        assign({
            "--y": "0",
            "--opacity": "1"
        });
        if (stacked) {
            assign({
                "--y": "calc(var(--lift) * var(--offset))",
                "--height": "var(--initial-height)"
            });
        }
    }
    if (!visible) {
        assign({
            "--opacity": "0",
            pointerEvents: "none"
        });
    }
    if (sibling && overlap) {
        assign({
            "--base-scale": "var(--index) * 0.05 + 1",
            "--y": "calc(var(--lift-amount) * var(--index))",
            "--scale": "calc(-1 * var(--base-scale))",
            "--height": "var(--first-height)"
        });
        if (!visible) {
            assign({
                "--y": "calc(var(--sign) * 40%)"
            });
        }
    }
    if (sibling && stacked && !visible) {
        assign({
            "--y": "calc(var(--lift) * var(--offset) + var(--lift) * -100%)"
        });
    }
    if (frontmost && !visible) {
        assign({
            "--y": "calc(var(--lift) * -100%)"
        });
    }
    return styles;
}
function getGhostBeforeStyle(service, visible) {
    const { computed } = service;
    const styles = {
        position: "absolute",
        inset: "0",
        scale: "1 2",
        pointerEvents: visible ? "none" : "auto"
    };
    const assign = (overrides)=>Object.assign(styles, overrides);
    if (computed("frontmost") && !visible) {
        assign({
            height: "calc(var(--initial-height) + 80%)"
        });
    }
    return styles;
}
function getGhostAfterStyle() {
    return {
        position: "absolute",
        left: "0",
        height: "calc(var(--gap) + 2px)",
        bottom: "100%",
        width: "100%"
    };
}
// src/toast-group.connect.ts
function groupConnect(service, normalize) {
    const { context, prop, send, refs, computed } = service;
    return {
        getCount () {
            return context.get("toasts").length;
        },
        getToasts () {
            return context.get("toasts");
        },
        getGroupProps (options = {}) {
            const { label = "Notifications" } = options;
            const { hotkey } = prop("store").attrs;
            const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
            const placement = computed("placement");
            const [side, align = "center"] = placement.split("-");
            return normalize.element({
                ...parts.group.attrs,
                dir: prop("dir"),
                tabIndex: -1,
                "aria-label": `${placement} ${label} ${hotkeyLabel}`,
                id: getRegionId(placement),
                "data-placement": placement,
                "data-side": side,
                "data-align": align,
                "aria-live": "polite",
                role: "region",
                style: getGroupPlacementStyle(service, placement),
                onMouseEnter () {
                    if (refs.get("ignoreMouseTimer").isActive()) return;
                    send({
                        type: "REGION.POINTER_ENTER",
                        placement
                    });
                },
                onMouseMove () {
                    if (refs.get("ignoreMouseTimer").isActive()) return;
                    send({
                        type: "REGION.POINTER_ENTER",
                        placement
                    });
                },
                onMouseLeave () {
                    if (refs.get("ignoreMouseTimer").isActive()) return;
                    send({
                        type: "REGION.POINTER_LEAVE",
                        placement
                    });
                },
                onFocus (event) {
                    send({
                        type: "REGION.FOCUS",
                        target: event.relatedTarget
                    });
                },
                onBlur (event) {
                    if (refs.get("isFocusWithin") && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contains"])(event.currentTarget, event.relatedTarget)) {
                        queueMicrotask(()=>send({
                                type: "REGION.BLUR"
                            }));
                    }
                }
            });
        },
        subscribe (fn) {
            const store = prop("store");
            return store.subscribe(()=>fn(context.get("toasts")));
        }
    };
}
var { guards, createMachine } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setup"])();
var { and } = guards;
var groupMachine = createMachine({
    props ({ props }) {
        return {
            dir: "ltr",
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uuid"])(),
            ...props,
            store: props.store
        };
    },
    initialState ({ prop }) {
        return prop("store").attrs.overlap ? "overlap" : "stack";
    },
    refs () {
        return {
            lastFocusedEl: null,
            isFocusWithin: false,
            isPointerWithin: false,
            ignoreMouseTimer: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationFrame"].create(),
            dismissableCleanup: void 0
        };
    },
    context ({ bindable }) {
        return {
            toasts: bindable(()=>({
                    defaultValue: [],
                    sync: true,
                    hash: (toasts)=>toasts.map((t)=>t.id).join(",")
                })),
            heights: bindable(()=>({
                    defaultValue: [],
                    sync: true
                }))
        };
    },
    computed: {
        count: ({ context })=>context.get("toasts").length,
        overlap: ({ prop })=>prop("store").attrs.overlap,
        placement: ({ prop })=>prop("store").attrs.placement
    },
    effects: [
        "subscribeToStore",
        "trackDocumentVisibility",
        "trackHotKeyPress"
    ],
    watch ({ track, context, action }) {
        track([
            ()=>context.hash("toasts")
        ], ()=>{
            queueMicrotask(()=>{
                action([
                    "collapsedIfEmpty",
                    "setDismissableBranch"
                ]);
            });
        });
    },
    exit: [
        "clearDismissableBranch",
        "clearLastFocusedEl",
        "clearMouseEventTimer"
    ],
    on: {
        "DOC.HOTKEY": {
            actions: [
                "focusRegionEl"
            ]
        },
        "REGION.BLUR": [
            {
                guard: and("isOverlapping", "isPointerOut"),
                target: "overlap",
                actions: [
                    "collapseToasts",
                    "resumeToasts",
                    "restoreFocusIfPointerOut"
                ]
            },
            {
                guard: "isPointerOut",
                target: "stack",
                actions: [
                    "resumeToasts",
                    "restoreFocusIfPointerOut"
                ]
            },
            {
                actions: [
                    "clearFocusWithin"
                ]
            }
        ],
        "TOAST.REMOVE": {
            actions: [
                "removeToast",
                "removeHeight",
                "ignoreMouseEventsTemporarily"
            ]
        },
        "TOAST.PAUSE": {
            actions: [
                "pauseToasts"
            ]
        }
    },
    states: {
        stack: {
            on: {
                "REGION.POINTER_LEAVE": [
                    {
                        guard: "isOverlapping",
                        target: "overlap",
                        actions: [
                            "clearPointerWithin",
                            "resumeToasts",
                            "collapseToasts"
                        ]
                    },
                    {
                        actions: [
                            "clearPointerWithin",
                            "resumeToasts"
                        ]
                    }
                ],
                "REGION.OVERLAP": {
                    target: "overlap",
                    actions: [
                        "collapseToasts"
                    ]
                },
                "REGION.FOCUS": {
                    actions: [
                        "setLastFocusedEl",
                        "pauseToasts"
                    ]
                },
                "REGION.POINTER_ENTER": {
                    actions: [
                        "setPointerWithin",
                        "pauseToasts"
                    ]
                }
            }
        },
        overlap: {
            on: {
                "REGION.STACK": {
                    target: "stack",
                    actions: [
                        "expandToasts"
                    ]
                },
                "REGION.POINTER_ENTER": {
                    target: "stack",
                    actions: [
                        "setPointerWithin",
                        "pauseToasts",
                        "expandToasts"
                    ]
                },
                "REGION.FOCUS": {
                    target: "stack",
                    actions: [
                        "setLastFocusedEl",
                        "pauseToasts",
                        "expandToasts"
                    ]
                }
            }
        }
    },
    implementations: {
        guards: {
            isOverlapping: ({ computed })=>computed("overlap"),
            isPointerOut: ({ refs })=>!refs.get("isPointerWithin")
        },
        effects: {
            subscribeToStore ({ context, prop }) {
                const store = prop("store");
                context.set("toasts", store.getVisibleToasts());
                return store.subscribe((toast)=>{
                    if (toast.dismiss) {
                        context.set("toasts", (prev)=>prev.filter((t)=>t.id !== toast.id));
                        return;
                    }
                    context.set("toasts", (prev)=>{
                        const index = prev.findIndex((t)=>t.id === toast.id);
                        if (index !== -1) {
                            return [
                                ...prev.slice(0, index),
                                {
                                    ...prev[index],
                                    ...toast
                                },
                                ...prev.slice(index + 1)
                            ];
                        }
                        return [
                            toast,
                            ...prev
                        ];
                    });
                });
            },
            trackHotKeyPress ({ prop, send }) {
                const handleKeyDown = (event)=>{
                    const { hotkey } = prop("store").attrs;
                    const isHotkeyPressed = hotkey.every((key)=>event[key] || event.code === key);
                    if (!isHotkeyPressed) return;
                    send({
                        type: "DOC.HOTKEY"
                    });
                };
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDomEvent"])(document, "keydown", handleKeyDown, {
                    capture: true
                });
            },
            trackDocumentVisibility ({ prop, send, scope }) {
                const { pauseOnPageIdle } = prop("store").attrs;
                if (!pauseOnPageIdle) return;
                const doc = scope.getDoc();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDomEvent"])(doc, "visibilitychange", ()=>{
                    const isHidden = doc.visibilityState === "hidden";
                    send({
                        type: isHidden ? "PAUSE_ALL" : "RESUME_ALL"
                    });
                });
            }
        },
        actions: {
            setDismissableBranch ({ refs, context, computed, scope }) {
                const toasts = context.get("toasts");
                const placement = computed("placement");
                const hasToasts = toasts.length > 0;
                if (!hasToasts) {
                    refs.get("dismissableCleanup")?.();
                    return;
                }
                if (hasToasts && refs.get("dismissableCleanup")) {
                    return;
                }
                const groupEl = ()=>getRegionEl(scope, placement);
                const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dismissable$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackDismissableBranch"])(groupEl, {
                    defer: true
                });
                refs.set("dismissableCleanup", cleanup);
            },
            clearDismissableBranch ({ refs }) {
                refs.get("dismissableCleanup")?.();
            },
            focusRegionEl ({ scope, computed }) {
                queueMicrotask(()=>{
                    getRegionEl(scope, computed("placement"))?.focus();
                });
            },
            pauseToasts ({ prop }) {
                prop("store").pause();
            },
            resumeToasts ({ prop }) {
                prop("store").resume();
            },
            expandToasts ({ prop }) {
                prop("store").expand();
            },
            collapseToasts ({ prop }) {
                prop("store").collapse();
            },
            removeToast ({ prop, event }) {
                prop("store").remove(event.id);
            },
            removeHeight ({ event, context }) {
                if (event?.id == null) return;
                queueMicrotask(()=>{
                    context.set("heights", (heights)=>heights.filter((height)=>height.id !== event.id));
                });
            },
            collapsedIfEmpty ({ send, computed }) {
                if (!computed("overlap") || computed("count") > 1) return;
                send({
                    type: "REGION.OVERLAP"
                });
            },
            setLastFocusedEl ({ refs, event }) {
                if (refs.get("isFocusWithin") || !event.target) return;
                refs.set("isFocusWithin", true);
                refs.set("lastFocusedEl", event.target);
            },
            restoreFocusIfPointerOut ({ refs }) {
                if (!refs.get("lastFocusedEl") || refs.get("isPointerWithin")) return;
                refs.get("lastFocusedEl")?.focus({
                    preventScroll: true
                });
                refs.set("lastFocusedEl", null);
                refs.set("isFocusWithin", false);
            },
            setPointerWithin ({ refs }) {
                refs.set("isPointerWithin", true);
            },
            clearPointerWithin ({ refs }) {
                refs.set("isPointerWithin", false);
                if (refs.get("lastFocusedEl") && !refs.get("isFocusWithin")) {
                    refs.get("lastFocusedEl")?.focus({
                        preventScroll: true
                    });
                    refs.set("lastFocusedEl", null);
                }
            },
            clearFocusWithin ({ refs }) {
                refs.set("isFocusWithin", false);
            },
            clearLastFocusedEl ({ refs }) {
                if (!refs.get("lastFocusedEl")) return;
                refs.get("lastFocusedEl")?.focus({
                    preventScroll: true
                });
                refs.set("lastFocusedEl", null);
                refs.set("isFocusWithin", false);
            },
            ignoreMouseEventsTemporarily ({ refs }) {
                refs.get("ignoreMouseTimer").request();
            },
            clearMouseEventTimer ({ refs }) {
                refs.get("ignoreMouseTimer").cancel();
            }
        }
    }
});
function connect(service, normalize) {
    const { state, send, prop, scope, context, computed } = service;
    const visible = state.hasTag("visible");
    const paused = state.hasTag("paused");
    const mounted = context.get("mounted");
    const frontmost = computed("frontmost");
    const placement = prop("parent").computed("placement");
    const type = prop("type");
    const stacked = prop("stacked");
    const title = prop("title");
    const description = prop("description");
    const action = prop("action");
    const [side, align = "center"] = placement.split("-");
    return {
        type,
        title,
        description,
        placement,
        visible,
        paused,
        closable: !!prop("closable"),
        pause () {
            send({
                type: "PAUSE"
            });
        },
        resume () {
            send({
                type: "RESUME"
            });
        },
        dismiss () {
            send({
                type: "DISMISS",
                src: "programmatic"
            });
        },
        getRootProps () {
            return normalize.element({
                ...parts.root.attrs,
                dir: prop("dir"),
                id: getRootId(scope),
                "data-state": visible ? "open" : "closed",
                "data-type": type,
                "data-placement": placement,
                "data-align": align,
                "data-side": side,
                "data-mounted": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(mounted),
                "data-paused": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(paused),
                "data-first": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(frontmost),
                "data-sibling": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(!frontmost),
                "data-stack": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(stacked),
                "data-overlap": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(!stacked),
                role: "status",
                "aria-atomic": "true",
                "aria-describedby": description ? getDescriptionId(scope) : void 0,
                "aria-labelledby": title ? getTitleId(scope) : void 0,
                tabIndex: 0,
                style: getPlacementStyle(service, visible),
                onKeyDown (event) {
                    if (event.defaultPrevented) return;
                    if (event.key == "Escape") {
                        send({
                            type: "DISMISS",
                            src: "keyboard"
                        });
                        event.preventDefault();
                    }
                }
            });
        },
        /* Leave a ghost div to avoid setting hover to false when transitioning out */ getGhostBeforeProps () {
            return normalize.element({
                "data-ghost": "before",
                style: getGhostBeforeStyle(service, visible)
            });
        },
        /* Needed to avoid setting hover to false when in between toasts */ getGhostAfterProps () {
            return normalize.element({
                "data-ghost": "after",
                style: getGhostAfterStyle()
            });
        },
        getTitleProps () {
            return normalize.element({
                ...parts.title.attrs,
                id: getTitleId(scope)
            });
        },
        getDescriptionProps () {
            return normalize.element({
                ...parts.description.attrs,
                id: getDescriptionId(scope)
            });
        },
        getActionTriggerProps () {
            return normalize.button({
                ...parts.actionTrigger.attrs,
                type: "button",
                onClick (event) {
                    if (event.defaultPrevented) return;
                    action?.onClick?.();
                    send({
                        type: "DISMISS",
                        src: "user"
                    });
                }
            });
        },
        getCloseTriggerProps () {
            return normalize.button({
                id: getCloseTriggerId(scope),
                ...parts.closeTrigger.attrs,
                type: "button",
                "aria-label": "Dismiss notification",
                onClick (event) {
                    if (event.defaultPrevented) return;
                    send({
                        type: "DISMISS",
                        src: "user"
                    });
                }
            });
        }
    };
}
var { not } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGuards"])();
var machine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMachine"])({
    props ({ props }) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureProps"])(props, [
            "id",
            "type",
            "parent",
            "removeDelay"
        ], "toast");
        return {
            closable: true,
            ...props,
            duration: getToastDuration(props.duration, props.type)
        };
    },
    initialState ({ prop }) {
        const persist = prop("type") === "loading" || prop("duration") === Infinity;
        return persist ? "visible:persist" : "visible";
    },
    context ({ prop, bindable }) {
        return {
            remainingTime: bindable(()=>({
                    defaultValue: getToastDuration(prop("duration"), prop("type"))
                })),
            createdAt: bindable(()=>({
                    defaultValue: Date.now()
                })),
            mounted: bindable(()=>({
                    defaultValue: false
                })),
            initialHeight: bindable(()=>({
                    defaultValue: 0
                }))
        };
    },
    refs () {
        return {
            closeTimerStartTime: Date.now(),
            lastCloseStartTimerStartTime: 0
        };
    },
    computed: {
        zIndex: ({ prop })=>{
            const toasts = prop("parent").context.get("toasts");
            const index = toasts.findIndex((toast)=>toast.id === prop("id"));
            return toasts.length - index;
        },
        height: ({ prop })=>{
            const heights = prop("parent").context.get("heights");
            const height = heights.find((height2)=>height2.id === prop("id"));
            return height?.height ?? 0;
        },
        heightIndex: ({ prop })=>{
            const heights = prop("parent").context.get("heights");
            return heights.findIndex((height)=>height.id === prop("id"));
        },
        frontmost: ({ prop })=>prop("index") === 0,
        heightBefore: ({ prop })=>{
            const heights = prop("parent").context.get("heights");
            const heightIndex = heights.findIndex((height)=>height.id === prop("id"));
            return heights.reduce((prev, curr, reducerIndex)=>{
                if (reducerIndex >= heightIndex) return prev;
                return prev + curr.height;
            }, 0);
        },
        shouldPersist: ({ prop })=>prop("type") === "loading" || prop("duration") === Infinity
    },
    watch ({ track, prop, send }) {
        track([
            ()=>prop("message")
        ], ()=>{
            const message = prop("message");
            if (message) send({
                type: message,
                src: "programmatic"
            });
        });
        track([
            ()=>prop("type"),
            ()=>prop("duration")
        ], ()=>{
            send({
                type: "UPDATE"
            });
        });
    },
    on: {
        UPDATE: [
            {
                guard: "shouldPersist",
                target: "visible:persist",
                actions: [
                    "resetCloseTimer"
                ]
            },
            {
                target: "visible:updating",
                actions: [
                    "resetCloseTimer"
                ]
            }
        ],
        MEASURE: {
            actions: [
                "measureHeight"
            ]
        }
    },
    entry: [
        "setMounted",
        "measureHeight",
        "invokeOnVisible"
    ],
    effects: [
        "trackHeight"
    ],
    states: {
        "visible:updating": {
            tags: [
                "visible",
                "updating"
            ],
            effects: [
                "waitForNextTick"
            ],
            on: {
                SHOW: {
                    target: "visible"
                }
            }
        },
        "visible:persist": {
            tags: [
                "visible",
                "paused"
            ],
            on: {
                RESUME: {
                    guard: not("isLoadingType"),
                    target: "visible",
                    actions: [
                        "setCloseTimer"
                    ]
                },
                DISMISS: {
                    target: "dismissing"
                }
            }
        },
        visible: {
            tags: [
                "visible"
            ],
            effects: [
                "waitForDuration"
            ],
            on: {
                DISMISS: {
                    target: "dismissing"
                },
                PAUSE: {
                    target: "visible:persist",
                    actions: [
                        "syncRemainingTime"
                    ]
                }
            }
        },
        dismissing: {
            entry: [
                "invokeOnDismiss"
            ],
            effects: [
                "waitForRemoveDelay"
            ],
            on: {
                REMOVE: {
                    target: "unmounted",
                    actions: [
                        "notifyParentToRemove"
                    ]
                }
            }
        },
        unmounted: {
            entry: [
                "invokeOnUnmount"
            ]
        }
    },
    implementations: {
        effects: {
            waitForRemoveDelay ({ prop, send }) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRafTimeout"])(()=>{
                    send({
                        type: "REMOVE",
                        src: "timer"
                    });
                }, prop("removeDelay"));
            },
            waitForDuration ({ send, context, computed }) {
                if (computed("shouldPersist")) return;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRafTimeout"])(()=>{
                    send({
                        type: "DISMISS",
                        src: "timer"
                    });
                }, context.get("remainingTime"));
            },
            waitForNextTick ({ send }) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setRafTimeout"])(()=>{
                    send({
                        type: "SHOW",
                        src: "timer"
                    });
                }, 0);
            },
            trackHeight ({ scope, prop }) {
                let cleanup;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    const rootEl = getRootEl(scope);
                    if (!rootEl) return;
                    const syncHeight = ()=>{
                        const originalHeight = rootEl.style.height;
                        rootEl.style.height = "auto";
                        const height = rootEl.getBoundingClientRect().height;
                        rootEl.style.height = originalHeight;
                        const item = {
                            id: prop("id"),
                            height
                        };
                        setHeight(prop("parent"), item);
                    };
                    const win = scope.getWin();
                    const observer = new win.MutationObserver(syncHeight);
                    observer.observe(rootEl, {
                        childList: true,
                        subtree: true,
                        characterData: true
                    });
                    cleanup = ()=>observer.disconnect();
                });
                return ()=>cleanup?.();
            }
        },
        guards: {
            isLoadingType: ({ prop })=>prop("type") === "loading",
            shouldPersist: ({ computed })=>computed("shouldPersist")
        },
        actions: {
            setMounted ({ context }) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    context.set("mounted", true);
                });
            },
            measureHeight ({ scope, prop, context }) {
                queueMicrotask(()=>{
                    const rootEl = getRootEl(scope);
                    if (!rootEl) return;
                    const originalHeight = rootEl.style.height;
                    rootEl.style.height = "auto";
                    const height = rootEl.getBoundingClientRect().height;
                    rootEl.style.height = originalHeight;
                    context.set("initialHeight", height);
                    const item = {
                        id: prop("id"),
                        height
                    };
                    setHeight(prop("parent"), item);
                });
            },
            setCloseTimer ({ refs }) {
                refs.set("closeTimerStartTime", Date.now());
            },
            resetCloseTimer ({ context, refs, prop }) {
                refs.set("closeTimerStartTime", Date.now());
                context.set("remainingTime", getToastDuration(prop("duration"), prop("type")));
            },
            syncRemainingTime ({ context, refs }) {
                context.set("remainingTime", (prev)=>{
                    const closeTimerStartTime = refs.get("closeTimerStartTime");
                    const elapsedTime = Date.now() - closeTimerStartTime;
                    refs.set("lastCloseStartTimerStartTime", Date.now());
                    return prev - elapsedTime;
                });
            },
            notifyParentToRemove ({ prop }) {
                const parent = prop("parent");
                parent.send({
                    type: "TOAST.REMOVE",
                    id: prop("id")
                });
            },
            invokeOnDismiss ({ prop, event }) {
                prop("onStatusChange")?.({
                    status: "dismissing",
                    src: event.src
                });
            },
            invokeOnUnmount ({ prop }) {
                prop("onStatusChange")?.({
                    status: "unmounted"
                });
            },
            invokeOnVisible ({ prop }) {
                prop("onStatusChange")?.({
                    status: "visible"
                });
            }
        }
    }
});
function setHeight(parent, item) {
    const { id, height } = item;
    parent.context.set("heights", (prev)=>{
        const alreadyExists = prev.find((i)=>i.id === id);
        if (!alreadyExists) {
            return [
                {
                    id,
                    height
                },
                ...prev
            ];
        } else {
            return prev.map((i)=>i.id === id ? {
                    ...i,
                    height
                } : i);
        }
    });
}
var withDefaults = (options, defaults)=>{
    return {
        ...defaults,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])(options)
    };
};
function createToastStore(props = {}) {
    const attrs = withDefaults(props, {
        placement: "bottom",
        overlap: false,
        max: 24,
        gap: 16,
        offsets: "1rem",
        hotkey: [
            "altKey",
            "KeyT"
        ],
        removeDelay: 200,
        pauseOnPageIdle: true
    });
    let subscribers = [];
    let toasts = [];
    let dismissedToasts = /* @__PURE__ */ new Set();
    let toastQueue = [];
    const subscribe = (subscriber)=>{
        subscribers.push(subscriber);
        return ()=>{
            const index = subscribers.indexOf(subscriber);
            subscribers.splice(index, 1);
        };
    };
    const publish = (data)=>{
        subscribers.forEach((subscriber)=>subscriber(data));
        return data;
    };
    const addToast = (data)=>{
        if (toasts.length >= attrs.max) {
            toastQueue.push(data);
            return;
        }
        publish(data);
        toasts.unshift(data);
    };
    const processQueue = ()=>{
        while(toastQueue.length > 0 && toasts.length < attrs.max){
            const nextToast = toastQueue.shift();
            if (nextToast) {
                publish(nextToast);
                toasts.unshift(nextToast);
            }
        }
    };
    const create = (data)=>{
        const id = data.id ?? `toast:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uuid"])()}`;
        const exists = toasts.find((toast)=>toast.id === id);
        if (dismissedToasts.has(id)) dismissedToasts.delete(id);
        if (exists) {
            toasts = toasts.map((toast)=>{
                if (toast.id === id) {
                    return publish({
                        ...toast,
                        ...data,
                        id
                    });
                }
                return toast;
            });
        } else {
            addToast({
                id,
                duration: attrs.duration,
                removeDelay: attrs.removeDelay,
                type: "info",
                ...data,
                stacked: !attrs.overlap,
                gap: attrs.gap
            });
        }
        return id;
    };
    const remove = (id)=>{
        dismissedToasts.add(id);
        if (!id) {
            toasts.forEach((toast)=>{
                subscribers.forEach((subscriber)=>subscriber({
                        id: toast.id,
                        dismiss: true
                    }));
            });
            toasts = [];
            toastQueue = [];
        } else {
            subscribers.forEach((subscriber)=>subscriber({
                    id,
                    dismiss: true
                }));
            toasts = toasts.filter((toast)=>toast.id !== id);
            processQueue();
        }
        return id;
    };
    const error = (data)=>{
        return create({
            ...data,
            type: "error"
        });
    };
    const success = (data)=>{
        return create({
            ...data,
            type: "success"
        });
    };
    const info = (data)=>{
        return create({
            ...data,
            type: "info"
        });
    };
    const warning = (data)=>{
        return create({
            ...data,
            type: "warning"
        });
    };
    const loading = (data)=>{
        return create({
            ...data,
            type: "loading"
        });
    };
    const getVisibleToasts = ()=>{
        return toasts.filter((toast)=>!dismissedToasts.has(toast.id));
    };
    const getCount = ()=>{
        return toasts.length;
    };
    const promise = (promise2, options, shared = {})=>{
        if (!options || !options.loading) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])("[zag-js > toast] toaster.promise() requires at least a 'loading' option to be specified");
            return;
        }
        const id = create({
            ...shared,
            ...options.loading,
            promise: promise2,
            type: "loading"
        });
        let removable = true;
        let result;
        const prom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runIfFn"])(promise2).then(async (response)=>{
            result = [
                "resolve",
                response
            ];
            if (isHttpResponse(response) && !response.ok) {
                removable = false;
                const errorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runIfFn"])(options.error, `HTTP Error! status: ${response.status}`);
                create({
                    ...shared,
                    ...errorOptions,
                    id,
                    type: "error"
                });
            } else if (options.success !== void 0) {
                removable = false;
                const successOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runIfFn"])(options.success, response);
                create({
                    ...shared,
                    ...successOptions,
                    id,
                    type: "success"
                });
            }
        }).catch(async (error2)=>{
            result = [
                "reject",
                error2
            ];
            if (options.error !== void 0) {
                removable = false;
                const errorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runIfFn"])(options.error, error2);
                create({
                    ...shared,
                    ...errorOptions,
                    id,
                    type: "error"
                });
            }
        }).finally(()=>{
            if (removable) {
                remove(id);
            }
            options.finally?.();
        });
        const unwrap = ()=>new Promise((resolve, reject)=>prom.then(()=>result[0] === "reject" ? reject(result[1]) : resolve(result[1])).catch(reject));
        return {
            id,
            unwrap
        };
    };
    const update = (id, data)=>{
        return create({
            id,
            ...data
        });
    };
    const pause = (id)=>{
        if (id != null) {
            toasts = toasts.map((toast)=>{
                if (toast.id === id) return publish({
                    ...toast,
                    message: "PAUSE"
                });
                return toast;
            });
        } else {
            toasts = toasts.map((toast)=>publish({
                    ...toast,
                    message: "PAUSE"
                }));
        }
    };
    const resume = (id)=>{
        if (id != null) {
            toasts = toasts.map((toast)=>{
                if (toast.id === id) return publish({
                    ...toast,
                    message: "RESUME"
                });
                return toast;
            });
        } else {
            toasts = toasts.map((toast)=>publish({
                    ...toast,
                    message: "RESUME"
                }));
        }
    };
    const dismiss = (id)=>{
        if (id != null) {
            toasts = toasts.map((toast)=>{
                if (toast.id === id) return publish({
                    ...toast,
                    message: "DISMISS"
                });
                return toast;
            });
        } else {
            toasts = toasts.map((toast)=>publish({
                    ...toast,
                    message: "DISMISS"
                }));
        }
    };
    const isVisible = (id)=>{
        return !dismissedToasts.has(id) && !!toasts.find((toast)=>toast.id === id);
    };
    const isDismissed = (id)=>{
        return dismissedToasts.has(id);
    };
    const expand = ()=>{
        toasts = toasts.map((toast)=>publish({
                ...toast,
                stacked: true
            }));
    };
    const collapse = ()=>{
        toasts = toasts.map((toast)=>publish({
                ...toast,
                stacked: false
            }));
    };
    return {
        attrs,
        subscribe,
        create,
        update,
        remove,
        dismiss,
        error,
        success,
        info,
        warning,
        loading,
        getVisibleToasts,
        getCount,
        promise,
        pause,
        resume,
        isVisible,
        isDismissed,
        expand,
        collapse
    };
}
var isHttpResponse = (data)=>{
    return data && typeof data === "object" && "ok" in data && typeof data.ok === "boolean" && "status" in data && typeof data.status === "number";
};
// src/index.ts
var group = {
    connect: groupConnect,
    machine: groupMachine
};
;
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/toggle/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anatomy",
    ()=>anatomy,
    "connect",
    ()=>connect,
    "machine",
    ()=>machine,
    "props",
    ()=>props,
    "splitProps",
    ()=>splitProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/anatomy/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/dom-query/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/core/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/types/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/utils/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
// src/toggle.anatomy.ts
var anatomy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAnatomy"])("toggle", [
    "root",
    "indicator"
]);
var parts = anatomy.build();
function connect(service, normalize) {
    const { context, prop, send } = service;
    const pressed = context.get("pressed");
    return {
        pressed,
        disabled: !!prop("disabled"),
        setPressed (value) {
            send({
                type: "PRESS.SET",
                value
            });
        },
        getRootProps () {
            return normalize.element({
                type: "button",
                ...parts.root.attrs,
                disabled: prop("disabled"),
                "aria-pressed": pressed,
                "data-state": pressed ? "on" : "off",
                "data-pressed": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(pressed),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(prop("disabled")),
                onClick (event) {
                    if (event.defaultPrevented) return;
                    if (prop("disabled")) return;
                    send({
                        type: "PRESS.TOGGLE"
                    });
                }
            });
        },
        getIndicatorProps () {
            return normalize.element({
                ...parts.indicator.attrs,
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(prop("disabled")),
                "data-pressed": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(pressed),
                "data-state": pressed ? "on" : "off"
            });
        }
    };
}
var machine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMachine"])({
    props ({ props: props2 }) {
        return {
            defaultPressed: false,
            ...props2
        };
    },
    context ({ prop, bindable }) {
        return {
            pressed: bindable(()=>({
                    value: prop("pressed"),
                    defaultValue: prop("defaultPressed"),
                    onChange (value) {
                        prop("onPressedChange")?.(value);
                    }
                }))
        };
    },
    initialState () {
        return "idle";
    },
    on: {
        "PRESS.TOGGLE": {
            actions: [
                "togglePressed"
            ]
        },
        "PRESS.SET": {
            actions: [
                "setPressed"
            ]
        }
    },
    states: {
        idle: {}
    },
    implementations: {
        actions: {
            togglePressed ({ context }) {
                context.set("pressed", !context.get("pressed"));
            },
            setPressed ({ context, event }) {
                context.set("pressed", event.value);
            }
        }
    }
});
var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProps"])()([
    "defaultPressed",
    "pressed",
    "onPressedChange",
    "disabled"
]);
var splitProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSplitProps"])(props);
;
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/highlight-word/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "highlightWord",
    ()=>highlightWord
]);
// src/normalize-span.ts
var normalizeSpan = (spans, len)=>{
    const result = [];
    const append = (start, end, match)=>{
        if (end - start > 0) result.push({
            start,
            end,
            match
        });
    };
    if (spans.length === 0) {
        append(0, len, false);
    } else {
        let lastIndex = 0;
        for (const chunk of spans){
            append(lastIndex, chunk.start, false);
            append(chunk.start, chunk.end, true);
            lastIndex = chunk.end;
        }
        append(lastIndex, len, false);
    }
    return result;
};
// src/escape-regex.ts
var escapeRegex = (term)=>term.replace(/[|\\{}()[\]^$+*?.-]/g, (char)=>`\\${char}`);
// src/highlight-first.ts
function highlightFirst(props) {
    const { text, query, ignoreCase, exactMatch } = props;
    if (exactMatch) {
        const escapedQuery = escapeRegex(query);
        const regex = new RegExp(`\\b(${escapedQuery})\\b`, ignoreCase ? "i" : "");
        const match = text.match(regex);
        if (!match || match.index === void 0) {
            return [
                {
                    text,
                    match: false
                }
            ];
        }
        const start2 = match.index;
        const end2 = start2 + match[0].length;
        const spans2 = [
            {
                start: start2,
                end: end2
            }
        ];
        return normalizeSpan(spans2, text.length).map((chunk)=>({
                text: text.slice(chunk.start, chunk.end),
                match: !!chunk.match
            }));
    }
    const searchText = ignoreCase ? text.toLowerCase() : text;
    const searchQuery = ignoreCase ? typeof query === "string" ? query.toLowerCase() : query : query;
    const start = typeof searchText === "string" ? searchText.indexOf(searchQuery) : -1;
    if (start === -1) {
        return [
            {
                text,
                match: false
            }
        ];
    }
    const end = start + searchQuery.length;
    const spans = [
        {
            start,
            end
        }
    ];
    return normalizeSpan(spans, text.length).map((chunk)=>({
            text: text.slice(chunk.start, chunk.end),
            match: !!chunk.match
        }));
}
// src/highlight-multiple.ts
var buildRegex = (queryProp, flags, exactMatch)=>{
    const query = queryProp.filter(Boolean).map((text)=>escapeRegex(text));
    const pattern = exactMatch ? `\\b(${query.join("|")})\\b` : `(${query.join("|")})`;
    return new RegExp(pattern, flags);
};
var getRegexFlags = (ignoreCase, matchAll = true)=>`${ignoreCase ? "i" : ""}${matchAll ? "g" : ""}`;
function highlightMultiple(props) {
    const { text, query, ignoreCase, matchAll, exactMatch } = props;
    if (query.length === 0) {
        return [
            {
                text,
                match: false
            }
        ];
    }
    const flags = getRegexFlags(ignoreCase, matchAll);
    const regex = buildRegex(Array.isArray(query) ? query : [
        query
    ], flags, exactMatch);
    const spans = [
        ...text.matchAll(regex)
    ].map((match)=>({
            start: match.index || 0,
            end: (match.index || 0) + match[0].length
        }));
    return normalizeSpan(spans, props.text.length).map((chunk)=>({
            text: props.text.slice(chunk.start, chunk.end),
            match: !!chunk.match
        }));
}
// src/highlight.ts
var highlightWord = (props)=>{
    if (props.matchAll == null) {
        props.matchAll = Array.isArray(props.query);
    }
    if (!props.matchAll && Array.isArray(props.query)) {
        throw new Error("matchAll must be true when using multiple queries");
    }
    return props.matchAll ? highlightMultiple(props) : highlightFirst(props);
};
;
}),
"[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/color-picker/dist/index.mjs [app-ssr] (ecmascript) <export parse as parseColor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$color$2d$picker$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Trabajo$2f$ME$2f$Inacril$2f$inacril$2f$node_modules$2f40$zag$2d$js$2f$color$2d$picker$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Trabajo/ME/Inacril/inacril/node_modules/@zag-js/color-picker/dist/index.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=854d0_d833cda0._.js.map