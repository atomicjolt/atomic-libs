import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{d as e}from"./styled-components.browser.esm-WCay-hu9.js";import{M as a}from"./index-C_RUmn9I.js";import{B as l}from"./Button.component-Bg3ttyxF.js";const c=e(l)`
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
`;function o(t){const{variant:r="dropdown"}=t;return n.jsxs(c,{...t,variant:r==="ghost"?"dropdown-ghost":r,children:[t.children,n.jsx(a,{icon:"arrow_drop_down"})]})}try{o.displayName="DropdownButton",o.__docgenInfo={description:"",displayName:"DropdownButton",props:{}}}catch{}export{o as D};
