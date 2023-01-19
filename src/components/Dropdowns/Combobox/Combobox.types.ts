import {
  FilterStrategy,
  HasChildren,
  HasVariant,
  InputProps,
} from "../../../types";

export type Variants = "default" | "floating";

export interface ComboboxProps
  extends InputProps<string>,
    HasVariant<Variants> {
  /** Array of possible values to suggest to the user */
  options: string[];

  /** Strategy on how to filter results based on search term */
  filterStrategy?: FilterStrategy<string, string>;
}

export interface ComboboxVariantProps extends HasChildren {
  message?: string;
  hideLabel?: boolean;
  label: string;
  inputId: string;
}
