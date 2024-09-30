import React from "react";
import { ButtonProps } from ".";
import { IconButtonProps } from "../IconButton";

export const ButtonContext = React.createContext<
  Partial<ButtonProps & IconButtonProps>
>({});
