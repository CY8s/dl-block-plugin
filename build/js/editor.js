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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./source/js/blocks/description-detail/block.json":
/*!********************************************************!*\
  !*** ./source/js/blocks/description-detail/block.json ***!
  \********************************************************/
/*! exports provided: name, category, attributes, supports, parent, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"cydlwp/description-detail\",\"category\":\"common\",\"attributes\":{\"content\":{\"type\":\"string\"}},\"supports\":{\"className\":\"false\",\"align\":\"false\"},\"parent\":[\"cydlwp/description-list\"]}");

/***/ }),

/***/ "./source/js/blocks/description-detail/deprecated.js":
/*!***********************************************************!*\
  !*** ./source/js/blocks/description-detail/deprecated.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([]);

/***/ }),

/***/ "./source/js/blocks/description-detail/edit.js":
/*!*****************************************************!*\
  !*** ./source/js/blocks/description-detail/edit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./source/js/blocks/description-detail/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./source/js/blocks/description-detail/block.json", 1);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var edit = function edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      mergeBlocks = _ref.mergeBlocks,
      onReplace = _ref.onReplace,
      onRemove = _ref.onRemove;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tag: "dd",
    style: {
      padding: "0 0 0 1.6em"
    },
    value: attributes.content,
    onChange: function onChange(content) {
      setAttributes({
        content: content
      });
    },
    onSplit: function onSplit(value) {
      console.log(value);

      if (!value) {
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["createBlock"])(_block_json__WEBPACK_IMPORTED_MODULE_4__["name"]);
      }

      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["createBlock"])(_block_json__WEBPACK_IMPORTED_MODULE_4__["name"], _objectSpread(_objectSpread({}, attributes), {}, {
        content: value
      }));
    },
    onMerge: mergeBlocks,
    onReplace: onReplace,
    onRemove: onRemove,
    placeholder: attributes.placeholder || "Write detail..."
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./source/js/blocks/description-detail/index.js":
/*!******************************************************!*\
  !*** ./source/js/blocks/description-detail/index.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ "./source/js/icons/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./source/js/blocks/description-detail/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./source/js/blocks/description-detail/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated */ "./source/js/blocks/description-detail/deprecated.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transforms */ "./source/js/blocks/description-detail/transforms.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./source/js/blocks/description-detail/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./source/js/blocks/description-detail/block.json", 1);








Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_block_json__WEBPACK_IMPORTED_MODULE_7__["name"], {
  title: "Description Detail",
  icon: _icons__WEBPACK_IMPORTED_MODULE_2__["DescriptionDetailIcon"],
  category: _block_json__WEBPACK_IMPORTED_MODULE_7__["category"],
  supports: {
    className: false,
    align: false
  },
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_6__["default"],
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("description detail"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Description Detail")],
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_7__["attributes"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  parent: _block_json__WEBPACK_IMPORTED_MODULE_7__["parent"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./source/js/blocks/description-detail/save.js":
/*!*****************************************************!*\
  !*** ./source/js/blocks/description-detail/save.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var attributes = _ref.attributes;
  var content = attributes.content;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: "dd",
    value: content
  });
});

/***/ }),

/***/ "./source/js/blocks/description-detail/transforms.js":
/*!***********************************************************!*\
  !*** ./source/js/blocks/description-detail/transforms.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  from: [{
    type: "block",
    blocks: ["cydlwp/description-term"],
    transform: function transform(_ref) {
      var content = _ref.content;
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("cydlwp/description-detail", {
        content: content
      });
    }
  }]
});

/***/ }),

/***/ "./source/js/blocks/description-list/deprecated.js":
/*!*********************************************************!*\
  !*** ./source/js/blocks/description-list/deprecated.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([]);

/***/ }),

/***/ "./source/js/blocks/description-list/edit.js":
/*!***************************************************!*\
  !*** ./source/js/blocks/description-list/edit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var edit = function edit() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    template: [["cydlwp/description-term"]],
    allowedBlocks: ["cydlwp/description-term", "cydlwp/description-detail"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./source/js/blocks/description-list/index.js":
/*!****************************************************!*\
  !*** ./source/js/blocks/description-list/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ "./source/js/icons/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./source/js/blocks/description-list/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./source/js/blocks/description-list/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated */ "./source/js/blocks/description-list/deprecated.js");



console.log(_icons__WEBPACK_IMPORTED_MODULE_2__["DescriptionListIcon"]);



