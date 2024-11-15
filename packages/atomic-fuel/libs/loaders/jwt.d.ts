export default function _default(dispatch: any, currentUserId: any, refresh?: number): void;
export class Jwt {
    constructor(jwt: any, apiUrl: any, oauthConsumerKey?: null, refresh?: number);
    jwt: any;
    apiUrl: any;
    oauthConsumerKey: any;
    _decodedJwt: any;
    userId: any;
    contextId: any;
    refresh: number;
    enableRefresh(): void;
    get params(): {
        context_id: any;
        oauth_consumer_key: any;
    };
    get currentJwt(): any;
    get decodedJwt(): any;
    get isjwtExpired(): boolean;
}
