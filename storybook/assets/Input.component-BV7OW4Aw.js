import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-BCtMShv3.js";import{g as l}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as t}from"./mixins-CcgEHb9c.js";import{u as g}from"./index-CKqsTkFX.js";import{u as h}from"./useRenderProps-CP918x9p.js";import{I as y}from"./Input.context-Cyaw3phX.js";import{u as b}from"./Loading.context-C7II2W1n.js";import{S as L}from"./SkeletonLoader.component-q75MwwfP.js";const v=l.input`
  ${t.Regular}
  ${t.InputLike}
  ${t.SizingX}
`,x=l(L)`
  ${t.SizingX}
  height: var(--input-height);
  display: block;
`,o=f.forwardRef(function(e,n){[e,n]=g(y,e,n);const{isLoading:d,loadingLabel:u}=b(e),{className:m,size:p,style:c,isLoading:I,loadingLabel:_,...s}=e,a=h({componentClassName:m,size:p,style:c});return d?i.jsx(x,{className:a.className,style:a.style,title:u,children:i.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"var(--input-border-radius)",ry:"var(--input-border-radius)"})}):i.jsx(v,{ref:n,...a,...s,slot:s.slot||void 0})});try{o.displayName="Input",o.__docgenInfo={description:"The input element for a field.",displayName:"Input",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}export{o as I};
