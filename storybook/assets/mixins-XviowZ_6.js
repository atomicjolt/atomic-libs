import{l as r}from"./styled-components.browser.esm-Y4FpNNpy.js";const e=r`
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
`,n=r`
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
`,s=r`
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
    --input-border-clr: var(--outline-clr-primary);
    outline: var(--input-outline);
  }
`,l=r`
  ${e}
  width: var(--size-x);
`,u=r`
  ${e}
  height: var(--size-y);
`,d=(i=0)=>r`
  &:focus-visible {
    outline: none;
  }

  &[data-focus-visible="true"] {
    outline: var(--outline);
    outline-offset: ${i}px;
  }
`,v=i=>r`
    display: block;

    :is(input):focus-visible ~ ${i}:before {
      outline: var(--outline);
      outline-offset: 2px;
    }

    :is(input):focus:not(:focus-visible) {
      outline: none;
    }

    &[data-invalid] span::before {
      border-color: var(--error700);
    }
  `,c=(i,{style:o="solid"}={})=>r`
  border-width: var(--${i}-border-width);
  border-color: var(--${i}-border-clr);
  border-style: var(--${i}-border-style, ${o});
  border-radius: var(--${i}-border-radius, 0);
`,f={Bold:t,Regular:a,FieldStatus:n,InputLike:s,Sizing:e,SizingX:l,SizingY:u,FocusVisible:d,ToggleInputLike:v,Border:c};export{f as m};
