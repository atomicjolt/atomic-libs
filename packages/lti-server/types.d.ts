import type { IdToken } from '@atomicjolt/lti-types';
import type {
  LTIStorageParams,
  InitSettings,
  LaunchSettings,
} from '@atomicjolt/lti-client/types';

export type { IdToken } from '@atomicjolt/lti-types';

export interface PlatformConfigurations {
  [key: string]: PlatformConfiguration;
}

export interface OIDCState {
  state: string;
  nonce: string;
  datetime: string;
}

export interface LTIRequestBody {
  state: string;
  id_token: string;
  lti_storage_target: string;
}

export interface LTIInitBody {
  lti_storage_target: string;
  lti_message_hint: string;
  login_hint: string;
  client_id: string;
  iss: string;
}

export interface JwtValidationResult {
  verified: Boolean;
  token: any | null;
  error: string | null;
};

export interface RedirectParams {
  idToken: string;
  state: string;
  ltiStorageTarget: string;
}

export interface KeySet {
  publicKey: string;
  privateKey: string;
}

export interface KeySetPair {
  kid: string,
  keySet: KeySet,
}

export interface KeySetMap {
  [kid: string]: KeySet;
}

export interface PrivateKeyPair {
  kid: string;
  privateKey: KeyLike;
}

export interface jwkResult {
  kty: string;
  kid: string;
  use: string;
  alg: string;
  e: string;
  n: string;
  d: string;
  p: string;
  q: string;
  dp: string;
  dq: string;
  qi: string;
}

export interface jwksResult {
  keys: jwkResult[];
}

//
// Types used to get an authorization token from the platform
//
export type ClientCredentials = {
  iss: string;      // A unique identifier for the entity that issued the JWT
  sub: string;      // "client_id" of the OAuth Client
  aud: string[];    // Authorization server identifier. Usually the token endpoint URL of the authorization server
  jti: string;      // A unique (potentially reusable) identifier for the token
};

export type ClientAuthorizationRequest = {
  grant_type: string;
  client_assertion_type: string;
  scope: string;
  client_assertion: string;
};

export type ClientAuthorizationResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
};

export type ToolJwt = {
  clientId: string;
  deploymentId: string;
  iss: string;
  aud: string;
  sub: string;
  exp: number;
  iat: number;
  platformIss: string;
  namesAndRolesEndpointUrl?: string;
  deepLinkClaimData?: DeepLinkingClaim;
};

//
// Scores
//
export interface ScoreContentItem {
  type: string;
  url: string;
  title?: string;
  media_type?: string;
}

export interface ScoreResponse {
  resultUrl: string;
  'https://canvas.instructure.com/lti/submission': Submission;
}

export interface Submission {
  content_items: ScoreContentItem[];
}

export interface Score {
  user_id: string;
  score_given: number;
  score_maximum: number;
  comment?: string;
  timestamp: string;
  activity_progress: ActivityProgress;
  grading_progress: GradingProgress;
  new_submission?: boolean;
  preserve_score?: boolean;
  prioritize_non_tool_grade?: boolean;
  submission_type?: string;
  submission_data?: string;
  submitted_at?: string;
  content_items?: ScoreContentItem[];
}

//
// Results
//
export interface LineItemResult {
  id: string;
  user_id: string;
  result_score: number;
  result_maximum: number;
  comment?: string;
  score_of: string;
}

export interface ResultListParams {
  user_id?: string;
  limit?: number;
}

//
// Line items
//
export interface LineItem {
  id: string;
  scoreMaximum: number;
  label: string;
  tag: string;
  resourceId: string;
  resourceLinkId: string;
  "https://canvas.instructure.com/lti/submission_type"?: SubmissionType;
  "https://canvas.instructure.com/lti/launch_url"?: string;
}

export interface NewLineItem {
  scoreMaximum: number;
  label: string;
  resourceId: string;
  tag: string;
  resourceLinkId: string;
  endDateTime: string; // ISO8601 date and time
  "https://canvas.instructure.com/lti/submission_type"?: SubmissionType;
}

export interface UpdateLineItem {
  scoreMaximum: number;
  label: string;
  resourceId: string;
  tag: string;
  resourceLinkId: string;
  endDateTime: string; // ISO8601 date and time
}

export interface SubmissionType {
  type: string;
  externalToolUrl: string;
}

export interface LineItemListParams {
  tag?: string;
  resource_id?: string;
  resource_link_id?: string;
  limit?: number;
  include?: string[];
}