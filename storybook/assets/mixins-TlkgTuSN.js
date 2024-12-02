import{l as i}from"./styled-components.browser.esm-WCay-hu9.js";const r=i`
  &.is-small {
    --size-x: var(--size-sm-x);
    --size-y: var(--size-sm-y);
  }

  &.is-medium {
    --size-x: var(--size-md-x);
    --size-y: var(--size-md-y);
  }

  &.is-large {
    --size-x: var(--size-lg-x);
    --size-y: var(--size-lg-y);
  }

  &.is-full {
    --size-x: var(--size-full-x);
    --size-y: var(--size-full-y);
  }

  &.is-auto {
    --size-x: auto;
    --size-y: auto;
  }
`,a={Bold:i`
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
  `,Regular:i`
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
  `,FieldStatus:i`
    &[data-required] {
      label::after {
        content: " *";
      }
    }

    &[data-invalid] {
      --input-outline: 1px solid var(--error-clr);
    }

    &[data-disabled] {
      opacity: 0.5;
    }

    &[data-readonly] {
      --input-border-clr: var(--neutral100);
      --input-bg-clr: var(--neutral100);
    }
  `,InputLike:i`
    border: var(--input-border);
    border-color: var(--input-border-clr);
    border-radius: var(--input-border-radius);
    min-height: var(--input-height);
    padding: 0 var(--input-padding-horiz);
    font-size: var(--input-font-size);
    color: var(--input-text-clr);
    background-color: var(--input-bg-clr);
    text-align: left;

    i {
      color: var(--input-icon-clr);
    }

    &:focus,
    &:focus-within {
      --input-border-clr: var(--outline-clr-primary);
      outline: var(--input-outline);
    }
  `,Sizing:r,SizingX:i`
    ${r}
    width: var(--size-x);
  `,SizingY:i`
    ${r}
    height: var(--size-y);
  `,FocusVisible:(e=0)=>i`
    &:focus-visible {
      outline: none;
    }

    &[data-focus-visible="true"] {
      outline: var(--outline);
      outline-offset: ${e}px;
    }
  `};export{a as m};
