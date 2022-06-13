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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _view_Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/Posts */ "./assets/js/view/Posts.tsx");
/* harmony import */ var _view_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/Users */ "./assets/js/view/Users.tsx");
/* harmony import */ var _view_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/Home */ "./assets/js/view/Home.tsx");







var LogoHeader = function LogoHeader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M59.749 32.215c0-6.124 4.974-10.839 11.405-10.839 3.519 0 7.068 1.622 9.009 4.113l-3.52 3.423c-1.486-1.862-3.335-2.793-5.49-2.793-3.427 0-6.036 2.612-6.036 6.095 0 3.483 2.67 6.035 6.218 6.035 2.063 0 3.822-.87 5.247-2.612l3.428 3.333c-1.971 2.462-5.46 4.053-8.858 4.053-6.46 0-11.404-4.714-11.404-10.809v.001ZM82.225 21.707h6.583l5.247 9.908 5.247-9.908h6.582v21.018h-4.914V28.402l-6.977 12.82-6.976-12.88v14.381h-4.793V21.707h.001ZM108.161 38.071c0-3.032 2.427-4.773 6.612-4.773 1.243 0 2.457.15 3.64.45v-.781c0-1.592-1.032-2.372-3.063-2.372-1.273 0-2.76.39-4.853 1.26l-1.759-3.572c2.608-1.171 5.035-1.741 7.492-1.741 4.46 0 7.037 2.191 7.037 6.004v10.179h-4.852v-.961c-1.304.87-2.7 1.23-4.429 1.23-3.427 0-5.823-2.011-5.823-4.923h-.002Zm7.188 1.501c1.183 0 2.214-.24 3.063-.75v-2.043c-.94-.24-1.911-.36-2.912-.36-1.698 0-2.668.57-2.668 1.562 0 .991.94 1.591 2.517 1.591ZM126.179 26.842h4.914v1.591c1.062-1.26 2.487-1.95 4.217-1.95.94.029 1.425.12 1.849.39v4.233c-.637-.3-1.486-.481-2.335-.481-1.547 0-2.912.751-3.731 2.012v10.088h-4.914V26.842ZM139.282 21.707l4.914-.75v12.37l6.4-6.486h5.491l-7.129 7.175 7.614 8.707h-6.217l-6.158-7.115v7.115h-4.914V21.707h-.001Z",
    fill: "#F05454"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M155.298 34.797c0-4.623 3.67-8.227 8.371-8.227 4.702 0 8.099 3.663 8.099 8.677v1.202h-11.435c.638 1.5 2.093 2.522 3.944 2.522 1.335 0 2.457-.42 3.214-1.201l3.246 2.852c-2.032 1.681-4.033 2.403-6.703 2.403-4.914 0-8.736-3.604-8.736-8.228Zm11.647-1.741c-.516-1.531-1.789-2.523-3.367-2.523s-2.852.931-3.336 2.523h6.703ZM175.893 37.89v-6.996h-3.246v-4.053h3.246v-4.084l4.914-1.05v5.134h4.49v4.053h-4.49v6.036c0 1.41.546 1.92 2.124 1.92.789 0 1.395-.09 2.214-.329v3.933c-.91.27-2.487.481-3.427.481-3.852 0-5.824-1.712-5.824-5.044h-.001ZM28.606 48.086c-4.321 0-8.486-1.43-11.922-4.127-4.028-3.162-6.571-7.688-7.16-12.744-.59-5.055.845-10.035 4.04-14.022 3.195-3.987 7.767-6.504 12.875-7.086l.522 4.473c-3.9.445-7.392 2.368-9.83 5.412A14.351 14.351 0 0 0 14.044 30.7c.45 3.86 2.392 7.316 5.468 9.73a14.71 14.71 0 0 0 10.817 3.055l.523 4.474c-.751.086-1.5.128-2.245.128h-.002Z",
    fill: "#F05454"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28.621 56.765c-14.336 0-26.748-10.673-28.43-25.103C-1.62 16.134 9.672 2.042 25.36.25l.261-.015h16.674v24.843l-8.287 9.543c-2.644 2.876-7.16 3.087-10.066.47a6.977 6.977 0 0 1-2.322-4.885 6.965 6.965 0 0 1 1.847-5.08l3.365 3.031a2.518 2.518 0 0 0-.667 1.837c.032.68.33 1.307.839 1.767a2.6 2.6 0 0 0 3.621-.15l7.12-8.203V4.738h-11.99C12.627 6.309 3.195 18.128 4.712 31.147c1.523 13.062 13.495 22.46 26.693 20.956l.522 4.473a28.97 28.97 0 0 1-3.303.19h-.002Z",
    fill: "#F05454"
  }));
};

