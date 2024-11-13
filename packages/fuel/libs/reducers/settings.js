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
exports.getInitialSettings = void 0;
var lodash_1 = __importDefault(require("lodash"));
// Just return state. Don't let settings from the server mutate.
exports.default = (function (state) {
    if (state === void 0) { state = {}; }
    return state;
});
function getInitialSettings() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Add default settings that can be overridden by values in serverSettings
    var settings = {};
    lodash_1.default.forEach(args, function (arg) { return (settings = __assign(__assign({}, settings), arg)); });
    return settings;
}
exports.getInitialSettings = getInitialSettings;
//# sourceMappingURL=settings.js.map