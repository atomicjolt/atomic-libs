import type { 
  InitSettings,
} from '@atomicjolt-client/src/types';

import { OPEN_ID_COOKIE_PREFIX } from './constants';
import { OIDCState } from '../types';
import { getLtiStorageParams } from './platforms';

export function buildInit(requestUrl: string, clientId: string, loginHint: string, ltiMessageHint: string, target: string, platformOIDCUrl: string) {
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

export function relaunchInitUrl(requestUrl: string) {
	let url = new URL(requestUrl);
	url.searchParams.delete('lti_storage_target');
	return url.toString();
}