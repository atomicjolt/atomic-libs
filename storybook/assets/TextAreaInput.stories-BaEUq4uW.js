import{d as P,e as A}from"./helpers-tUmR_xN7.js";import{g as w,R as q,j as e,X as V,i as F}from"./iframe-CGPW5dgX.js";import{c as L}from"./index-BjoBGrPA.js";import{m as S}from"./mixins-BJuiWlrm.js";import{T as R}from"./TextField.component-DJemlHOu.js";import{L as _}from"./Label.component-Bo8kkSzq.js";import{M as j}from"./Message.component-CIEamcUq.js";import{T as D}from"./TextArea.component-CtqikNUg.js";import{E}from"./ErrorMessage.component-DUCD1jzH.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./preload-helper-Dp1pzeXC.js";import"./useTextField-CPDUiJax.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-mO407CKi.js";import"./useField-DXQ2XZid.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useFormValidation-hpNb-DuC.js";import"./useFormValidationState-CWonILzS.js";import"./Field.styles-CxKAGZMW.js";import"./Provider-CKCHWQEo.js";import"./useRenderProps-B7rIWDyP.js";import"./Label.context-D58S6_wU.js";import"./index-C0dagnaq.js";import"./Message.context-D_Dpg15a.js";import"./ErrorMessage.context-tIEpfdG1.js";import"./ComboInput.context-3NxJI3U3.js";import"./Input.context-DET8yoFh.js";import"./TextArea.context-C9KYZsFH.js";import"./SkeletonLoader.component-DalY9QZY.js";import"./context-CLSG1ylv.js";import"./Loading.context-EUscm4UA.js";const M=w(R)`
  ${S.FieldStatus}

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
`,s=q.forwardRef(function(f,g){const{size:b="medium",resize:i="both",label:r,error:h,message:l,className:x,isDisabled:y,isInvalid:v,isRequired:T,isReadOnly:z,rows:I,cols:N,...k}=f;return e.jsxs(M,{className:L("aje-input__textarea",x),size:b,isDisabled:y,isInvalid:v,isRequired:T,isReadOnly:z,"data-resize":i==="none"?void 0:i,...k,children:[r&&e.jsx(_,{children:r}),l&&e.jsx(j,{children:l}),e.jsx(D,{ref:g,rows:I,cols:N}),e.jsx(E,{children:h})]})});try{s.displayName="TextAreaInput",s.__docgenInfo={description:"Textarea Component. Accepts a `ref`",displayName:"TextAreaInput",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Inputs/TextAreaInput/TextAreaInput.component.tsx",methods:[],props:{resize:{defaultValue:{value:'"both"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/TextAreaInput/TextAreaInput.component.tsx",name:"TextAreaInputProps"}],description:"The user is given the ability to resize the input",name:"resize",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/TextAreaInput/TextAreaInput.component.tsx",name:"TextAreaInputProps"},required:!1,tags:{default:'"both"'},type:{name:"enum",raw:'"none" | "both" | "horizontal" | "vertical"',value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},rows:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/TextAreaInput/TextAreaInput.component.tsx",name:"TextAreaInputProps"}],description:"Number of visible text lines (the `rows` attribute of the textarea)",name:"rows",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/TextAreaInput/TextAreaInput.component.tsx",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"number"}},cols:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/TextAreaInput/TextAreaInput.component.tsx",name:"TextAreaInputProps"}],description:"Visible width in average character widths (the `cols` attribute of the textarea)",name:"cols",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/TextAreaInput/TextAreaInput.component.tsx",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"number"}},id:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"}],description:"Unique id for the component",name:"id",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"},required:!1,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"}],description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"},required:!1,tags:{},type:{name:"Argument | Argument[]"}},size:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"}],description:"Size of the component",name:"size",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"},required:!1,tags:{},type:{name:"enum",raw:"ExtendedSize",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpTextProps"}],description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpTextProps"},required:!1,tags:{},type:{name:"ReactNode"}},message:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"For additional information (ex. date format mm/dd/yy)",name:"message",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}},error:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"Error message for the field",name:"error",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}},isDisabled:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field cannot be interacted with, should be de-emphasized in the UI",name:"isDisabled",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-disabled]"},type:{name:"boolean"}},isReadOnly:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field cannot be modified. Should be made to not look like a editable field",name:"isReadOnly",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-readonly]"},type:{name:"boolean"}},isRequired:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field must be interacted with. Should be indicated in the UI",name:"isRequired",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-required]"},type:{name:"boolean"}},isInvalid:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed",name:"isInvalid",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-invalid]"},type:{name:"boolean"}},name:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldDomProps"}],description:"Name of the Field",name:"name",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldDomProps"},required:!1,tags:{},type:{name:"string"}},isLoading:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,tags:{},type:{name:"boolean"}},loadingLabel:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:"aria accessibility label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const ze={title:"Inputs/User Input/TextAreaInput",component:s,parameters:{cssprops:{input:F,textarea:V}},argTypes:{...A,...P,size:{table:{defaultValue:{summary:'"medium"'}}},onChange:{action:"changed",description:"Called with the new value when the text changes",table:{category:"Events"}}}},a={args:{defaultValue:"Textarea content",size:"full",label:"Textarea label",message:"1000 characters"}},t={args:{...a.args,isLoading:!0,loadingLabel:"Loading"}},Ie=["Primary","Loading"];var o,n,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    defaultValue: "Textarea content",
    size: "full",
    label: "Textarea label",
    message: "1000 characters"
  }
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{t as Loading,a as Primary,Ie as __namedExportsOrder,ze as default};
