"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["src_bootstrap_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routers */ \"./src/routers/index.tsx\");\n\n\n\nconst App = () => {\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.RouterProvider, { router: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.createBrowserRouter)((0,_routers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()) });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://host/./src/App.tsx?");

/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ \"../../node_modules/react-dom/client.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n\n\n\n\nconst root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById(\"root\"));\nroot.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}) }));\n\n\n//# sourceURL=webpack://host/./src/bootstrap.tsx?");

/***/ }),

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import RemoteButtonProps from '@mf-types/app2/Button';\n// const RemoteButton = React.lazy(() => import('app2/Button')) as typeof RemoteButtonProps;\nconst Home = () => {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", { children: \" App-Host --- Home page\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, Object.assign({ to: `page-2` }, { children: \"App-Host - page-2\" }))] }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n\n//# sourceURL=webpack://host/./src/pages/Home.tsx?");

/***/ }),

/***/ "./src/routers/Local.tsx":
/*!*******************************!*\
  !*** ./src/routers/Local.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.tsx\");\n\n// import RootLayout from '../components/RootLayout';\n\nconst Local = () => {\n    return {\n        path: '/',\n        element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RootLayout, {}),\n        children: [\n            { path: '', element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}) },\n        ],\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Local);\n\n\n//# sourceURL=webpack://host/./src/routers/Local.tsx?");

/***/ }),

/***/ "./src/routers/index.tsx":
/*!*******************************!*\
  !*** ./src/routers/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var checkout_Routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! checkout/Routers */ \"webpack/container/remote/checkout/Routers\");\n/* harmony import */ var checkout_Routers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(checkout_Routers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var search_Routers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! search/Routers */ \"webpack/container/remote/search/Routers\");\n/* harmony import */ var search_Routers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(search_Routers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Local */ \"./src/routers/Local.tsx\");\n\n\n\nconst Routers = () => [\n    (0,_Local__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    Object.assign({}, search_Routers__WEBPACK_IMPORTED_MODULE_1___default()()),\n    Object.assign({}, checkout_Routers__WEBPACK_IMPORTED_MODULE_0___default()()),\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routers);\n\n\n//# sourceURL=webpack://host/./src/routers/index.tsx?");

/***/ })

}]);