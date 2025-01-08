import React from "react";
import { DisclosureGroupState, DisclosureState } from "react-stately";
import { createComponentContext } from "@utils/index";
import { DisclosureProps } from ".";

export const DisclosureContext = createComponentContext<DisclosureProps>();

export const DisclosurePanelContext =
  createComponentContext<DisclosurePanelProps>();

export const DisclosureGroupStateContext =
  React.createContext<DisclosureGroupState | null>(null);

export const DisclosureStateContext =
  React.createContext<DisclosureState | null>(null);
