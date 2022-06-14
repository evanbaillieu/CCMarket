(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.tsx":
/*!***************************!*\
  !*** ./assets/js/app.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _view_Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/Posts */ "./assets/js/view/Posts.tsx");
/* harmony import */ var _view_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/Users */ "./assets/js/view/Users.tsx");
/* harmony import */ var _view_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/Home */ "./assets/js/view/Home.tsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './scss/main.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _view_Header_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/Header/Navbar/Navbar */ "./assets/js/view/Header/Navbar/Navbar.tsx");
/* harmony import */ var _view_Footer_Navbar_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/Footer/Navbar/Footer */ "./assets/js/view/Footer/Navbar/Footer.tsx");










var App = function App() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_Header_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_Footer_Navbar_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/users",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_Users__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/posts",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_Posts__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/js/components/lang.tsx":
/*!***************************************!*\
  !*** ./assets/js/components/lang.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _constant_Type_lang__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constant/Type/lang */ "./assets/js/constant/Type/lang.ts");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }





var Lang = function Lang(_ref) {
  _objectDestructuringEmpty(_ref);

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)(),
      i18n = _useTranslation.i18n;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(i18n.language),
      _useState2 = _slicedToArray(_useState, 2),
      lang = _useState2[0],
      setLang = _useState2[1];

  var changeLanguage = function changeLanguage(event) {
    var language = event.target.value;

    switch (language) {
      case _constant_Type_lang__WEBPACK_IMPORTED_MODULE_13__.Language.EN:
        setLang(_constant_Type_lang__WEBPACK_IMPORTED_MODULE_13__.Language.EN);
        i18n.changeLanguage(_constant_Type_lang__WEBPACK_IMPORTED_MODULE_13__.Language.EN);
        break;

      case _constant_Type_lang__WEBPACK_IMPORTED_MODULE_13__.Language.FR:
      default:
        setLang(_constant_Type_lang__WEBPACK_IMPORTED_MODULE_13__.Language.FR);
        i18n.changeLanguage(_constant_Type_lang__WEBPACK_IMPORTED_MODULE_13__.Language.FR);
        break;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("select", {
    value: lang,
    name: "language",
    onChange: changeLanguage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("option", {
    value: _constant_Type_lang__WEBPACK_IMPORTED_MODULE_13__.Language.FR
  }, "FR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("option", {
    value: _constant_Type_lang__WEBPACK_IMPORTED_MODULE_13__.Language.EN
  }, "EN"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lang);

/***/ }),

/***/ "./assets/js/constant/Type/lang.ts":
/*!*****************************************!*\
  !*** ./assets/js/constant/Type/lang.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Language": () => (/* binding */ Language)
/* harmony export */ });
var Language;

(function (Language) {
  Language["FR"] = "fr";
  Language["EN"] = "en";
})(Language || (Language = {}));

/***/ }),

/***/ "./assets/js/i18n.ts":
/*!***************************!*\
  !*** ./assets/js/i18n.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-browser-languagedetector */ "./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");
/* harmony import */ var _constant_Type_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant/Type/lang */ "./assets/js/constant/Type/lang.ts");
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang/en */ "./assets/js/lang/en.ts");
/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang/fr */ "./assets/js/lang/fr.ts");






var defaultLanguage = _constant_Type_lang__WEBPACK_IMPORTED_MODULE_2__.Language.FR; // the translations

var resources = {
  en: {
    translation: _lang_en__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  fr: {
    translation: _lang_fr__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
};
i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__["default"]).use(react_i18next__WEBPACK_IMPORTED_MODULE_5__.initReactI18next) // passes i18n down to react-i18next
.init({
  resources: resources,
  lng: defaultLanguage,
  keySeparator: '.',
  interpolation: {
    escapeValue: false // react already safes from xss

  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./assets/js/index.tsx":
/*!*****************************!*\
  !*** ./assets/js/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query/devtools */ "./node_modules/react-query/devtools/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./assets/js/app.tsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n */ "./assets/js/i18n.ts");







var queryClient = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
var rootElement = document.getElementById('root');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(rootElement);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {
  client: queryClient
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_app__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_query_devtools__WEBPACK_IMPORTED_MODULE_0__.ReactQueryDevtools, {
  initialIsOpen: false
}))));

/***/ }),

