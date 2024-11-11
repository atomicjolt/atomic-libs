import { DeepLinkingClaim, IdToken } from '@atomicjolt/lti-types';

declare global {
  interface Window {
  }
}

export interface LTIStorageParams {
  target?: string;
  originSupportBroken?: boolean;
  platformOIDCUrl: string;
}

export interface InitSettings {
  state: string;
  responseUrl: string;
  ltiStorageParams: LTIStorageParams;
  relaunchInitUrl: string;
  openIdCookiePrefix: string;
  privacyPolicyUrl?: string;
  privacyPolicyMessage?: string;
}

export interface RedirectSettings {
  ltiStorageParams: LTIStorageParams;
}

export interface LaunchSettings {
  stateVerified: boolean;
  state: string;
  ltiStorageParams?: LTIStorageParams;
  jwt?: string;
  deepLinking?: DeepLinkingClaim;
}

export interface Capability {
  subject: string;
  frame?: string;
}
