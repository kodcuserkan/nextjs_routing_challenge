webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _utils_context_store_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/context/store/global */ \"./utils/context/store/global/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yahya/Desktop/Javascript/nexyjschallenge/testNextJS/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  // TODO: Create local state for first name which will change only on this page. It should also be able to update with global state.\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Serkan\"),\n      newFirstName = _useState[0],\n      setnewFirstName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      newLastName = _useState2[0],\n      setnewLastName = _useState2[1];\n\n  var _useGlobal = Object(_utils_context_store_global__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      _useGlobal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useGlobal, 2),\n      globalState = _useGlobal2[0],\n      globalActions = _useGlobal2[1];\n\n  var _globalState$user = globalState.user,\n      name_first = _globalState$user.name_first,\n      name_last = _globalState$user.name_last;\n  /** TODO: Change first or last name which should show across website.\n   * i.e. Create text field that will change global state ALSO with local state on this page.\n   *\n   * This is a small example on how globalActions should be used.*/\n\n  var handleNameChange = function handleNameChange(event) {\n    var value = event.target.value;\n    globalActions.user.updateUser(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, value));\n  }; // TODO: Create useEffect to change the last name ONCE upon showing this page.\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setnewLastName(\"Akman\");\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, \"Hello World!\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"Name: \", newFirstName || name_first, \", \", newLastName || name_last), __jsx(\"label\", {\n    htmlFor: \"name_change\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, \"Change name: \"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"name_change\",\n    name: \"name_first\",\n    onChange: handleNameChange,\n    autoComplete: \"off\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Home, \"TlS29RDSk8+L5d5CAeGthdy8vSc=\", false, function () {\n  return [_utils_context_store_global__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJuZXdGaXJzdE5hbWUiLCJzZXRuZXdGaXJzdE5hbWUiLCJuZXdMYXN0TmFtZSIsInNldG5ld0xhc3ROYW1lIiwidXNlR2xvYmFsIiwiZ2xvYmFsU3RhdGUiLCJnbG9iYWxBY3Rpb25zIiwidXNlciIsIm5hbWVfZmlyc3QiLCJuYW1lX2xhc3QiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInVwZGF0ZVVzZXIiLCJuYW1lIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQjtBQURpQixrQkFFdUJDLHNEQUFRLENBQUMsUUFBRCxDQUYvQjtBQUFBLE1BRVZDLFlBRlU7QUFBQSxNQUVJQyxlQUZKOztBQUFBLG1CQUdxQkYsc0RBQVEsQ0FBQyxFQUFELENBSDdCO0FBQUEsTUFHVkcsV0FIVTtBQUFBLE1BR0dDLGNBSEg7O0FBQUEsbUJBS29CQywyRUFBUyxFQUw3QjtBQUFBO0FBQUEsTUFLVkMsV0FMVTtBQUFBLE1BS0dDLGFBTEg7O0FBQUEsMEJBUWJELFdBUmEsQ0FPZkUsSUFQZTtBQUFBLE1BT1BDLFVBUE8scUJBT1BBLFVBUE87QUFBQSxNQU9LQyxTQVBMLHFCQU9LQSxTQVBMO0FBVWpCO0FBQ0Y7QUFDQTtBQUNBOztBQUNFLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLFFBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFELEtBQTNCO0FBQ0FOLGlCQUFhLENBQUNDLElBQWQsQ0FBbUJPLFVBQW5CLCtGQUFpQ0gsS0FBSyxDQUFDRSxNQUFOLENBQWFFLElBQTlDLEVBQXFESCxLQUFyRDtBQUNELEdBSEQsQ0FkaUIsQ0FtQmpCOzs7QUFFQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2RiLGtCQUFjLENBQUMsT0FBRCxDQUFkO0FBQ0QsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUlBLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNVSCxZQUFZLElBQUlRLFVBRDFCLFFBQ3dDTixXQUFXLElBQUlPLFNBRHZELENBSEYsRUFNRTtBQUFPLFdBQU8sRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsRUFPRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsTUFBRSxFQUFDLGFBRkw7QUFHRSxRQUFJLEVBQUMsWUFIUDtBQUlFLFlBQVEsRUFBRUMsZ0JBSlo7QUFLRSxnQkFBWSxFQUFDLEtBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREY7QUFpQkQsQ0ExQ0Q7O0dBQU1aLEk7VUFLaUNNLG1FOzs7S0FMakNOLEk7QUE0Q1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCB1c2VHbG9iYWwgZnJvbSBcIi4uL3V0aWxzL2NvbnRleHQvc3RvcmUvZ2xvYmFsXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIC8vIFRPRE86IENyZWF0ZSBsb2NhbCBzdGF0ZSBmb3IgZmlyc3QgbmFtZSB3aGljaCB3aWxsIGNoYW5nZSBvbmx5IG9uIHRoaXMgcGFnZS4gSXQgc2hvdWxkIGFsc28gYmUgYWJsZSB0byB1cGRhdGUgd2l0aCBnbG9iYWwgc3RhdGUuXG4gIGNvbnN0IFtuZXdGaXJzdE5hbWUsIHNldG5ld0ZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlNlcmthblwiKTtcbiAgY29uc3QgW25ld0xhc3ROYW1lLCBzZXRuZXdMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbZ2xvYmFsU3RhdGUsIGdsb2JhbEFjdGlvbnNdID0gdXNlR2xvYmFsKCk7XG4gIGNvbnN0IHtcbiAgICB1c2VyOiB7IG5hbWVfZmlyc3QsIG5hbWVfbGFzdCB9LFxuICB9ID0gZ2xvYmFsU3RhdGU7XG5cbiAgLyoqIFRPRE86IENoYW5nZSBmaXJzdCBvciBsYXN0IG5hbWUgd2hpY2ggc2hvdWxkIHNob3cgYWNyb3NzIHdlYnNpdGUuXG4gICAqIGkuZS4gQ3JlYXRlIHRleHQgZmllbGQgdGhhdCB3aWxsIGNoYW5nZSBnbG9iYWwgc3RhdGUgQUxTTyB3aXRoIGxvY2FsIHN0YXRlIG9uIHRoaXMgcGFnZS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNtYWxsIGV4YW1wbGUgb24gaG93IGdsb2JhbEFjdGlvbnMgc2hvdWxkIGJlIHVzZWQuKi9cbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGdsb2JhbEFjdGlvbnMudXNlci51cGRhdGVVc2VyKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgLy8gVE9ETzogQ3JlYXRlIHVzZUVmZmVjdCB0byBjaGFuZ2UgdGhlIGxhc3QgbmFtZSBPTkNFIHVwb24gc2hvd2luZyB0aGlzIHBhZ2UuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRuZXdMYXN0TmFtZShcIkFrbWFuXCIpO1xuICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxoMT5IZWxsbyBXb3JsZCE8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIE5hbWU6IHsgbmV3Rmlyc3ROYW1lIHx8IG5hbWVfZmlyc3R9LCB7bmV3TGFzdE5hbWUgfHwgbmFtZV9sYXN0fVxuICAgICAgPC9wPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lX2NoYW5nZVwiPkNoYW5nZSBuYW1lOiA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJuYW1lX2NoYW5nZVwiXG4gICAgICAgIG5hbWU9XCJuYW1lX2ZpcnN0XCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9XG4gICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})