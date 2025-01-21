// prettier-ignore
const border = {
  "border-width": "1px",
  "border-style": "solid",
  "border-clr-primary": "{neutral300}",
  "radius": "5px",
  "border": "{border-width} {border-style} {border-clr-primary}",
  "outline-width": "2px",
  "outline-style": "solid",
  "outline-clr-primary": "{neutral600}",
  "outline": "{outline-width} {outline-style} {outline-clr-primary}",
}

const font = {
  "font-family": '"Lato", sans-serif',
  "font-weight-light": "200",
  "font-weight-regular": "400",
  "font-weight-medium": "500",
  "font-weight-bold": "700",
};

const fontSize = {
  "font-size-1": "12px",
  "font-size-2": "14px",
  "font-size-3": "16px",
  "font-size-4": "18px",
  "font-size-5": "20px",
  "font-size-6": "24px",
  "font-size-7": "28px",
  "font-size-8": "35px",
  "font-size-9": "60px",
};

const letterSpacing = {
  "letter-spacing-1": ".0025em",
  "letter-spacing-2": "0em",
  "letter-spacing-3": "0em",
  "letter-spacing-4": "-.0025em",
  "letter-spacing-5": "-.005em",
  "letter-spacing-6": "-.00625em",
  "letter-spacing-7": "-.0075em",
  "letter-spacing-8": "-.01em",
  "letter-spacing-9": "-.025em",
};

const lineHeight = {
  "line-height-1": "16px",
  "line-height-2": "20px",
  "line-height-3": "24px",
  "line-height-4": "26px",
  "line-height-5": "28px",
  "line-height-6": "30px",
  "line-height-7": "36px",
  "line-height-8": "40px",
  "line-height-9": "60px",
};

const colors = {
  neutral50: "hsl(0, 0%, 100%)",
  neutral100: "hsl(220, 14%, 96%)",
  neutral200: "hsl(220, 13%, 91%)",
  neutral300: "hsl(216, 12%, 84%)",
  neutral400: "hsl(218, 11%, 66%)",
  neutral500: "hsl(220, 9%, 44%)",
  neutral600: "hsl(215, 14%, 36%)",
  neutral700: "hsl(217, 19%, 27%)",
  neutral800: "hsl(215, 28%, 17%)",
  neutral900: "hsl(221, 39%, 11%)",

  error100: "hsl(0, 93%, 94%)",
  error200: "hsl(0, 96%, 89%)",
  error300: "hsl(0, 94%, 82%)",
  error400: "hsl(0, 91%, 71%)",
  error500: "hsl(0, 84%, 60%)",
  error600: "hsl(0, 72%, 51%)",
  error700: "hsl(0, 74%, 42%)",
  error800: "hsl(0, 70%, 35%)",
  error900: "hsl(0, 63%, 31%)",

  warning100: "hsl(55, 97%, 90%)",
  warning200: "hsl(53, 98%, 83%)",
  warning300: "hsl(50, 98%, 75%)",
  warning400: "hsl(48, 96%, 53%)",
  warning500: "hsl(45, 93%, 47%)",
  warning600: "hsl(41, 96%, 40%)",
  warning700: "hsl(35, 92%, 33%)",
  warning800: "hsl(32, 81%, 29%)",
  warning900: "hsl(28, 73%, 26%)",

  success100: "hsl(100, 89%, 89%)",
  success200: "hsl(101, 88%, 80%)",
  success300: "hsl(102, 85%, 67%)",
  success400: "hsl(103, 78%, 55%)",
  success500: "hsl(104, 81%, 44%)",
  success600: "hsl(105, 85%, 35%)",
  success700: "hsl(106, 78%, 27%)",
  success800: "hsl(107, 69%, 23%)",
  success900: "hsl(108, 61%, 20%)",

  primary100: "hsl(185, 96%, 94%)",
  primary200: "hsl(186, 94%, 88%)",
  primary300: "hsl(187, 92%, 75%)",
  primary400: "hsl(188, 86%, 53%)",
  primary500: "hsl(189, 94%, 43%)",
  primary600: "hsl(190, 91%, 36%)",
  primary700: "hsl(191, 82%, 31%)",
  primary800: "hsl(192, 70%, 27%)",
  primary900: "hsl(193, 64%, 24%)",

  "text-clr": "{neutral800}",
  "text-clr-alt": "{neutral600}",
  "text-clr-inverted": "{neutral50}",

  "background-clr": "{neutral50}",
  "background-clr-alt": "{neutral100}",
  "background-clr-inverted": "{neutral800}",

  "accent-clr": "{primary700}",
  "accent-clr-alt": "{primary800}",

  "error-clr": "{error600}",
  "error-clr-alt": "{error700}",
  "success-clr": "{success600}",
  "success-clr-alt": "{success700}",
  "warning-clr": "{warning600}",
  "warning-clr-alt": "{warning700}",
  "info-clr": "{primary100}",
  "info-clr-alt": "{primary200}",
};

const spacing = {
  "space-0": "0",
  "space-1": "4px",
  "space-2": "8px",
  "space-3": "12px",
  "space-4": "16px",
  "space-5": "24px",
  "space-6": "32px",
  "space-7": "40px",
  "space-8": "48px",
  "space-9": "64px",
};

const sizes = {
  "size-sm-x": "100px",
  "size-md-x": "200px",
  "size-lg-x": "300px",
  "size-full-x": "100%",
  "size-sm-y": "40px",
  "size-md-y": "60px",
  "size-lg-y": "80px",
  "size-full-y": "100%",
};

