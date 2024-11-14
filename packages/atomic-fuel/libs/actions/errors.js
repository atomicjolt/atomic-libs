"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
exports.clearErrors = clearErrors;
exports.addError = addError;
var wrapper_1 = __importDefault(require("../constants/wrapper"));
// Local actions
var actions = [
    'CLEAR_ERRORS',
    'ADD_ERROR',
];
// Actions that make an api request
var requests = [];
exports.Constants = (0, wrapper_1.default)(actions, requests);
function clearErrors() {
    return {
        type: exports.Constants.CLEAR_ERRORS,
    };
}
// Error should be the original error, usually from a network response.
function addError(error, message, context) {
    return {
        type: exports.Constants.ADD_ERROR,
        payload: {
            error: error,
            message: message,
            context: context,
        },
    };
}
//# sourceMappingURL=errors.js.map