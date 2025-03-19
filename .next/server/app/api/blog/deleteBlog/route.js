/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/blog/deleteBlog/route";
exports.ids = ["app/api/blog/deleteBlog/route"];
exports.modules = {

/***/ "(rsc)/./app/api/blog/deleteBlog/route.ts":
/*!******************************************!*\
  !*** ./app/api/blog/deleteBlog/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_models_blogModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/blogModel */ \"(rsc)/./app/models/blogModel.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/helpers */ \"(rsc)/./utils/helpers.ts\");\n/* harmony import */ var _utils_nonAsyncHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/nonAsyncHelpers */ \"(rsc)/./utils/nonAsyncHelpers.ts\");\n\n\n\n\n\nasync function POST(request) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n        const { id, image_url } = await request.json();\n        // Delete blog first\n        const deletedBlog = await _app_models_blogModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n        if (!deletedBlog) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                isSuccess: false,\n                message: \"Blog not found!\"\n            }, {\n                status: 404\n            });\n        }\n        // Delete the image after successfully deleting the blog\n        if (image_url) {\n            const publicId = (0,_utils_nonAsyncHelpers__WEBPACK_IMPORTED_MODULE_4__.getCloudinaryPublicId)(image_url);\n            if (publicId) {\n                await (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.deleteCloudinaryImage)(publicId);\n            }\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            isSuccess: true,\n            message: \"Blog deleted successfully!\"\n        });\n    } catch (error) {\n        console.error(\"Delete Blog Error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            isSuccess: false,\n            message: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Jsb2cvZGVsZXRlQmxvZy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0Q7QUFDZDtBQUNRO0FBQ007QUFDUTtBQUV6RCxlQUFlSyxLQUFLQyxPQUFvQjtJQUMzQyxJQUFJO1FBQ0EsTUFBTUosK0RBQWlCQTtRQUV2QixNQUFNLEVBQUVLLEVBQUUsRUFBRUMsU0FBUyxFQUFFLEdBQUcsTUFBTUYsUUFBUUcsSUFBSTtRQUU1QyxvQkFBb0I7UUFDcEIsTUFBTUMsY0FBYyxNQUFNVCw2REFBSUEsQ0FBQ1UsaUJBQWlCLENBQUNKO1FBRWpELElBQUksQ0FBQ0csYUFBYTtZQUNkLE9BQU9WLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQ3JCRyxXQUFXO2dCQUNYQyxTQUFTO1lBQ2IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JCO1FBRUEsd0RBQXdEO1FBQ3hELElBQUdOLFdBQVc7WUFDVixNQUFNTyxXQUFXWCw2RUFBcUJBLENBQUNJO1lBQ3ZDLElBQUdPLFVBQVU7Z0JBQ1QsTUFBTVoscUVBQXFCQSxDQUFDWTtZQUNoQztRQUNKO1FBRUEsT0FBT2YscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUNyQkcsV0FBVztZQUNYQyxTQUFTO1FBQ2I7SUFFSixFQUFFLE9BQU9HLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLHNCQUFzQkE7UUFDcEMsT0FBT2hCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFDckJHLFdBQVc7WUFDWEMsU0FBUztRQUNiLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3JCO0FBQ0oiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXERlc2t0b3BcXHJlcG9zXFxibG9nc2l0ZVxcYXBwXFxhcGlcXGJsb2dcXGRlbGV0ZUJsb2dcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSwgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IEJsb2cgZnJvbSBcIkAvYXBwL21vZGVscy9ibG9nTW9kZWxcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBkZWxldGVDbG91ZGluYXJ5SW1hZ2UgfSBmcm9tIFwiQC91dGlscy9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IGdldENsb3VkaW5hcnlQdWJsaWNJZCB9IGZyb20gXCJAL3V0aWxzL25vbkFzeW5jSGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBpZCwgaW1hZ2VfdXJsIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAgICAgLy8gRGVsZXRlIGJsb2cgZmlyc3RcclxuICAgICAgICBjb25zdCBkZWxldGVkQmxvZyA9IGF3YWl0IEJsb2cuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xyXG5cclxuICAgICAgICBpZiAoIWRlbGV0ZWRCbG9nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICBpc1N1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJCbG9nIG5vdCBmb3VuZCFcIixcclxuICAgICAgICAgICAgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERlbGV0ZSB0aGUgaW1hZ2UgYWZ0ZXIgc3VjY2Vzc2Z1bGx5IGRlbGV0aW5nIHRoZSBibG9nXHJcbiAgICAgICAgaWYoaW1hZ2VfdXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHB1YmxpY0lkID0gZ2V0Q2xvdWRpbmFyeVB1YmxpY0lkKGltYWdlX3VybClcclxuICAgICAgICAgICAgaWYocHVibGljSWQpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGV0ZUNsb3VkaW5hcnlJbWFnZShwdWJsaWNJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIGlzU3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJCbG9nIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBCbG9nIEVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgaXNTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIixcclxuICAgICAgICB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJCbG9nIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJkZWxldGVDbG91ZGluYXJ5SW1hZ2UiLCJnZXRDbG91ZGluYXJ5UHVibGljSWQiLCJQT1NUIiwicmVxdWVzdCIsImlkIiwiaW1hZ2VfdXJsIiwianNvbiIsImRlbGV0ZWRCbG9nIiwiZmluZEJ5SWRBbmREZWxldGUiLCJpc1N1Y2Nlc3MiLCJtZXNzYWdlIiwic3RhdHVzIiwicHVibGljSWQiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/blog/deleteBlog/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/models/blogModel.ts":
/*!*********************************!*\
  !*** ./app/models/blogModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BlogSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    image_url: {\n        type: String,\n        default: ''\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    creator_id: {\n        type: String,\n        required: true\n    },\n    username: {\n        type: String,\n        required: true\n    },\n    topic_category: {\n        type: [\n            String\n        ],\n        required: true\n    },\n    likedByUsers: {\n        type: [\n            String\n        ],\n        default: []\n    },\n    favoriteByUsers: {\n        type: [\n            String\n        ],\n        default: []\n    },\n    likes: {\n        type: Number,\n        default: 0\n    },\n    favorites: {\n        type: Number,\n        default: 0\n    },\n    profile_image_url: {\n        type: String,\n        default: null\n    }\n}, {\n    timestamps: true\n});\nconst Blog = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Blog || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Blog', BlogSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL2Jsb2dNb2RlbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFnQi9CLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FBUTtJQUMxQ0csT0FBTztRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdENDLFdBQVc7UUFBRUgsTUFBTUM7UUFBUUcsU0FBUztJQUFFO0lBQ3RDQyxTQUFTO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN4Q0ksWUFBWTtRQUFFTixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDM0NLLFVBQVU7UUFBRVAsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDTSxnQkFBZ0I7UUFBRVIsTUFBTTtZQUFDQztTQUFPO1FBQUVDLFVBQVU7SUFBSztJQUNqRE8sY0FBYztRQUFFVCxNQUFNO1lBQUNDO1NBQU87UUFBRUcsU0FBUyxFQUFFO0lBQUM7SUFDNUNNLGlCQUFpQjtRQUFFVixNQUFNO1lBQUNDO1NBQU87UUFBRUcsU0FBUyxFQUFFO0lBQUM7SUFDL0NPLE9BQU87UUFBQ1gsTUFBTVk7UUFBUVIsU0FBUztJQUFDO0lBQ2hDUyxXQUFXO1FBQUNiLE1BQU1ZO1FBQVFSLFNBQVM7SUFBQztJQUNwQ1UsbUJBQW1CO1FBQUNkLE1BQU1DO1FBQVFHLFNBQVM7SUFBSTtBQUNuRCxHQUFHO0lBQUVXLFlBQVk7QUFBSztBQUV0QixNQUFNQyxPQUFPcEIsd0RBQWUsQ0FBQ29CLElBQUksSUFBSXBCLHFEQUFjLENBQVEsUUFBUUM7QUFFbkUsaUVBQWVtQixJQUFJQSxFQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxEZXNrdG9wXFxyZXBvc1xcYmxvZ3NpdGVcXGFwcFxcbW9kZWxzXFxibG9nTW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuaW50ZXJmYWNlIElCbG9nIHtcclxuICAgIHRpdGxlOiBzdHJpbmdcclxuICAgIGltYWdlX3VybDogc3RyaW5nXHJcbiAgICBjb250ZW50OiBzdHJpbmdcclxuICAgIHVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgICB0b3BpY19jYXRlZ29yeTogc3RyaW5nW11cclxuICAgIGxpa2VkQnlVc2Vyczogc3RyaW5nW11cclxuICAgIGZhdm9yaXRlQnlVc2VyczpzdHJpbmdbXSxcclxuICAgIGxpa2VzOiBudW1iZXIsXHJcbiAgICBmYXZvcml0ZXM6IG51bWJlcixcclxuICAgIHByb2ZpbGVfaW1hZ2VfdXJsOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgY3JlYXRvcl9pZDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEJsb2dTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hPElCbG9nPih7XHJcbiAgICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBpbWFnZV91cmw6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJ30sXHJcbiAgICBjb250ZW50OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGNyZWF0b3JfaWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdG9waWNfY2F0ZWdvcnk6IHsgdHlwZTogW1N0cmluZ10sIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBsaWtlZEJ5VXNlcnM6IHsgdHlwZTogW1N0cmluZ10sIGRlZmF1bHQ6IFtdIH0sXHJcbiAgICBmYXZvcml0ZUJ5VXNlcnM6IHsgdHlwZTogW1N0cmluZ10sIGRlZmF1bHQ6IFtdIH0sXHJcbiAgICBsaWtlczoge3R5cGU6IE51bWJlciwgZGVmYXVsdDogMH0sXHJcbiAgICBmYXZvcml0ZXM6IHt0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDB9LFxyXG4gICAgcHJvZmlsZV9pbWFnZV91cmw6IHt0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IG51bGx9XHJcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KVxyXG5cclxuY29uc3QgQmxvZyA9IG1vbmdvb3NlLm1vZGVscy5CbG9nIHx8IG1vbmdvb3NlLm1vZGVsPElCbG9nPignQmxvZycsIEJsb2dTY2hlbWEpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiQmxvZ1NjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiaW1hZ2VfdXJsIiwiZGVmYXVsdCIsImNvbnRlbnQiLCJjcmVhdG9yX2lkIiwidXNlcm5hbWUiLCJ0b3BpY19jYXRlZ29yeSIsImxpa2VkQnlVc2VycyIsImZhdm9yaXRlQnlVc2VycyIsImxpa2VzIiwiTnVtYmVyIiwiZmF2b3JpdGVzIiwicHJvZmlsZV9pbWFnZV91cmwiLCJ0aW1lc3RhbXBzIiwiQmxvZyIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/models/blogModel.ts\n");

/***/ }),

