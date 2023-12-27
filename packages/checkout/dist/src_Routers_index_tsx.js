"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcheckout"] = self["webpackChunkcheckout"] || []).push([["src_routers_index_tsx"],{

/***/ "./src/components/ShoppingCart.tsx":
/*!*****************************************!*\
  !*** ./src/components/ShoppingCart.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_cartSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/cartSlice */ \"./src/store/cartSlice.ts\");\n\n\n\nconst ShoppingCart = () => {\n    const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => state.cart.items);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const handleAddItem = (item) => {\n        dispatch((0,_store_cartSlice__WEBPACK_IMPORTED_MODULE_2__.addItem)(item));\n    };\n    const handleRemoveItem = (itemId) => {\n        dispatch((0,_store_cartSlice__WEBPACK_IMPORTED_MODULE_2__.removeItem)({ id: itemId }));\n    };\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { children: [cart.map((item) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", { children: item.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", { children: [\"Quantity: \", item.quantity] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", Object.assign({ onClick: () => handleRemoveItem(item.id) }, { children: \"Remove\" }))] }, item.id))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", Object.assign({ onClick: () => handleAddItem({ id: \"new\", title: \"New Item\", price: 100, quantity: 1 }) }, { children: \"Add New Item\" }))] }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingCart);\n\n\n//# sourceURL=webpack://checkout/./src/components/ShoppingCart.tsx?");

/***/ }),

/***/ "./src/routers/index.tsx":
/*!*******************************!*\
  !*** ./src/routers/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _components_ShoppingCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ShoppingCart */ \"./src/components/ShoppingCart.tsx\");\n\n\nconst Routers = () => {\n    return {\n        path: \"checkout\",\n        children: [{ path: \"\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ShoppingCart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}) }],\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routers);\n\n\n//# sourceURL=webpack://checkout/./src/routers/index.tsx?");

/***/ }),

/***/ "./src/store/cartSlice.ts":
/*!********************************!*\
  !*** ./src/store/cartSlice.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItem: () => (/* binding */ addItem),\n/* harmony export */   clearCart: () => (/* binding */ clearCart),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   removeItem: () => (/* binding */ removeItem)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: [],\n};\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState,\n    reducers: {\n        addItem: (state, action) => {\n            const existingIndex = state.items.findIndex((item) => item.id === action.payload.id);\n            if (existingIndex >= 0) {\n                state.items[existingIndex].quantity += 1;\n            }\n            else {\n                state.items.push(Object.assign(Object.assign({}, action.payload), { quantity: 1 }));\n            }\n        },\n        removeItem: (state, action) => {\n            state.items = state.items.filter((item) => item.id !== action.payload.id);\n        },\n        clearCart: (state) => {\n            state.items = [];\n        },\n    },\n});\nconst { addItem, removeItem, clearCart } = cartSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);\n\n\n//# sourceURL=webpack://checkout/./src/store/cartSlice.ts?");

/***/ })

}]);