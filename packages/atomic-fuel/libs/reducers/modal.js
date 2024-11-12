"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modal_1 = require("../actions/modal");
var initialState = {
    currentOpenModal: ''
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case modal_1.Constants.OPEN_MODAL: {
            return { currentOpenModal: action.modalName };
        }
        case modal_1.Constants.CLOSE_MODAL: {
            return { currentOpenModal: '' };
        }
        default: return state;
    }
});
//# sourceMappingURL=modal.js.map