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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/components/block-field.tsx":
/*!*******************************************!*\
  !*** ./blocks/components/block-field.tsx ***!
  \*******************************************/
/*! exports provided: BlockField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockField", function() { return BlockField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields */ "./blocks/components/fields/index.ts");


const FieldsDictionary = {
    'text': _fields__WEBPACK_IMPORTED_MODULE_1__["TextField"],
    'media': _fields__WEBPACK_IMPORTED_MODULE_1__["MediaField"],
    'richText': _fields__WEBPACK_IMPORTED_MODULE_1__["RichTextField"],
    'datePicker': _fields__WEBPACK_IMPORTED_MODULE_1__["DatePickerField"]
};
const BlockField = props => {
    var _a, _b, _c;
    const { config, value, onChange } = props;
    const DynamicField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        var _a, _b;
        return (_b = FieldsDictionary[(_a = config.field) !== null && _a !== void 0 ? _a : 'text']) !== null && _b !== void 0 ? _b : FieldsDictionary.text;
    }, [config === null || config === void 0 ? void 0 : config.type]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "field-wrapper", style: { flex: "0 1 " + ((_a = config.width) !== null && _a !== void 0 ? _a : 100) + '%' } }, !((_b = config === null || config === void 0 ? void 0 : config.children) === null || _b === void 0 ? void 0 : _b.length)
        ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DynamicField, { label: (_c = config.label) !== null && _c !== void 0 ? _c : config.name, onChange: onChange, value: value, placeholder: "" })
        : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fields__WEBPACK_IMPORTED_MODULE_1__["AddableField"], { config: config, onChange: onChange, value: value }),
            JSON.stringify(value)));
};


/***/ }),

/***/ "./blocks/components/block-wrapper.tsx":
/*!*********************************************!*\
  !*** ./blocks/components/block-wrapper.tsx ***!
  \*********************************************/
/*! exports provided: BlockWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockWrapper", function() { return BlockWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-field */ "./blocks/components/block-field.tsx");


const BlockWrapper = props => {
    const { blockName = "", children, config: { fields = [] }, setAttributes, attributes } = props;
    // useEffect(() => {
    //   console.log({attributes})
    // }, [attributes]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "BlockWrapper" },
        !!(blockName === null || blockName === void 0 ? void 0 : blockName.length) && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "title" }, blockName)),
        !!children && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "BlockWrapper__children" }, children),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "BlockWrapper__content", style: { display: "flex", flexFlow: "row wrap" } }, fields.map(config => {
            var _a;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_block_field__WEBPACK_IMPORTED_MODULE_1__["BlockField"], { config: config, onChange: (content) => setAttributes(Object.assign(Object.assign({}, attributes), { [config.name]: content })), value: (_a = attributes[config.name]) !== null && _a !== void 0 ? _a : "" }));
        }))));
};
/* harmony default export */ __webpack_exports__["default"] = (BlockWrapper);


/***/ }),

/***/ "./blocks/components/fields/addable.tsx":
/*!**********************************************!*\
  !*** ./blocks/components/fields/addable.tsx ***!
  \**********************************************/
/*! exports provided: AddableField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddableField", function() { return AddableField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-field */ "./blocks/components/block-field.tsx");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const AddableFieldItem = props => {
    const { config, onChange, index, value } = props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_block_field__WEBPACK_IMPORTED_MODULE_1__["BlockField"], { config: config, onChange: value => onChange(value, index), value: value });
};
const AddableField = (props) => {
    const _a = props.config, _b = _a === void 0 ? {} : _a, { children: fields = [] } = _b, componentProps = __rest(_b, ["children"]), { onChange = () => null, value = [] } = props;
    const count = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => value === null || value === void 0 ? void 0 : value.length, [value]);
    const updateChild = (name, changes, index) => {
        const newValues = [...value];
        newValues[index] = Object.assign(Object.assign({}, newValues[index]), { [name]: changes });
        return onChange(newValues);
    };
    const addItem = () => onChange([...value, ""]);
    const removeItem = (index) => onChange(value.filter((_, i) => i !== index));
    console.log({ componentProps });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            "Count: ",
            count),
        Array.from({ length: count }, (_) => fields)
            .map((fields, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            fields.map((config) => {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddableFieldItem, { config: config, onChange: value => updateChild(config.name, value, index), value: (_a = value[index]) === null || _a === void 0 ? void 0 : _a[config.name], index: index });
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: e => removeItem(index) },
                "Remove #",
                index))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: e => addItem() }, "Aggiungi nuovo"));
};
/* harmony default export */ __webpack_exports__["default"] = (AddableField);
//   const {
//     children = [],
//     onChange = () => null,
//     value = []
//   } = props;
//
//   const [items, setItems] = useState(value);
//   const [fullValue, setFullValue] = useState(value);
//   const addItem = () => setItems(items + 1);
//   const removeItem = () => items > 0 ? setItems(items - 1) : 0;
//   const updateChildrenValue = (addableIndex, fieldIndex, e) => {
//
//   };
//
//   useEffect(() => {
//     const array = fullValue;
//     array.length = items;
//
//   }, [items])
//
//   return (
//       <div>
//         <div>{JSON.stringify(value)}</div>
//         {
//           Array.from({length: items})
//               .map((_, addableIndex) => {
//                 return children.map((field, fieldIndex) => {
//                   return (<WFField fieldConfig={field}
//                                    value={""}
//                                    onChange={e => updateChildrenValue(addableIndex, fieldIndex, e)}/>)
//                 });
//               })
//         }
//
//         <button onClick={addItem}>Add</button>
//         <button onClick={removeItem}>Remove</button>
//       </div>
//   );
// };
//
// export default AddableField;


