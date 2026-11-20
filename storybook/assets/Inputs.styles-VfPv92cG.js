import{g as t,f as a}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as e}from"./mixins-rvS92GN5.js";import{S as r}from"./ComboInput.styles-DTCg5MK4.js";import{T as n}from"./TextField.component-D-ZLLsM7.js";import{N as l}from"./NumberField.component-CzW-d4-c.js";const o=a`
  &.aje-input--floating {
    --input-transition: 100ms ease;
    --floating-font-size: 1.6rem;

    label {
      ${e.Regular}
      z-index: 2;
      position: absolute;
      top: 50%;
      left: calc(1em - 4px);
      transform: translateY(-50%);
      background-color: var(--input-bg-clr);
      color: var(--floating-label-clr);
      text-align: center;
      transition: 200ms ease;
      font-size: var(--floating-font-size);
      pointer-events: none;
      padding: 1px 4px;
    }

    input:focus {
      --input-border-clr: var(--border-clr-focus);
      --input-bg-clr: var(--background-clr);
      box-shadow: 0 0 0 1px var(--input-border-clr);
      outline: none;
    }

    input:focus ~ label,
    &[data-has-value] label,
    ${r}:focus-within ~ label {
      top: 0px;
      left: 1em;
      --floating-font-size: 1.3rem;
      --input-bg-clr: var(--background-clr);
      --floating-label-clr: var(--text-clr);
    }

    input:hover {
      box-shadow: 0 0 0 1px var(--input-border-clr);
    }

    ${r} input:hover {
      box-shadow: none;
    }

    &[data-invalid] {
      --input-border-clr: var(--error-clr-hover);

      input:not(:placeholder-shown) ~ label,
      input:focus ~ label,
      ${r}:focus-within ~ label {
        --floating-label-clr: var(--error-clr);
      }
    }
  }
`,b=t(n)`
  ${o}
`,d=t(l)`
  ${o}
`,f=t.input`
  opacity: 0;
  margin: 0;
  height: 0.01rem;
  width: 0.01rem;
  position: absolute;
`;export{f as H,b as S,d as a};
