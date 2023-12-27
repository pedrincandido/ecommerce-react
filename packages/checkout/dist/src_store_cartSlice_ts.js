"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcheckout"] = self["webpackChunkcheckout"] || []).push([["src_store_cartSlice_ts"],{

/***/ "./src/store/cartSlice.ts":
/*!********************************!*\
  !*** ./src/store/cartSlice.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItem: () => (/* binding */ addItem),\n/* harmony export */   clearCart: () => (/* binding */ clearCart),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   removeItem: () => (/* binding */ removeItem)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: [],\n};\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState,\n    reducers: {\n        addItem: (state, action) => {\n            const existingIndex = state.items.findIndex((item) => item.id === action.payload.id);\n            if (existingIndex >= 0) {\n                state.items[existingIndex].quantity += 1;\n            }\n            else {\n                state.items.push(Object.assign(Object.assign({}, action.payload), { quantity: 1 }));\n            }\n        },\n        removeItem: (state, action) => {\n            state.items = state.items.filter((item) => item.id !== action.payload.id);\n        },\n        clearCart: (state) => {\n            state.items = [];\n        },\n    },\n});\nconst { addItem, removeItem, clearCart } = cartSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);\n\n\n//# sourceURL=webpack://checkout/./src/store/cartSlice.ts?");

/***/ })

}]);