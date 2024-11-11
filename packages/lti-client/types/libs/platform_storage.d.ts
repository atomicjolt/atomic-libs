import { LTIStorageParams, InitSettings } from '../../types';
export declare function getTargetFrame(storageParams: LTIStorageParams): Promise<Window>;
export declare function storeState(state: string, storageParams: LTIStorageParams): Promise<void>;
export declare function hasStorageAccessAPI(): boolean;
export declare function tryRequestStorageAccess(settings: InitSettings): void;
export declare function loadState(state: string, storageParams: LTIStorageParams): Promise<string>;
//# sourceMappingURL=platform_storage.d.ts.map