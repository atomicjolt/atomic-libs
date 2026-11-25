import{f as a}from"./iframe-CGPW5dgX.js";import{m as o}from"./mixins-BJuiWlrm.js";const l=a`
  --floating-label-clr: var(--text-clr-secondary);

  label {
    ${o.Regular}
    --floating-font-size: 1.5rem;
    --dropdown-bg-clr: var(--background-clr);
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

  &[data-has-value] {
    label {
      --floating-font-size: 1.4rem;
      transform: translateY(-50%);
      background-color: var(--dropdown-bg-clr);
    }
  }
`;export{l as F};