/***/ "./assets/js/lang/en.ts":
/*!******************************!*\
  !*** ./assets/js/lang/en.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var data = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    jobs: 'Jobs'
  },
  post: 'no new post',
  users: 'welcomes young users'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./assets/js/lang/fr.ts":
/*!******************************!*\
  !*** ./assets/js/lang/fr.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var data = {
  nav: {
    home: 'Accuile',
    projects: 'Projects',
    jobs: 'Poste'
  },
  post: 'pas de nouveau post',
  users: 'bienvenue jeune utilisateur'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./assets/js/view/Footer/Navbar/Footer.tsx":
/*!*************************************************!*\
  !*** ./assets/js/view/Footer/Navbar/Footer.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");



var Footer = function Footer() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "nav_footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav_item"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav_item"
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav_item"
  }, "Jobs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav_item"
  }, "My account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav_item"
  }, "Messaging"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "./svg/logo.svg",
    className: "logo_footer",
    alt: "logo_footer"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/js/view/Header/Navbar/Navbar.tsx":
/*!*************************************************!*\
  !*** ./assets/js/view/Header/Navbar/Navbar.tsx ***!
  \*************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: /Users/RueenZAMAN/pro/assets/js/view/Header/Navbar/Navbar.tsx: Cannot find module './svg/logoHeader.svg' from '/Users/RueenZAMAN/pro/assets/js/view/Header/Navbar'\n    at Function.resolveSync [as sync] (/Users/RueenZAMAN/pro/node_modules/resolve/lib/sync.js:111:15)\n    at applyPlugin (/Users/RueenZAMAN/pro/node_modules/babel-plugin-inline-react-svg/lib/index.js:98:41)\n    at PluginPass.ImportDeclaration (/Users/RueenZAMAN/pro/node_modules/babel-plugin-inline-react-svg/lib/index.js:201:11)\n    at newFn (/Users/RueenZAMAN/pro/node_modules/@babel/traverse/lib/visitors.js:177:21)\n    at NodePath._call (/Users/RueenZAMAN/pro/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/Users/RueenZAMAN/pro/node_modules/@babel/traverse/lib/path/context.js:40:17)\n    at NodePath.visit (/Users/RueenZAMAN/pro/node_modules/@babel/traverse/lib/path/context.js:100:31)\n    at TraversalContext.visitQueue (/Users/RueenZAMAN/pro/node_modules/@babel/traverse/lib/context.js:103:16)\n    at TraversalContext.visitMultiple (/Users/RueenZAMAN/pro/node_modules/@babel/traverse/lib/context.js:72:17)\n    at TraversalContext.visit (/Users/RueenZAMAN/pro/node_modules/@babel/traverse/lib/context.js:129:19)");

/***/ }),

/***/ "./assets/js/view/Home.tsx":
/*!*********************************!*\
  !*** ./assets/js/view/Home.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/lang */ "./assets/js/components/lang.tsx");
/* harmony import */ var _img_test_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/test.png */ "./assets/js/img/test.png");




var Logo = function Logo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M25.36 42.176c-3.831 0-7.523-1.26-10.57-3.638-3.57-2.787-5.825-6.776-6.347-11.232-.522-4.456.75-8.845 3.582-12.36 2.832-3.513 6.885-5.732 11.413-6.246l.463 3.944c-3.457.392-6.552 2.086-8.715 4.77-2.162 2.682-3.133 6.035-2.734 9.438.398 3.402 2.12 6.448 4.846 8.576 2.727 2.13 6.133 3.084 9.59 2.693l.463 3.943c-.665.075-1.33.113-1.99.113l-.001-.001Z",
    fill: "#F05454"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M25.373 49.825c-12.71 0-23.713-9.407-25.204-22.126C-1.436 14.013 8.574 1.592 22.483.013l.23-.013h14.782v21.896l-7.346 8.412c-2.344 2.535-6.348 2.72-8.924.413a6.136 6.136 0 0 1-2.058-4.305 6.118 6.118 0 0 1 1.637-4.477l2.983 2.671a2.224 2.224 0 0 0 .152 3.176c.926.828 2.36.768 3.211-.132l6.312-7.23V3.97H22.833C11.193 5.352 2.831 15.77 4.177 27.245 5.527 38.757 16.14 47.04 27.84 45.715l.463 3.943a25.85 25.85 0 0 1-2.93.167Z",
    fill: "#F05454"
  }));
};

