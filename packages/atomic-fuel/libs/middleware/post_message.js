"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerSingleton = void 0;
var lodash_1 = __importDefault(require("lodash"));
var communicator_1 = __importDefault(require("../communications/communicator"));
var HandlerSingleton = /** @class */ (function () {
    function HandlerSingleton(dispatch) {
        var _this = this;
        this.handleComm = function (e) {
            var message = e.data;
            if (lodash_1.default.isString(e.data)) {
                try {
                    message = JSON.parse(e.data);
                }
                catch (ex) {
                    // We can't parse the data as JSON just send it through as a string
                    message = e.data;
                }
            }
            _this.dispatch({
                communication: true,
                type: 'POST_MESSAGE_RECIEVED',
                message: message,
                data: e.data
            });
        };
        this.dispatch = dispatch;
    }
    HandlerSingleton.prepareInstance = function (dispatch, domain) {
        if (domain === void 0) { domain = '*'; }
        if (!HandlerSingleton.instance) {
            HandlerSingleton.communicator = new communicator_1.default(domain);
            HandlerSingleton.instance = new HandlerSingleton(dispatch);
            HandlerSingleton.communicator.enableListener(HandlerSingleton.instance);
        }
    };
    HandlerSingleton.communicator = null;
    HandlerSingleton.instance = null;
    return HandlerSingleton;
}());
exports.HandlerSingleton = HandlerSingleton;
exports.default = (function (store) { return function (next) { return function (action) {
    if (action.postMessage) {
        // You have to call a post message action first before you will recieve messages
        HandlerSingleton.prepareInstance(store.dispatch);
        try {
            if (action.broadcast) {
                HandlerSingleton.communicator.broadcast(action.message);
            }
            else {
                HandlerSingleton.communicator.comm(action.message);
            }
        }
        catch (e) {
            // do nothing
        }
    }
    next(action);
}; }; });
//# sourceMappingURL=post_message.js.map