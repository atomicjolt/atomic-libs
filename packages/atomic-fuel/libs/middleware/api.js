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
exports.default = exports.apiRequest = void 0;
var api_1 = __importDefault(require("../api/api"));
var wrapper_1 = require("../constants/wrapper");
function apiRequest(store, action) {
    var state = store.getState();
    var updatedParams = __assign({ 
        // Add the context id from the lti launch
        context_id: state.settings.context_id, 
        // Add consumer key to requests to indicate which lti app requests are originating from.
        oauth_consumer_key: state.settings.oauth_consumer_key }, action.params);
    var promise = api_1.default.execRequest(action.method, action.url, state.settings.api_url, state.jwt, state.settings.csrf_token, updatedParams, action.body, action.headers, action.timeout);
    if (promise) {
        promise.then(function (response) {
            store.dispatch({
                type: action.type + wrapper_1.DONE,
                payload: response.body,
                original: action,
                response: response,
            }); // Dispatch the new data
        }, function (error) {
            store.dispatch({
                type: action.type + wrapper_1.DONE,
                payload: {},
                original: action,
                error: error,
            }); // Dispatch the new error
        });
    }
    return promise;
}
exports.apiRequest = apiRequest;
var API = function (store) { return function (next) { return function (action) {
    if (action.method) {
        apiRequest(store, action);
    }
    // call the next middleWare
    next(action);
}; }; };
exports.default = API;
//# sourceMappingURL=api.js.map