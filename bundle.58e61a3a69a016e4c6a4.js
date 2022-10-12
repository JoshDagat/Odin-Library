/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/doge.jpg */ "./src/assets/images/doge.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/delete.svg */ "./src/assets/images/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/delete-empty.svg */ "./src/assets/images/delete-empty.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --color-main: #023047;\r\n  --color-red: red;\r\n  --color-grey: grey;\r\n  --color-lt-grey: lightgrey;\r\n  --color-read: greenyellow;\r\n  --color-unread: pink;\r\n  --color-black: black;\r\n  --color-text: #292524;\r\n  --color-faded-black-25: rgba(0, 0, 0, 0.25);\r\n  --color-faded-black-80: rgba(0, 0, 0, 0.8);\r\n  --color-white: #fff;\r\n  --color-accent-1: #219ebcaa;\r\n  --color-accent-1-lt: #219ebc55;\r\n  --color-accent-2: #fb8500;\r\n  --color-accent-2-lt: #ffb703;\r\n  --color-accent-2-hover: #e6a502;\r\n  --color-accent-3: #069abe;\r\n  --color-accent-3-lt: #219ebc;\r\n  --shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);\r\n  --shadow-2: 0px 0px 10px 1px rgba(0, 0, 0, 0.24);\r\n  --book-accent-1: #001219;\r\n  --book-accent-2: #9b2226;\r\n  --book-accent-3: #005f73;\r\n  --book-accent-4: #ae2012;\r\n  --book-accent-5: #0a9396;\r\n  --book-accent-6: #bb3e03;\r\n  --book-accent-7: #94d2bd;\r\n  --book-accent-8: #ca6702;\r\n  --book-accent-9: #e9d8a6;\r\n  --book-accent-10: #ee9b00;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n  min-height: 100px;\r\n  background-color: var(--color-main);\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nheader>* {\r\n  flex: 1;\r\n}\r\n\r\n.header-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  max-width: 1440px;\r\n}\r\n\r\n.header-wrapper>h1 {\r\n  font-size: 3rem;\r\n  color: var(--color-white);\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.header-wrapper>.action-group {\r\n  display: flex;\r\n  gap: 5px;\r\n  grid-area: search-actions;\r\n}\r\n\r\n.header-wrapper>.action-group>* {\r\n  flex: 1;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .header-wrapper {\r\n    display: grid;\r\n    grid-template-columns: 350px 1fr;\r\n    grid-template-areas: \"h1 search-actions\";\r\n    align-content: center;\r\n  }\r\n\r\n  .header-wrapper>h1 {\r\n    grid-area: h1;\r\n    margin-bottom: 0;\r\n    margin-right: auto;\r\n    margin-left: 32px;\r\n  }\r\n\r\n  .header-wrapper>.action-group {\r\n    grid-area: \"searc-actions\";\r\n    margin-right: 5px;\r\n    width: 80%;\r\n    justify-self: right;\r\n  }\r\n}\r\n\r\n.header-wrapper>.action-group>input {\r\n  border-radius: 2px;\r\n  width: 80%;\r\n  justify-self: center;\r\n  grid-area: search;\r\n  flex: 3;\r\n}\r\n\r\n/* Content */\r\n\r\n.books-wrapper {\r\n  padding: 16px 15px;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n  gap: 16px;\r\n  justify-content: center;\r\n}\r\n\r\n@media screen and (min-width: 1078px) {\r\n  .books-wrapper {\r\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n  }\r\n}\r\n\r\n\r\n.book {\r\n  background-color: var(--color-white);\r\n  width: 100%;\r\n  border-radius: 15px;\r\n  padding: 16px 16px 5px;\r\n  position: relative;\r\n  box-shadow: var(--shadow);\r\n  -webkit-box-shadow: var(--shadow);\r\n  -moz-box-shadow: var(--shadow);\r\n  margin-top: 2px;\r\n  margin-left: 2px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.book.empty {\r\n  aspect-ratio: 2/1;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 16px;\r\n}\r\n\r\n.book.empty p {\r\n  font-weight: bold;\r\n}\r\n\r\n.doge {\r\n  aspect-ratio: 1/1;\r\n  width: 50%;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border-radius: 50%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.book::before {\r\n  content: '';\r\n  background: red;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 10px;\r\n  border-top-left-radius: 15px;\r\n  border-top-right-radius: 15px;\r\n}\r\n\r\n.book.empty::before {\r\n  background: var(--color-red);\r\n}\r\n\r\n.book.accent-1::before {\r\n  background-color: var(--book-accent-1);\r\n}\r\n\r\n.book.accent-2::before {\r\n  background-color: var(--book-accent-2);\r\n}\r\n\r\n.book.accent-3::before {\r\n  background-color: var(--book-accent-3);\r\n}\r\n\r\n.book.accent-4::before {\r\n  background-color: var(--book-accent-4);\r\n}\r\n\r\n.book.accent-5::before {\r\n  background-color: var(--book-accent-5);\r\n}\r\n\r\n.book.accent-6::before {\r\n  background-color: var(--book-accent-6);\r\n}\r\n\r\n.book.accent-7::before {\r\n  background-color: var(--book-accent-7);\r\n}\r\n\r\n.book.accent-8::before {\r\n  background-color: var(--book-accent-8);\r\n}\r\n\r\n.book.accent-9::before {\r\n  background-color: var(--book-accent-9);\r\n}\r\n\r\n.book.accent-10::before {\r\n  background-color: var(--book-accent-10);\r\n}\r\n\r\n\r\n.book>.title {\r\n  font-size: 1.25rem;\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.book>.author {\r\n  font-weight: bold;\r\n  margin-bottom: auto;\r\n  flex: 1;\r\n}\r\n\r\n@media screen and (min-width: 1078px) {\r\n  .book>.title {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 16px\r\n  }\r\n\r\n  .book>.author {\r\n    font-size: 1.15rem;\r\n    margin-bottom: 48px;\r\n  }\r\n}\r\n\r\n.book>.bookFooter>span {\r\n  margin-bottom: 15px;\r\n  display: inline-block;\r\n}\r\n\r\n.book>.bookFooter>.status-slider {\r\n  margin-left: auto;\r\n}\r\n\r\n.book>.bookFooter>.action-group {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.status-slider {\r\n  width: 50px;\r\n  height: 25px;\r\n  border: 1px solid var(--color-grey);\r\n  border-radius: 15px;\r\n  background-color: var(--color-unread);\r\n  cursor: pointer;\r\n}\r\n\r\n.slider-indicator {\r\n  width: 23px;\r\n  height: 23px;\r\n  background-color: var(--color-black);\r\n  border: 1px solid var(--color-lt-grey);\r\n  border-radius: 100%;\r\n  transition: margin-left 0.25s ease-in-out;\r\n}\r\n\r\n.status-slider.read .slider-indicator {\r\n  margin-left: 50%;\r\n}\r\n\r\n.status-slider.read {\r\n  background-color: var(--color-read);\r\n}\r\n\r\n/* MODAL */\r\n\r\n.add-book-modal {\r\n  background-color: var(--color-faded-black-25);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 0%;\r\n  max-height: 0;\r\n  z-index: 5;\r\n  bottom: 0;\r\n  left: 0;\r\n\r\n  display: hidden;\r\n  transition: height 0.5s ease-in-out;\r\n}\r\n\r\n.add-book-modal.active {\r\n  height: 100%;\r\n  max-height: 100vh;\r\n  display: flex;\r\n  padding: 0 16px;\r\n}\r\n\r\n.add-book-modal form {\r\n  background-color: var(--color-white);\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  width: 90%;\r\n  min-height: 50%;\r\n  flex: 1;\r\n  transform: translateY(100%);\r\n  transition: transform 1.05s ease-in-out;\r\n  visibility: hidden;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.add-book-modal.active form {\r\n  display: flex;\r\n  visibility: visible;\r\n  transform: translateY(0);\r\n}\r\n\r\n.add-book-modal .action-group {\r\n  display: flex;\r\n  gap: 5px;\r\n  justify-content: space-around\r\n}\r\n\r\nfieldset {\r\n  border: 1px solid var(--color-grey);\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .add-book-modal form {\r\n    flex: unset;\r\n    width: 50%;\r\n    min-height: unset;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1100px) {\r\n  .add-book-modal form {\r\n    max-width: 534px;\r\n  }\r\n\r\n}\r\n\r\n.form-radio {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.radio-group {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.radio-group>input,\r\n.radio-group>label {\r\n  cursor: pointer;\r\n}\r\n\r\nlegend {\r\n  font-weight: bold;\r\n  margin: 0 auto;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.form-input {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-input:not(:last-of-type) {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.form-input>input {\r\n  font-size: 1.15rem;\r\n  padding: 5px;\r\n  border: none;\r\n  background-color: var(--color-accent-1-lt);\r\n  ;\r\n  color: var(--color-faded-black-80);\r\n  padding-left: 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.form-input>input:focus {\r\n  background-color: var(--color-accent-1);\r\n}\r\n\r\nlabel {\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n\r\ninput[type=\"number\"] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* Buttons */\r\n\r\n.btn-base {\r\n  border: none;\r\n}\r\n\r\n.header-btn-add,\r\n.header-btn-search {\r\n  border-radius: 2px;\r\n  padding: 5px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  font-size: 0.8rem;\r\n  background-color: var(--color-accent-2);\r\n  cursor: pointer;\r\n}\r\n\r\n.header-btn-add:hover,\r\n.header-btn-search:hover {\r\n  background-color: var(--color-accent-2-lt);\r\n}\r\n\r\n.add-book-modal .btn-confirm,\r\n.add-book-modal .btn-close {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  box-shadow: var(--shadow-2);\r\n  -webkit-box-shadow: var(--shadow-2);\r\n  -moz-box-shadow: var(--shadow-2);\r\n}\r\n\r\n.add-book-modal .btn-confirm {\r\n  background: var(--color-accent-3-lt);\r\n  flex: 1;\r\n}\r\n\r\n.add-book-modal .btn-confirm:hover {\r\n  background-color: var(--color-accent-3);\r\n}\r\n\r\n.add-book-modal .btn-close {\r\n  width: 50px;\r\n  border-radius: 5px;\r\n  background-color: var(--color-accent-2-lt);\r\n}\r\n\r\n.add-book-modal .btn-close:hover {\r\n  background-color: var(--color-accent-2-hover);\r\n}\r\n\r\n.btn-close>img {\r\n  width: 100%;\r\n}\r\n\r\n.btn-confirm>span {\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  color: var(--color-text);\r\n  margin-right: 35px;\r\n}\r\n\r\n.btn-confirm>img {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n\r\n.book .btn-delete {\r\n  width: 35px;\r\n  height: 35px;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: 80%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  cursor: pointer;\r\n  margin-left: -11px;\r\n}\r\n\r\n.book .btn-delete:hover {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 80%;\r\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import \"./reset.css\";\r\n\r\n:root {\r\n  --color-main: #023047;\r\n  --color-red: red;\r\n  --color-grey: grey;\r\n  --color-lt-grey: lightgrey;\r\n  --color-read: greenyellow;\r\n  --color-unread: pink;\r\n  --color-black: black;\r\n  --color-text: #292524;\r\n  --color-faded-black-25: rgba(0, 0, 0, 0.25);\r\n  --color-faded-black-80: rgba(0, 0, 0, 0.8);\r\n  --color-white: #fff;\r\n  --color-accent-1: #219ebcaa;\r\n  --color-accent-1-lt: #219ebc55;\r\n  --color-accent-2: #fb8500;\r\n  --color-accent-2-lt: #ffb703;\r\n  --color-accent-2-hover: #e6a502;\r\n  --color-accent-3: #069abe;\r\n  --color-accent-3-lt: #219ebc;\r\n  --shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);\r\n  --shadow-2: 0px 0px 10px 1px rgba(0, 0, 0, 0.24);\r\n  --book-accent-1: #001219;\r\n  --book-accent-2: #9b2226;\r\n  --book-accent-3: #005f73;\r\n  --book-accent-4: #ae2012;\r\n  --book-accent-5: #0a9396;\r\n  --book-accent-6: #bb3e03;\r\n  --book-accent-7: #94d2bd;\r\n  --book-accent-8: #ca6702;\r\n  --book-accent-9: #e9d8a6;\r\n  --book-accent-10: #ee9b00;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n  min-height: 100px;\r\n  background-color: var(--color-main);\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nheader>* {\r\n  flex: 1;\r\n}\r\n\r\n.header-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  max-width: 1440px;\r\n}\r\n\r\n.header-wrapper>h1 {\r\n  font-size: 3rem;\r\n  color: var(--color-white);\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.header-wrapper>.action-group {\r\n  display: flex;\r\n  gap: 5px;\r\n  grid-area: search-actions;\r\n}\r\n\r\n.header-wrapper>.action-group>* {\r\n  flex: 1;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .header-wrapper {\r\n    display: grid;\r\n    grid-template-columns: 350px 1fr;\r\n    grid-template-areas: \"h1 search-actions\";\r\n    align-content: center;\r\n  }\r\n\r\n  .header-wrapper>h1 {\r\n    grid-area: h1;\r\n    margin-bottom: 0;\r\n    margin-right: auto;\r\n    margin-left: 32px;\r\n  }\r\n\r\n  .header-wrapper>.action-group {\r\n    grid-area: \"searc-actions\";\r\n    margin-right: 5px;\r\n    width: 80%;\r\n    justify-self: right;\r\n  }\r\n}\r\n\r\n.header-wrapper>.action-group>input {\r\n  border-radius: 2px;\r\n  width: 80%;\r\n  justify-self: center;\r\n  grid-area: search;\r\n  flex: 3;\r\n}\r\n\r\n/* Content */\r\n\r\n.books-wrapper {\r\n  padding: 16px 15px;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n  gap: 16px;\r\n  justify-content: center;\r\n}\r\n\r\n@media screen and (min-width: 1078px) {\r\n  .books-wrapper {\r\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n  }\r\n}\r\n\r\n\r\n.book {\r\n  background-color: var(--color-white);\r\n  width: 100%;\r\n  border-radius: 15px;\r\n  padding: 16px 16px 5px;\r\n  position: relative;\r\n  box-shadow: var(--shadow);\r\n  -webkit-box-shadow: var(--shadow);\r\n  -moz-box-shadow: var(--shadow);\r\n  margin-top: 2px;\r\n  margin-left: 2px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.book.empty {\r\n  aspect-ratio: 2/1;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 16px;\r\n}\r\n\r\n.book.empty p {\r\n  font-weight: bold;\r\n}\r\n\r\n.doge {\r\n  aspect-ratio: 1/1;\r\n  width: 50%;\r\n  background-image: url('./assets/images/doge.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border-radius: 50%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.book::before {\r\n  content: '';\r\n  background: red;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 10px;\r\n  border-top-left-radius: 15px;\r\n  border-top-right-radius: 15px;\r\n}\r\n\r\n.book.empty::before {\r\n  background: var(--color-red);\r\n}\r\n\r\n.book.accent-1::before {\r\n  background-color: var(--book-accent-1);\r\n}\r\n\r\n.book.accent-2::before {\r\n  background-color: var(--book-accent-2);\r\n}\r\n\r\n.book.accent-3::before {\r\n  background-color: var(--book-accent-3);\r\n}\r\n\r\n.book.accent-4::before {\r\n  background-color: var(--book-accent-4);\r\n}\r\n\r\n.book.accent-5::before {\r\n  background-color: var(--book-accent-5);\r\n}\r\n\r\n.book.accent-6::before {\r\n  background-color: var(--book-accent-6);\r\n}\r\n\r\n.book.accent-7::before {\r\n  background-color: var(--book-accent-7);\r\n}\r\n\r\n.book.accent-8::before {\r\n  background-color: var(--book-accent-8);\r\n}\r\n\r\n.book.accent-9::before {\r\n  background-color: var(--book-accent-9);\r\n}\r\n\r\n.book.accent-10::before {\r\n  background-color: var(--book-accent-10);\r\n}\r\n\r\n\r\n.book>.title {\r\n  font-size: 1.25rem;\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.book>.author {\r\n  font-weight: bold;\r\n  margin-bottom: auto;\r\n  flex: 1;\r\n}\r\n\r\n@media screen and (min-width: 1078px) {\r\n  .book>.title {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 16px\r\n  }\r\n\r\n  .book>.author {\r\n    font-size: 1.15rem;\r\n    margin-bottom: 48px;\r\n  }\r\n}\r\n\r\n.book>.bookFooter>span {\r\n  margin-bottom: 15px;\r\n  display: inline-block;\r\n}\r\n\r\n.book>.bookFooter>.status-slider {\r\n  margin-left: auto;\r\n}\r\n\r\n.book>.bookFooter>.action-group {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.status-slider {\r\n  width: 50px;\r\n  height: 25px;\r\n  border: 1px solid var(--color-grey);\r\n  border-radius: 15px;\r\n  background-color: var(--color-unread);\r\n  cursor: pointer;\r\n}\r\n\r\n.slider-indicator {\r\n  width: 23px;\r\n  height: 23px;\r\n  background-color: var(--color-black);\r\n  border: 1px solid var(--color-lt-grey);\r\n  border-radius: 100%;\r\n  transition: margin-left 0.25s ease-in-out;\r\n}\r\n\r\n.status-slider.read .slider-indicator {\r\n  margin-left: 50%;\r\n}\r\n\r\n.status-slider.read {\r\n  background-color: var(--color-read);\r\n}\r\n\r\n/* MODAL */\r\n\r\n.add-book-modal {\r\n  background-color: var(--color-faded-black-25);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 0%;\r\n  max-height: 0;\r\n  z-index: 5;\r\n  bottom: 0;\r\n  left: 0;\r\n\r\n  display: hidden;\r\n  transition: height 0.5s ease-in-out;\r\n}\r\n\r\n.add-book-modal.active {\r\n  height: 100%;\r\n  max-height: 100vh;\r\n  display: flex;\r\n  padding: 0 16px;\r\n}\r\n\r\n.add-book-modal form {\r\n  background-color: var(--color-white);\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  width: 90%;\r\n  min-height: 50%;\r\n  flex: 1;\r\n  transform: translateY(100%);\r\n  transition: transform 1.05s ease-in-out;\r\n  visibility: hidden;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.add-book-modal.active form {\r\n  display: flex;\r\n  visibility: visible;\r\n  transform: translateY(0);\r\n}\r\n\r\n.add-book-modal .action-group {\r\n  display: flex;\r\n  gap: 5px;\r\n  justify-content: space-around\r\n}\r\n\r\nfieldset {\r\n  border: 1px solid var(--color-grey);\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .add-book-modal form {\r\n    flex: unset;\r\n    width: 50%;\r\n    min-height: unset;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1100px) {\r\n  .add-book-modal form {\r\n    max-width: 534px;\r\n  }\r\n\r\n}\r\n\r\n.form-radio {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.radio-group {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.radio-group>input,\r\n.radio-group>label {\r\n  cursor: pointer;\r\n}\r\n\r\nlegend {\r\n  font-weight: bold;\r\n  margin: 0 auto;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.form-input {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-input:not(:last-of-type) {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.form-input>input {\r\n  font-size: 1.15rem;\r\n  padding: 5px;\r\n  border: none;\r\n  background-color: var(--color-accent-1-lt);\r\n  ;\r\n  color: var(--color-faded-black-80);\r\n  padding-left: 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.form-input>input:focus {\r\n  background-color: var(--color-accent-1);\r\n}\r\n\r\nlabel {\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n\r\ninput[type=\"number\"] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* Buttons */\r\n\r\n.btn-base {\r\n  border: none;\r\n}\r\n\r\n.header-btn-add,\r\n.header-btn-search {\r\n  border-radius: 2px;\r\n  padding: 5px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  font-size: 0.8rem;\r\n  background-color: var(--color-accent-2);\r\n  cursor: pointer;\r\n}\r\n\r\n.header-btn-add:hover,\r\n.header-btn-search:hover {\r\n  background-color: var(--color-accent-2-lt);\r\n}\r\n\r\n.add-book-modal .btn-confirm,\r\n.add-book-modal .btn-close {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  box-shadow: var(--shadow-2);\r\n  -webkit-box-shadow: var(--shadow-2);\r\n  -moz-box-shadow: var(--shadow-2);\r\n}\r\n\r\n.add-book-modal .btn-confirm {\r\n  background: var(--color-accent-3-lt);\r\n  flex: 1;\r\n}\r\n\r\n.add-book-modal .btn-confirm:hover {\r\n  background-color: var(--color-accent-3);\r\n}\r\n\r\n.add-book-modal .btn-close {\r\n  width: 50px;\r\n  border-radius: 5px;\r\n  background-color: var(--color-accent-2-lt);\r\n}\r\n\r\n.add-book-modal .btn-close:hover {\r\n  background-color: var(--color-accent-2-hover);\r\n}\r\n\r\n.btn-close>img {\r\n  width: 100%;\r\n}\r\n\r\n.btn-confirm>span {\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  color: var(--color-text);\r\n  margin-right: 35px;\r\n}\r\n\r\n.btn-confirm>img {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n\r\n.book .btn-delete {\r\n  width: 35px;\r\n  height: 35px;\r\n  background: url(\"./assets/images/delete.svg\");\r\n  background-size: 80%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  cursor: pointer;\r\n  margin-left: -11px;\r\n}\r\n\r\n.book .btn-delete:hover {\r\n  background: url(\"./assets/images/delete-empty.svg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 80%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: '';\r\n  content: none;\r\n}\r\n\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}", "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;;AAEA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;AACd;;AAEA;;;;EAIE,WAAW;EACX,aAAa;AACf;;;AAGA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;;;EAGE,sBAAsB;AACxB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: '';\r\n  content: none;\r\n}\r\n\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/delete-empty.svg":
/*!********************************************!*\
  !*** ./src/assets/images/delete-empty.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/delete-empty-672abe24027f302a7a8b.svg";

/***/ }),

