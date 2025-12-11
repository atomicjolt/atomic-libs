import{d as r,l as a}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as o}from"./mixins-XviowZ_6.js";import{S as t}from"./ComboInput.styles-GNwh4bFc.js";import{T as e}from"./TextField.component-B8eAKhyN.js";import{N as l}from"./NumberField.component-Dh5EI6_K.js";const n=a`
  &.aje-input--floating {
    --input-height: 48px;
    --input-padding-horiz: 1em;
    --input-bg-clr: var(--neutral100);
    --input-transition: 100ms ease;

    --floating-font-size: 1.6rem;
    --floating-label-clr: var(--text-clr-alt);

    label {
      ${o.Regular}
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

    ${t}:focus-within, &[data-float] {
      --input-bg-clr: var(--neutral50);
      input {
        --input-border-clr: none;
      }
    }

    input:focus ~ label,
    &[data-float] label,
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
`,d=r(e)`
  ${n}
`,b=r(l)`
  ${n}
`,f=r.input`
  opacity: 0;
  margin: 0;
  height: 0.01rem;
  width: 0.01rem;
  position: absolute;
`;export{f as H,d as S,b as a};
