import { AriaComboBoxProps } from "@react-aria/combobox";

import {
  AriaProps,
  CanHaveIcon,
  DropdownProps,
  FieldInputProps,
  HasVariant,
  MaterialIcons,
} from "../../../types";
import { IconButton } from "../../Buttons/IconButton";
import { Popover } from "../../Overlays/Popover";
import { ListBox } from "../ListBox";
import { ComboInput, Input } from "../../Fields";
import { MaterialIcon } from "@components/Icons/MaterialIcon";
import { FloatingFieldInputWrapper } from "@components/Internal/FloatingFieldInputWrapper";
import { StyledComboBoxField } from "./Combobox.styles";

export interface ComboBoxProps<T>
  extends AriaProps<AriaComboBoxProps<T>>,
    FieldInputProps,
    CanHaveIcon,
    HasVariant<"default" | "floating">,
    DropdownProps {
  /** Optional icon to render before the input */
  prefixIcon?: MaterialIcons;
}

/** Combox combinds a text input field with a dropdown list of options for the user to select from */
import React, { forwardRef } from "react";

export const ComboBox = forwardRef(function ComboBox<T extends object>(
  props: ComboBoxProps<T>,
  ref: React.Ref<HTMLInputElement>
) {
  const {
    icon = "search",
    prefixIcon,
    iconVariant,
    label,
    message,
    error,
    variant = "default",
    maxHeight = 300,
    dropdownPlacement = "bottom start",
  } = props;

  return (
    <StyledComboBoxField {...props} ref={ref}>
      <FloatingFieldInputWrapper
        label={label}
        message={message}
        error={error}
        floating={variant === "floating"}
      >
        <ComboInput padding={["left", "right"]}>
          {prefixIcon && (
            <MaterialIcon icon={prefixIcon} variant={iconVariant} />
          )}
          <Input size="full" />
          <IconButton
            icon={icon}
            variant="content"
            iconVariant={iconVariant}
            size="auto"
          />
        </ComboInput>
      </FloatingFieldInputWrapper>

      <Popover maxHeight={maxHeight} placement={dropdownPlacement}>
        <ListBox items={props.items}>{props.children}</ListBox>
      </Popover>
    </StyledComboBoxField>
  );
}) as <T extends object>(
  props: ComboBoxProps<T> & { ref?: React.Ref<HTMLInputElement> }
) => JSX.Element;
