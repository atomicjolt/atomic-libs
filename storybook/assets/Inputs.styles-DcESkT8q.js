import{g as r,f as n}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as e}from"./mixins-CcgEHb9c.js";import{S as t}from"./ComboInput.styles-VPv8l2aB.js";import{T as o}from"./TextField.component-BTDLW7cb.js";import{N as i}from"./NumberField.component-BopW9tJh.js";const a=n`
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
      --input-border-clr: var(--primary700);
      --input-bg-clr: var(--neutral50);
      box-shadow: 0 0 0 1px var(--input-border-clr);
      outline: none;
    }

    ${t}:focus-within, &[data-has-value] {
      --input-bg-clr: var(--neutral50);
      input {
        --input-border-clr: none;
      }
    }

    input:focus ~ label,
    &[data-has-value] label,
    ${t}:focus-within ~ label {
      top: 0px;
      left: 1em;
      --floating-font-size: 1.3rem;
      --input-bg-clr: var(--neutral50);
      --floating-label-clr: var(--text-clr);
    }

    input:hover {
      --input-border-clr: var(--neutral500);
      box-shadow: 0 0 0 1px var(--input-border-clr);
    }

    ${t} input:hover {
      --input-border-clr: none;
      box-shadow: none;
    }

    &[data-invalid] {
      --input-border-clr: var(--error700);

      input:not(:placeholder-shown) ~ label,
      input:focus ~ label,
      ${t}:focus-within ~ label {
        --floating-label-clr: var(--error800);
      }
    }
  }
`,b=r(o)`
  ${a}
`,d=r(i)`
  ${a}
`,f=r.input`
  opacity: 0;
  margin: 0;
  height: 0.01rem;
  width: 0.01rem;
  position: absolute;
`;export{f as H,b as S,d as a};
