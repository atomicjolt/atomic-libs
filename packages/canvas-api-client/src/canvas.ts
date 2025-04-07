import { client } from "./generated/client.gen";

interface CanvasClientConfig {
  baseUrl: string;
  token: string;
  headers?: Record<string, string>;
  timeout?: number;
}

export function configureClient(config: CanvasClientConfig) {
  const { baseUrl, token, headers, timeout } = config;

  client.setConfig({
    baseUrl,
    auth: token,
    headers,
  });
}
