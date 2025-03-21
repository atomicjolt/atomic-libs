import { describe, expect, it } from "vitest";
import configureStore from './configure_store';

describe('configure store', () => {
  it('sets up initial state', () => {
    const settings = {
      csrf   : 'csrf_token',
      apiUrl : 'http://www.example.com',
    };
    const initialState = {
      jwt: 'jwt_token',
      settings,
    };
    const rootReducer = (state) => (state);
    const middleware = [];
    const store = configureStore(initialState, rootReducer, middleware);
    expect(store.getState().settings).toBe(settings);
    expect(store.getState().jwt).toBe('jwt_token');
  });
});
