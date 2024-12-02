import{j as d}from"./jsx-runtime-CkxqCPlQ.js";import{r as u}from"./index-DJO9vBfz.js";import{m as p}from"./mixins-TlkgTuSN.js";import{d as c}from"./styled-components.browser.esm-WCay-hu9.js";import{c as m,u as f}from"./index-CXdyvu6V.js";import{u as x}from"./useRenderProps-BqJZ5b79.js";import{$ as h}from"./filterDOMProps-CeZl_uWj.js";const v=c.textarea`
  ${p.Regular}

  border: var(--input-border);
  border-color: var(--input-border-clr);
  border-radius: var(--input-border-radius);
  min-height: 80px;
  min-width: 200px;
  height: var(--textarea-height);
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
    outline-color: var(--input-border-clr);
  }
`,b=m(),t=u.forwardRef(function(e,r){[e,r]=f(b,e,r);const{className:o,size:i,style:n,...s}=e,l=x({componentClassName:o,size:i,style:n});return d.jsx(v,{ref:r,...l,...h(s)})});try{t.displayName="TextArea",t.__docgenInfo={description:"A wrapped `<textarea />` element",displayName:"TextArea",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}}}}}catch{}export{t as T};