/***/ "./src/assets/images/delete.svg":
/*!**************************************!*\
  !*** ./src/assets/images/delete.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/delete-bde675c38d54979f589e.svg";

/***/ }),

/***/ "./src/assets/images/doge.jpg":
/*!************************************!*\
  !*** ./src/assets/images/doge.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/doge-61998c00b8e27a9ece97.jpg";

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var coreLibrary = [];
var bookForm = document.querySelector("#new-book");
/**
 * Defines the Book constructor.
 * 
 * @param {string} title
 * @param {string} author
 * @param {number} pages
 * @param {string} status
*/

function Book(title, author, pages, status, id) {
  this.id = id;
  this.status = status;
  this.title = title;
  this.author = author;
  this.pages = pages;
}
/**
 * Receives an array of books and adds a new book to that array.
 * 
 */


function addBookToLibrary() {
  var bookData = new FormData(bookForm);
  var newBook = new Book();

  var _iterator = _createForOfIteratorHelper(bookData),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      newBook[key] = value;
    } // Prepend with id for easy identification in renderTable

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  newBook.id = "id".concat((0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)());
  coreLibrary.push(newBook);
}
/**
 * Takes an array of books and renders it in table format.
 * 
 */


function renderTable(library) {
  var booksWrapper = document.querySelector('.books-wrapper');

  while (booksWrapper.hasChildNodes()) {
    booksWrapper.removeChild(booksWrapper.firstChild);
  }

  renderBooks(library);
}
/**
 *  Creates a book table for desktop view
 * */


