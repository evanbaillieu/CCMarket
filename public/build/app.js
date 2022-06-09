"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.tsx":
/*!***************************!*\
  !*** ./assets/js/app.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./assets/js/styles/style.scss");
/* harmony import */ var _view_Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/Posts */ "./assets/js/view/Posts.tsx");
/* harmony import */ var _view_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/Users */ "./assets/js/view/Users.tsx");
/* harmony import */ var _view_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/Home */ "./assets/js/view/Home.tsx");








var App = function App() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    className: "navbar-brand",
    to: "/"
  }, " Symfony React Project "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "navbar-nav mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    className: "nav-link",
    to: "/posts"
  }, " Posts ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    className: "nav-link",
    to: "/users"
  }, " Users "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: '/',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_Home__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/users",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_Users__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/posts",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_Posts__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/js/components/lang.tsx":
/*!***************************************!*\
  !*** ./assets/js/components/lang.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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





var Lang = function Lang() {
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
  keySeparator: ".",
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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./assets/js/app.tsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n */ "./assets/js/i18n.ts");





var rootElement = document.getElementById('root');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement); // createRoot(container!) if you use TypeScript

root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./assets/js/lang/en.ts":
/*!******************************!*\
  !*** ./assets/js/lang/en.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var data = {
  nav: {
    titre1: "hello",
    titre2: "world"
  },
  post: "no new post",
  users: "welcomes young users"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./assets/js/lang/fr.ts":
/*!******************************!*\
  !*** ./assets/js/lang/fr.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var data = {
  nav: {
    titre1: "bonjour",
    titre2: "le monde"
  },
  post: "pas de nouveau post",
  users: "bienvenue jeune utilisateur"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./assets/js/view/Home.tsx":
/*!*********************************!*\
  !*** ./assets/js/view/Home.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./assets/js/styles/style.scss");
/* harmony import */ var _components_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/lang */ "./assets/js/components/lang.tsx");





var Home = function Home() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_lang__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, t("nav.titre1"), " ", t("nav.titre2")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/js/view/Posts.tsx":
/*!**********************************!*\
  !*** ./assets/js/view/Posts.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, t('post'));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);

/***/ }),

