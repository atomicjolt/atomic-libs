export const LTI_VERSION = "https://purl.imsglobal.org/spec/lti/claim/version";
export const LAUNCH_PRESENTATION = "https://purl.imsglobal.org/spec/lti/claim/launch_presentation";
export const DEPLOYMENT_ID = "https://purl.imsglobal.org/spec/lti/claim/deployment_id";
export const MESSAGE_TYPE = "https://purl.imsglobal.org/spec/lti/claim/message_type";

// Claims
export const CONTEXT_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/context";
export const RESOURCE_LINK_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/resource_link";
export const TOOL_PLATFORM_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/tool_platform";
export const AGS_CLAIM = "https://purl.imsglobal.org/spec/lti-ags/claim/endpoint";
export const BASIC_OUTCOME_CLAIM = "https://purl.imsglobal.org/spec/lti-bo/claim/basicoutcome";

export const MENTOR_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/role_scope_mentor";
export const ROLES_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/roles";

export const CUSTOM_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/custom";
export const EXTENSION_CLAIM = "http://www.ExamplePlatformVendor.com/session";

export const LIS_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/lis";
export const TARGET_LINK_URI_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/target_link_uri";
export const LTI11_LEGACY_USER_ID_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/lti11_legacy_user_id";
export const LTI1P1_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/lti1p1";

export const DEEP_LINKING_CLAIM = "https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings";
export const DEEP_LINKING_DATA_CLAIM = "https://purl.imsglobal.org/spec/lti-dl/claim/data";
export const DEEP_LINKING_TOOL_MSG_CLAIM = "https://purl.imsglobal.org/spec/lti-dl/claim/msg";
export const DEEP_LINKING_TOOL_LOG_CLAIM = "https://purl.imsglobal.org/spec/lti-dl/claim/log";
export const CONTENT_ITEM_CLAIM = "https://purl.imsglobal.org/spec/lti-dl/claim/content_items";
export const NAMES_AND_ROLES_CLAIM = "https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice";
export const MIGRATION_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/lti1p1";

export const NAMES_AND_ROLES_SERVICE_VERSIONS = ["2.0"];

export const CALIPER_CLAIM = "https://purl.imsglobal.org/spec/lti-ces/claim/caliper-endpoint-service";

export const TOOL_LAUNCH_CALIPER_CONTEXT = "http://purl.imsglobal.org/ctx/caliper/v1p1/ToolLaunchProfile-extension";
export const TOOL_USE_CALIPER_CONTEXT = "http://purl.imsglobal.org/ctx/caliper/v1p1";

// Scopes
export const AGS_SCOPE_LINE_ITEM = "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem";
export const AGS_SCOPE_LINE_ITEM_READONLY = "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly";
export const AGS_SCOPE_RESULT = "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly";
export const AGS_SCOPE_SCORE = "https://purl.imsglobal.org/spec/lti-ags/scope/score";
export const NAMES_AND_ROLES_SCOPE = "https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly";
export const CALIPER_SCOPE = "https://purl.imsglobal.org/spec/lti-ces/v1p0/scope/send";

export const STUDENT_SCOPE = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Student";
export const INSTRUCTOR_SCOPE = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor";
export const LEARNER_SCOPE = "http://purl.imsglobal.org/vocab/lis/v2/membership#Learner";
export const MENTOR_SCOPE = "http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor";
export const MENTOR_ROLE_SCOPE = "a62c52c02ba262003f5e";

// Launch contexts
export const COURSE_CONTEXT = "http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering";
export const ACCOUNT_CONTEXT = "Account";

// Configuration
export const TOOL_CONFIGURATION = "https://purl.imsglobal.org/spec/lti-tool-configuration";

// Specfies all available scopes.
export const ALL_SCOPES = [
  AGS_SCOPE_LINE_ITEM,
  AGS_SCOPE_LINE_ITEM_READONLY,
  AGS_SCOPE_RESULT,
  AGS_SCOPE_SCORE,
  NAMES_AND_ROLES_SCOPE,
];

export const CANVAS_PUBLIC_JWKS_URL = "https://sso.canvaslms.com/api/lti/security/jwks";
export const CANVAS_AUTH_TOKEN_URL = "https://canvas.instructure.com/login/oauth2/token";
export const CANVAS_OIDC_URL = "https://sso.canvaslms.com/api/lti/authorize_redirect";

