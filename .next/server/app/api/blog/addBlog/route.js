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
exports.id = "app/api/blog/addBlog/route";
exports.ids = ["app/api/blog/addBlog/route"];
exports.modules = {

/***/ "(rsc)/./app/api/blog/addBlog/route.ts":
/*!***************************************!*\
  !*** ./app/api/blog/addBlog/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_models_blogModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/blogModel */ \"(rsc)/./app/models/blogModel.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/cloudinaryConfig */ \"(rsc)/./lib/cloudinaryConfig.ts\");\n/* harmony import */ var _app_models_userModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/models/userModel */ \"(rsc)/./app/models/userModel.ts\");\n\n\n\n\n\nasync function POST(request) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n        const formData = await request.formData();\n        const title = formData.get(\"title\");\n        const image = formData.get(\"image\");\n        const blog_category_raw = formData.get(\"topic_category\");\n        const blog_category = JSON.parse(blog_category_raw) || [];\n        const content = formData.get(\"content\");\n        const username = formData.get(\"username\");\n        const creator_id = formData.get(\"creator_id\");\n        if (!title || !content) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Title and content are required\",\n                success: false\n            }, {\n                status: 400\n            });\n        }\n        let imageUrl = \"\";\n        if (image && image instanceof File) {\n            try {\n                const buffer = Buffer.from(await image.arrayBuffer());\n                imageUrl = await new Promise((resolve, reject)=>{\n                    _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v2.uploader.upload_stream({\n                        folder: \"blog_pictures\"\n                    }, (error, result)=>{\n                        if (error) {\n                            console.error(\"Cloudinary upload failed:\", error);\n                            reject(new Error(\"Failed to upload image\"));\n                        } else {\n                            resolve(result?.secure_url || \"\");\n                        }\n                    }).end(buffer);\n                });\n            } catch (error) {\n                console.error(\"Error uploading to Cloudinary:\", error);\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: \"Failed to upload image\"\n                }, {\n                    status: 500\n                });\n            }\n        }\n        //get image profile of an owner of the blog\n        const user = await _app_models_userModel__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n            username\n        });\n        const newBlog = await _app_models_blogModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n            title,\n            content,\n            username,\n            creator_id,\n            topic_category: blog_category,\n            image_url: imageUrl,\n            profile_image_url: user.image_url\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Blog created successfully\",\n            success: true,\n            data: newBlog\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error creating blog:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error,\n            message: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Jsb2cvYWRkQmxvZy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0Q7QUFDZDtBQUNRO0FBQ0Y7QUFDTjtBQUVuQyxlQUFlSyxLQUFLQyxPQUFvQjtJQUMzQyxJQUFJO1FBQ0EsTUFBTUosK0RBQWlCQTtRQUN2QixNQUFNSyxXQUFXLE1BQU1ELFFBQVFDLFFBQVE7UUFFdkMsTUFBTUMsUUFBUUQsU0FBU0UsR0FBRyxDQUFDO1FBQzNCLE1BQU1DLFFBQVFILFNBQVNFLEdBQUcsQ0FBQztRQUMzQixNQUFNRSxvQkFBb0JKLFNBQVNFLEdBQUcsQ0FBQztRQUN2QyxNQUFNRyxnQkFBZ0JDLEtBQUtDLEtBQUssQ0FBQ0gsc0JBQXNCLEVBQUU7UUFDekQsTUFBTUksVUFBVVIsU0FBU0UsR0FBRyxDQUFDO1FBQzdCLE1BQU1PLFdBQVdULFNBQVNFLEdBQUcsQ0FBQztRQUM5QixNQUFNUSxhQUFhVixTQUFTRSxHQUFHLENBQUM7UUFFaEMsSUFBSSxDQUFDRCxTQUFTLENBQUNPLFNBQVM7WUFDcEIsT0FBT2YscURBQVlBLENBQUNrQixJQUFJLENBQUM7Z0JBQ3JCQyxTQUFTO2dCQUNUQyxTQUFTO1lBQ2IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JCO1FBRUEsSUFBSUMsV0FBVztRQUNmLElBQUlaLFNBQVNBLGlCQUFpQmEsTUFBTTtZQUNoQyxJQUFJO2dCQUNBLE1BQU1DLFNBQVNDLE9BQU9DLElBQUksQ0FBQyxNQUFNaEIsTUFBTWlCLFdBQVc7Z0JBQ2xETCxXQUFXLE1BQU0sSUFBSU0sUUFBUSxDQUFDQyxTQUFTQztvQkFDbkMzQiw2REFBVUEsQ0FBQzRCLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQ2hDO3dCQUFFQyxRQUFRO29CQUFnQixHQUMxQixDQUFDQyxPQUFPQzt3QkFDSixJQUFJRCxPQUFPOzRCQUNQRSxRQUFRRixLQUFLLENBQUMsNkJBQTZCQTs0QkFDM0NMLE9BQU8sSUFBSVEsTUFBTTt3QkFDckIsT0FBTzs0QkFDSFQsUUFBUU8sUUFBUUcsY0FBYzt3QkFDbEM7b0JBQ0osR0FDRkMsR0FBRyxDQUFDaEI7Z0JBQ1Y7WUFDSixFQUFFLE9BQU9XLE9BQU87Z0JBQ1pFLFFBQVFGLEtBQUssQ0FBQyxrQ0FBa0NBO2dCQUNoRCxPQUFPbkMscURBQVlBLENBQUNrQixJQUFJLENBQ3BCO29CQUFFaUIsT0FBTztnQkFBeUIsR0FDbEM7b0JBQUVkLFFBQVE7Z0JBQUk7WUFFdEI7UUFDSjtRQUVBLDJDQUEyQztRQUUzQyxNQUFNb0IsT0FBTyxNQUFNckMsNkRBQUlBLENBQUNzQyxPQUFPLENBQUM7WUFBQzFCO1FBQVE7UUFFekMsTUFBTTJCLFVBQVUsTUFBTTFDLDZEQUFJQSxDQUFDMkMsTUFBTSxDQUFDO1lBQzlCcEM7WUFDQU87WUFDQUM7WUFDQUM7WUFDQTRCLGdCQUFnQmpDO1lBQ2hCa0MsV0FBV3hCO1lBQ1h5QixtQkFBbUJOLEtBQUtLLFNBQVM7UUFDckM7UUFFQSxPQUFPOUMscURBQVlBLENBQUNrQixJQUFJLENBQUM7WUFDckJDLFNBQVM7WUFDVEMsU0FBUztZQUNUNEIsTUFBTUw7UUFDVixHQUFHO1lBQUV0QixRQUFRO1FBQUk7SUFFckIsRUFBRSxPQUFPYyxPQUFPO1FBQ1pFLFFBQVFGLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE9BQU9uQyxxREFBWUEsQ0FBQ2tCLElBQUksQ0FBQztZQUNyQmlCO1lBQ0FoQixTQUFTO1FBQ2IsR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDckI7QUFDSiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBU1VTIFRVRlxcRGVza3RvcFxccmVwb3NcXGJsb2dzaXRlXFxhcHBcXGFwaVxcYmxvZ1xcYWRkQmxvZ1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlLCBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgQmxvZyBmcm9tIFwiQC9hcHAvbW9kZWxzL2Jsb2dNb2RlbFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCJAL2xpYi9jbG91ZGluYXJ5Q29uZmlnXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL2FwcC9tb2RlbHMvdXNlck1vZGVsXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpO1xyXG4gICAgICAgIGNvbnN0IGJsb2dfY2F0ZWdvcnlfcmF3ID0gZm9ybURhdGEuZ2V0KFwidG9waWNfY2F0ZWdvcnlcIikgYXMgc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IGJsb2dfY2F0ZWdvcnkgPSBKU09OLnBhcnNlKGJsb2dfY2F0ZWdvcnlfcmF3KSB8fCBbXTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZm9ybURhdGEuZ2V0KFwiY29udGVudFwiKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtRGF0YS5nZXQoXCJ1c2VybmFtZVwiKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgY29uc3QgY3JlYXRvcl9pZCA9IGZvcm1EYXRhLmdldChcImNyZWF0b3JfaWRcIikgYXMgc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAoIXRpdGxlIHx8ICFjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRpdGxlIGFuZCBjb250ZW50IGFyZSByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2VcclxuICAgICAgICAgICAgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbWFnZVVybCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGltYWdlICYmIGltYWdlIGluc3RhbmNlb2YgRmlsZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYXdhaXQgaW1hZ2UuYXJyYXlCdWZmZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLnVwbG9hZF9zdHJlYW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9sZGVyOiBcImJsb2dfcGljdHVyZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNsb3VkaW5hcnkgdXBsb2FkIGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBsb2FkIGltYWdlXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQ/LnNlY3VyZV91cmwgfHwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApLmVuZChidWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBsb2FkaW5nIHRvIENsb3VkaW5hcnk6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICAgICAgICAgICAgICB7IGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgaW1hZ2VcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9nZXQgaW1hZ2UgcHJvZmlsZSBvZiBhbiBvd25lciBvZiB0aGUgYmxvZ1xyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHt1c2VybmFtZX0pXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0Jsb2cgPSBhd2FpdCBCbG9nLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgY3JlYXRvcl9pZCxcclxuICAgICAgICAgICAgdG9waWNfY2F0ZWdvcnk6IGJsb2dfY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGltYWdlX3VybDogaW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIHByb2ZpbGVfaW1hZ2VfdXJsOiB1c2VyLmltYWdlX3VybFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkJsb2cgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogbmV3QmxvZ1xyXG4gICAgICAgIH0sIHsgc3RhdHVzOiAyMDEgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYmxvZzpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiXHJcbiAgICAgICAgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiQmxvZyIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xvdWRpbmFyeSIsIlVzZXIiLCJQT1NUIiwicmVxdWVzdCIsImZvcm1EYXRhIiwidGl0bGUiLCJnZXQiLCJpbWFnZSIsImJsb2dfY2F0ZWdvcnlfcmF3IiwiYmxvZ19jYXRlZ29yeSIsIkpTT04iLCJwYXJzZSIsImNvbnRlbnQiLCJ1c2VybmFtZSIsImNyZWF0b3JfaWQiLCJqc29uIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJzdGF0dXMiLCJpbWFnZVVybCIsIkZpbGUiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiYXJyYXlCdWZmZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInYyIiwidXBsb2FkZXIiLCJ1cGxvYWRfc3RyZWFtIiwiZm9sZGVyIiwiZXJyb3IiLCJyZXN1bHQiLCJjb25zb2xlIiwiRXJyb3IiLCJzZWN1cmVfdXJsIiwiZW5kIiwidXNlciIsImZpbmRPbmUiLCJuZXdCbG9nIiwiY3JlYXRlIiwidG9waWNfY2F0ZWdvcnkiLCJpbWFnZV91cmwiLCJwcm9maWxlX2ltYWdlX3VybCIsImRhdGEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/blog/addBlog/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/models/blogModel.ts":
/*!*********************************!*\
  !*** ./app/models/blogModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BlogSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    image_url: {\n        type: String,\n        default: ''\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    creator_id: {\n        type: String,\n        required: true\n    },\n    username: {\n        type: String,\n        required: true\n    },\n    topic_category: {\n        type: [\n            String\n        ],\n        required: true\n    },\n    likedByUsers: {\n        type: [\n            String\n        ],\n        default: []\n    },\n    favoriteByUsers: {\n        type: [\n            String\n        ],\n        default: []\n    },\n    likes: {\n        type: Number,\n        default: 0\n    },\n    favorites: {\n        type: Number,\n        default: 0\n    },\n    profile_image_url: {\n        type: String,\n        default: null\n    }\n}, {\n    timestamps: true\n});\nconst Blog = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Blog || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Blog', BlogSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL2Jsb2dNb2RlbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFnQi9CLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FBUTtJQUMxQ0csT0FBTztRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdENDLFdBQVc7UUFBRUgsTUFBTUM7UUFBUUcsU0FBUztJQUFFO0lBQ3RDQyxTQUFTO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN4Q0ksWUFBWTtRQUFFTixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDM0NLLFVBQVU7UUFBRVAsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDTSxnQkFBZ0I7UUFBRVIsTUFBTTtZQUFDQztTQUFPO1FBQUVDLFVBQVU7SUFBSztJQUNqRE8sY0FBYztRQUFFVCxNQUFNO1lBQUNDO1NBQU87UUFBRUcsU0FBUyxFQUFFO0lBQUM7SUFDNUNNLGlCQUFpQjtRQUFFVixNQUFNO1lBQUNDO1NBQU87UUFBRUcsU0FBUyxFQUFFO0lBQUM7SUFDL0NPLE9BQU87UUFBQ1gsTUFBTVk7UUFBUVIsU0FBUztJQUFDO0lBQ2hDUyxXQUFXO1FBQUNiLE1BQU1ZO1FBQVFSLFNBQVM7SUFBQztJQUNwQ1UsbUJBQW1CO1FBQUNkLE1BQU1DO1FBQVFHLFNBQVM7SUFBSTtBQUNuRCxHQUFHO0lBQUVXLFlBQVk7QUFBSztBQUV0QixNQUFNQyxPQUFPcEIsd0RBQWUsQ0FBQ29CLElBQUksSUFBSXBCLHFEQUFjLENBQVEsUUFBUUM7QUFFbkUsaUVBQWVtQixJQUFJQSxFQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxEZXNrdG9wXFxyZXBvc1xcYmxvZ3NpdGVcXGFwcFxcbW9kZWxzXFxibG9nTW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuaW50ZXJmYWNlIElCbG9nIHtcclxuICAgIHRpdGxlOiBzdHJpbmdcclxuICAgIGltYWdlX3VybDogc3RyaW5nXHJcbiAgICBjb250ZW50OiBzdHJpbmdcclxuICAgIHVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgICB0b3BpY19jYXRlZ29yeTogc3RyaW5nW11cclxuICAgIGxpa2VkQnlVc2Vyczogc3RyaW5nW11cclxuICAgIGZhdm9yaXRlQnlVc2VyczpzdHJpbmdbXSxcclxuICAgIGxpa2VzOiBudW1iZXIsXHJcbiAgICBmYXZvcml0ZXM6IG51bWJlcixcclxuICAgIHByb2ZpbGVfaW1hZ2VfdXJsOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgY3JlYXRvcl9pZDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEJsb2dTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hPElCbG9nPih7XHJcbiAgICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBpbWFnZV91cmw6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJ30sXHJcbiAgICBjb250ZW50OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGNyZWF0b3JfaWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdG9waWNfY2F0ZWdvcnk6IHsgdHlwZTogW1N0cmluZ10sIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBsaWtlZEJ5VXNlcnM6IHsgdHlwZTogW1N0cmluZ10sIGRlZmF1bHQ6IFtdIH0sXHJcbiAgICBmYXZvcml0ZUJ5VXNlcnM6IHsgdHlwZTogW1N0cmluZ10sIGRlZmF1bHQ6IFtdIH0sXHJcbiAgICBsaWtlczoge3R5cGU6IE51bWJlciwgZGVmYXVsdDogMH0sXHJcbiAgICBmYXZvcml0ZXM6IHt0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDB9LFxyXG4gICAgcHJvZmlsZV9pbWFnZV91cmw6IHt0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IG51bGx9XHJcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KVxyXG5cclxuY29uc3QgQmxvZyA9IG1vbmdvb3NlLm1vZGVscy5CbG9nIHx8IG1vbmdvb3NlLm1vZGVsPElCbG9nPignQmxvZycsIEJsb2dTY2hlbWEpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiQmxvZ1NjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiaW1hZ2VfdXJsIiwiZGVmYXVsdCIsImNvbnRlbnQiLCJjcmVhdG9yX2lkIiwidXNlcm5hbWUiLCJ0b3BpY19jYXRlZ29yeSIsImxpa2VkQnlVc2VycyIsImZhdm9yaXRlQnlVc2VycyIsImxpa2VzIiwiTnVtYmVyIiwiZmF2b3JpdGVzIiwicHJvZmlsZV9pbWFnZV91cmwiLCJ0aW1lc3RhbXBzIiwiQmxvZyIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/models/blogModel.ts\n");

/***/ }),

