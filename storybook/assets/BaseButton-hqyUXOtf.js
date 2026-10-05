import{g as y}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as s}from"./mixins-CcgEHb9c.js";import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-BCtMShv3.js";import{a as B,b as $}from"./useObjectRef-D2RG7rRi.js";import{u as w}from"./useRenderProps-CP918x9p.js";import{u as P}from"./useFocusRing-DIS5Kyrs.js";import{$ as z}from"./useButton-9RZc7-Gk.js";import{$ as V}from"./useLink-DD4jtrk3.js";import{u as L}from"./Loading.context-C7II2W1n.js";import{S as k}from"./SpinnerLoader.component-KlnkCnHe.js";const X=y.button`
  ${s.SizingX}
  ${s.Bold}
  ${s.FocusVisible(2)}
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
    --btn-text-clr: var(--text-clr-inverted);
    --btn-bg-clr: var(--accent-clr);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--accent-clr-alt);
  }

  &.aje-btn--secondary {
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral100);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral200);
    --btn-border: var(--border);
  }

  &.aje-btn--link {
    --btn-text-clr: var(--accent-clr);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);
    text-decoration: underline;
  }

  &.aje-btn--error {
    --btn-text-clr: var(--text-clr-inverted);
    --btn-bg-clr: var(--error700);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--error800);
  }

  &.aje-btn--success {
    --btn-text-clr: var(--text-clr-inverted);
    --btn-bg-clr: var(--success700);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--success800);
  }

  &.aje-btn--inverted {
    --btn-text-clr: var(--text-clr);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--btn-bg-clr);
    --btn-hover-shadow: 0 1px 3px hsla(221, 39%, 11%, 0.5);
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
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);
    --btn-border: var(--border);
  }

  &.aje-btn--ghost {
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: transparent;
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);
    --btn-border: transparent;
  }

  &.aje-btn--dropdown {
    font-weight: normal;
    justify-content: flex-start;
    padding-right: 0.8rem;

    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);
    // To match the actual select element
    --btn-border: 1px solid var(--input-border-clr);
    --btn-pressed-transform: translateY(0px);
  }

  &.aje-btn--dropdown-ghost {
    font-weight: normal;
    justify-content: flex-start;
    padding-right: 0.8rem;

    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: transparent;
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);
    --btn-border: none;
    --btn-pressed-transform: translateY(0px);
  }

  & > i {
    color: inherit;
    font-size: var(--btn-icon-size) !important;
    margin-left: calc(var(--btn-padding-horiz) / -2.5);
  }
`;function q(t,e){const{buttonProps:a,isPressed:r}=z(t,e),{linkProps:o,isPressed:l}=V(t,e);return t.elementType==="a"?{buttonProps:o,isPressed:l}:{buttonProps:a,isPressed:r}}const u=j.forwardRef(function(e,a){const r=B(a),{Component:o,loadingComplete:l=!1,as:i=e.href?"a":"button",variant:v="primary",size:p="auto"}=e,{isLoading:n=!1,loadingLabel:m}=L(e),{buttonProps:f,isPressed:c}=q({...e,elementType:i,"aria-label":n?m:e["aria-label"]},r),{focusProps:g,isFocusVisible:x,isFocused:h}=P(),d=w({componentClassName:"aje-btn",...e,variant:v,size:p,values:{isPressed:c,isLoading:n,isFocusVisible:x,isFocused:h},selectors:{"data-pressed":c,"data-loading":n}});return b.jsxs(o,{as:i,ref:r,...$(f,g,d),children:[n&&b.jsx(k,{isLoading:!l,placement:"absolute center","aria-label":"loading"}),d.children]})});try{u.displayName="BaseButton",u.__docgenInfo={description:"BaseButton component - a foundational button component that can be extended for various button types",displayName:"BaseButton",props:{Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"a"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},loadingComplete:{defaultValue:null,description:"Transitions the loading spinner to a checkmark",name:"loadingComplete",required:!1,type:{name:"boolean | undefined"}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<ButtonRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<ButtonRenderProps> | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"SuggestStrings<ButtonVariants> | undefined"}}}}}catch{}export{u as B,X as S};
