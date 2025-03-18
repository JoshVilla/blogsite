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
exports.id = "app/api/blog/route";
exports.ids = ["app/api/blog/route"];
exports.modules = {

/***/ "(rsc)/./app/api/blog/route.ts":
/*!*******************************!*\
  !*** ./app/api/blog/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _app_models_blogModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/models/blogModel */ \"(rsc)/./app/models/blogModel.ts\");\n\n\n\nasync function POST(request) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const { id, category, page = 1, limit = 10, username } = await request.json(); // Default values\n        let params = {};\n        if (category && category !== \"All\") {\n            params.topic_category = {\n                $in: [\n                    category\n                ]\n            }; // Filter by category\n        }\n        if (id) params._id = id;\n        if (username) params.username = username;\n        const blogList = await _app_models_blogModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(params).skip((page - 1) * limit) // Skip previous pages\n        .limit(limit) // Limit per page\n        .exec();\n        const totalBlogs = await _app_models_blogModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].countDocuments(params); // Total count\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            data: blogList,\n            totalPages: Math.ceil(totalBlogs / limit),\n            currentPage: page,\n            totalBlogs\n        });\n    } catch (error) {\n        console.log(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error,\n            message: \"Internal Server Error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Jsb2cvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RDtBQUNOO0FBQ1I7QUFFbkMsZUFBZUcsS0FBS0MsT0FBb0I7SUFDM0MsSUFBSTtRQUNBLE1BQU1ILCtEQUFpQkE7UUFDdkIsTUFBTSxFQUFFSSxFQUFFLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxDQUFDLEVBQUVDLFFBQVEsRUFBRSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNTCxRQUFRTSxJQUFJLElBQUksaUJBQWlCO1FBRWhHLElBQUlDLFNBQWMsQ0FBQztRQUduQixJQUFJTCxZQUFZQSxhQUFhLE9BQU87WUFDaENLLE9BQU9DLGNBQWMsR0FBRztnQkFBRUMsS0FBSztvQkFBQ1A7aUJBQVM7WUFBQyxHQUFHLHFCQUFxQjtRQUN0RTtRQUNBLElBQUlELElBQUlNLE9BQU9HLEdBQUcsR0FBR1Q7UUFDckIsSUFBR0ksVUFBVUUsT0FBT0YsUUFBUSxHQUFHQTtRQUUvQixNQUFNTSxXQUFXLE1BQU1iLDZEQUFJQSxDQUFDYyxJQUFJLENBQUNMLFFBQzVCTSxJQUFJLENBQUMsQ0FBQ1YsT0FBTyxLQUFLQyxPQUFPLHNCQUFzQjtTQUMvQ0EsS0FBSyxDQUFDQSxPQUFPLGlCQUFpQjtTQUM5QlUsSUFBSTtRQUVULE1BQU1DLGFBQWEsTUFBTWpCLDZEQUFJQSxDQUFDa0IsY0FBYyxDQUFDVCxTQUFTLGNBQWM7UUFFcEUsT0FBT1gscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUNyQlcsTUFBTU47WUFDTk8sWUFBWUMsS0FBS0MsSUFBSSxDQUFDTCxhQUFhWDtZQUNuQ2lCLGFBQWFsQjtZQUNiWTtRQUNKO0lBRUosRUFBRSxPQUFPTyxPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPMUIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUNyQmdCO1lBQ0FHLFNBQVM7UUFDYjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXERlc2t0b3BcXHJlcG9zXFxibG9nc2l0ZVxcYXBwXFxhcGlcXGJsb2dcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgQmxvZyBmcm9tIFwiQC9hcHAvbW9kZWxzL2Jsb2dNb2RlbFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgICAgICBjb25zdCB7IGlkLCBjYXRlZ29yeSwgcGFnZSA9IDEsIGxpbWl0ID0gMTAsIHVzZXJuYW1lIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTsgLy8gRGVmYXVsdCB2YWx1ZXNcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtczogYW55ID0ge307XHJcblxyXG4gICAgICBcclxuICAgICAgICBpZiAoY2F0ZWdvcnkgJiYgY2F0ZWdvcnkgIT09IFwiQWxsXCIpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnRvcGljX2NhdGVnb3J5ID0geyAkaW46IFtjYXRlZ29yeV0gfTsgLy8gRmlsdGVyIGJ5IGNhdGVnb3J5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpZCkgcGFyYW1zLl9pZCA9IGlkXHJcbiAgICAgICAgaWYodXNlcm5hbWUpIHBhcmFtcy51c2VybmFtZSA9IHVzZXJuYW1lXHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2dMaXN0ID0gYXdhaXQgQmxvZy5maW5kKHBhcmFtcylcclxuICAgICAgICAgICAgLnNraXAoKHBhZ2UgLSAxKSAqIGxpbWl0KSAvLyBTa2lwIHByZXZpb3VzIHBhZ2VzXHJcbiAgICAgICAgICAgIC5saW1pdChsaW1pdCkgLy8gTGltaXQgcGVyIHBhZ2VcclxuICAgICAgICAgICAgLmV4ZWMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG90YWxCbG9ncyA9IGF3YWl0IEJsb2cuY291bnREb2N1bWVudHMocGFyYW1zKTsgLy8gVG90YWwgY291bnRcclxuXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgZGF0YTogYmxvZ0xpc3QsXHJcbiAgICAgICAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbEJsb2dzIC8gbGltaXQpLCAvLyBUb3RhbCBwYWdlc1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogcGFnZSxcclxuICAgICAgICAgICAgdG90YWxCbG9nc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiQmxvZyIsIlBPU1QiLCJyZXF1ZXN0IiwiaWQiLCJjYXRlZ29yeSIsInBhZ2UiLCJsaW1pdCIsInVzZXJuYW1lIiwianNvbiIsInBhcmFtcyIsInRvcGljX2NhdGVnb3J5IiwiJGluIiwiX2lkIiwiYmxvZ0xpc3QiLCJmaW5kIiwic2tpcCIsImV4ZWMiLCJ0b3RhbEJsb2dzIiwiY291bnREb2N1bWVudHMiLCJkYXRhIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiY3VycmVudFBhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/blog/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/models/blogModel.ts":
/*!*********************************!*\
  !*** ./app/models/blogModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BlogSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    image_url: {\n        type: String,\n        default: ''\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    username: {\n        type: String,\n        required: true\n    },\n    topic_category: {\n        type: [\n            String\n        ],\n        required: true\n    },\n    likedByUsers: {\n        type: [\n            String\n        ],\n        default: []\n    },\n    favoriteByUsers: {\n        type: [\n            String\n        ],\n        default: []\n    },\n    likes: {\n        type: Number,\n        default: 0\n    },\n    favorites: {\n        type: Number,\n        default: 0\n    }\n}, {\n    timestamps: true\n});\nconst Blog = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Blog || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Blog', BlogSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL2Jsb2dNb2RlbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFjL0IsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFRO0lBQzFDRyxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0MsV0FBVztRQUFFSCxNQUFNQztRQUFRRyxTQUFTO0lBQUU7SUFDdENDLFNBQVM7UUFBRUwsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3hDSSxVQUFVO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0ssZ0JBQWdCO1FBQUVQLE1BQU07WUFBQ0M7U0FBTztRQUFFQyxVQUFVO0lBQUs7SUFDakRNLGNBQWM7UUFBRVIsTUFBTTtZQUFDQztTQUFPO1FBQUVHLFNBQVMsRUFBRTtJQUFDO0lBQzVDSyxpQkFBaUI7UUFBRVQsTUFBTTtZQUFDQztTQUFPO1FBQUVHLFNBQVMsRUFBRTtJQUFDO0lBQy9DTSxPQUFPO1FBQUNWLE1BQU1XO1FBQVFQLFNBQVM7SUFBQztJQUNoQ1EsV0FBVztRQUFDWixNQUFNVztRQUFRUCxTQUFTO0lBQUM7QUFDeEMsR0FBRztJQUFFUyxZQUFZO0FBQUs7QUFFdEIsTUFBTUMsT0FBT2xCLHdEQUFlLENBQUNrQixJQUFJLElBQUlsQixxREFBYyxDQUFRLFFBQVFDO0FBRW5FLGlFQUFlaUIsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBU1VTIFRVRlxcRGVza3RvcFxccmVwb3NcXGJsb2dzaXRlXFxhcHBcXG1vZGVsc1xcYmxvZ01vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmludGVyZmFjZSBJQmxvZyB7XHJcbiAgICB0aXRsZTogc3RyaW5nXHJcbiAgICBpbWFnZV91cmw6IHN0cmluZ1xyXG4gICAgY29udGVudDogc3RyaW5nXHJcbiAgICB1c2VybmFtZTogc3RyaW5nLFxyXG4gICAgdG9waWNfY2F0ZWdvcnk6IHN0cmluZ1tdXHJcbiAgICBsaWtlZEJ5VXNlcnM6IHN0cmluZ1tdXHJcbiAgICBmYXZvcml0ZUJ5VXNlcnM6c3RyaW5nW10sXHJcbiAgICBsaWtlczogbnVtYmVyLFxyXG4gICAgZmF2b3JpdGVzOiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgQmxvZ1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWE8SUJsb2c+KHtcclxuICAgIHRpdGxlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGltYWdlX3VybDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnfSxcclxuICAgIGNvbnRlbnQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdG9waWNfY2F0ZWdvcnk6IHsgdHlwZTogW1N0cmluZ10sIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBsaWtlZEJ5VXNlcnM6IHsgdHlwZTogW1N0cmluZ10sIGRlZmF1bHQ6IFtdIH0sXHJcbiAgICBmYXZvcml0ZUJ5VXNlcnM6IHsgdHlwZTogW1N0cmluZ10sIGRlZmF1bHQ6IFtdIH0sXHJcbiAgICBsaWtlczoge3R5cGU6IE51bWJlciwgZGVmYXVsdDogMH0sXHJcbiAgICBmYXZvcml0ZXM6IHt0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDB9XHJcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KVxyXG5cclxuY29uc3QgQmxvZyA9IG1vbmdvb3NlLm1vZGVscy5CbG9nIHx8IG1vbmdvb3NlLm1vZGVsPElCbG9nPignQmxvZycsIEJsb2dTY2hlbWEpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiQmxvZ1NjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiaW1hZ2VfdXJsIiwiZGVmYXVsdCIsImNvbnRlbnQiLCJ1c2VybmFtZSIsInRvcGljX2NhdGVnb3J5IiwibGlrZWRCeVVzZXJzIiwiZmF2b3JpdGVCeVVzZXJzIiwibGlrZXMiLCJOdW1iZXIiLCJmYXZvcml0ZXMiLCJ0aW1lc3RhbXBzIiwiQmxvZyIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/models/blogModel.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.ATLAS_DB_LINK;\n// if (!MONGODB_URI) {\n//   throw new Error(\n//     \"Please define the ATLAS_DB_LINK environment variable in .env.local\"\n//   );\n// }\n// Ensure global object exists for caching (important for Next.js and serverless)\n// @ts-ignore\nglobal.mongoose = global.mongoose || {\n    conn: null,\n    promise: null\n};\nasync function connectToDatabase() {\n    // @ts-ignore\n    if (global.mongoose.conn) {\n        console.log(\"Using existing MongoDB connection\");\n        // @ts-ignore\n        return global.mongoose.conn;\n    }\n    // @ts-ignore\n    if (!global.mongoose.promise) {\n        console.log(\"Establishing new MongoDB connection...\");\n        // @ts-ignore\n        global.mongoose.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            serverSelectionTimeoutMS: 30000,\n            connectTimeoutMS: 30000\n        }).then((mongoose)=>{\n            console.log(\"MongoDB connected successfully ✅\");\n            return mongoose;\n        }).catch((error)=>{\n            console.error(\"MongoDB connection error:\", error);\n            throw new Error(\"Failed to connect to MongoDB.\");\n        });\n    }\n    // @ts-ignore\n    global.mongoose.conn = await global.mongoose.promise;\n    // @ts-ignore\n    return global.mongoose.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxhQUFhO0FBRTdDLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsMkVBQTJFO0FBQzNFLE9BQU87QUFDUCxJQUFJO0FBRUosaUZBQWlGO0FBQ2pGLGFBQWE7QUFDYkMsT0FBT0wsUUFBUSxHQUFHSyxPQUFPTCxRQUFRLElBQUk7SUFBRU0sTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFFMUQsZUFBZUM7SUFDcEIsYUFBYTtJQUNiLElBQUlILE9BQU9MLFFBQVEsQ0FBQ00sSUFBSSxFQUFFO1FBQ3hCRyxRQUFRQyxHQUFHLENBQUM7UUFDWixhQUFhO1FBQ2IsT0FBT0wsT0FBT0wsUUFBUSxDQUFDTSxJQUFJO0lBQzdCO0lBRUEsYUFBYTtJQUNiLElBQUksQ0FBQ0QsT0FBT0wsUUFBUSxDQUFDTyxPQUFPLEVBQUU7UUFDNUJFLFFBQVFDLEdBQUcsQ0FBQztRQUNaLGFBQWE7UUFDYkwsT0FBT0wsUUFBUSxDQUFDTyxPQUFPLEdBQUdQLHVEQUVoQixDQUFDQyxhQUFhO1lBQ3BCVyxpQkFBaUI7WUFDakJDLG9CQUFvQjtZQUNwQkMsMEJBQTBCO1lBQzFCQyxrQkFBa0I7UUFDcEIsR0FDQ0MsSUFBSSxDQUFDLENBQUNoQjtZQUNMUyxRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPVjtRQUNULEdBQ0NpQixLQUFLLENBQUMsQ0FBQ0M7WUFDTlQsUUFBUVMsS0FBSyxDQUFDLDZCQUE2QkE7WUFDM0MsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO0lBQ0o7SUFFQSxhQUFhO0lBQ2JkLE9BQU9MLFFBQVEsQ0FBQ00sSUFBSSxHQUFHLE1BQU1ELE9BQU9MLFFBQVEsQ0FBQ08sT0FBTztJQUNwRCxhQUFhO0lBQ2IsT0FBT0YsT0FBT0wsUUFBUSxDQUFDTSxJQUFJO0FBQzdCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxEZXNrdG9wXFxyZXBvc1xcYmxvZ3NpdGVcXGxpYlxcbW9uZ29kYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52LkFUTEFTX0RCX0xJTks7XHJcblxyXG4vLyBpZiAoIU1PTkdPREJfVVJJKSB7XHJcbi8vICAgdGhyb3cgbmV3IEVycm9yKFxyXG4vLyAgICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBBVExBU19EQl9MSU5LIGVudmlyb25tZW50IHZhcmlhYmxlIGluIC5lbnYubG9jYWxcIlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIEVuc3VyZSBnbG9iYWwgb2JqZWN0IGV4aXN0cyBmb3IgY2FjaGluZyAoaW1wb3J0YW50IGZvciBOZXh0LmpzIGFuZCBzZXJ2ZXJsZXNzKVxyXG4vLyBAdHMtaWdub3JlXHJcbmdsb2JhbC5tb25nb29zZSA9IGdsb2JhbC5tb25nb29zZSB8fCB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgaWYgKGdsb2JhbC5tb25nb29zZS5jb25uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlVzaW5nIGV4aXN0aW5nIE1vbmdvREIgY29ubmVjdGlvblwiKTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHJldHVybiBnbG9iYWwubW9uZ29vc2UuY29ubjtcclxuICB9XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBpZiAoIWdsb2JhbC5tb25nb29zZS5wcm9taXNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVzdGFibGlzaGluZyBuZXcgTW9uZ29EQiBjb25uZWN0aW9uLi4uXCIpO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgZ2xvYmFsLm1vbmdvb3NlLnByb21pc2UgPSBtb25nb29zZVxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIC5jb25uZWN0KE1PTkdPREJfVVJJLCB7XHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVM6IDMwMDAwLCAvLyAzMCBzZWNvbmRzXHJcbiAgICAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsIC8vIDMwIHNlY29uZHNcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNb25nb0RCIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHkg4pyFXCIpO1xyXG4gICAgICAgIHJldHVybiBtb25nb29zZTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY29ubmVjdCB0byBNb25nb0RCLlwiKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgZ2xvYmFsLm1vbmdvb3NlLmNvbm4gPSBhd2FpdCBnbG9iYWwubW9uZ29vc2UucHJvbWlzZTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcmV0dXJuIGdsb2JhbC5tb25nb29zZS5jb25uO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkFUTEFTX0RCX0xJTksiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJjb25uZWN0VGltZW91dE1TIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2Froute&page=%2Fapi%2Fblog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2Froute&page=%2Fapi%2Fblog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ASUS_TUF_Desktop_repos_blogsite_app_api_blog_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/blog/route.ts */ \"(rsc)/./app/api/blog/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/blog/route\",\n        pathname: \"/api/blog\",\n        filename: \"route\",\n        bundlePath: \"app/api/blog/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\api\\\\blog\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ASUS_TUF_Desktop_repos_blogsite_app_api_blog_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZibG9nJTJGcm91dGUmcGFnZT0lMkZhcGklMkZibG9nJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYmxvZyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDRGVza3RvcCU1Q3JlcG9zJTVDYmxvZ3NpdGUlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0FTVVMlMjBUVUYlNUNEZXNrdG9wJTVDcmVwb3MlNUNibG9nc2l0ZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDdUI7QUFDcEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFTVVMgVFVGXFxcXERlc2t0b3BcXFxccmVwb3NcXFxcYmxvZ3NpdGVcXFxcYXBwXFxcXGFwaVxcXFxibG9nXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ibG9nL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYmxvZ1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYmxvZy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEFTVVMgVFVGXFxcXERlc2t0b3BcXFxccmVwb3NcXFxcYmxvZ3NpdGVcXFxcYXBwXFxcXGFwaVxcXFxibG9nXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2Froute&page=%2Fapi%2Fblog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2Froute&page=%2Fapi%2Fblog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();