(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __rest; });
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __generator; });
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __read; });
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __spreadArray; });
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ __webpack_exports__["a"] = (invariant);


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (resolvePathname);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (valueEqual);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)))

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(34);
            var content = __webpack_require__(62);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(34);
            var content = __webpack_require__(68);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".rating {\n  background: green;\n  border-radius: 12px;\n  color: white;\n  width: 8%;\n  padding: 10px;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://src/style.scss","webpack://src/style.css"],"names":[],"mappings":"AA4CA;EAzCI,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,aAAa;ACDjB;AACA,oCAAoC","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["a"] = (warning);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(26);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(19);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(20);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(21);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(22);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(23);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(15);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(16);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./src/style.css
var src_style = __webpack_require__(67);

// CONCATENATED MODULE: ./src/components/movie.jsx






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var movie_Movie = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Movie, _React$Component);

  var _super = _createSuper(Movie);

  function Movie(props) {
    var _this;

    classCallCheck_default()(this, Movie);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  createClass_default()(Movie, [{
    key: "render",
    value: function render() {
      var movie = this.props.movie;
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "card m-2"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "card-body"
      }, console.log('props', this.props), /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-2 mx-2"
      }, /*#__PURE__*/react_default.a.createElement("h1", null, movie.rank), /*#__PURE__*/react_default.a.createElement("img", {
        style: {
          height: "297px",
          width: "200px"
        },
        src: movie.image
      })), /*#__PURE__*/react_default.a.createElement("div", {
        className: "col align-items-center mx-4"
      }, /*#__PURE__*/react_default.a.createElement("h2", {
        className: "card-text rating"
      }, movie.imDbRating), /*#__PURE__*/react_default.a.createElement("h5", {
        className: "card-title"
      }, movie.fullTitle), /*#__PURE__*/react_default.a.createElement("p", {
        className: "card-text"
      }, movie.crew))), /*#__PURE__*/react_default.a.createElement("a", {
        href: "#",
        className: "btn btn-primary my-2"
      }, "Add to cart")));
    }
  }]);

  return Movie;
}(react_default.a.Component);

/* harmony default export */ var components_movie = (movie_Movie);
// CONCATENATED MODULE: ./src/components/movies.jsx








function movies_createSuper(Derived) { var hasNativeReflectConstruct = movies_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function movies_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var movies_Movies = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Movies, _React$Component);

  var _super = movies_createSuper(Movies);

  function Movies(props) {
    var _this;

    classCallCheck_default()(this, Movies);

    _this = _super.call(this, props);
    _this.state = {
      movies: []
    };
    _this.run = true;
    return _this;
  }

  createClass_default()(Movies, [{
    key: "getMovies",
    value: function () {
      var _getMovies = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this2 = this;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.run) {
                  this.run = false;
                  fetch('https://imdb-api.com/en/API/MostPopularMovies/k_73lbxs1j', {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  }).then(function (response) {
                    return response.json();
                  }).then(function (result) {
                    // this is the data we get after putting our data,
                    _this2.setState({
                      movies: result.items
                    });

                    console.log('movies', _this2.state.movies);
                  });
                }

                ;

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMovies() {
        return _getMovies.apply(this, arguments);
      }

      return getMovies;
    }()
  }, {
    key: "render",
    value: function render() {
      this.getMovies();
      var movies = this.state.movies; // let fakeMovies = [{rank: 1, fullTitle: "Dora", id: "sdfasgivbas"}, {rank: 2, id: "bsvigabrs"}]

      return /*#__PURE__*/react_default.a.createElement("div", null, console.log(this.state.movies), movies.map(function (movie, index) {
        return /*#__PURE__*/react_default.a.createElement(components_movie, {
          key: index,
          id: movie.id,
          movie: movie
        });
      }));
    }
  }]);

  return Movies;
}(react_default.a.Component);

