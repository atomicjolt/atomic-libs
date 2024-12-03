import { AriaTagGroupProps } from "@react-aria/tag";
import { AriaProps, FieldInputProps } from "../../../types";
import { ErrorMessage, Label, Message } from "@components/Fields";
import { ChipGroupField } from "@components/Fields/ChipGroupField";

export interface ChipGroupProps<T extends object>
  extends AriaProps<AriaTagGroupProps<T>>,
    Omit<FieldInputProps, "isReadOnly"> {
  /** Whether the label is placed above the
   * group, or inline with the chips */
  labelPlacement?: "above" | "inline";
}

/**
 * A generic ChipGroup component that renders a group of chips with optional labels, messages, and error messages.
 */
export function ChipGroup<T extends object>(props: ChipGroupProps<T>) {
  const {
    label,
    message,
    error,
    labelPlacement = "above",
    items,
    children,
    ...rest
  } = props;

  return (
    <ChipGroupField {...rest}>
      {labelPlacement === "above" && label && (
        <Label $paddingBottom="0px">{label}</Label>
      )}
      <ChipGroupField.List
        items={items}
        beforeChildren={
          labelPlacement === "inline" &&
          label && <Label $paddingBottom="0px">{label}</Label>
        }
      >
        {children}
      </ChipGroupField.List>
      {message && <Message>{message}</Message>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </ChipGroupField>
  );
}
