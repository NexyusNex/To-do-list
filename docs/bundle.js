/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Roboto-Regular.ttf */ \"./src/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: roboto;\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  font-family: roboto;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: grid;\\r\\n  grid-template-rows: 100px 1fr 50px;\\r\\n  grid-template-columns: 300px 1fr;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  grid-column: span 2;\\r\\n  background-color: #7f1d1d;\\r\\n  color: white;\\r\\n  height: 100px;\\r\\n  display: flex;\\r\\n  padding-left: 30px;\\r\\n  align-items: center;\\r\\n  font-size: 42px;\\r\\n}\\r\\n\\r\\n.header img {\\r\\n  padding-right: 25px;\\r\\n}\\r\\n\\r\\n.side-menu {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #fee2e2;\\r\\n  padding: 25px;\\r\\n  gap: 8px;\\r\\n}\\r\\n.side-menu h3 {\\r\\n  margin: 25px 0;\\r\\n}\\r\\n\\r\\n.side-menu .button,\\r\\n.card {\\r\\n  display: flex;\\r\\n  gap: 5px;\\r\\n  align-items: center;\\r\\n  height: 40px;\\r\\n  font-size: 18px;\\r\\n  border-radius: 12px;\\r\\n  padding-left: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.side-menu img {\\r\\n  height: 1.5rem;\\r\\n}\\r\\n.side-menu .button:hover {\\r\\n  background-color: #fecaca;\\r\\n}\\r\\n\\r\\n.projects-title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#openPMenu {\\r\\n  background-color: #fee2e2;\\r\\n  display: flex;\\r\\n  border: none;\\r\\n  font-size: 32px;\\r\\n  height: 40px;\\r\\n  width: 40px;\\r\\n  border-radius: 8px;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#openPMenu:hover {\\r\\n  background-color: #f19898;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#openPMenu:active {\\r\\n  background-color: #d88888;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.new-project {\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  gap: 1px;\\r\\n}\\r\\n\\r\\n.new-project input {\\r\\n  border: 2px solid #7f1d1d;\\r\\n  border-radius: 6px;\\r\\n  height: 30px;\\r\\n}\\r\\n\\r\\n.new-project-btn {\\r\\n  display: flex;\\r\\n  gap: 1px;\\r\\n}\\r\\n\\r\\n#addProject,\\r\\n#addTask {\\r\\n  background-color: #a5eca5;\\r\\n  border: 2px solid #507250;\\r\\n  border-radius: 6px;\\r\\n  color: #3e583e;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n#addProject {\\r\\n  height: 30px;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n#addProject:hover,\\r\\n#addTask:hover {\\r\\n  background-color: #c1ecc1;\\r\\n  border: 2px solid #2c3f2c;\\r\\n}\\r\\n\\r\\n#addProject:active,\\r\\n#addTask:active {\\r\\n  background-color: #cfe9cf;\\r\\n}\\r\\n\\r\\n#addTask {\\r\\n  display: none;\\r\\n  padding: 0 15px;\\r\\n  font-size: 32px;\\r\\n  align-items: center;\\r\\n  height: 40px;\\r\\n}\\r\\n\\r\\n#closePMenu {\\r\\n  height: 30px;\\r\\n  width: 50%;\\r\\n  background-color: #f0aeae;\\r\\n  border: 2px solid #6b0d0d;\\r\\n  border-radius: 6px;\\r\\n  color: #6b0d0d;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n#closePMenu:hover {\\r\\n  background-color: #eebdbd;\\r\\n  border: 2px solid #3f2c2c;\\r\\n}\\r\\n\\r\\n#closePMenu:active {\\r\\n  background-color: #ebc6c6;\\r\\n}\\r\\n\\r\\n.projects {\\r\\n  display: grid;\\r\\n  max-height: 400px;\\r\\n  grid-template-columns: 1fr;\\r\\n  grid-auto-rows: 40px;\\r\\n  row-gap: 10px;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.card:hover {\\r\\n  background-color: #fecaca;\\r\\n}\\r\\n\\r\\n#deletebtn {\\r\\n  display: none;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  background-color: #fecaca;\\r\\n  border: none;\\r\\n  font-size: 25px;\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n  border-radius: 0 12px 12px 0;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n#deletebtn:hover {\\r\\n  background-color: #f3adad;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#deletebtn:active {\\r\\n  background-color: #f19898;\\r\\n}\\r\\n\\r\\n.card:hover #deletebtn {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  padding: 0 10%;\\r\\n}\\r\\n\\r\\n.task-title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-size: 32px;\\r\\n  height: 80px;\\r\\n}\\r\\n\\r\\n.new-task {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  margin-bottom: 8px;\\r\\n}\\r\\n\\r\\n.task-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  grid-auto-rows: 50px;\\r\\n  gap: 8px;\\r\\n  height: 630px;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  background-color: #ffe0e082;\\r\\n  align-items: center;\\r\\n  border-radius: 12px;\\r\\n  padding: 0 10px;\\r\\n}\\r\\n\\r\\n.task:hover {\\r\\n  background-color: #ffe0e0;\\r\\n}\\r\\n\\r\\n.task.L {\\r\\n  border-left: 12px solid #00b400;\\r\\n}\\r\\n\\r\\n.task.M {\\r\\n  border-left: 12px solid #ff7b00;\\r\\n}\\r\\n\\r\\n.task.H {\\r\\n  border-left: 12px solid #ff0000;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  padding: 0 24px;\\r\\n  position: absolute;\\r\\n  width: 400px;\\r\\n  height: 500px;\\r\\n  background-color: #7f1d1d;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  margin: auto;\\r\\n  border-radius: 24px;\\r\\n  box-shadow: 0px 0px 15px rgb(82, 82, 82);\\r\\n  color: white;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.form h1 {\\r\\n  margin: 0 auto;\\r\\n  padding: 8px 0;\\r\\n}\\r\\n\\r\\n.form input {\\r\\n  height: 34px;\\r\\n  border-radius: 8px;\\r\\n  border: 2px solid #d88888;\\r\\n}\\r\\n\\r\\n.form input:focus {\\r\\n  border: 2px solid #000000;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.priority input[type=\\\"radio\\\"] {\\r\\n  opacity: 0;\\r\\n  position: fixed;\\r\\n  width: 0;\\r\\n}\\r\\n\\r\\n#lhigh {\\r\\n  display: inline-block;\\r\\n  background-color: #ffd6d6;\\r\\n  padding: 10px 20px;\\r\\n  font-family: sans-serif, Arial;\\r\\n  font-size: 16px;\\r\\n  border: 2px solid #ff0000;\\r\\n  color: #ff0000;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n.priority input[type=\\\"radio\\\"]:checked + #lhigh {\\r\\n  background-color: #ff0000;\\r\\n  border-color: #ff0000;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.priority input[type=\\\"radio\\\"]:focus + #lhigh {\\r\\n  border: 2px dashed #ffffff;\\r\\n}\\r\\n\\r\\n#lmedium {\\r\\n  display: inline-block;\\r\\n  background-color: #ffefe0;\\r\\n  padding: 10px 20px;\\r\\n  font-family: sans-serif, Arial;\\r\\n  font-size: 16px;\\r\\n  border: 2px solid #ff7b00;\\r\\n  color: #ff7b00;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n.priority input[type=\\\"radio\\\"]:checked + #lmedium {\\r\\n  background-color: #ff7b00;\\r\\n  border-color: #ff7b00;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.priority input[type=\\\"radio\\\"]:focus + #lmedium {\\r\\n  border: 2px dashed #ffffff;\\r\\n}\\r\\n\\r\\n#llow {\\r\\n  display: inline-block;\\r\\n  background-color: #e1ffe0;\\r\\n  padding: 10px 20px;\\r\\n  font-family: sans-serif, Arial;\\r\\n  font-size: 16px;\\r\\n  border: 2px solid #00b400;\\r\\n  color: #00b400;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n.priority input[type=\\\"radio\\\"]:checked + #llow {\\r\\n  background-color: #00b400;\\r\\n  border-color: #00b400;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.priority input[type=\\\"radio\\\"]:focus + #llow {\\r\\n  border: 2px dashed #ffffff;\\r\\n}\\r\\n\\r\\n#finish,\\r\\n#hide {\\r\\n  padding: 0 40px;\\r\\n  height: 40px;\\r\\n  margin-top: 20px;\\r\\n  border-radius: 8px;\\r\\n  border: 2px solid #fee2e2;\\r\\n  font-size: 16px;\\r\\n  color: #7f1d1d;\\r\\n}\\r\\n\\r\\n.action {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  gap: 8px;\\r\\n}\\r\\n\\r\\n#finish:hover,\\r\\n#hide:hover {\\r\\n  background-color: #fee2e2;\\r\\n  border: 2px solid #fee2e2;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#finish:active,\\r\\n#hide:active {\\r\\n  background-color: #dac1c1;\\r\\n  border: 2px solid #dbc3c3;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  grid-column: span 2;\\r\\n  background-color: #7f1d1d;\\r\\n  color: white;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/checkInput.js":
/*!***************************!*\
  !*** ./src/checkInput.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkInput)\n/* harmony export */ });\nfunction checkInput(input) {\r\n  if (input == \"\" || input == null) {\r\n    alert(\"Please enter valid input!\");\r\n    return true;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/checkInput.js?");

/***/ }),

