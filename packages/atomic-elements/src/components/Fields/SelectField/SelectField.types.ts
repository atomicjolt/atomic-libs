import { BaseCollection } from "@react-aria/collections";
import { AriaSelectProps } from "@react-aria/select";
import { AriaProps } from "../../../types";
import { FieldProps } from "../Field";

export interface SelectFieldProps<T>
  extends Omit<FieldProps, "children">,
    Omit<AriaProps<AriaSelectProps<T>>, "children" | "items"> {
  children: React.ReactNode;
}

export interface SelectFieldInnerProps<T extends object>
  extends SelectFieldProps<T> {
  collection: BaseCollection<T>;
  selectRef: React.RefObject<HTMLButtonElement | null>;
}

export interface SelectValueProps {
  placeholder?: React.ReactNode;
}