/* harmony default export */ var components_movies = (movies_Movies);
// CONCATENATED MODULE: ./src/images/streamlineLogo.png
/* harmony default export */ var streamlineLogo = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB6+SURBVHhe7X0JlBzVee53q7fp2VeNRpoFSSAJtIFYhGQDxoCCwdjWs+NEQGLC4jh2WOzk5cXHz8eO3znYPu88xw87zrGdxEsSk2A/wAtgs4NkQCbskpCQRmg00iyafeu9677vq56G0TCDhpnu0cjMB7+qu7qqpup+99/uVpjHPOYxj5MHZnR7MkD3OpkERsWhpCjJ0a2dROYs9DBzFSpciY8SpiymnEJpoCyk1FAqKcUwpoBbHavnsfyPZNgIP/dSOimtlGbKa5QuSpzijsqcwlwiRPeiwvdTSimnUtZQVrPAl8E4VXCcEkqRR4DEFwiiIByAj6c4PheOsUinDcVBMu4iHk/AujHKCFx3CG66j9t9vObvKM9Q9DlGSVPmBE40ISIgqwGLKOdQzmVhr4TPVwvHXw5/oAzFJYWoa3LQQI7q6qkbPLRygUVphUFhsUOS+CQkw/BxLC2S6xoSYjHY76Kn06Cj1eAglWP/LouutghikT6kUodJ0LP8e7+kvEjpp5xwYk4EITItQUohZTllA2/jPBbqchZ+FQKBCpRXFaFpuYMVZxosp5IspqVS4YeLQI0AQrRQgRCFbsPxTfwMlsyk6EoStE7xKBAZBgb7gJb9Fi89DTy/PY2W14YRi7aSmCd5/H/yrJcpPPDEmbLZJER/SyTIFF3G2vwempqlJKGaBV2GusYCrDmXRor8LFnhoLya3oGWq7AkQ4DjzPxeRZLIGRoA2g8BL/zW4pF7LZp3DWJ4YD9N3d086ucU+ZuETpltzBYhMktVlAtZsDciFF5NU1OFJSsDOGuT8UhoPNVQCzIkFIQNa753Yt6QpnUaGbRoa7F48n6Lh/6fi4N7e6gx2+hzfsIjHqUMUWY1KpsNQmSeVlAj/hu1YSuqFzbiDz4exPmXGNQvAcqq5Ad4FE2QkROYZbhp+hqasn07LX7178C2B6L0O3uQTv2Uv/4bpYMya74ln9Uwa6IuoVZ8hqZnK85YX4cb/kcAl3/cwWlrDB2z/IKB329OCBmCoSksKDRYwEBh5ZnU4wUBdHfU0KytJCkKtRUyk7HZISVfhKhwlSNczcL+NKrrLsRFHyzFTZ83WH+BodM+sSRMBB+Dg+IyZjorDMXBUH8JujtPRTK5jL5HWnKUkne/kg9CFEXVkpObEAjeSD+xGluuL8C1t/JBl7M2FpAIHTIHoQoSZACxsMFQgx1GaSGGyY2IRlbSryj6krYoqcwbck2ISrqeD3YDC/7PsOqcJbj2Fj+u2GpoCgyjKmrENJRCuUU6ZZFgBY0zj1OkFB2RGOYUTO3GSpTH8ZgUj5Xj1rkyS1NVRpEi7S2vNlixjvfs85GUOgwPrvD8DbCbkjdNyaXJ0LXq+EAfZxT1OazdsBDX/ZXPM1FFJVMvEMG6FkkV/mgOMTJkcbSNEdHBTLja38Ocopf7hx0ee+yFfYE0IzWL6lr6BbqAhQ2sIksNypjHFIzmMUzwvYI/HlymI4N9Fvf9xOLuf05j70tKIm+nKJHMi0/JJSE0wLicZHwFK9Yuwaf/jmS8J+O0p0KGanIqaVn4mQI/sNvF7ueBPS8ZHGqGGRoxJs1LuQ6MdSzsaIla/mu89qvMF37VF2tYmA4TD581tiBgbUOjpcYCZ/Kelp0Oz48pulNi+Xb357LcW/al8K0vGjz4s19xz1coL1HmNCEyVe9jzfsr+oz341NfDOD8Sx2UlB2fDCVr0oa+LuD1vRZPPwT87gk4nV0wCWN8bsj6nCobKFiKQMEplEbjD9Zan7+SZVlsjBNK0yR5hFibcKybcNxUPy1Wh00l2pGMHTTxyKs2lWonnxHjBnloY4PFpkuB91yuVgDmP+UiZmKtkZa0tyTxf7/g4P47pSEiRBn9nCZE7VA3oa7pb7DlugJs/ctMJHU8MlL0C8oB9rzAxOxumKceg2/YGr+pYSS6zhaUbkBB8Rr4Q4tZ5gUsLh9FbY/k3wsMqC1SiOzfIbfSDe2CTfOrfIi2cZuKt7uxoedNZGAb3czLSDm9xq2tsPaiK8AIUK0DoxozrkVglgnJlVPfzBL8Y6w5byk+8bmM7VYYORlknhIxiwOvWvz8xzD/+h3j39lsCu0KlC+4HhWLbzElNR8x4ZIzHX9okfH5S4wjQpwgy95P8VFIhogY/ccTfs7sl/A4J0AJsfIXGl+g2gkVnWEKK96PwtL3wG/L4PYcht35W2N3PU0ieIlse5kXfIxC9zo84GLHo4bJo5rvn6CoSd8zkrlGLghhtcIfoWHZB3HJlhA2XmYQCr35QOPhPeCgxXPbLP71DvgeediE4422YsGNqKi/1YRLN5hAcIFxfGEWrgo/NyFyliQR6+P1C0rWk5hN9En0Lx37jPvCQ8b2dVqU0hWWMYUKBDMafpIRovPP5FNuwbrz1zLfYAayKNMcPhGyUcv2Byx+8PcI7D6C0pIPobL+syisuMj4AxUst8DxTd0M4ZHjBPn3qqmF600ovAo20g93z3a4B2mNQiGgeiEjMmbwwklEiAz6lSgpvxQbL63F5X/EGH6SArUkY6DH4sn7rPnRHSbUBlOx4M9RtvBPTTC81HFYQCyq0YNnCbJyTsj4CxajoORsBmUFSLe+YNJ7t/NGmHPU1gPhQiAyNGuEzNQeqB97FeP8RYyusg2EmV/GQmo/2M8I6mFrfvhNE+r0o7LuZpd+wvqDCxTA5uXhpgpjAiZQ0OCULbreVNX/dxvuq7POf/zI4Gfftwx5M1HgLGEmGiIy1a99DdZtXI0LrnCwqEmG2vvxGESG5TOAH/4fOAeaTbhoIxS6uqkeNxk7hFS81UnGWxiiHqK0MiI6YtOJToWuxgtfk0f5vcumk31wU31M2iU0MekBXmPYWjdq3PQIA6ooP8cYSDOfsSnWA0ZYCoaUaHq1IuP3R+9qHAwtbYjELEEwfJpxB1uR3PWgsXHmRQVhF6++4OD1PXnXkJnYCGnHeZSv4+qbN+JPb1NG/FaNU7InB37nd+BsfwwmrUOUjHErM8YCU8GxOFRVGcIG0nS8jIxKfbTzMvbUIH/amKDlPofhr+M5euN3+bvrOGHj+MtYsVTUPtc7n1GV8RUxgJVj1vlB7ef5RYyb/ao0LExtmDUyYuNvLAedz3yGhkv3lYg2o6/t24il9xp75jlJtLU4aN6VTQznZB6ifvCPIRj8a/zFl1bj2lu5p+hYQlQplXHf9T34f/WAKQxvdAMFTXxgy+NcY92kjY/stNHBp+NuauAoT9jLs8iSSknam92+IWLize8mu/+Nffr72c9i/Y3PFAYbIe7zK5khGz6ST0JJHhNM7vcOd2m+0sbHCuGEfclEBxKR3bxPjYPgs1j7C36Ys5l6Me/6FlTV3oDPfPkUfPQmzx6M/pYhIxax+Lc7rO/ee1CcPAvVTV9gklfHY/jwoxjq+lm6p+WrnSTm5zQzX+KuKEWdWhI6pTe22c/j94/dN37/ZFuJApJRst5C/Bix2mqYkboTHqT8L8p+itQ755gJIWVMoG7HynUfxQ1/uwCbP3bstRTith108Q9/Z4ueGQCdpQmXbSBlY5IuYvDoT0nI7R0k5F4S8gXuGsj8MiMc77n0uwiZjKzxn8spZ1DU167BEHnz8seamHcGpct1qFpYyLB3dNcYZCIr3noSwcJlKCg9m2S8qRlvgsd5B+fUBHgXfRtR7Vahqo+jh9JOOUiR095JeY7C9N1z4NKKuyhfHd3mNeSaLiEqWLVj1KC8qsBr7h4PtZI271YjIV1oSJrBnceruHMa6pjKa+eUMF1CZFcrSEgRyip9XqPceMhkte6HfySoFloeeqypOgaegng1912P6RKikHcBSzmISqYixaXjCptlq3D3yEH4Y2H4C5jxTgaSobCLn/IStZxsmC4hsj+1ahBCWRWoIcfWbuVhQ8zMuzsYRJYhENTgjXlMBdPXEPkPfyDgOfSQUpIxSKeAjsPA8CADsVpm5RqsPhnUf+F1w86bLGL6GuI4NSgqCaCwiN+U6Y6BHHpnK0wsZf3BGjj+ysn9hwIez2J5afu7npQZEOKrpkMPeE3U44fdplm2vd3WpHxq7iB3CufnMRVMl5AQS7keZRUhbyA07Vdm9yhU2YdormzY663jz5NqiLWeyfI+ejve5ZiBD3HqUFoR9AaWjYcGLsQivHjQUdP26N5JMNoHPsrKux3TIUTnhFnrS+nQfQhOZI6yhaxDj8PHPI7BdAhRFngqAoESb2RfefVbTY2ax5ksuibmWhufSs3XNebzEGI6hCjGZaZnQp5D1/y+8VCfekW1STsRRsCDtGDeEMzjYSrH/N5jOoQwzsUSpNMBdLU7iI281SaJpLpGuEHrpOJHkE6q/W4eU8F0CFEL6T7mGsPobncR1ezjcfAH4I10r6xGIrEficie49V+/S7T9q7XkukQornf22mHXsPRtpg3Cn08PJNVA6w+B9FwGyIDT8F1YyzsycrbG+QwH2UR0yFEKyR00znsR1tLzBv0pjB3PIIhgwuusKlTakxk4DET6X3Yqst29Nd5TILpECLESUgzNSSKPvqHiYbJSEuWrzXYdImNLYjY/vbvm+jg09Z1oxNpCndouPo8pktIjDZoD81VBO0HgQFZsXFQcq7ZtBdfZdzNVyIS3Ge7D30dwz3323Sy1xvZMQ7z2kOoo2k6UGmmqQUfQGVNnTevvLZ+4gxQnVcL640tDiO1f5uJH33apGOd1glUWZ+/BImRXSbav60/nep7npfdwTNmb1TaHMRMCLFMwtchET8FS08vxLJVGmmW+XUs1I6lueeNywzqG2y6+zUk2p82sd7t0GC4RPQ1TRPos+mRF3lJrUGS927SuYzpEpJFGCODa5it16BhWSaymqghUXP8NJNq8RLgjPWw5cVIdb+KeNczJjH4kmGewkAh3c0jtRiMhgFl8a4zYzMhRFrSwwRxFQb7lyAUDnlNKYquJmrc1T4N8VeX77IzDM7aBFtbDZscAkb6Q4zUmlj+F3G7nkfXUkSGIjohe8Hfe4JmQogKR0P64ogMLcZgbxMzdAdNyzMFPxEpgqcthQZVLPNTaebOvoCG73wtqxGm+atFKnUaj9pAuZzkvJ/b0ykapCZ7qPYu3bNEf+D3jqCZmixpSRsjLoOBvsXoOLTQm6tXv8RQYyb2KVlo6piOKa/KHL/mPIP3fgDc+lFTp1GR1XDT1Bqzhp8v4hlXkaAruD2L0kBRE45IkahBLUuScNISNUk1fseooHyYmvGXWNS0Ch/YGsRV12YmVI7v3n07aJS6pkIr+9dU6M7DWuMqMwdx306QcJe/xZBMRpGSpAZJWhvPlO/RuGAN8XydoqUwFK3J5Em05F8mEJnjyBUhgoYvvo9m61ZUVJ+N915e6I33XcHkUCZKTfLvBMr+NfFfiwDE6Oe1KEBfl/Vm6jbvBg68CrQ2a1+api5OgmIkSNsoSerg+SJGBEk0BFSjE9XwJnKykvVRcwa5JETX0mIzZ9J/3ILCkosYUVXhg9c4OO9izdtzvAmVaniczL+8HdQ6444uKJCkFmlhsmjEoveo9Yg5SAXRqnGHWP69R9MkMYU0D05SUjwhnerl+SJpz6hIo6iCHknSJoXbIuiEalEuCclCXYgaqngjC38Lc5BGLGwMeI774g9lmlNKyhWNZZpXZoIsSVo5ziPKE4t+RtBtLRkNaqE10yyojlZgeDBJIpMkNM7jZPa6eQ3aRG96wQsUEabB3gpWJLPeaZYPQgSVtCKjqygfgs+3GsGCCuYpxdQaPy7+sMHaDcabWKk5fO/Ez0wFGoaksWEpStIjyzISzJAiLWrebXGAZk+Ll40MJahNCcRjNHcJBSiv8ApaIPN5ijRIi5hJi2bFvOWLEEHX1giIEkojZSP9yJV0/GegqLgSS04PYdNlDs59H9B0mkERs/lcLeU3EaRNHkkkSBLXIpm9lgRZvErl2PMii7/Zoq8nwcAhTp81QEKpPXYbz36KIu1Ro90EHUC5Qz4JGQuFpJpnUU3RNLirqBXrScAiLFhchNXnBLBpM7P4c6hX1RlytMClcpZ8QgPCRZI0KJkw9D2ut3LpS1SQXf+lFRxSGBqIITI8SBKfIqmaG/IwRZ10efE1M81DpgrdvKKaQYoinkdZGM+yEHow2OfQIfvxu8d9ePbxgLfqj6Kr7PPKz/h4m28ztmva0CV1bSWyWiWorNKg6VQH699rcOGVwNrzHdQsDPIeSqhRp9D/1NMcyrccoOh5co7ZImQsVNpqr1L+8Axr3WOspbsRj8bR0+nzzMf2+wN4ZYcPHYeZl9BCKPGUP1ABZhaJySNBzDHV/KMlpRY1Op6vu4D5aLgogM4ji9HXTcdnGTF4/iXnfuVEEJKFEjXVMi1grBD0cSaGj9M0tCJKco4eSWPns7Tev/F52tNK+66FBxTuJuJavZrkvEFQfsjRtaU9hcUG9cvUHOTD63sqGSBUsyJpEWZFZHqOnOFEEpKFbFNWa7SuoRYH+zW1YgfJaSE5Q+jtTGHvy0k887CDbb/2YxfLop2VVB1jUZpzZfZaQU7ImLfckqRLFRYZRom61wD27Sxh6BwlKcxOMcGgguljLhAyFnpgmQHZaWXWCj0f5IM/SrO2jz7nKIYHRhiuRmnSktj2gIMn7/NjJx1wCxPC7g6LISrcyFBm6T+ZOcUtufBBOl35UxG1pWVfCJ2Ha3hPv+UvqkQ505Lc1aL8QnmNKo8aERmCeUuUr6WsYkGdStNSQymj8y1jTS5iIur3lvpQON2wVGuWqDU5E70VMwpXL6bGJE8nxO7rtnj4bos7/mcfE9Avs7JoIqhIyQlOFkLGI0uQRHmOli9XMz1ZwDIWdC2lnGFzKbWjlA66EItOySzmr57LhqXAgnqeWZbpzRRRRbyM8qCxa2VNBC2EuYeJ/RdviNCf3I1E7Gvcq4Uxc4KTlZDxEEF6Fm2V72iFO5EkWUZpIkFV1CaRVPYGSbX1DupJjlbY1laaVME8SD2fWgloss62wwcs/uFLSTz5wCsMNG7mHk2hzgnySYhqr64vvzDbTd/6u2NFLQaaecpS9whaR9lofOHlgTA1BmmTdoeMG0hZW11pseps4MIPGpyx3qCuwXhvYhiLrnaLn343jZ9+r5Of/4x7HqHkxI/oZvMBzdLVygcqAD2NvKtE0ZRuPLud7PP4fVM5Zir7JILu7ZOBglNurFl6uzy+L7NY5m6TjB5gLHAUqSIX9n2XAR//lMHSlZnG0Cz6GX7/5i6Lf/raINoP3cg9WpRGrcUzRj4IkdlYQPkyZQu/VmuhF/4haYiGLiZh1ZhklYOMFRGm2HX8/lyLCJJJ2xwsPP2y+jW/cALhpd6CNOnUoJuMHrSxoedMpP9RjCSeMemtn7DY8glqSuObZaVV8R77hcV3vhzBkYOf4p57KTkJf/NBiEwVjTK+S9nkC9YFQkVq7G3S2kdEmn5xxLWW5e8tgkzRgCKGK9xnrRvnYayd2d90j5aH26Qn3iqjcB0ewJ+86XA6J3s97fMW9eWW/6f5m+aoiAPuywzOo1fmB5t2goXLffVrfpnOEPJmXwBPsonIHhw99HlEVgat/fTnM+YrC4+QX5KQL2UJ0TtH1L41Y7z5R3ILNb1/nbKFNrqidMFWlNVdZ7Turle+lgmCt8BY0oGbNF4B85t1E651IxTusxItruUVpFewrhvlhyS/Jx3+NkpWypJglnycx3CffvOuxzPdpOumh/gbFcOmSGKa57nGTfVZmieP3MWr73kLIQJNmO1q/QqGmwase/PfGqw+91hCHrkH+MevDDMnuol7tHxsTlqB80VIBaOZ21FWsQWhcE3ALjDFwYtsed31CBatdDLrnpw4xCOvpQfavu9G+h7xLVp11wQaYj0N6Wi5zcY2NFp7/W2ON0ImC+Ui99/p4gf/ewAdrXLqD1BkDmeMY2pFDqFF7Iuw9HQ/rrzGJjeutYOxX6P3yLcQG3qBNV1TE+YuqKVIRpttInnI2KWMwsavdqSeye4OF6mkzJR8h/xfTpAvQrR+Xrm3UpA6oa7+jElvvgRD2I7ew99AtP9J66YG5yQpbjpq48Ov2MGj/0lPxrKuqrVe0/xYqN2sp9NFOqV3IspU5exZ8kGIVDtEQqpZs4Le0k0rzwKuucW4H/oohkMvo6ftmxjq+aXVApc5fJYZI50aspGBbbb38B0Yjj1u7PpzgQZqyNiQV9BQpbYWjXY5wm857UHMByHKQRbSh5Sgps7nNchp2XE1V/zhJ429+pOIVHejt/PbGGj/gY2P7JE3z5x5wsAwIB2zkb6HbF/rNzA08hvjrlkN/MltmgWWGZecRZpB2vAAGF2lEGfSkqPoKot8EKKsWO1JYU389JbtFvRaCK0J/+HrDK67DfEVpegbvBO9rd+wI32PMBoaOUHaomArakd6H3T7276HiPuywYYLLa6+2ZuS98bq1lnEaMY0OGK4P8UMUgP01AuaMyhnyDXU6rqZEdZGXHF1sRedZBfmVxO42oeaTvPaj9z0IJLtO5Do3MFCGYETqLY+XwkPm2gpwFyBAXPiqBsb3GFjwy+yQlpqxiPOYOe/m/jw83TiTKE+8gngwiuN19g4vtm+uwPeUukvPt1Lk/XP3KOBeDlz6rkmRNdrgD9wHRpPW45Lt4S8KQhjH0ofNexH2tO03NiKMqQGmxFvedgkR/YZEmMdf7l1fHrn8MyJYfEzgOhjGLvXjQ4+g5GeBzDcfS+ig791UrFDTizyCqJmt0ktLoJdvwG45CPA+ZfohS9aw/6tf7+VVuq+n0RxuHknNeRO7tGiyjnDjB94HETIGvj8/4j6pevwua+HsGlzZijpZBjotd7Y3Sfug9n+sPF3uygIrbLhsk0oKD0HwfBy+INVPH8qfReulWNOxduRimmlbEpcq2UfYmDU7k0QSrm9SJfwNhc3ZFp4G5ZZbwxyLc2pTGrVwkyT/ESv24gzXN/+a4uv3tqFrrYfMwr4JvdqbEDOkGtCdL0aVu2tVPfb8N4rGnDNzcYbxfF27xPRMJweVrRd/2Xx1EPAjsfh70kg4CxEoKAJ/lCTDYQW6zUTrLSFLhy/52xY9Q1zBsdNDdh0stukkkdZ6F3gZ0oXK3APXF8UbnVFptAVWGhikbSzmgVftcCishZeL+Bk79Qdi9b9Fvf80OLHf9+MWORz3PMYJadduLkmRJCW6OVgGt+7FZs/tojRFbB2w9sHEIy1vC5XjXh/fY/1xkVpBMrre+F0dMNJ68UsMmNBywhu9By1eSVJCgudyZwbTMNWVvCvs/bLVKqfY2GDZS6R6eOQlFfqRZIyne/s2TUy/4lfWXz/axHsevYJ3uunuVcjT3IaIuaDEEGkqHPob1gYV+Kyj9ZQU9SlSrusn44DjdfVq5DkQHuYq2jbRentNF4OEBlOe9cJF/oQIEElZa73Cld1Lul9ugq1y7jVZ/UEHu/FX1NB52GLu74r7ThA7fg2a4Icek5DXiFfhAgq+TMpn2UtvYoOvhh/8lnjvcbu7czXeEhzNFZXS3hodElmOCi1hJfwMTjQAIZQgfXWfdSQnXwMRZV26NV5P/l2HC/vUGfUX1MUXakZOaeYQnWdNmTn1bTQxRpdio7DKzDU72Dp6W++rm4qkGlRIWcHrxWXZQYsSLQ8rfZpJla+XuWqF1rufdni5z8Cntu2m5VBkZVWvM5JY+J45JMQQfb1KGt5FxOqMBOqU9HV7vdeWC+TkgtTkk8oK+88Qs34FnOP3/QyIlS/x79QcrE+/YTINyGCkqZOktKKWLQAR15fisMHgt5Ij4oqmZtRUuYSMVRuvdKvsxU0U8Aj96bQ3X4Pn4Fq4o2yzFuTwmwQIki9u/hAzcxuU+hobWTuUYz2Vpkai9JKaosXOR3LyjvSHpWRjs9u9ZGfvZ5FYirX0rHyV5rfuOs5OnCmGY//IsaQ/D6arh/wCC1skLOsfCK8kyfOBdTw6PVns4CupR9Yw2Ss2Iu+VqwDlqyU07eMljSgTY6aTts/caVJpfRqHpdOXW9pMF4uo8hLZkY+Rz5Fr3HVaPqSMuu96NIb1sPfxpOTDRx6uyxeo7949nH5C4uW1wYRGbmPv/0Tj9IbE3Kac0yE2SZE0N+kvfKG41zMwvkDRkfr6KyL6KB9KAg7CIQcr3lF5izAQswgu1W114Bry1rLtJ45RSDgIhYTCZnOI2mbP8jMOqolz3mNoOP5LU3BLiq1CBdZb5+OSTGMVg9g5xEaVvqL3k4X/T0Rnref4bfmg6g3UFMoNLw17zgRhGQhG6WuOI1QUWf7aopyF42f0sQeNVIWskZLq6Ql2XtloEDNcF2ZjhSPSfKYpPfdmAR/intb4yS4TyZIb3FYiGBBCYnzeyMTFXZLU0RcZiKpJXkpbjv5Xe+X0pjd7Kwpjc7PeXg7GU4kIWOhQtdqp5rFq94gTRwduxjA+PuUYxgriubGfs6KoGurS0Bvs1ZfAMM7b/ip/o6O0XgqFboGd2u9Fc1xVxSlZvXsNWYNc4WQ2YDIFclZjZOGZgmUBogYbbVvHvOYxzzmMY+TDMD/B2PNti7Wtt6nAAAAAElFTkSuQmCC");
// CONCATENATED MODULE: ./src/components/nav-bar.jsx






