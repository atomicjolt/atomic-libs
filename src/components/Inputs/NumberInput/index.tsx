import React from "react";
import { AriaNumberFieldProps } from "react-aria";
import { AriaProps, FieldInputProps, HasVariant } from "../../../types";
import { useVariantClass } from "../../../hooks";
import { FieldInput, NumberField, VirtualInput } from "../../Atoms/Field";
import { Group } from "../../Atoms/Group";
import FloatingFieldInputWrapper from "../../Internal/FloatingFieldInputWrapper";
import classNames from "classnames";
import { StyledNumberField } from "../Inputs.styles";

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

    const variantClass = useVariantClass("aje-input", variant);

    return (
      <StyledNumberField
        size={size}
        className={classNames(variantClass, className)}
        data-float={
          (props.value !== undefined &&
            props.value !== null &&
            variant === "floating") ||
          undefined
        }
        {...rest}
      >
        <FloatingFieldInputWrapper
          floating={variant === "floating"}
          label={label}
          message={message}
          error={error}
        >
          <VirtualInput>
            <FieldInput />
            <Group direction="column" isMerged>
              <NumberField.IncrementButton />
              <NumberField.DecrementButton />
            </Group>
          </VirtualInput>
        </FloatingFieldInputWrapper>
      </StyledNumberField>
    );
  }
);
