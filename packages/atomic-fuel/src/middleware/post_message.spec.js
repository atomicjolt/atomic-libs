/**
 * @jest-environment jsdom
 */
import postMessage, { HandlerSingleton } from './post_message';
import Helper from '../specs_support/helper';

describe('postMessage middleware', () => {
  Helper.mockAllAjax();

  beforeEach(() => {
    HandlerSingleton.instance = null;
  });

  it('implements Redux middleware interface', () => {
    const store = { getState: () => {} };
    const middleware = postMessage(store);
    const nextHandler = () => {};
    const actionHandler = middleware(nextHandler);

    expect(postMessage.length).toBe(1);
    expect(typeof middleware).toBe('function');
    expect(middleware.length).toBe(1);
    expect(typeof actionHandler).toBe('function');
    expect(actionHandler.length).toBe(1);
  });

  it('calls prepareInstance', () => {
    const action = {
      type: 'TEST',
      postMessage: true
    };

    const middleware = postMessage(Helper.makeStore());
    const nextHandler = () => {};
    const actionHandler = middleware(nextHandler);

    const spy = jest.spyOn(HandlerSingleton, 'prepareInstance');
    actionHandler(action);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls comm when it recieves an action', () => {
    const action = {
      type: 'POST_MESSAGE',
      postMessage: true
    };

    const middleware = postMessage(Helper.makeStore());
    const nextHandler = () => {};
    const actionHandler = middleware(nextHandler);
    HandlerSingleton.prepareInstance(() => {});
    const spy = jest.spyOn(HandlerSingleton.communicator, 'comm');
    actionHandler(action);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('HandlerSingleton.handleComm calls the dispatch', () => {
    const spy = jest.fn();
    HandlerSingleton.prepareInstance(spy);
    HandlerSingleton.instance.handleComm({ data: '{}' });
    expect(spy).toHaveBeenCalled();
  });

  it('HandlerSingleton.handleComm handles invalid json calls the dispatch', () => {
    const spy = jest.fn();
    HandlerSingleton.prepareInstance(spy);
    HandlerSingleton.instance.handleComm({ data: 'The server responded with something invalid' });
    expect(spy).toHaveBeenCalled();
  });

  it('HandlerSingleton.handleComm calls the dispatch when data is an object', () => {
    const spy = jest.fn();
    HandlerSingleton.prepareInstance(spy);
    HandlerSingleton.instance.handleComm({ data: {} });
    expect(spy).toHaveBeenCalled();
  });

});
