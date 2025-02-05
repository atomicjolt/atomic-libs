import type { KeySet, JwtValidationResult, IdToken, KeySetMap } from '../../types';
import {
  generateKeyPair,
  importSPKI,
  exportSPKI,
  exportPKCS8,
  exportJWK,
  jwtVerify,
  createLocalJWKSet,
  JSONWebKeySet,
} from 'jose';
import { ALGORITHM } from './jwt';

export async function generateKeySet(): Promise<KeySet> {
  const { publicKey, privateKey } = await generateKeyPair(ALGORITHM, { extractable: true });
  const pub = await exportSPKI(publicKey);
  const pri = await exportPKCS8(privateKey);

  return {
    publicKey: pub,
    privateKey: pri,
  };
}

export async function keySetsToJwks(keySetMap: KeySetMap): Promise<JSONWebKeySet> {
  const jwksPromises = Object.entries(keySetMap).map(async ([kid, ks]) => {
    const pub = await importSPKI(ks.publicKey, ALGORITHM, { extractable: true });
    const publicJwk = await exportJWK(pub);

    return {
      ...publicJwk,
      kid,
      use: 'sig',
      alg: ALGORITHM,
    };
  });

  const jwks = await Promise.all(jwksPromises);

  const result: JSONWebKeySet = {
    keys: jwks,
  };

  return result;
}

export async function fetchRemoteJwks(jwksUrl: string): Promise<JSONWebKeySet> {
  const resp = await fetch(jwksUrl);
  if (resp.ok) {
    const jwks = await resp.json();
    return jwks as JSONWebKeySet;
  }
  throw (`Unable to retrieve JWKS from ${jwksUrl}`);
}

export async function verifyJwtUsingJwks(jwks: JSONWebKeySet, jwt: string): Promise<JwtValidationResult> {
  const localJwks = createLocalJWKSet(jwks);
  try {
    const payload = await jwtVerify(jwt, localJwks);
    const token = payload as unknown as IdToken;
    return {
      verified: true,
      token,
      error: null,
    };
  } catch (e) {
    const error = (e as Error).toString();
    return {
      verified: false,
      token: null,
      error,
    };
  }
}
