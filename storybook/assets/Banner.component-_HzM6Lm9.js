import{g as c,r as i,j as o}from"./iframe-CGPW5dgX.js";import{s}from"./displayName-CEXLPPBu.js";import{u as B}from"./useRenderProps-B7rIWDyP.js";import{m as h}from"./mixins-BJuiWlrm.js";import{m as x}from"./layout-Dd7m2B0D.js";import{M as y}from"./MaterialIcon.component-Dhrh5rCP.js";import{I as w}from"./IconButton.component-CifirOzj.js";import{B as k}from"./Button.component-Bd4z0Gnh.js";const N=c.div`
  ${h.Bold}
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
      --banner-bg-clr: var(--error-clr-fill);
      --banner-text-clr: var(--text-clr-on-accent);
      --banner-icon-clr: var(--text-clr-on-accent);
      --banner-btn-hover-clr: var(--error-clr-fill-hover);
      --banner-btn-active-clr: var(--error-clr-fill-hover);
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
      --banner-icon-clr: var(--info-clr-icon);
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
`,I=c.div`
  height: var(--banner-btn-size);
  width: var(--banner-btn-size);
  display: grid;
  place-items: center;
  color: var(--banner-icon-clr);
`,l=c.div`
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
`;const b=i.forwardRef((r,e)=>o.jsx(I,{className:"aje-banner__icon",children:o.jsx(y,{ref:e,...r})})),m=i.forwardRef((r,e)=>{const{variant:a="banner",...t}=r;return o.jsx(w,{ref:e,variant:a,...t})}),d=i.forwardRef((r,e)=>{const{variant:a="inverted",...t}=r;return o.jsx(k,{ref:e,variant:a,...t})}),n=i.forwardRef(function(e,a){const{variant:t="info",children:v,className:u,style:p,...f}=e,g=B({componentClassName:"aje-banner",variant:t,children:v,className:u,style:p});return o.jsx(N,{ref:a,...g,...f})});s(n,"Banner");n.Content=l;s(l,"Banner.Content");n.Icon=b;s(b,"Banner.Icon");n.IconButton=m;s(m,"Banner.IconButton");n.Button=d;s(d,"Banner.Button");try{n.displayName="Banner",n.__docgenInfo={description:`A view-spanning Banner. The most Basic kind of banner,
with no associated actions / buttons. Useful building block when constructing
your own banners.`,displayName:"Banner",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Banners/Banner/Banner.component.tsx",methods:[],props:{variant:{defaultValue:{value:'"info"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Banners/Banner/Banner.component.tsx",name:"BannerProps"}],description:"Colour variant: `info`, `error`, `success` or `warning`",name:"variant",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Banners/Banner/Banner.component.tsx",name:"BannerProps"},required:!1,tags:{default:'"info"'},type:{name:"BannerVariants"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}}},tags:{}}}catch{}export{n as B};
