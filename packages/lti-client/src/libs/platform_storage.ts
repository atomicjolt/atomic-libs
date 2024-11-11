import i18next from "i18next";
import { STATE_KEY_PREFIX } from './constants';
import { LTIStorageParams, InitSettings } from '../../types';
import { setCookie  } from './cookies';
import { showLaunchNewWindow } from '../html/launch_new_window';
import { getCapability } from "../libs/capabilities";

export async function getTargetFrame(storageParams: LTIStorageParams): Promise<Window> {
    let target = storageParams.target;
    if (target == null) {
      const cap = await getCapability('lti.get_data');
      target = cap?.frame;
    }
    if (target == null) {
      target = "_parent"
    }
    const parent = window.parent || window.opener;
    return target === "_parent" ? parent : parent.frames[target as any] || parent;
}

export async function storeState(state: string, storageParams: LTIStorageParams): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    let platformOrigin = new URL(storageParams.platformOIDCUrl).origin;

    if (storageParams.originSupportBroken) {
      // The spec requires that the message's target origin be set to the platform's OIDC Authorization url
      // but Canvas does not yet support this, so we have to use '*'.
      platformOrigin = '*';
    }

    let timeout = setTimeout(() => {
      console.error("postMessage timeout");
      reject(new Error(i18next.t('Timeout while waiting for platform response')));
    }, 2000);

    let receiveMessage = (event: any) => {
      if (typeof event.data === "object" &&
        event.data.subject === "lti.put_data.response" &&
        event.data.message_id === state &&
        (event.origin === platformOrigin ||
          (storageParams.originSupportBroken && platformOrigin === "*"))) {

        removeEventListener('message', receiveMessage);
        clearTimeout(timeout);

        if (event.data.error) {
          // handle errors
          console.error(event.data.error.code);
          console.error(event.data.error.message);
          reject(new Error(event.data.errormessage));
        }
        resolve();
      }
    };

    window.addEventListener('message', receiveMessage);
    getTargetFrame(storageParams)
      .then( targetFrame =>
         targetFrame?.postMessage({
           "subject": "lti.put_data",
           "message_id": state,
           "key": `${STATE_KEY_PREFIX}${state}`,
           "value": state,
         }, platformOrigin)
        ).catch( (e: unknown) => {
          console.log(i18next.t('Could not find target frame'));
          console.log(e);
          reject(new Error(i18next.t('Could not find target frame')));
          }
        );

    // Platform should post a message back
  });
}

export function hasStorageAccessAPI() {
  return typeof document.hasStorageAccess === 'function'
    && typeof document.requestStorageAccess === 'function';
}

export function tryRequestStorageAccess(settings: InitSettings) {
  document.requestStorageAccess()
    .then(() => {
      // We should have cookies now
      setCookie(settings);
      window.location.replace(settings.responseUrl);
    })
    .catch((e) => {
      console.log(e);
      showLaunchNewWindow(settings, { showStorageAccessDenied: true, disableLaunch: true, showRequestStorageAccess: false });
    });
}

export function loadState(state: string, storageParams: LTIStorageParams): Promise<string> {
  return new Promise((resolve, reject) => {
    let platformOrigin = new URL(storageParams.platformOIDCUrl).origin;

    if (storageParams.originSupportBroken) {
      // The spec requires that the message's target origin be set to the platform's OIDC Authorization url
      // but Canvas does not yet support this, so we have to use '*'.
      platformOrigin = '*';
    }

    const timeout = setTimeout(() => {
      console.log(i18next.t('postMessage timeout'));
      reject(new Error(i18next.t('Timeout while waiting for platform response')));
    }, 2000);

    const receiveMessage = (event: MessageEvent) => {
      if (
        typeof event.data === 'object' &&
        event.data.subject === 'lti.get_data.response' &&
        event.data.message_id === state &&
        (event.origin === platformOrigin || platformOrigin === '*')
      ) {
        removeEventListener('message', receiveMessage);
        clearTimeout(timeout);

        if (event.data.error) {
          // handle errors
          console.error(event.data.error.code);
          console.error(event.data.error.message);
          reject(new Error(event.data.errormessage));
        }
        resolve(event.data.value);
      }
    };
    window.addEventListener('message', receiveMessage);
    getTargetFrame(storageParams)
      .then( targetFrame =>
        targetFrame.postMessage(
          {
            subject: 'lti.get_data',
            message_id: state,
            key: `${STATE_KEY_PREFIX}${state}`,
          },
          platformOrigin)
        ).catch( (e: unknown) => {
            console.log(i18next.t('Could not find target frame'));
            console.log(e);
            reject(new Error(i18next.t('Could not find target frame')));
          }
        );
    // Platform will post a message back
  });
}
