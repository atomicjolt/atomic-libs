import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{R as u}from"./index-BCtMShv3.js";import{g as p}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as c}from"./mixins-CcgEHb9c.js";import{u as f}from"./index-CKqsTkFX.js";import{L as b}from"./Label.context-CCD9MV1z.js";import{u as y}from"./useRenderProps-CP918x9p.js";import{$ as g}from"./filterDOMProps-CeZl_uWj.js";const h=p.label`
  ${c.Bold}
  display: block;
  font-size: 1.3rem;
  line-height: 1.1;
  color: var(--text-clr);

  ${({$paddingBottom:e="5px"})=>e&&`padding-bottom: ${e};`}
`,n=u.forwardRef(function(a,t){[a,t]=f(b,a,t);const{className:o,size:r,as:s="label",children:i,...l}=a,m=y({componentClassName:o,size:r});return d.jsx(h,{as:s,ref:t,...m,...g(l),htmlFor:l.htmlFor,children:i})});try{n.displayName="Label",n.__docgenInfo={description:"A label for a field",displayName:"Label",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},$paddingBottom:{defaultValue:null,description:"",name:"$paddingBottom",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}}}}}catch{}export{n as L};
