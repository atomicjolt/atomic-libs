"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.broadcastMessage = exports.broadcastRawMessage = exports.postMessage = void 0;
var lodash_1 = __importDefault(require("lodash"));
// Just post to the parent
function postMessage(payload, domain) {
    if (domain === void 0) { domain = '*'; }
    parent.postMessage(JSON.stringify(payload), domain);
}
exports.postMessage = postMessage;
// Post a payload without changing it up the entire chain of parent windows.
function broadcastRawMessage(payload, domain) {
    if (domain === void 0) { domain = '*'; }
    var parents = new Set();
    var p = parent;
    while (!parents.has(p)) {
        p.postMessage(payload, domain);
        parents.add(p);
        p = p.parent;
    }
}
exports.broadcastRawMessage = broadcastRawMessage;
// Post up the entire chain of parent windows.
function broadcastMessage(payload, domain) {
    if (domain === void 0) { domain = '*'; }
    broadcastRawMessage(JSON.stringify(payload), domain);
}
exports.broadcastMessage = broadcastMessage;
var Communicator = /** @class */ (function () {
    function Communicator(domain) {
        if (domain === void 0) { domain = '*'; }
        this.domain = domain;
    }
    Communicator.parseMessageFromEvent = function (e) {
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
        return message;
    };
    Communicator.prototype.enableListener = function (handler) {
        // Create IE + others compatible event handler
        var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
        var eventer = window[eventMethod];
        this.messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';
        // Listen to message from child window
        this.handleCommFunc = function (e) { return handler.handleComm(e); };
        eventer(this.messageEvent, this.handleCommFunc, false);
    };
    Communicator.prototype.removeListener = function () {
        // Create IE + others compatible event handler
        var eventMethod = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
        var eventer = window[eventMethod];
        eventer(this.messageEvent, this.handleCommFunc, false);
    };
    Communicator.prototype.comm = function (payload) {
        postMessage(payload, this.domain);
    };
    Communicator.prototype.broadcast = function (payload) {
        broadcastMessage(payload, this.domain);
    };
    return Communicator;
}());
exports.default = Communicator;
//# sourceMappingURL=communicator.js.map