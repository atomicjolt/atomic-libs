import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import LtiLaunchCheck from './lti_launch_check';
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

const idToken: IdToken = {
  sub: '1234567890',
  name: 'John Doe',
  email: 'johndoe@example.com',
  aud: '',
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

describe('LtiLaunchCheck', () => {
  
  it('renders error message when isValid is false', async () => {
  
    vi.mock('@atomicjolt/lti-client', async () => {
      const originalModule = await vi.importActual('@atomicjolt/lti-client') as typeof import('@atomicjolt/lti-client');
      return {
        __esModule: true,
        ...originalModule,
        ltiLaunch: () => false,
      };
    });

    const mockStateValidation = {
      idToken: idToken,
      state: 'invalidState',
      stateVerified: false,
      ltiStorageParams: {
        target: 'example.com',
        originSupportBroken: false,
        platformOIDCUrl: 'https://example.com/oidc',
      },
    };

    render(
      <LtiLaunchCheck stateValidation={mockStateValidation}>
        <div>Content that won't be rendered</div>
      </LtiLaunchCheck>
    );
    
    const validContent = await screen.findByText('Invalid request. Please reload the page.');
    expect(validContent).toBeDefined();
  });

});
