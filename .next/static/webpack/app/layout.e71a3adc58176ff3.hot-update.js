/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var _client_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-layout */ \"(app-pages-browser)/./app/client-layout.tsx\");\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/navbar/navbar */ \"(app-pages-browser)/./components/navbar/navbar.tsx\");\n/* harmony import */ var _components_ui_sonner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/sonner */ \"(app-pages-browser)/./components/ui/sonner.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const menuLinks = [\n        {\n            label: \"Home\",\n            key: \"home\",\n            path: \"/\"\n        },\n        {\n            label: \"My Blogs\",\n            key: \"myBlogs\",\n            path: \"/blogs/myBlogs\"\n        },\n        {\n            label: \"My Likes\",\n            key: \"myLikes\",\n            path: \"/blogs/myLikes\"\n        },\n        {\n            label: \"My Favorites\",\n            key: \"myFavorites\",\n            path: \"/blogs/myFavorites\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        suppressHydrationWarning: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_client_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\layout.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[90%] md:w-[70%] mx-auto mt-10 flex items-center gap-6 flex-wrap\",\n                            children: menuLinks.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    variant: \"link\",\n                                    className: \"hover:underline cursor-pointer\",\n                                    size: \"sm\",\n                                    onClick: ()=>router.push(menu.path),\n                                    children: menu.label\n                                }, menu.key + index, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\layout.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 65\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\layout.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this),\n                        children\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\layout.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 14\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sonner__WEBPACK_IMPORTED_MODULE_4__.Toaster, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\layout.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 8\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\layout.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\layout.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDdUI7QUFDb0I7QUFDSztBQUNDO0FBQ0Q7QUFDSjtBQVE3QixTQUFTSyxXQUFXLEtBSWpDO1FBSmlDLEVBQ2pDQyxRQUFRLEVBR1IsR0FKaUM7O0lBS2pDLE1BQU1DLFNBQVNILDBEQUFTQTtJQUV4QixNQUFNSSxZQUEwQjtRQUM5QjtZQUNFQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUYsT0FBTztZQUNQQyxLQUFLO1lBQ0xDLE1BQU07UUFDUjtRQUNBO1lBQ0VGLE9BQU87WUFDUEMsS0FBSztZQUNKQyxNQUFNO1FBQ1Q7UUFDQTtZQUNFRixPQUFPO1lBQ1BDLEtBQUs7WUFDSkMsTUFBTTtRQUNUO0tBQ0Q7SUFDRCxxQkFDRSw4REFBQ0M7UUFBS0MsTUFBSztRQUFLQyx3QkFBd0I7a0JBQ3RDLDRFQUFDQzs7OEJBQU0sOERBQUNmLHNEQUFZQTs7c0NBQ2xCLDhEQUFDQyxpRUFBTUE7Ozs7O3NDQUNQLDhEQUFDZTs0QkFBSUMsV0FBVTtzQ0FFWFQsVUFBVVUsR0FBRyxDQUFDLENBQUNDLE1BQWtCQyxzQkFBbUIsOERBQUNqQix5REFBTUE7b0NBQXNCa0IsU0FBUTtvQ0FBT0osV0FBVTtvQ0FBaUNLLE1BQUs7b0NBQUtDLFNBQVMsSUFBTWhCLE9BQU9pQixJQUFJLENBQUNMLEtBQUtSLElBQUk7OENBQUlRLEtBQUtWLEtBQUs7bUNBQXRJVSxLQUFLVCxHQUFHLEdBQUNVOzs7Ozs7Ozs7O3dCQUc5RWQ7Ozs7Ozs7OEJBQ0QsOERBQUNKLDBEQUFPQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlmO0dBM0N3Qkc7O1FBS1BELHNEQUFTQTs7O0tBTEZDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxEZXNrdG9wXFxyZXBvc1xcYmxvZ3NpdGVcXGFwcFxcbGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgXCIuL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBDbGllbnRMYXlvdXQgZnJvbSBcIi4vY2xpZW50LWxheW91dFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zb25uZXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIElNZW51TGlua3Mge1xyXG4gIGxhYmVsOiBzdHJpbmdcclxuICBrZXk6IHN0cmluZyxcclxuICBwYXRoOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IFJlYWRvbmx5PHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59Pikge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IG1lbnVMaW5rczogSU1lbnVMaW5rc1tdID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJIb21lXCIsXHJcbiAgICAgIGtleTogXCJob21lXCIsXHJcbiAgICAgIHBhdGg6IFwiL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJNeSBCbG9nc1wiLFxyXG4gICAgICBrZXk6IFwibXlCbG9nc1wiLFxyXG4gICAgICBwYXRoOiBcIi9ibG9ncy9teUJsb2dzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIk15IExpa2VzXCIsXHJcbiAgICAgIGtleTogXCJteUxpa2VzXCIsXHJcbiAgICAgICBwYXRoOiBcIi9ibG9ncy9teUxpa2VzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIk15IEZhdm9yaXRlc1wiLFxyXG4gICAgICBrZXk6IFwibXlGYXZvcml0ZXNcIixcclxuICAgICAgIHBhdGg6IFwiL2Jsb2dzL215RmF2b3JpdGVzXCJcclxuICAgIH1cclxuICBdXHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9XCJlblwiIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZz5cclxuICAgICAgPGJvZHkgPjxDbGllbnRMYXlvdXQ+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTAlXSBtZDp3LVs3MCVdIG14LWF1dG8gbXQtMTAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVMaW5rcy5tYXAoKG1lbnU6IElNZW51TGlua3MsIGluZGV4OiBudW1iZXIpID0+ICA8QnV0dG9uIGtleT17bWVudS5rZXkraW5kZXh9IHZhcmlhbnQ9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lIGN1cnNvci1wb2ludGVyXCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2gobWVudS5wYXRoKX0+e21lbnUubGFiZWx9PC9CdXR0b24+KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAge2NoaWxkcmVufTwvQ2xpZW50TGF5b3V0PlxyXG4gICAgICAgPFRvYXN0ZXIgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNsaWVudExheW91dCIsIk5hdmJhciIsIlRvYXN0ZXIiLCJCdXR0b24iLCJ1c2VSb3V0ZXIiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJtZW51TGlua3MiLCJsYWJlbCIsImtleSIsInBhdGgiLCJodG1sIiwibGFuZyIsInN1cHByZXNzSHlkcmF0aW9uV2FybmluZyIsImJvZHkiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJtZW51IiwiaW5kZXgiLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siLCJwdXNoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CASUS%20TUF%5C%5CDesktop%5C%5Crepos%5C%5Cblogsite%5C%5Capp%5C%5Clayout.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CASUS%20TUF%5C%5CDesktop%5C%5Crepos%5C%5Cblogsite%5C%5Capp%5C%5Clayout.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=false! ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval(__webpack_require__.ts("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/layout.tsx */ \"(app-pages-browser)/./app/layout.tsx\"));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWNsaWVudC1lbnRyeS1sb2FkZXIuanM/bW9kdWxlcz0lN0IlMjJyZXF1ZXN0JTIyJTNBJTIyQyUzQSU1QyU1Q1VzZXJzJTVDJTVDQVNVUyUyMFRVRiU1QyU1Q0Rlc2t0b3AlNUMlNUNyZXBvcyU1QyU1Q2Jsb2dzaXRlJTVDJTVDYXBwJTVDJTVDbGF5b3V0LnRzeCUyMiUyQyUyMmlkcyUyMiUzQSU1QiU1RCU3RCZzZXJ2ZXI9ZmFsc2UhIiwibWFwcGluZ3MiOiJBQUFBLDBKQUFtRyIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcRGVza3RvcFxcXFxyZXBvc1xcXFxibG9nc2l0ZVxcXFxhcHBcXFxcbGF5b3V0LnRzeFwiKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CASUS%20TUF%5C%5CDesktop%5C%5Crepos%5C%5Cblogsite%5C%5Capp%5C%5Clayout.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!\n"));

/***/ })

});