/** Component tokens. These may only reference semantic tokens. */
// prettier-ignore
export const input = {
  "input-border-clr": "{border-clr}",
  "input-border-width": "{border-width}",
  "input-border-style": "{border-style}",
  "input-border-radius": "{radius}",
  "input-border": "1px solid {input-border-clr}",
  "input-outline": "1px solid {outline-clr}",
  "input-height": "40px",
  "input-padding-horiz": "12px",
  "input-gap": "12px",
  "input-font-size": "1.6rem",
  "input-icon-size": "2.4rem",
  "input-icon-clr": "{icon-clr}",
  "input-text-clr": "{text-clr}",
  "input-bg-clr": "none",
  "input-transition": "none",
};

export const button = {
  "btn-font-size": "1.6rem",
  "btn-icon-size": "2.4rem",
  "btn-icon-gap": "8px",
  "btn-text-clr": "{text-clr-secondary}",
  "btn-bg-clr": "{background-clr}",
  "btn-hover-text-clr": "{text-clr}",
  "btn-hover-bg-clr": "{background-clr-hover}",
  "btn-hover-shadow": "none",
  "btn-border": "none",
  "btn-border-radius": "{radius}",
  "btn-height": "40px",
  "btn-padding-vert": "0.25em",
  "btn-padding-horiz": "1em",
  "btn-pressed-transform": "translateY(1px)",
};

export const banner = {
  "banner-bg-clr": "{background-clr-subtle}",
  "banner-text-clr": "{text-clr}",
  "banner-icon-clr": "{accent-clr}",
  "banner-btn-hover-clr": "{background-clr-subtle-hover}",
  "banner-btn-active-clr": "{background-clr-active}",
  "banner-btn-size": "40px",
  "banner-border-radius": "{radius}",
};

export const dropdown = {
  "dropdown-bg-clr": "{background-clr-raised}",
  "dropdown-max-height": "300px",
  "dropdown-text-clr": "{text-clr}",
  "dropdown-text-size": "1.6rem",
  "dropdown-icon-size": "2.4rem",
  "dropdown-icon-clr": "{icon-clr}",
  "dropdown-box-shadow": "{shadow-sm}",
  "dropdown-border-radius": "{radius}",
};

export const menu = {
  "menu-bg-clr": "{dropdown-bg-clr}",
  "menu-box-shadow": "{dropdown-box-shadow}",
  "menu-border-radius": "{dropdown-border-radius}",
  "menu-item-font-size": "{dropdown-text-size}",
  "menu-item-icon-size": "{dropdown-icon-size}",
  "menu-item-border-clr": "{dropdown-bg-clr:transparent}",
  "menu-item-height": "32px",
  "menu-padding-top": "calc({menu-item-height} / 8)",
};

export const listbox = {
  "listbox-bg-clr": "{dropdown-bg-clr}",
  "listbox-selected-clr": "{text-clr-inverted}",
  "listbox-box-shadow": "{dropdown-box-shadow}",
  "listbox-font-size": "{dropdown-text-size}",
  "listbox-icon-clr": "{dropdown-icon-clr}",
  "listbox-max-height": "{dropdown-max-height}",
  "listbox-item-height": "36px",
  "listbox-border-radius": "{dropdown-border-radius}",
};

export const textarea = {
  "textarea-height-sm": "80px",
  "textarea-height-md": "140px",
  "textarea-height-lg": "200px",
};

export const toggle = {
  "toggle-unchecked": "{background-clr-strong}",
  "toggle-checked": "{accent-clr}",
  "toggle-error": "{error-clr}",
  "toggle-size": "2.4rem",
  "toggle-travel": "calc({toggle-size} * 0.666)",
};

export const loader = {
  "loader-clr": "{indicator-clr}",
  "loader-size": "16px",
};

export const skeleton = {
  "skeleton-bg-clr": "{background-clr-subtle-hover}",
  "skeleton-fg-clr": "{background-clr-subtle}",
  "skeleton-bg-opacity": "1",
  "skeleton-fg-opacity": "1",
};

export const table = {
  "table-border-clr": "{border-clr}",
  "table-border-width": "1px",
  "table-bg-clr": "{background-clr}",
  "table-font-size": "1.6rem",
  "table-header-font-size": "1.4rem",
  "table-cell-font-size": "1em",
  "table-border-radius": "{radius}",
  "table-padding-vert": "8px",
  "table-padding-horz": "12px",
  "table-sort-icon-clr": "{text-clr}",
  "table-sort-icon-hover-clr": "{text-clr-disabled}",
  "table-nesting-offset": "{table-padding-horz}",
  "table-cell-height": "48px",
  "table-bg-clr-striped-primary": "{table-bg-clr}",
  "table-bg-clr-striped-secondary": "{background-clr-subtle}",
};

