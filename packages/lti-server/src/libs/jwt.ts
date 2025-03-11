import {
  SignJWT,
  jwtVerify,
  JWTPayload,
  decodeJwt,
} from 'jose';

export const ALGORITHM = 'RS256';

type Header = {
  alg: string;
  kid?: string;
};

// Sign using a private key
export async function signJwt(
  payload: JWTPayload,
  privateKey: CryptoKey | Uint8Array,
  expiresIn: string = '10m',
  kid: string = ''
): Promise<string> {
  const header: Header = { alg: ALGORITHM };
  if (kid) {
    header.kid = kid;
  }
  try {
    const jwt = await new SignJWT(payload)
      .setProtectedHeader(header)
      .setIssuedAt()
      .setExpirationTime(expiresIn)
      .sign(privateKey);
    return jwt;
  } catch (e) {
    console.error(e);
    throw new Error(`Unable to sign JWT: ${e}.`);
  }
}

// Verify using a public key
export async function verifyJwt(
  jwt: string,
  publicKey: CryptoKey | Uint8Array,
  iss: string,
  aud: string
): Promise<JWTPayload> {
  const { payload } = await jwtVerify(jwt, publicKey, {
    issuer: iss,
    audience: aud,
  });
  return payload;
}

export function getKid(jwt: string): string | null {
  const [headerPart] = jwt.split('.');
  if (!headerPart) {
    return null;
  }
  const header = atob(headerPart);
  const decodedHeader = JSON.parse(header) as Header;
  return decodedHeader.kid || null;
}

export function getIss(jwt: string): string {
  const decoded = decodeJwt(jwt);
  const iss = decoded?.iss;
  if (!iss) {
    throw new Error('LTI token is missing required field iss.');
  }
  return iss;
}