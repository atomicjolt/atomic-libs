import { refreshJwt } from '../actions/jwt';
import api from '../api/api';

const REFRESH = 1000 * 60 * 60 * 23; // every 23 hours

export default function(dispatch, currentUserId, refresh = REFRESH) {
  setInterval(() => {
    dispatch(refreshJwt(currentUserId));
  }, refresh);
}

export class Jwt {
  constructor(jwt, apiUrl, oauthConsumerKey = null, refresh = REFRESH) {
    this.jwt = jwt;
    this.apiUrl = apiUrl;

    this.oauthConsumerKey = oauthConsumerKey;

    if (this.jwt) {
      const base64Url = this.jwt.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      try {
        this._decodedJwt = JSON.parse(window.atob(base64));
        this.userId = this._decodedJwt.user_id;
        this.contextId = this._decodedJwt.context_id;
        this.oauthConsumerKey = this._decodedJwt.kid || oauthConsumerKey;
      } catch(e) {
        if (typeof Rollbar !== 'undefined' && Rollbar.options.enabled) {
          Rollbar.error('Failed to decode JWT for refresh', { error: e, encodedJwt: base64 });
        }
      }
    }

    this.refresh = refresh;
  }

  enableRefresh() {
    if (this.jwt && this.userId) {
      const url = `api/jwts/${this.userId}`;
      setInterval(() => {
        api.get(url, this.apiUrl, this.jwt, null, this.params, null).then((response) => {
          this.jwt = response.body.jwt;
        });
      }, this.refresh);
    }
  }

  get params() {
    return {
      // Add the context id from the lti launch
      context_id: this.contextId,
      // Add consumer key to requests to indicate which lti app requests are originating from.
      oauth_consumer_key: this.oauthConsumerKey,
    };
  }

  get currentJwt() {
    return this.jwt;
  }

  get decodedJwt() {
    return this._decodedJwt;
  }

  get isjwtExpired() {
    // Rails does seconds since the epoch instead of milliseconds so we multiple by 1000
    return this.decodedJwt.exp * 1000 < Date.now();
  }

}
