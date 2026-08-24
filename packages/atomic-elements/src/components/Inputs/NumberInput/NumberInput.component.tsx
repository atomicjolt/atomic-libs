import React from "react";
import { AriaNumberFieldProps } from "@react-aria/numberfield";
import classNames from "classnames";

import { AriaProps, FieldInputProps, HasVariant } from "../../../types";
import { FieldInput, ComboInput } from "../../Fields";
import { Group } from "../../Layout/Group";
import { FloatingFieldInputWrapper } from "../../Internal/FloatingFieldInputWrapper";
import { StyledNumberField } from "../Inputs.styles";
import { IconButton } from "@components/Buttons/IconButton";

export interface NumberInputProps
  extends AriaProps<AriaNumberFieldProps>,
    FieldInputProps,
    HasVariant<"default" | "floating"> {}

/** Input for number values. Fowards a `ref` to the internal input element */
export const NumberInput = React.forwardRef(
  (props: NumberInputProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      label,
      size = "medium",
      error,
      message,
      className,
      variant = "default",
      ...rest
    } = props;

    return (
      <StyledNumberField
        size={size}
        className={classNames(className, {
          [`aje-input--${variant}`]: variant,
        })}
        {...rest}
      >
        <FloatingFieldInputWrapper
          floating={variant === "floating"}
          label={label}
          message={message}
          error={error}
        >
          <ComboInput padding="both">
            <FieldInput />
            <Group
              $direction="column"
              isMerged
              // Shrink the size of the buttons so they fit nicely within the input field
              style={
                {
                  "--btn-icon-size": "1.9rem",
                } as React.CSSProperties
              }
            >
              <IconButton
                slot="increment"
                icon="arrow_drop_up"
                variant="content"
                size="small"
              />
              <IconButton
                slot="decrement"
                icon="arrow_drop_down"
                variant="content"
                size="small"
              />
            </Group>
          </ComboInput>
        </FloatingFieldInputWrapper>
      </StyledNumberField>
    );
  }
);
