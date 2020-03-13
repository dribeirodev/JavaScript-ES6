/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./exercicios.js":
/*!***********************!*\
  !*** ./exercicios.js ***!
  \***********************/
/*! exports provided: Usuario, Admin, usuarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Usuario\", function() { return Usuario; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Admin\", function() { return Admin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usuarios\", function() { return usuarios; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Usuario =\n/*#__PURE__*/\nfunction () {\n  function Usuario(email, senha) {\n    _classCallCheck(this, Usuario);\n\n    this._email = email;\n    this._senha = senha;\n  }\n\n  _createClass(Usuario, [{\n    key: \"isAdmin\",\n    value: function isAdmin() {\n      return this._admin ? this._admin : false;\n    }\n  }]);\n\n  return Usuario;\n}();\nvar Admin =\n/*#__PURE__*/\nfunction (_Usuario) {\n  _inherits(Admin, _Usuario);\n\n  function Admin() {\n    var _this;\n\n    _classCallCheck(this, Admin);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));\n    _this._admin = true;\n    return _this;\n  }\n\n  return Admin;\n}(Usuario);\nvar usuarios = [{\n  nome: 'Diego',\n  idade: 23,\n  empresa: 'Rocketseat'\n}, {\n  nome: 'Gabriel',\n  idade: 15,\n  empresa: 'Rocketseat'\n}, {\n  nome: 'Lucas',\n  idade: 30,\n  empresa: 'Facebook'\n}];\n\n//# sourceURL=webpack:///./exercicios.js?");

/***/ }),

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: soma, sub, mult, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mult\", function() { return mult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return valor; });\nfunction soma(a, b) {\n  return a + b;\n}\nfunction sub(a, b) {\n  return a - b;\n}\nfunction mult(a, b) {\n  return a * b;\n}\nfunction valor(a) {\n  return a + 5;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n/* harmony import */ var _exercicios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercicios */ \"./exercicios.js\");\n\n\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5));\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"soma\"](_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5), 2));\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"sub\"](1, 2));\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"mult\"](1, 2));\nvar User1 = new _exercicios__WEBPACK_IMPORTED_MODULE_1__[\"Usuario\"]('email@teste.com', 'senha123');\nvar Adm1 = new _exercicios__WEBPACK_IMPORTED_MODULE_1__[\"Admin\"]('email@teste.com', 'senha123');\nconsole.log(User1.isAdmin()); // false\n\nconsole.log(Adm1.isAdmin()); // true\n// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]\n\nvar idade = [];\n_exercicios__WEBPACK_IMPORTED_MODULE_1__[\"usuarios\"].map(function (u) {\n  idade.push(u.idade);\n});\nvar pessoa = _exercicios__WEBPACK_IMPORTED_MODULE_1__[\"usuarios\"].filter(function (u) {\n  return u.nome === 'Diego';\n});\nconsole.log(idade);\nconsole.log(pessoa);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });