"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var atomicjolt_loader_1 = __importDefault(require("./atomicjolt_loader"));
var inline_error_1 = __importDefault(require("./errors/inline_error"));
function GqlStatus(props) {
    if (props.loading) {
        return (react_1.default.createElement(atomicjolt_loader_1.default, { message: props.loadMessage }));
    }
    if (props.error) {
        return react_1.default.createElement(inline_error_1.default, { error: props.error.message });
    }
    return null;
}
exports.default = GqlStatus;
GqlStatus.propTypes = {
    loading: prop_types_1.default.bool,
    error: prop_types_1.default.shape({ message: prop_types_1.default.string }),
    loadMessage: prop_types_1.default.string,
};
//# sourceMappingURL=gql_status.js.map