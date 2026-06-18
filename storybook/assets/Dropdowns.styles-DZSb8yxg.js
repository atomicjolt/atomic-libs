import{f as t}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as a}from"./mixins-CcgEHb9c.js";const l=t`
  --floating-label-clr: var(--text-clr-alt);

  label {
    ${a.Regular}
    --floating-font-size: 1.5rem;
    --dropdown-bg-clr: var(--neutral50);
    --floating-label-clr: var(--text-clr);

    z-index: 2;
    position: absolute;
    transform: translateY(60%);
    color: var(--floating-label-clr);
    text-align: center;
    transition: 200ms ease;
    font-size: var(--floating-font-size);
    pointer-events: none;
    padding: 1px 4px;
    top: 0px;
    left: 1em;
  }

  &[data-float] {
    label {
      --floating-font-size: 1.4rem;
      transform: translateY(-50%);
      background-color: var(--dropdown-bg-clr);
    }
  }
`;export{l as F};
