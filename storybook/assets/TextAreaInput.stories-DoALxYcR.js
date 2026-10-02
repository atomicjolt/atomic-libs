import{T}from"./helpers-KKeMmUAi.js";import{g as R}from"./cssprops-DECR0Nbg.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as A}from"./index-BCtMShv3.js";import{c as L}from"./index-EJ0-2BeM.js";import{g as _}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as N}from"./mixins-CcgEHb9c.js";import{T as F}from"./TextField.component-N2s51dq8.js";import{L as S}from"./Label.component-BWEgwSKL.js";import{M as j}from"./Message.component-CZ4-z7fs.js";import{T as k}from"./TextArea.component-Cijy9zSp.js";import{E as C}from"./ErrorMessage.component-DBytMZ-8.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useTextField-CQoa95kJ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BY6BQbOl.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useFormValidation-BfT1egZx.js";import"./useFormValidationState-CONlS5Wo.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./useRenderProps-CP918x9p.js";import"./Label.context-CCD9MV1z.js";import"./index-CKqsTkFX.js";import"./Message.context-Dd4cT4rL.js";import"./ErrorMessage.context-AYC8UfzI.js";import"./ComboInput.context-_UpYbRGR.js";import"./Input.context-Cyaw3phX.js";import"./TextArea.context-AnZs5gnW.js";import"./SkeletonLoader.component-q75MwwfP.js";import"./context-z6pb9OkM.js";import"./Loading.context-C7II2W1n.js";const E=_(F)`
  ${N.FieldStatus}

  --size-sm-x: 200px;
  --size-md-x: 300px;
  --size-lg-x: 600px;

  --size-sm-y: 100px;
  --size-md-y: 200px;
  --size-lg-y: 300px;

  &.is-small {
    width: var(--size-sm-x);
    min-height: var(--size-sm-y);
    --textara-height: calc(var(--size-sm-y) - 21px);
  }

  &.is-medium {
    width: var(--size-md-x);
    min-height: var(--size-md-y);
    --textarea-height: calc(var(--size-md-y) - 21px);
  }

  &.is-large {
    width: var(--size-lg-x);
    min-height: var(--size-lg-y);
    --textarea-height: calc(var(--size-lg-y) - 21px);
  }

  &.is-full {
    width: var(--size-full-x);
    min-height: var(--size-full-y);
    --textarea-height: calc(var(--size-full-y) - 21px);
  }

  &[data-resize="horizontal"] textarea {
    resize: horizontal;
  }

  &[data-resize="vertical"] textarea {
    resize: vertical;
  }

  &[data-resize="both"] textarea {
    resize: both;
  }
`,t=A.forwardRef(function(f,h){const{size:b="medium",resize:n="both",label:l,error:y,message:o,className:g,isDisabled:v,isInvalid:x,isRequired:z,isReadOnly:q,rows:V,cols:w,...I}=f;return e.jsxs(E,{className:L("aje-input__textarea",g),size:b,isDisabled:v,isInvalid:x,isRequired:z,isReadOnly:q,"data-resize":n==="none"?void 0:n,...I,children:[l&&e.jsx(S,{children:l}),o&&e.jsx(j,{children:o}),e.jsx(k,{ref:h,rows:V,cols:w}),e.jsx(C,{children:y})]})});try{t.displayName="TextAreaInput",t.__docgenInfo={description:"Textarea Component. Accepts a `ref`",displayName:"TextAreaInput",props:{resize:{defaultValue:null,description:"The user is given the ability to resize the input",name:"resize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number | undefined"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number | undefined"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string | undefined"}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}try{TextAreaInputcomponent.displayName="TextAreaInputcomponent",TextAreaInputcomponent.__docgenInfo={description:"Textarea Component. Accepts a `ref`",displayName:"TextAreaInputcomponent",props:{resize:{defaultValue:null,description:"The user is given the ability to resize the input",name:"resize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number | undefined"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number | undefined"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string | undefined"}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}const Re={title:"Inputs/User Input/TextAreaInput",component:t,parameters:{cssprops:R("Input","Textarea")},argTypes:{...T,onChange:{action:"changed",table:{category:"Events"}}}},a={args:{defaultValue:"Textarea content",resize:"both",size:"full",label:"Textarea label",message:"1000 characters"}},i={args:{...a.args,isLoading:!0,loadingLabel:"Loading"}};var s,d,u;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    defaultValue: "Textarea content",
    resize: "both",
    size: "full",
    label: "Textarea label",
    message: "1000 characters"
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Ae=["Primary","Loading"];export{i as Loading,a as Primary,Ae as __namedExportsOrder,Re as default};
