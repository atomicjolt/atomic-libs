"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeModal = exports.openModal = exports.Constants = void 0;
var wrapper_1 = __importDefault(require("../constants/wrapper"));
// Local actions
var actions = [
    'OPEN_MODAL',
    'CLOSE_MODAL'
];
exports.Constants = (0, wrapper_1.default)(actions, []);
var openModal = function (modalName) { return ({ type: exports.Constants.OPEN_MODAL, modalName: modalName }); };
exports.openModal = openModal;
var closeModal = function () { return ({ type: exports.Constants.CLOSE_MODAL }); };
exports.closeModal = closeModal;
//# sourceMappingURL=modal.js.map