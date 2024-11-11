import {
  IdToken,
  DEEP_LINKING_CLAIM,
  LAUNCH_PRESENTATION,
  MESSAGE_TYPE,
  MessageTypes,
  NAMES_AND_ROLES_CLAIM,
  NAMES_AND_ROLES_SERVICE_VERSIONS,
  AGS_CLAIM,
} from '@atomicjolt/lti-types';

export function lmsHost(idToken: IdToken): string | null {
  if (isDeepLinkLaunch(idToken)) {
    return idToken[DEEP_LINKING_CLAIM]?.deep_link_return_url || null;
  } else {
    return idToken[LAUNCH_PRESENTATION]?.return_url || null;
  }
}

export function lmsUrl(idToken: IdToken): string {
  return `https://${lmsHost(idToken)}`;
}

export function isDeepLinkLaunch(idToken: IdToken): boolean {
  return idToken[MESSAGE_TYPE] === MessageTypes.LtiDeepLinkingRequest;
}

export function isNamesAndRolesLaunch(idToken: IdToken): boolean {
  return idToken[NAMES_AND_ROLES_CLAIM]?.service_versions === NAMES_AND_ROLES_SERVICE_VERSIONS;
}

export function isAssignmentAndGradesLaunch(idToken: IdToken): boolean {
  return !!idToken[AGS_CLAIM];
}

export function clientId(idToken: IdToken): string {
  if (idToken.auds && idToken.auds.length > 1 && idToken.azp) {
    // azp will contain the client_id if there are multiple auds
    return idToken.azp;
  } else if (idToken.auds && idToken.auds[0]) {
    return idToken.auds[0];
  } else {
    return idToken.aud;
  }
}
