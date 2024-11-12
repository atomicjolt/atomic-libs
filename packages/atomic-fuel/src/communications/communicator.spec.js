/**
 * @jest-environment jsdom
 */
import Communicator, { postMessage, broadcastMessage } from './communicator';

describe('Communicator', () => {

  let communicator;
  const handler = {
    handleComm: (e) => {}
  };
  beforeEach(() => {
    communicator = new Communicator();
  });

  it('enables a listener', () => {
    communicator.enableListener(handler);
  });
});
