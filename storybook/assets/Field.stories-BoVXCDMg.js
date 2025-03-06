import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{F as x}from"./helpers-CB0EgwPk.js";import{R as P,r as R}from"./index-DJO9vBfz.js";import{$ as q}from"./useField-DAe_M2wp.js";import{u as M}from"./useRenderProps-Bk8BH60l.js";import{P as C}from"./Provider-B9Eqn13H.js";import{S as I}from"./Field.styles-wtg9rJuP.js";import{L as f}from"./Label.component-DWUg6KQj.js";import{L as E}from"./Label.context-BY30H9b8.js";import{M as _}from"./Message.context-BF8cnA0i.js";import{E as j}from"./ErrorMessage.context-Cr_J9O6j.js";import{C as V}from"./ComboInput.context-yOfG-dCd.js";import{I as k}from"./Input.context-Cu61juEz.js";import{M as L}from"./Message.component-DuLpH4ma.js";import{I as N}from"./Input.component-aD7FwtmD.js";import{E as S}from"./ErrorMessage.component-NUTqPfNd.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./useLabel-CTphHQ-t.js";import"./useObjectRef-CA0MXmrf.js";import"./useLabels-6dTMP4oW.js";import"./index-i5X67GZP.js";import"./mixins-B7X2BZyR.js";import"./index-CHPAqjqs.js";function n(r){const{isInvalid:t,isDisabled:o,isReadOnly:s,isRequired:d,name:y}=r,l=M({...r,componentClassName:"aje-field",values:{isInvalid:t,isDisabled:o,isReadOnly:s,isRequired:d},selectors:{"data-invalid":t,"data-disabled":o,"data-readonly":s,"data-required":d}}),b=P.Children.toArray(l.children).find(a=>typeof a=="object"&&(a==null?void 0:a.type)===f),{labelProps:h,descriptionProps:g,errorMessageProps:F,fieldProps:v}=q({...r,label:b}),m=R.useRef(null);return e.jsx(I,{...l,children:e.jsx(C,{values:[[E.Provider,h],[_.Provider,g],[j.Provider,{...F,isInvalid:t}],[V.Provider,{inputRef:m}],[k.Provider,{...v,disabled:o,readOnly:s,name:y,ref:m}]],children:l.children})})}try{n.displayName="Field",n.__docgenInfo={description:`Provides the accessbility implementation for a
form field and its associated label, error message, and description.

Note that when using \`Field\` you manage the state of the input directly.
You may opt to use one of the other more specific field components if they suite your needs.`,displayName:"Field",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldRenderProps>"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}const ue={title:"Fields/Field",component:n,argTypes:{...x}},i={args:{children:[e.jsx(f,{children:"Label"},"label"),e.jsx(L,{children:"Message"},"message"),e.jsx(N,{},"input"),e.jsx(S,{children:"Error Message"},"error")]}};var p,u,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: [<FieldLabel key="label">Label</FieldLabel>, <FieldMessage key="message">Message</FieldMessage>, <FieldInput key="input" />, <FieldErrorMessage key="error">Error Message</FieldErrorMessage>]
  }
}`,...(c=(u=i.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const ce=["Default"];export{i as Default,ce as __namedExportsOrder,ue as default};
