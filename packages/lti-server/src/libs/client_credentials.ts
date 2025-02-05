import type { ClientAuthorizationRequest, ClientAuthorizationResponse } from '../../types';

export class ClientCredentialsError extends Error { }

// Request a token from the platform that can be used in LTI Advantage requests
export async function requestServiceToken(platformTokenUrl: string, token: string, scopes: string): Promise<ClientAuthorizationResponse> {
  const clientAuthorizationRequest: ClientAuthorizationRequest = {
    grant_type: 'client_credentials',
    client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
    scope: scopes,
    client_assertion: token,
  };

  try {
    const formBody = new URLSearchParams(clientAuthorizationRequest).toString();
    const response = await fetch(platformTokenUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody,
    });

    if (response.status !== 200) {
      const text = await response.text();
      if (text?.toLowerCase().indexOf('rate limit') >= 0) {
        throw new ClientCredentialsError('RateLimited');
      }
      throw new ClientCredentialsError(`RequestFailed: ${text}`);
    }

    let clientAuth = await response.json() as ClientAuthorizationResponse;
    return clientAuth;
  } catch (error) {
    throw new ClientCredentialsError(`RequestFailed: ${error}`);
  }
}
