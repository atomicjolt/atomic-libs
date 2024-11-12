import { Constants as JwtConstants } from '../actions/jwt';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {

    case JwtConstants.REFRESH_JWT_DONE:
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
};