export const tab = {
  "tab-border-width": "1px",
  "tab-border-clr": "transparent",
  "tab-padding-hori": "16px",
  "tab-padding-vert": "8px",
  "tab-radius": "{radius}",
  "tab-text-clr": "{text-clr-secondary}",
  "tab-bg-clr": "{background-clr}",
};

export const popover = {
  "popover-animation": "transform 200ms ease, opacity 200ms",
  "popover-distance": "5px",
};

export const checkbox = {
  "checkbox-border-radius": "{radius}",
  "checkbox-checked": "{accent-clr}",
  "checkbox-border-clr": "{border-clr-strong}",
  "checkbox-border-width": "2px",
  "checkbox-icon-clr": "{text-clr-on-accent}",
  "checkbox-bg-clr": "none",
  "checkbox-text-clr": "{text-clr}",
  "checkbox-size": "20px",
  "checkbox-label-spacing": "12px",
  "checkbox-label-font-size": "1.6rem",
  "checkbox-label-height": "24px",
};

export const radio = {
  "radio-border-radius": "50%",
  "radio-checked": "{accent-clr}",
  "radio-border-clr": "{border-clr-strong}",
  "radio-border-width": "2px",
  "radio-bg-clr": "none",
  "radio-size": "20px",
  "radio-label-spacing": "12px",
  "radio-label-font-size": "1.6rem",
  "radio-label-padding-top": "0",
  "radio-label-padding-left": "32px",
  "radio-label-height": "24px",
};

export const time = {
  "time-clr": "{background-clr-subtle-hover}",
  "time-selected-back-clr": "{accent-clr}",
  "time-selected-text-clr": "{text-clr-on-accent}",
};

export const calendar = {
  "calendar-clr": "{background-clr-subtle-hover}",
  "calendar-selected-bg-clr": "{accent-clr}",
  "calendar-selected-text-clr": "{text-clr-on-accent}",
};

export const card = {
  "card-bg-clr": "{background-clr-subtle}",
  "card-text-clr": "{text-clr}",
  "card-radius": "{radius}",
  "card-border": "none",
  "card-padding": "10px",
  "card-panel-bg-clr": "{background-clr}",
  "card-panel-text-clr": "{text-clr}",
  "card-panel-padding": "10px",
  "card-divider-border": "1px solid {border-clr}",
  "card-divider-margin": "10px",
};

export const tooltip = {
  "tooltip-bg-clr": "{background-clr-inverted}",
  "tooltip-text-clr": "{text-clr-inverted}",
  "tooltip-radius": "{radius}",
  "tooltip-arrow-radius": "2px",
  "tooltip-padding-vert": "8px",
  "tooltip-padding-horiz": "8px",
  "tooltip-font-size": "1.3rem",
  "tooltip-font-weight": "normal",
};

export const chip = {
  "chip-bg-clr": "{background-clr-subtle}",
  "chip-text-clr": "{text-clr-secondary}",
  "chip-radius": "{radius}",
  "chip-hover-bg-clr": "{background-clr-subtle-hover}",
  "chip-selected-bg-clr": "{accent-clr}",
  "chip-selected-hover-bg-clr": "{accent-clr-hover}",
  "chip-selected-text-clr": "{text-clr-inverted}",
  "chip-btn-hover-bg-clr": "{background-clr-subtle-hover}",
  "chip-border-clr": "{border-clr}",
  "chip-border": "1px solid {chip-border-clr}",
};

export const divider = {
  "divider-bg-clr": "{border-clr}",
  "divider-width": "1px",
  "divider-margin-main": "5px",
  "divider-margin-secondary": "0px",
};

export const link = {
  "link-text-clr": "{accent-clr}",
  "link-bg-clr": "transparent",
  "link-hover-text-clr": "{accent-clr-hover}",
  "link-hover-bg-clr": "transparent",
  "link-text-decoration": "underline",
};

export const animation = {
  "animation-clr": "{indicator-clr}",
};

export const list = {
  "list-bg-clr": "transparent",
  "list-border-clr": "{border-clr}",
  "list-border-width": "{border-width}",
  "list-border-style": "{border-style}",
  "list-border-radius": "{radius}",
  "list-item-padding": "{space-4}",
  "list-divider-border-clr": "{list-border-clr}",
  "list-divider-border-width": "{list-border-width}",
  "list-divider-border-style": "{list-border-style}",
};

export const progressCircle = {
  "progress-circle-bg-clr": "transparent",
  "progress-circle-track-clr": "{background-clr-subtle-hover}",
  "progress-circle-indicator-clr": "{accent-clr}",
};

export const scrollArea = {
  "scrollarea-track-clr": "{background-clr-subtle-hover}",
  "scrollarea-thumb-clr": "{background-clr-active}",
  "scrollarea-thumb-clr-hover": "{background-clr-strong}",
  "scrollarea-btn-clr": "{indicator-clr}",
};
