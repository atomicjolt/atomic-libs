import _ from 'lodash';
import { combineReducers } from 'redux';
import nock from 'nock';

import API from '../middleware/api';
import settings from '../reducers/settings';
import configureStore from '../store/configure_store';

export default class Helper {

  // Create a fake store for testing
  static mockStore(state) {
    return {
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({ ...state })
    };
  }

  // Create a real store that can be used for testing
  // For any additional state provided you must also provide the corresponding
  // reducers.
  static makeStore(initialSettings, additionalState, additionalReducers) {
    const initialState = _.merge({
      settings: _.merge({
        csrf: 'csrf_token',
        apiUrl: 'http://www.example.com'
      }, initialSettings)
    }, additionalState);
    const rootReducer = combineReducers({
      settings,
      ...additionalReducers
    });
    const middleware = [API];
    return configureStore(initialState, rootReducer, middleware);
  }

  static testPayload() {
    return JSON.stringify([{
      id: 1,
      name: 'Starter App'
    }]);
  }

  static stubAjax() {
    beforeEach(() => {
      jasmine.Ajax.install();

      jasmine.Ajax.stubRequest(
        RegExp('.*/api/test')
      ).andReturn({
        status: 200,
        contentType: 'application/json',
        statusText: 'OK',
        responseText: Helper.testPayload()
      });

      jasmine.Ajax.stubRequest(
        RegExp('.*/api/test/.+')
      ).andReturn({
        status: 200,
        contentType: 'application/json',
        statusText: 'OK',
        responseText: Helper.testPayload()
      });
    });

    afterEach(() => {
      jasmine.Ajax.uninstall();
    });
  }

  static mockRequest(method, apiUrl, url, expectedHeaders) {
    return nock(apiUrl, expectedHeaders)
      .intercept(url, method)
      .reply(
        200,
        Helper.testPayload(),
        { 'content-type': 'application/json' }
      );
  }

  static mockAllAjax() {
    beforeEach(() => {
      nock('http://www.example.com')
        .persist()
        .get(RegExp('.*'))
        .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
      nock('http://www.example.com')
        .persist()
        .post(RegExp('.*'))
        .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
      nock('http://www.example.com')
        .persist()
        .put(RegExp('.*'))
        .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
      nock('http://www.example.com')
        .persist()
        .delete(RegExp('.*'))
        .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
    });

    afterEach(() => {
      nock.cleanAll();
    });
  }

  static mockClock() {
    beforeEach(() => {
      jasmine.clock().install(); // Mock out the built in timers
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });
  }

  static wrapMiddleware(middleware, state = {}) {
    const calledWithState = {
      dispatchedActions: [],
    };
    const store = {
      getState: jest.fn(() => (state)),
      dispatch: jest.fn((action) => calledWithState.dispatchedActions.push(action)),
    };
    const next = jest.fn();
    const invoke = (action) => middleware(store)(next)(action);
    const getCalledWithState = () => calledWithState;

    return {
      store, next, invoke, getCalledWithState
    };
  }

  static indicies(arr, a, b) { return _.map([a, b], (i) => _.indexOf(arr, i)); }

  static isBefore(...args) {
    const ind = Helper.indicies(args[0], args[1], args[2]);
    if (_.some(ind, (i) => _.isNil(i))) { throw new Error('Not found in arr'); }
    return ind[0] < ind[1];
  }

}
