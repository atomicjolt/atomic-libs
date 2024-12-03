import React from "react";
import { ButtonProps } from ".";
import { createComponentContext } from "@utils/index";
import { CanHaveIcon } from '../../../types';

export const ButtonContext = createComponentContext<
  ButtonProps & CanHaveIcon
>();