function nav_bar_createSuper(Derived) { var hasNativeReflectConstruct = nav_bar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function nav_bar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var nav_bar_NavBar = /*#__PURE__*/function (_React$Component) {
  inherits_default()(NavBar, _React$Component);

  var _super = nav_bar_createSuper(NavBar);

  function NavBar(props) {
    var _this;

    classCallCheck_default()(this, NavBar);

    _this = _super.call(this, props);
    _this.state = {
      url: "",
      formId: 'form',
      movies: [],
      search: ""
    };
    _this.run = true;
    return _this;
  }

  createClass_default()(NavBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react_default.a.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-light"
      }, /*#__PURE__*/react_default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, /*#__PURE__*/react_default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }, /*#__PURE__*/react_default.a.createElement("img", {
        src: streamlineLogo,
        alt: "streamline logo"
      }))), /*#__PURE__*/react_default.a.createElement("a", {
        className: "navbar-brand",
        href: "#"
      }, "Streamline"), /*#__PURE__*/react_default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, /*#__PURE__*/react_default.a.createElement("ul", {
        className: "navbar-nav mr-auto"
      }, /*#__PURE__*/react_default.a.createElement("li", {
        className: "nav-item active"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "Home")), /*#__PURE__*/react_default.a.createElement("li", {
        className: "nav-item dropdown"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        className: "nav-link dropdown-toggle",
        href: "#",
        id: "navbarDropdown",
        role: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, /*#__PURE__*/react_default.a.createElement("img", {
        src: "../images/shopping-cart.png",
        alt: "shopping cart"
      })), /*#__PURE__*/react_default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdown"
      }))), /*#__PURE__*/react_default.a.createElement("form", {
        className: "d-flex",
        onSubmit: function onSubmit() {
          return _this2.props.onSearch();
        }
      }, /*#__PURE__*/react_default.a.createElement("input", {
        className: "form-control me-2",
        type: "search",
        placeholder: "Search",
        "aria-label": "Search"
      }), /*#__PURE__*/react_default.a.createElement("button", {
        className: "btn btn-outline-success",
        type: "submit"
      }, "Search")))); // return <div>
      //     <nav className="nav-bar navbar-expand-lg navbar-light bg-light">
      //         <a className="m-2">Profile</a>
      //         <a className="m-2">Home</a>
      //     <div>
      //         <form className="form-inline my-2 my-lg-0 ">
      //             <input className="form-control mr-sm-2" type="search" placeHolder="Search" aria-label="Search"/>
      //             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      //         </form>
      //     </div>
      // </nav>
      // </div>;
    }
  }]);

  return NavBar;
}(react_default.a.Component);

