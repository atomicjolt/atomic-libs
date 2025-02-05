import { IdToken } from '@atomicjolt/lti-types';
import type { KeySet } from '../../types';
export type JwtPieces = {
    keySet: KeySet;
    signed: string;
};
export declare const TEST_ID_TOKEN: IdToken;
export declare function genJwt(token?: IdToken, expiresIn?: string, kid?: string): Promise<JwtPieces>;
//# sourceMappingURL=helper.d.ts.map