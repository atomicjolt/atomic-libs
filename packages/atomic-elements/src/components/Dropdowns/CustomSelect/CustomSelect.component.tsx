import { forwardRef, type JSX } from "react";
import { SelectProps } from "react-stately";
import {
  AriaProps,
  DropdownProps,
  FieldInputProps,
  HasVariant,
} from "../../../types";
import { Popover } from "../../Overlays/Popover";
import { ListBox } from "../ListBox";
import { SelectField } from "@components/Fields/SelectField";
import { FloatingFieldInputWrapper } from "@components/Internal/FloatingFieldInputWrapper";
import { StyledSelectField } from "./CustomSelect.styles";
import { useRenderProps } from "@hooks";

export type CustomSelectVariants = "default" | "floating" | "ghost";

export interface CustomSelectProps<T extends object>
  extends AriaProps<SelectProps<T>>,
    FieldInputProps,
    HasVariant<CustomSelectVariants>,
    DropdownProps {}

/** A custom version of the builtin `select` component to
 * allow for consistent styling & an extended feature set */
export const CustomSelect = forwardRef(function CustomSelect<T extends object>(
  props: CustomSelectProps<T>,
  ref: React.Ref<HTMLButtonElement>
) {
  const {
    label,
    error,
    message,
    placeholder = "Select an option",
    variant = "default",
    maxHeight = 300,
    dropdownPlacement = "bottom start",
  } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-select",
    variant,
    selectors: {
      "data-float": !!props.selectedKey && variant === "floating",
    },
  });

  return (
    <StyledSelectField {...props} {...renderProps} ref={ref}>
      <FloatingFieldInputWrapper
        floating={variant === "floating"}
        label={label}
        message={message}
        error={error}
      >
        <SelectField.Button variant={variant}>
          <SelectField.Value
            placeholder={variant === "floating" ? null : placeholder}
          />
        </SelectField.Button>
      </FloatingFieldInputWrapper>

      <Popover maxHeight={maxHeight} placement={dropdownPlacement}>
        <ListBox items={props.items}>{props.children}</ListBox>
      </Popover>
    </StyledSelectField>
  );
}) as <T extends object>(
  props: CustomSelectProps<T> & React.RefAttributes<HTMLButtonElement>
) => JSX.Element;
