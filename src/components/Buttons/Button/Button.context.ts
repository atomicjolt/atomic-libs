import React from "react";
import { ButtonProps } from ".";
import { IconButtonProps } from "../IconButton";
import { createComponentContext } from "@utils/index";

export const ButtonContext = createComponentContext<
  ButtonProps & IconButtonProps
>();