/***/ "./assets/js/view/Users.tsx":
/*!**********************************!*\
  !*** ./assets/js/view/Users.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./assets/js/styles/style.scss":
/*!*************************************!*\
  !*** ./assets/js/styles/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-f2dcf2"], () => (__webpack_exec__("./assets/js/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REY7QUFHRCxDQUxEOztBQU1BLGlFQUFlSixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFFYyxTQUFVQyxLQUFWLEdBQWU7RUFDM0Isc0JBQVlGLDZEQUFjLEVBQTFCO0VBQUEsSUFBT0ssQ0FBUCxtQkFBT0EsQ0FBUDs7RUFDQSxvQkFDRVQsMERBQUFBLGNBQU1TLENBQUMsQ0FBQyxPQUFELENBQVAsQ0FERjtBQUdEOzs7Ozs7Ozs7OztBQ1JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbGFuZy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnN0YW50L1R5cGUvbGFuZy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaTE4bi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sYW5nL2VuLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sYW5nL2ZyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92aWV3L0hvbWUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92aWV3L1Bvc3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmlldy9Vc2Vycy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0eWxlcy9zdHlsZS5zY3NzPzE4OTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgUm91dGUsIFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBQb3N0cyBmcm9tICcuL3ZpZXcvUG9zdHMnO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vdmlldy9Vc2Vycyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL3ZpZXcvSG9tZSc7XG5cbiAgICBcbmNvbnN0IEFwcDogRkMgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtcIm5hdmJhci1icmFuZFwifSB0bz17XCIvXCJ9PiBTeW1mb255IFJlYWN0IFByb2plY3QgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17XCJuYXYtbGlua1wifSB0bz17XCIvcG9zdHNcIn0+IFBvc3RzIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1wibmF2LWxpbmtcIn0gdG89e1wiL3VzZXJzXCJ9PiBVc2VycyA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyBlbGVtZW50PXs8SG9tZS8+fS8+XG4gICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdXNlcnNcIiBlbGVtZW50PXs8VXNlcnMvPn0gLz5cbiAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb3N0c1wiIGVsZW1lbnQ9ezxQb3N0cy8+fSAvPlxuICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG59XG4gICAgXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9jb25zdGFudC9UeXBlL2xhbmcnO1xuIFxuY29uc3QgTGFuZyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgW2xhbmcsIHNldExhbmddID0gdXNlU3RhdGU8TGFuZ3VhZ2U+KGkxOG4ubGFuZ3VhZ2UgYXMgTGFuZ3VhZ2UpO1xuIFxuICAgIGxldCBjaGFuZ2VMYW5ndWFnZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGxldCBsYW5ndWFnZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiBcbiAgICAgICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZS5FTjpcbiAgICAgICAgICAgICAgICBzZXRMYW5nKExhbmd1YWdlLkVOKTtcbiAgICAgICAgICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKExhbmd1YWdlLkVOKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2UuRlI6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNldExhbmcoTGFuZ3VhZ2UuRlIpO1xuICAgICAgICAgICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoTGFuZ3VhZ2UuRlIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2xhbmd9IG5hbWU9XCJsYW5ndWFnZVwiIG9uQ2hhbmdlPXtjaGFuZ2VMYW5ndWFnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0xhbmd1YWdlLkZSfT5GUjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtMYW5ndWFnZS5FTn0+RU48L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4gXG5leHBvcnQgZGVmYXVsdCBMYW5nOyIsImV4cG9ydCBlbnVtIExhbmd1YWdlIHtcbiAgICBGUiA9IFwiZnJcIixcbiAgICBFTiA9ICdlbidcbn1cblxuZXhwb3J0IHR5cGUgVHJhbnNsYXRpb25Gb3JtYXQgPXtcbiAgICBuYXYgOiB7XG4gICAgICAgIHRpdHJlMTogc3RyaW5nLFxuICAgICAgICB0aXRyZTI6IHN0cmluZ1xuICAgIH1cbiAgICBwb3N0IDogc3RyaW5nLFxuICAgIHVzZXJzIDogc3RyaW5nXG59IiwiaW1wb3J0IGkxOG4gZnJvbSBcImkxOG5leHRcIjtcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IExhbmd1YWdlRGV0ZWN0b3IgZnJvbSAnaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3InO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tIFwiLi9jb25zdGFudC9UeXBlL2xhbmdcIjtcbmltcG9ydCB0cmFuc2xhdGlvbkVOIGZyb20gJy4vbGFuZy9lbic7XG5pbXBvcnQgdHJhbnNsYXRpb25GUiBmcm9tICcuL2xhbmcvZnInO1xuIFxubGV0IGRlZmF1bHRMYW5ndWFnZSA9IExhbmd1YWdlLkZSO1xuIFxuLy8gdGhlIHRyYW5zbGF0aW9uc1xuY29uc3QgcmVzb3VyY2VzID0ge1xuICBlbjoge1xuICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbkVOXG4gIH0sXG4gIGZyOiB7XG4gICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uRlJcbiAgfVxufTtcbiBcbmkxOG5cbiAgLnVzZShMYW5ndWFnZURldGVjdG9yKVxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpIC8vIHBhc3NlcyBpMThuIGRvd24gdG8gcmVhY3QtaTE4bmV4dFxuICAuaW5pdCh7XG4gICAgcmVzb3VyY2VzLFxuICAgIGxuZzogZGVmYXVsdExhbmd1YWdlLFxuIFxuICAgIGtleVNlcGFyYXRvcjogXCIuXCIsICAvLyB0byBzdXBwb3J0IG5lc3RlZCB0cmFuc2xhdGlvbnNcbiBcbiAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2UgLy8gcmVhY3QgYWxyZWFkeSBzYWZlcyBmcm9tIHhzc1xuICAgIH1cbiAgfSk7XG4gXG4gIGV4cG9ydCBkZWZhdWx0IGkxOG47IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCAnLi9pMThuJztcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChyb290RWxlbWVudCk7IC8vIGNyZWF0ZVJvb3QoY29udGFpbmVyISkgaWYgeW91IHVzZSBUeXBlU2NyaXB0XG5yb290LnJlbmRlcig8Um91dGVyPjxBcHAgLz48L1JvdXRlcj4pO1xuIiwiaW1wb3J0IHsgVHJhbnNsYXRpb25Gb3JtYXQgfSBmcm9tICcuLi9jb25zdGFudC9UeXBlL2xhbmcnO1xuY29uc3QgZGF0YSA6IFRyYW5zbGF0aW9uRm9ybWF0ID0gIHtcbiAgICBuYXY6IHtcbiAgICAgICAgdGl0cmUxOiBcImhlbGxvXCIsXG4gICAgICAgIHRpdHJlMjogXCJ3b3JsZFwiXG4gICAgfSxcbiAgICBwb3N0OiBcIm5vIG5ldyBwb3N0XCIsXG4gICAgdXNlcnM6IFwid2VsY29tZXMgeW91bmcgdXNlcnNcIlxuXG59XG5leHBvcnQgZGVmYXVsdCBkYXRhOyIsImltcG9ydCB7IFRyYW5zbGF0aW9uRm9ybWF0IH0gZnJvbSAnLi4vY29uc3RhbnQvVHlwZS9sYW5nJztcbmltcG9ydCBVc2VycyBmcm9tICcuLi92aWV3L1VzZXJzJztcblxuY29uc3QgZGF0YSA6IFRyYW5zbGF0aW9uRm9ybWF0ID0ge1xuICAgIG5hdjoge1xuICAgICAgICB0aXRyZTE6IFwiYm9uam91clwiLFxuICAgICAgICB0aXRyZTI6IFwibGUgbW9uZGVcIlxuICAgIH0sXG4gICAgcG9zdDogXCJwYXMgZGUgbm91dmVhdSBwb3N0XCIsXG4gICAgdXNlcnM6IFwiYmllbnZlbnVlIGpldW5lIHV0aWxpc2F0ZXVyXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGF0YTsiLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgTGFuZyBmcm9tIFwiLi4vY29tcG9uZW50cy9sYW5nXCI7XG5cbmNvbnN0IEhvbWU6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMYW5nIC8+XG4gICAgICA8cD5cbiAgICAgICAge3QoXCJuYXYudGl0cmUxXCIpfSB7dChcIm5hdi50aXRyZTJcIil9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5cbmNvbnN0IFBvc3RzOiBGQyA9ICgpID0+IHtcbiAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2Pnt0KCdwb3N0Jyl9PC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3RzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKCkge1xuICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+e3QoJ3VzZXJzJyl9PC9kaXY+XG4gIClcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJSb3V0ZSIsIlJvdXRlcyIsInVzZVRyYW5zbGF0aW9uIiwiUG9zdHMiLCJVc2VycyIsIkhvbWUiLCJBcHAiLCJ0IiwiY2xhc3NOYW1lIiwidG8iLCJpZCIsInBhdGgiLCJlbGVtZW50IiwidXNlU3RhdGUiLCJMYW5ndWFnZSIsIkxhbmciLCJpMThuIiwibGFuZ3VhZ2UiLCJsYW5nIiwic2V0TGFuZyIsImNoYW5nZUxhbmd1YWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkVOIiwiRlIiLCJuYW1lIiwib25DaGFuZ2UiLCJpbml0UmVhY3RJMThuZXh0IiwiTGFuZ3VhZ2VEZXRlY3RvciIsInRyYW5zbGF0aW9uRU4iLCJ0cmFuc2xhdGlvbkZSIiwiZGVmYXVsdExhbmd1YWdlIiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbiIsImZyIiwidXNlIiwiaW5pdCIsImxuZyIsImtleVNlcGFyYXRvciIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsImNyZWF0ZVJvb3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwicm9vdEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsImRhdGEiLCJuYXYiLCJ0aXRyZTEiLCJ0aXRyZTIiLCJwb3N0IiwidXNlcnMiXSwic291cmNlUm9vdCI6IiJ9