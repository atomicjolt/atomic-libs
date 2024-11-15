import { Constants } from '../actions/errors';
import error from './errors';

describe('error reducer', () => {
  describe('initial state', () => {
    it('has no errors', () => {
      const initialState = [];
      const state = error(initialState, { type: 'initializeme' });
      expect(state).toEqual([]);
    });
  });

  describe('error update', () => {
    it('has a error token', () => {
      const action = {
        type: 'AnythingisDone',
        error: new Error('something terrible'),
      };
      const newState = error([], action);
      expect(newState[0]).toEqual({
        error: action.error,
        message: action.error.message,
        context: action,
      });
    });
  });

  describe('clear errors', () => {
    it('clear out the errors', () => {
      const action = {
        type: 'AnythingisDone',
        error: new Error('something terrible'),
      };
      const state = error([], action);
      expect(state[0]).toEqual({
        error: action.error,
        message: action.error.message,
        context: action,
      });

      const clearAction = {
        type: Constants.CLEAR_ERRORS
      };

      const cleanState = error(state, clearAction);
      expect(cleanState).toEqual([]);
    });
  });

  describe('add error', () => {
    it('adds a new errors', () => {
      const initialState = [];
      const state = error(initialState, { type: 'initializeme' });
      expect(state).toEqual([]);

      const action = {
        type: Constants.ADD_ERROR,
        payload: {
          error: new Error('something terrible'),
        }
      };

      const errorState = error(state, action);
      expect(errorState[0]).toEqual(action.payload, error);
    });
  });

});