/***/ "(rsc)/./lib/cloudinaryConfig.ts":
/*!*********************************!*\
  !*** ./lib/cloudinaryConfig.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n\n// Configure Cloudinary\ncloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.config({\n    cloud_name: process.env.CLOUD_NAME,\n    api_key: process.env.CLOUD_API_KEY,\n    api_secret: process.env.CLOUD_API_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((cloudinary__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY2xvdWRpbmFyeUNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFb0M7QUFFcEMsdUJBQXVCO0FBQ3ZCQSxvREFBYSxDQUFDRSxNQUFNLENBQUM7SUFDbkJDLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNsQ0MsU0FBU0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO0lBQ2xDQyxZQUFZTCxRQUFRQyxHQUFHLENBQUNLLGdCQUFnQjtBQUMxQztBQUVBLGlFQUFlVixtREFBVUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBU1VTIFRVRlxcRGVza3RvcFxccmVwb3NcXGJsb2dzaXRlXFxsaWJcXGNsb3VkaW5hcnlDb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgY2xvdWRpbmFyeSBmcm9tIFwiY2xvdWRpbmFyeVwiO1xyXG5cclxuLy8gQ29uZmlndXJlIENsb3VkaW5hcnlcclxuY2xvdWRpbmFyeS52Mi5jb25maWcoe1xyXG4gIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VEX05BTUUsXHJcbiAgYXBpX2tleTogcHJvY2Vzcy5lbnYuQ0xPVURfQVBJX0tFWSxcclxuICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5DTE9VRF9BUElfU0VDUkVULFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsb3VkaW5hcnk7XHJcbiJdLCJuYW1lcyI6WyJjbG91ZGluYXJ5IiwidjIiLCJjb25maWciLCJjbG91ZF9uYW1lIiwicHJvY2VzcyIsImVudiIsIkNMT1VEX05BTUUiLCJhcGlfa2V5IiwiQ0xPVURfQVBJX0tFWSIsImFwaV9zZWNyZXQiLCJDTE9VRF9BUElfU0VDUkVUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/cloudinaryConfig.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.ATLAS_DB_LINK;\n// if (!MONGODB_URI) {\n//   throw new Error(\n//     \"Please define the ATLAS_DB_LINK environment variable in .env.local\"\n//   );\n// }\n// Ensure global object exists for caching (important for Next.js and serverless)\n// @ts-ignore\nglobal.mongoose = global.mongoose || {\n    conn: null,\n    promise: null\n};\nasync function connectToDatabase() {\n    // @ts-ignore\n    if (global.mongoose.conn) {\n        console.log(\"Using existing MongoDB connection\");\n        // @ts-ignore\n        return global.mongoose.conn;\n    }\n    // @ts-ignore\n    if (!global.mongoose.promise) {\n        console.log(\"Establishing new MongoDB connection...\");\n        // @ts-ignore\n        global.mongoose.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            serverSelectionTimeoutMS: 30000,\n            connectTimeoutMS: 30000\n        }).then((mongoose)=>{\n            console.log(\"MongoDB connected successfully ✅\");\n            return mongoose;\n        }).catch((error)=>{\n            console.error(\"MongoDB connection error:\", error);\n            throw new Error(\"Failed to connect to MongoDB.\");\n        });\n    }\n    // @ts-ignore\n    global.mongoose.conn = await global.mongoose.promise;\n    // @ts-ignore\n    return global.mongoose.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxhQUFhO0FBRTdDLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsMkVBQTJFO0FBQzNFLE9BQU87QUFDUCxJQUFJO0FBRUosaUZBQWlGO0FBQ2pGLGFBQWE7QUFDYkMsT0FBT0wsUUFBUSxHQUFHSyxPQUFPTCxRQUFRLElBQUk7SUFBRU0sTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFFMUQsZUFBZUM7SUFDcEIsYUFBYTtJQUNiLElBQUlILE9BQU9MLFFBQVEsQ0FBQ00sSUFBSSxFQUFFO1FBQ3hCRyxRQUFRQyxHQUFHLENBQUM7UUFDWixhQUFhO1FBQ2IsT0FBT0wsT0FBT0wsUUFBUSxDQUFDTSxJQUFJO0lBQzdCO0lBRUEsYUFBYTtJQUNiLElBQUksQ0FBQ0QsT0FBT0wsUUFBUSxDQUFDTyxPQUFPLEVBQUU7UUFDNUJFLFFBQVFDLEdBQUcsQ0FBQztRQUNaLGFBQWE7UUFDYkwsT0FBT0wsUUFBUSxDQUFDTyxPQUFPLEdBQUdQLHVEQUVoQixDQUFDQyxhQUFhO1lBQ3BCVyxpQkFBaUI7WUFDakJDLG9CQUFvQjtZQUNwQkMsMEJBQTBCO1lBQzFCQyxrQkFBa0I7UUFDcEIsR0FDQ0MsSUFBSSxDQUFDLENBQUNoQjtZQUNMUyxRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPVjtRQUNULEdBQ0NpQixLQUFLLENBQUMsQ0FBQ0M7WUFDTlQsUUFBUVMsS0FBSyxDQUFDLDZCQUE2QkE7WUFDM0MsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO0lBQ0o7SUFFQSxhQUFhO0lBQ2JkLE9BQU9MLFFBQVEsQ0FBQ00sSUFBSSxHQUFHLE1BQU1ELE9BQU9MLFFBQVEsQ0FBQ08sT0FBTztJQUNwRCxhQUFhO0lBQ2IsT0FBT0YsT0FBT0wsUUFBUSxDQUFDTSxJQUFJO0FBQzdCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxEZXNrdG9wXFxyZXBvc1xcYmxvZ3NpdGVcXGxpYlxcbW9uZ29kYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52LkFUTEFTX0RCX0xJTks7XHJcblxyXG4vLyBpZiAoIU1PTkdPREJfVVJJKSB7XHJcbi8vICAgdGhyb3cgbmV3IEVycm9yKFxyXG4vLyAgICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBBVExBU19EQl9MSU5LIGVudmlyb25tZW50IHZhcmlhYmxlIGluIC5lbnYubG9jYWxcIlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIEVuc3VyZSBnbG9iYWwgb2JqZWN0IGV4aXN0cyBmb3IgY2FjaGluZyAoaW1wb3J0YW50IGZvciBOZXh0LmpzIGFuZCBzZXJ2ZXJsZXNzKVxyXG4vLyBAdHMtaWdub3JlXHJcbmdsb2JhbC5tb25nb29zZSA9IGdsb2JhbC5tb25nb29zZSB8fCB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgaWYgKGdsb2JhbC5tb25nb29zZS5jb25uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlVzaW5nIGV4aXN0aW5nIE1vbmdvREIgY29ubmVjdGlvblwiKTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHJldHVybiBnbG9iYWwubW9uZ29vc2UuY29ubjtcclxuICB9XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBpZiAoIWdsb2JhbC5tb25nb29zZS5wcm9taXNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVzdGFibGlzaGluZyBuZXcgTW9uZ29EQiBjb25uZWN0aW9uLi4uXCIpO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgZ2xvYmFsLm1vbmdvb3NlLnByb21pc2UgPSBtb25nb29zZVxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIC5jb25uZWN0KE1PTkdPREJfVVJJLCB7XHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVM6IDMwMDAwLCAvLyAzMCBzZWNvbmRzXHJcbiAgICAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsIC8vIDMwIHNlY29uZHNcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNb25nb0RCIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHkg4pyFXCIpO1xyXG4gICAgICAgIHJldHVybiBtb25nb29zZTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY29ubmVjdCB0byBNb25nb0RCLlwiKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgZ2xvYmFsLm1vbmdvb3NlLmNvbm4gPSBhd2FpdCBnbG9iYWwubW9uZ29vc2UucHJvbWlzZTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcmV0dXJuIGdsb2JhbC5tb25nb29zZS5jb25uO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkFUTEFTX0RCX0xJTksiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJjb25uZWN0VGltZW91dE1TIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2FdeleteBlog%2Froute&page=%2Fapi%2Fblog%2FdeleteBlog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2FdeleteBlog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2FdeleteBlog%2Froute&page=%2Fapi%2Fblog%2FdeleteBlog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2FdeleteBlog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ASUS_TUF_Desktop_repos_blogsite_app_api_blog_deleteBlog_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/blog/deleteBlog/route.ts */ \"(rsc)/./app/api/blog/deleteBlog/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/blog/deleteBlog/route\",\n        pathname: \"/api/blog/deleteBlog\",\n        filename: \"route\",\n        bundlePath: \"app/api/blog/deleteBlog/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\api\\\\blog\\\\deleteBlog\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ASUS_TUF_Desktop_repos_blogsite_app_api_blog_deleteBlog_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZibG9nJTJGZGVsZXRlQmxvZyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYmxvZyUyRmRlbGV0ZUJsb2clMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZibG9nJTJGZGVsZXRlQmxvZyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDRGVza3RvcCU1Q3JlcG9zJTVDYmxvZ3NpdGUlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0FTVVMlMjBUVUYlNUNEZXNrdG9wJTVDcmVwb3MlNUNibG9nc2l0ZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDbUM7QUFDaEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFTVVMgVFVGXFxcXERlc2t0b3BcXFxccmVwb3NcXFxcYmxvZ3NpdGVcXFxcYXBwXFxcXGFwaVxcXFxibG9nXFxcXGRlbGV0ZUJsb2dcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2Jsb2cvZGVsZXRlQmxvZy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Jsb2cvZGVsZXRlQmxvZ1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYmxvZy9kZWxldGVCbG9nL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcRGVza3RvcFxcXFxyZXBvc1xcXFxibG9nc2l0ZVxcXFxhcHBcXFxcYXBpXFxcXGJsb2dcXFxcZGVsZXRlQmxvZ1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2FdeleteBlog%2Froute&page=%2Fapi%2Fblog%2FdeleteBlog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2FdeleteBlog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22C%3A%5C%5CUsers%5C%5CASUS%20TUF%5C%5CDesktop%5C%5Crepos%5C%5Cblogsite%5C%5Cutils%5C%5Chelpers.ts%22%2C%5B%7B%22id%22%3A%227f3491f2c263fdf77caed9240404a23e2825946da4%22%2C%22exportedName%22%3A%22comparePassword%22%7D%2C%7B%22id%22%3A%227f427b82577e5965e0a363500f704014a8478866a4%22%2C%22exportedName%22%3A%22replaceNewImagefromCurrentImage%22%7D%2C%7B%22id%22%3A%227f4653090140513264a5dc2550f4126635c4848c13%22%2C%22exportedName%22%3A%22deleteCloudinaryImage%22%7D%2C%7B%22id%22%3A%227fbc2567d9af9baeee7225490ac1238fda85e2fc7c%22%2C%22exportedName%22%3A%22hashPassword%22%7D%5D%5D%5D&__client_imported__=!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22C%3A%5C%5CUsers%5C%5CASUS%20TUF%5C%5CDesktop%5C%5Crepos%5C%5Cblogsite%5C%5Cutils%5C%5Chelpers.ts%22%2C%5B%7B%22id%22%3A%227f3491f2c263fdf77caed9240404a23e2825946da4%22%2C%22exportedName%22%3A%22comparePassword%22%7D%2C%7B%22id%22%3A%227f427b82577e5965e0a363500f704014a8478866a4%22%2C%22exportedName%22%3A%22replaceNewImagefromCurrentImage%22%7D%2C%7B%22id%22%3A%227f4653090140513264a5dc2550f4126635c4848c13%22%2C%22exportedName%22%3A%22deleteCloudinaryImage%22%7D%2C%7B%22id%22%3A%227fbc2567d9af9baeee7225490ac1238fda85e2fc7c%22%2C%22exportedName%22%3A%22hashPassword%22%7D%5D%5D%5D&__client_imported__=! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"7f3491f2c263fdf77caed9240404a23e2825946da4\": () => (/* reexport safe */ C_Users_ASUS_TUF_Desktop_repos_blogsite_utils_helpers_ts__WEBPACK_IMPORTED_MODULE_0__.comparePassword),\n/* harmony export */   \"7f427b82577e5965e0a363500f704014a8478866a4\": () => (/* reexport safe */ C_Users_ASUS_TUF_Desktop_repos_blogsite_utils_helpers_ts__WEBPACK_IMPORTED_MODULE_0__.replaceNewImagefromCurrentImage),\n/* harmony export */   \"7f4653090140513264a5dc2550f4126635c4848c13\": () => (/* reexport safe */ C_Users_ASUS_TUF_Desktop_repos_blogsite_utils_helpers_ts__WEBPACK_IMPORTED_MODULE_0__.deleteCloudinaryImage),\n/* harmony export */   \"7fbc2567d9af9baeee7225490ac1238fda85e2fc7c\": () => (/* reexport safe */ C_Users_ASUS_TUF_Desktop_repos_blogsite_utils_helpers_ts__WEBPACK_IMPORTED_MODULE_0__.hashPassword)\n/* harmony export */ });\n/* harmony import */ var C_Users_ASUS_TUF_Desktop_repos_blogsite_utils_helpers_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helpers.ts */ \"(rsc)/./utils/helpers.ts\");\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1hY3Rpb24tZW50cnktbG9hZGVyLmpzP2FjdGlvbnM9JTVCJTVCJTIyQyUzQSU1QyU1Q1VzZXJzJTVDJTVDQVNVUyUyMFRVRiU1QyU1Q0Rlc2t0b3AlNUMlNUNyZXBvcyU1QyU1Q2Jsb2dzaXRlJTVDJTVDdXRpbHMlNUMlNUNoZWxwZXJzLnRzJTIyJTJDJTVCJTdCJTIyaWQlMjIlM0ElMjI3ZjM0OTFmMmMyNjNmZGY3N2NhZWQ5MjQwNDA0YTIzZTI4MjU5NDZkYTQlMjIlMkMlMjJleHBvcnRlZE5hbWUlMjIlM0ElMjJjb21wYXJlUGFzc3dvcmQlMjIlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMjdmNDI3YjgyNTc3ZTU5NjVlMGEzNjM1MDBmNzA0MDE0YTg0Nzg4NjZhNCUyMiUyQyUyMmV4cG9ydGVkTmFtZSUyMiUzQSUyMnJlcGxhY2VOZXdJbWFnZWZyb21DdXJyZW50SW1hZ2UlMjIlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMjdmNDY1MzA5MDE0MDUxMzI2NGE1ZGMyNTUwZjQxMjY2MzVjNDg0OGMxMyUyMiUyQyUyMmV4cG9ydGVkTmFtZSUyMiUzQSUyMmRlbGV0ZUNsb3VkaW5hcnlJbWFnZSUyMiU3RCUyQyU3QiUyMmlkJTIyJTNBJTIyN2ZiYzI1NjdkOWFmOWJhZWVlNzIyNTQ5MGFjMTIzOGZkYTg1ZTJmYzdjJTIyJTJDJTIyZXhwb3J0ZWROYW1lJTIyJTNBJTIyaGFzaFBhc3N3b3JkJTIyJTdEJTVEJTVEJTVEJl9fY2xpZW50X2ltcG9ydGVkX189ISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0o7QUFDZ0I7QUFDVjtBQUNUIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBjb21wYXJlUGFzc3dvcmQgYXMgXCI3ZjM0OTFmMmMyNjNmZGY3N2NhZWQ5MjQwNDA0YTIzZTI4MjU5NDZkYTRcIiB9IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBU1VTIFRVRlxcXFxEZXNrdG9wXFxcXHJlcG9zXFxcXGJsb2dzaXRlXFxcXHV0aWxzXFxcXGhlbHBlcnMudHNcIlxuZXhwb3J0IHsgcmVwbGFjZU5ld0ltYWdlZnJvbUN1cnJlbnRJbWFnZSBhcyBcIjdmNDI3YjgyNTc3ZTU5NjVlMGEzNjM1MDBmNzA0MDE0YTg0Nzg4NjZhNFwiIH0gZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFTVVMgVFVGXFxcXERlc2t0b3BcXFxccmVwb3NcXFxcYmxvZ3NpdGVcXFxcdXRpbHNcXFxcaGVscGVycy50c1wiXG5leHBvcnQgeyBkZWxldGVDbG91ZGluYXJ5SW1hZ2UgYXMgXCI3ZjQ2NTMwOTAxNDA1MTMyNjRhNWRjMjU1MGY0MTI2NjM1YzQ4NDhjMTNcIiB9IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBU1VTIFRVRlxcXFxEZXNrdG9wXFxcXHJlcG9zXFxcXGJsb2dzaXRlXFxcXHV0aWxzXFxcXGhlbHBlcnMudHNcIlxuZXhwb3J0IHsgaGFzaFBhc3N3b3JkIGFzIFwiN2ZiYzI1NjdkOWFmOWJhZWVlNzIyNTQ5MGFjMTIzOGZkYTg1ZTJmYzdjXCIgfSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcRGVza3RvcFxcXFxyZXBvc1xcXFxibG9nc2l0ZVxcXFx1dGlsc1xcXFxoZWxwZXJzLnRzXCJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22C%3A%5C%5CUsers%5C%5CASUS%20TUF%5C%5CDesktop%5C%5Crepos%5C%5Cblogsite%5C%5Cutils%5C%5Chelpers.ts%22%2C%5B%7B%22id%22%3A%227f3491f2c263fdf77caed9240404a23e2825946da4%22%2C%22exportedName%22%3A%22comparePassword%22%7D%2C%7B%22id%22%3A%227f427b82577e5965e0a363500f704014a8478866a4%22%2C%22exportedName%22%3A%22replaceNewImagefromCurrentImage%22%7D%2C%7B%22id%22%3A%227f4653090140513264a5dc2550f4126635c4848c13%22%2C%22exportedName%22%3A%22deleteCloudinaryImage%22%7D%2C%7B%22id%22%3A%227fbc2567d9af9baeee7225490ac1238fda85e2fc7c%22%2C%22exportedName%22%3A%22hashPassword%22%7D%5D%5D%5D&__client_imported__=!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./utils/constant.ts":
