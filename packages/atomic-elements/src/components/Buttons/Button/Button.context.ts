import React from "react";
import { ButtonProps } from ".";
import { createComponentContext } from "@utils/index";
import { HasIcon } from '../../../types';

export const ButtonContext = createComponentContext<
  ButtonProps & HasIcon
>();
