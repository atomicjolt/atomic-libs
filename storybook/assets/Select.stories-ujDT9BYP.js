import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{I}from"./helpers-fQWfWkgV.js";import{R as _}from"./index-DJO9vBfz.js";import{u as R}from"./util-o2DwfYmN.js";import{d as v}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as c}from"./mixins-D6ZuOvce.js";import{u as N}from"./useRenderProps-Bk8BH60l.js";import{L as w}from"./Label.component-BZ-jUZHh.js";import{M as z}from"./Message.component-DWiHyL-P.js";import{E as j}from"./ErrorMessage.component-DPAek6pW.js";import"./layout-qoR695S7.js";import"./utils-2VFVy79V.js";import"./Collection-DjPHrlSR.js";import"./CollectionBuilder-JuF9vAdV.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useObjectRef-CjtaasUj.js";import"./index-Co2NqHf1.js";import"./index-i5X67GZP.js";import"./Label.context-BBG6Xa_C.js";import"./Message.context-DZr9m1_6.js";import"./ErrorMessage.context-Buhm2lRy.js";const C=v.div`
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
`,F=v.select`
  ${c.Regular}
  --input-width-sm: 120px;
  --input-width-md: 240px;
  --input-width-lg: 360px;

  ${c.Border("input")}
  background-color: var(--neutral50);
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
`,i=_.forwardRef((a,y)=>{const[g,o,s]=R("select",["select","message","error"]),{children:k,onChange:t,size:A="medium",label:d,error:r,message:u,isDisabled:q=!1,isRequired:S=!1,isInvalid:n=!1,className:E,id:m=g,...x}=a,p=N({componentClassName:"aje-input__select",...a,selectors:{"data-disabled":q,"data-required":S,"data-invalid":n}});return e.jsxs("div",{...p,children:[d&&e.jsx(w,{htmlFor:m,children:d}),u&&e.jsx(z,{id:o,children:u}),e.jsx(C,{children:e.jsx(F,{id:m,"aria-describedby":n&&r?s:o,onChange:V=>t==null?void 0:t(V.target.value),ref:y,...x,children:p.children})}),n&&r&&e.jsx(j,{id:s,children:r})]})});try{i.displayName="Select",i.__docgenInfo={description:"Select Component. Simple wrapper around native `<select>`",displayName:"Select",props:{error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: SelectValue) => void"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}}}}}catch{}try{Selectcomponent.displayName="Selectcomponent",Selectcomponent.__docgenInfo={description:"Select Component. Simple wrapper around native `<select>`",displayName:"Selectcomponent",props:{error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: SelectValue) => void"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}}}}}catch{}const re={title:"Dropdowns/Selection/Select",component:i,parameters:{layout:"centered"},argTypes:{value:{control:"select",options:["value1","value2","value3"]},...I}},l={args:{label:"Select label",size:"medium",children:[e.jsx("option",{value:"value1",children:"Option 1"},"1"),e.jsx("option",{value:"value2",children:"Option 2"},"2"),e.jsx("option",{value:"value3",children:"Option 3"},"3")]}};var f,h,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const ne=["Primary"];export{l as Primary,ne as __namedExportsOrder,re as default};
