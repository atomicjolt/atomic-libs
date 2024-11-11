import {
  IdToken,
  DEPLOYMENT_ID,
  MESSAGE_TYPE,
  ROLES_CLAIM,
  LTI_VERSION,
  TARGET_LINK_URI_CLAIM,
  RESOURCE_LINK_CLAIM
} from '@atomicjolt/lti-client/src/libs/lti_definitions';

function validateResourceLinkRequest(
  decodedToken: IdToken,
  requestedTargetLinkUri: string,
  validateTargetLinkUrl: boolean
): string[] {

  let errors: string[] = [];

  if (!decodedToken[TARGET_LINK_URI_CLAIM]) {
    errors.push(
      `LTI token is missing required claim ${TARGET_LINK_URI_CLAIM}`
    );
  }

  let targetLinkUri = decodedToken[TARGET_LINK_URI_CLAIM];
  if (validateTargetLinkUrl && targetLinkUri != requestedTargetLinkUri) {
    errors.push(
      `LTI token target link uri '${targetLinkUri}' doesn't match url '${requestedTargetLinkUri}'`
    );
  }

  if (!decodedToken[RESOURCE_LINK_CLAIM]) {
    errors.push(
      `LTI token is missing required claim ${RESOURCE_LINK_CLAIM}`
    );
  }

  if (!decodedToken[RESOURCE_LINK_CLAIM]?.["id"]) {
    errors.push(
      `LTI token is missing required field id from the claim ${RESOURCE_LINK_CLAIM}`
    );
  }

  return errors;
}

export function validateIdTokenContents(
  decodedToken: IdToken,
  requestedTargetLinkUri: string,
  validateTargetLinkUrl: boolean
): string[] {
  const errors: string[] = [];

  if (!decodedToken) {
    errors.push('LTI token is missing LTI token');
  }

  if (!decodedToken.exp) {
    errors.push('LTI token is missing required field exp');
  }

  if (!decodedToken.iss) {
    errors.push('LTI token is missing required field iss');
  }

  if (!decodedToken.sub) {
    errors.push('LTI token is missing required field sub');
  }

  if (!decodedToken.aud) {
    errors.push('LTI token is missing required field aud');
  }

  if (Array.isArray(decodedToken.aud) && decodedToken.aud.length > 1) {
    if (!decodedToken.azp) {
      errors.push('LTI token is missing required field azp');
    } else if (!decodedToken.aud.includes(decodedToken.azp)) {
      errors.push("azp is not one of the aud's");
    }
  }

  if (!decodedToken[DEPLOYMENT_ID]) {
    errors.push(`LTI token is missing required field ${DEPLOYMENT_ID}`);
  }

  if (!decodedToken[MESSAGE_TYPE]) {
    errors.push(`LTI token is missing required claim ${MESSAGE_TYPE}`);
  }

  if (decodedToken[MESSAGE_TYPE] === "LtiResourceLinkRequest") {
    errors.concat(validateResourceLinkRequest(decodedToken, requestedTargetLinkUri, validateTargetLinkUrl));
  }

  if (!decodedToken[ROLES_CLAIM]) {
    errors.push(`LTI token is missing required claim ${ROLES_CLAIM}`);
  }

  if (!decodedToken[LTI_VERSION]) {
    errors.push(`LTI token is missing required claim ${LTI_VERSION}`);
  }

  if (!decodedToken[LTI_VERSION]?.startsWith('1.3')) {
    errors.push('Invalid LTI version');
  }

  return errors;
}

