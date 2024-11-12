import { isLtiInstructor, isLtiAdmin } from './lti_roles';

describe('isLtiInstructor', () => {
  it('returns true if the roles includes an array with urn:lti:role:ims/lis/Instructor', () => {
    const roles = ['urn:lti:role:ims/lis/Instructor'];
    expect(isLtiInstructor(roles)).toBe(true);
  });
  it('returns true if the roles includes a string with urn:lti:role:ims/lis/Instructor', () => {
    const roles = 'urn:lti:role:ims/lis/Instructor';
    expect(isLtiInstructor(roles)).toBe(true);
  });
});

describe('isLtiAdmin', () => {
  it('returns true if the roles includes an array with urn:lti:role:ims/lis/Administrator', () => {
    const roles = ['urn:lti:role:ims/lis/Administrator'];
    expect(isLtiAdmin(roles)).toBe(true);
  });
  it('returns true if the roles includes a string with urn:lti:role:ims/lis/Administrator', () => {
    const roles = 'urn:lti:role:ims/lis/Administrator';
    expect(isLtiAdmin(roles)).toBe(true);
  });
});
