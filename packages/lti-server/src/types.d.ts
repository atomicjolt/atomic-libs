import type { IdToken } from '@atomicjolt-client/src/libs/lti_definitions';
import type { 
  LTIStorageParams,
  InitSettings,
  LaunchSettings,
} from '@atomicjolt-client/src/types';

export interface Platform {
  iss: string;
  clientId: string;
  jwksUrl: string;
  tokenUrl: string;
  oidcUrl: string;
}

export interface Platforms {
  [key: string]: Platform;
}

export interface OIDCState {
  state: string;
  nonce: string;
  datetime: string;
}

export type LTIRequestBody = {
  state: string;
  id_token: string;
  lti_storage_target: string;
}

export type IdTokenResult = {
  verified: Boolean;
  token: IdToken | null;
  error: string | null;
};

export interface RedirectParams {
  idToken: string;
  state: string;
  ltiStorageTarget: string;
}

export interface KeySet {
  publicKey: string;
  privateKey: string;
}

export interface JWK_RESULT {
  kty: string;
  kid: string;
  use: string;
  alg: string;
  e: string;
  n: string;
  d: string;
  p: string;
  q: string;
  dp: string;
  dq: string;
  qi: string;
}

export interface JWKS_RESULT {
  keys: JWK_RESULT[];
}
