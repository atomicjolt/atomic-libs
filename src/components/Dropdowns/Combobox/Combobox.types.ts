import { HasChildren, HasVariant, InputProps } from "../../../types";

export type Variants = "default" | "floating";

export interface ComboboxProps
  extends InputProps<string>,
    HasVariant<Variants> {
  /** Array of possible values to suggest to the user */
  options: string[];

  /** Optional function to override the filtering behavior. By default,
   * the suggestions are compared to the current input value by string value.
   * It checks if the suggestions starts with the current value OR if the
   * levenshtein distance between them is 2 or less.
   */
  filterSuggestions?: (value: string, options: string[]) => string[];
}

export interface ComboboxVariantProps extends HasChildren {
  message?: string;
  hideLabel?: boolean;
  label: string;
  inputId: string;
}
