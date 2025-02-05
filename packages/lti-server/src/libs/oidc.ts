import type {
  InitSettings,
} from '@atomicjolt/lti-client/types';

import { OPEN_ID_COOKIE_PREFIX, ALLOWED_LAUNCH_TIME } from './constants';
import { IdToken, OIDCState } from '../../types';
import { getLtiStorageParams } from './platform_storage';

export function buildInit(
  requestUrl: string,
  clientId: string,
  loginHint: string,
  ltiMessageHint: string,
  target: string,
  platformOIDCUrl: string): { oidcState: OIDCState, url: URL, settings: InitSettings } {
  const host = new URL(requestUrl).host;
  const redirectUrl = `https://${host}/lti/redirect`;

  const oidcState = buildOIDCState();
  const url = buildResponse(
    platformOIDCUrl,
    oidcState.state,
    clientId,
    loginHint,
    ltiMessageHint,
    oidcState.nonce,
    redirectUrl
  );
  const ltiStorageParams = getLtiStorageParams(platformOIDCUrl, target);
  const settings: InitSettings = {
    state: oidcState.state,
    responseUrl: url.toString(),
    ltiStorageParams,
    relaunchInitUrl: relaunchInitUrl(requestUrl),
    openIdCookiePrefix: OPEN_ID_COOKIE_PREFIX,
  };
  return { oidcState, url, settings };
}

export function buildOIDCState(): OIDCState {
  const nonce = crypto.randomUUID();
  const state = crypto.randomUUID();
  const oidcState: OIDCState = {
    state,
    nonce,
    datetime: new Date().toISOString(),
  };
  return oidcState;
}

export function buildResponse(
  platformOIDCUrl: string,
  state: string,
  clientId: string,
  loginHint: string,
  ltiMessageHint: string,
  nonce: string,
  redirectUrl: string
): URL {
  const url = new URL(platformOIDCUrl);
  url.searchParams.set('response_type', 'id_token');
  url.searchParams.set('redirect_uri', redirectUrl);
  url.searchParams.set('response_mode', 'form_post');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('scope', 'openid');
  url.searchParams.set('state', state);
  url.searchParams.set('login_hint', loginHint);
  url.searchParams.set('prompt', 'none');
  url.searchParams.set('lti_message_hint', ltiMessageHint);
  url.searchParams.set('nonce', nonce);
  return url;
}

export function relaunchInitUrl(requestUrl: string): string {
  let url = new URL(requestUrl);
  url.searchParams.delete('lti_storage_target');
  return url.toString();
}

export async function validateNonce(oidcState: OIDCState, idToken: IdToken) {
  // Check the nonce and make sure the state is not older than 10 minutes
  const datetime = new Date(oidcState.datetime);
  const tenMinutesAgo = new Date().getTime() - ALLOWED_LAUNCH_TIME;
  const expired = datetime.getTime() < tenMinutesAgo;
  if (expired) {
    throw new Error('Allowed time has expired. Please launch the application again.');
  }

  const nonce = idToken?.nonce;
  if (nonce && nonce !== oidcState.nonce) {
    throw new Error('Duplicate LTI launch. Please launch the application again.');
  }
}
