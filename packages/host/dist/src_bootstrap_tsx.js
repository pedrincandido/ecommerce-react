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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var checkout_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! checkout/store */ \"webpack/container/remote/checkout/store\");\n/* harmony import */ var checkout_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(checkout_store__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"webpack/sharing/consume/default/react-query/react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routers */ \"./src/routers/index.tsx\");\n/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/styles */ \"./src/styles/styles.ts\");\n\n\n // This is assuming you have a federated module exposing the store\n\n\n\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\nconst App = () => {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, Object.assign({ store: checkout_store__WEBPACK_IMPORTED_MODULE_2__.store }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_styles__WEBPACK_IMPORTED_MODULE_6__.GlobalStyles, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, Object.assign({ client: queryClient }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.RouterProvider, { router: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.createBrowserRouter)((0,_routers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()) }) }))] })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://host/./src/App.tsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/pages/styles/index.ts\");\n\n\n\n\n// const Home = React.lazy(() => import(\"home/Home\"));\nconst Search = react__WEBPACK_IMPORTED_MODULE_1___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_search_Search\").then(__webpack_require__.t.bind(__webpack_require__, /*! search/Search */ \"webpack/container/remote/search/Search\", 23)));\n// const Checkout = React.lazy(() => import(\"checkout/Checkout\"));\nconst HomeRoute = () => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Suspense), { fallback: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {}) });\nconst SearchRoute = () => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Suspense), Object.assign({ fallback: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {}) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Search, {}) })));\nconst CheckoutRoute = () => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Suspense), { fallback: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {}) });\nconst Home = ({ items = [], page = \"home\" }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.StyledContainer, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__.StyledNavbar, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__.StyledNav, Object.assign({ className: \"mr-auto\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, Object.assign({ to: \"/\", style: { color: \"white\" } }, { children: \"Home\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, Object.assign({ to: \"/search\", style: { color: \"white\" } }, { children: \"Search\" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, Object.assign({ to: \"/checkout\", style: {\n                    paddingLeft: 10,\n                    paddingBottom: 15,\n                } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", Object.assign({ style: { color: \"white\", fontWeight: \"bold\", paddingLeft: 5 } }, { children: items.reduce((a, { count }) => a + count, 0) })) }))] }) }));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n\n//# sourceURL=webpack://host/./src/pages/Home.tsx?");

/***/ }),

/***/ "./src/pages/styles/index.ts":
/*!***********************************!*\
  !*** ./src/pages/styles/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StyledContainer: () => (/* binding */ StyledContainer),\n/* harmony export */   StyledNav: () => (/* binding */ StyledNav),\n/* harmony export */   StyledNavbar: () => (/* binding */ StyledNavbar)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"webpack/sharing/consume/default/styled-components/styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StyledContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div) `\n  // Your custom styles here\n`;\nconst StyledNavbar = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav) `\n  background-color: #333; // Example style\n  // Other custom styles\n`;\nconst StyledNav = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div) `\n\n`;\n// export const StyledNavbarBrand = styled(Navbar.Brand)`\n//   color: white; // Example style\n//   // Other custom styles\n// `;\n// export const StyledNavbarToggle = styled(Navbar.Toggle)`\n//   // Custom styles\n// `;\n// export const StyledNavbarCollapse = styled(Navbar.Collapse)`\n//   // Custom styles\n// `;\n// export const StyledNav = styled(Nav)`\n//   // Custom styles\n// `;\n// export const StyledNavLink = styled(Nav.Link)`\n//   color: white; // Example style\n//   // Other custom styles\n// `;\n\n\n//# sourceURL=webpack://host/./src/pages/styles/index.ts?");

/***/ }),

/***/ "./src/routers/Local.tsx":
/*!*******************************!*\
  !*** ./src/routers/Local.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.tsx\");\n\n// import RootLayout from '../components/RootLayout';\n\nconst Local = () => {\n    return {\n        path: '/',\n        // element: <RootLayout />,\n        children: [\n            { path: '', element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}) },\n        ],\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Local);\n\n\n//# sourceURL=webpack://host/./src/routers/Local.tsx?");

/***/ }),

/***/ "./src/routers/index.tsx":
/*!*******************************!*\
  !*** ./src/routers/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var search_Routers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! search/Routers */ \"webpack/container/remote/search/Routers\");\n/* harmony import */ var search_Routers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(search_Routers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Local */ \"./src/routers/Local.tsx\");\n\n\n\nconst Search = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_search_Search\").then(__webpack_require__.t.bind(__webpack_require__, /*! search/Search */ \"webpack/container/remote/search/Search\", 23)));\n// const Checkout = React.lazy(() => import(\"checkout/Checkout\"));\nconst Routers = () => [\n    (0,_Local__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n    Object.assign({}, search_Routers__WEBPACK_IMPORTED_MODULE_1___default()()),\n    // { ...RemoteApp1Routers() },\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routers);\n\n\n//# sourceURL=webpack://host/./src/routers/index.tsx?");

/***/ }),

/***/ "./src/styles/styles.ts":
/*!******************************!*\
  !*** ./src/styles/styles.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalStyles: () => (/* binding */ GlobalStyles)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"webpack/sharing/consume/default/styled-components/styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle) `\n  body {\n    margin: 0;\n    padding: 0;\n  }\n`;\n\n\n//# sourceURL=webpack://host/./src/styles/styles.ts?");

/***/ })

}]);