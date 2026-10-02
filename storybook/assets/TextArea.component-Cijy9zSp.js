import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-BCtMShv3.js";import{m as i}from"./mixins-CcgEHb9c.js";import{g as o}from"./styled-components.browser.esm-DC3GK9Rn.js";import{S as h}from"./SkeletonLoader.component-q75MwwfP.js";import{u as g}from"./index-CKqsTkFX.js";import{u as x}from"./useRenderProps-CP918x9p.js";import{T as b}from"./TextArea.context-AnZs5gnW.js";import{u as v}from"./Loading.context-C7II2W1n.js";const y=o(h)`
  ${i.Border("input")}
  min-width: 200px;
  min-height: var(--textarea-height, 80px);
  width: 100%;
  display: block;
`,z=o.textarea`
  ${i.Regular}
  ${i.Border("input")}

  min-width: 200px;
  min-height: var(--textarea-height, 80px);
  width: 100%;
  padding: calc(var(--input-font-size) / 2) var(--input-padding-horiz);
  font-size: var(--input-font-size);
  color: var(--input-text-clr);
  background-color: var(--input-bg-clr);
  resize: none;

  &[data-resize="horizontal"] {
    resize: horizontal;
  }

  &[data-resize="vertical"] {
    resize: vertical;
  }

  &[data-resize="both"] {
    resize: both;
  }

  &:focus {
    box-shadow: 0 0 0 1px var(--input-border-clr);
    outline: var(--input-outline);
    --input-border-clr: var(--outline-clr-primary);
  }
`,n=f.forwardRef(function(e,a){[e,a]=g(b,e,a);const{isLoading:l,loadingLabel:d}=v(e),{className:u,size:m,style:p,isLoading:L,loadingLabel:w,...c}=e,t=x({componentClassName:u,size:m,style:p});return l?r.jsx(y,{className:t.className,style:t.style,title:d,children:r.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"var(--input-border-radius)",ry:"var(--input-border-radius)"})}):r.jsx(z,{ref:a,...t,...c})});try{n.displayName="TextArea",n.__docgenInfo={description:"A wrapped `<textarea />` element",displayName:"TextArea",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}export{n as T};
