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
exports.DONE = void 0;
var lodash_1 = __importDefault(require("lodash"));
exports.DONE = '_DONE';
function default_1(actionTypes, asyncActionTypes) {
    var types = lodash_1.default.reduce(actionTypes, function (result, key) {
        var _a;
        return (__assign(__assign({}, result), (_a = {}, _a[key] = key, _a)));
    }, {});
    types = lodash_1.default.reduce(asyncActionTypes, function (result, key) {
        var _a;
        return (__assign(__assign({}, result), (_a = {}, _a[key] = key, _a["".concat(key).concat(exports.DONE)] = "".concat(key).concat(exports.DONE), _a)));
    }, types);
    types.DONE = exports.DONE;
    return types;
}
exports.default = default_1;
//# sourceMappingURL=wrapper.js.map