/* harmony default export */ var nav_bar = (nav_bar_NavBar);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(17);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 2 modules
var Card = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Alert.js + 4 modules
var Alert = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 14 modules
var Form = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.esm.js
var index_esm = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.esm.js + 2 modules
var dist_index_esm = __webpack_require__(53);

// CONCATENATED MODULE: ./src/firebase.js
// Import the functions you need from the SDKs you need

 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyC27OWGcUbY1Al40FqE-s-061hqPEoln8g",
  authDomain: "movie-rentals-d6bf0.firebaseapp.com",
  projectId: "movie-rentals-d6bf0",
  storageBucket: "movie-rentals-d6bf0.appspot.com",
  messagingSenderId: "670663763627",
  appId: "1:670663763627:web:70a2c67f0071598b4d39ee"
}; // Initialize Firebase

var app = Object(index_esm["a" /* initializeApp */])(firebaseConfig);
var auth = Object(dist_index_esm["a" /* getAuth */])(app);
/* harmony default export */ var firebase = (app);
// CONCATENATED MODULE: ./src/contexts/AuthContext.js



var AuthContext = /*#__PURE__*/react_default.a.createContext({
  children: react["children"]
});
function useAuth() {
  return Object(react["useContext"])(AuthContext);
}
function AuthProvider() {
  var _useState = Object(react["useState"])(),
      _useState2 = slicedToArray_default()(_useState, 2),
      currentUser = _useState2[0],
      setCurrentUser = _useState2[1];

  var _useState3 = Object(react["useState"])(true),
      _useState4 = slicedToArray_default()(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  Object(react["useEffect"])(function () {
    var unsubscribe = auth.onAuthStateChanged(function (user) {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  auth.onAuthStateChanged(function (user) {
    setCurrentUser(user);
  });
  var value = {
    currentUser: currentUser,
    signup: signup
  };
  return /*#__PURE__*/react_default.a.createElement(AuthContext.Provider, null, !loading && react["children"]);
}
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/history/esm/history.js
var esm_history = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/tiny-warning/dist/tiny-warning.esm.js
var tiny_warning_esm = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var tiny_invariant_esm = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var react_router_dom_BrowserRouter = /*#__PURE__*/function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(esm_history["a" /* createBrowserHistory */])(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react_default.a.createElement(react_router["a" /* Router */], {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react_default.a.Component);

if (true) {
  react_router_dom_BrowserRouter.propTypes = {
    basename: prop_types_default.a.string,
    children: prop_types_default.a.node,
    forceRefresh: prop_types_default.a.bool,
    getUserConfirmation: prop_types_default.a.func,
    keyLength: prop_types_default.a.number
  };

  react_router_dom_BrowserRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning_esm["a" /* default */])(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : undefined;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var react_router_dom_HashRouter = /*#__PURE__*/function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(esm_history["b" /* createHashHistory */])(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react_default.a.createElement(react_router["a" /* Router */], {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react_default.a.Component);

if (true) {
  react_router_dom_HashRouter.propTypes = {
    basename: prop_types_default.a.string,
    children: prop_types_default.a.node,
    getUserConfirmation: prop_types_default.a.func,
    hashType: prop_types_default.a.oneOf(["hashbang", "noslash", "slash"])
  };

  react_router_dom_HashRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning_esm["a" /* default */])(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : undefined;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var react_router_dom_normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? Object(esm_history["c" /* createLocation */])(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react_default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = Object(esm_extends["a" /* default */])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react_default.a.createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react_default.a.createElement(react_router["b" /* __RouterContext */].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant_esm["a" /* default */])(false, "You should not use <Link> outside a <Router>") : undefined : void 0;
    var history = context.history;
    var location = react_router_dom_normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = Object(esm_extends["a" /* default */])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = Object(esm_history["e" /* createPath */])(context.location) === Object(esm_history["e" /* createPath */])(react_router_dom_normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react_default.a.createElement(component, props);
  });
});

if (true) {
  var toType = prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object, prop_types_default.a.func]);
  var refType = prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func, prop_types_default.a.shape({
    current: prop_types_default.a.any
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: prop_types_default.a.func,
    replace: prop_types_default.a.bool,
    target: prop_types_default.a.string,
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react_default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react_default.a.createElement(react_router["b" /* __RouterContext */].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant_esm["a" /* default */])(false, "You should not use <NavLink> outside a <Router>") : undefined : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = react_router_dom_normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? Object(react_router["c" /* matchPath */])(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = Object(esm_extends["a" /* default */])({}, style, activeStyle);
    }

    var props = Object(esm_extends["a" /* default */])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react_default.a.createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types_default.a.oneOf(["page", "step", "location", "date", "time", "true", "false"]);
  NavLink.propTypes = Object(esm_extends["a" /* default */])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: prop_types_default.a.string,
    activeStyle: prop_types_default.a.object,
    className: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func]),
    exact: prop_types_default.a.bool,
    isActive: prop_types_default.a.func,
    location: prop_types_default.a.object,
    sensitive: prop_types_default.a.bool,
    strict: prop_types_default.a.bool,
    style: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func])
  });
}


//# sourceMappingURL=react-router-dom.js.map

// CONCATENATED MODULE: ./src/components/SignUp.js







function SignUp() {
  var emailRef = Object(react["useRef"])();
  var passwordRef = Object(react["useRef"])();
  var passwordConfirmRef = Object(react["useRef"])();

  var _useAuth = useAuth(),
      signup = _useAuth.signup;

  var _useState = Object(react["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(e) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!(passwordRef.current.value !== passwordConfirmRef.current.value)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", setError("Passwords do not match"));

            case 3:
              _context.prev = 3;
              setError('');
              setLoading(true);
              _context.next = 8;
              return signup(emailRef.current.value, passwordRef.current.value);

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              setError("Failed to create account");

            case 13:
              setLoading(false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Card["a" /* default */].Body, null, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "text-center mb-4"
  }, "Sign Up"), error && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    variant: "danger"
  }, error), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */], {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Group, {
    id: "email"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Label, null, "Email"), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Control, {
    type: "email",
    ref: emailRef,
    required: true
  })), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Group, {
    id: "password"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Label, null, "Password"), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Control, {
    type: "password",
    ref: passwordRef,
    required: true
  })), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Group, {
    id: "password-confirm"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Label, null, "Confirm Password"), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Control, {
    type: "password",
    ref: passwordConfirmRef,
    required: true
  })), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    disabled: loading,
    className: "w-100",
    type: "submit"
  }, "Sign Up")))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "w-100 text-center mt-2"
  }, "Already have an account? ", /*#__PURE__*/react_default.a.createElement(Link, {
    to: "/Login"
  }, "Log in")));
}
// CONCATENATED MODULE: ./src/components/Main.js



