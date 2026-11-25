import{g as c,R as j,j as e}from"./iframe-CGPW5dgX.js";import{j as a,d as D}from"./helpers-tUmR_xN7.js";import{u as F}from"./util-7dvZ73yi.js";import{m as r}from"./mixins-BJuiWlrm.js";import{S as z}from"./SkeletonLoader.component-DalY9QZY.js";import{u as C}from"./useRenderProps-B7rIWDyP.js";import{u as O}from"./Loading.context-EUscm4UA.js";import{L as M}from"./Label.component-Bo8kkSzq.js";import{M as E}from"./Message.component-CIEamcUq.js";import{E as H}from"./ErrorMessage.component-DUCD1jzH.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./index-BjoBGrPA.js";import"./context-CLSG1ylv.js";import"./index-C0dagnaq.js";import"./Label.context-D58S6_wU.js";import"./filterDOMProps-CeZl_uWj.js";import"./Message.context-D_Dpg15a.js";import"./ErrorMessage.context-tIEpfdG1.js";const T=c.div`
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
    color: var(--icon-clr-secondary);
    pointer-events: none;
  }
`,A=c.select`
  ${r.Regular}
  --input-width-sm: 120px;
  --input-width-md: 240px;
  --input-width-lg: 360px;

  ${r.Border("input")}
  background-color: var(--background-clr);
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
    border-color: var(--border-clr-focus);
    outline: var(--input-outline);
  }
`,W=c(z)`
  ${r.SizingX}
  display: block;
  max-width: 100%;
  height: var(--input-height, 40px);
`,m=j.forwardRef((s,w)=>{const[q,d,p]=F("select",["select","message","error"]),{children:U,onChange:o,size:I="medium",label:u,error:n,message:f,isDisabled:g=!1,isRequired:b=!1,isInvalid:i=!1,className:B,id:h=q,isLoading:J,loadingLabel:X,...V}=s,{isLoading:L,loadingLabel:R}=O(s),y=C({componentClassName:"aje-input__select",...s,selectors:{"data-disabled":g,"data-required":b,"data-invalid":i}});return e.jsxs("div",{...y,children:[u&&e.jsx(M,{htmlFor:h,children:u}),f&&e.jsx(E,{id:d,children:f}),L?e.jsx(W,{className:`is-${I}`,title:R,children:e.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"var(--input-border-radius)",ry:"var(--input-border-radius)"})}):e.jsx(T,{children:e.jsx(A,{id:h,disabled:g,required:b,"aria-invalid":i||void 0,"aria-describedby":i&&n?p:d,onChange:_=>o==null?void 0:o(_.target.value),ref:w,...V,children:y.children})}),i&&n&&e.jsx(H,{id:p,isInvalid:!0,children:n})]})});try{m.displayName="Select",m.__docgenInfo={description:"Select Component. Simple wrapper around native `<select>`",displayName:"Select",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Dropdowns/Select/Select.component.tsx",methods:[],props:{isDisabled:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field cannot be interacted with, should be de-emphasized in the UI",name:"isDisabled",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-disabled]"},type:{name:"boolean"}},id:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"}],description:"Unique id for the component",name:"id",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"},required:!1,tags:{},type:{name:"string"}},error:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"Error message for the field",name:"error",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}},size:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"}],description:"Size of the component",name:"size",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"},required:!1,tags:{},type:{name:"enum",raw:"ExtendedSize",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isLoading:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,tags:{},type:{name:"boolean"}},loadingLabel:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:"aria accessibility label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"}],description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"},required:!1,tags:{},type:{name:"Argument | Argument[]"}},onChange:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Dropdowns/Select/Select.component.tsx",name:"SelectProps"}],description:"Called with the newly selected option's value when the selection changes",name:"onChange",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Dropdowns/Select/Select.component.tsx",name:"SelectProps"},required:!1,tags:{},type:{name:"((value: SelectValue) => void)"}},isRequired:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field must be interacted with. Should be indicated in the UI",name:"isRequired",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-required]"},type:{name:"boolean"}},isInvalid:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed",name:"isInvalid",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-invalid]"},type:{name:"boolean"}},label:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpTextProps"}],description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpTextProps"},required:!1,tags:{},type:{name:"ReactNode"}},name:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldDomProps"}],description:"Name of the Field",name:"name",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldDomProps"},required:!1,tags:{},type:{name:"string"}},message:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"For additional information (ex. date format mm/dd/yy)",name:"message",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}const{placeholder:ye,isReadOnly:ve,...$}=a,Se={title:"Dropdowns/Selection/Select",component:m,parameters:{layout:"centered"},argTypes:{value:{control:"select",options:["value1","value2","value3"],description:"Value of the selected option (controlled). Passed to the native `<select>`."},...$,...D,size:{table:{defaultValue:{summary:'"medium"'}}},isDisabled:{...a.isDisabled,table:{...a.isDisabled.table,defaultValue:{summary:"false"}}},isRequired:{...a.isRequired,table:{...a.isRequired.table,defaultValue:{summary:"false"}}},isInvalid:{...a.isInvalid,table:{...a.isInvalid.table,defaultValue:{summary:"false"}}},id:{table:{defaultValue:{summary:"auto-generated"}}}}},t={args:{label:"Select label",children:[e.jsx("option",{value:"value1",children:"Option 1"},"1"),e.jsx("option",{value:"value2",children:"Option 2"},"2"),e.jsx("option",{value:"value3",children:"Option 3"},"3")]}},l={args:{...t.args,isInvalid:!0,error:"Please select an option"}},xe=["Primary","Invalid"];var v,S,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Select label",
    children: [<option value="value1" key="1">
        Option 1
      </option>, <option value="value2" key="2">
        Option 2
      </option>, <option value="value3" key="3">
        Option 3
      </option>]
  }
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var k,P,N;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    error: "Please select an option"
  }
}`,...(N=(P=l.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};export{l as Invalid,t as Primary,xe as __namedExportsOrder,Se as default};
