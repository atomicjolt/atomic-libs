/**
 * @jest-environment jsdom
 */
import { Jwt } from './jwt';

describe('Jwt', () => {
  const JWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjozLCJsdGlfcm9sZXMiOlsidXJuOmx0aTppbnN0cm9sZTppbXMvbGlzL1N0dWRlbnQiLCJ1cm46bHRpOnJvbGU6aW1zL2xpcy9MZWFybmVyIiwidXJuOmx0aTpzeXNyb2xlOmltcy9saXMvVXNlciJdLCJjb250ZXh0X2lkIjoiYThhNzZmYjhmYmNjMmQwOTc4N2RhZmQyODU2NGUyZWNkYWI1MWYxMSIsInRvb2xfY29uc3VtZXJfaW5zdGFuY2VfZ3VpZCI6IjRNUmN4bng2dlFiRlh4aExiODAwNW01V1hGTTJaMmk4bFF3aEoxUVQ6Y2FudmFzLWxtcyIsImxtc19jb3Vyc2VfaWQiOiIyNTMiLCJraWQiOiJhdG9taWNqb2x0LWxlYXJub3NpdHlwbGF5ZXIiLCJpYXQiOjE1NDc3NjMwMjAsImV4cCI6MTU0Nzg0OTQyMCwiYXVkIjoibGVhcm5vc2l0eSJ9.5_qHb0WEceLS8ffQrvO_E7UCLnaOAQt8cbmBqWisWCX6JB08yGNAh923jkFnRN8C7qHow8IsgYDAjYKzCSVsfw';
  const apiUrl = 'https://www.example.com/jwts';
  const jwt = new Jwt(JWT, apiUrl);

  describe('decodedJwt', () => {
    it('returns a decoded version of the jwt', () => {
      const decoded = jwt.decodedJwt;
      expect(decoded.kid).toEqual('atomicjolt-learnosityplayer');
      expect(decoded.context_id).toEqual('a8a76fb8fbcc2d09787dafd28564e2ecdab51f11');
      expect(decoded.user_id).toEqual(3);
    });

    // Wait for the jwt to expire and then uncomment this test
    it('indicates jwt has expired', () => {
      expect(jwt.isjwtExpired).toEqual(true);
    });

    it('provides the current jwt token', () => {
      expect(jwt.currentJwt).toEqual(JWT);
    });

    it('provides params using the current jwt token', () => {
      const decoded = jwt.decodedJwt;
      expect(jwt.params.context_id).toEqual('a8a76fb8fbcc2d09787dafd28564e2ecdab51f11');
      expect(jwt.params.oauth_consumer_key).toEqual(decoded.kid);
    });

    it('handles an empty jwt token', () => {
      const emptyJwt = new Jwt('', apiUrl);
      expect(emptyJwt.currentJwt).toEqual('');
      expect(emptyJwt.decodedJwt).toEqual(undefined);
    });

  });

});
