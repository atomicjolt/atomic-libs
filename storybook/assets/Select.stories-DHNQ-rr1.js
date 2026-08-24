import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I}from"./helpers-Dck2pQ2O.js";import{R as _}from"./index-BCtMShv3.js";import{u as R}from"./util-DYWyeGCs.js";import{g as b}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as c}from"./mixins-CcgEHb9c.js";import{u as N}from"./useRenderProps-CP918x9p.js";import{L as w}from"./Label.component--VO1UjRS.js";import{M as z}from"./Message.component-A6ZF7Bcz.js";import{E as j}from"./ErrorMessage.component-Dahdvhcn.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-EJ0-2BeM.js";import"./index-CsiUWFDz.js";import"./Label.context-BbpE5KUK.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.context-PYwFF-7o.js";const C=b.div`
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
`,F=b.select`
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
`,r=_.forwardRef((a,y)=>{const[g,o,d]=R("select",["select","message","error"]),{children:k,onChange:n,size:A="medium",label:s,error:t,message:u,isDisabled:q=!1,isRequired:S=!1,isInvalid:i=!1,className:E,id:m=g,...x}=a,p=N({componentClassName:"aje-input__select",...a,selectors:{"data-disabled":q,"data-required":S,"data-invalid":i}});return e.jsxs("div",{...p,children:[s&&e.jsx(w,{htmlFor:m,children:s}),u&&e.jsx(z,{id:o,children:u}),e.jsx(C,{children:e.jsx(F,{id:m,"aria-describedby":i&&t?d:o,onChange:V=>n==null?void 0:n(V.target.value),ref:y,...x,children:p.children})}),i&&t&&e.jsx(j,{id:d,children:t})]})});try{r.displayName="Select",r.__docgenInfo={description:"Select Component. Simple wrapper around native `<select>`",displayName:"Select",props:{label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: SelectValue) => void) | undefined"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{Selectcomponent.displayName="Selectcomponent",Selectcomponent.__docgenInfo={description:"Select Component. Simple wrapper around native `<select>`",displayName:"Selectcomponent",props:{label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: SelectValue) => void) | undefined"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const re={title:"Dropdowns/Selection/Select",component:r,parameters:{layout:"centered"},argTypes:{value:{control:"select",options:["value1","value2","value3"]},...I}},l={args:{label:"Select label",size:"medium",children:[e.jsx("option",{value:"value1",children:"Option 1"},"1"),e.jsx("option",{value:"value2",children:"Option 2"},"2"),e.jsx("option",{value:"value3",children:"Option 3"},"3")]}};var f,h,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const oe=["Primary"];export{l as Primary,oe as __namedExportsOrder,re as default};
