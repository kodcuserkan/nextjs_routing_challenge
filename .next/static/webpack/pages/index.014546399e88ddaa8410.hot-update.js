webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _utils_context_store_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context/store/global */ \"./utils/context/store/global/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yahya/Desktop/Javascript/nexyjschallenge/testNextJS/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  // TODO: Create local state for first name which will change only on this page. It should also be able to update with global state.\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      newFirstName = _useState[0],\n      setnewFirstName = _useState[1];\n\n  var _useGlobal = Object(_utils_context_store_global__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      _useGlobal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useGlobal, 2),\n      globalState = _useGlobal2[0],\n      globalActions = _useGlobal2[1];\n\n  var _globalState$user = globalState.user,\n      name_first = _globalState$user.name_first,\n      name_last = _globalState$user.name_last;\n  /** TODO: Change first or last name which should show across website. \n   * i.e. Create text field that will change global state ALSO with local state on this page.\n   * \n   * This is a small example on how globalActions should be used.*/\n  // const handleNameChange = (event) => {\n  //   const value = event.target.value\n  //   globalActions.user.updateUser({[event.target.name]:value});\n  // }\n  // TODO: Create useEffect to change the last name ONCE upon showing this page.\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }), __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, \"Hello World!\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, \"Name: \", newFirstName || name_first, \", \", name_last));\n};\n\n_s(Home, \"kT7LUly7Ck3OiZd91G06SoyuyTQ=\", false, function () {\n  return [_utils_context_store_global__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJuZXdGaXJzdE5hbWUiLCJzZXRuZXdGaXJzdE5hbWUiLCJ1c2VHbG9iYWwiLCJnbG9iYWxTdGF0ZSIsImdsb2JhbEFjdGlvbnMiLCJ1c2VyIiwibmFtZV9maXJzdCIsIm5hbWVfbGFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWpCO0FBRmlCLGtCQUd1QkMsc0RBQVEsQ0FBQyxFQUFELENBSC9CO0FBQUEsTUFHVkMsWUFIVTtBQUFBLE1BR0lDLGVBSEo7O0FBQUEsbUJBS29CQywyRUFBUyxFQUw3QjtBQUFBO0FBQUEsTUFLVkMsV0FMVTtBQUFBLE1BS0dDLGFBTEg7O0FBQUEsMEJBTTJCRCxXQU4zQixDQU1URSxJQU5TO0FBQUEsTUFNREMsVUFOQyxxQkFNREEsVUFOQztBQUFBLE1BTVdDLFNBTlgscUJBTVdBLFNBTlg7QUFRakI7QUFDRjtBQUNBO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVEsbUVBQ04sTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRE0sRUFFTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZNLEVBR047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFVUCxZQUFZLElBQUlNLFVBQTFCLFFBQXdDQyxTQUF4QyxDQUhNLENBQVI7QUFPRCxDQTFCRDs7R0FBTVQsSTtVQUtpQ0ksbUU7OztLQUxqQ0osSTtBQTZCU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHVzZUdsb2JhbCBmcm9tICcuLi91dGlscy9jb250ZXh0L3N0b3JlL2dsb2JhbCdcblxuXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgLy8gVE9ETzogQ3JlYXRlIGxvY2FsIHN0YXRlIGZvciBmaXJzdCBuYW1lIHdoaWNoIHdpbGwgY2hhbmdlIG9ubHkgb24gdGhpcyBwYWdlLiBJdCBzaG91bGQgYWxzbyBiZSBhYmxlIHRvIHVwZGF0ZSB3aXRoIGdsb2JhbCBzdGF0ZS5cbiAgY29uc3QgW25ld0ZpcnN0TmFtZSwgc2V0bmV3Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBcbiAgY29uc3QgW2dsb2JhbFN0YXRlLCBnbG9iYWxBY3Rpb25zXSA9IHVzZUdsb2JhbCgpO1xuICBjb25zdCB7IHVzZXI6IHsgbmFtZV9maXJzdCwgbmFtZV9sYXN0IH0gfSA9IGdsb2JhbFN0YXRlXG5cbiAgLyoqIFRPRE86IENoYW5nZSBmaXJzdCBvciBsYXN0IG5hbWUgd2hpY2ggc2hvdWxkIHNob3cgYWNyb3NzIHdlYnNpdGUuIFxuICAgKiBpLmUuIENyZWF0ZSB0ZXh0IGZpZWxkIHRoYXQgd2lsbCBjaGFuZ2UgZ2xvYmFsIHN0YXRlIEFMU08gd2l0aCBsb2NhbCBzdGF0ZSBvbiB0aGlzIHBhZ2UuXG4gICAqIFxuICAgKiBUaGlzIGlzIGEgc21hbGwgZXhhbXBsZSBvbiBob3cgZ2xvYmFsQWN0aW9ucyBzaG91bGQgYmUgdXNlZC4qLyBcbiAgLy8gY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAvLyAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gIC8vICAgZ2xvYmFsQWN0aW9ucy51c2VyLnVwZGF0ZVVzZXIoe1tldmVudC50YXJnZXQubmFtZV06dmFsdWV9KTtcbiAgLy8gfVxuXG4gIC8vIFRPRE86IENyZWF0ZSB1c2VFZmZlY3QgdG8gY2hhbmdlIHRoZSBsYXN0IG5hbWUgT05DRSB1cG9uIHNob3dpbmcgdGhpcyBwYWdlLlxuXG4gIHJldHVybiAoPD5cbiAgICA8SGVhZGVyIC8+XG4gICAgPGgxPkhlbGxvIFdvcmxkITwvaDE+XG4gICAgPHA+TmFtZToge25ld0ZpcnN0TmFtZSB8fCBuYW1lX2ZpcnN0fSwge25hbWVfbGFzdH08L3A+XG4gIDwvPlxuICApXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})