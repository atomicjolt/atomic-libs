import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{d as e}from"./styled-components.browser.esm-BQf_XqKi.js";import{M as a}from"./MaterialIcon.component-Bqs5W7S4.js";import{B as d}from"./Button.component-Bfqq8odl.js";const l=e(d)`
  justify-content: space-between;
  padding-right: 0.8rem;

  &.aje-btn--dropdown {
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);
    // To match the actual select element
    --btn-border: 1px solid var(--input-border-clr);
    --btn-pressed-transform: translateY(0px);
  }

  &.aje-btn--dropdown-ghost {
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);
    --btn-border: none;
    --btn-pressed-transform: translateY(0px);

    font-weight: normal;
  }
`;function o(t){const{variant:r="dropdown"}=t;return n.jsxs(l,{...t,variant:r==="ghost"?"dropdown-ghost":r==="default"?"dropdown":r,children:[t.children,n.jsx(a,{icon:"arrow_drop_down"})]})}try{o.displayName="DropdownButton",o.__docgenInfo={description:"",displayName:"DropdownButton",props:{}}}catch{}export{o as D};
