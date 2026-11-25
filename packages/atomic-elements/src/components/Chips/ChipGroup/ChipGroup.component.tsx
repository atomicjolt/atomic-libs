import { AriaTagGroupProps } from "@react-aria/tag";
import { AriaProps, FieldInputProps } from "../../../types";
import { ErrorMessage, Label, Message } from "@components/Fields";
import { ChipGroupField } from "@components/Fields/ChipGroupField";
import { useLoading } from "@components/Feedback/Loading";
import {
  ChipGroupLoadingWrapper,
  StyledLoadingChips,
} from "./ChipGroup.styles";

export interface ChipGroupProps<T extends object>
  extends AriaProps<AriaTagGroupProps<T>>,
    Omit<FieldInputProps, "isReadOnly"> {
  /** Whether the label is placed above the
   * group, or inline with the chips
   * @default "above"
   */
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

  const { isLoading, loadingLabel } = useLoading(props);

  if (isLoading) {
    return (
      <ChipGroupLoadingWrapper $inline={labelPlacement === "inline"}>
        {label && <Label $paddingBottom="0px">{label}</Label>}
        <StyledLoadingChips title={loadingLabel} viewBox="0 0 200 22">
          <rect x="0" y="0" width="56" height="22" rx="4" />
          <rect x="64" y="0" width="56" height="22" rx="4" />
          <rect x="128" y="0" width="56" height="22" rx="4" />
        </StyledLoadingChips>
        {message && <Message>{message}</Message>}
      </ChipGroupLoadingWrapper>
    );
  }

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