/*!***************************!*\
  !*** ./utils/constant.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SALT_ROUNDS: () => (/* binding */ SALT_ROUNDS),\n/* harmony export */   categories: () => (/* binding */ categories)\n/* harmony export */ });\nconst SALT_ROUNDS = 10;\nconst categories = [\n    {\n        label: \"All\",\n        key: \"all\"\n    },\n    {\n        label: \"News\",\n        key: \"news\"\n    },\n    {\n        label: \"Life\",\n        key: \"life\"\n    },\n    {\n        label: \"Science and Technology\",\n        key: \"technology\"\n    },\n    {\n        label: \"Nature\",\n        key: \"nature\"\n    },\n    {\n        label: \"Lifestyle\",\n        key: \"lifstyle\"\n    },\n    {\n        label: \"Sports\",\n        key: \"sports\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9jb25zdGFudC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLGNBQWMsR0FBRTtBQU10QixNQUFNQyxhQUEwQjtJQUNuQztRQUNJQyxPQUFPO1FBQ1BDLEtBQUs7SUFDVDtJQUNBO1FBQ0lELE9BQU87UUFDUEMsS0FBSztJQUNUO0lBQ0E7UUFDSUQsT0FBTztRQUNQQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJRCxPQUFPO1FBQ1BDLEtBQUs7SUFDVDtJQUNBO1FBQ0lELE9BQU87UUFDUEMsS0FBSztJQUNUO0lBQ0E7UUFDSUQsT0FBTztRQUNQQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJRCxPQUFPO1FBQ1BDLEtBQUs7SUFDVDtDQUNILENBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXERlc2t0b3BcXHJlcG9zXFxibG9nc2l0ZVxcdXRpbHNcXGNvbnN0YW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTQUxUX1JPVU5EUyA9IDEwXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDYXRlZ29yeSB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXM6IElDYXRlZ29yeVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIkFsbFwiLFxyXG4gICAgICAgIGtleTogXCJhbGxcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiTmV3c1wiLFxyXG4gICAgICAgIGtleTogXCJuZXdzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIkxpZmVcIixcclxuICAgICAgICBrZXk6IFwibGlmZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCJTY2llbmNlIGFuZCBUZWNobm9sb2d5XCIsXHJcbiAgICAgICAga2V5OiBcInRlY2hub2xvZ3lcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiTmF0dXJlXCIsXHJcbiAgICAgICAga2V5OiBcIm5hdHVyZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCJMaWZlc3R5bGVcIixcclxuICAgICAgICBrZXk6IFwibGlmc3R5bGVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiU3BvcnRzXCIsXHJcbiAgICAgICAga2V5OiBcInNwb3J0c1wiLFxyXG4gICAgfSxcclxuXTsiXSwibmFtZXMiOlsiU0FMVF9ST1VORFMiLCJjYXRlZ29yaWVzIiwibGFiZWwiLCJrZXkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/constant.ts\n");

/***/ }),