/***/ }),

/***/ "./blocks/components/fields/date-picker.tsx":
/*!**************************************************!*\
  !*** ./blocks/components/fields/date-picker.tsx ***!
  \**************************************************/
/*! exports provided: DatePickerField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerField", function() { return DatePickerField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper */ "./blocks/components/fields/wrapper.tsx");

// import DayPickerInput from 'react-day-picker/DayPickerInput';

const DatePickerField = (props) => {
    const { label = "", value, onChange } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wrapper__WEBPACK_IMPORTED_MODULE_1__["FieldWrapper"], { label: label }));
};
/* harmony default export */ __webpack_exports__["default"] = (DatePickerField);


/***/ }),

/***/ "./blocks/components/fields/index.ts":
/*!*******************************************!*\
  !*** ./blocks/components/fields/index.ts ***!
  \*******************************************/
/*! exports provided: AddableField, DatePickerField, MediaField, TextField, RichTextField, FieldWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addable */ "./blocks/components/fields/addable.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddableField", function() { return _addable__WEBPACK_IMPORTED_MODULE_0__["AddableField"]; });

/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-picker */ "./blocks/components/fields/date-picker.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerField", function() { return _date_picker__WEBPACK_IMPORTED_MODULE_1__["DatePickerField"]; });

/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media */ "./blocks/components/fields/media.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaField", function() { return _media__WEBPACK_IMPORTED_MODULE_2__["MediaField"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "./blocks/components/fields/text.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _text__WEBPACK_IMPORTED_MODULE_3__["TextField"]; });

/* harmony import */ var _rich_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rich-text */ "./blocks/components/fields/rich-text.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextField", function() { return _rich_text__WEBPACK_IMPORTED_MODULE_4__["RichTextField"]; });

/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wrapper */ "./blocks/components/fields/wrapper.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldWrapper", function() { return _wrapper__WEBPACK_IMPORTED_MODULE_5__["FieldWrapper"]; });









/***/ }),

/***/ "./blocks/components/fields/media.tsx":
/*!********************************************!*\
  !*** ./blocks/components/fields/media.tsx ***!
  \********************************************/
/*! exports provided: MediaField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaField", function() { return MediaField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const MediaField = props => {
    const { label = "", onChange, value, placeholder } = props;
    const { value: { id: currentSelectedId } } = props;
    const isMediaSeleced = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => !!currentSelectedId, [currentSelectedId]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        !isMediaSeleced &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], { onSelect: onChange, allowedTypes: ['image'], multiple: false, labels: { title: 'The Image' }, value: props.value, addToGallery: true }),
        isMediaSeleced &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "wf-media-preview" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: props.value.url, alt: props.value.alt })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { type: "button", onClick: e => props.onChange({}) }, "Rimuovi Immagine"))));
};
/* harmony default export */ __webpack_exports__["default"] = (MediaField);


/***/ }),

/***/ "./blocks/components/fields/rich-text.tsx":
/*!************************************************!*\
  !*** ./blocks/components/fields/rich-text.tsx ***!
  \************************************************/
/*! exports provided: RichTextField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextField", function() { return RichTextField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrapper */ "./blocks/components/fields/wrapper.tsx");



const RichTextField = props => {
    const { value, placeholder, onChange, label = "" } = props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wrapper__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"], { label: label },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], { value: value, placeholder: placeholder, onChange: onChange }));
};
/* harmony default export */ __webpack_exports__["default"] = (RichTextField);


/***/ }),

/***/ "./blocks/components/fields/text.tsx":
/*!*******************************************!*\
  !*** ./blocks/components/fields/text.tsx ***!
  \*******************************************/
/*! exports provided: TextField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrapper */ "./blocks/components/fields/wrapper.tsx");



const TextField = props => {
    const { label = "", onChange, value, placeholder } = props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wrapper__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"], { label: label },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PlainText"], { onChange: onChange, value: value, placeholder: placeholder }));
};
/* harmony default export */ __webpack_exports__["default"] = (TextField);


/***/ }),

/***/ "./blocks/components/fields/wrapper.tsx":
/*!**********************************************!*\
  !*** ./blocks/components/fields/wrapper.tsx ***!
  \**********************************************/
/*! exports provided: FieldWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldWrapper", function() { return FieldWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FieldWrapper = (props) => {
    const { label, children } = props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        !!(label === null || label === void 0 ? void 0 : label.length) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, label),
        !!children && children);
};
/* harmony default export */ __webpack_exports__["default"] = (FieldWrapper);


/***/ }),

/***/ "./blocks/index.tsx":
/*!**************************!*\
  !*** ./blocks/index.tsx ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_block_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/block-wrapper */ "./blocks/components/block-wrapper.tsx");
var _a, _b, _c;

// import {__} from "@wordpress/i18n";


const blockFactory = (config) => {
    const { name, fields } = config;
    const attributes = fields.reduce((acc, { type, name }) => {
        return Object.assign(Object.assign({}, acc), { [name]: { type, } });
    }, {});
    return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])(config.blockName, {
        title: config.name,
        // description: __('An example block', 'cy'),
        category: 'layout',
        icon: 'smiley',
        supports: { html: true },
        attributes,
        edit: (props) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_block_wrapper__WEBPACK_IMPORTED_MODULE_2__["BlockWrapper"], Object.assign({ blockName: name, config: config }, props)))),
        save: (props) => {
            console.log('save', { props });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Hello!");
        }
    });
};
(_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.CY) === null || _a === void 0 ? void 0 : _a.blocks) === null || _b === void 0 ? void 0 : _b.forEach) === null || _c === void 0 ? void 0 : _c.call(_b, config => {
    const block = blockFactory(config);
    console.log({ block });
});


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map