"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreLoader = void 0;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var prop_types_1 = __importDefault(require("prop-types"));
var styles_1 = __importDefault(require("../../libs/styles"));
function renderStyles(logoColor, backgroundColor1, backgroundColor2) {
    if (logoColor === void 0) { logoColor = '#444'; }
    if (backgroundColor1 === void 0) { backgroundColor1 = '#FFEA00'; }
    if (backgroundColor2 === void 0) { backgroundColor2 = '#FFFF56'; }
    (0, styles_1.default)(".aj-loader{\n    position: relative;\n    padding: 48px 0;\n  }");
    (0, styles_1.default)(".atomicjolt-loading-animation {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 0 auto;\n    width: 72px;\n    height: 72px;\n    border-radius: 50%;\n    background-image: linear-gradient(to top right, ".concat(backgroundColor1, ", ").concat(backgroundColor2, ");\n    box-shadow: -2px 3px 6px rgba(0,0,0,0.25);\n  }"));
    (0, styles_1.default)(".atomicjolt-loading-animation svg {\n    width: 38px;\n    position: relative;\n    left: -2px;\n    top: -1px;\n  }");
    (0, styles_1.default)(".atomicjolt-loading-animation svg polygon, .atomicjolt-loading-animation svg polyline {\n    fill: none;\n    stroke: ".concat(logoColor, ";\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 8px;\n  }"));
    (0, styles_1.default)(".atomicjolt-loading-animation svg .cls-1 {\n    stroke-dasharray: 0 250;\n    animation: line1 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  }");
    (0, styles_1.default)(".atomicjolt-loading-animation svg .cls-2 {\n    stroke-dasharray: 0 270;\n    animation: line2 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  }");
    (0, styles_1.default)("@keyframes line1 {\n    0% {\n      stroke-dasharray: 0 250;\n    }\n    40% {\n      stroke-dasharray: 250 250;\n    }\n    60% {\n      stroke-dasharray: 250 250;\n    }\n    100% {\n      stroke-dasharray: 0 250;\n    }\n  }");
    (0, styles_1.default)("@keyframes line2 {\n    0% {\n      stroke-dasharray: 0 270;\n    }\n    40% {\n      stroke-dasharray: 270 270;\n    }\n    60% {\n      stroke-dasharray: 270 270;\n    }\n    100% {\n      stroke-dasharray: 0 270;\n    }\n  }");
    (0, styles_1.default)(".loader-text{\n    font-size: 24px;\n    font-family: 'Lato', Arial, Helvetica, sans-serif;\n    font-weight: 500;\n    color: #222;\n    text-align: center;\n    padding-top: 48px;\n    margin: 0;\n  }");
}
function CoreLoader(props) {
    var _a, _b, _c;
    var settings = props.settings;
    var logoColor = ((_a = settings === null || settings === void 0 ? void 0 : settings.aj_loader) === null || _a === void 0 ? void 0 : _a.logoColor) || props.logoColor || '#444';
    var backgroundColor1 = ((_b = settings === null || settings === void 0 ? void 0 : settings.aj_loader) === null || _b === void 0 ? void 0 : _b.backgroundColor1) || props.backgroundColor1 || '#FFEA00';
    var backgroundColor2 = ((_c = settings === null || settings === void 0 ? void 0 : settings.aj_loader) === null || _c === void 0 ? void 0 : _c.backgroundColor2) || props.backgroundColor2 || '#FFFF56';
    renderStyles(logoColor, backgroundColor1, backgroundColor2);
    return (react_1.default.createElement("div", { className: "aj-loader" },
        react_1.default.createElement("div", { className: "atomicjolt-loading-animation" },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 91.87 114.09", role: "img", "aria-label": "loading" },
                react_1.default.createElement("g", { "data-name": "Layer 2" },
                    react_1.default.createElement("polygon", { className: "cls-1", points: "40.45 111.32 89.11 99.26 71.35 19.9 21.1 89.71 40.45 111.32" }),
                    react_1.default.createElement("polyline", { className: "cls-2", points: "50.67 2.77 2.77 69.96 25.47 94.65 66.36 84.13 50.67 2.77 71.35 19.9" })))),
        react_1.default.createElement("p", { className: "loader-text" }, props.message)));
}
exports.CoreLoader = CoreLoader;
function Loader(props) {
    var settings = (0, react_redux_1.useSelector)(function (state) { return state.settings; });
    return react_1.default.createElement(CoreLoader, __assign({}, props, { settings: settings }));
}
exports.default = Loader;
Loader.propTypes = {
    message: prop_types_1.default.string,
    logoColor: prop_types_1.default.string,
    backgroundColor1: prop_types_1.default.string,
    backgroundColor2: prop_types_1.default.string,
};
//# sourceMappingURL=atomicjolt_loader.js.map