var name = "description-list";
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("cydlwp/".concat(name), {
  title: "Description List",
  icon: _icons__WEBPACK_IMPORTED_MODULE_2__["DescriptionListIcon"],
  category: "common",
  supports: {
    className: false,
    align: false
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("description list"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Description List")],
  attributes: {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./source/js/blocks/description-list/save.js":
/*!***************************************************!*\
  !*** ./source/js/blocks/description-list/save.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var attributes = _ref.attributes;
  var className = attributes.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("dl", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
});

/***/ }),

/***/ "./source/js/blocks/description-term/block.json":
/*!******************************************************!*\
  !*** ./source/js/blocks/description-term/block.json ***!
  \******************************************************/
/*! exports provided: name, category, attributes, supports, parent, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"cydlwp/description-term\",\"category\":\"common\",\"attributes\":{\"content\":{\"type\":\"string\"}},\"supports\":{\"className\":\"false\",\"align\":\"false\"},\"parent\":[\"cydlwp/description-list\"]}");

/***/ }),

/***/ "./source/js/blocks/description-term/deprecated.js":
/*!*********************************************************!*\
  !*** ./source/js/blocks/description-term/deprecated.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([]);

/***/ }),

/***/ "./source/js/blocks/description-term/edit.js":
/*!***************************************************!*\
  !*** ./source/js/blocks/description-term/edit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./source/js/blocks/description-term/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./source/js/blocks/description-term/block.json", 1);
/* harmony import */ var _description_detail_block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../description-detail/block.json */ "./source/js/blocks/description-detail/block.json");
var _description_detail_block_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../description-detail/block.json */ "./source/js/blocks/description-detail/block.json", 1);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var edit = function edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      mergeBlocks = _ref.mergeBlocks,
      onReplace = _ref.onReplace,
      onRemove = _ref.onRemove;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tag: "dt",
    value: attributes.content,
    onChange: function onChange(content) {
      setAttributes({
        content: content
      });
    },
    onSplit: function onSplit(value) {
      console.log(value);

      if (!value) {
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["createBlock"])(_description_detail_block_json__WEBPACK_IMPORTED_MODULE_5__["name"]);
      }

      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["createBlock"])(_block_json__WEBPACK_IMPORTED_MODULE_4__["name"], _objectSpread(_objectSpread({}, attributes), {}, {
        content: value
      }));
    },
    onMerge: mergeBlocks,
    onReplace: onReplace,
    onRemove: onRemove,
    placeholder: attributes.placeholder || "Write term..."
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./source/js/blocks/description-term/index.js":
/*!****************************************************!*\
  !*** ./source/js/blocks/description-term/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ "./source/js/icons/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./source/js/blocks/description-term/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./source/js/blocks/description-term/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated */ "./source/js/blocks/description-term/deprecated.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transforms */ "./source/js/blocks/description-term/transforms.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./source/js/blocks/description-term/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./source/js/blocks/description-term/block.json", 1);








Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_block_json__WEBPACK_IMPORTED_MODULE_7__["name"], {
  title: "Description Term",
  icon: _icons__WEBPACK_IMPORTED_MODULE_2__["DescriptionTitleIcon"],
  category: _block_json__WEBPACK_IMPORTED_MODULE_7__["category"],
  supports: {
    className: false,
    align: false
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("description term"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Description Term")],
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_7__["attributes"],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_6__["default"],
  parent: _block_json__WEBPACK_IMPORTED_MODULE_7__["parent"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./source/js/blocks/description-term/save.js":
/*!***************************************************!*\
  !*** ./source/js/blocks/description-term/save.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var attributes = _ref.attributes;
  var content = attributes.content;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: "dt",
    value: content
  });
});

/***/ }),

/***/ "./source/js/blocks/description-term/transforms.js":
/*!*********************************************************!*\
  !*** ./source/js/blocks/description-term/transforms.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  from: [{
    type: "block",
    blocks: ["cydlwp/description-detail"],
    transform: function transform(_ref) {
      var content = _ref.content;
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("cydlwp/description-term", {
        content: content
      });
    }
  }]
});

/***/ }),

/***/ "./source/js/blocks/index.js":
/*!***********************************!*\
  !*** ./source/js/blocks/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _description_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./description-list */ "./source/js/blocks/description-list/index.js");
/* harmony import */ var _description_term__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description-term */ "./source/js/blocks/description-term/index.js");
/* harmony import */ var _description_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description-detail */ "./source/js/blocks/description-detail/index.js");




/***/ }),

/***/ "./source/js/editor.js":
/*!*****************************!*\
  !*** ./source/js/editor.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./source/js/blocks/index.js");


/***/ }),