export const CANVAS_BETA_PUBLIC_JWKS_URL = "https://sso.beta.canvaslms.com/api/lti/security/jwks";
export const CANVAS_BETA_AUTH_TOKEN_URL = "https://sso.beta.canvaslms.com/login/oauth2/token";
export const CANVAS_BETA_OIDC_URL = "https://sso.beta.canvaslms.com/api/lti/authorize_redirect";

export const CANVAS_SUBMISSION_TYPE = "https://canvas.instructure.com/lti/submission_type";

interface IdTokenErrors {
  errors: {
    errors?: {
    }
  }
}

export enum LtiVersions {
  v1_3_0 = '1.3.0',
}

export enum DocumentTargets {
  iframe = 'iframe',
  window = 'window',
  embed = 'embed',
}

export enum AcceptTypes {
  link = 'link',
  file = 'file',
  html = 'html',
  ltiResourceLink = 'ltiResourceLink',
  image = 'image',
}

export enum MessageTypes {
  LtiResourceLinkRequest = 'LtiResourceLinkRequest',
  LtiDeepLinkingRequest = 'LtiDeepLinkingRequest',
}

// Below are all the roles specified in the LTI 1.3 spec. (https://www.imsglobal.org/spec/lti/v1p3#role-vocabularies-0)
// https://www.imsglobal.org/spec/lti/v1p3#roles-claim
export enum Roles {
  // Core system roles
  AdministratorSystemRole = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#Administrator',
  NoneSystemRole = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#None',

  // Non‑core system roles
  AccountAdminSystemRole = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#AccountAdmin',
  CreatorSystemRole = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#Creator',
  SysAdminSystemRole = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#SysAdmin',
  SysSupportSystemRole = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#SysSupport',
  UserSystemRole = 'http://purl.imsglobal.org/vocab/lis/v2/system/person#User',

  // Core institution roles
  AdministratorInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator',
  FacultyInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Faculty',
  GuestInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Guest',
  NoneInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#None',
  OtherInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Other',
  StaffInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Staff',
  StudentInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Student',

  // Non‑core institution roles
  AlumniInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Alumni',
  InstructorInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor',
  LearnerInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Learner',
  MemberInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Member',
  MentorInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Mentor',
  ObserverInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Observer',
  ProspectiveStudentInstitutionRole = 'http://purl.imsglobal.org/vocab/lis/v2/institution/person#ProspectiveStudent',

  // Core context roles
  AdministratorContextRole = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator',
  ContentDeveloperContextRole = 'http://purl.imsglobal.org/vocab/lis/v2/membership#ContentDeveloper',
  InstructorContextRole = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor',
  LearnerContextRole = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Learner',
  MentorContextRole = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor',

  // Non‑core context roles
  ManagerContextRole = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Manager',
  MemberContextRole = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Member',
  OfficerContextRole = 'http://purl.imsglobal.org/vocab/lis/v2/membership#Officer',
}

// https://www.imsglobal.org/spec/lti/v1p3#resource-link-claim
export type ResourceLinkClaim = {
  // Opaque identifier for a placement of an LTI resource link within a context that MUST
  // be a stable and locally unique to the deployment_id. This value MUST change if the link
  // is copied or exported from one system or context and imported into another system or context.
  // The value of id MUST NOT exceed 255 ASCII characters in length and is case-sensitive
  id: string;
  // Descriptive phrase for an LTI resource link placement.
  description?: string | null;
  // Descriptive title for an LTI resource link placement.
  title?: string;
  validation_context?: string | null;
  errors?: IdTokenErrors;
};

