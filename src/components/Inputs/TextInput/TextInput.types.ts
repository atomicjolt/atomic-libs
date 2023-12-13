import { HasChildren, HasVariant, InputProps } from "../../../types";

export type Variants = "default" | "floating";

export interface TextInputProps
  extends InputProps<string>,
    HasVariant<Variants> {
  /** Other types like date, time, and number have their own component  */
  type?: "text" | "email" | "tel" | "password";
}

export interface TextInputVariantProps extends HasChildren {
  message?: string;
  hideLabel?: boolean;
  label: string;
  inputId: string;
}
