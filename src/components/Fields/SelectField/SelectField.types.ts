import { AriaSelectProps } from "@react-aria/select";
import { AriaProps } from "../../../types";
import { FieldProps } from "../Field";

export interface SelectFieldProps<T>
  extends Omit<FieldProps, "children">,
    Omit<AriaProps<AriaSelectProps<T>>, "children"> {
  children?: React.ReactNode;
}
