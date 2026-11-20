import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BCtMShv3.js";import{u as f}from"./useRenderProps-CP918x9p.js";import{g as i}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as g}from"./mixins-rvS92GN5.js";import{m as h}from"./layout-Dd7m2B0D.js";import{M as x}from"./index-DIrwG5TV.js";import{I as B}from"./IconButton.component-Dzx6S2vw.js";import{B as w}from"./Button.component-CCTbuPcD.js";const y=i.div`
  ${g.Bold}
  border-radius: var(--banner-border-radius);
  background-color: var(--banner-bg-clr);
  padding: 4px;
  margin-bottom: 4px;
  font-size: 1.4rem;
  color: var(--banner-text-clr);
  display: flex;
  align-items: flex-start;
  gap: 4px;

  /** Legacy support for icons rendered directly inside a Banner.
   * Prefer \`Banner.Icon\`, which aligns the icon with the Banner's buttons */
  & > i {
    height: var(--banner-btn-size);
    width: var(--banner-btn-size);
    display: grid;
    place-items: center;
    color: var(--banner-icon-clr);
  }

  &.aje-banner {
    &--error {
      --banner-bg-clr: var(--error-clr-hover);
      --banner-text-clr: var(--text-clr-on-accent);
      --banner-icon-clr: var(--text-clr-on-accent);
      --banner-btn-hover-clr: var(--error-clr-active);
      --banner-btn-active-clr: var(--error-clr-active);
    }

    &--warning {
      --banner-bg-clr: var(--warning-clr-subtle);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--warning-clr);
      --banner-btn-hover-clr: var(--warning-clr-subtle-hover);
      --banner-btn-active-clr: var(--warning-clr-subtle-active);
    }

    &--info {
      --banner-bg-clr: var(--info-clr-subtle);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--info-clr-fill-hover);
      --banner-btn-hover-clr: var(--info-clr-subtle-hover);
      --banner-btn-active-clr: var(--info-clr-subtle-active);
    }

    &--success {
      --banner-bg-clr: var(--success-clr-subtle);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--success-clr);
      --banner-btn-hover-clr: var(--success-clr-subtle-hover);
      --banner-btn-active-clr: var(--success-clr-subtle-active);
    }
  }

  .aje-btn--banner {
    border: none;
    background: none;
    width: var(--banner-btn-size);
    height: var(--banner-btn-size);
    border-radius: var(--banner-border-radius);
    color: var(--banner-text-clr);
    display: grid;
    place-items: center;
    transition: background 100ms ease;

    i {
      transition: color 100ms ease;
    }

    &.is-active {
      transform: translateY(0px);
    }

    &:hover {
      color: var(--banner-text-clr);
      background-color: var(--banner-btn-hover-clr);
      cursor: pointer;
    }
    &:active {
      background-color: var(--banner-btn-active-clr);
    }
    &:focus-visible {
      outline: var(--outline);
      outline-offset: 2px;
    }
  }
`,j=i.div`
  height: var(--banner-btn-size);
  width: var(--banner-btn-size);
  display: grid;
  place-items: center;
  color: var(--banner-icon-clr);
`,s=i.div`
  ${h}
  flex: 1;
  padding: 10px 0;
  line-height: 1.4;
`;i.button`
  border: none;
  background: none;
  width: var(--banner-btn-size);
  height: var(--banner-btn-size);
  border-radius: var(--banner-border-radius);
  color: var(--banner-text-clr);
  display: grid;
  place-items: center;
  transition: background 100ms ease;

  i {
    transition: color 100ms ease;
  }

  &:hover {
    color: var(--banner-text-clr);
    background-color: var(--banner-btn-hover-clr);
    cursor: pointer;
  }
  &:active {
    background-color: var(--banner-btn-active-clr);
  }
  &:focus-visible {
    outline: var(--outline);
    outline-offset: 2px;
  }
`;function I(r,n){const{variant:e="info",children:a,className:d,style:u,...m}=r,p=f({componentClassName:"aje-banner",variant:e,children:a,className:d,style:u});return t.jsx(y,{ref:n,...p,...m})}const l=c.forwardRef((r,n)=>t.jsx(j,{className:"aje-banner__icon",children:t.jsx(x,{ref:n,...r})})),b=c.forwardRef((r,n)=>{const{variant:e="banner",...a}=r;return t.jsx(B,{ref:n,variant:e,...a})}),v=c.forwardRef((r,n)=>{const{variant:e="inverted",...a}=r;return t.jsx(w,{ref:n,variant:e,...a})}),o=c.forwardRef(I);o.displayName="Banner";o.Content=s;s.displayName="Banner.Content";o.Icon=l;l.displayName="Banner.Icon";o.IconButton=b;b.displayName="Banner.IconButton";o.Button=v;v.displayName="Banner.Button";export{o as _};
