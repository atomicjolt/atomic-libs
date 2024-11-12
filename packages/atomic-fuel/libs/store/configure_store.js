"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
function default_1(initialState, rootReducer, middleware) {
    var enhancers = [
        redux_1.applyMiddleware.apply(void 0, middleware)
    ];
    var store = redux_1.compose.apply(void 0, enhancers)(redux_1.createStore)(rootReducer, initialState);
    return store;
}
exports.default = default_1;
//# sourceMappingURL=configure_store.js.map