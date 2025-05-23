import { useContext, useRef } from "react";
import { AriaProps, DropdownProps, FieldInputProps } from "../../../types";
import { Popover } from "../../Overlays/Popover";
import { ListBox } from "../ListBox";
import { FloatingFieldInputWrapper } from "@components/Internal/FloatingFieldInputWrapper";
import { Button } from "@components/Buttons/Button";
import { MaterialIcon } from "@components/Icons/MaterialIcon";
import { useRenderProps } from "@hooks/useRenderProps";
import { MultiSelectStateContext } from "@components/Fields/MultiSelectField";
import { StyledMultiSelectField } from "./MultiSelect.styles";
import { AriaMultiSelectProps } from "../../Fields/MultiSelectField";

export interface MultiSelectProps<T extends object>
  extends AriaProps<AriaMultiSelectProps<T>>,
    FieldInputProps,
    DropdownProps {
  variant?: "default" | "floating";
  selectionPlaceholder?: string;
}

const buttonVariantMap: Record<string, string> = {
  default: "dropdown",
  floating: "dropdown",
};

/** MultiSelect is a dropdown that allows the user to select multiple options from a list */
export function MultiSelect<T extends object>(props: MultiSelectProps<T>) {
  const ref = useRef(null);

  const {
    label,
    error,
    message,
    placeholder = "Select an option",
    selectionPlaceholder = placeholder,
    variant = "default",
    maxHeight = 300,
    dropdownPlacement = "bottom start",
  } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-multiselect",
    variant,
    selectors: {
      "data-float": variant === "floating",
    },
  });

  const buttonVariant = buttonVariantMap[variant] ?? "dropdown";

  return (
    <StyledMultiSelectField {...props} {...renderProps} ref={ref}>
      <FloatingFieldInputWrapper
        label={label}
        message={message}
        error={error}
        floating={variant === "floating"}
      >
        <Button variant={buttonVariant}>
          <MultiSelectText
            selectionPlaceholder={selectionPlaceholder}
            placeholder={placeholder}
            variant={variant}
          />
          <MaterialIcon icon="arrow_drop_down" style={{ marginLeft: "auto" }} />
        </Button>
      </FloatingFieldInputWrapper>
      <Popover maxHeight={maxHeight} placement={dropdownPlacement}>
        <ListBox items={props.items}>{props.children!}</ListBox>
      </Popover>
    </StyledMultiSelectField>
  );
}

interface MultiSelectTextProps {
  selectionPlaceholder: string;
  placeholder: string;
  variant: string;
}

function MultiSelectText(props: MultiSelectTextProps) {
  const { selectionPlaceholder, placeholder, variant } = props;

  const state = useContext(MultiSelectStateContext);

  if (!state) return;

  if (variant === "floating") {
    if (state.selectionManager.selectedKeys.size > 0) {
      return selectionPlaceholder;
    }

    return "";
  }

  if (state.selectionManager.selectedKeys.size > 0) {
    return selectionPlaceholder;
  }

  return placeholder;
}