LogoHeader.defaultProps = {
  width: "186",
  height: "57",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Message = function Message(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m4.25 28.333 1.842-5.525c-1.592-2.354-2.168-5.142-1.62-7.845.546-2.703 2.18-5.137 4.594-6.85 2.415-1.714 5.448-2.59 8.535-2.464 3.087.125 6.017 1.242 8.247 3.144 2.229 1.901 3.606 4.458 3.874 7.194.268 2.736-.591 5.466-2.417 7.681-1.826 2.216-4.496 3.767-7.512 4.364-3.015.598-6.173.201-8.885-1.115L4.25 28.333M17 17v.014M11.333 17v.014M22.667 17v.014",
    stroke: "#333",
    strokeWidth: "2.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

Message.defaultProps = {
  width: "34",
  height: "34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Search = function Search(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19.943 28.5c4.801 0 8.693-4.03 8.693-9s-3.892-9-8.693-9c-4.8 0-8.693 4.03-8.693 9s3.892 9 8.693 9ZM33.75 32.5l-7.16-7",
    stroke: "#333",
    strokeWidth: "2.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

Search.defaultProps = {
  width: "45",
  height: "44",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Profil = function Profil(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19 17.917A6.333 6.333 0 1 0 19 5.25a6.333 6.333 0 0 0 0 12.667ZM9.5 33.75v-3.167a6.333 6.333 0 0 1 6.333-6.333h6.334a6.333 6.333 0 0 1 6.333 6.333v3.167",
    stroke: "#000",
    strokeWidth: "2.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

Profil.defaultProps = {
  width: "38",
  height: "39",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var App = function App() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    className: 'navbar-brand',
    to: '/'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogoHeader, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    className: 'nav_link',
    to: '/posts'
  }, t('nav.home'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    className: 'nav_link',
    to: '/users'
  }, t('nav.projects'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    className: 'nav_link',
    to: '/jobs'
  }, t('nav.jobs')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Profil, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Message, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Search, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/users",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_view_Users__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
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
  }, t('nav.titre2'))));
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, t('post'), " test");
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

