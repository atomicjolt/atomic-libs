import _ from 'lodash';

// Just post to the parent
export function postMessage(payload, domain = '*') {
  parent.postMessage(JSON.stringify(payload), domain);
}

// Post a payload without changing it up the entire chain of parent windows.
export function broadcastRawMessage(payload, domain = '*') {
  const parents = new Set();
  let p = parent;
  while (!parents.has(p)) {
    p.postMessage(payload, domain);
    parents.add(p);
    p = p.parent;
  }
}

// Post up the entire chain of parent windows.
export function broadcastMessage(payload, domain = '*') {
  broadcastRawMessage(JSON.stringify(payload), domain);
}

export default class Communicator {
  constructor(domain = '*') {
    this.domain = domain;
  }

  static parseMessageFromEvent(e) {
    let message = e.data;
    if (_.isString(e.data)) {
      try {
        message = JSON.parse(e.data);
      } catch (ex) {
        // We can't parse the data as JSON just send it through as a string
        message = e.data;
      }
    }
    return message;
  }

  enableListener(handler) {
    // Create IE + others compatible event handler
    const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
    const eventer = window[eventMethod];
    this.messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';
    // Listen to message from child window
    this.handleCommFunc = (e) => handler.handleComm(e);
    eventer(this.messageEvent, this.handleCommFunc, false);
  }

  removeListener() {
    // Create IE + others compatible event handler
    const eventMethod = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
    const eventer = window[eventMethod];
    eventer(this.messageEvent, this.handleCommFunc, false);
  }

  comm(payload) {
    postMessage(payload, this.domain);
  }

  broadcast(payload) {
    broadcastMessage(payload, this.domain);
  }

}
