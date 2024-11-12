"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_utils_1 = __importDefault(require("react-dom/test-utils"));
var lodash_1 = __importDefault(require("lodash"));
exports.default = {
    findTextField: function (textFields, labelText) {
        return lodash_1.default.find(textFields, function (field) {
            var label = test_utils_1.default.findRenderedDOMComponentWithTag(field, 'label');
            return label.getDOMNode().textContent.toLowerCase() === labelText;
        });
    },
};
//# sourceMappingURL=utils.js.map