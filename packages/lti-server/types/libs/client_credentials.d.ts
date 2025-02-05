import type { ClientAuthorizationResponse } from '../../types';
export declare class ClientCredentialsError extends Error {
}
export declare function requestServiceToken(platformTokenUrl: string, token: string, scopes: string): Promise<ClientAuthorizationResponse>;
//# sourceMappingURL=client_credentials.d.ts.map