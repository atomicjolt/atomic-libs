"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = require("../actions/jwt");
var initialState = '';
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case jwt_1.Constants.REFRESH_JWT_DONE:
            if (action.payload.jwt) {
                // Ensure we received a valid jwt. If the server isn't available we
                // will get undefined. If there is a chance the current jwt is still
                // valid we want to leave it in place. Note that this typically happens
                // when the user loses network connectivity.
                return action.payload.jwt;
            }
            return state;
        default:
            return state;
    }
});
//# sourceMappingURL=jwt.js.map