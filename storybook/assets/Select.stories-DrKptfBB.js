import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as w}from"./helpers-KKeMmUAi.js";import{R as I}from"./index-BCtMShv3.js";import{u as _}from"./util-DYWyeGCs.js";import{g as y}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as c}from"./mixins-CcgEHb9c.js";import{u as R}from"./useRenderProps-CP918x9p.js";import{L as N}from"./Label.component-BWEgwSKL.js";import{M as z}from"./Message.component-CZ4-z7fs.js";import{E as j}from"./ErrorMessage.component-DBytMZ-8.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-EJ0-2BeM.js";import"./index-CKqsTkFX.js";import"./Label.context-CCD9MV1z.js";import"./filterDOMProps-CeZl_uWj.js";import"./Message.context-Dd4cT4rL.js";import"./ErrorMessage.context-AYC8UfzI.js";const L=y.div`
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
`,C=y.select`
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
`,r=I.forwardRef((a,v)=>{const[g,o,d]=_("select",["select","message","error"]),{children:F,onChange:l,size:k="medium",label:s,error:i,message:u,isDisabled:q=!1,isRequired:S=!1,isInvalid:t=!1,className:A,id:m=g,...x}=a,p=R({componentClassName:"aje-input__select",...a,selectors:{"data-disabled":q,"data-required":S,"data-invalid":t}});return e.jsxs("div",{...p,children:[s&&e.jsx(N,{htmlFor:m,children:s}),u&&e.jsx(z,{id:o,children:u}),e.jsx(L,{children:e.jsx(C,{id:m,"aria-describedby":t&&i?d:o,onChange:V=>l==null?void 0:l(V.target.value),ref:v,...x,children:p.children})}),t&&i&&e.jsx(j,{id:d,children:i})]})});try{r.displayName="Select",r.__docgenInfo={description:"Select Component. Simple wrapper around native `<select>`",displayName:"Select",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string | undefined"}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: SelectValue) => void) | undefined"}}}}}catch{}try{Selectcomponent.displayName="Selectcomponent",Selectcomponent.__docgenInfo={description:"Select Component. Simple wrapper around native `<select>`",displayName:"Selectcomponent",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string | undefined"}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: SelectValue) => void) | undefined"}}}}}catch{}const oe={title:"Dropdowns/Selection/Select",component:r,parameters:{layout:"centered"},argTypes:{value:{control:"select",options:["value1","value2","value3"]},...w}},n={args:{label:"Select label",size:"medium",children:[e.jsx("option",{value:"value1",children:"Option 1"},"1"),e.jsx("option",{value:"value2",children:"Option 2"},"2"),e.jsx("option",{value:"value3",children:"Option 3"},"3")]}};var f,h,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const de=["Primary"];export{n as Primary,de as __namedExportsOrder,oe as default};
