export interface TabsContextT<T extends string = string> {
  readonly changeTab: (tabName: T) => void;
  readonly currentTab: T;
  readonly tabIdPrefix: string;
  readonly tabContentId: string;
}