function renderBooks(library) {
  var temp = _toConsumableArray(library);

  var booksWrapper = document.querySelector('.books-wrapper');
  var index = 1;

  if (!temp.length) {
    var doge = document.createElement('div');
    doge.classList = 'doge';
    var empty = document.createElement('div');
    empty.classList = 'book empty';
    empty.appendChild(doge);
    var dogeText = document.createElement('p');
    dogeText.textContent = "Wow, such empty...";
    empty.appendChild(dogeText);
    booksWrapper.appendChild(empty);
  } else {
    temp.reverse().forEach(function (book) {
      var bookDiv = document.createElement('div');
      bookDiv.classList = "book accent-".concat(index === 11 ? index = 1 : index++); // Create title and attach to bookDiv (1st child):

      var title = document.createElement('p');
      title.classList = 'title';
      title.textContent = book.title;
      bookDiv.appendChild(title); // Create author and attach to bookDiv (2nd child):

      var author = document.createElement('p');
      author.classList = 'author';
      author.textContent = "by ".concat(book.author);
      bookDiv.appendChild(author); // Create delete button:

      var deleteBtn = document.createElement('button');
      deleteBtn.classList = 'btn-base btn-delete';
      deleteBtn.addEventListener('click', function () {
        deleteBook(book.id);
      }); // Create status slider:

      var statusSlider = document.createElement('div');
      var sliderIndicator = document.createElement('div');
      statusSlider.classList = "status-slider ".concat(book.status === 'read' ? 'read' : '');
      sliderIndicator.classList = "slider-indicator";
      statusSlider.appendChild(sliderIndicator);
      statusSlider.addEventListener('click', function () {
        toggleStatus(book.id, statusSlider);
      }); // Create action group and append delete + status slider:

      var actionGroup = document.createElement('div');
      actionGroup.classList = 'action-group';
      actionGroup.appendChild(deleteBtn);
      actionGroup.appendChild(statusSlider); // Create pages and append to bookFooter

      var pages = document.createElement('span');
      pages.textContent = "".concat(book.pages, " pages"); // Create bookFooter and append to bookDiv (3rd child);

      var bookFooter = document.createElement('div');
      bookFooter.classList = 'bookFooter';
      bookFooter.appendChild(pages);
      bookFooter.appendChild(actionGroup);
      bookDiv.appendChild(bookFooter); // Attach to book wrapper:

      booksWrapper.appendChild(bookDiv);
    });
  }
} // Event Listeners:


