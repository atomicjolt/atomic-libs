import {
  ToolConfiguration,
  LtiMessage,
  MessageTypes,
  LTI_TOOL_CONFIGURATION,
  LtiToolConfiguration,
  CANVAS_PRIVACY_LEVEL,
  CANVAS_PLACEMENT_VISIBILITY,
  CANVAS_PLACEMENT_COURSE_NAVIGATION_ENABLED,
} from "@atomicjolt/lti-types";

interface ToolConfigurationParams {
  host: string;
  clientName: string;
  description: string;
  initPath: string;
  jwksPath: string;
  launchPath: string;
  logoPath: string;
  policyUri: string;
  redirectPath: string;
  tosUri: string;
  email: string;
  scope: string;
  productFamilyCode?: string;
  // Settings for dynamic registration install
  globalNav?: boolean;
  accountNav?: boolean;
  courseNav?: boolean;
  navText?: string;
  navVisibility?: string;
  navDefault?: string;
  privacyLevel?: string;
}

function createMessage(
  type: MessageTypes,
  targetLinkUri: string,
  label: string,
  iconUri: string,
  placements: string[],
  productFamilyCode: string,
  navVisibility?: string,
  navDefault?: string

): LtiMessage {
  const message: LtiMessage = {
    type,
    target_link_uri: targetLinkUri,
    label,
    icon_uri: iconUri,
    placements
  };

  if (productFamilyCode === 'canvas') {
    if (type === MessageTypes.LtiResourceLinkRequest) {
      message[CANVAS_PLACEMENT_VISIBILITY] =
        navVisibility || 'public';

      if (placements.includes('course_navigation') && navDefault) {
        message[CANVAS_PLACEMENT_COURSE_NAVIGATION_ENABLED] =
          navDefault === 'enabled';
      }
    }
  }

  return message;
}

function getCustomParameters(productFamilyCode?: string): { [key: string]: string } {
  const baseParams = {
    'context_id_history': '$Context.id.history',
    'resource_link_id_history': '$ResourceLink.id.history'
  };

  if (productFamilyCode === 'canvas') {
    return {
      ...baseParams,
      'custom_canvas_course_id': '$Canvas.course.id',
      'custom_canvas_api_domain': '$Canvas.api.domain',
      'canvas_user_id': '$Canvas.user.id',
      'canvas_account_id': '$Canvas.account.id',
      'canvas_shard_id': '$Canvas.shard.id',
      'membership_roles': '$com.Instructure.membership.roles',
      'canvas_user_timezone': '$Person.address.timezone',
      'canvas_root_account_id': '$Canvas.rootAccount.id'
    };
  }

  return baseParams;
}

// This method will build a tool configuration object that can be used to register an LTI tool with a platform.
// The configuration object will include the necessary information for the platform to launch the tool.
// It returns a ToolConfiguration object that can be mutated as needed.
export function buildToolConfiguration(params: ToolConfigurationParams): ToolConfiguration {
  const {
    host,
    clientName,
    description,
    initPath,
    jwksPath,
    launchPath,
    logoPath,
    policyUri,
    redirectPath,
    tosUri,
    email,
    scope,
    productFamilyCode,
    globalNav,
    navText,
    accountNav,
    navVisibility,
    navDefault,
    courseNav,
    privacyLevel,
  } = params;
  const baseUrl = `https://${host}`;
  const launch_uri = `${baseUrl}/${launchPath}`;
  const messages: LtiMessage[] = [];

  // Add Deep Linking Message
  const deepLinkingMessage: LtiMessage = {
    type: MessageTypes.LtiDeepLinkingRequest,
    target_link_uri: launch_uri,
    label: clientName,
    icon_uri: `${baseUrl}/${logoPath}`
  };

  if (productFamilyCode === "canvas") {
    deepLinkingMessage.placements = ["editor_button"];
  } else if (productFamilyCode === "desire2learn") {
    deepLinkingMessage.placements = ["ContentArea", "RichTextEditor"];
  }
  messages.push(deepLinkingMessage);

  // Add navigation messages
  if (globalNav) {
    messages.push(
      createMessage(
        MessageTypes.LtiResourceLinkRequest,
        launch_uri,
        navText || clientName,
        `${baseUrl}/${logoPath}`,
        ['global_navigation'],
        productFamilyCode || '',

      )
    );
  }

  if (accountNav) {
    messages.push(
      createMessage(
        MessageTypes.LtiResourceLinkRequest,
        launch_uri,
        navText || clientName,
        `${baseUrl}/${logoPath}`,
        ['account_navigation'],
        productFamilyCode || '',
        navVisibility,
        navDefault,
      )
    );
  }

  if (courseNav) {
    messages.push(
      createMessage(
        MessageTypes.LtiResourceLinkRequest,
        launch_uri,
        navText || clientName,
        `${baseUrl}/${logoPath}`,
        ['course_navigation'],
        productFamilyCode || '',
        navVisibility,
        navDefault,
      )
    );
  }

  const ltiToolConfig: LtiToolConfiguration = {
    domain: host,
    description,
    target_link_uri: launch_uri,
    custom_parameters: getCustomParameters(productFamilyCode),
    claims: [
      "iss",
      "sub",
      "name",
      "given_name",
      "family_name",
      "email",
      "https://purl.imsglobal.org/spec/lti/claim/context",
      "https://purl.imsglobal.org/spec/lti/claim/tool_platform",
      "https://purl.imsglobal.org/spec/lti/claim/deployment_id",
      "https://purl.imsglobal.org/spec/lti/claim/roles"
    ],
    messages,
  };

  // Add Canvas-specific privacy level if applicable
  if (productFamilyCode === 'canvas' && privacyLevel) {
    ltiToolConfig[CANVAS_PRIVACY_LEVEL] = privacyLevel;
  }

  const config: ToolConfiguration = {
    application_type: "web",
    response_types: ["id_token"],
    grant_types: ["implicit", "client_credentials"],
    initiate_login_uri: `${baseUrl}/${initPath}`,
    redirect_uris: [`${baseUrl}/${redirectPath}`],
    client_name: clientName,
    jwks_uri: `${baseUrl}/${jwksPath}`,
    logo_uri: `${baseUrl}/${logoPath}`,
    client_uri: baseUrl,
    policy_uri: policyUri,
    tos_uri: tosUri,
    token_endpoint_auth_method: "private_key_jwt",
    contacts: [email],
    scope,
    [LTI_TOOL_CONFIGURATION]: ltiToolConfig
  };

  return config;
}