import React, { useSyncExternalStore } from "react";
import { addons, types } from "storybook/manager-api";
import {
  IconButton,
  TooltipLinkList,
  WithTooltip,
} from "storybook/internal/components";
import { MoonIcon, SunIcon } from "@storybook/icons";
import { atomicDarkTheme, atomicLightTheme } from "./atomicTheme";
import {
  getUiThemeSetting,
  isUiDark,
  setUiThemeSetting,
  subscribeUiTheme,
  UiThemeSetting,
} from "./utils/uiTheme";

/*
 * Storybook's own UI theme (sidebar, toolbar, panels, docs pages). It follows
 * the OS by default, and the "Storybook theme" button on the right of the
 * toolbar can force light or dark. The toolbar's "Color scheme" menu is
 * separate: it only affects the components being previewed.
 */
const uiTheme = () => (isUiDark() ? atomicDarkTheme : atomicLightTheme);

/** Declare the UI theme's color scheme on the manager page too, so its native
 * controls (scrollbars, inputs) match. */
const applyColorScheme = () => {
  document.documentElement.style.colorScheme = isUiDark() ? "dark" : "light";
};

addons.setConfig({
  theme: uiTheme(),
});
applyColorScheme();

const OPTIONS: { id: UiThemeSetting; title: string }[] = [
  { id: "system", title: "Match system" },
  { id: "light", title: "Light" },
  { id: "dark", title: "Dark" },
];

/** Snapshot of the setting and what it resolves to, for re-rendering. */
const snapshot = () =>
  `${getUiThemeSetting()}:${isUiDark() ? "dark" : "light"}`;

function UiThemeTool() {
  const [setting, resolved] = useSyncExternalStore(
    subscribeUiTheme,
    snapshot
  ).split(":");

  return (
    <WithTooltip
      placement="bottom"
      trigger="click"
      closeOnOutsideClick
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={OPTIONS.map(({ id, title }) => ({
            id,
            title,
            active: setting === id,
            onClick: () => {
              setUiThemeSetting(id);
              onHide();
            },
          }))}
        />
      )}
    >
      <IconButton ariaLabel="Storybook theme" disableAllTooltips>
        {resolved === "dark" ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </WithTooltip>
  );
}

addons.register("atomic/ui-theme", (api) => {
  // Re-theme the UI when the setting or the OS preference changes.
  subscribeUiTheme(() => {
    api.setOptions({ theme: uiTheme() });
    applyColorScheme();
  });

  addons.add("atomic/ui-theme/tool", {
    type: types.TOOLEXTRA,
    title: "Storybook theme",
    match: () => true,
    render: () => <UiThemeTool />,
  });
});