var addBookModalBtn = document.querySelector(".header-btn-add");
addBookModalBtn.addEventListener('click', toggleAddBookModal);
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addBookToLibrary();
  renderTable(coreLibrary);
  toggleAddBookModal();
  bookForm.querySelector('#title').value = '';
  bookForm.querySelector('#author').value = '';
  bookForm.querySelector('#pages').value = '';
});
var closeModal = document.querySelector('.btn-close');
closeModal.addEventListener('click', toggleAddBookModal);
var search = document.querySelector('header input');
search.addEventListener('input', filterSearch); // Helpers

/**
 * Toggles the add book form's visibility.
 * */

function toggleAddBookModal() {
  var addBookModal = document.querySelector('.add-book-modal');
  addBookModal.classList.toggle("active");
}
/**
 *  Toggles the book's read/unread status in the coreLibrary.
 * 
 * @params {string} id
 * @params {Element} the statusSlider html node 
 */


function toggleStatus(id, node) {
  var matchingBook = coreLibrary.find(function (book) {
    return book.id === id;
  });
  matchingBook.status = matchingBook.status === 'read' ? 'unread' : 'read';
  node.classList.toggle('read');
}
/**
 * Removes from the library the book whose id matches the parameter id passed in
 * 
 * @params {string} id
 * @params {book[]} an array of books
 **/


function deleteBook(id) {
  var newLibrary = coreLibrary.filter(function (book) {
    return book.id !== id;
  });
  coreLibrary = newLibrary;
  renderTable(coreLibrary);
}

function filterSearch() {
  var filteredBooks;

  if (search.value === '') {
    filteredBooks = coreLibrary;
  }

  filteredBooks = coreLibrary.filter(function (book) {
    return book.title.includes(search.value);
  });
  renderTable(filteredBooks);
} // Initial population


renderBooks(coreLibrary);
})();

/******/ })()
;
//# sourceMappingURL=bundle.58e61a3a69a016e4c6a4.js.map