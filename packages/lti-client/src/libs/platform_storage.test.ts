import { describe, expect, beforeEach, afterEach, it, vi } from 'vitest';
import { loadState, getTargetFrame } from './platform_storage';
import { LTIStorageParams } from '../types';
import { STATE_KEY_PREFIX } from './constants';

interface EventError {
  code: string;
  message: string;
}
interface LtiPlatformStorageEvent {
  data: {
    subject: string;
    message_id: string;
    error?: EventError;
    errormessage?: string;
    value: string;
  };
  origin: string;
}

describe('loadState', () => {
  const state = 'thestate';
  const platformOIDCUrl = 'https://canvas.instructure.com/api/lti/authorize_redirect';
  const origin = new URL(platformOIDCUrl).origin;
  let event: LtiPlatformStorageEvent;
  let ltiStorageParams: LTIStorageParams;

  beforeEach(() => {
    document.body.innerHTML = `
      <form action="https://assessments.atomicjolt.xyz/lti_launches/" method="POST">
          <input type="hidden" name="state" id="state" value="state" />
          <input type="hidden" name="id_token" id="id_token" value="id_token" />
      </form>
      <div id="error" class="hidden">error</div>
    `;

    ltiStorageParams = {
      target: '_parent',
      originSupportBroken: true,
      platformOIDCUrl,
    };

    event = {
      data: {
        subject: 'lti.get_data.response',
        message_id: state,
        value: state,
      },
      origin,
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.cookie = `${STATE_KEY_PREFIX}${state}=;Max-Age=-1`;
  });

  describe('validateLaunch', () => {
    it('calls postMessage', async () => {
      // Spy on postMessage to ensure it is called.
      const postMessageSpy = vi.spyOn(window, 'postMessage');

      // Spy on addEventListener mock the response that will be sent to receiveMessage
      vi.spyOn(window, 'addEventListener').mockImplementation((eventName, func) => {
        const receiveMessage = func as Function;
        if (eventName === 'message') {
          receiveMessage(event);
        }
      });

      await expect(loadState(state, ltiStorageParams)).resolves.toBeTruthy();
      await new Promise(process.nextTick);
      expect(postMessageSpy).toHaveBeenCalled();
    });

    it('returns false if postMessage times out', async () => {
      await expect(loadState(state, ltiStorageParams)).rejects;
    });

    it('returns false if the state is invalid', async () => {
      // Spy on postMessage to ensure it is called.
      const postMessageSpy = vi.spyOn(window, 'postMessage');

      const value = 'badstate';

      // Spy on addEventListener mock the response that will be sent to receiveMessage
      vi.spyOn(window, 'addEventListener').mockImplementation((eventName, func) => {
        const receiveMessage = func as Function;
        if (eventName === 'message') {
          event.data.value = value;
          receiveMessage(event);
        }
      });
      await expect(loadState(state, ltiStorageParams)).resolves.toEqual(value);
      await new Promise(process.nextTick);
      expect(postMessageSpy).toHaveBeenCalled();
    });
  });
});
