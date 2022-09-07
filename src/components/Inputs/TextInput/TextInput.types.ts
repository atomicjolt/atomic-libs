import { ControlledInput, SharedInputProps } from "../../../types";

export interface TextInputProps extends SharedInputProps, ControlledInput {
  /** Other types like date, time, and number have their own component  */
  readonly type?: "text" | "email" | "tel";
}
