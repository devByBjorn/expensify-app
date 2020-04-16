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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/playground/destructioring.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/playground/destructioring.js":
/*!******************************************!*\
  !*** ./src/playground/destructioring.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//\n// Object destructioring\n//\nvar book = {\n  title: 'Ego is the Enemy',\n  author: 'Ryan Holiday',\n  publisher: {\n    name: 'Penguin'\n  }\n};\nvar _book$publisher$name = book.publisher.name,\n    publisherName = _book$publisher$name === void 0 ? 'Self published' : _book$publisher$name;\nconsole.log(publisherName); //\n// Array destructioring\n//\n\nvar item = ['Coffes(hot)', '$2.00', '$2.50', '$2.75'];\nvar _item$ = item[0],\n    mediumCoffee = _item$ === void 0 ? 'We are out of coffee' : _item$,\n    _item$2 = item[2],\n    price = _item$2 === void 0 ? '' : _item$2;\nconsole.log(\"\".concat(mediumCoffee, \" costs \").concat(price));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWdyb3VuZC9kZXN0cnVjdGlvcmluZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wbGF5Z3JvdW5kL2Rlc3RydWN0aW9yaW5nLmpzPzNlMzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuLy8gT2JqZWN0IGRlc3RydWN0aW9yaW5nXHJcbi8vXHJcblxyXG5jb25zdCBib29rID0ge1xyXG4gIHRpdGxlOiAnRWdvIGlzIHRoZSBFbmVteScsXHJcbiAgYXV0aG9yOiAnUnlhbiBIb2xpZGF5JyxcclxuICBwdWJsaXNoZXI6IHtcclxuICAgIG5hbWU6ICdQZW5ndWluJyxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHsgbmFtZTogcHVibGlzaGVyTmFtZSA9ICdTZWxmIHB1Ymxpc2hlZCcgfSA9IGJvb2sucHVibGlzaGVyXHJcbmNvbnNvbGUubG9nKHB1Ymxpc2hlck5hbWUpXHJcblxyXG4vL1xyXG4vLyBBcnJheSBkZXN0cnVjdGlvcmluZ1xyXG4vL1xyXG5cclxuY29uc3QgaXRlbSA9IFsnQ29mZmVzKGhvdCknLCAnJDIuMDAnLCAnJDIuNTAnLCAnJDIuNzUnXVxyXG5cclxuY29uc3QgW21lZGl1bUNvZmZlZSA9ICdXZSBhcmUgb3V0IG9mIGNvZmZlZScsICwgcHJpY2UgPSAnJyxdID0gaXRlbVxyXG5jb25zb2xlLmxvZyhgJHttZWRpdW1Db2ZmZWV9IGNvc3RzICR7cHJpY2V9YCkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBUUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/playground/destructioring.js\n");

/***/ })

/******/ });