import { Constants } from '../actions/errors';

const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {

    case Constants.CLEAR_ERRORS:
      return [];

    case Constants.ADD_ERROR:
      return [...state, action.payload];

    default:
      if (action.error) {
        let { message } = action.error;
        if (action.error.response && action.error.response.text) {
          try {
            const json = JSON.parse(action.error.response.text);
            if (json) {
              message = json.message;
            }
          } catch (ex) {
            // We can't parse the data as JSON just let the original error message stand
          }
        }
        return [...state, {
          error: action.error,
          message,
          context: action,
        }];
      }
      return state;
  }

};
