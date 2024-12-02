import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{I}from"./helpers-DsiJys5i.js";import{R as N}from"./index-DJO9vBfz.js";import{c as R}from"./index-i5X67GZP.js";import{u as w}from"./util-o2DwfYmN.js";import{d as h}from"./styled-components.browser.esm-WCay-hu9.js";import{m as z}from"./mixins-TlkgTuSN.js";import{F as j}from"./FieldWrapper-CecreuUM.js";import{L as F}from"./Label.component-5ShF5vdw.js";import{M as k}from"./Message.component-DgHLwaZZ.js";import{E as C}from"./ErrorMessage.component-DYIqQ3G7.js";import"./CollectionBuilder-Vf4TV1hX.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Section-BBepoPM4.js";import"./index-CXdyvu6V.js";import"./useObjectRef-C4RVQRRU.js";import"./Label.context-Cwics8Eu.js";import"./useRenderProps-BqJZ5b79.js";import"./Message.context-DfHBDHY_.js";import"./ErrorMessage.context-D3nT9BuV.js";const A=h.div`
  position: relative;
  display: inline-block;

  &::after {
    content: "\\E5C5";
    font-family: "Material Icons";
    position: absolute;
    right: 8px;
    bottom: 8px;
    font-size: 2.4rem;
    line-height: 1;
    color: var(--neutral600);
    pointer-events: none;
  }
`,E=h.select`
  ${z.Regular}
  --input-width-sm: 120px;
  --input-width-md: 240px;
  --input-width-lg: 360px;

  border: 1px solid var(--input-border-clr);
  background-color: var(--neutral50);
  border-radius: 5px;
  min-height: 40px;
  width: 100%;
  padding: 10px 40px 10px 12px;
  font-size: 1.6rem;
  line-height: 1;
  color: var(--text-clr);
  -webkit-appearance: none;
  -moz-appearance: none;
  &::-ms-expand {
    display: none;
  }

  &:focus {
    border-color: var(--outline-clr-primary);
    outline: var(--input-outline);
  }
`,n=N.forwardRef((l,b)=>{const[v,o,s]=w("select",["select","message","error"]),{children:y,onChange:t,size:g="medium",label:d,error:r,message:u,isDisabled:q=!1,isRequired:x=!1,isInvalid:i=!1,className:S,id:m=v,...V}=l;return e.jsxs(j,{className:R("aje-input__select",S),size:g,isInvalid:i,isRequired:x,isDisabled:q,children:[d&&e.jsx(F,{htmlFor:m,children:d}),u&&e.jsx(k,{id:o,children:u}),e.jsx(A,{className:"aje-input__select",children:e.jsx(E,{id:m,"aria-describedby":i&&r?s:o,onChange:_=>t==null?void 0:t(_.target.value),ref:b,...V,children:y})}),i&&r&&e.jsx(C,{id:s,children:r})]})});try{n.displayName="Select",n.__docgenInfo={description:"Select Component. Simple wrapper around native `<select>`",displayName:"Select",props:{isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: SelectValue) => void"}}}}}catch{}try{Selectcomponent.displayName="Selectcomponent",Selectcomponent.__docgenInfo={description:"Select Component. Simple wrapper around native `<select>`",displayName:"Selectcomponent",props:{isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: SelectValue) => void"}}}}}catch{}const re={title:"Dropdowns/Selection/Select",component:n,parameters:{layout:"centered"},argTypes:{value:{control:"select",options:["value1","value2","value3"]},...I}},a={args:{label:"Select label",size:"medium",children:[e.jsx("option",{value:"value1",children:"Option 1"},"1"),e.jsx("option",{value:"value2",children:"Option 2"},"2"),e.jsx("option",{value:"value3",children:"Option 3"},"3")]}};var p,c,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Select label",
    size: "medium",
    children: [<option value="value1" key="1">
        Option 1
      </option>, <option value="value2" key="2">
        Option 2
      </option>, <option value="value3" key="3">
        Option 3
      </option>]
  }
}`,...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const ie=["Primary"];export{a as Primary,ie as __namedExportsOrder,re as default};
