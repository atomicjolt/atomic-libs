import React from "react";
import cn from "classnames";
import Label from "../../../Utility/Label";
import { CustomSelectVariantProps } from "../CustomSelect.types";
import Popover, { PopoverWrapper } from "../../../Utility/Popover";

export default function FloatingCustomSelect<T>(
  props: CustomSelectVariantProps<T>
) {
  const { message, hideLabel, label, children, inputId, labelId } = props;

  return (
    <>
      <div className="aje-combobox">
        <PopoverWrapper>
          {children}
          <Label htmlFor={inputId} id={labelId} hidden={hideLabel}>
            {label}
          </Label>
        </PopoverWrapper>
      </div>
      {message && <p className="aje-label--message">{message}</p>}
    </>
  );
}
