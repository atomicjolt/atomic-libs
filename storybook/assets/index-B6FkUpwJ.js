import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-BCtMShv3.js";import{a as y,b as j}from"./useObjectRef-D2RG7rRi.js";import{u as B}from"./useFocusRing-88kjlAJd.js";import{u as V}from"./useRenderProps-CP918x9p.js";import{$ as P}from"./useButton-DYDUZLxM.js";import{$ as w}from"./useLink-D8UViwUR.js";import{u as $}from"./index-CsiUWFDz.js";import{d as q}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as o}from"./mixins-XviowZ_6.js";import{B as _}from"./Button.context-BxdzJgC_.js";import{S as z}from"./SpinnerLoader.component-5jUvTG1c.js";function L(t,e){const{buttonProps:a,isPressed:n}=P(t,e),{linkProps:r,isPressed:l}=w(t,e);return t.elementType==="a"?{buttonProps:r,isPressed:l}:{buttonProps:a,isPressed:n}}const k=q.button`
  ${o.SizingX}
  ${o.Bold}
  ${o.FocusVisible(2)}
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
`,b=x.forwardRef(function(e,a){[e,a]=$(_,e,a);const n=y(a),{isLoading:r=!1,loadingLabel:l,loadingComplete:u=!1,as:s=e.href?"a":"button",variant:v="primary",size:m="auto"}=e,{buttonProps:p,isPressed:i}=L({...e,elementType:s,"aria-label":r?l:e["aria-label"]},n),{focusProps:g,isFocusVisible:f,isFocused:h}=B(),c=V({componentClassName:"aje-btn",...e,variant:v,size:m,values:{isPressed:i,isLoading:r,isFocusVisible:f,isFocused:h},selectors:{"data-pressed":i,"data-loading":r}});return d.jsxs(k,{as:s,ref:n,...j(p,g,c),children:[r&&d.jsx(z,{isLoading:!u,placement:"absolute center","aria-label":"loading"}),c.children]})});try{b.displayName="Button",b.__docgenInfo={description:"A button component that can be used to trigger actions or events",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"a"'},{value:'"button"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string"}},loadingComplete:{defaultValue:null,description:"Transitions the loading spinner to a checkmark",name:"loadingComplete",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<ButtonRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<ButtonRenderProps>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"SuggestStrings<ButtonVariants>"}}}}}catch{}try{Button.displayName="Button",Button.__docgenInfo={description:"A button component that can be used to trigger actions or events",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"a"'},{value:'"button"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string"}},loadingComplete:{defaultValue:null,description:"Transitions the loading spinner to a checkmark",name:"loadingComplete",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<ButtonRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<ButtonRenderProps>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"SuggestStrings<ButtonVariants>"}}}}}catch{}export{b as B};
