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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var styles_1 = __importDefault(require("../../../libs/styles"));
function renderStyles() {
    (0, styles_1.default)(".error-banner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n    align-items: center;\n    min-height: 4rem;\n    background: #f00;\n    padding: 0.8rem 1.2rem;\n    border-radius: 0.3rem;\n    margin: 20px 0;\n  }");
    (0, styles_1.default)(".error-banner > i {\n    font-size: 2.4rem;\n    color: #fff;\n    margin-right: 1.2rem;\n  }");
    (0, styles_1.default)(".error-banner h3 {\n    color: #fff;\n    font-size: 1.4rem;\n    font-family: 'montserratbold';\n    font-weight: normal;\n    margin: 0;\n    margin-right: 3.2rem;\n  }");
    (0, styles_1.default)(".error-banner__content {\n    color: #fff;\n    font-family: 'montserratregular';\n    font-weight: normal;\n    font-size: 1.4rem;\n  }");
    (0, styles_1.default)(".error-banner__content span {\n    margin-right: 0.8rem;\n  }");
}
var InlineError = /** @class */ (function (_super) {
    __extends(InlineError, _super);
    function InlineError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineError.prototype.render = function () {
        renderStyles();
        return (react_1.default.createElement("div", { className: "error-banner" },
            react_1.default.createElement("i", { className: "material-icons" }, "error"),
            react_1.default.createElement("h3", null, "Error"),
            react_1.default.createElement("div", { className: "error-banner__content" }, this.props.error)));
    };
    InlineError.propTypes = {
        error: prop_types_1.default.string,
    };
    return InlineError;
}(react_1.default.PureComponent));
exports.default = InlineError;
//# sourceMappingURL=inline_error.js.map