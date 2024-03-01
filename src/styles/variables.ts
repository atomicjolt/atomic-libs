import { createGlobalStyle } from "styled-components";

export const CssVariables = createGlobalStyle`
:root {
  color-scheme: base;

  /* # Fonts */
  --font-family: "Lato", sans-serif;
  --font-weight-light: 200;
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  /* # Global Colors */
  /* ## Neutral */
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
  /* ## Error */
  --error100: hsl(0, 93%, 94%);
  --error200: hsl(0, 96%, 89%);
  --error300: hsl(0, 94%, 82%);
  --error400: hsl(0, 91%, 71%);
  --error500: hsl(0, 84%, 60%);
  --error600: hsl(0, 72%, 51%);
  --error700: hsl(0, 74%, 42%);
  --error800: hsl(0, 70%, 35%);
  --error900: hsl(0, 63%, 31%);
  /* ## Warning */
  --warning100: hsl(55, 97%, 90%);
  --warning200: hsl(53, 98%, 83%);
  --warning300: hsl(50, 98%, 75%);
  --warning400: hsl(48, 96%, 53%);
  --warning500: hsl(45, 93%, 47%);
  --warning600: hsl(41, 96%, 40%);
  --warning700: hsl(35, 92%, 33%);
  --warning800: hsl(32, 81%, 29%);
  --warning900: hsl(28, 73%, 26%);
  /* ## Success */
  --success100: hsl(100, 89%, 89%);
  --success200: hsl(101, 88%, 80%);
  --success300: hsl(102, 85%, 67%);
  --success400: hsl(103, 78%, 55%);
  --success500: hsl(104, 81%, 44%);
  --success600: hsl(105, 85%, 35%);
  --success700: hsl(106, 78%, 27%);
  --success800: hsl(107, 69%, 23%);
  --success900: hsl(108, 61%, 20%);
  /* ## Primary */
  --primary100: hsl(185, 96%, 94%);
  --primary200: hsl(186, 94%, 88%);
  --primary300: hsl(187, 92%, 75%);
  --primary400: hsl(188, 86%, 53%);
  --primary500: hsl(189, 94%, 43%);
  --primary600: hsl(190, 91%, 36%);
  --primary700: hsl(191, 82%, 31%);
  --primary800: hsl(192, 70%, 27%);
  --primary900: hsl(193, 64%, 24%);

  /* # Semantic Colors */
  --text-clr: var(--neutral800);
  --text-clr-alt: var(--neutral600);
  --text-clr-inverted: var(--neutral50);

  --background-clr: var(--neutral50);
  --background-clr-alt: var(--neutral100);
  --background-clr-inverted: var(--neutral800);

  --accent-clr: var(--primary700);
  --accent-clr-alt: var(--primary600);
  --error-clr: var(--error600);
  --success-clr: var(--success600);
  --warning-clr: var(--warning600);

  --border-clr-primary: var(--neutral400);
  --outline-clr-primary: var(--neutral600);

  /* # Sizing */
  --size-sm-x: 100px;
  --size-md-x: 200px;
  --size-lg-x: 300px;
  --size-full-x: 100%;

  --size-sm-y: 40px;
  --size-md-y: 60px;
  --size-lg-y: 80px;
  --size-full-y: 100%;

  /* # General */
  --border: 1px solid var(--border-clr-primary);
  --outline: 2px solid var(--outline-clr-primary);
  --radius: 5px;

  /* # Input variables */
  --input-border-clr: var(--neutral500);
  --input-outline: 1px solid var(--outline-clr-primary);
  --input-height: 40px;
  --input-padding-horiz: 12px;
  --input-font-size: 1.6rem;
  --input-icon-size: 2.4rem;
  --input-text-clr: var(--text-clr);
  --input-border-color: var(--input-border-clr);
  --input-border: 1px solid var(--input-border-color);
  --input-border-radius: var(--radius);
  --input-bg-clr: none;
  --input-transition: none;

  /* # Button Variables */
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
  --btn-padding: 0.5em;

  /* # Banner Variables */
  --banner-bg-clr: var(--neutral100);
  --banner-text-clr: var(--text-clr);
  --banner-icon-clr: var(--primary700);
  --banner-btn-hover-clr: var(--neutral200);
  --banner-btn-active-clr: var(--neutral300);
  --banner-btn-size: 40px;
  --banner-border-radius: var(--radius);

  /* # Dropdown variables */
  --dropdown-border-radius: var(--radius);
  --dropdown-border-clr: var(--input-border-clr);
  --dropdown-height: 40px;
  --dropdown-input-height: calc(var(--dropdown-height) - 2px);
  --dropdown-padding: 6px;
  --dropdown-padding-left: calc(var(--dropdown-padding) * 2);
  --dropdown-padding-right: var(--dropdown-height);
  --dropdown-text-clr: var(--text-clr);
  --dropdown-bg-clr: none;
  --dropdown-text-size: 1.6rem;
  --dropdown-icon-size: 2.4rem;
  --dropdown-icon-gap: calc(
    (var(--dropdown-height) - var(--dropdown-icon-size)) / 2
  );
  --dropdown-icon-clr: var(--neutral600);

  /* # Menu variables */
  --menu-box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.5);
  --menu-bg-clr: var(--neutral50);
  --menu-border-radius: var(--radius);
  --menu-max-height: 300px;
  --menu-padding-top: calc(var(--option-height) / 8);

  /* # Listbox variables */
  --listbox-text-clr: inherit;
  --listbox-bg-clr: var(--background-clr);
  --listbox-selected-clr: var(--text-clr-inverted);
  --listbox-icon-clr: var(--neutral600);
  --listbox-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.5);

  /* # Option variables */
  --option-font-size: var(--dropdown-text-size);
  --option-icon-size: var(--dropdown-icon-size);
  --option-height: 32px;
  --option-padding: var(--dropdown-padding);
  --option-padding-horizontal: calc(var(--dropdown-padding) * 2);
  --option-icon-gap: 8px;
  --option-border-clr: var(--neutral50, transparent);


  /* # Textare variables */
  --textarea-height-sm: 80px;
  --textarea-height-md: 140px;
  --textarea-height-lg: 200px;

  /* # Toggle switch variables */
  --toggle-unchecked: var(--neutral400);
  --toggle-checked: var(--primary700);
  --toggle-error: var(--error600);
  --toggle-size: 2.4rem;
  --toggle-travel: calc(var(--toggle-size) * 0.666);

  /* # Loader variables */
  --loader-clr: var(--neutral500);
  --loader-size: 16px;

  /* # Table variables */
  --table-border-clr: var(--neutral300);
  --table-border-width: 1px;
  --table-bg-clr: var(--neutral50);
  --table-font-size: 1.6rem;
  --table-header-font-size: 0.812em;
  --table-border-radius: var(--radius);
  --table-padding-vert: 8px;
  --table-padding-horz: 12px;
  --table-sort-icon-clr: var(--text-clr);
  --table-sort-icon-hover-clr: var(--neutral400);

  /* # Tab variables */
  --tab-border-width: 1px;
  --tab-padding-hori: 16px;
  --tab-padding-vert: 8px;
  --tab-radius: var(--radius);
  --tab-border-width: 1px;
  --tab-text-clr: var(--text-clr-alt);
  --tab-bg-clr: var(--neutral50);
  --tab-border-clr: var(--border-clr-primary);

  /* # Icon variables */
  --icon-size-sm: 18px;
  --icon-size-md: 24px;
  --icon-size-lg: 36px;

  /* # Popover Variables */
  --popover-animation: transform 200ms ease, opacity 200ms;
  --popover-distance: 5px;

  /* # Choose variables */
  --choose-unchecked: var(--neutral600);
  --choose-checked: var(--primary700);
  --choose-check-border-clr: var(--choose-unchecked);
  --choose-check-bg-clr: none;
  --choose-check-size: 20px;
  --choose-label-text-size: 1.6rem;
  --choose-label-padding-top: 0;
  --choose-label-padding-left: 32px;
  --choose-label-height: 24px;

  /* # Calendar variables */
  --time-clr: var(--neutral200);
  --time-selected-back-clr: var(--primary600);
  --time-selected-text-clr: var(--neutral100);

    /* # Card variables */
    --card-bg-clr: var(--background-clr-alt);
    --card-text-clr: var(--text-clr);
    --card-radius: var(--radius);
    --card-border: none;
    --card-padding: 10px;
    --card-panel-bg-clr: var(--background-clr);
    --card-panel-text-clr: var(--text-clr);
    --card-panel-padding: 10px;
}
`;
