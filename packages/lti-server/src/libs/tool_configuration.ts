import { ToolConfiguration } from "@atomicjolt/lti-types";

export function getDefaultToolConfiguration(
  baseUrl: string,
  clientName: string,
  initPath: string,
  jwksPath: string,
  launchPath: string,
  logoPath: string,
  policyUri: string,
  redirectPath: string,
  tosUri: string,
  email: string,
): ToolConfiguration {
  const launch_uri = `${baseUrl}/${launchPath}`;
  return {
    application_type: "web",
    response_types: ["id_token"],
    grant_types: ["implicit", "client_credentials"],
    initiate_login_uri: `${baseUrl}/${initPath}`,
    redirect_uris: [`${baseUrl}/${redirectPath}`],
    client_name: clientName,
    jwks_uri: `${baseUrl}/${jwksPath}`,
    logo_uri: `${baseUrl}/${logoPath}`,
    client_uri: `https://${baseUrl}`,
    policy_uri: policyUri,
    tos_uri: tosUri,
    token_endpoint_auth_method: "private_key_jwt",
    contacts: [email],
    scope: "",
    "https://purl.imsglobal.org/spec/lti-tool-configuration": {
      domain: baseUrl,
      description: clientName,
      target_link_uri: launch_uri,
      custom_parameters: {
        "context_id_history": "$Context.id.history",
        "resource_link_id_history": "$ResourceLink.id.history",
      },
      claims: [
        "iss",
        "sub",
        "name",
        "given_name",
        "family_name",
        "https://purl.imsglobal.org/spec/lti/claim/context",
        "https://purl.imsglobal.org/spec/lti/claim/tool_platform",
      ],
      messages: [{
        type: "LtiDeepLinkingRequest",
        target_link_uri: launch_uri,
        label: clientName,
        placements: ["ContentItemSelection"],
      }],
    },
  };
}
