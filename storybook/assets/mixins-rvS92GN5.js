import{f as r}from"./styled-components.browser.esm-DC3GK9Rn.js";const o=r`
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
`,t=r`
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
`,a=r`
  font-family: var(--font-family);
  font-weight: var(--font-weight-regular);
`,s=r`
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
    --input-border-clr: var(--background-clr-subtle);
    --input-bg-clr: var(--background-clr-subtle);
  }
`,n=r`
  border-style: var(--input-border-style);
  border-width: var(--input-border-width);
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
    --input-border-clr: var(--border-clr-focus);
    outline: var(--input-outline);
  }
`,l=r`
  ${o}
  width: var(--size-x);
`,u=r`
  ${o}
  height: var(--size-y);
`,d=(i=0)=>r`
  &:focus-visible {
    outline: none;
  }

  &[data-focus-visible="true"] {
    outline: var(--outline);
    outline-offset: ${i}px;
  }
`,c=i=>r`
    display: block;

    :is(input):focus-visible ~ ${i}:before {
      outline: var(--outline);
      outline-offset: 2px;
    }

    :is(input):focus:not(:focus-visible) {
      outline: none;
    }

    &[data-invalid] span::before {
      border-color: var(--error-clr-hover);
    }
  `,v=(i,{style:e="solid"}={})=>r`
  border-width: var(--${i}-border-width);
  border-color: var(--${i}-border-clr);
  border-style: var(--${i}-border-style, ${e});
  border-radius: var(--${i}-border-radius, 0);
`,f={Bold:t,Regular:a,FieldStatus:s,InputLike:n,Sizing:o,SizingX:l,SizingY:u,FocusVisible:d,ToggleInputLike:c,Border:v};export{f as m};
