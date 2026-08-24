import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BCtMShv3.js";import{u as g}from"./useRenderProps-CP918x9p.js";import{g as c}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as x}from"./mixins-CcgEHb9c.js";import{m as f}from"./layout-Dd7m2B0D.js";import{M as h}from"./MaterialIcon.component-ysTpbAYm.js";import{I as B}from"./IconButton.component-DeKad6Bj.js";import{B as y}from"./Button.component-CkI7FtMZ.js";const w=c.div`
  ${x.Bold}
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
      --banner-bg-clr: var(--error700);
      --banner-text-clr: var(--text-clr-inverted);
      --banner-icon-clr: var(--text-clr-inverted);
      --banner-btn-hover-clr: var(--error800);
      --banner-btn-active-clr: var(--error900);
    }

    &--warning {
      --banner-bg-clr: var(--warning100);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--warning600);
      --banner-btn-hover-clr: var(--warning200);
      --banner-btn-active-clr: var(--warning300);
    }

    &--info {
      --banner-bg-clr: var(--primary100);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--primary700);
      --banner-btn-hover-clr: var(--primary200);
      --banner-btn-active-clr: var(--primary300);
    }

    &--success {
      --banner-bg-clr: var(--success100);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--success600);
      --banner-btn-hover-clr: var(--success200);
      --banner-btn-active-clr: var(--success300);
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
`,j=c.div`
  height: var(--banner-btn-size);
  width: var(--banner-btn-size);
  display: grid;
  place-items: center;
  color: var(--banner-icon-clr);
`,s=c.div`
  ${f}
  flex: 1;
  padding: 10px 0;
  line-height: 1.4;
`;c.button`
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
`;function I(r,n){const{variant:e="info",children:a,className:d,style:m,...u}=r,p=g({componentClassName:"aje-banner",variant:e,children:a,className:d,style:m});return t.jsx(w,{ref:n,...p,...u})}const b=i.forwardRef((r,n)=>t.jsx(j,{className:"aje-banner__icon",children:t.jsx(h,{ref:n,...r})})),l=i.forwardRef((r,n)=>{const{variant:e="banner",...a}=r;return t.jsx(B,{ref:n,variant:e,...a})}),v=i.forwardRef((r,n)=>{const{variant:e="inverted",...a}=r;return t.jsx(y,{ref:n,variant:e,...a})}),o=i.forwardRef(I);o.displayName="Banner";o.Content=s;s.displayName="Banner.Content";o.Icon=b;b.displayName="Banner.Icon";o.IconButton=l;l.displayName="Banner.IconButton";o.Button=v;v.displayName="Banner.Button";export{o as _};
