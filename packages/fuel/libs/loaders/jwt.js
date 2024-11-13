"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
var jwt_1 = require("../actions/jwt");
var api_1 = __importDefault(require("../api/api"));
var REFRESH = 1000 * 60 * 60 * 23; // every 23 hours
function default_1(dispatch, currentUserId, refresh) {
    if (refresh === void 0) { refresh = REFRESH; }
    setInterval(function () {
        dispatch((0, jwt_1.refreshJwt)(currentUserId));
    }, refresh);
}
exports.default = default_1;
var Jwt = /** @class */ (function () {
    function Jwt(jwt, apiUrl, oauthConsumerKey, refresh) {
        if (oauthConsumerKey === void 0) { oauthConsumerKey = null; }
        if (refresh === void 0) { refresh = REFRESH; }
        this.jwt = jwt;
        this.apiUrl = apiUrl;
        this.oauthConsumerKey = oauthConsumerKey;
        if (this.jwt) {
            var base64Url = this.jwt.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            try {
                this._decodedJwt = JSON.parse(window.atob(base64));
                this.userId = this._decodedJwt.user_id;
                this.contextId = this._decodedJwt.context_id;
                this.oauthConsumerKey = this._decodedJwt.kid || oauthConsumerKey;
            }
            catch (e) {
                if (typeof Rollbar !== 'undefined' && Rollbar.options.enabled) {
                    Rollbar.error('Failed to decode JWT for refresh', { error: e, encodedJwt: base64 });
                }
            }
        }
        this.refresh = refresh;
    }
    Jwt.prototype.enableRefresh = function () {
        var _this = this;
        if (this.jwt && this.userId) {
            var url_1 = "api/jwts/".concat(this.userId);
            setInterval(function () {
                api_1.default.get(url_1, _this.apiUrl, _this.jwt, null, _this.params, null).then(function (response) {
                    _this.jwt = response.body.jwt;
                });
            }, this.refresh);
        }
    };
    Object.defineProperty(Jwt.prototype, "params", {
        get: function () {
            return {
                // Add the context id from the lti launch
                context_id: this.contextId,
                // Add consumer key to requests to indicate which lti app requests are originating from.
                oauth_consumer_key: this.oauthConsumerKey,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jwt.prototype, "currentJwt", {
        get: function () {
            return this.jwt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jwt.prototype, "decodedJwt", {
        get: function () {
            return this._decodedJwt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jwt.prototype, "isjwtExpired", {
        get: function () {
            // Rails does seconds since the epoch instead of milliseconds so we multiple by 1000
            return this.decodedJwt.exp * 1000 < Date.now();
        },
        enumerable: false,
        configurable: true
    });
    return Jwt;
}());
exports.Jwt = Jwt;
//# sourceMappingURL=jwt.js.map