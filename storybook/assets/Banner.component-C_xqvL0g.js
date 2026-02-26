import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BCtMShv3.js";import{u as p}from"./useRenderProps-CP918x9p.js";import{d as c}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as g}from"./mixins-XviowZ_6.js";import{m as x}from"./layout-Dd7m2B0D.js";import{I as f}from"./IconButton.component-CUXN6DzO.js";import{B as h}from"./Button.component-Dz2Hdivj.js";const B=c.div`
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
`,s=c.div`
  ${x}
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
`;function y(r,n){const{variant:e="info",children:a,className:v,style:d,...u}=r,m=p({componentClassName:"aje-banner",variant:e,children:a,className:v,style:d});return o.jsx(B,{ref:n,...m,...u})}const b=i.forwardRef((r,n)=>{const{variant:e="banner",...a}=r;return o.jsx(f,{ref:n,variant:e,...a})}),l=i.forwardRef((r,n)=>{const{variant:e="inverted",...a}=r;return o.jsx(h,{ref:n,variant:e,...a})}),t=i.forwardRef(y);t.displayName="Banner";t.Content=s;s.displayName="Banner.Content";t.IconButton=b;b.displayName="Banner.IconButton";t.Button=l;l.displayName="Banner.Button";export{t as _};
