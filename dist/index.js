'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
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
    };
    return __assign.apply(this, arguments);
};

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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
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

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

var tslib_es6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __extends: __extends,
    get __assign () { return __assign; },
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet
});

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var ProSidebar = function (_a, ref) {
    var children = _a.children, className = _a.className, width = _a.width, collapsed = _a.collapsed, rtl = _a.rtl, image = _a.image, rest = __rest(_a, ["children", "className", "width", "collapsed", "rtl", "image"]);
    var sidebarRef = ref || React__default.createRef();
    return (React__default.createElement("div", __assign({}, rest, { ref: sidebarRef, className: classnames('pro-sidebar', className, { collapsed: collapsed, rtl: rtl }), style: { width: width } }),
        image ? React__default.createElement("img", { src: image, alt: "sidebar background", className: "sidebar-bg" }) : null,
        React__default.createElement("div", { className: "pro-sidebar-inner" }, children)));
};
var ProSidebar$1 = React.forwardRef(ProSidebar);

var SidebarHeader = function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var sidebarHeaderRef = ref || React__default.createRef();
    return (React__default.createElement("div", __assign({}, rest, { ref: sidebarHeaderRef, className: classnames('pro-sidebar-header', className) }), children));
};
var SidebarHeader$1 = React.forwardRef(SidebarHeader);

var SidebarContent = function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var sidebarContentRef = ref || React__default.createRef();
    return (React__default.createElement("div", __assign({}, rest, { ref: sidebarContentRef, className: classnames('pro-sidebar-content', className) }), children));
};
var SidebarContent$1 = React.forwardRef(SidebarContent);

var SidebarFooter = function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var sidebarFooterRef = ref || React__default.createRef();
    return (React__default.createElement("div", __assign({}, rest, { ref: sidebarFooterRef, className: classnames('pro-sidebar-footer', className) }), children));
};
var SidebarFooter$1 = React.forwardRef(SidebarFooter);

var Menu = function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, iconShape = _a.iconShape, rest = __rest(_a, ["children", "className", "iconShape"]);
    var menuRef = ref || React__default.createRef();
    return (React__default.createElement("nav", __assign({}, rest, { ref: menuRef, className: classnames('pro-menu', className, (_b = {},
            _b["shaped " + iconShape] = ['square', 'round', 'circle'].indexOf(iconShape) >= 0,
            _b)) }),
        React__default.createElement("ul", null, children)));
};
var Menu$1 = React.forwardRef(Menu);

var MenuItem = function (_a, ref) {
    var children = _a.children, className = _a.className, icon = _a.icon, active = _a.active, prefix = _a.prefix, suffix = _a.suffix, rest = __rest(_a, ["children", "className", "icon", "active", "prefix", "suffix"]);
    var menuItemRef = ref || React__default.createRef();
    return (React__default.createElement("li", __assign({}, rest, { ref: menuItemRef, className: classnames('pro-menu-item', className, { active: active }) }),
        React__default.createElement("div", { className: "pro-inner-item", tabIndex: 0, role: "button" },
            icon ? (React__default.createElement("span", { className: "pro-icon-wrapper" },
                React__default.createElement("span", { className: "pro-icon" }, icon))) : null,
            prefix ? React__default.createElement("span", { className: "prefix-wrapper" }, prefix) : null,
            React__default.createElement("span", { className: "pro-item-content" }, children),
            suffix ? React__default.createElement("span", { className: "suffix-wrapper" }, suffix) : null)));
};
var MenuItem$1 = React.forwardRef(MenuItem);