const input = {
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

const button = {
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

const banner = {
  "banner-bg-clr": "{neutral100}",
  "banner-text-clr": "{text-clr}",
  "banner-icon-clr": "{primary700}",
  "banner-btn-hover-clr": "{neutral200}",
  "banner-btn-active-clr": "{neutral300}",
  "banner-btn-size": "40px",
  "banner-border-radius": "{radius}",
};

const dropdown = {
  "dropdown-bg-clr": "{background-clr}",
  "dropdown-max-height": "300px",
  "dropdown-text-clr": "{text-clr}",
  "dropdown-text-size": "1.6rem",
  "dropdown-icon-size": "2.4rem",
  "dropdown-icon-clr": "{neutral600}",
  "dropdown-box-shadow": "0 1px 3px hsla(0, 0%, 0%, 0.5)",
  "dropdown-border-radius": "{radius}",
};

const menu = {
  "menu-bg-clr": "{dropdown-bg-clr}",
  "menu-box-shadow": "{dropdown-box-shadow}",
  "menu-border-radius": "{dropdown-border-radius}",
  "menu-item-font-size": "{dropdown-text-size}",
  "menu-item-icon-size": "{dropdown-icon-size}",
  "menu-item-border-clr": "{dropdown-bg-clr:transparent}",
  "menu-item-height": "32px",
  "menu-padding-top": "calc({menu-item-height} / 8)",
};

const listbox = {
  "listbox-bg-clr": "{dropdown-bg-clr}",
  "listbox-selected-clr": "{text-clr-inverted}",
  "listbox-box-shadow": "{dropdown-box-shadow}",
  "listbox-font-size": "{dropdown-text-size}",
  "listbox-icon-clr": "{dropdown-icon-clr}",
  "listbox-max-height": "{dropdown-max-height}",
  "listbox-item-height": "36px",
  "listbox-border-radius": "{dropdown-border-radius}",
};

const textarea = {
  "textarea-height-sm": "80px",
  "textarea-height-md": "140px",
  "textarea-height-lg": "200px",
};

const toggle = {
  "toggle-unchecked": "{neutral400}",
  "toggle-checked": "{primary700}",
  "toggle-error": "{error600}",
  "toggle-size": "2.4rem",
  "toggle-travel": "calc({toggle-size} * 0.666)",
};

const loader = {
  "loader-clr": "{neutral500}",
  "loader-size": "16px",
};

const skeleton = {
  "skeleton-bg-clr": "{neutral200}",
  "skeleton-fg-clr": "{neutral100}",
  "skeleton-bg-opacity": "1",
  "skeleton-fg-opacity": "1",
};

const table = {
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
};

const tab = {
  "tab-border-width": "1px",
  "tab-border-clr": "transparent",
  "tab-padding-hori": "16px",
  "tab-padding-vert": "8px",
  "tab-radius": "{radius}",
  "tab-text-clr": "{text-clr-alt}",
  "tab-bg-clr": "{neutral50}",
};

const iconSizes = {
  "icon-size-sm": "18px",
  "icon-size-md": "24px",
  "icon-size-lg": "36px",
};

const popover = {
  "popover-animation": "transform 200ms ease, opacity 200ms",
  "popover-distance": "5px",
};

const checkbox = {
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

const radio = {
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

const time = {
  "time-clr": "{neutral200}",
  "time-selected-back-clr": "{primary600}",
  "time-selected-text-clr": "{neutral100}",
};

const calendar = {
  "calendar-clr": "{neutral200}",
  "calendar-selected-bg-clr": "{accent-clr}",
  "calendar-selected-text-clr": "{neutral100}",
};

const card = {
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

const tooltip = {
  "tooltip-bg-clr": "{background-clr-inverted}",
  "tooltip-text-clr": "{text-clr-inverted}",
  "tooltip-radius": "{radius}",
  "tooltip-arrow-radius": "2px",
  "tooltip-padding-vert": "8px",
  "tooltip-padding-horiz": "8px",
  "tooltip-font-size": "1.3rem",
  "tooltip-font-weight": "normal",
};

const chip = {
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

const divider = {
  "divider-bg-clr": "{neutral300}",
  "divider-width": "1px",
  "divider-margin-main": "5px",
  "divider-margin-secondary": "0px",
};

const link = {
  "link-text-clr": "{accent-clr}",
  "link-bg-clr": "{neutral50}",
  "link-hover-text-clr": "{accent-clr-alt}",
  "link-hover-bg-clr": "transparent",
  "link-text-decoration": "underline",
};

const animation = {
  "animation-clr": "{neutral500}",
};

export const variables = {
  ...border,
  ...font,
  ...fontSize,
  ...letterSpacing,
  ...lineHeight,
  ...colors,
  ...sizes,
  ...spacing,
  ...input,
  ...button,
  ...banner,
  ...dropdown,
  ...menu,
  ...listbox,
  ...textarea,
  ...toggle,
  ...loader,
  ...skeleton,
  ...table,
  ...tab,
  ...iconSizes,
  ...popover,
  ...checkbox,
  ...radio,
  ...time,
  ...calendar,
  ...card,
  ...tooltip,
  ...chip,
  ...divider,
  ...link,
  ...animation,
} as const;

export type Color = keyof typeof colors;
