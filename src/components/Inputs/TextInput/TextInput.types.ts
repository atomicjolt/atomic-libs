import { InputProps } from "../../../types";

export interface TextInputProps extends InputProps<string> {
  /** Other types like date, time, and number have their own component  */
  type?: "text" | "email" | "tel";
}