// https://www.imsglobal.org/spec/lti/v1p3#launch-presentation-claim
export type LaunchPresentationClaim = {
  // The kind of browser window or frame from which the user launched inside the message
  // sender's system. The value for this property MUST be one of: frame, iframe, or window.
  document_target?: DocumentTargets;
  // Fully-qualified HTTPS URL within the message sender's user experience to where the message
  // receiver can redirect the user back. The message receiver can redirect to this URL after
  // the user has finished activity, or if the receiver cannot start because of some technical difficulty.
  return_url?: string;
  // Language, country, and variant as represented using the IETF Best Practices for Tags for Identifying Languages
  locale: string;
  // Height of the window or frame where the content from the message receiver will be displayed to the user.
  height?: number;
  // Width of the window or frame where the content from the message receiver will be displayed to the user.
  width?: number;
  validation_context?: string | null;
  errors?: IdTokenErrors;
};

// https://www.imsglobal.org/spec/lti-dl/v2p0#deep-linking-settings
export type DeepLinkingClaim = {
  // Fully qualified URL where the tool redirects the user back to the platform interface.
  // This URL can be used once the tool is finished.
  deep_link_return_url: string;
  // An array of types accepted, e.g.
  accept_types: Array<keyof typeof AcceptTypes>;
  // An array of document targets supported, e.g.,
  accept_presentation_document_targets: Array<keyof typeof DocumentTargets>;
  // Media types [RFC7231] the platform accepts. This only applies to File types, e.g., "image/:::asterisk:::,text/html".
  accept_media_types?: string;
  // Whether the platform allows multiple content items to be submitted in a single response.
  accept_multiple?: boolean;
  // Whether the platform in the context of that deep linking request supports or ignores line
  // items included in LTI Resource Link items. False indicates line items will be ignored.
  // True indicates the platform will create a line item when creating the resource link.
  // If the field is not present, no assumption that can be made about the support of line items
  accept_lineitem?: boolean;
  // Whether any content items returned by the tool would be automatically persisted
  // without any option for the user to cancel the operation. The default is false.
  auto_create?: boolean;
  // Default text to be used as the title or alt text for the content item returned by the tool.
  // This value is normally short in length, for example, suitable for use as a heading.
  title?: string;
  //Default text to be used as the visible text for the content item returned by the tool.
  // If no text is returned by the tool, the platform may use the value of the title parameter instead (if any).
  // This value may be a long description of the content item.
  text?: string;
  //	An opaque value which must be returned by the tool in its response if it was passed in on the request
  data?: string;
};

// https://www.imsglobal.org/spec/lti-nrps/v2p0#claim-for-inclusion-in-lti-messages
export type NamesAndRolesClaim = {
  // Service URL that is always fully resolved, and matches the context of the launch
  context_memberships_url: string;
  // Specifies the versions of the service that are supported on the end point provided by context_memberships_url
  service_versions: Array<string>;
  validation_context?: string | null;
  errors?: IdTokenErrors;
};

export enum AGSScopes {
  lineItem = 'https://purl.imsglobal.org/spec/lti-ags/scope/lineitem',
  resultReadOnly = 'https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly',
  score = 'https://purl.imsglobal.org/spec/lti-ags/scope/score',
  lineItemReadOnly = 'https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly',
}

// https://www.imsglobal.org/spec/lti-ags/v2p0/#assignment-and-grade-service-claim
export type AGSClaim = {
  // An array of scopes the tool may ask an access token for.
  scope: Array<AGSScopes>;
  // The endpoint URL for accessing the line item container for the current context.
  // May be omitted if the tool has no permissions to access this endpoint
  lineitems?: string;
  // When an LTI message is launching a resource associated to one and only one lineitem,
  // the claim must include the endpoint URL for accessing the associated line item;
  // in all other cases, this property must be either blank or not included in the claim
  lineitem?: string;
  validation_context?: string | null;
  errors?: IdTokenErrors;
};

// https://www.imsglobal.org/spec/lti/v1p3#learning-information-services-lis-claim
export type LISClaim = {
  person_sourcedid: string;
  course_offering_sourcedid: string;
  course_section_sourcedid: string;
  validation_context?: string | null;
  errors?: IdTokenErrors;
};

// https://www.imsglobal.org/spec/lti/v1p3#context-claim
export type ContextClaim = {
  id: string;
  label?: string;
  title?: string;
  type?: Array<string>;
  validation_context?: string | null;
  errors?: IdTokenErrors;
};

