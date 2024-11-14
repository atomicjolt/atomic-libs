export function postMessage(payload: any, domain?: string): void;
export function broadcastRawMessage(payload: any, domain?: string): void;
export function broadcastMessage(payload: any, domain?: string): void;
export default class Communicator {
    static parseMessageFromEvent(e: any): any;
    constructor(domain?: string);
    domain: string;
    enableListener(handler: any): void;
    messageEvent: string | undefined;
    handleCommFunc: ((e: any) => any) | undefined;
    removeListener(): void;
    comm(payload: any): void;
    broadcast(payload: any): void;
}
