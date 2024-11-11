import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import LtiLaunchCheck from './lti_launch_check';
import type { LaunchSettings } from '@atomicjolt/lti-client/types';
import { idToken } from '../tests/helper';

describe('LtiLaunchCheck', () => {
  
  it('renders children when ltiLaunch returns true', async () => {
    vi.mock('@atomicjolt/lti-client', async () => {
      const originalModule = await vi.importActual('@atomicjolt/lti-client') as typeof import('@atomicjolt/lti-client');
      return {
        __esModule: true,
        ...originalModule,
        ltiLaunch: () => true,
      };
    });

    const mockStateValidation: LaunchSettings = {
      idToken: idToken,
      state: 'validState',
      stateVerified: false,
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