/***/ "./assets/js/img/test.png":
/*!********************************!*\
  !*** ./assets/js/img/test.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/test.a1950cc4.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-029e38"], () => (__webpack_exec__("./assets/js/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFRQSxDQUFSOztFQUNBLG9CQUFPYiwwREFBQUEsY0FBTWEsQ0FBQyxDQUFDLE1BQUQsQ0FBUCxVQUFQO0FBQ0gsQ0FIRDs7QUFJQSxpRUFBZVIsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBRWMsU0FBVUMsS0FBVixHQUFlO0VBQzNCLHNCQUFZRiw2REFBYyxFQUExQjtFQUFBLElBQU9TLENBQVAsbUJBQU9BLENBQVA7O0VBQ0Esb0JBQ0ViLDBEQUFBQSxjQUFNYSxDQUFDLENBQUMsT0FBRCxDQUFQLENBREY7QUFHRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xhbmcudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25zdGFudC9UeXBlL2xhbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2kxOG4udHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9lbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmlldy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmlldy9Qb3N0cy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZpZXcvVXNlcnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIFJvdXRlLCBSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgUG9zdHMgZnJvbSAnLi92aWV3L1Bvc3RzJztcbmltcG9ydCBVc2VycyBmcm9tICcuL3ZpZXcvVXNlcnMnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3L0hvbWUnO1xuaW1wb3J0IExvZ29IZWFkZXIgZnJvbSAnLi9zdmcvbG9nb0hlYWRlci5zdmcnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9zdmcvbWVzc2FnZS5zdmcnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3N2Zy9zZWFyY2guc3ZnJztcbmltcG9ydCBQcm9maWwgZnJvbSAnLi9zdmcvcHJvZmlsLnN2Zyc7XG5cbmNvbnN0IEFwcDogRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17J25hdmJhci1icmFuZCd9IHRvPXsnLyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ29IZWFkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17J25hdl9saW5rJ30gdG89eycvcG9zdHMnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnbmF2LmhvbWUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17J25hdl9saW5rJ30gdG89eycvdXNlcnMnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnbmF2LnByb2plY3RzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9eyduYXZfbGluayd9IHRvPXsnL2pvYnMnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnbmF2LmpvYnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi91c2Vyc1wiIGVsZW1lbnQ9ezxVc2VycyAvPn0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb3N0c1wiIGVsZW1lbnQ9ezxQb3N0cyAvPn0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL2NvbnN0YW50L1R5cGUvbGFuZyc7XG5cbmNvbnN0IExhbmcgPSAoe30pID0+IHtcbiAgICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgW2xhbmcsIHNldExhbmddID0gdXNlU3RhdGU8TGFuZ3VhZ2U+KGkxOG4ubGFuZ3VhZ2UgYXMgTGFuZ3VhZ2UpO1xuXG4gICAgY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCBsYW5ndWFnZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlLkVOOlxuICAgICAgICAgICAgICAgIHNldExhbmcoTGFuZ3VhZ2UuRU4pO1xuICAgICAgICAgICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoTGFuZ3VhZ2UuRU4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZS5GUjpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc2V0TGFuZyhMYW5ndWFnZS5GUik7XG4gICAgICAgICAgICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShMYW5ndWFnZS5GUik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bGFuZ30gbmFtZT1cImxhbmd1YWdlXCIgb25DaGFuZ2U9e2NoYW5nZUxhbmd1YWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17TGFuZ3VhZ2UuRlJ9PkZSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0xhbmd1YWdlLkVOfT5FTjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5nO1xuIiwiZXhwb3J0IGVudW0gTGFuZ3VhZ2Uge1xuICAgIEZSID0gJ2ZyJyxcbiAgICBFTiA9ICdlbicsXG59XG5cbmV4cG9ydCB0eXBlIFRyYW5zbGF0aW9uRm9ybWF0ID0ge1xuICAgIG5hdjoge1xuICAgICAgICBob21lOiBzdHJpbmc7XG4gICAgICAgIHByb2plY3RzOiBzdHJpbmc7XG4gICAgICAgIGpvYnM6IHN0cmluZztcbiAgICB9O1xuICAgIHBvc3Q6IHN0cmluZztcbiAgICB1c2Vyczogc3RyaW5nO1xufTtcbiIsImltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IExhbmd1YWdlRGV0ZWN0b3IgZnJvbSAnaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3InO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuL2NvbnN0YW50L1R5cGUvbGFuZyc7XG5pbXBvcnQgdHJhbnNsYXRpb25FTiBmcm9tICcuL2xhbmcvZW4nO1xuaW1wb3J0IHRyYW5zbGF0aW9uRlIgZnJvbSAnLi9sYW5nL2ZyJztcblxuY29uc3QgZGVmYXVsdExhbmd1YWdlID0gTGFuZ3VhZ2UuRlI7XG5cbi8vIHRoZSB0cmFuc2xhdGlvbnNcbmNvbnN0IHJlc291cmNlcyA9IHtcbiAgICBlbjoge1xuICAgICAgICB0cmFuc2xhdGlvbjogdHJhbnNsYXRpb25FTixcbiAgICB9LFxuICAgIGZyOiB7XG4gICAgICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbkZSLFxuICAgIH0sXG59O1xuXG5pMThuLnVzZShMYW5ndWFnZURldGVjdG9yKVxuICAgIC51c2UoaW5pdFJlYWN0STE4bmV4dCkgLy8gcGFzc2VzIGkxOG4gZG93biB0byByZWFjdC1pMThuZXh0XG4gICAgLmluaXQoe1xuICAgICAgICByZXNvdXJjZXMsXG4gICAgICAgIGxuZzogZGVmYXVsdExhbmd1YWdlLFxuXG4gICAgICAgIGtleVNlcGFyYXRvcjogJy4nLCAvLyB0byBzdXBwb3J0IG5lc3RlZCB0cmFuc2xhdGlvbnNcblxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsIC8vIHJlYWN0IGFscmVhZHkgc2FmZXMgZnJvbSB4c3NcbiAgICAgICAgfSxcbiAgICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgaTE4bjtcbiIsImltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gJ3JlYWN0LXF1ZXJ5L2RldnRvb2xzJztcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCAnLi9pMThuJztcbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChyb290RWxlbWVudCEpO1xucm9vdC5yZW5kZXIoXG4gICAgPFJvdXRlcj5cbiAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICA8UmVhY3RRdWVyeURldnRvb2xzIGluaXRpYWxJc09wZW49e2ZhbHNlfSAvPlxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC9Sb3V0ZXI+LFxuKTtcbiIsImltcG9ydCB7IFRyYW5zbGF0aW9uRm9ybWF0IH0gZnJvbSAnLi4vY29uc3RhbnQvVHlwZS9sYW5nJztcbmNvbnN0IGRhdGE6IFRyYW5zbGF0aW9uRm9ybWF0ID0ge1xuICAgIG5hdjoge1xuICAgICAgICBob21lOiAnSG9tZScsXG4gICAgICAgIHByb2plY3RzOiAnUHJvamVjdHMnLFxuICAgICAgICBqb2JzOiAnSm9icycsXG4gICAgfSxcbiAgICBwb3N0OiAnbm8gbmV3IHBvc3QnLFxuICAgIHVzZXJzOiAnd2VsY29tZXMgeW91bmcgdXNlcnMnLFxufTtcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCJpbXBvcnQgeyBUcmFuc2xhdGlvbkZvcm1hdCB9IGZyb20gJy4uL2NvbnN0YW50L1R5cGUvbGFuZyc7XG5cbmNvbnN0IGRhdGE6IFRyYW5zbGF0aW9uRm9ybWF0ID0ge1xuICAgIG5hdjoge1xuICAgICAgICBob21lOiAnQWNjdWlsZScsXG4gICAgICAgIHByb2plY3RzOiAnUHJvamVjdHMnLFxuICAgICAgICBqb2JzOiAnUG9zdGUnLFxuICAgIH0sXG4gICAgcG9zdDogJ3BhcyBkZSBub3V2ZWF1IHBvc3QnLFxuICAgIHVzZXJzOiAnYmllbnZlbnVlIGpldW5lIHV0aWxpc2F0ZXVyJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IExhbmcgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5nJztcbmltcG9ydCBMb2dvIGZyb20gJy4uL3N2Zy9sb2dvLnN2Zyc7XG5pbXBvcnQgdGVzdCBmcm9tICcuLi9pbWcvdGVzdC5wbmcnO1xuXG5jb25zdCBIb21lOiBGQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGVzdH0gaGVpZ2h0PVwiNTBweFwiIHdpZHRoPXsnNTBweCd9IC8+XG4gICAgICAgICAgICA8TGFuZyAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0cmVfMVwiPnt0KCduYXYudGl0cmUxJyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdHJlXzJcIj57dCgnbmF2LnRpdHJlMicpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5jb25zdCBQb3N0czogRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIHJldHVybiA8ZGl2Pnt0KCdwb3N0Jyl9IHRlc3Q8L2Rpdj47XG59O1xuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKCkge1xuICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+e3QoJ3VzZXJzJyl9PC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJSb3V0ZSIsIlJvdXRlcyIsInVzZVRyYW5zbGF0aW9uIiwiUG9zdHMiLCJVc2VycyIsIkhvbWUiLCJMb2dvSGVhZGVyIiwiTWVzc2FnZSIsIlNlYXJjaCIsIlByb2ZpbCIsIkFwcCIsInQiLCJjbGFzc05hbWUiLCJ0byIsInBhdGgiLCJlbGVtZW50IiwidXNlU3RhdGUiLCJMYW5ndWFnZSIsIkxhbmciLCJpMThuIiwibGFuZ3VhZ2UiLCJsYW5nIiwic2V0TGFuZyIsImNoYW5nZUxhbmd1YWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkVOIiwiRlIiLCJuYW1lIiwib25DaGFuZ2UiLCJpbml0UmVhY3RJMThuZXh0IiwiTGFuZ3VhZ2VEZXRlY3RvciIsInRyYW5zbGF0aW9uRU4iLCJ0cmFuc2xhdGlvbkZSIiwiZGVmYXVsdExhbmd1YWdlIiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbiIsImZyIiwidXNlIiwiaW5pdCIsImxuZyIsImtleVNlcGFyYXRvciIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIlJlYWN0UXVlcnlEZXZ0b29scyIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsImNyZWF0ZVJvb3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwicXVlcnlDbGllbnQiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiY2xpZW50IiwiaW5pdGlhbElzT3BlbiIsImRhdGEiLCJuYXYiLCJob21lIiwicHJvamVjdHMiLCJqb2JzIiwicG9zdCIsInVzZXJzIiwiTG9nbyIsInRlc3QiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=