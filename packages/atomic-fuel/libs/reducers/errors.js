"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../actions/errors");
var initialState = [];
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case errors_1.Constants.CLEAR_ERRORS:
            return [];
        case errors_1.Constants.ADD_ERROR:
            return __spreadArray(__spreadArray([], state, true), [action.payload], false);
        default:
            if (action.error) {
                var message = action.error.message;
                if (action.error.response && action.error.response.text) {
                    try {
                        var json = JSON.parse(action.error.response.text);
                        if (json) {
                            message = json.message;
                        }
                    }
                    catch (ex) {
                        // We can't parse the data as JSON just let the original error message stand
                    }
                }
                return __spreadArray(__spreadArray([], state, true), [{
                        error: action.error,
                        message: message,
                        context: action,
                    }], false);
            }
            return state;
    }
});
//# sourceMappingURL=errors.js.map