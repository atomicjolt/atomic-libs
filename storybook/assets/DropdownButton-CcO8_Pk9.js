import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as e}from"./styled-components.browser.esm-Y4FpNNpy.js";import{B as a}from"./Button.component-CR9mri1v.js";import{M as d}from"./MaterialIcon.component-Ca-Jxrbg.js";const l=e(a)`
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
`;function o(t){const{variant:r="dropdown"}=t;return n.jsxs(l,{...t,variant:r==="ghost"?"dropdown-ghost":r==="default"?"dropdown":r,children:[t.children,n.jsx(d,{icon:"arrow_drop_down"})]})}try{o.displayName="DropdownButton",o.__docgenInfo={description:"",displayName:"DropdownButton",props:{}}}catch{}export{o as D};
