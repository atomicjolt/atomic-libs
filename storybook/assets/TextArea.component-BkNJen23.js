import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BCtMShv3.js";import{m as r}from"./mixins-XviowZ_6.js";import{d}from"./styled-components.browser.esm-Y4FpNNpy.js";import{u as c}from"./index-CsiUWFDz.js";import{T as f}from"./TextArea.context-C6JAP7JO.js";import{u as x}from"./useRenderProps-CP918x9p.js";const h=d.textarea`
  ${r.Regular}
  ${r.Border("input")}

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
`,a=p.forwardRef(function(e,t){[e,t]=c(f,e,t);const{className:i,size:n,style:s,...l}=e,u=x({componentClassName:i,size:n,style:s});return m.jsx(h,{ref:t,...u,...l})});try{a.displayName="TextArea",a.__docgenInfo={description:"A wrapped `<textarea />` element",displayName:"TextArea",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}}}}}catch{}export{a as T};
