import wrapper from '../constants/wrapper';

// Local actions
const actions = [
  'CLEAR_ERRORS',
  'ADD_ERROR',
];

// Actions that make an api request
const requests = [
];

export const Constants = wrapper(actions, requests);

export function clearErrors() {
  return {
    type: Constants.CLEAR_ERRORS,
  };
}

// Error should be the original error, usually from a network response.
export function addError(error, message, context) {
  return {
    type: Constants.ADD_ERROR,
    payload: {
      error,
      message,
      context,
    },
  };
}
