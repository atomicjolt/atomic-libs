import { Constants as JwtConstants } from '../actions/jwt';
import jwt from './jwt';

describe('jwt reducer', () => {
  describe('initial state', () => {
    it('has a jwt token', () => {
      const initialState = 'asdf';
      const state = jwt(initialState, {});
      expect(state).toEqual(initialState);
    });
  });

  describe('jwt update', () => {
    it('has a jwt token', () => {
      const state = jwt({ jwt: 'asdf' }, {});

      const newJwt = { jwt: '1234' };
      const newState = jwt(state, {
        type: JwtConstants.REFRESH_JWT_DONE,
        payload: newJwt,
      });

      expect(newState).toEqual(newJwt.jwt);
    });
    it('jwt token is undefined', () => {
      const initialState = 'thefirstjwt';
      const state = jwt(initialState, {});

      const newJwt = {};
      const newState = jwt(state, {
        type: JwtConstants.REFRESH_JWT_DONE,
        payload: newJwt,
      });

      expect(newState).toEqual(initialState);
    });
  });
});