// https://www.imsglobal.org/spec/lti/v1p3#platform-instance-claim
export type ToolPlatformClaim = {
  guid: string;
  contact_email?: string;
  description?: string;
  name?: string;
  url?: string;
  product_family_code?: string;
  version?: string;
  validation_context?: string | null;
  errors?: IdTokenErrors;
};

// https://www.imsglobal.org/spec/lti/v1p3#resource-link-launch-request-message
export type IdToken = {
  aud: string;
  auds?: Array<string>;
  azp?: string;
  exp: number;
  iat: number;
  iss: string;
  nonce: string;
  sub: string;

  [MESSAGE_TYPE]: MessageTypes;
  [LTI_VERSION]: LtiVersions;
  [RESOURCE_LINK_CLAIM]: ResourceLinkClaim;
  [DEPLOYMENT_ID]: string;
  [TARGET_LINK_URI_CLAIM]: string;
  [ROLES_CLAIM]: Array<Roles>;
  [CONTEXT_CLAIM]?: ContextClaim;
  [TOOL_PLATFORM_CLAIM]?: ToolPlatformClaim;
  [DEEP_LINKING_CLAIM]?: DeepLinkingClaim;
  [LAUNCH_PRESENTATION]?: LaunchPresentationClaim;
  [NAMES_AND_ROLES_CLAIM]?: NamesAndRolesClaim;
  [AGS_CLAIM]?: AGSClaim;
  [LIS_CLAIM]?: LISClaim;
  [MIGRATION_CLAIM]?: object;
  [CUSTOM_CLAIM]?: object;
  [LTI11_LEGACY_USER_ID_CLAIM]?: string;
  [LTI1P1_CLAIM]?: object,
  picture?: string;
  email?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  middle_name?: string;
  locale?: string;

  errors?: IdTokenErrors;
};


//
// Dynamic Registration
//
export type PlatformConfiguration = {
  issuer: string;
  authorization_endpoint: string;
  token_endpoint: string;
  token_endpoint_auth_methods_supported?: string[];
  token_endpoint_auth_signing_alg_values_supported?: string[];
  jwks_uri: string;
  registration_endpoint?: string;
  scopes_supported?: string[];
  response_types_supported?: string[];
  subject_types_supported?: string[];
  id_token_signing_alg_values_supported?: string[];
  claims_supported?: string[];
  authorization_server?: string;
  "https://purl.imsglobal.org/spec/lti-platform-configuration"?: LtiPlatformConfiguration;
};

export type LtiPlatformConfiguration = {
  product_family_code: string;
  version: string;
  messages_supported: MessageSupported[];
  variables?: string[];
};

export type MessageSupported = {
  type: string;
  placements?: string[];
};

export type ToolConfiguration = {
  application_type: string;
  grant_types: string[];
  response_types: string[];
  redirect_uris: string[];
  initiate_login_uri: string;
  client_name: string;
  jwks_uri: string;
  logo_uri?: string;
  token_endpoint_auth_method: string;
  contacts?: string[];
  scope: string;
  "https://purl.imsglobal.org/spec/lti-tool-configuration": LtiToolConfiguration;
  client_uri?: string;
  tos_uri?: string;
  policy_uri?: string;
  client_id?: string;
  registration_client_uri?: string;
}

export type LtiToolConfiguration = {
  domain: string;
  secondary_domains?: string[];
  deployment_id?: string;
  target_link_uri: string;
  custom_parameters?: { [key: string]: string };
  description?: string;
  messages: LtiMessage[];
  claims: string[];
}

export type LtiMessage = {
  type: string;
  target_link_uri?: string;
  label?: string;
  icon_uri?: string;
  custom_parameters?: { [key: string]: string };
  placements?: string[];
  roles?: string[];
}


//
// Names and Roles
//
export interface Context {
  id: string;
  label: string;
  title: string;
}

export enum MemberStatus {
  Active,
  Inactive,
  Deleted,
}

export interface Member {
  email?: string;
  family_name?: string;
  given_name?: string;
  message?: any[]; // Replace with the correct type
  name?: string;
  picture?: string;
  roles?: any[]; // Replace with the correct type
  lis_person_sourcedid?: string;
  status: MemberStatus;
  user_id?: string;
  lti11_legacy_user_id?: string;
}

export interface MembershipContainer {
  id: string;
  context: Context;
  members: Member[];
}