/***/ "./src/displayTask.js":
/*!****************************!*\
  !*** ./src/displayTask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayTask)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\r\n\r\nfunction displayTask(index) {\r\n  _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProjectsToStorage(_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList);\r\n  let todoI = 0;\r\n  _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList[index].taskList.forEach((obj) => {\r\n    const task = document.createElement(\"div\");\r\n    task.setAttribute(\"data-todo\", todoI);\r\n    task.classList.add(\"task\");\r\n    task.classList.add(obj.priority);\r\n    task.textContent = obj.title;\r\n    const rightSection = document.createElement(\"div\");\r\n    rightSection.textContent = obj.dueDate;\r\n    document.querySelector(\".task-container\").appendChild(task);\r\n    task.appendChild(rightSection);\r\n\r\n    task.addEventListener(\"click\", function () {\r\n      const form = document.querySelector(\".form\");\r\n      const taskIndex = task.getAttribute(\"data-todo\");\r\n      form.setAttribute(\"data-todo\", taskIndex);\r\n      form.setAttribute(\"isTask\", 1);\r\n      document.querySelector(\".form-title\").textContent =\r\n        \"Edit Task \" + obj.title;\r\n      if (form.style.display !== \"flex\") {\r\n        form.style.display = \"flex\";\r\n      }\r\n    });\r\n    todoI++;\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/displayTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/logo.png */ \"./Images/logo.png\");\n/* harmony import */ var _Images_inbox_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/inbox.png */ \"./Images/inbox.png\");\n/* harmony import */ var _Images_calendar_today_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/calendar-today.png */ \"./Images/calendar-today.png\");\n/* harmony import */ var _Images_calendar_week_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/calendar-week.png */ \"./Images/calendar-week.png\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./to-do */ \"./src/to-do.js\");\n/* harmony import */ var _displayTask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./displayTask */ \"./src/displayTask.js\");\n/* harmony import */ var _checkInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkInput */ \"./src/checkInput.js\");\n\r\n//images\r\n\r\n\r\n\r\n\r\n//objects\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst logoImg = document.querySelector(\"#logo\");\r\nlogoImg.src = _Images_logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nconst inboxImg = document.querySelector(\"#inboximg\");\r\ninboxImg.src = _Images_inbox_png__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\nconst todayImg = document.querySelector(\"#todayimg\");\r\ntodayImg.src = _Images_calendar_today_png__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\nconst weekImg = document.querySelector(\"#weekimg\");\r\nweekImg.src = _Images_calendar_week_png__WEBPACK_IMPORTED_MODULE_4__;\r\n\r\n_projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayProjects(_projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].projectList);\r\n\r\nconst openPMenu = document.querySelector(\"#openPMenu\");\r\nopenPMenu.addEventListener(\"click\", function () {\r\n  const PMenu = document.querySelector(\".new-project\");\r\n  if (PMenu.style.display !== \"flex\") {\r\n    PMenu.style.display = \"flex\";\r\n  }\r\n});\r\n\r\nconst closePMenu = document.querySelector(\"#closePMenu\");\r\nclosePMenu.addEventListener(\"click\", function () {\r\n  const PMenu = document.querySelector(\".new-project\");\r\n  if (PMenu.style.display !== \"none\") {\r\n    PMenu.style.display = \"none\";\r\n  }\r\n});\r\n\r\nvar listIndex = 0;\r\nconst addPBtn = document.querySelector(\"#addProject\");\r\naddPBtn.addEventListener(\"click\", function () {\r\n  const PName = document.querySelector(\"#PName\").value;\r\n  const obj = (0,_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(listIndex, PName);\r\n  _projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].projectList.push(obj);\r\n  listIndex++;\r\n  _projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].saveProjectsToStorage(_projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].projectList);\r\n  _projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayProjects(_projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].projectList);\r\n});\r\n\r\nconst addTBtn = document.querySelector(\"#addTask\");\r\naddTBtn.addEventListener(\"click\", function () {\r\n  const form = document.querySelector(\".form\");\r\n  form.setAttribute(\"isTask\", 0);\r\n  document.querySelector(\".form-title\").textContent = \"Add a Task\";\r\n  if (form.style.display !== \"flex\") {\r\n    form.style.display = \"flex\";\r\n  }\r\n});\r\n\r\nconst hideBtn = document.querySelector(\"#hide\");\r\nhideBtn.addEventListener(\"click\", function () {\r\n  const form = document.querySelector(\".form\");\r\n  if (form.style.display !== \"none\") {\r\n    form.style.display = \"none\";\r\n  }\r\n});\r\n\r\nconst finishBtn = document.querySelector(\"#finish\");\r\nfinishBtn.addEventListener(\"click\", function () {\r\n  const title = document.querySelector(\"#title\").value;\r\n  const radio = document.querySelector('input[name=\"priority\"]:checked').value;\r\n  const dueDate = document.querySelector(\"#date\").value;\r\n  const desc = document.querySelector(\"#desc\").value;\r\n\r\n  if ((0,_checkInput__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(title)) return;\r\n  if ((0,_checkInput__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(desc)) return;\r\n  if ((0,_checkInput__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(dueDate)) return;\r\n  if ((0,_checkInput__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(radio)) return;\r\n\r\n  if (document.querySelector(\".form\").getAttribute(\"isTask\") == 0) {\r\n    const obj = (0,_to_do__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(title, desc, dueDate, radio);\r\n    const index = document.querySelector(\".form\").getAttribute(\"data-index\");\r\n    _projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].projectList[index].taskList.push(obj);\r\n    const taskContainer = document.querySelector(\".task-container\");\r\n    taskContainer.innerHTML = \"\";\r\n    const Ptitle = document.querySelector(\".task-title\");\r\n    Ptitle.textContent = _projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].projectList[index].name;\r\n    (0,_displayTask__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(index);\r\n  }\r\n  if (document.querySelector(\".form\").getAttribute(\"isTask\") == 1) {\r\n    const index = document.querySelector(\".form\").getAttribute(\"data-index\");\r\n    const obj =\r\n      _projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].projectList[index].taskList[\r\n        document.querySelector(\".form\").getAttribute(\"data-todo\")\r\n      ];\r\n    obj.title = title;\r\n    obj.priority = radio;\r\n    obj.dueDate = dueDate;\r\n    obj.description = desc;\r\n\r\n    const taskContainer = document.querySelector(\".task-container\");\r\n    taskContainer.innerHTML = \"\";\r\n    (0,_displayTask__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(index);\r\n  }\r\n});\r\n\r\ndocument.addEventListener(\"keydown\", function (e) {\r\n  if (e.key == \"c\") {\r\n    console.log(\"pressed\");\r\n    localStorage.clear();\r\n  }\r\n  return;\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst list = (index, name) => {\r\n  const taskList = [];\r\n  return {\r\n    index: index,\r\n    name: name,\r\n    taskList,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/list.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Images_list_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Images/list.png */ \"./Images/list.png\");\n/* harmony import */ var _displayTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTask */ \"./src/displayTask.js\");\n\r\n\r\nconst projects = (() => {\r\n  const projectList = loadProjectsFromStorage();\r\n\r\n  function loadProjectsFromStorage() {\r\n    if (localStorage.getItem(\"projectList\")) {\r\n      return JSON.parse(localStorage.getItem(\"projectList\"));\r\n    }\r\n    return [];\r\n  }\r\n\r\n  function saveProjectsToStorage(projectList) {\r\n    localStorage.setItem(\"projectList\", JSON.stringify(projectList));\r\n  }\r\n\r\n  function displayProjects(projectList) {\r\n    const Container = document.querySelector(\".projects\");\r\n    Container.innerHTML = \"\";\r\n    if (projectList == null) {\r\n      Container.innerHTML = \"\";\r\n      return;\r\n    }\r\n    for (let i = 0; i < projectList.length; i++) {\r\n      const card = document.createElement(\"div\");\r\n      card.classList.add(\"card\");\r\n      card.setAttribute(\"data-index\", i);\r\n\r\n      const img = document.createElement(\"img\");\r\n      img.setAttribute(\"alt\", \"list\");\r\n      img.src = _Images_list_png__WEBPACK_IMPORTED_MODULE_0__;\r\n      const text = document.createElement(\"div\");\r\n      text.textContent = projectList[i].name;\r\n      const deletebtn = document.createElement(\"button\");\r\n      deletebtn.textContent = \"X\";\r\n      deletebtn.setAttribute(\"id\", \"deletebtn\");\r\n      deletebtn.addEventListener(\"click\", function () {\r\n        let index = card.getAttribute(\"data-index\");\r\n        projects.projectList.splice(index, 1);\r\n        if (projects.projectList.length < 1) {\r\n          document.querySelector(\".task-title\").textContent = \"\";\r\n          document.querySelector(\"#addTask\").style.display = \"none\";\r\n          document.querySelector(\".task-container\").innerHTML = \"\";\r\n        }\r\n        displayProjects(projectList);\r\n      });\r\n\r\n      card.appendChild(img);\r\n      card.appendChild(text);\r\n      card.appendChild(deletebtn);\r\n\r\n      card.addEventListener(\"click\", function () {\r\n        const taskContainer = document.querySelector(\".task-container\");\r\n        taskContainer.innerHTML = \"\";\r\n        const title = document.querySelector(\".task-title\");\r\n        let index = card.getAttribute(\"data-index\");\r\n        document.querySelector(\".form\").setAttribute(\"data-index\", index);\r\n        title.textContent = projects.projectList[index].name;\r\n        (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index);\r\n        document.querySelector(\"#addTask\").style.display = \"flex\";\r\n        document.querySelector(\".form\").style.display = \"none\";\r\n      });\r\n\r\n      Container.appendChild(card);\r\n    }\r\n  }\r\n  return {\r\n    projectList,\r\n    displayProjects: displayProjects,\r\n    loadProjectsFromStorage: loadProjectsFromStorage,\r\n    saveProjectsToStorage: saveProjectsToStorage,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/projects.js?");

