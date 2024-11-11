export declare const LTI_VERSION = "https://purl.imsglobal.org/spec/lti/claim/version";
export declare const LAUNCH_PRESENTATION = "https://purl.imsglobal.org/spec/lti/claim/launch_presentation";
export declare const DEPLOYMENT_ID = "https://purl.imsglobal.org/spec/lti/claim/deployment_id";
export declare const MESSAGE_TYPE = "https://purl.imsglobal.org/spec/lti/claim/message_type";
export declare const CONTEXT_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/context";
export declare const RESOURCE_LINK_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/resource_link";
export declare const TOOL_PLATFORM_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/tool_platform";
export declare const AGS_CLAIM = "https://purl.imsglobal.org/spec/lti-ags/claim/endpoint";
export declare const BASIC_OUTCOME_CLAIM = "https://purl.imsglobal.org/spec/lti-bo/claim/basicoutcome";
export declare const MENTOR_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/role_scope_mentor";
export declare const ROLES_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/roles";
export declare const CUSTOM_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/custom";
export declare const EXTENSION_CLAIM = "http://www.ExamplePlatformVendor.com/session";
export declare const LIS_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/lis";
export declare const TARGET_LINK_URI_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/target_link_uri";
export declare const LTI11_LEGACY_USER_ID_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/lti11_legacy_user_id";
export declare const LTI1P1_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/lti1p1";
export declare const DEEP_LINKING_CLAIM = "https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings";
export declare const DEEP_LINKING_DATA_CLAIM = "https://purl.imsglobal.org/spec/lti-dl/claim/data";
export declare const DEEP_LINKING_TOOL_MSG_CLAIM = "https://purl.imsglobal.org/spec/lti-dl/claim/msg";
export declare const DEEP_LINKING_TOOL_LOG_CLAIM = "https://purl.imsglobal.org/spec/lti-dl/claim/log";
export declare const CONTENT_ITEM_CLAIM = "https://purl.imsglobal.org/spec/lti-dl/claim/content_items";
export declare const NAMES_AND_ROLES_CLAIM = "https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice";
export declare const MIGRATION_CLAIM = "https://purl.imsglobal.org/spec/lti/claim/lti1p1";
export declare const NAMES_AND_ROLES_SERVICE_VERSIONS: string[];
export declare const CALIPER_CLAIM = "https://purl.imsglobal.org/spec/lti-ces/claim/caliper-endpoint-service";
export declare const TOOL_LAUNCH_CALIPER_CONTEXT = "http://purl.imsglobal.org/ctx/caliper/v1p1/ToolLaunchProfile-extension";
export declare const TOOL_USE_CALIPER_CONTEXT = "http://purl.imsglobal.org/ctx/caliper/v1p1";
export declare const AGS_SCOPE_LINE_ITEM = "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem";
export declare const AGS_SCOPE_LINE_ITEM_READONLY = "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly";
export declare const AGS_SCOPE_RESULT = "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly";
export declare const AGS_SCOPE_SCORE = "https://purl.imsglobal.org/spec/lti-ags/scope/score";
export declare const NAMES_AND_ROLES_SCOPE = "https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly";
export declare const CALIPER_SCOPE = "https://purl.imsglobal.org/spec/lti-ces/v1p0/scope/send";
export declare const STUDENT_SCOPE = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Student";
export declare const INSTRUCTOR_SCOPE = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor";
export declare const LEARNER_SCOPE = "http://purl.imsglobal.org/vocab/lis/v2/membership#Learner";
export declare const MENTOR_SCOPE = "http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor";
export declare const MENTOR_ROLE_SCOPE = "a62c52c02ba262003f5e";
export declare const COURSE_CONTEXT = "http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering";
export declare const ACCOUNT_CONTEXT = "Account";
export declare const TOOL_CONFIGURATION = "https://purl.imsglobal.org/spec/lti-tool-configuration";
export declare const ALL_SCOPES: string[];
export declare const CANVAS_PUBLIC_JWKS_URL = "https://sso.canvaslms.com/api/lti/security/jwks";
export declare const CANVAS_AUTH_TOKEN_URL = "https://canvas.instructure.com/login/oauth2/token";
export declare const CANVAS_OIDC_URL = "https://sso.canvaslms.com/api/lti/authorize_redirect";
export declare const CANVAS_BETA_PUBLIC_JWKS_URL = "https://sso.beta.canvaslms.com/api/lti/security/jwks";
export declare const CANVAS_BETA_AUTH_TOKEN_URL = "https://sso.beta.canvaslms.com/login/oauth2/token";
export declare const CANVAS_BETA_OIDC_URL = "https://sso.beta.canvaslms.com/api/lti/authorize_redirect";
export declare const CANVAS_SUBMISSION_TYPE = "https://canvas.instructure.com/lti/submission_type";
interface IdTokenErrors {
    errors: {
        errors?: {};
    };
}
export declare enum LtiVersions {
    v1_3_0 = "1.3.0"
}
export declare enum DocumentTargets {
    iframe = "iframe",
    window = "window",
    embed = "embed"
}
export declare enum AcceptTypes {
    link = "link",
    file = "file",
    html = "html",
    ltiResourceLink = "ltiResourceLink",
    image = "image"
}
export declare enum MessageTypes {
    LtiResourceLinkRequest = "LtiResourceLinkRequest",
    LtiDeepLinkingRequest = "LtiDeepLinkingRequest"
}
export declare enum Roles {
    AdministratorSystemRole = "http://purl.imsglobal.org/vocab/lis/v2/system/person#Administrator",
    NoneSystemRole = "http://purl.imsglobal.org/vocab/lis/v2/system/person#None",
    AccountAdminSystemRole = "http://purl.imsglobal.org/vocab/lis/v2/system/person#AccountAdmin",
    CreatorSystemRole = "http://purl.imsglobal.org/vocab/lis/v2/system/person#Creator",
    SysAdminSystemRole = "http://purl.imsglobal.org/vocab/lis/v2/system/person#SysAdmin",
    SysSupportSystemRole = "http://purl.imsglobal.org/vocab/lis/v2/system/person#SysSupport",
    UserSystemRole = "http://purl.imsglobal.org/vocab/lis/v2/system/person#User",
    AdministratorInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator",
    FacultyInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Faculty",
    GuestInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Guest",
    NoneInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#None",
    OtherInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Other",
    StaffInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Staff",
    StudentInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Student",
    AlumniInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Alumni",
    InstructorInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor",
    LearnerInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Learner",
    MemberInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Member",
    MentorInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Mentor",
    ObserverInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Observer",
    ProspectiveStudentInstitutionRole = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#ProspectiveStudent",
    AdministratorContextRole = "http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator",
    ContentDeveloperContextRole = "http://purl.imsglobal.org/vocab/lis/v2/membership#ContentDeveloper",
    InstructorContextRole = "http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor",
    LearnerContextRole = "http://purl.imsglobal.org/vocab/lis/v2/membership#Learner",
    MentorContextRole = "http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor",
    ManagerContextRole = "http://purl.imsglobal.org/vocab/lis/v2/membership#Manager",
    MemberContextRole = "http://purl.imsglobal.org/vocab/lis/v2/membership#Member",
    OfficerContextRole = "http://purl.imsglobal.org/vocab/lis/v2/membership#Officer"
}
export type ResourceLinkClaim = {
    id: string;
    description?: string | null;
    title?: string;
    validation_context?: string | null;
    errors?: IdTokenErrors;
};
export type LaunchPresentationClaim = {
    document_target?: DocumentTargets;
    return_url?: string;
    locale: string;
    height?: number;
    width?: number;
    validation_context?: string | null;
    errors?: IdTokenErrors;
};
export type DeepLinkingClaim = {
    deep_link_return_url: string;
    accept_types: Array<keyof typeof AcceptTypes>;
    accept_presentation_document_targets: Array<keyof typeof DocumentTargets>;
    accept_media_types?: string;
    accept_multiple?: boolean;
    accept_lineitem?: boolean;
    auto_create?: boolean;
    title?: string;
    text?: string;
    data?: string;
};
export type NamesAndRolesClaim = {
    context_memberships_url: string;
    service_versions: Array<string>;
    validation_context?: string | null;
    errors?: IdTokenErrors;
};
export declare enum AGSScopes {
    lineItem = "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem",
    resultReadOnly = "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly",
    score = "https://purl.imsglobal.org/spec/lti-ags/scope/score",
    lineItemReadOnly = "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly"
}
export type AGSClaim = {
    scope: Array<AGSScopes>;
    lineitems?: string;
    lineitem?: string;
    validation_context?: string | null;
    errors?: IdTokenErrors;
};
export type LISClaim = {
    person_sourcedid: string;
    course_offering_sourcedid: string;
    course_section_sourcedid: string;
    validation_context?: string | null;
    errors?: IdTokenErrors;
};
export type ContextClaim = {
    id: string;
    label?: string;
    title?: string;
    type?: Array<string>;
    validation_context?: string | null;
    errors?: IdTokenErrors;
};
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
    [LTI1P1_CLAIM]?: object;
    picture?: string;
    email?: string;
    name?: string;
    given_name?: string;
    family_name?: string;
    middle_name?: string;
    locale?: string;
    errors?: IdTokenErrors;
};
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
};
export type LtiToolConfiguration = {
    domain: string;
    secondary_domains?: string[];
    deployment_id?: string;
    target_link_uri: string;
    custom_parameters?: {
        [key: string]: string;
    };
    description?: string;
    messages: LtiMessage[];
    claims: string[];
};
export type LtiMessage = {
    type: string;
    target_link_uri?: string;
    label?: string;
    icon_uri?: string;
    custom_parameters?: {
        [key: string]: string;
    };
    placements?: string[];
    roles?: string[];
};
export interface Context {
    id: string;
    label: string;
    title: string;
}
export declare enum MemberStatus {
    Active = 0,
    Inactive = 1,
    Deleted = 2
}
export interface Member {
    email?: string;
    family_name?: string;
    given_name?: string;
    message?: any[];
    name?: string;
    picture?: string;
    roles?: any[];
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
export {};
//# sourceMappingURL=index.d.ts.map