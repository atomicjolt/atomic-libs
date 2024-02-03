import { HelpTextProps, Validation } from "@react-types/shared";

export type AriaProps<P> = Omit<
  P,
  | keyof HelpTextProps
  | keyof Validation<any>
  | "label"
  | "isDisabled"
  | "isReadOnly"
  | "id"
>;