function Main() {
  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(nav_bar, null), /*#__PURE__*/react_default.a.createElement(components_movies, null));
}
// CONCATENATED MODULE: ./src/components/Login.js







function Login() {
  var emailRef = Object(react["useRef"])();
  var passwordRef = Object(react["useRef"])();

  var _useAuth = useAuth(),
      signup = _useAuth.signup;

  var _useState = Object(react["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(e) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              setError('');
              setLoading(true);
              _context.next = 6;
              return signup(emailRef.current.value, passwordRef.current.value);

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              setError("Failed to create account");

            case 11:
              setLoading(false);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Card["a" /* default */].Body, null, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "text-center mb-4"
  }, "Login"), error && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    variant: "danger"
  }, error), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */], {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Group, {
    id: "email"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Label, null, "Email"), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Control, {
    type: "email",
    ref: emailRef,
    required: true
  })), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Group, {
    id: "password"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Label, null, "Password"), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Control, {
    type: "password",
    ref: passwordRef,
    required: true
  })), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    disabled: loading,
    className: "w-100",
    type: "submit"
  }, "Login")))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "w-100 text-center mt-2"
  }, "Need an account? ", /*#__PURE__*/react_default.a.createElement(Link, {
    to: "/SignUp"
  }, "Sign Up")));
}
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(86);