var slidedown = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var react_1 = tslib_es6.__importStar(React__default);
var SlideDownContent = (function (_super) {
    tslib_es6.__extends(SlideDownContent, _super);
    function SlideDownContent(props) {
        var _this = _super.call(this, props) || this;
        _this.outerRef = null;
        _this.handleRef = function (ref) {
            _this.outerRef = ref;
            if (_this.props.forwardedRef) {
                if (typeof _this.props.forwardedRef === 'function') {
                    _this.props.forwardedRef(ref);
                }
                else if (typeof _this.props.forwardedRef === 'object') {
                    var forwardedRef = _this.props.forwardedRef;
                    forwardedRef.current = ref;
                }
                else {
                    throw new Error("Invalid forwardedRef " + _this.props.forwardedRef);
                }
            }
        };
        _this.handleTransitionEnd = function (evt) {
            if ((evt.target === _this.outerRef) && (evt.propertyName === 'height')) {
                if (_this.state.childrenLeaving) {
                    _this.setState({ children: null, childrenLeaving: false }, function () { return _this.endTransition(); });
                }
                else {
                    _this.endTransition();
                }
            }
        };
        _this.state = {
            children: props.children,
            childrenLeaving: false
        };
        return _this;
    }
    SlideDownContent.prototype.componentDidMount = function () {
        if (this.outerRef) {
            if (this.props.closed || !this.props.children) {
                this.outerRef.classList.add('closed');
                this.outerRef.style.height = '0px';
            }
            else if (this.props.transitionOnAppear) {
                this.startTransition('0px');
            }
            else {
                this.outerRef.style.height = 'auto';
            }
        }
    };
    SlideDownContent.prototype.getSnapshotBeforeUpdate = function () {
        return this.outerRef ? this.outerRef.getBoundingClientRect().height + 'px' : null;
    };
    SlideDownContent.getDerivedStateFromProps = function (props, state) {
        if (props.children) {
            return {
                children: props.children,
                childrenLeaving: false
            };
        }
        else if (state.children) {
            return {
                children: state.children,
                childrenLeaving: true
            };
        }
        else {
            return null;
        }
    };
    SlideDownContent.prototype.componentDidUpdate = function (_prevProps, _prevState, snapshot) {
        if (this.outerRef) {
            this.startTransition(snapshot);
        }
    };
    SlideDownContent.prototype.startTransition = function (prevHeight) {
        var endHeight = '0px';
        if (!this.props.closed && !this.state.childrenLeaving && this.state.children) {
            this.outerRef.classList.remove('closed');
            this.outerRef.style.height = 'auto';
            endHeight = getComputedStyle(this.outerRef).height;
        }
        if (parseFloat(endHeight).toFixed(2) !== parseFloat(prevHeight).toFixed(2)) {
            this.outerRef.classList.add('transitioning');
            this.outerRef.style.height = prevHeight;
            this.outerRef.offsetHeight;
            this.outerRef.style.transitionProperty = 'height';
            this.outerRef.style.height = endHeight;
        }
    };
    SlideDownContent.prototype.endTransition = function () {
        this.outerRef.classList.remove('transitioning');
        this.outerRef.style.transitionProperty = 'none';
        this.outerRef.style.height = this.props.closed ? '0px' : 'auto';
        if (this.props.closed || !this.state.children) {
            this.outerRef.classList.add('closed');
        }
    };
    SlideDownContent.prototype.render = function () {
        var _a = this.props, _b = _a.as, as = _b === void 0 ? 'div' : _b, children = _a.children, className = _a.className, closed = _a.closed, transitionOnAppear = _a.transitionOnAppear, forwardedRef = _a.forwardedRef, rest = tslib_es6.__rest(_a, ["as", "children", "className", "closed", "transitionOnAppear", "forwardedRef"]);
        var containerClassName = className ? 'react-slidedown ' + className : 'react-slidedown';
        return react_1.default.createElement(as, tslib_es6.__assign({ ref: this.handleRef, className: containerClassName, onTransitionEnd: this.handleTransitionEnd }, rest), this.state.children);
    };
    SlideDownContent.defaultProps = {
        transitionOnAppear: true,
        closed: false
    };
    return SlideDownContent;
}(react_1.Component));
exports.SlideDown = react_1.forwardRef(function (props, ref) { return (react_1.default.createElement(SlideDownContent, tslib_es6.__assign({}, props, { forwardedRef: ref }))); });
exports.default = exports.SlideDown;

});

var SlideDown = unwrapExports(slidedown);
var slidedown_1 = slidedown.SlideDown;

var SubMenu = function (_a, ref) {
    var children = _a.children, icon = _a.icon, className = _a.className, title = _a.title, _b = _a.defaultOpen, defaultOpen = _b === void 0 ? false : _b, open = _a.open, prefix = _a.prefix, suffix = _a.suffix, rest = __rest(_a, ["children", "icon", "className", "title", "defaultOpen", "open", "prefix", "suffix"]);
    var _c = React.useState(!defaultOpen), closed = _c[0], setClosed = _c[1];
    var handleToggleSubMenu = function () {
        setClosed(!closed);
    };
    var subMenuRef = ref || React__default.createRef();
    return (React__default.createElement("li", { ref: subMenuRef, className: classnames('pro-menu-item pro-sub-menu', className, {
            open: typeof open === 'undefined' ? !closed : open,
        }) },
        React__default.createElement("div", __assign({}, rest, { className: "pro-inner-item", onClick: handleToggleSubMenu, onKeyPress: handleToggleSubMenu, role: "button", tabIndex: 0 }),
            icon ? (React__default.createElement("span", { className: "pro-icon-wrapper" },
                React__default.createElement("span", { className: "pro-icon" }, icon))) : null,
            prefix ? React__default.createElement("span", { className: "prefix-wrapper" }, prefix) : null,
            React__default.createElement("span", { className: "pro-item-content" }, title),
            suffix ? React__default.createElement("span", { className: "suffix-wrapper" }, suffix) : null,
            React__default.createElement("span", { className: "pro-arrow-wrapper" },
                React__default.createElement("span", { className: "pro-arrow" }))),
        React__default.createElement(SlideDown, { closed: typeof open === 'undefined' ? closed : !open, className: "pro-inner-list-item" },
            React__default.createElement("ul", null, children))));
};
var SubMenu$1 = React.forwardRef(SubMenu);

exports.Menu = Menu$1;
exports.MenuItem = MenuItem$1;
exports.ProSidebar = ProSidebar$1;
exports.SidebarContent = SidebarContent$1;
exports.SidebarFooter = SidebarFooter$1;
exports.SidebarHeader = SidebarHeader$1;
exports.SubMenu = SubMenu$1;
//# sourceMappingURL=index.js.map