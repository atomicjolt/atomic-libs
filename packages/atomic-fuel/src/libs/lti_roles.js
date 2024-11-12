import _ from 'lodash';

export function isLtiInstructor(roles) {
  return _.includes(roles, 'urn:lti:role:ims/lis/Instructor');
}

export function isLtiAdmin(roles) {
  return _.includes(roles, 'urn:lti:role:ims/lis/Administrator')
    || _.includes(roles, 'urn:lti:instrole:ims/lis/Administrator')
    || _.includes(roles, 'urn:lti:sysrole:ims/lis/SysAdmin')
    || _.includes(roles, 'urn:lti:sysrole:ims/lis/Administrator');
}
