import { createStore, applyMiddleware, compose } from 'redux';

export default function(initialState, rootReducer, middleware) {

  const enhancers = [
    applyMiddleware(...middleware)
  ];

  const store = compose(...enhancers)(createStore)(rootReducer, initialState);

  return store;
}