/***/ "(rsc)/./utils/helpers.ts":
/*!**************************!*\
  !*** ./utils/helpers.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comparePassword: () => (/* binding */ comparePassword),\n/* harmony export */   deleteCloudinaryImage: () => (/* binding */ deleteCloudinaryImage),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   replaceNewImagefromCurrentImage: () => (/* binding */ replaceNewImagefromCurrentImage)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/cloudinaryConfig */ \"(rsc)/./lib/cloudinaryConfig.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ \"(rsc)/./utils/constant.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _nonAsyncHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nonAsyncHelpers */ \"(rsc)/./utils/nonAsyncHelpers.ts\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"7f3491f2c263fdf77caed9240404a23e2825946da4\":\"comparePassword\",\"7f427b82577e5965e0a363500f704014a8478866a4\":\"replaceNewImagefromCurrentImage\",\"7f4653090140513264a5dc2550f4126635c4848c13\":\"deleteCloudinaryImage\",\"7fbc2567d9af9baeee7225490ac1238fda85e2fc7c\":\"hashPassword\"} */ \n\n\n\n\n\n\nconst /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteCloudinaryImage = async (publicId)=>{\n    if (!publicId) return null;\n    try {\n        const result = await _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].v2.uploader.destroy(publicId);\n        return result;\n    } catch (error) {\n        console.error(\"Error deleting from Cloudinary:\", error);\n        throw error;\n    }\n};\nconst /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ replaceNewImagefromCurrentImage = async (collection, id)=>{\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();\n        const res = await collection.findById(id); // Use findById instead of find\n        if (res) {\n            const publicId = (0,_nonAsyncHelpers__WEBPACK_IMPORTED_MODULE_6__.getCloudinaryPublicId)(res.image_url);\n            if (publicId) {\n                await deleteCloudinaryImage(publicId);\n            }\n        }\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ hashPassword = async (password)=>{\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].hash(password, _constant__WEBPACK_IMPORTED_MODULE_4__.SALT_ROUNDS);\n};\nconst /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ comparePassword = async (password, hashedPassword)=>{\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].compare(password, hashedPassword);\n};\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_7__.ensureServerEntryExports)([\n    deleteCloudinaryImage,\n    replaceNewImagefromCurrentImage,\n    hashPassword,\n    comparePassword\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(deleteCloudinaryImage, \"7f4653090140513264a5dc2550f4126635c4848c13\", null);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(replaceNewImagefromCurrentImage, \"7f427b82577e5965e0a363500f704014a8478866a4\", null);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(hashPassword, \"7fbc2567d9af9baeee7225490ac1238fda85e2fc7c\", null);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(comparePassword, \"7f3491f2c263fdf77caed9240404a23e2825946da4\", null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9oZWxwZXJzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVnRDtBQUNFO0FBRVQ7QUFDWDtBQUM0QjtBQUduRCxNQUFNSyx1Q0FBbUIsR0FBbkJBLHdCQUF3QixPQUFPQztJQUMxQyxJQUFJLENBQUNBLFVBQVUsT0FBTztJQUV0QixJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNUCw2REFBVUEsQ0FBQ1EsRUFBRSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0o7UUFDcEQsT0FBT0M7SUFDVCxFQUFFLE9BQU9JLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7UUFDakQsTUFBTUE7SUFDUjtBQUNGLEVBQUU7QUFFSyxNQUFNRSx1Q0FBNkIsR0FBN0JBLGtDQUFrQyxPQUM3Q0MsWUFDQUM7SUFFQSxJQUFJO1FBQ0YsTUFBTWQsK0RBQWlCQTtRQUN2QixNQUFNZSxNQUFNLE1BQU1GLFdBQVdHLFFBQVEsQ0FBQ0YsS0FBSywrQkFBK0I7UUFFMUUsSUFBSUMsS0FBSztZQUNQLE1BQU1WLFdBQVdGLHVFQUFxQkEsQ0FBQ1ksSUFBSUUsU0FBUztZQUNsRCxJQUFJWixVQUFVO2dCQUNaLE1BQU1ELHNCQUFzQkM7WUFDOUI7UUFDSjtJQUNGLEVBQUUsT0FBT0ssT0FBTztRQUNkQyxRQUFRTyxHQUFHLENBQUNSO0lBQ2Q7QUFDRixFQUFFO0FBRUssTUFBTVMsdUNBQVUsR0FBVkEsZUFBZSxPQUFPQztJQUNqQyxPQUFPLE1BQU1sQixxREFBVyxDQUFDa0IsVUFBVW5CLGtEQUFXQTtBQUNoRCxFQUFFO0FBRUssTUFBTXFCLHVDQUFhLEdBQWJBLGtCQUFrQixPQUM3QkYsVUFDQUc7SUFFQSxPQUFPLE1BQU1yQix3REFBYyxDQUFDa0IsVUFBVUc7QUFDeEMsRUFBRTs7O0lBeENXbkI7SUFZQVE7SUFtQkFPO0lBSUFHOztBQW5DQWxCLDBGQUFBQSxDQUFBQTtBQVlBUSwwRkFBQUEsQ0FBQUE7QUFtQkFPLDBGQUFBQSxDQUFBQTtBQUlBRywwRkFBQUEsQ0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXERlc2t0b3BcXHJlcG9zXFxibG9nc2l0ZVxcdXRpbHNcXGhlbHBlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblwidXNlIHNlcnZlclwiXHJcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCJAL2xpYi9jbG91ZGluYXJ5Q29uZmlnXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuXHJcbmltcG9ydCB7IFNBTFRfUk9VTkRTIH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgZ2V0Q2xvdWRpbmFyeVB1YmxpY0lkIH0gZnJvbSBcIi4vbm9uQXN5bmNIZWxwZXJzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNsb3VkaW5hcnlJbWFnZSA9IGFzeW5jIChwdWJsaWNJZDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCFwdWJsaWNJZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLmRlc3Ryb3kocHVibGljSWQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGZyb20gQ2xvdWRpbmFyeTpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcGxhY2VOZXdJbWFnZWZyb21DdXJyZW50SW1hZ2UgPSBhc3luYyAoXHJcbiAgY29sbGVjdGlvbjogYW55LFxyXG4gIGlkOiBzdHJpbmcsXHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY29sbGVjdGlvbi5maW5kQnlJZChpZCk7IC8vIFVzZSBmaW5kQnlJZCBpbnN0ZWFkIG9mIGZpbmRcclxuXHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgIGNvbnN0IHB1YmxpY0lkID0gZ2V0Q2xvdWRpbmFyeVB1YmxpY0lkKHJlcy5pbWFnZV91cmwpO1xyXG4gICAgICAgIGlmIChwdWJsaWNJZCkge1xyXG4gICAgICAgICAgYXdhaXQgZGVsZXRlQ2xvdWRpbmFyeUltYWdlKHB1YmxpY0lkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFzaFBhc3N3b3JkID0gYXN5bmMgKHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIFNBTFRfUk9VTkRTKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21wYXJlUGFzc3dvcmQgPSBhc3luYyAoXHJcbiAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICBoYXNoZWRQYXNzd29yZDogc3RyaW5nXHJcbikgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbImNsb3VkaW5hcnkiLCJjb25uZWN0VG9EYXRhYmFzZSIsIlNBTFRfUk9VTkRTIiwiYmNyeXB0IiwiZ2V0Q2xvdWRpbmFyeVB1YmxpY0lkIiwiZGVsZXRlQ2xvdWRpbmFyeUltYWdlIiwicHVibGljSWQiLCJyZXN1bHQiLCJ2MiIsInVwbG9hZGVyIiwiZGVzdHJveSIsImVycm9yIiwiY29uc29sZSIsInJlcGxhY2VOZXdJbWFnZWZyb21DdXJyZW50SW1hZ2UiLCJjb2xsZWN0aW9uIiwiaWQiLCJyZXMiLCJmaW5kQnlJZCIsImltYWdlX3VybCIsImxvZyIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaCIsImNvbXBhcmVQYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwiY29tcGFyZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/helpers.ts\n");

