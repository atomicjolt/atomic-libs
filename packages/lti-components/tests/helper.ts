import {
  IdToken,
  ResourceLinkClaim,
  MESSAGE_TYPE,
  MessageTypes,
  LTI_VERSION,
  LtiVersions,
  TARGET_LINK_URI_CLAIM,
  RESOURCE_LINK_CLAIM,
  DEPLOYMENT_ID,
  ROLES_CLAIM,
} from '@atomicjolt/lti-types';

const resourceLinkClaim: ResourceLinkClaim = {
  id: '134',
};

export const idToken: IdToken = {
  sub: '1234567890',
  name: 'John Doe',
  email: 'johndoe@example.com',
  aud: '',
  auds: [],
  azp: '',
  exp: 0,
  iat: 0,
  iss: '',
  nonce: '12343456',
  [MESSAGE_TYPE]: MessageTypes.LtiResourceLinkRequest,
  [LTI_VERSION]: LtiVersions.v1_3_0,
  [RESOURCE_LINK_CLAIM]: resourceLinkClaim,
  [DEPLOYMENT_ID]: '',
  [TARGET_LINK_URI_CLAIM]: '',
  [ROLES_CLAIM]: [],
  picture: '',
  given_name: '',
  family_name: '',
  middle_name: '',
  locale: '',
};