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
export const LTI_TOOL_CONFIGURATION = "https://purl.imsglobal.org/spec/lti-tool-configuration";
export const LTI_PLATFORM_CONFIGURATION = "https://purl.imsglobal.org/spec/lti-platform-configuration";
// Specfies all available scopes.
export const ALL_SCOPES = [
    AGS_SCOPE_LINE_ITEM,
    AGS_SCOPE_LINE_ITEM_READONLY,
    AGS_SCOPE_RESULT,
    AGS_SCOPE_SCORE,
    NAMES_AND_ROLES_SCOPE,
];
// Canvas specific
export const CANVAS_PUBLIC_JWKS_URL = "https://sso.canvaslms.com/api/lti/security/jwks";
export const CANVAS_AUTH_TOKEN_URL = "https://canvas.instructure.com/login/oauth2/token";
export const CANVAS_OIDC_URL = "https://sso.canvaslms.com/api/lti/authorize_redirect";
export const CANVAS_BETA_PUBLIC_JWKS_URL = "https://sso.beta.canvaslms.com/api/lti/security/jwks";
export const CANVAS_BETA_AUTH_TOKEN_URL = "https://sso.beta.canvaslms.com/login/oauth2/token";
export const CANVAS_BETA_OIDC_URL = "https://sso.beta.canvaslms.com/api/lti/authorize_redirect";
export const CANVAS_SUBMISSION_TYPE = "https://canvas.instructure.com/lti/submission_type";
export const CANVAS_PRIVACY_LEVEL = "https://canvas.instructure.com/lti/privacy_level";
export const CANVAS_PLACEMENT_VISIBILITY = "https://canvas.instructure.com/lti/visibility";
export const CANVAS_PLACEMENT_COURSE_NAVIGATION_ENABLED = "https://canvas.instructure.com/lti/course_navigation/default_enabled";
export var LtiVersions;
(function (LtiVersions) {
    LtiVersions["v1_3_0"] = "1.3.0";
})(LtiVersions || (LtiVersions = {}));
export var DocumentTargets;
(function (DocumentTargets) {
    DocumentTargets["iframe"] = "iframe";
    DocumentTargets["window"] = "window";
    DocumentTargets["embed"] = "embed";
})(DocumentTargets || (DocumentTargets = {}));
export var AcceptTypes;
(function (AcceptTypes) {
    AcceptTypes["link"] = "link";
    AcceptTypes["file"] = "file";
    AcceptTypes["html"] = "html";
    AcceptTypes["ltiResourceLink"] = "ltiResourceLink";
    AcceptTypes["image"] = "image";
})(AcceptTypes || (AcceptTypes = {}));
export var MessageTypes;
(function (MessageTypes) {
    MessageTypes["LtiResourceLinkRequest"] = "LtiResourceLinkRequest";
    MessageTypes["LtiDeepLinkingRequest"] = "LtiDeepLinkingRequest";
})(MessageTypes || (MessageTypes = {}));
// Below are all the roles specified in the LTI 1.3 spec. (https://www.imsglobal.org/spec/lti/v1p3#role-vocabularies-0)
// https://www.imsglobal.org/spec/lti/v1p3#roles-claim
export var Roles;
(function (Roles) {
    // Core system roles
    Roles["AdministratorSystemRole"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#Administrator";
    Roles["NoneSystemRole"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#None";
    // Non‑core system roles
    Roles["AccountAdminSystemRole"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#AccountAdmin";
    Roles["CreatorSystemRole"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#Creator";
    Roles["SysAdminSystemRole"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#SysAdmin";
    Roles["SysSupportSystemRole"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#SysSupport";
    Roles["UserSystemRole"] = "http://purl.imsglobal.org/vocab/lis/v2/system/person#User";
    // Core institution roles
    Roles["AdministratorInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator";
    Roles["FacultyInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Faculty";
    Roles["GuestInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Guest";
    Roles["NoneInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#None";
    Roles["OtherInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Other";
    Roles["StaffInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Staff";
    Roles["StudentInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Student";
    // Non‑core institution roles
    Roles["AlumniInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Alumni";
    Roles["InstructorInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor";
    Roles["LearnerInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Learner";
    Roles["MemberInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Member";
    Roles["MentorInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Mentor";
    Roles["ObserverInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Observer";
    Roles["ProspectiveStudentInstitutionRole"] = "http://purl.imsglobal.org/vocab/lis/v2/institution/person#ProspectiveStudent";
    // Core context roles
    Roles["AdministratorContextRole"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator";
    Roles["ContentDeveloperContextRole"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#ContentDeveloper";
    Roles["InstructorContextRole"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor";
    Roles["LearnerContextRole"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Learner";
    Roles["MentorContextRole"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor";
    // Non‑core context roles
    Roles["ManagerContextRole"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Manager";
    Roles["MemberContextRole"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Member";
    Roles["OfficerContextRole"] = "http://purl.imsglobal.org/vocab/lis/v2/membership#Officer";
})(Roles || (Roles = {}));
export var AGSScopes;
(function (AGSScopes) {
    AGSScopes["lineItem"] = "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem";
    AGSScopes["resultReadOnly"] = "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly";
    AGSScopes["score"] = "https://purl.imsglobal.org/spec/lti-ags/scope/score";
    AGSScopes["lineItemReadOnly"] = "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly";
})(AGSScopes || (AGSScopes = {}));
export var MemberStatus;
(function (MemberStatus) {
    MemberStatus["Active"] = "Active";
    MemberStatus["Inactive"] = "Inactive";
    MemberStatus["Deleted"] = "Deleted";
})(MemberStatus || (MemberStatus = {}));
//# sourceMappingURL=index.js.map