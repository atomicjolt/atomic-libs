import { IdToken } from '@atomicjolt/lti-types';
export declare function lmsHost(idToken: IdToken): string | null;
export declare function lmsUrl(idToken: IdToken): string;
export declare function isDeepLinkLaunch(idToken: IdToken): boolean;
export declare function isNamesAndRolesLaunch(idToken: IdToken): boolean;
export declare function isAssignmentAndGradesLaunch(idToken: IdToken): boolean;
export declare function clientId(idToken: IdToken): string;
//# sourceMappingURL=lti.d.ts.map