/***/ }),

/***/ "(rsc)/./utils/nonAsyncHelpers.ts":
/*!**********************************!*\
  !*** ./utils/nonAsyncHelpers.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formattedDate: () => (/* binding */ formattedDate),\n/* harmony export */   getCloudinaryPublicId: () => (/* binding */ getCloudinaryPublicId),\n/* harmony export */   passwordValidation: () => (/* binding */ passwordValidation)\n/* harmony export */ });\n/* harmony import */ var _barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __barrel_optimize__?names=format!=!date-fns */ \"(rsc)/./node_modules/date-fns/format.js\");\n\nconst getCloudinaryPublicId = (url)=>{\n    if (!url) return null;\n    try {\n        const urlParts = url.split(\"/\");\n        const filenameWithExtension = urlParts.pop();\n        const folder = urlParts.pop();\n        if (!folder || !filenameWithExtension) return null;\n        const filename = filenameWithExtension.split(\".\")[0];\n        return `${folder}/${filename}`;\n    } catch (error) {\n        console.error(\"Error parsing Cloudinary URL:\", error);\n        return null;\n    }\n};\nconst passwordValidation = (isValidFormat, isPasswordMatch)=>{\n    return isValidFormat && isPasswordMatch ? true : false;\n};\nconst formattedDate = (date)=>{\n    return (0,_barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(date), \"MM/dd/yyyy\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9ub25Bc3luY0hlbHBlcnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUV4QixNQUFNQyx3QkFBd0IsQ0FBQ0M7SUFDcEMsSUFBSSxDQUFDQSxLQUFLLE9BQU87SUFFakIsSUFBSTtRQUNGLE1BQU1DLFdBQVdELElBQUlFLEtBQUssQ0FBQztRQUMzQixNQUFNQyx3QkFBd0JGLFNBQVNHLEdBQUc7UUFDMUMsTUFBTUMsU0FBU0osU0FBU0csR0FBRztRQUUzQixJQUFJLENBQUNDLFVBQVUsQ0FBQ0YsdUJBQXVCLE9BQU87UUFFOUMsTUFBTUcsV0FBV0gsc0JBQXNCRCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDcEQsT0FBTyxHQUFHRyxPQUFPLENBQUMsRUFBRUMsVUFBVTtJQUNoQyxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7UUFDL0MsT0FBTztJQUNUO0FBQ0YsRUFBRTtBQUVLLE1BQU1FLHFCQUFxQixDQUNoQ0MsZUFDQUM7SUFFQSxPQUFPRCxpQkFBaUJDLGtCQUFrQixPQUFPO0FBQ25ELEVBQUU7QUFFSyxNQUFNQyxnQkFBZ0IsQ0FBQ0M7SUFDNUIsT0FBT2YsOEVBQU1BLENBQUMsSUFBSWdCLEtBQUtELE9BQU87QUFDaEMsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBU1VTIFRVRlxcRGVza3RvcFxccmVwb3NcXGJsb2dzaXRlXFx1dGlsc1xcbm9uQXN5bmNIZWxwZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDbG91ZGluYXJ5UHVibGljSWQgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICBpZiAoIXVybCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybC5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBmaWxlbmFtZVdpdGhFeHRlbnNpb24gPSB1cmxQYXJ0cy5wb3AoKTtcclxuICAgIGNvbnN0IGZvbGRlciA9IHVybFBhcnRzLnBvcCgpO1xyXG5cclxuICAgIGlmICghZm9sZGVyIHx8ICFmaWxlbmFtZVdpdGhFeHRlbnNpb24pIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGZpbGVuYW1lID0gZmlsZW5hbWVXaXRoRXh0ZW5zaW9uLnNwbGl0KFwiLlwiKVswXTtcclxuICAgIHJldHVybiBgJHtmb2xkZXJ9LyR7ZmlsZW5hbWV9YDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgQ2xvdWRpbmFyeSBVUkw6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFZhbGlkYXRpb24gPSAoXHJcbiAgaXNWYWxpZEZvcm1hdDogYm9vbGVhbixcclxuICBpc1Bhc3N3b3JkTWF0Y2g6IGJvb2xlYW5cclxuKSA9PiB7XHJcbiAgcmV0dXJuIGlzVmFsaWRGb3JtYXQgJiYgaXNQYXNzd29yZE1hdGNoID8gdHJ1ZSA6IGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlZERhdGUgPSAoZGF0ZTogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgXCJNTS9kZC95eXl5XCIpXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJmb3JtYXQiLCJnZXRDbG91ZGluYXJ5UHVibGljSWQiLCJ1cmwiLCJ1cmxQYXJ0cyIsInNwbGl0IiwiZmlsZW5hbWVXaXRoRXh0ZW5zaW9uIiwicG9wIiwiZm9sZGVyIiwiZmlsZW5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJwYXNzd29yZFZhbGlkYXRpb24iLCJpc1ZhbGlkRm9ybWF0IiwiaXNQYXNzd29yZE1hdGNoIiwiZm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJEYXRlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/nonAsyncHelpers.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/date-fns","vendor-chunks/lodash","vendor-chunks/cloudinary","vendor-chunks/q","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2FdeleteBlog%2Froute&page=%2Fapi%2Fblog%2FdeleteBlog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2FdeleteBlog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();