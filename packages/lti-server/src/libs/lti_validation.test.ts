import { expect, it, describe } from 'vitest';
import {
  IdToken,
  DEPLOYMENT_ID,
  MESSAGE_TYPE,
  MessageTypes,
  ROLES_CLAIM,
  Roles,
  LTI_VERSION,
  LtiVersions,
  RESOURCE_LINK_CLAIM,
  ResourceLinkClaim,
  TARGET_LINK_URI_CLAIM,
} from '@atomicjolt/lti-client/src/libs/lti_definitions';

import { validateIdTokenContents } from './lti_validation';

const resourceLinkClaim: ResourceLinkClaim = {
  id: 'resource-link-id',
};

const targetLinkUri = 'https://example.com/launch';
const validToken: IdToken = {
  iss: 'https://example.com',
  sub: '12345',
  aud: 'example-client-id',
  azp: 'example-client-id',
  exp: Math.floor(Date.now() / 1000) + 3600, // Add an expiration timestamp
  iat: Math.floor(Date.now() / 1000), // Add an issued-at timestamp
  nonce: 'randomNonce', // Add a nonce
  [DEPLOYMENT_ID]: 'deployment-id',
  [MESSAGE_TYPE]: MessageTypes.LtiResourceLinkRequest,
  [ROLES_CLAIM]: [Roles.LearnerContextRole],
  [LTI_VERSION]: LtiVersions.v1_3_0,
  [RESOURCE_LINK_CLAIM]: resourceLinkClaim,
  [TARGET_LINK_URI_CLAIM]: targetLinkUri,
};
const requestedTargetLinkUri = targetLinkUri;


describe('validateIdTokenContents', () => {
  it('should pass with a valid token', () => {
    expect(validateIdTokenContents(validToken, requestedTargetLinkUri, true)).toEqual([]);
  });

  it('should fail with missing iss', () => {
    const invalidToken = { ...validToken, iss: undefined };
    const errors = validateIdTokenContents(invalidToken, requestedTargetLinkUri, true);
    expect(errors).toContain('LTI token is missing required field iss');
  });

  it('should fail with missing sub', () => {
    const invalidToken = { ...validToken, sub: undefined };
    const errors = validateIdTokenContents(invalidToken, requestedTargetLinkUri, true);
    expect(errors).toContain('LTI token is missing required field sub');
  });

  it('should fail with missing aud', () => {
    const invalidToken = { ...validToken, aud: undefined };
    const errors = validateIdTokenContents(invalidToken, requestedTargetLinkUri, true);
    expect(errors).toContain('LTI token is missing required field aud');
  });

  it('should fail with missing azp for multiple aud', () => {
    const invalidToken = { ...validToken, aud: ['aud1', 'aud2'], azp: undefined };
    const errors = validateIdTokenContents(invalidToken, requestedTargetLinkUri, true);
    expect(errors).toContain('LTI token is missing required field azp');
  });

  it('should fail with azp not in aud', () => {
    const invalidToken = { ...validToken, aud: ['aud1', 'aud2'], azp: 'not-aud' };
    const errors = validateIdTokenContents(invalidToken, requestedTargetLinkUri, true);
    expect(errors).toContain("azp is not one of the aud's");
  });

  it('should fail with missing deployment_id', () => {
    const invalidToken = { ...validToken, [DEPLOYMENT_ID]: undefined };
    const errors = validateIdTokenContents(invalidToken, requestedTargetLinkUri, true);
    expect(errors).toContain(`LTI token is missing required field ${DEPLOYMENT_ID}`);
  });

  it('should fail with missing message_type', () => {
    const invalidToken = { ...validToken, [MESSAGE_TYPE]: undefined };
    const errors = validateIdTokenContents(invalidToken, requestedTargetLinkUri, true);
    expect(errors).toContain(`LTI token is missing required claim ${MESSAGE_TYPE}`);
  });

  it('should fail with missing roles', () => {
    const invalidToken = { ...validToken, [ROLES_CLAIM]: undefined };
    const errors = validateIdTokenContents(invalidToken, requestedTargetLinkUri, true);
    expect(errors).toContain(`LTI token is missing required claim ${ROLES_CLAIM}`);
  });

  it('should fail with missing version', () => {
    const invalidToken = { ...validToken, [LTI_VERSION]: undefined };
    const errors = validateIdTokenContents(invalidToken, requestedTargetLinkUri, true);
    expect(errors).toContain(`LTI token is missing required claim ${LTI_VERSION}`);
  });

  it('should fail with invalid version', () => {
    const invalidToken = { ...validToken, [LTI_VERSION]: '1.2.0' };
    const errors = validateIdTokenContents(invalidToken, requestedTargetLinkUri, true);
    expect(errors).toContain('Invalid LTI version');
  });
});
