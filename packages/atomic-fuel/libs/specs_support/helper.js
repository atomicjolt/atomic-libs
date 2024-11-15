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
var lodash_1 = __importDefault(require("lodash"));
var redux_1 = require("redux");
var nock_1 = __importDefault(require("nock"));
var api_1 = __importDefault(require("../middleware/api"));
var settings_1 = __importDefault(require("../reducers/settings"));
var configure_store_1 = __importDefault(require("../store/configure_store"));
var Helper = /** @class */ (function () {
    function Helper() {
    }
    // Create a fake store for testing
    Helper.mockStore = function (state) {
        return {
            subscribe: function () { },
            dispatch: function () { },
            getState: function () { return (__assign({}, state)); }
        };
    };
    // Create a real store that can be used for testing
    // For any additional state provided you must also provide the corresponding
    // reducers.
    Helper.makeStore = function (initialSettings, additionalState, additionalReducers) {
        var initialState = lodash_1.default.merge({
            settings: lodash_1.default.merge({
                csrf: 'csrf_token',
                apiUrl: 'http://www.example.com'
            }, initialSettings)
        }, additionalState);
        var rootReducer = (0, redux_1.combineReducers)(__assign({ settings: settings_1.default }, additionalReducers));
        var middleware = [api_1.default];
        return (0, configure_store_1.default)(initialState, rootReducer, middleware);
    };
    Helper.testPayload = function () {
        return JSON.stringify([{
                id: 1,
                name: 'Starter App'
            }]);
    };
    Helper.stubAjax = function () {
        beforeEach(function () {
            jasmine.Ajax.install();
            jasmine.Ajax.stubRequest(RegExp('.*/api/test')).andReturn({
                status: 200,
                contentType: 'application/json',
                statusText: 'OK',
                responseText: Helper.testPayload()
            });
            jasmine.Ajax.stubRequest(RegExp('.*/api/test/.+')).andReturn({
                status: 200,
                contentType: 'application/json',
                statusText: 'OK',
                responseText: Helper.testPayload()
            });
        });
        afterEach(function () {
            jasmine.Ajax.uninstall();
        });
    };
    Helper.mockRequest = function (method, apiUrl, url, expectedHeaders) {
        return (0, nock_1.default)(apiUrl, expectedHeaders)
            .intercept(url, method)
            .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
    };
    Helper.mockAllAjax = function () {
        beforeEach(function () {
            (0, nock_1.default)('http://www.example.com')
                .persist()
                .get(RegExp('.*'))
                .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
            (0, nock_1.default)('http://www.example.com')
                .persist()
                .post(RegExp('.*'))
                .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
            (0, nock_1.default)('http://www.example.com')
                .persist()
                .put(RegExp('.*'))
                .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
            (0, nock_1.default)('http://www.example.com')
                .persist()
                .delete(RegExp('.*'))
                .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
        });
        afterEach(function () {
            nock_1.default.cleanAll();
        });
    };
    Helper.mockClock = function () {
        beforeEach(function () {
            jasmine.clock().install(); // Mock out the built in timers
        });
        afterEach(function () {
            jasmine.clock().uninstall();
        });
    };
    Helper.wrapMiddleware = function (middleware, state) {
        if (state === void 0) { state = {}; }
        var calledWithState = {
            dispatchedActions: [],
        };
        var store = {
            getState: jest.fn(function () { return (state); }),
            dispatch: jest.fn(function (action) { return calledWithState.dispatchedActions.push(action); }),
        };
        var next = jest.fn();
        var invoke = function (action) { return middleware(store)(next)(action); };
        var getCalledWithState = function () { return calledWithState; };
        return {
            store: store,
            next: next,
            invoke: invoke,
            getCalledWithState: getCalledWithState
        };
    };
    Helper.indicies = function (arr, a, b) { return lodash_1.default.map([a, b], function (i) { return lodash_1.default.indexOf(arr, i); }); };
    Helper.isBefore = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var ind = Helper.indicies(args[0], args[1], args[2]);
        if (lodash_1.default.some(ind, function (i) { return lodash_1.default.isNil(i); })) {
            throw new Error('Not found in arr');
        }
        return ind[0] < ind[1];
    };
    return Helper;
}());
exports.default = Helper;
//# sourceMappingURL=helper.js.map