/***/ "(rsc)/./app/models/userModel.ts":
/*!*********************************!*\
  !*** ./app/models/userModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    firstname: {\n        type: String,\n        required: true\n    },\n    middlename: {\n        type: String,\n        default: \"\"\n    },\n    lastname: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        default: \"\"\n    },\n    image_url: {\n        type: String,\n        default: null\n    },\n    isGoogleModeRegistration: {\n        type: Boolean,\n        default: false\n    },\n    isActive: {\n        type: Boolean,\n        default: true\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL3VzZXJNb2RlbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFjaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFRO0lBQzFDRyxXQUFXO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUMxQ0MsWUFBWTtRQUFFSCxNQUFNQztRQUFRRyxTQUFTO0lBQUc7SUFDeENDLFVBQVU7UUFBRUwsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDSSxPQUFPO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0ssVUFBVTtRQUFFUCxNQUFNQztRQUFRQyxVQUFVO1FBQU1NLFFBQVE7SUFBSztJQUN2REMsVUFBVTtRQUFFVCxNQUFNQztRQUFRRyxTQUFTO0lBQUc7SUFDdENNLFdBQVc7UUFBQ1YsTUFBTUM7UUFBUUcsU0FBUztJQUFJO0lBQ3ZDTywwQkFBMEI7UUFBQ1gsTUFBTVk7UUFBU1IsU0FBUztJQUFLO0lBQ3hEUyxVQUFVO1FBQUNiLE1BQU1ZO1FBQVNSLFNBQVM7SUFBSTtBQUMzQyxHQUFHO0lBQUVVLFlBQVk7QUFBSztBQUV0QixNQUFNQyxPQUFPbkIsd0RBQWUsQ0FBQ21CLElBQUksSUFBSW5CLHFEQUFjLENBQVEsUUFBUUM7QUFFbkUsaUVBQWVrQixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxEZXNrdG9wXFxyZXBvc1xcYmxvZ3NpdGVcXGFwcFxcbW9kZWxzXFx1c2VyTW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuaW50ZXJmYWNlIElVc2VyIHtcclxuICAgIGZpcnN0bmFtZTogc3RyaW5nO1xyXG4gICAgbWlkZGxlbmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdG5hbWU6IHN0cmluZztcclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgaW1hZ2VfdXJsOiBzdHJpbmcgfCBudWxsXHJcbiAgICBlbWFpbDogc3RyaW5nLFxyXG4gICAgaXNHb29nbGVNb2RlUmVnaXN0cmF0aW9uOiBib29sZWFuLFxyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWE8SVVzZXI+KHtcclxuICAgIGZpcnN0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBtaWRkbGVuYW1lOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxyXG4gICAgbGFzdG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcclxuICAgIGltYWdlX3VybDoge3R5cGU6IFN0cmluZywgZGVmYXVsdDogbnVsbH0sXHJcbiAgICBpc0dvb2dsZU1vZGVSZWdpc3RyYXRpb246IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZX0sXHJcbiAgICBpc0FjdGl2ZToge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWV9LFxyXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWw8SVVzZXI+KFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJmaXJzdG5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtaWRkbGVuYW1lIiwiZGVmYXVsdCIsImxhc3RuYW1lIiwiZW1haWwiLCJ1c2VybmFtZSIsInVuaXF1ZSIsInBhc3N3b3JkIiwiaW1hZ2VfdXJsIiwiaXNHb29nbGVNb2RlUmVnaXN0cmF0aW9uIiwiQm9vbGVhbiIsImlzQWN0aXZlIiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/models/userModel.ts\n");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2FaddBlog%2Froute&page=%2Fapi%2Fblog%2FaddBlog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2FaddBlog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2FaddBlog%2Froute&page=%2Fapi%2Fblog%2FaddBlog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2FaddBlog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ASUS_TUF_Desktop_repos_blogsite_app_api_blog_addBlog_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/blog/addBlog/route.ts */ \"(rsc)/./app/api/blog/addBlog/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/blog/addBlog/route\",\n        pathname: \"/api/blog/addBlog\",\n        filename: \"route\",\n        bundlePath: \"app/api/blog/addBlog/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\blogsite\\\\app\\\\api\\\\blog\\\\addBlog\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ASUS_TUF_Desktop_repos_blogsite_app_api_blog_addBlog_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZibG9nJTJGYWRkQmxvZyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYmxvZyUyRmFkZEJsb2clMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZibG9nJTJGYWRkQmxvZyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDRGVza3RvcCU1Q3JlcG9zJTVDYmxvZ3NpdGUlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0FTVVMlMjBUVUYlNUNEZXNrdG9wJTVDcmVwb3MlNUNibG9nc2l0ZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDZ0M7QUFDN0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFTVVMgVFVGXFxcXERlc2t0b3BcXFxccmVwb3NcXFxcYmxvZ3NpdGVcXFxcYXBwXFxcXGFwaVxcXFxibG9nXFxcXGFkZEJsb2dcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2Jsb2cvYWRkQmxvZy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Jsb2cvYWRkQmxvZ1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYmxvZy9hZGRCbG9nL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcRGVza3RvcFxcXFxyZXBvc1xcXFxibG9nc2l0ZVxcXFxhcHBcXFxcYXBpXFxcXGJsb2dcXFxcYWRkQmxvZ1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2FaddBlog%2Froute&page=%2Fapi%2Fblog%2FaddBlog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2FaddBlog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/lodash","vendor-chunks/cloudinary","vendor-chunks/q"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblog%2FaddBlog%2Froute&page=%2Fapi%2Fblog%2FaddBlog%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblog%2FaddBlog%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cblogsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();