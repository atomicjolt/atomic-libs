import { createGlobalStyle } from "styled-components";

export const CssVariables = createGlobalStyle`
:root {
  color-scheme: base;

  /* # General */

  /* ## Borders */
  --border: 1px solid var(--border-clr-primary);
  --outline: 2px solid var(--outline-clr-primary);
  --border-clr-primary: var(--neutral300);
  --outline-clr-primary: var(--neutral600);
  --radius: 5px;

  /* ## Fonts */
  --font-family: "Lato", sans-serif;
  --font-weight-light: 200;
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  /* ## Global Colors */
  /* ### Neutral */
  --neutral50: hsl(0, 0%, 100%);
  --neutral100: hsl(220, 14%, 96%);
  --neutral200: hsl(220, 13%, 91%);
  --neutral300: hsl(216, 12%, 84%);
  --neutral400: hsl(218, 11%, 66%);
  --neutral500: hsl(220, 9%, 44%);
  --neutral600: hsl(215, 14%, 36%);
  --neutral700: hsl(217, 19%, 27%);
  --neutral800: hsl(215, 28%, 17%);
  --neutral900: hsl(221, 39%, 11%);
  /* ### Error */
  --error100: hsl(0, 93%, 94%);
  --error200: hsl(0, 96%, 89%);
  --error300: hsl(0, 94%, 82%);
  --error400: hsl(0, 91%, 71%);
  --error500: hsl(0, 84%, 60%);
  --error600: hsl(0, 72%, 51%);
  --error700: hsl(0, 74%, 42%);
  --error800: hsl(0, 70%, 35%);
  --error900: hsl(0, 63%, 31%);
  /* ### Warning */
  --warning100: hsl(55, 97%, 90%);
  --warning200: hsl(53, 98%, 83%);
  --warning300: hsl(50, 98%, 75%);
  --warning400: hsl(48, 96%, 53%);
  --warning500: hsl(45, 93%, 47%);
  --warning600: hsl(41, 96%, 40%);
  --warning700: hsl(35, 92%, 33%);
  --warning800: hsl(32, 81%, 29%);
  --warning900: hsl(28, 73%, 26%);
  /* ### Success */
  --success100: hsl(100, 89%, 89%);
  --success200: hsl(101, 88%, 80%);
  --success300: hsl(102, 85%, 67%);
  --success400: hsl(103, 78%, 55%);
  --success500: hsl(104, 81%, 44%);
  --success600: hsl(105, 85%, 35%);
  --success700: hsl(106, 78%, 27%);
  --success800: hsl(107, 69%, 23%);
  --success900: hsl(108, 61%, 20%);
  /* ### Primary */
  --primary100: hsl(185, 96%, 94%);
  --primary200: hsl(186, 94%, 88%);
  --primary300: hsl(187, 92%, 75%);
  --primary400: hsl(188, 86%, 53%);
  --primary500: hsl(189, 94%, 43%);
  --primary600: hsl(190, 91%, 36%);
  --primary700: hsl(191, 82%, 31%);
  --primary800: hsl(192, 70%, 27%);
  --primary900: hsl(193, 64%, 24%);

  /* ## Text Colors */
  --text-clr: var(--neutral800);
  --text-clr-alt: var(--neutral600);
  --text-clr-inverted: var(--neutral50);

  /* ## Background Colors */
  --background-clr: var(--neutral50);
  --background-clr-alt: var(--neutral100);
  --background-clr-inverted: var(--neutral800);

  /* ## Accent Colors */
  --accent-clr: var(--primary700);
  --accent-clr-alt: var(--primary800);
  --error-clr: var(--error600);
  --success-clr: var(--success600);
  --warning-clr: var(--warning600);

  /* ## Sizing */
  --size-sm-x: 100px;
  --size-md-x: 200px;
  --size-lg-x: 300px;
  --size-full-x: 100%;
  --size-sm-y: 40px;
  --size-md-y: 60px;
  --size-lg-y: 80px;
  --size-full-y: 100%;

  /* # Input */
  --input-border-clr: var(--neutral300);
  --input-outline: 1px solid var(--outline-clr-primary);
  --input-height: 40px;
  --input-padding-horiz: 12px;
  --input-gap: 12px;
  --input-font-size: 1.6rem;
  --input-icon-size: 2.4rem;
  --input-icon-clr: var(--neutral600);
  --input-text-clr: var(--text-clr);
  --input-border: 1px solid var(--input-border-clr);
  --input-border-radius: var(--radius);
  --input-bg-clr: none;
  --input-transition: none;

  /* # Button */
  --btn-font-size: 1.6rem;
  --btn-icon-size: 2.4rem;
  --btn-icon-gap: 8px;
  --btn-text-clr: var(--text-clr-alt);
  --btn-bg-clr: var(--neutral50);
  --btn-hover-text-clr: var(--text-clr);
  --btn-hover-bg-clr: var(--neutral100);
  --btn-hover-shadow: none;
  --btn-border: none;
  --btn-border-radius: var(--radius);
  --btn-height: 40px;
  --btn-padding-vert: 0.25em;
  --btn-padding-horiz: 1em;
  --btn-pressed-transform: translateY(1px);

  /* # Banner */
  --banner-bg-clr: var(--neutral100);
  --banner-text-clr: var(--text-clr);
  --banner-icon-clr: var(--primary700);
  --banner-btn-hover-clr: var(--neutral200);
  --banner-btn-active-clr: var(--neutral300);
  --banner-btn-size: 40px;
  --banner-border-radius: var(--radius);

  /* # Dropdown */
  --dropdown-max-height: 300px;
  --dropdown-text-clr: var(--text-clr);
  --dropdown-bg-clr: var(--background-clr);
  --dropdown-text-size: 1.6rem;
  --dropdown-icon-size: 2.4rem;
  --dropdown-icon-gap: calc(
    (var(--dropdown-height) - var(--dropdown-icon-size)) / 2
  );
  --dropdown-icon-clr: var(--neutral600);
  --dropdown-box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.5);
  --dropdown-border-radius: var(--radius);

  /* # Menu */
  --menu-bg-clr: var(--dropdown-bg-clr);
  --menu-box-shadow: var(--dropdown-box-shadow);
  --menu-border-radius: var(--dropdown-border-radius);
  --menu-item-font-size: var(--dropdown-text-size);
  --menu-item-icon-size: var(--dropdown-icon-size);
  --menu-item-padding: var(--dropdown-padding);
  --menu-item-padding-horizontal: calc(var(--dropdown-padding) * 2);
  --menu-item-border-clr: var(--dropdown-bg-clr, transparent);
  --menu-item-height: 32px;
  --menu-padding-top: calc(var(--menu-item-height) / 8);

  /* # Listbox */
  --listbox-text-clr: var(--dropdown-text-clr);
  --listbox-bg-clr: var(--dropdown-bg-clr);
  --listbox-selected-clr: var(--text-clr-inverted);
  --listbox-box-shadow: var(--dropdown-box-shadow);
  --listbox-font-size: var(--dropdown-text-size);
  --listbox-icon-clr: var(--dropdown-icon-clr);
  --listbox-max-height: var(--dropdown-max-height);
  --listbox-item-height: 36px;
  --listbox-border-radius: var(--dropdown-border-radius);

  /* # TextArea */
  --textarea-height-sm: 80px;
  --textarea-height-md: 140px;
  --textarea-height-lg: 200px;

  /* # Toggle */
  --toggle-unchecked: var(--neutral400);
  --toggle-checked: var(--primary700);
  --toggle-error: var(--error600);
  --toggle-size: 2.4rem;
  --toggle-travel: calc(var(--toggle-size) * 0.666);

  /* # Loader */
  --loader-clr: var(--neutral500);
  --loader-size: 16px;

  /* # SkeletonLoader */
  --skeleton-bg-clr: var(--neutral200);
  --skeleton-fg-clr: var(--neutral100);
  --skeleton-bg-opacity: 1;
  --skeleton-fg-opacity: 1;

  /* # Table */
  --table-border-clr: var(--neutral300);
  --table-border-width: 1px;
  --table-bg-clr: var(--neutral50);
  --table-font-size: 1.6rem;
  --table-header-font-size: 1.4rem;
  --table-cell-font-size: 1em;
  --table-border-radius: var(--radius);
  --table-padding-vert: 8px;
  --table-padding-horz: 12px;
  --table-sort-icon-clr: var(--text-clr);
  --table-sort-icon-hover-clr: var(--neutral400);
  --table-nesting-offset: var(--table-padding-horz);
  --table-cell-height: 48px;

  /* # Tab */
  --tab-border-width: 1px;
  --tab-border-clr: transparent;
  --tab-padding-hori: 16px;
  --tab-padding-vert: 8px;
  --tab-radius: var(--radius);
  --tab-border-width: 1px;
  --tab-text-clr: var(--text-clr-alt);
  --tab-bg-clr: var(--neutral50);

  /* # Icon */
  --icon-size-sm: 18px;
  --icon-size-md: 24px;
  --icon-size-lg: 36px;

  /* # Popover */
  --popover-animation: transform 200ms ease, opacity 200ms;
  --popover-distance: 5px;

  /* # Choose */
  --choose-unchecked: var(--neutral600);
  --choose-checked: var(--accent-clr);
  --choose-check-border-clr: var(--choose-unchecked);
  --choose-check-bg-clr: none;
  --choose-check-size: 20px;
  --choose-label-text-size: 1.6rem;
  --choose-label-padding-top: 0;
  --choose-label-padding-left: 32px;
  --choose-label-height: 24px;

  /* # TimePicker */
  --time-clr: var(--neutral200);
  --time-selected-back-clr: var(--primary600);
  --time-selected-text-clr: var(--neutral100);

  /* # Calendar */
  --calendar-clr: var(--neutral200);
  --calendar-selected-bg-clr: var(--accent-clr);
  --calendar-selected-text-clr: var(--neutral100);

  /* # Card */
  --card-bg-clr: var(--background-clr-alt);
  --card-text-clr: var(--text-clr);
  --card-radius: var(--radius);
  --card-border: none;
  --card-padding: 10px;
  --card-panel-bg-clr: var(--background-clr);
  --card-panel-text-clr: var(--text-clr);
  --card-panel-padding: 10px;
  --card-divider-border: 1px solid var(--neutral300);
  --card-divider-margin: 10px;

  /* # ToolTip */
  --tooltip-bg-clr: var(--background-clr-inverted);
  --tooltip-text-clr: var(--text-clr-inverted);
  --tooltip-radius: var(--radius);
  --tooltip-arrow-radius: 2px;
  --tooltip-padding-vert: 8px;
  --tooltip-padding-horiz: 8px;
  --tooltip-font-size: 1.3rem;
  --tooltip-font-weight: normal;

  /* # ChipGroup */
  --chip-bg-clr: var(--neutral100);
  --chip-text-clr: var(--text-clr-alt);
  --chip-radius: var(--radius);
  --chip-hover-bg-clr: var(--neutral200);
  --chip-selected-bg-clr: var(--accent-clr);
  --chip-selected-hover-bg-clr: var(--primary800);
  --chip-selected-text-clr: var(--text-clr-inverted);
  --chip-btn-hover-bg-clr: var(--neutral200);
  --chip-border-clr: var(--neutral300);
  --chip-border: 1px solid var(--chip-border-clr);

  /* # Divider */
  --divider-bg-clr: var(--neutral300);
  --divider-width: 1px;
  --divider-margin-main: 5px;
  --divider-margin-secondary: 0px;

  /* # Link */
  --link-text-clr: var(--accent-clr);
  --link-bg-clr: var(--neutral50);
  --link-hover-text-clr: var(--accent-clr-alt);
  --link-hover-bg-clr: transparent;
  --link-text-decoration: underline;

  /* # Animations */
  --animation-clr: var(--neutral500);
}
`;
