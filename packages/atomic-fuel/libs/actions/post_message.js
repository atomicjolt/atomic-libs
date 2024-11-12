"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessage = exports.Constants = void 0;
var wrapper_1 = __importDefault(require("../constants/wrapper"));
var actions = [
    'POST_MESSAGE',
];
exports.Constants = (0, wrapper_1.default)(actions, []);
var postMessage = function (message, broadcast) {
    if (broadcast === void 0) { broadcast = false; }
    return ({
        type: exports.Constants.POST_MESSAGE,
        postMessage: true,
        broadcast: broadcast,
        message: message,
    });
};
exports.postMessage = postMessage;
//# sourceMappingURL=post_message.js.map