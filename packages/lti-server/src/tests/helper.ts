import { importPKCS8 } from 'jose';
import {
  IdToken,
  MESSAGE_TYPE,
  MessageTypes,
  LTI_VERSION,
  RESOURCE_LINK_CLAIM,
  LtiVersions,
  DocumentTargets,
  Roles,
  AGS_CLAIM,
  NAMES_AND_ROLES_CLAIM,
  AGSScopes,
} from '@atomicjolt/lti-types';
import { generateKeySet } from '../libs/jwks';
import { signJwt, ALGORITHM } from '../libs/jwt';
import type { KeySet } from '../../types';

const clientId = '43460000000000572';

export type JwtPieces = { keySet: KeySet, signed: string; };

export const TEST_ID_TOKEN: IdToken = {
  [MESSAGE_TYPE]: MessageTypes.LtiDeepLinkingRequest,
  [LTI_VERSION]: LtiVersions.v1_3_0,
  [RESOURCE_LINK_CLAIM]: {
    'id': 'a8a76fb8fbcc2d09787dafd28564e2ecdab51f11',
    'description': null,
    'title': '8th Grade Math',
    'validation_context': null,
    'errors': {
      'errors': {}
    }
  },
  'aud': clientId,
  'azp': clientId,
  'exp': (Date.now() / 1000) + (60 * 15), // 15 minutes from now
  'iat': Date.now() / 1000,
  'https://purl.imsglobal.org/spec/lti/claim/deployment_id': '22108:a8a76fb8fbcc2d09787dafd28564e2ecdab51f11',
  'iss': 'https://canvas.instructure.com',
  'nonce': 'ff3719333ec73654a962018adf0c0fe313531ec78fb5a7f5ad4188f786d16eb1ff5b6f3fbcbac00acdc1211b78afd1a01d3f304a84fe7b6da0a7ab0d93c16e0e',
  'sub': 'cfca15d8-2958-4647-a33e-a7c4b2ddab2c',
  'https://purl.imsglobal.org/spec/lti/claim/target_link_uri': 'https://assessments.atomicjolt.win/lti_launches',
  'picture': 'https://canvas.instructure.com/images/messages/avatar-50.png',
  'email': 'testguy@example.com',
  'name': 'testguy@example.com',
  'given_name': 'testguy@example.com',
  'family_name': '',
  'https://purl.imsglobal.org/spec/lti/claim/lis': {
    'person_sourcedid': '1234',
    'course_section_sourcedid': '32',
    'course_offering_sourcedid': 'MATH1010032016S',
    'validation_context': null,
    'errors': {
      'errors': {}
    }
  },
  'https://purl.imsglobal.org/spec/lti/claim/context': {
    'id': 'a8a76fb8fbcc2d09787dafd28564e2ecdab51f11',
    'label': 'Grade 8 Math',
    'title': '8th Grade Math',
    'type': [
      'http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering'
    ],
    'validation_context': null,
    'errors': {
      'errors': {}
    }
  },
  'https://purl.imsglobal.org/spec/lti/claim/tool_platform': {
    'guid': '4MRcxnx6vQbFXxhLb8005m5WXFM2Z2i8lQwhJ1QT:canvas-lms',
    'name': 'Atomic Jolt',
    'version': 'cloud',
    'product_family_code': 'canvas',
    'validation_context': null,
    'errors': {
      'errors': {}
    }
  },
  'https://purl.imsglobal.org/spec/lti/claim/launch_presentation': {
    'document_target': DocumentTargets.iframe,
    'return_url': 'https://atomicjolt.instructure.com/courses/253/external_content/success/external_tool_redirect',
    'locale': 'en',
    'height': 400,
    'width': 800,
    'validation_context': null,
    'errors': {
      'errors': {}
    }
  },
  'locale': 'en',
  'https://purl.imsglobal.org/spec/lti/claim/roles': [
    Roles.AdministratorInstitutionRole,
    Roles.InstructorInstitutionRole,
    Roles.StudentInstitutionRole,
    Roles.InstructorContextRole,
    Roles.LearnerContextRole,
    Roles.UserSystemRole,
  ],
  'https://purl.imsglobal.org/spec/lti/claim/custom': {
    'canvas_sis_id': '$Canvas.user.sisid',
    'canvas_user_id': '1',
    'canvas_course_id': '253',
    'canvas_term_name': 'Fall 2022',
    'canvas_account_id': '66',
    'canvas_api_domain': 'atomicjolt.instructure.com',
    'canvas_section_ids': '247',
    'context_id_history': '',
    'canvas_account_name': 'test',
    'canvas_assignment_id': '$Canvas.assignment.id',
    'canvas_user_timezone': 'America/Denver',
    'canvas_root_account_id': '1'
  },
  'https://purl.imsglobal.org/spec/lti/claim/lti11_legacy_user_id': '0340cde37624c04979a6c3fdd0afc2479f8405ad',
  'https://purl.imsglobal.org/spec/lti/claim/lti1p1': {
    'user_id': '0340cde37624c04979a6c3fdd0afc2479f8405ad',
    'validation_context': null,
    'errors': {
      'errors': {}
    }
  },
  'errors': {
    'errors': {}
  },
  [AGS_CLAIM]: {
    'scope': [
      AGSScopes.lineItem,
      AGSScopes.resultReadOnly,
      AGSScopes.score,
      AGSScopes.lineItemReadOnly,
    ],
    'lineitems': 'https://atomicjolt.instructure.com/api/lti/courses/253/line_items',
    'validation_context': null,
    'errors': {
      'errors': {}
    }
  },
  [NAMES_AND_ROLES_CLAIM]: {
    'context_memberships_url': 'https://atomicjolt.instructure.com/api/lti/courses/253/names_and_roles',
    'service_versions': [
      '2.0'
    ],
    'validation_context': null,
    'errors': {
      'errors': {}
    }
  },
}

export async function genJwt(token: IdToken = TEST_ID_TOKEN, expiresIn: string = '10m', kid: string = ''): Promise<JwtPieces> {
  const keySet = await generateKeySet();
  const pri = await importPKCS8(keySet.privateKey, ALGORITHM);
  const signed = await signJwt(token, pri, expiresIn, kid);
  return { keySet, signed };
}
