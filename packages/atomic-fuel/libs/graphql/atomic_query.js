"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_1 = __importDefault(require("react"));
var components_1 = require("@apollo/client/react/components");
var prop_types_1 = __importDefault(require("prop-types"));
var atomicjolt_loader_1 = __importDefault(require("../components/common/atomicjolt_loader"));
var inline_error_1 = __importDefault(require("../components/common/errors/inline_error"));
var AtomicQuery = /** @class */ (function (_super) {
    __extends(AtomicQuery, _super);
    function AtomicQuery() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataReady = false;
        _this.dataLoading = false;
        return _this;
    }
    AtomicQuery.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(components_1.Query, __assign({}, this.props), function (result) {
            var loading = result.loading, error = result.error;
            if (loading) {
                if (!_this.dataLoading) {
                    _this.props.onDataLoading();
                    _this.dataLoading = true;
                    _this.dataReady = false;
                }
                if (_this.props.hideLoader) {
                    return null;
                }
                return (react_1.default.createElement(atomicjolt_loader_1.default, { message: _this.props.loadingMessage }));
            }
            if (error) {
                if (error.networkError &&
                    error.networkError.result &&
                    error.networkError.result.canvas_authorization_required) {
                    // This error will be handled by a Canvas reauth. Don't output an error.
                    return null;
                }
                if (error.networkError &&
                    error.networkError.bodyText &&
                    error.networkError.bodyText.indexOf('JWT::ExpiredSignature') >= 0) {
                    return (react_1.default.createElement(inline_error_1.default, { error: "Your authentication token has expired. Please refresh the page to enable authentication." }));
                }
                return (react_1.default.createElement(inline_error_1.default, { error: error.message }));
            }
            if (!_this.dataReady) {
                _this.props.onDataReady(result.data);
                _this.dataReady = true;
                _this.dataLoading = false;
            }
            return _this.props.children(result);
        }));
    };
    AtomicQuery.propTypes = {
        children: prop_types_1.default.func.isRequired,
        loadingMessage: prop_types_1.default.string,
        hideLoader: prop_types_1.default.bool,
        // the base Query component has an onCompleted function, but it's only
        // called after the initial request for data returns, and not if you visit
        // the page again
        onDataReady: prop_types_1.default.func,
        onDataLoading: prop_types_1.default.func,
    };
    AtomicQuery.defaultProps = {
        onDataReady: function () { },
        onDataLoading: function () { },
    };
    return AtomicQuery;
}(react_1.default.Component));
exports.default = AtomicQuery;
//# sourceMappingURL=atomic_query.js.map