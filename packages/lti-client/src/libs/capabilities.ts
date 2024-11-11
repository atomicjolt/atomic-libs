import i18next from "i18next";
import { Capability } from '../../types';

export function getCapabilities(): Promise<Capability[]> {
  return new Promise((resolve, reject) => {
    let parent = window.parent || window.opener;
    
    const timeout = setTimeout(() => {
      console.log(i18next.t('capabilities request timeout'));
      reject(new Error(i18next.t('Timeout while waiting for capabilities response')));
    }, 1000);

    const receiveMessage = (event: MessageEvent) => {
      if (
        typeof event.data === 'object' &&
        event.data.subject === 'lti.capabilities.response' &&
        event.data.message_id === 'aj-lti-caps'
      ) {
        removeEventListener('message', receiveMessage);
        clearTimeout(timeout);

        if (event.data.error) {
          // handle errors
          console.error(event.data.error.code);
          console.error(event.data.error.message);
          reject(new Error(event.data.errormessage));
          return;
        }
        resolve(event.data.supported_messages);
      }
    };
    
    window.addEventListener('message', receiveMessage);
    parent.postMessage(
      {
        'subject': 'lti.capabilities',
        'message_id': 'aj-lti-caps',
      },
      '*'
    )
    // Platform will post a message back or we'll timeout
  });
}

export async function getCapability(subject: String): Promise<Capability|null> {
  const caps = await getCapabilities();
  if (caps) {
    return caps.find(
      (element) => element.subject == subject
    ) || null
  }
  return null;
}
