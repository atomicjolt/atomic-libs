import{l as i,d as o}from"./styled-components.browser.esm-WCay-hu9.js";import{m as r}from"./mixins-TlkgTuSN.js";import{F as l}from"./FieldWrapper-CecreuUM.js";import{S as e}from"./ComboInput.styles-BWDkoKPy.js";import{T as n}from"./TextField.component-DWH1wPrl.js";import{N as s}from"./NumberField.component-tuRmaVk4.js";const a=i`
  &.aje-input--floating {
    --input-height: 48px;
    --input-padding-horiz: 1em;
    --input-bg-clr: var(--neutral100);
    --input-transition: 100ms ease;

    --floating-font-size: 1.6rem;
    --floating-label-clr: var(--text-clr-alt);

    label {
      ${r.Regular}
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

    ${e}:focus-within, &[data-float] {
      --input-bg-clr: var(--neutral50);
      input {
        --input-border-clr: none;
      }
    }

    input:focus ~ label,
    &[data-float] label,
    ${e}:focus-within ~ label {
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

    ${e} input:hover {
      --input-border-clr: none;
      box-shadow: none;
    }

    &[data-invalid] {
      --input-border-clr: var(--error700);

      input:not(:placeholder-shown) ~ label,
      input:focus ~ label,
      ${e}:focus-within ~ label {
        --floating-label-clr: var(--error800);
      }
    }
  }
`,f=o(n)`
  ${a}
`,g=o(s)`
  ${a}
`,v=o(l)`
  display: block;

  :is(input):focus-visible ~ .aje-checkbox__label:before {
    outline: var(--outline);
    outline-offset: 2px;
  }

  :is(input):focus:not(:focus-visible) {
    outline: none;
  }

  &[data-invalid] span::before {
    border-color: var(--error700);
  }
`,m=o.input`
  opacity: 0;
  margin: 0;
  height: 0.01rem;
  width: 0.01rem;
  position: absolute;
`,x=o.span`
  ${r.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  font-size: var(--choose-label-text-size);
  line-height: 1.5;
  color: var(--text-clr);
  padding-top: var(--choose-label-padding-top);
  min-height: var(--choose-label-height);

  ${({$rtl:t})=>t?"padding-right: var(--choose-label-padding-left);":"padding-left: var(--choose-label-padding-left);"}

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    ${({$rtl:t})=>t?"right: 2px;":"left: 2px;"}
    width: var(--choose-check-size);
    height: var(--choose-check-size);
    box-sizing: border-box;
    background-color: var(--choose-check-bg-clr);
    border: 2px solid var(--choose-check-border-clr);
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;export{x as C,f as S,g as a,v as b,m as c};
