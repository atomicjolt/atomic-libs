import{g as y,r as B,j as b}from"./iframe-CGPW5dgX.js";import{m as l}from"./mixins-BJuiWlrm.js";import{c as k}from"./index-C0dagnaq.js";import{d as P,$ as N}from"./useObjectRef-CjsC0YUg.js";import{u as j}from"./useRenderProps-B7rIWDyP.js";import{u as w}from"./useFocusRing-Dbcio0BW.js";import{$}from"./useButton-CjI92Tj6.js";import{$ as S}from"./useLink-PwQmwW74.js";import{u as V}from"./Loading.context-EUscm4UA.js";import{S as z}from"./SpinnerLoader.component-BfUo5Fvz.js";const Y=y.button`
  ${l.SizingX}
  ${l.Bold}
  ${l.FocusVisible(2)}
  padding: var(--btn-padding-vert) var(--btn-padding-horiz);
  border-radius: var(--btn-border-radius);
  font-size: var(--btn-font-size);
  min-height: var(--btn-height);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--btn-icon-gap);
  text-decoration: none;
  transition: background 100ms ease, color 100ms ease, transform 100ms ease,
    box-shadow 100ms ease;

  color: var(--btn-text-clr);
  background-color: var(--btn-bg-clr);
  border: var(--btn-border, none);
  box-shadow: var(--btn-shadow, none);
  --loader-clr: var(--btn-text-clr);

  &:hover {
    cursor: pointer;
    color: var(--btn-hover-text-clr);
    background-color: var(--btn-hover-bg-clr);
    box-shadow: var(--btn-hover-shadow);
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &[data-pressed] {
    transform: var(--btn-pressed-transform);
  }

  &[data-loading] {
    position: relative;
    color: transparent;

    .aje-spinner,
    .aje-three-dot-loader {
      --loader-clr: var(--btn-text-clr);
      --loader-size: 1em;
    }
  }

  &.aje-btn--primary {
    --btn-text-clr: var(--text-clr-on-accent);
    --btn-bg-clr: var(--accent-clr-fill);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--accent-clr-fill-hover);
  }

  &.aje-btn--secondary {
    --btn-text-clr: var(--text-clr-secondary);
    --btn-bg-clr: var(--background-clr-subtle);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--background-clr-subtle-hover);
    --btn-border: var(--border);
  }

  &.aje-btn--link {
    --btn-text-clr: var(--accent-clr);
    --btn-bg-clr: var(--background-clr);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--background-clr-hover);
    text-decoration: underline;
  }

  &.aje-btn--error {
    --btn-text-clr: var(--text-clr-on-accent);
    --btn-bg-clr: var(--error-clr-fill);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--error-clr-fill-hover);
  }

  &.aje-btn--success {
    --btn-text-clr: var(--text-clr-on-accent);
    --btn-bg-clr: var(--success-clr-fill);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--success-clr-fill-hover);
  }

  &.aje-btn--inverted {
    --btn-text-clr: var(--text-clr);
    --btn-bg-clr: var(--background-clr);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--btn-bg-clr);
    --btn-hover-shadow: var(--shadow-sm);
  }

  &.aje-btn--content {
    --btn-text-clr: var(--text-clr);
    --btn-bg-clr: transparent;
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: transparent;
    --btn-hover-shadow: none;
    --btn-padding-horiz: 0px;
    --btn-padding-vert: 0px;
    --btn-height: auto;
  }

  &.aje-btn--border {
    --btn-text-clr: var(--text-clr-secondary);
    --btn-bg-clr: var(--background-clr);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--background-clr-hover);
    --btn-border: var(--border);
  }

  &.aje-btn--ghost {
    --btn-text-clr: var(--text-clr-secondary);
    --btn-bg-clr: transparent;
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--background-clr-hover);
    --btn-border: transparent;
  }

  &.aje-btn--dropdown {
    font-weight: normal;
    justify-content: flex-start;
    padding-right: 0.8rem;

    --btn-text-clr: var(--text-clr-secondary);
    --btn-bg-clr: var(--background-clr);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--background-clr-hover);
    // To match the actual select element
    --btn-border: 1px solid var(--input-border-clr);
    --btn-pressed-transform: translateY(0px);
  }

  &.aje-btn--dropdown-ghost {
    font-weight: normal;
    justify-content: flex-start;
    padding-right: 0.8rem;

    --btn-text-clr: var(--text-clr-secondary);
    --btn-bg-clr: transparent;
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--background-clr-hover);
    --btn-border: none;
    --btn-pressed-transform: translateY(0px);
  }

  & > i {
    color: inherit;
    font-size: var(--btn-icon-size) !important;
    margin-left: calc(var(--btn-padding-horiz) / -2.5);
  }
`,X=k();function C(t,e){const{buttonProps:n,isPressed:a}=$(t,e),{linkProps:o,isPressed:s}=S(t,e);return t.elementType==="a"?{buttonProps:o,isPressed:s}:{buttonProps:n,isPressed:a}}const d=B.forwardRef(function(e,n){const a=P(n),{Component:o,loadingComplete:s=!1,as:c=e.href?"a":"button",variant:p="primary",size:u="auto"}=e,{isLoading:r=!1,loadingLabel:g}=V(e),{buttonProps:v,isPressed:i}=C({...e,elementType:c,"aria-label":r?g:e["aria-label"]},a),{focusProps:f,isFocusVisible:x,isFocused:h}=w(),m=j({componentClassName:"aje-btn",...e,variant:p,size:u,values:{isPressed:i,isLoading:r,isFocusVisible:x,isFocused:h},selectors:{"data-pressed":i,"data-loading":r}});return b.jsxs(o,{as:c,ref:a,...N(v,f,m),children:[r&&b.jsx(z,{isLoading:!s,placement:"absolute center"}),m.children]})});try{d.displayName="BaseButton",d.__docgenInfo={description:"BaseButton component - a foundational button component that can be extended for various button types",displayName:"BaseButton",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Internal/BaseButton.tsx",methods:[],props:{Component:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Internal/BaseButton.tsx",name:"BaseButtonProps"}],description:"",name:"Component",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Internal/BaseButton.tsx",name:"BaseButtonProps"},required:!0,tags:{},type:{name:"ElementType<any, keyof IntrinsicElements>"}},as:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Internal/BaseButton.tsx",name:"ButtonProps"}],description:"",name:"as",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Internal/BaseButton.tsx",name:"ButtonProps"},required:!1,tags:{},type:{name:"enum",raw:'"button" | "a"',value:[{value:'"button"'},{value:'"a"'}]}},size:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Internal/BaseButton.tsx",name:"ButtonProps"}],description:"",name:"size",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Internal/BaseButton.tsx",name:"ButtonProps"},required:!1,tags:{},type:{name:"enum",raw:"ExtendedSize",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},loadingComplete:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Internal/BaseButton.tsx",name:"ButtonProps"}],description:"Transitions the loading spinner to a checkmark",name:"loadingComplete",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Internal/BaseButton.tsx",name:"ButtonProps"},required:!1,tags:{},type:{name:"boolean"}},isLoading:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,tags:{},type:{name:"boolean"}},loadingLabel:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:"aria accessibility label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<ButtonRenderProps>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<ButtonRenderProps>"}},variant:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"HasVariant"}],description:"Visual style of the component.",name:"variant",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"HasVariant"},required:!1,tags:{},type:{name:"SuggestStrings<ButtonVariants>"}},slot:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/hooks/useSlottedContext.ts",name:"SlotProps"}],description:"",name:"slot",parent:{fileName:"atomic-libs/packages/atomic-elements/src/hooks/useSlottedContext.ts",name:"SlotProps"},required:!1,tags:{},type:{name:"string | null"}}},tags:{}}}catch{}export{d as B,Y as S,X as a};
