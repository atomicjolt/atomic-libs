import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LtiLaunchCheck from './lti_launch_check';
import type { LaunchSettings } from '@atomicjolt/lti-client/types';
import { idToken } from '../tests/helper';


describe('LtiLaunchCheck initial state', () => {
  
  it('renders null when the initialization is in an unknown state', async () => {
    const mockStateValidation = {
      state: 'pendingState',
      stateVerified: false,
      ltiStorageParams: {
        target: 'example.com',
        originSupportBroken: false,
        platformOIDCUrl: 'https://example.com/oidc',
      },
    };

    const { container } = render(
      <LtiLaunchCheck stateValidation={mockStateValidation}>
        <div>Valid Content</div>
      </LtiLaunchCheck>
    );

    // Assert that null before ltiLaunch is resolved
    expect(container.innerHTML).toEqual('');
  });

  it('renders children immediately when stateVerified is true', async () => {

    const mockStateValidation: LaunchSettings = {
      idToken: idToken,
      state: 'validState',
      stateVerified: true,
      ltiStorageParams: {
        target: 'example.com',
        originSupportBroken: false,
        platformOIDCUrl: 'https://example.com/oidc',
      },
    };

    render(
      <LtiLaunchCheck stateValidation={mockStateValidation}>
        <div>Valid Content</div>
      </LtiLaunchCheck>
    );

    const validContent = await screen.findByText('Valid Content');
    expect(validContent).toBeDefined();
  });
});
