import type { InitSettings } from '@atomicjolt/lti-client/types';
import { IdToken, OIDCState } from '../../types';
export declare function buildInit(requestUrl: string, clientId: string, loginHint: string, ltiMessageHint: string, target: string, platformOIDCUrl: string): {
    oidcState: OIDCState;
    url: URL;
    settings: InitSettings;
};
export declare function buildOIDCState(): OIDCState;
export declare function buildResponse(platformOIDCUrl: string, state: string, clientId: string, loginHint: string, ltiMessageHint: string, nonce: string, redirectUrl: string): URL;
export declare function relaunchInitUrl(requestUrl: string): string;
export declare function validateNonce(oidcState: OIDCState, idToken: IdToken): Promise<void>;
//# sourceMappingURL=oidc.d.ts.map