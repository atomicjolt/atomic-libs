import { describe, expect, beforeEach, afterEach, it, vi } from 'vitest';
import { getCapabilities, getCapability } from './capabilities';
import { LTIStorageParams, LtiCapability } from '../types';
import { STATE_KEY_PREFIX } from './constants';

interface EventError {
  code: string;
  message: string;
}
interface LtiCapabilitiesEvent {
  data: {
    subject: string;
    message_id: string;
    error?: EventError;
    errormessage?: string;
    value: string;
    supported_messages: LtiCapability[];
  };
  origin: string;
}

describe('capabilities', () => {
  let event: LtiCapabilitiesEvent;

  beforeEach(() => {
    document.body.innerHTML = `
      <form action="https://assessments.atomicjolt.xyz/lti_launches/" method="POST">
          <input type="hidden" name="state" id="state" value="state" />
          <input type="hidden" name="id_token" id="id_token" value="id_token" />
      </form>
      <div id="error" class="hidden">error</div>
    `;

    event = {
      data: {
        subject: 'lti.capabilities.response',
        message_id: 'aj-lti-caps',
        supported_messages: [
          {
              "subject": "lti.capabilities"
          },
          {
              "subject": "lti.example",
              "frame": "platformFrameName"
          }
        ],
      },
      origin: '*',
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('getCapabilities', () => {
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

      const caps = await getCapabilities();
      expect(caps).toEqual(event.data.supported_messages);
      await new Promise(process.nextTick);
      expect(postMessageSpy).toHaveBeenCalled();
    });

    it('returns false if postMessage times out', async () => {
      await expect(() => getCapabilities()).rejects.toThrowError();
    });

    it('returns false if capabilities return errors', async () => {
      // Spy on postMessage to ensure it is called.
      const postMessageSpy = vi.spyOn(window, 'postMessage');

      const value = 'badstate';

      // Spy on addEventListener mock the response that will be sent to receiveMessage
      vi.spyOn(window, 'addEventListener').mockImplementation((eventName, func) => {
        const receiveMessage = func as Function;
        if (eventName === 'message') {
          event.data.error = { code: "42", message: "something went wrong" };
          event.data.errormessage = "some error";
          receiveMessage(event);
        }
      });
      await expect(() => getCapabilities()).rejects.toThrowError('some error');
      expect(postMessageSpy).toHaveBeenCalled();
    });
  });
  describe('getCapability', () => {
    it('returns capability', async () => {
      // Spy on postMessage to ensure it is called.
      const postMessageSpy = vi.spyOn(window, 'postMessage');

      // Spy on addEventListener mock the response that will be sent to receiveMessage
      vi.spyOn(window, 'addEventListener').mockImplementation((eventName, func) => {
        const receiveMessage = func as Function;
        if (eventName === 'message') {
          receiveMessage(event);
        }
      });

      const cap = await getCapability("lti.example");
      expect(postMessageSpy).toHaveBeenCalled();
      expect(cap).toEqual(
          {
              "subject": "lti.example",
              "frame": "platformFrameName"
          }
      );
    });
    it('returns null if no match', async () => {
      // Spy on postMessage to ensure it is called.
      const postMessageSpy = vi.spyOn(window, 'postMessage');

      // Spy on addEventListener mock the response that will be sent to receiveMessage
      vi.spyOn(window, 'addEventListener').mockImplementation((eventName, func) => {
        const receiveMessage = func as Function;
        if (eventName === 'message') {
          receiveMessage(event);
        }
      });

      const cap = await getCapability("lti.unimplemented");
      expect(postMessageSpy).toHaveBeenCalled();
      expect(cap).toBe(null);
    });
  });
});
