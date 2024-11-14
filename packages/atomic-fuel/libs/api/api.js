"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var superagent_1 = __importDefault(require("superagent"));
var network_1 = __importDefault(require("../constants/network"));
var pendingRequests = {};
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.get = function (url, apiUrl, jwt, csrf, params, headers, timeout) {
        if (timeout === void 0) { timeout = network_1.default.TIMEOUT; }
        return Api.execRequest(network_1.default.GET, url, apiUrl, jwt, csrf, params, null, headers, timeout);
    };
    Api.post = function (url, apiUrl, jwt, csrf, params, body, headers, timeout) {
        if (timeout === void 0) { timeout = network_1.default.TIMEOUT; }
        return Api.execRequest(network_1.default.POST, url, apiUrl, jwt, csrf, params, body, headers, timeout);
    };
    Api.put = function (url, apiUrl, jwt, csrf, params, body, headers, timeout) {
        if (timeout === void 0) { timeout = network_1.default.TIMEOUT; }
        return Api.execRequest(network_1.default.PUT, url, apiUrl, jwt, csrf, params, body, headers, timeout);
    };
    Api.del = function (url, apiUrl, jwt, csrf, params, headers, timeout) {
        if (timeout === void 0) { timeout = network_1.default.TIMEOUT; }
        return Api.execRequest(network_1.default.DEL, url, apiUrl, jwt, csrf, params, null, headers, timeout);
    };
    Api.execRequest = function (method, url, apiUrl, jwt, csrf, params, body, headers, timeout) {
        if (timeout === void 0) { timeout = network_1.default.TIMEOUT; }
        return Api.doRequest(Api.makeUrl("".concat(url).concat(Api.queryStringFrom(params)), apiUrl), function (fullUrl) {
            var request;
            switch (method) {
                case network_1.default.GET:
                    request = superagent_1.default.get(fullUrl);
                    break;
                case network_1.default.POST:
                    request = superagent_1.default.post(fullUrl).send(body);
                    break;
                case network_1.default.PUT:
                    request = superagent_1.default.put(fullUrl).send(body);
                    break;
                case network_1.default.DEL:
                    if (lodash_1.default.isEmpty(body)) {
                        request = superagent_1.default.del(fullUrl);
                    }
                    else {
                        request = superagent_1.default.del(fullUrl).send(body);
                    }
                    break;
                default:
                    break;
            }
            request.set('Accept', 'application/json');
            request.timeout(timeout);
            if (!lodash_1.default.isNil(jwt)) {
                request.set('Authorization', "Bearer ".concat(jwt));
            }
            if (!lodash_1.default.isNil(csrf)) {
                request.set('X-CSRF-Token', csrf);
            }
            if (!lodash_1.default.isNil(headers)) {
                lodash_1.default.each(headers, function (headerValue, headerKey) {
                    request.set(headerKey, headerValue);
                });
            }
            return request;
        }, method);
    };
    /**
     * Returns a complete, absolute URL by conditionally appending `path` to
     * `apiUrl`.  If `path` already contains "http", it is returned as-is.
     */
    Api.makeUrl = function (part, apiUrl) {
        if (lodash_1.default.startsWith(part, 'http')) {
            return part;
        }
        var slash = lodash_1.default.last(apiUrl.split('')) === '/' ? '' : '/';
        var newPart = part;
        if (part[0] === '/') {
            newPart = part.slice(1);
        }
        return apiUrl + slash + newPart;
    };
    Api.doRequest = function (url, requestMethod, requestType) {
        // Prevent duplicate requests
        var wrapper = Api.wrapRequest(url, requestMethod, requestType);
        if (wrapper.promise) {
            // Existing request was found. Return promise from request
            return wrapper.promise;
        }
        // No request was found. Generate a promise, add it to the wrapper and return the promise.
        wrapper.promise = Api.promisify(wrapper.request, url);
        // Dispose of the request when the call is complete
        wrapper.promise.then(function () {
            Api.disposeRequest(url);
        }, function () {
            Api.disposeRequest(url);
        });
        return wrapper.promise;
    };
    Api.wrapRequest = function (url, requestMethod, requestType) {
        if (requestType === network_1.default.GET) {
            if (!pendingRequests[url]) {
                pendingRequests[url] = {
                    request: requestMethod(url),
                };
            }
            return pendingRequests[url];
        }
        return {
            request: requestMethod(url),
        };
    };
    Api.disposeRequest = function (url) {
        delete pendingRequests[url];
    };
    Api.promisify = function (request) {
        return new Promise(function (resolve, reject) {
            request.end(function (error, res) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(res);
                }
            });
        });
    };
    Api.queryStringFrom = function (params) {
        var query = lodash_1.default.chain(params)
            .map(function (val, key) {
            if (val) {
                if (lodash_1.default.isArray(val)) {
                    return lodash_1.default.map(val, function (subVal) { return "".concat(key, "[]=").concat(subVal); }).join('&');
                }
                return "".concat(key, "=").concat(val);
            }
            return '';
        })
            .compact()
            .value();
        if (query.length > 0) {
            return "?".concat(query.join('&'));
        }
        return '';
    };
    return Api;
}());
exports.default = Api;
// function *doCacheRequest(url, key, requestMethod, requestType){
//   var promise;
//   var fullUrl = Api.makeUrl(url);
//   if (_cache[fullUrl]) {
//     setTimeout(() => {
//       dispatchResponse(key)(null, _cache[fullUrl]);
//     }, 1);
//     promise = new Promise((resolve, reject) => {
//       resolve(_cache[fullUrl]);
//     });
//     yield promise;
//   };
//   var wrapper = Api._wrapRequest(url, requestMethod, requestType);
//   if(wrapper.promise){
//     yield wrapper.promise;
//   } else {
//     promise = Api.promisify(wrapper.request);
//     wrapper.promise = promise;
//     promise.then((result) => {
//       Api.disposeRequest(url);
//       dispatchResponse(key)(null, result);
//       _cache[fullUrl] = result;
//       _cache[fullUrl].isCached = true;
//       return result;
//     }, (err) => {
//       dispatchResponse(key)(err, err.response);
//     });
//     yield promise;
//   }
// }
//   async cacheGet(url, jwt, csrf, params, key, store, refresh){
//     url = `${url}${Api.queryStringFrom(params)}`;
//     var request = doCacheRequest(url, jwt, csrf, key, (fullUrl, jwt, csrt) => {
//       return get(fullUrl);
//     }, GET);
//     if (key) {
//       // We have a key. Invoke the generate to get data and dispatch.
//       var response = request.next();
//       while (refresh && !response.done){
//         response = request.next();
//       }
//     } else {
//       // Return the generator and let the calling code invoke it.
//       return request;
//     }
//   }
//# sourceMappingURL=api.js.map