/***/ }),

/***/ "./src/to-do.js":
/*!**********************!*\
  !*** ./src/to-do.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ToDo = (title, description, dueDate, priority) => {\r\n  return {\r\n    title: title,\r\n    description: description,\r\n    dueDate: dueDate,\r\n    priority: priority,\r\n  };\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/to-do.js?");

/***/ }),

/***/ "./Images/calendar-today.png":
/*!***********************************!*\
  !*** ./Images/calendar-today.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"899c124a91cd23ad3512.png\";\n\n//# sourceURL=webpack://to-do-list/./Images/calendar-today.png?");

/***/ }),

/***/ "./Images/calendar-week.png":
/*!**********************************!*\
  !*** ./Images/calendar-week.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"890a64e4fb3dc5390dd5.png\";\n\n//# sourceURL=webpack://to-do-list/./Images/calendar-week.png?");

/***/ }),

/***/ "./Images/inbox.png":
/*!**************************!*\
  !*** ./Images/inbox.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5bec81957d92b545a6fb.png\";\n\n//# sourceURL=webpack://to-do-list/./Images/inbox.png?");

/***/ }),

/***/ "./Images/list.png":
/*!*************************!*\
  !*** ./Images/list.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a0669a162de6fab29e13.png\";\n\n//# sourceURL=webpack://to-do-list/./Images/list.png?");

/***/ }),

/***/ "./Images/logo.png":
/*!*************************!*\
  !*** ./Images/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"67794e19d6a8a96d68fb.png\";\n\n//# sourceURL=webpack://to-do-list/./Images/logo.png?");

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc2b5060f7accec5cf74.ttf\";\n\n//# sourceURL=webpack://to-do-list/./src/Roboto-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;