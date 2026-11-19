/** Component tokens. These may only reference semantic tokens. */
// prettier-ignore
export const input = {
  "input-border-clr": "{border-clr-primary}",
  "input-border-width": "{border-width}",
  "input-border-style": "{border-style}",
  "input-border-radius": "{radius}",
  "input-border": "1px solid {input-border-clr}",
  "input-outline": "1px solid {outline-clr-primary}",
  "input-height": "40px",
  "input-padding-horiz": "12px",
  "input-gap": "12px",
  "input-font-size": "1.6rem",
  "input-icon-size": "2.4rem",
  "input-icon-clr": "{neutral600}",
  "input-text-clr": "{text-clr}",
  "input-bg-clr": "none",
  "input-transition": "none",
};

export const button = {
  "btn-font-size": "1.6rem",
  "btn-icon-size": "2.4rem",
  "btn-icon-gap": "8px",
  "btn-text-clr": "{text-clr-alt}",
  "btn-bg-clr": "{neutral50}",
  "btn-hover-text-clr": "{text-clr}",
  "btn-hover-bg-clr": "{neutral100}",
  "btn-hover-shadow": "none",
  "btn-border": "none",
  "btn-border-radius": "{radius}",
  "btn-height": "40px",
  "btn-padding-vert": "0.25em",
  "btn-padding-horiz": "1em",
  "btn-pressed-transform": "translateY(1px)",
};

export const banner = {
  "banner-bg-clr": "{neutral100}",
  "banner-text-clr": "{text-clr}",
  "banner-icon-clr": "{primary700}",
  "banner-btn-hover-clr": "{neutral200}",
  "banner-btn-active-clr": "{neutral300}",
  "banner-btn-size": "40px",
  "banner-border-radius": "{radius}",
};

export const dropdown = {
  "dropdown-bg-clr": "{background-clr}",
  "dropdown-max-height": "300px",
  "dropdown-text-clr": "{text-clr}",
  "dropdown-text-size": "1.6rem",
  "dropdown-icon-size": "2.4rem",
  "dropdown-icon-clr": "{neutral600}",
  "dropdown-box-shadow": "0 1px 3px hsla(0, 0%, 0%, 0.5)",
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
  "toggle-unchecked": "{neutral400}",
  "toggle-checked": "{primary700}",
  "toggle-error": "{error600}",
  "toggle-size": "2.4rem",
  "toggle-travel": "calc({toggle-size} * 0.666)",
};

export const loader = {
  "loader-clr": "{neutral500}",
  "loader-size": "16px",
};

export const skeleton = {
  "skeleton-bg-clr": "{neutral200}",
  "skeleton-fg-clr": "{neutral100}",
  "skeleton-bg-opacity": "1",
  "skeleton-fg-opacity": "1",
};

export const table = {
  "table-border-clr": "{neutral300}",
  "table-border-width": "1px",
  "table-bg-clr": "{neutral50}",
  "table-font-size": "1.6rem",
  "table-header-font-size": "1.4rem",
  "table-cell-font-size": "1em",
  "table-border-radius": "{radius}",
  "table-padding-vert": "8px",
  "table-padding-horz": "12px",
  "table-sort-icon-clr": "{text-clr}",
  "table-sort-icon-hover-clr": "{neutral400}",
  "table-nesting-offset": "{table-padding-horz}",
  "table-cell-height": "48px",
  "table-bg-clr-striped-primary": "{table-bg-clr}",
  "table-bg-clr-striped-secondary": "{neutral100}",
};

export const tab = {
  "tab-border-width": "1px",
  "tab-border-clr": "transparent",
  "tab-padding-hori": "16px",
  "tab-padding-vert": "8px",
  "tab-radius": "{radius}",
  "tab-text-clr": "{text-clr-alt}",
  "tab-bg-clr": "{neutral50}",
};

export const popover = {
  "popover-animation": "transform 200ms ease, opacity 200ms",
  "popover-distance": "5px",
};

export const checkbox = {
  "checkbox-border-radius": "{radius}",
  "checkbox-checked": "{accent-clr}",
  "checkbox-border-clr": "{neutral600}",
  "checkbox-border-width": "2px",
  "checkbox-icon-clr": "{neutral50}",
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
  "radio-border-clr": "{neutral600}",
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
  "time-clr": "{neutral200}",
  "time-selected-back-clr": "{primary600}",
  "time-selected-text-clr": "{neutral100}",
};

export const calendar = {
  "calendar-clr": "{neutral200}",
  "calendar-selected-bg-clr": "{accent-clr}",
  "calendar-selected-text-clr": "{neutral100}",
};

export const card = {
  "card-bg-clr": "{background-clr-alt}",
  "card-text-clr": "{text-clr}",
  "card-radius": "{radius}",
  "card-border": "none",
  "card-padding": "10px",
  "card-panel-bg-clr": "{background-clr}",
  "card-panel-text-clr": "{text-clr}",
  "card-panel-padding": "10px",
  "card-divider-border": "1px solid {neutral300}",
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
  "chip-bg-clr": "{neutral100}",
  "chip-text-clr": "{text-clr-alt}",
  "chip-radius": "{radius}",
  "chip-hover-bg-clr": "{neutral200}",
  "chip-selected-bg-clr": "{accent-clr}",
  "chip-selected-hover-bg-clr": "{primary800}",
  "chip-selected-text-clr": "{text-clr-inverted}",
  "chip-btn-hover-bg-clr": "{neutral200}",
  "chip-border-clr": "{neutral300}",
  "chip-border": "1px solid {chip-border-clr}",
};

export const divider = {
  "divider-bg-clr": "{neutral300}",
  "divider-width": "1px",
  "divider-margin-main": "5px",
  "divider-margin-secondary": "0px",
};

export const link = {
  "link-text-clr": "{accent-clr}",
  "link-bg-clr": "transparent",
  "link-hover-text-clr": "{accent-clr-alt}",
  "link-hover-bg-clr": "transparent",
  "link-text-decoration": "underline",
};

export const animation = {
  "animation-clr": "{neutral500}",
};

export const list = {
  "list-bg-clr": "transparent",
  "list-border-clr": "{border-clr-primary}",
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
  "progress-circle-track-clr": "{neutral200}",
  "progress-circle-indicator-clr": "{accent-clr}",
};

export const scrollArea = {
  "scrollarea-track-clr": "{neutral200}",
  "scrollarea-thumb-clr": "{neutral300}",
  "scrollarea-thumb-clr-hover": "{neutral400}",
  "scrollarea-btn-clr": "{neutral500}",
};
