webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _utils_context_store_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/context/store/global */ \"./utils/context/store/global/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yahya/Desktop/Javascript/nexyjschallenge/testNextJS/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  // TODO: Create local state for first name which will change only on this page. It should also be able to update with global state.\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"Serkan\"),\n      newFirstName = _useState[0],\n      setnewFirstName = _useState[1];\n\n  var _useGlobal = Object(_utils_context_store_global__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      _useGlobal2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useGlobal, 2),\n      globalState = _useGlobal2[0],\n      globalActions = _useGlobal2[1];\n\n  var _globalState$user = globalState.user,\n      name_first = _globalState$user.name_first,\n      name_last = _globalState$user.name_last;\n  /** TODO: Change first or last name which should show across website.\n   * i.e. Create text field that will change global state ALSO with local state on this page.\n   *\n   * This is a small example on how globalActions should be used.*/\n\n  var handleNameChange = function handleNameChange(event) {\n    var value = event.target.value;\n    globalActions.user.updateUser(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, value));\n  }; // TODO: Create useEffect to change the last name ONCE upon showing this page.\n\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, \"Hello World!\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"Name: \", name_first, \", \", name_last), __jsx(\"label\", {\n    htmlFor: \"name_change\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Change name: \"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"name_change\",\n    name: \"name_first\",\n    onChange: handleNameChange,\n    autoComplete: \"off\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Home, \"BnoTyHCGtkqLCDOqbQ0IQpV2384=\", false, function () {\n  return [_utils_context_store_global__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJuZXdGaXJzdE5hbWUiLCJzZXRuZXdGaXJzdE5hbWUiLCJ1c2VHbG9iYWwiLCJnbG9iYWxTdGF0ZSIsImdsb2JhbEFjdGlvbnMiLCJ1c2VyIiwibmFtZV9maXJzdCIsIm5hbWVfbGFzdCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwidXBkYXRlVXNlciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCO0FBRGlCLGtCQUV1QkMsc0RBQVEsQ0FBQyxRQUFELENBRi9CO0FBQUEsTUFFVkMsWUFGVTtBQUFBLE1BRUlDLGVBRko7O0FBQUEsbUJBSW9CQywyRUFBUyxFQUo3QjtBQUFBO0FBQUEsTUFJVkMsV0FKVTtBQUFBLE1BSUdDLGFBSkg7O0FBQUEsMEJBT2JELFdBUGEsQ0FNZkUsSUFOZTtBQUFBLE1BTVBDLFVBTk8scUJBTVBBLFVBTk87QUFBQSxNQU1LQyxTQU5MLHFCQU1LQSxTQU5MO0FBU2pCO0FBQ0Y7QUFDQTtBQUNBOztBQUNFLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLFFBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFELEtBQTNCO0FBQ0FOLGlCQUFhLENBQUNDLElBQWQsQ0FBbUJPLFVBQW5CLCtGQUFpQ0gsS0FBSyxDQUFDRSxNQUFOLENBQWFFLElBQTlDLEVBQXFESCxLQUFyRDtBQUNELEdBSEQsQ0FiaUIsQ0FrQmpCOzs7QUFFQSxTQUNFLG1FQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDU0osVUFEVCxRQUN1QkMsU0FEdkIsQ0FIRixFQU1FO0FBQU8sV0FBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixFQU9FO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxNQUFFLEVBQUMsYUFGTDtBQUdFLFFBQUksRUFBQyxZQUhQO0FBSUUsWUFBUSxFQUFFQyxnQkFKWjtBQUtFLGdCQUFZLEVBQUMsS0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERjtBQWlCRCxDQXJDRDs7R0FBTVYsSTtVQUlpQ0ksbUU7OztLQUpqQ0osSTtBQXVDU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHVzZUdsb2JhbCBmcm9tIFwiLi4vdXRpbHMvY29udGV4dC9zdG9yZS9nbG9iYWxcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgLy8gVE9ETzogQ3JlYXRlIGxvY2FsIHN0YXRlIGZvciBmaXJzdCBuYW1lIHdoaWNoIHdpbGwgY2hhbmdlIG9ubHkgb24gdGhpcyBwYWdlLiBJdCBzaG91bGQgYWxzbyBiZSBhYmxlIHRvIHVwZGF0ZSB3aXRoIGdsb2JhbCBzdGF0ZS5cbiAgY29uc3QgW25ld0ZpcnN0TmFtZSwgc2V0bmV3Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiU2Vya2FuXCIpO1xuXG4gIGNvbnN0IFtnbG9iYWxTdGF0ZSwgZ2xvYmFsQWN0aW9uc10gPSB1c2VHbG9iYWwoKTtcbiAgY29uc3Qge1xuICAgIHVzZXI6IHsgbmFtZV9maXJzdCwgbmFtZV9sYXN0IH0sXG4gIH0gPSBnbG9iYWxTdGF0ZTtcblxuICAvKiogVE9ETzogQ2hhbmdlIGZpcnN0IG9yIGxhc3QgbmFtZSB3aGljaCBzaG91bGQgc2hvdyBhY3Jvc3Mgd2Vic2l0ZS5cbiAgICogaS5lLiBDcmVhdGUgdGV4dCBmaWVsZCB0aGF0IHdpbGwgY2hhbmdlIGdsb2JhbCBzdGF0ZSBBTFNPIHdpdGggbG9jYWwgc3RhdGUgb24gdGhpcyBwYWdlLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc21hbGwgZXhhbXBsZSBvbiBob3cgZ2xvYmFsQWN0aW9ucyBzaG91bGQgYmUgdXNlZC4qL1xuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgZ2xvYmFsQWN0aW9ucy51c2VyLnVwZGF0ZVVzZXIoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICAvLyBUT0RPOiBDcmVhdGUgdXNlRWZmZWN0IHRvIGNoYW5nZSB0aGUgbGFzdCBuYW1lIE9OQ0UgdXBvbiBzaG93aW5nIHRoaXMgcGFnZS5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8aDE+SGVsbG8gV29ybGQhPC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBOYW1lOiB7bmFtZV9maXJzdH0sIHtuYW1lX2xhc3R9XG4gICAgICA8L3A+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVfY2hhbmdlXCI+Q2hhbmdlIG5hbWU6IDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD1cIm5hbWVfY2hhbmdlXCJcbiAgICAgICAgbmFtZT1cIm5hbWVfZmlyc3RcIlxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX1cbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})