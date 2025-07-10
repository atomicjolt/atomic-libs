import { forwardRef, type JSX } from "react";
import { SelectProps } from "react-stately";
import {
  AriaProps,
  DropdownProps,
  FieldInputProps,
  HasVariant,
} from "../../../types";
import { useRenderProps } from "@hooks/useRenderProps";
import { useTranslations } from "@hooks/useTranslations";
import { Popover } from "../../Overlays/Popover";
import { ListBox } from "../ListBox";
import { SelectField } from "@components/Fields/SelectField";
import { FloatingFieldInputWrapper } from "@components/Internal/FloatingFieldInputWrapper";
import { StyledSelectField } from "./CustomSelect.styles";
import { Button } from "@components/Buttons/Button";
import { MaterialIcon } from "@components/Icons/MaterialIcon";

export type CustomSelectVariants = "default" | "floating" | "ghost";

export interface CustomSelectProps<T extends object>
  extends AriaProps<SelectProps<T>>,
    FieldInputProps,
    HasVariant<CustomSelectVariants>,
    DropdownProps {}

const buttonVariantMap: Record<string, string> = {
  default: "dropdown",
  ghost: "dropdown-ghost",
};

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
    variant = "default",
    maxHeight = 300,
    dropdownPlacement = "bottom start",
  } = props;

  const t = useTranslations();

  const placeholder = props.placeholder ?? t("select.placeholder");

  const renderProps = useRenderProps({
    componentClassName: "aje-select",
    variant,
    selectors: {
      "data-float": !!props.selectedKey && variant === "floating",
    },
  });

  const buttonVariant = buttonVariantMap[variant] ?? "dropdown";

  return (
    <StyledSelectField {...props} {...renderProps} ref={ref}>
      <FloatingFieldInputWrapper
        floating={variant === "floating"}
        label={label}
        message={message}
        error={error}
      >
        <Button variant={buttonVariant}>
          <SelectField.Value
            placeholder={variant === "floating" ? null : placeholder}
          />
          <MaterialIcon icon="arrow_drop_down" style={{ marginLeft: "auto" }} />
        </Button>
      </FloatingFieldInputWrapper>

      <Popover maxHeight={maxHeight} placement={dropdownPlacement}>
        <ListBox items={props.items}>{props.children}</ListBox>
      </Popover>
    </StyledSelectField>
  );
}) as <T extends object>(
  props: CustomSelectProps<T> & React.RefAttributes<HTMLButtonElement>
) => JSX.Element;
