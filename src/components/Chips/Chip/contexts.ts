import React, { DOMAttributes } from "react";
import { AriaButtonProps } from "react-aria";

interface WrapperChipGroupProps {
  wrapperProps: React.DOMAttributes<HTMLDivElement>;
  contentProps: React.DOMAttributes<HTMLDivElement>;
  removeButtonProps: AriaButtonProps<"button">;
  allowsRemoving: boolean;
}

export const WrapperChipGroupContext =
  React.createContext<WrapperChipGroupProps>({} as WrapperChipGroupProps);
