import React from "react";

import Banners from "./elements/Banners";
import Buttons from "./elements/Buttons";
import { DateAndTime } from "./elements/DateAndTime";
import Fields from "./elements/Fields";
import Layout from "./elements/Layout";
import Links from "./elements/Links";
import LoadingStates from "./elements/LoadingStates";
import Localization from "./elements/Localization";
import Modals from "./elements/Modals";
import Overlays from "./elements/Overlays";
import Tables from "./elements/Tables";
import Text from "./elements/Text";

import { FormDemo as HookFormDemo } from "./forms/FormDemo";
import { FormDemo } from "./jsonforms/FormDemo";
import { Sandbox } from "./jsonforms/Sandbox";

export interface Page {
  id: string;
  label: string;
  component: React.ComponentType;
}

export interface Section {
  id: string;
  label: string;
  pages: Page[];
}

/** Top nav = sections (one per package); sub nav = that section's pages. */
export const sections: Section[] = [
  {
    id: "elements",
    label: "Elements",
    pages: [
      { id: "text", label: "Text", component: Text },
      { id: "buttons", label: "Buttons", component: Buttons },
      { id: "fields", label: "Fields", component: Fields },
      { id: "date-and-time", label: "Date and Time", component: DateAndTime },
      { id: "layout", label: "Layout", component: Layout },
      { id: "tables", label: "Tables", component: Tables },
      { id: "overlays", label: "Overlays", component: Overlays },
      { id: "modals", label: "Modals", component: Modals },
      { id: "banners", label: "Banners", component: Banners },
      { id: "loading-states", label: "Loading States", component: LoadingStates },
      { id: "links", label: "Links", component: Links },
      { id: "localization", label: "Localization", component: Localization },
    ],
  },
  {
    id: "jsonforms",
    label: "JSON Forms",
    pages: [
      { id: "form", label: "useJsonForm", component: FormDemo },
      { id: "sandbox", label: "Sandbox", component: Sandbox },
    ],
  },
  {
    id: "forms",
    label: "Forms",
    pages: [{ id: "form", label: "Form", component: HookFormDemo }],
  },
];
