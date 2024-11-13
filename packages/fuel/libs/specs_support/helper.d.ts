export default class Helper {
    static mockStore(state: any): {
        subscribe: () => void;
        dispatch: () => void;
        getState: () => any;
    };
    static makeStore(initialSettings: any, additionalState: any, additionalReducers: any): any;
    static testPayload(): string;
    static stubAjax(): void;
    static mockRequest(method: any, apiUrl: any, url: any, expectedHeaders: any): nock.Scope;
    static mockAllAjax(): void;
    static mockClock(): void;
    static wrapMiddleware(middleware: any, state?: {}): {
        store: {
            getState: jest.Mock<{}, []>;
            dispatch: jest.Mock<number, [action?: any]>;
        };
        next: jest.Mock<any, any>;
        invoke: (action: any) => any;
        getCalledWithState: () => {
            dispatchedActions: never[];
        };
    };
    static indicies(arr: any, a: any, b: any): any;
    static isBefore(...args: any[]): boolean;
}
import nock from "nock";
