import{g as r,f as e}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as a}from"./mixins-rvS92GN5.js";import{S as t}from"./ComboInput.styles-DTCg5MK4.js";import{T as n}from"./TextField.component-D-ZLLsM7.js";import{N as l}from"./NumberField.component-ClW-VVgF.js";const o=e`
  &.aje-input--floating {
    --input-transition: 100ms ease;
    --floating-font-size: 1.6rem;

    label {
      ${a.Regular}
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
    ${t}:focus-within ~ label {
      top: 0px;
      left: 1em;
      --floating-font-size: 1.3rem;
      --input-bg-clr: var(--background-clr);
      --floating-label-clr: var(--text-clr);
    }

    input:hover {
      box-shadow: 0 0 0 1px var(--input-border-clr);
    }

    ${t} input:hover {
      box-shadow: none;
    }

    &[data-invalid] {
      --input-border-clr: var(--error-clr-hover);

      input:not(:placeholder-shown) ~ label,
      input:focus ~ label,
      ${t}:focus-within ~ label {
        --floating-label-clr: var(--error-clr-subtle-text);
      }
    }
  }
`,b=r(n)`
  ${o}
`,d=r(l)`
  ${o}
`,f=r.input`
  opacity: 0;
  margin: 0;
  height: 0.01rem;
  width: 0.01rem;
  position: absolute;
`;export{f as H,d as S,b as a};
