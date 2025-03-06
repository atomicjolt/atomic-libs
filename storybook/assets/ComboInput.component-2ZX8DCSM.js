import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{R as m}from"./index-DJO9vBfz.js";import{S as p}from"./ComboInput.styles-x3aI4rV_.js";import{u as c}from"./index-CHPAqjqs.js";import{C as d}from"./ComboInput.context-yOfG-dCd.js";import{u as f}from"./useRenderProps-Bk8BH60l.js";const i=m.forwardRef(function(e,t){[e,t]=c(d,e,t);const{className:h,padding:r,children:b,inputRef:n,...u}=e,o=f({componentClassName:"aje-combo-input",...e});return l.jsx(p,{ref:t,onClick:()=>{var a;return(a=n==null?void 0:n.current)==null?void 0:a.focus()},$paddingSide:r,...u,...o,children:o.children})});try{i.displayName="ComboInput",i.__docgenInfo={description:`ComboInput is a wrapper component that allows you present a input-like component
that can be clicked to focus the actual input element. It is useful for creating
custom input components that are not actually input elements & inputs that include
other elements like icons or buttons.`,displayName:"ComboInput",props:{inputRef:{defaultValue:null,description:"ref to the input element that this virtual input should focus when clicked\nWhen `ComboInput` is used within a `Field` component, this prop is automatically\nprovided",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"both"'}]}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}}}}}catch{}export{i as C};
