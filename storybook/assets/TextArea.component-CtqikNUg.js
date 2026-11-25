import{g as r,r as g,j as s}from"./iframe-CGPW5dgX.js";import{m as i}from"./mixins-BJuiWlrm.js";import{S as f}from"./SkeletonLoader.component-DalY9QZY.js";import{u as h}from"./index-C0dagnaq.js";import{u as x}from"./useRenderProps-B7rIWDyP.js";import{T as b}from"./TextArea.context-C9KYZsFH.js";import{u as y}from"./Loading.context-EUscm4UA.js";const v=r(f)`
  ${i.Border("input")}
  min-width: 200px;
  min-height: var(--textarea-height, 80px);
  width: 100%;
  display: block;
`,z=r.textarea`
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
    --input-border-clr: var(--border-clr-focus);
  }
`,o=g.forwardRef(function(e,a){[e,a]=h(b,e,a);const{isLoading:l,loadingLabel:m}=y(e),{className:c,size:d,style:p,isLoading:N,loadingLabel:L,...u}=e,t=x({componentClassName:c,size:d,style:p});return l?s.jsx(v,{className:t.className,style:t.style,title:m,children:s.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"var(--input-border-radius)",ry:"var(--input-border-radius)"})}):s.jsx(z,{ref:a,...t,...u})});try{o.displayName="TextArea",o.__docgenInfo={description:"A wrapped `<textarea />` element",displayName:"TextArea",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Fields/Atoms/TextArea/TextArea.component.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"}],description:"Unique id for the component",name:"id",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"},required:!1,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"}],description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"},required:!1,tags:{},type:{name:"Argument | Argument[]"}},size:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"}],description:"Size of the component",name:"size",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"},required:!1,tags:{},type:{name:"enum",raw:"ExtendedSize",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isLoading:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,tags:{},type:{name:"boolean"}},loadingLabel:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:"aria accessibility label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}export{o as T};
