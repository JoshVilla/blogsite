"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/blogs.tsx":
/*!***********************!*\
  !*** ./app/blogs.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/service/api */ \"(app-pages-browser)/./service/api.ts\");\n/* harmony import */ var _components_categories_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/categories/categories */ \"(app-pages-browser)/./components/categories/categories.tsx\");\n/* harmony import */ var _components_blogCard_blogCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/blogCard/blogCard */ \"(app-pages-browser)/./components/blogCard/blogCard.tsx\");\n/* harmony import */ var _components_pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/pagination/Pagination */ \"(app-pages-browser)/./components/pagination/Pagination.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Blogs = ()=>{\n    var _data_data;\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const [pageState, setPageState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        currentPage: 1,\n        totalPage: 0\n    });\n    const { isLoading, data, error } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)({\n        queryKey: [\n            \"blog\",\n            selectedCategory,\n            pageState\n        ],\n        queryFn: {\n            \"Blogs.useQuery\": ()=>(0,_service_api__WEBPACK_IMPORTED_MODULE_2__.getBlogs)({\n                    category: selectedCategory,\n                    page: pageState.currentPage\n                })\n        }[\"Blogs.useQuery\"],\n        enabled: !!selectedCategory\n    });\n    const cardVariants = {\n        hidden: {\n            opacity: 0,\n            y: 20\n        },\n        visible: (index)=>({\n                opacity: 1,\n                y: 0,\n                transition: {\n                    duration: 0.3,\n                    delay: index * 0.2\n                }\n            })\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Blogs.useEffect\": ()=>{\n            if (data) {\n                setPageState({\n                    \"Blogs.useEffect\": (prev)=>({\n                            ...prev,\n                            currentPage: data.currentPage,\n                            totalPage: data.totalPages\n                        })\n                }[\"Blogs.useEffect\"]);\n            }\n        }\n    }[\"Blogs.useEffect\"], [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_categories_categories__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onChange: setSelectedCategory\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\blogs.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-2xl md:text-4xl\",\n                        children: \"\".concat(selectedCategory, \" Blogs\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\blogs.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-5 text-center\",\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\blogs.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 23\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-5 text-red-500 text-center\",\n                        children: \"Error fetching blogs.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\blogs.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 flex flex-wrap gap-10 md:gap-14 justify-center md:justify-evenly\",\n                        children: (data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.length) > 0 ? data.data.map((blog, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                variants: cardVariants,\n                                initial: \"hidden\",\n                                animate: \"visible\",\n                                exit: \"hidden\",\n                                custom: index,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_blogCard_blogCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    data: blog\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\blogs.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, blog.title + index, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\blogs.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-500\",\n                            children: \"No blogs found.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\blogs.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\blogs.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        pageState: pageState,\n                        onChangePage: (page)=>{\n                            setPageState((prev)=>({\n                                    ...prev,\n                                    currentPage: page\n                                }));\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\blogs.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\blogs.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\blogs.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Blogs, \"thdjNSWoM1+KR9d2+4izWUXWLKo=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery\n    ];\n});\n_c = Blogs;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs);\nvar _c;\n$RefreshReg$(_c, \"Blogs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ1o7QUFDVTtBQUNSO0FBRW1CO0FBRU47QUFDZTtBQUVyRSxNQUFNUyxRQUFRO1FBOENIQzs7SUE3Q1QsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHViwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7UUFDekNhLGFBQWE7UUFDYkMsV0FBVztJQUNiO0lBQ0EsTUFBTSxFQUFFQyxTQUFTLEVBQUVQLElBQUksRUFBRVEsS0FBSyxFQUFFLEdBQUdkLCtEQUFRQSxDQUFDO1FBQzFDZSxVQUFVO1lBQUM7WUFBUVI7WUFBa0JFO1NBQVU7UUFDL0NPLE9BQU87OEJBQUUsSUFDUGYsc0RBQVFBLENBQUM7b0JBQUVnQixVQUFVVjtvQkFBa0JXLE1BQU1ULFVBQVVFLFdBQVc7Z0JBQUM7O1FBQ3JFUSxTQUFTLENBQUMsQ0FBQ1o7SUFDYjtJQUVBLE1BQU1hLGVBQWU7UUFDbkJDLFFBQVE7WUFBRUMsU0FBUztZQUFHQyxHQUFHO1FBQUc7UUFDNUJDLFNBQVMsQ0FBQ0MsUUFBbUI7Z0JBQzNCSCxTQUFTO2dCQUNUQyxHQUFHO2dCQUNIRyxZQUFZO29CQUFFQyxVQUFVO29CQUFLQyxPQUFPSCxRQUFRO2dCQUFJO1lBQ2xEO0lBQ0Y7SUFFQTVCLGdEQUFTQTsyQkFBQztZQUNSLElBQUlTLE1BQU07Z0JBQ1JJO3VDQUFhLENBQUNtQixPQUFVOzRCQUN0QixHQUFHQSxJQUFJOzRCQUNQbEIsYUFBYUwsS0FBS0ssV0FBVzs0QkFDN0JDLFdBQVdOLEtBQUt3QixVQUFVO3dCQUM1Qjs7WUFDRjtRQUNGOzBCQUFHO1FBQUN4QjtLQUFLO0lBRVQscUJBQ0UsOERBQUN5QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQzlCLHlFQUFVQTtnQkFBQytCLFVBQVV6Qjs7Ozs7OzBCQUd0Qiw4REFBQ3VCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQXdCLEdBQW9CLE9BQWpCekIsa0JBQWlCOzs7Ozs7b0JBRTFETSwyQkFBYSw4REFBQ3FCO3dCQUFFRixXQUFVO2tDQUFtQjs7Ozs7O29CQUM3Q2xCLHVCQUNDLDhEQUFDb0I7d0JBQUVGLFdBQVU7a0NBQWdDOzs7Ozs7a0NBRy9DLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWjFCLENBQUFBLGlCQUFBQSw0QkFBQUEsYUFBQUEsS0FBTUEsSUFBSSxjQUFWQSxpQ0FBQUEsV0FBWTZCLE1BQU0sSUFBRyxJQUNwQjdCLEtBQUtBLElBQUksQ0FBQzhCLEdBQUcsQ0FBQyxDQUFDQyxNQUFhWixzQkFDMUIsOERBQUMxQixpREFBTUEsQ0FBQ2dDLEdBQUc7Z0NBRVRPLFVBQVVsQjtnQ0FDVm1CLFNBQVE7Z0NBQ1JDLFNBQVE7Z0NBQ1JDLE1BQUs7Z0NBQ0xDLFFBQVFqQjswQ0FHUiw0RUFBQ3RCLHFFQUFRQTtvQ0FBQ0csTUFBTStCOzs7Ozs7K0JBUlhBLEtBQUtNLEtBQUssR0FBR2xCOzs7OzJEQVl0Qiw4REFBQ1M7NEJBQUVGLFdBQVU7c0NBQWdCOzs7Ozs7Ozs7OztrQ0FJakMsOERBQUM1Qix5RUFBbUJBO3dCQUNsQkssV0FBV0E7d0JBQ1htQyxjQUFjLENBQUMxQjs0QkFDYlIsYUFBYSxDQUFDbUIsT0FBVTtvQ0FDdEIsR0FBR0EsSUFBSTtvQ0FDUGxCLGFBQWFPO2dDQUNmO3dCQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtHQTdFTWI7O1FBTStCTCwyREFBUUE7OztLQU52Q0s7QUErRU4saUVBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXERlc2t0b3BcXHJlcG9zXFxibG9nc2l0ZVxcYXBwXFxibG9ncy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBnZXRCbG9ncyB9IGZyb20gXCJAL3NlcnZpY2UvYXBpXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIkAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHsgSUJsb2cgfSBmcm9tIFwiQC91dGlscy90eXBlc1wiO1xyXG5pbXBvcnQgQmxvZ0NhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9ibG9nQ2FyZC9ibG9nQ2FyZFwiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbkNvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2luYXRpb24vUGFnaW5hdGlvblwiO1xyXG5cclxuY29uc3QgQmxvZ3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJBbGxcIik7XHJcbiAgY29uc3QgW3BhZ2VTdGF0ZSwgc2V0UGFnZVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgdG90YWxQYWdlOiAwLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhLCBlcnJvciB9ID0gdXNlUXVlcnkoe1xyXG4gICAgcXVlcnlLZXk6IFtcImJsb2dcIiwgc2VsZWN0ZWRDYXRlZ29yeSwgcGFnZVN0YXRlXSwgLy8gSW5jbHVkZSBjYXRlZ29yeSBpbiBxdWVyeUtleSB0byByZWZldGNoIG9uIGNoYW5nZVxyXG4gICAgcXVlcnlGbjogKCkgPT5cclxuICAgICAgZ2V0QmxvZ3MoeyBjYXRlZ29yeTogc2VsZWN0ZWRDYXRlZ29yeSwgcGFnZTogcGFnZVN0YXRlLmN1cnJlbnRQYWdlIH0pLCAvLyBQYXNzIGNhdGVnb3J5IGFzIGEgcGFyYW1ldGVyXHJcbiAgICBlbmFibGVkOiAhIXNlbGVjdGVkQ2F0ZWdvcnksIC8vIE9ubHkgcnVuIHF1ZXJ5IGlmIGNhdGVnb3J5IGV4aXN0c1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjYXJkVmFyaWFudHMgPSB7XHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogMjAgfSxcclxuICAgIHZpc2libGU6IChpbmRleDogbnVtYmVyKSA9PiAoe1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB5OiAwLFxyXG4gICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjMsIGRlbGF5OiBpbmRleCAqIDAuMiB9LFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHNldFBhZ2VTdGF0ZSgocHJldikgPT4gKHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIGN1cnJlbnRQYWdlOiBkYXRhLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgIHRvdGFsUGFnZTogZGF0YS50b3RhbFBhZ2VzLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgIDxDYXRlZ29yaWVzIG9uQ2hhbmdlPXtzZXRTZWxlY3RlZENhdGVnb3J5fSAvPlxyXG5cclxuICAgICAgey8qIEJsb2cgTGlzdCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC00eGxcIj57YCR7c2VsZWN0ZWRDYXRlZ29yeX0gQmxvZ3NgfTwvZGl2PlxyXG5cclxuICAgICAgICB7aXNMb2FkaW5nICYmIDxwIGNsYXNzTmFtZT1cIm10LTUgdGV4dC1jZW50ZXJcIj5Mb2FkaW5nLi4uPC9wPn1cclxuICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LXJlZC01MDAgdGV4dC1jZW50ZXJcIj5FcnJvciBmZXRjaGluZyBibG9ncy48L3A+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBmbGV4IGZsZXgtd3JhcCBnYXAtMTAgbWQ6Z2FwLTE0IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgICAgICB7ZGF0YT8uZGF0YT8ubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgZGF0YS5kYXRhLm1hcCgoYmxvZzogSUJsb2csIGluZGV4OiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtibG9nLnRpdGxlICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17Y2FyZFZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICBleGl0PVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIGN1c3RvbT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJ3LTYwIGgtYXV0b1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJsb2dDYXJkIGRhdGE9e2Jsb2d9IC8+XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPk5vIGJsb2dzIGZvdW5kLjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxQYWdpbmF0aW9uQ29tcG9uZW50XHJcbiAgICAgICAgICBwYWdlU3RhdGU9e3BhZ2VTdGF0ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlUGFnZT17KHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgc2V0UGFnZVN0YXRlKChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibW90aW9uIiwidXNlUXVlcnkiLCJnZXRCbG9ncyIsIkNhdGVnb3JpZXMiLCJCbG9nQ2FyZCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJCbG9ncyIsImRhdGEiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInBhZ2VTdGF0ZSIsInNldFBhZ2VTdGF0ZSIsImN1cnJlbnRQYWdlIiwidG90YWxQYWdlIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJjYXRlZ29yeSIsInBhZ2UiLCJlbmFibGVkIiwiY2FyZFZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwiaW5kZXgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInByZXYiLCJ0b3RhbFBhZ2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJwIiwibGVuZ3RoIiwibWFwIiwiYmxvZyIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwiY3VzdG9tIiwidGl0bGUiLCJvbkNoYW5nZVBhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs.tsx\n"));

/***/ })

});