// CONCATENATED MODULE: ./src/components/App.jsx








function App_createSuper(Derived) { var hasNativeReflectConstruct = App_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function App_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }












var App_App = /*#__PURE__*/function (_React$Component) {
  inherits_default()(App, _React$Component);

  var _super = App_createSuper(App);

  function App() {
    var _this;

    classCallCheck_default()(this, App);

    _this = _super.call(this);
    _this.state = {
      isSearch: false,
      type: "",
      url: "",
      movies: []
    };
    return _this;
  }

  createClass_default()(App, [{
    key: "onSearch",
    value: function () {
      var _onSearch = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this2 = this;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // this.setState({isSearch: true})
                fetch(this.state.url, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }).then(function (response) {
                  return response.json();
                }).then(function (result) {
                  // this is the data we get after putting our data,
                  _this2.setState({
                    movies: result.items
                  });

                  console.log('movies', _this2.state.movies);
                });
                console.log("Search complete");

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onSearch() {
        return _onSearch.apply(this, arguments);
      }

      return onSearch;
    }()
  }, {
    key: "render",
    value: function render() {
      var isSearch = this.state.isSearch; // if(isSearch) {
      //     movies = <Movies type="search"/>
      // } else if(!isSearch) {
      //     movies = <Movies type="top"/>
      // }

      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(Container["a" /* default */], {
        className: "d-flex align-items-center justify-content-center",
        style: {
          minHeight: "100vh"
        }
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "w-100",
        style: {
          maxWidth: "400px"
        }
      }, /*#__PURE__*/react_default.a.createElement(react["BrowserRouter"], null, /*#__PURE__*/react_default.a.createElement(AuthProvider, null, /*#__PURE__*/react_default.a.createElement(react["Switch"], null, /*#__PURE__*/react_default.a.createElement(react["Route"], {
        exact: true,
        path: "/",
        component: Main
      }), /*#__PURE__*/react_default.a.createElement(react["Route"], {
        path: "/signup",
        component: SignUp
      })))), /*#__PURE__*/react_default.a.createElement(SignUp, null))));
    }
  }]);

  return App;
}(react_default.a.Component);

/* harmony default export */ var components_App = (App_App);
// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, 90)).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(82);

// CONCATENATED MODULE: ./src/index.js






react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(react_default.a.StrictMode, null, /*#__PURE__*/react_default.a.createElement(components_App, null)), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

src_reportWebVitals();

/***/ })

},[[84,1,14,2,6,7,11,16,17,19,20,9,18,3,12,15,13,4,5,8,10]]]);
//# sourceMappingURL=main.9ece008e.js.map