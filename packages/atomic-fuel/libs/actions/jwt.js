"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshJwt = exports.Constants = void 0;
var wrapper_1 = __importDefault(require("../constants/wrapper"));
var network_1 = __importDefault(require("../constants/network"));
// Local actions
var actions = [];
// Actions that make an api request
var requests = [
    'REFRESH_JWT',
];
exports.Constants = (0, wrapper_1.default)(actions, requests);
function refreshJwt(userId) {
    return {
        type: exports.Constants.REFRESH_JWT,
        method: network_1.default.GET,
        url: "api/jwts/".concat(userId),
    };
}
exports.refreshJwt = refreshJwt;
//# sourceMappingURL=jwt.js.map