Logo.defaultProps = {
  width: "38",
  height: "50",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
 //import { render } from 'react-dom';

var Home = function Home() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Logo, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_test_png__WEBPACK_IMPORTED_MODULE_2__,
    height: "50px",
    width: '50px'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_lang__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre_1"
  }, t('nav.titre1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre_2"
  }, t('nav.titre2'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home_bady"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "The platform that connects contributors and open source project owners"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Le Lorem Ipsum est simplement du faux texte employ\xE9 dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l`imprimerie depuis les ann\xE9es 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour r\xE9aliser un livre sp\xE9cimen de polices de texte. Il n`a pas fait que survivre cinq si\xE8cles,")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/",
    className: "button"
  }, "Get started", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/js/view/Posts.tsx":
/*!**********************************!*\
  !*** ./assets/js/view/Posts.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");



var Posts = function Posts() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, t('post'), " test");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);

/***/ }),

/***/ "./assets/js/view/Users.tsx":
/*!**********************************!*\
  !*** ./assets/js/view/Users.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");


function Users() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, t('users'));
}

/***/ }),

/***/ "./assets/js/img/test.png":
/*!********************************!*\
  !*** ./assets/js/img/test.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/test.a1950cc4.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-029e38"], () => (__webpack_exec__("./assets/js/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YkosQ0FESixDQURKLENBUkosQ0FESjtBQWdDSCxDQWxDRDs7QUFvQ0EsaUVBQWVNLElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBOztBQUVBLElBQU1GLEtBQUssR0FBTyxTQUFaQSxLQUFZLEdBQUs7RUFDbkIsc0JBQWNELDZEQUFjLEVBQTVCO0VBQUEsSUFBUU8sQ0FBUixtQkFBUUEsQ0FBUjs7RUFDQSxvQkFBT1YsMERBQUFBLGNBQU1VLENBQUMsQ0FBQyxNQUFELENBQVAsVUFBUDtBQUNILENBSEQ7O0FBSUEsaUVBQWVOLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFFYyxTQUFVQyxLQUFWLEdBQWU7RUFDekIsc0JBQWNGLDZEQUFjLEVBQTVCO0VBQUEsSUFBUU8sQ0FBUixtQkFBUUEsQ0FBUjs7RUFDQSxvQkFBT1YsMERBQUFBLGNBQU1VLENBQUMsQ0FBQyxPQUFELENBQVAsQ0FBUDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbGFuZy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnN0YW50L1R5cGUvbGFuZy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaTE4bi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sYW5nL2VuLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sYW5nL2ZyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92aWV3L0Zvb3Rlci9OYXZiYXIvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmlldy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmlldy9Qb3N0cy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZpZXcvVXNlcnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIFJvdXRlLCBSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgUG9zdHMgZnJvbSAnLi92aWV3L1Bvc3RzJztcbmltcG9ydCBVc2VycyBmcm9tICcuL3ZpZXcvVXNlcnMnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3L0hvbWUnO1xuaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi92aWV3L0hlYWRlci9OYXZiYXIvTmF2YmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi92aWV3L0Zvb3Rlci9OYXZiYXIvRm9vdGVyJztcblxuY29uc3QgQXBwOiBGQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgICAgICAgICAgICA8SG9tZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi91c2Vyc1wiIGVsZW1lbnQ9ezxVc2VycyAvPn0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb3N0c1wiIGVsZW1lbnQ9ezxQb3N0cyAvPn0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL2NvbnN0YW50L1R5cGUvbGFuZyc7XG5cbmNvbnN0IExhbmcgPSAoe30pID0+IHtcbiAgICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgW2xhbmcsIHNldExhbmddID0gdXNlU3RhdGU8TGFuZ3VhZ2U+KGkxOG4ubGFuZ3VhZ2UgYXMgTGFuZ3VhZ2UpO1xuXG4gICAgY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCBsYW5ndWFnZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlLkVOOlxuICAgICAgICAgICAgICAgIHNldExhbmcoTGFuZ3VhZ2UuRU4pO1xuICAgICAgICAgICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoTGFuZ3VhZ2UuRU4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZS5GUjpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc2V0TGFuZyhMYW5ndWFnZS5GUik7XG4gICAgICAgICAgICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShMYW5ndWFnZS5GUik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bGFuZ30gbmFtZT1cImxhbmd1YWdlXCIgb25DaGFuZ2U9e2NoYW5nZUxhbmd1YWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17TGFuZ3VhZ2UuRlJ9PkZSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0xhbmd1YWdlLkVOfT5FTjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5nO1xuIiwiZXhwb3J0IGVudW0gTGFuZ3VhZ2Uge1xuICAgIEZSID0gJ2ZyJyxcbiAgICBFTiA9ICdlbicsXG59XG5cbmV4cG9ydCB0eXBlIFRyYW5zbGF0aW9uRm9ybWF0ID0ge1xuICAgIG5hdjoge1xuICAgICAgICBob21lOiBzdHJpbmc7XG4gICAgICAgIHByb2plY3RzOiBzdHJpbmc7XG4gICAgICAgIGpvYnM6IHN0cmluZztcbiAgICB9O1xuICAgIHBvc3Q6IHN0cmluZztcbiAgICB1c2Vyczogc3RyaW5nO1xufTtcbiIsImltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IExhbmd1YWdlRGV0ZWN0b3IgZnJvbSAnaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3InO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuL2NvbnN0YW50L1R5cGUvbGFuZyc7XG5pbXBvcnQgdHJhbnNsYXRpb25FTiBmcm9tICcuL2xhbmcvZW4nO1xuaW1wb3J0IHRyYW5zbGF0aW9uRlIgZnJvbSAnLi9sYW5nL2ZyJztcblxuY29uc3QgZGVmYXVsdExhbmd1YWdlID0gTGFuZ3VhZ2UuRlI7XG5cbi8vIHRoZSB0cmFuc2xhdGlvbnNcbmNvbnN0IHJlc291cmNlcyA9IHtcbiAgICBlbjoge1xuICAgICAgICB0cmFuc2xhdGlvbjogdHJhbnNsYXRpb25FTixcbiAgICB9LFxuICAgIGZyOiB7XG4gICAgICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbkZSLFxuICAgIH0sXG59O1xuXG5pMThuLnVzZShMYW5ndWFnZURldGVjdG9yKVxuICAgIC51c2UoaW5pdFJlYWN0STE4bmV4dCkgLy8gcGFzc2VzIGkxOG4gZG93biB0byByZWFjdC1pMThuZXh0XG4gICAgLmluaXQoe1xuICAgICAgICByZXNvdXJjZXMsXG4gICAgICAgIGxuZzogZGVmYXVsdExhbmd1YWdlLFxuXG4gICAgICAgIGtleVNlcGFyYXRvcjogJy4nLCAvLyB0byBzdXBwb3J0IG5lc3RlZCB0cmFuc2xhdGlvbnNcblxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsIC8vIHJlYWN0IGFscmVhZHkgc2FmZXMgZnJvbSB4c3NcbiAgICAgICAgfSxcbiAgICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgaTE4bjtcbiIsImltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gJ3JlYWN0LXF1ZXJ5L2RldnRvb2xzJztcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCAnLi9pMThuJztcbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChyb290RWxlbWVudCEpO1xucm9vdC5yZW5kZXIoXG4gICAgPFJvdXRlcj5cbiAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICA8UmVhY3RRdWVyeURldnRvb2xzIGluaXRpYWxJc09wZW49e2ZhbHNlfSAvPlxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC9Sb3V0ZXI+LFxuKTtcbiIsImltcG9ydCB7IFRyYW5zbGF0aW9uRm9ybWF0IH0gZnJvbSAnLi4vY29uc3RhbnQvVHlwZS9sYW5nJztcbmNvbnN0IGRhdGE6IFRyYW5zbGF0aW9uRm9ybWF0ID0ge1xuICAgIG5hdjoge1xuICAgICAgICBob21lOiAnSG9tZScsXG4gICAgICAgIHByb2plY3RzOiAnUHJvamVjdHMnLFxuICAgICAgICBqb2JzOiAnSm9icycsXG4gICAgfSxcbiAgICBwb3N0OiAnbm8gbmV3IHBvc3QnLFxuICAgIHVzZXJzOiAnd2VsY29tZXMgeW91bmcgdXNlcnMnLFxufTtcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCJpbXBvcnQgeyBUcmFuc2xhdGlvbkZvcm1hdCB9IGZyb20gJy4uL2NvbnN0YW50L1R5cGUvbGFuZyc7XG5cbmNvbnN0IGRhdGE6IFRyYW5zbGF0aW9uRm9ybWF0ID0ge1xuICAgIG5hdjoge1xuICAgICAgICBob21lOiAnQWNjdWlsZScsXG4gICAgICAgIHByb2plY3RzOiAnUHJvamVjdHMnLFxuICAgICAgICBqb2JzOiAnUG9zdGUnLFxuICAgIH0sXG4gICAgcG9zdDogJ3BhcyBkZSBub3V2ZWF1IHBvc3QnLFxuICAgIHVzZXJzOiAnYmllbnZlbnVlIGpldW5lIHV0aWxpc2F0ZXVyJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5jb25zdCBGb290ZXI6IEZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZfZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X2l0ZW1cIj5Ib21lPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9pdGVtXCI+UHJvamVjdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X2l0ZW1cIj5Kb2JzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9pdGVtXCI+TXkgYWNjb3VudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfaXRlbVwiPk1lc3NhZ2luZzwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdmcvbG9nby5zdmdcIiBjbGFzc05hbWU9XCJsb2dvX2Zvb3RlclwiIGFsdD1cImxvZ29fZm9vdGVyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBMYW5nIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi9zdmcvbG9nby5zdmcnO1xuaW1wb3J0IHRlc3QgZnJvbSAnLi4vaW1nL3Rlc3QucG5nJztcbi8vaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3QgSG9tZTogRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Rlc3R9IGhlaWdodD1cIjUwcHhcIiB3aWR0aD17JzUwcHgnfSAvPlxuICAgICAgICAgICAgPExhbmcgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdHJlXzFcIj57dCgnbmF2LnRpdHJlMScpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRyZV8yXCI+e3QoJ25hdi50aXRyZTInKX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZV9iYWR5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcGxhdGZvcm0gdGhhdCBjb25uZWN0cyBjb250cmlidXRvcnMgYW5kIG9wZW4gc291cmNlIHByb2plY3Qgb3duZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgTG9yZW0gSXBzdW0gZXN0IHNpbXBsZW1lbnQgZHUgZmF1eCB0ZXh0ZSBlbXBsb3nDqSBkYW5zIGxhIGNvbXBvc2l0aW9uIGV0IGxhIG1pc2UgZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSBhdmFudCBpbXByZXNzaW9uLiBMZSBMb3JlbSBJcHN1bSBlc3QgbGUgZmF1eCB0ZXh0ZSBzdGFuZGFyZCBkZSBsYGltcHJpbWVyaWUgZGVwdWlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlcyBhbm7DqWVzIDE1MDAsIHF1YW5kIHVuIGltcHJpbWV1ciBhbm9ueW1lIGFzc2VtYmxhIGVuc2VtYmxlIGRlcyBtb3JjZWF1eCBkZSB0ZXh0ZSBwb3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHLDqWFsaXNlciB1biBsaXZyZSBzcMOpY2ltZW4gZGUgcG9saWNlcyBkZSB0ZXh0ZS4gSWwgbmBhIHBhcyBmYWl0IHF1ZSBzdXJ2aXZyZSBjaW5xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpw6hjbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuY29uc3QgUG9zdHM6IEZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICByZXR1cm4gPGRpdj57dCgncG9zdCcpfSB0ZXN0PC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKCkge1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICByZXR1cm4gPGRpdj57dCgndXNlcnMnKX08L2Rpdj47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZSIsIlJvdXRlcyIsInVzZVRyYW5zbGF0aW9uIiwiUG9zdHMiLCJVc2VycyIsIkhvbWUiLCJOYXZiYXIiLCJGb290ZXIiLCJBcHAiLCJ0IiwiY2xhc3NOYW1lIiwicGF0aCIsImVsZW1lbnQiLCJ1c2VTdGF0ZSIsIkxhbmd1YWdlIiwiTGFuZyIsImkxOG4iLCJsYW5ndWFnZSIsImxhbmciLCJzZXRMYW5nIiwiY2hhbmdlTGFuZ3VhZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiRU4iLCJGUiIsIm5hbWUiLCJvbkNoYW5nZSIsImluaXRSZWFjdEkxOG5leHQiLCJMYW5ndWFnZURldGVjdG9yIiwidHJhbnNsYXRpb25FTiIsInRyYW5zbGF0aW9uRlIiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJyZXNvdXJjZXMiLCJlbiIsInRyYW5zbGF0aW9uIiwiZnIiLCJ1c2UiLCJpbml0IiwibG5nIiwia2V5U2VwYXJhdG9yIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwiUmVhY3RRdWVyeURldnRvb2xzIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiY3JlYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJxdWVyeUNsaWVudCIsInJvb3RFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJjbGllbnQiLCJpbml0aWFsSXNPcGVuIiwiZGF0YSIsIm5hdiIsImhvbWUiLCJwcm9qZWN0cyIsImpvYnMiLCJwb3N0IiwidXNlcnMiLCJzcmMiLCJhbHQiLCJMb2dvIiwidGVzdCIsImhlaWdodCIsIndpZHRoIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=