/***/ "./source/js/icons/description-detail.js":
/*!***********************************************!*\
  !*** ./source/js/icons/description-detail.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


var DescriptionDetailIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4.05,15.69,0,13.92V13L4.05,11.2v1.14L1.23,13.42l2.82,1.13Zm7.16.67H9.64v-.94a2.54,2.54,0,0,1-.93.81,2.4,2.4,0,0,1-1.08.27,2.44,2.44,0,0,1-1.9-.89A3.64,3.64,0,0,1,5,13.12a3.61,3.61,0,0,1,.76-2.48,2.54,2.54,0,0,1,1.94-.85,2.42,2.42,0,0,1,1.87.9V7.5h1.69ZM6.68,13A3.09,3.09,0,0,0,7,14.5a1.3,1.3,0,0,0,1.15.66,1.23,1.23,0,0,0,1-.5,2.32,2.32,0,0,0,.41-1.49,2.49,2.49,0,0,0-.4-1.59,1.26,1.26,0,0,0-1-.49,1.27,1.27,0,0,0-1,.48A2.19,2.19,0,0,0,6.68,13Zm12.1,3.35H17.2v-.94a2.46,2.46,0,0,1-.93.81,2.37,2.37,0,0,1-1.08.27,2.4,2.4,0,0,1-1.89-.89,3.6,3.6,0,0,1-.79-2.49,3.56,3.56,0,0,1,.77-2.48,2.51,2.51,0,0,1,1.94-.85,2.41,2.41,0,0,1,1.86.9V7.5h1.7ZM14.24,13a3,3,0,0,0,.29,1.49,1.27,1.27,0,0,0,1.15.66,1.21,1.21,0,0,0,1-.5,2.26,2.26,0,0,0,.41-1.49,2.56,2.56,0,0,0-.39-1.59,1.29,1.29,0,0,0-1-.49,1.27,1.27,0,0,0-1,.48A2.19,2.19,0,0,0,14.24,13ZM20,15.69V14.55l2.82-1.11L20,12.34V11.2L24,13v1Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (DescriptionDetailIcon);

/***/ }),

/***/ "./source/js/icons/description-list.js":
/*!*********************************************!*\
  !*** ./source/js/icons/description-list.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


var DescriptionListIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4.89,16.45,0,14.32V13.15L4.89,11v1.39l-3.41,1.3,3.41,1.35Zm8.65.81h-1.9V16.12a3,3,0,0,1-1.12,1,2.89,2.89,0,0,1-1.31.33,3,3,0,0,1-2.29-1.08,4.41,4.41,0,0,1-1-3,4.33,4.33,0,0,1,.93-3,3,3,0,0,1,2.34-1,2.9,2.9,0,0,1,2.25,1.08V6.56h2Zm-5.47-4A3.51,3.51,0,0,0,8.41,15a1.54,1.54,0,0,0,1.39.81,1.5,1.5,0,0,0,1.2-.6,2.82,2.82,0,0,0,.5-1.8A3.07,3.07,0,0,0,11,11.49a1.59,1.59,0,0,0-2.46,0A2.59,2.59,0,0,0,8.07,13.22Zm7.49,4V6.56h2v10.7Zm3.54-.8V15.08l3.42-1.34L19.1,12.41V11L24,13.16v1.16Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (DescriptionListIcon);

/***/ }),

/***/ "./source/js/icons/description-title.js":
/*!**********************************************!*\
  !*** ./source/js/icons/description-title.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


var DescriptionTitleIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4.73,16.3,0,14.25V13.11l4.73-2V12.4l-3.3,1.26L4.73,15Zm8.36.79H11.25V16a3,3,0,0,1-1.08,1,2.81,2.81,0,0,1-1.27.32,2.87,2.87,0,0,1-2.21-1,4.28,4.28,0,0,1-.92-2.91,4.15,4.15,0,0,1,.9-2.89,2.9,2.9,0,0,1,2.26-1,2.81,2.81,0,0,1,2.18,1.05V6.74h2ZM7.8,13.18a3.4,3.4,0,0,0,.33,1.73,1.5,1.5,0,0,0,1.34.78,1.44,1.44,0,0,0,1.16-.58,2.69,2.69,0,0,0,.48-1.74,3,3,0,0,0-.46-1.86,1.47,1.47,0,0,0-1.19-.57,1.51,1.51,0,0,0-1.19.56A2.61,2.61,0,0,0,7.8,13.18ZM18.48,9.59v1.58H17.13v3a6.73,6.73,0,0,0,0,1.07.37.37,0,0,0,.17.25.55.55,0,0,0,.34.1,2.42,2.42,0,0,0,.79-.19L18.64,17a3.88,3.88,0,0,1-1.56.3,2.5,2.5,0,0,1-1-.18,1.38,1.38,0,0,1-.63-.47,1.75,1.75,0,0,1-.28-.77,10.22,10.22,0,0,1-.06-1.4V11.17h-.91V9.59h.91V8.1l2-1.15V9.59Zm.79,6.72V15l3.3-1.3-3.3-1.29V11.07l4.73,2v1.13Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (DescriptionTitleIcon);

/***/ }),

/***/ "./source/js/icons/index.js":
/*!**********************************!*\
  !*** ./source/js/icons/index.js ***!
  \**********************************/
/*! exports provided: DescriptionListIcon, DescriptionTitleIcon, DescriptionDetailIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _description_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./description-list */ "./source/js/icons/description-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionListIcon", function() { return _description_list__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _description_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description-title */ "./source/js/icons/description-title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionTitleIcon", function() { return _description_title__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _description_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description-detail */ "./source/js/icons/description-detail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionDetailIcon", function() { return _description_detail__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/primitives":
/*!*********************************************!*\
  !*** external {"this":["wp","primitives"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["primitives"]; }());

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map