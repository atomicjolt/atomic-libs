import { expect, it, describe } from 'vitest';
import {
  ALGORITHM,
  getKid,
  signJwt,
  verifyJwt,
  getIss,
} from './jwt';
import { importPKCS8 } from 'jose';
import { TEST_ID_TOKEN, genJwt } from '../tests/helper';
import { generateKeySet } from './jwks';

describe('jwt', async () => {
  const expiresIn = '10m';

  const goodKeySet = await generateKeySet();
  const goodKey = await importPKCS8(goodKeySet.privateKey, ALGORITHM);

  const badKeySet = await generateKeySet();
  const badKey = await importPKCS8(badKeySet.privateKey, ALGORITHM);

  it('should sign and verify JWT', async () => {
    const jwt = await signJwt(TEST_ID_TOKEN, goodKey, expiresIn);
    expect(jwt).toBeDefined();

    const verifiedPayload = await verifyJwt(jwt, goodKey, TEST_ID_TOKEN.iss, TEST_ID_TOKEN.aud);

    // Exclude 'iat' and 'exp' properties from the comparison
    delete verifiedPayload.iat;
    delete verifiedPayload.exp;
    delete (TEST_ID_TOKEN as any)?.iat;
    delete (TEST_ID_TOKEN as any)?.exp;
    expect(verifiedPayload).toEqual(TEST_ID_TOKEN);
  });

  it('should fail to verify JWT with wrong secret', async () => {
    const jwt = await signJwt(TEST_ID_TOKEN, goodKey, expiresIn);
    expect(jwt).toBeDefined();

    await expect(verifyJwt(jwt, badKey, TEST_ID_TOKEN.iss, TEST_ID_TOKEN.aud)).rejects.toThrow();
  });

  it('should return the kid field from a valid JWT', async () => {
    const kid = 'testkid';
    const jwt = await signJwt(TEST_ID_TOKEN, goodKey, expiresIn, kid);
    const foundKid = getKid(jwt);
    expect(foundKid).to.equal(kid);
  });

  it('should return undefined if the kid field is missing', async () => {
    const jwt = await signJwt(TEST_ID_TOKEN, goodKey, expiresIn);
    const kid = getKid(jwt);
    expect(kid).to.be.null;
  });
});

describe('getIss', function () {
  it('should return the iss field from a valid JWT', async () => {
    const token = { ...TEST_ID_TOKEN };
    const { signed } = await genJwt(token);
    const jwt = signed;
    const iss = getIss(jwt);
    expect(iss).to.equal(token.iss);
  });

  it('should throw an error if the iss field is missing', async () => {
    const token = { ...TEST_ID_TOKEN };
    // @ts-expect-error
    delete token['iss'];
    const { signed } = await genJwt(token);
    const jwt = signed;

    expect(() => getIss(jwt)).to.throw('LTI token is missing required field iss.');
  });
});
