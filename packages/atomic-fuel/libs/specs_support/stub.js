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
var Stub = /** @class */ (function (_super) {
    __extends(Stub, _super);
    function Stub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stub.prototype.render = function () {
        return react_1.default.createElement("div", null, this.props.children);
    };
    Stub.propTypes = {
        children: prop_types_1.default.object.isRequired,
    };
    return Stub;
}(react_1.default.PureComponent));
exports.default = Stub;
//# sourceMappingURL=stub.js.map