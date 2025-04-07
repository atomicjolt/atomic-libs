import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as x}from"./helpers-DgUU647_.js";import{R as P,r as R}from"./index-DmM0KDA7.js";import{$ as q}from"./useField-BhG43OVF.js";import{P as M}from"./Provider-op_UCnZE.js";import{S as C}from"./Field.styles-B11u_h4j.js";import{u as I}from"./useRenderProps-BzxgHqRb.js";import{L as f}from"./Label.component-BzbmvXGx.js";import{L as E}from"./Label.context-8YwVGsEO.js";import{M as _}from"./Message.context-4_rHhebz.js";import{E as j}from"./ErrorMessage.context-D-RNFvKn.js";import{C as V}from"./ComboInput.context-Di7U2yCG.js";import{I as k}from"./Input.context-BTEI3GdY.js";import{M as L}from"./Message.component-CufFXYCC.js";import{I as N}from"./Input.component-BSOSCpih.js";import{E as S}from"./ErrorMessage.component-CS4OzHGN.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./index-CLYxO_qr.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-Ci2MViY1.js";import"./Collection-CfmUX7eJ.js";import"./CollectionBuilder-BOiBnYCj.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./index-SU87TpAq.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./mixins-CgZ-Dp8B.js";import"./index-CrEZfznw.js";import"./index-CqJC2f1M.js";function n(r){const{isInvalid:t,isDisabled:o,isReadOnly:s,isRequired:d,name:y}=r,l=I({...r,componentClassName:"aje-field",values:{isInvalid:t,isDisabled:o,isReadOnly:s,isRequired:d},selectors:{"data-invalid":t,"data-disabled":o,"data-readonly":s,"data-required":d}}),b=P.Children.toArray(l.children).find(a=>typeof a=="object"&&(a==null?void 0:a.type)===f),{labelProps:h,descriptionProps:g,errorMessageProps:F,fieldProps:v}=q({...r,label:b}),m=R.useRef(null);return e.jsx(C,{...l,children:e.jsx(M,{values:[[E.Provider,h],[_.Provider,g],[j.Provider,{...F,isInvalid:t}],[V.Provider,{inputRef:m}],[k.Provider,{...v,disabled:o,readOnly:s,name:y,ref:m}]],children:l.children})})}try{n.displayName="Field",n.__docgenInfo={description:`Provides the accessbility implementation for a
form field and its associated label, error message, and description.

Note that when using \`Field\` you manage the state of the input directly.
You may opt to use one of the other more specific field components if they suite your needs.`,displayName:"Field",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"full"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldRenderProps>"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}const ge={title:"Fields/Field",component:n,argTypes:{...x}},i={args:{children:[e.jsx(f,{children:"Label"},"label"),e.jsx(L,{children:"Message"},"message"),e.jsx(N,{},"input"),e.jsx(S,{children:"Error Message"},"error")]}};var p,u,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: [<FieldLabel key="label">Label</FieldLabel>, <FieldMessage key="message">Message</FieldMessage>, <FieldInput key="input" />, <FieldErrorMessage key="error">Error Message</FieldErrorMessage>]
  }
}`,...(c=(u=i.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const Fe=["Default"];export{i as Default,Fe as __namedExportsOrder,ge as default};
