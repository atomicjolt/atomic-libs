import React from "react";
import Label from "../../../Utility/Label";
import { CustomSelectVariantProps } from "../CustomSelect.types";
import { PopoverWrapper } from "../../../Utility/Popover";
import { DropdownWrapper } from "../../common";

export default function FloatingCustomSelect<T>(
  props: CustomSelectVariantProps<T>
) {
  const { message, hideLabel, label, children, inputId, labelId } = props;

  return (
    <>
      <DropdownWrapper className="aje-combobox">
        <PopoverWrapper>
          {children}
          <Label htmlFor={inputId} id={labelId} hidden={hideLabel}>
            {label}
          </Label>
        </PopoverWrapper>
      </DropdownWrapper>
      {message && <p className="aje-label--message">{message}</p>}
    </>
  );
}
