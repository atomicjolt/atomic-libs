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
exports.withSettings = exports.SettingsContext = void 0;
var react_1 = __importDefault(require("react"));
var updateGlobalSetting = function () { };
exports.SettingsContext = react_1.default.createContext(__assign(__assign({}, window.DEFAULT_SETTINGS), { updateGlobalSetting: updateGlobalSetting }));
function withSettings(Component) {
    return function SettingsComponent(props) {
        return (react_1.default.createElement(exports.SettingsContext.Consumer, null, function (settings) { return react_1.default.createElement(Component, __assign({}, props, { settings: settings })); }));
    };
}
exports.withSettings = withSettings;
//# sourceMappingURL=settings.js.map