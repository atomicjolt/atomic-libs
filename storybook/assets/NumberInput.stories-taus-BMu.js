import{T as O}from"./helpers-DOVaRqs_.js";import{g as A}from"./cssprops-DECR0Nbg.js";import{fn as C}from"./index-BgJgh-x_.js";import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as z}from"./index-BCtMShv3.js";import{c as P}from"./index-EJ0-2BeM.js";import{F as U}from"./FloatingFieldInputWrapper-DuMUMYG2.js";import{a as k}from"./Inputs.styles-DNIleq-q.js";import{C as D}from"./ComboInput.component-C_PrQCWE.js";import{I as W}from"./Input.component-Bd48eTS1.js";import{G as B}from"./Group.component-B0CNXgbj.js";import{I as l}from"./IconButton.component-DYMySrnG.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-C2kgHJSW.js";import"./CollectionBuilder-4ZFsDDvv.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./Label.component-Mdsn2Vg-.js";import"./mixins-XviowZ_6.js";import"./index-C_lK3xe_.js";import"./Label.context-Bxyvy4yx.js";import"./useRenderProps-CP918x9p.js";import"./Message.component-LTtkPuHW.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.component-DXRHu5W2.js";import"./ErrorMessage.context-B4seO6gR.js";import"./ComboInput.styles-GNwh4bFc.js";import"./TextField.component-yvFsMedy.js";import"./useTextField-D4_p2q36.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-GcAVnfXr.js";import"./useControlledState-vzCMHZvt.js";import"./useField-D8gfBVj0.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useFormValidation-CnIG3AAh.js";import"./useFormValidationState-CONlS5Wo.js";import"./Field.styles-D_hvWyI3.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-Dhqk-dVH.js";import"./Input.context-kYvBQ720.js";import"./TextArea.context-C8nZtAtq.js";import"./NumberField.component-D5t-dXAh.js";import"./useFocusWithin-CUff8KyO.js";import"./usePress-DRrD1IP8.js";import"./useEvent-CI_xZcmG.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton--vl_B8TW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-e0zTg6D5.js";import"./number-nHrFdSb-.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./index-BW0EyjKD.js";import"./Icons.styles-D-JqKhr6.js";import"./BaseButton-BqyEzw-_.js";import"./useFocusRing-C-zHDrKK.js";import"./useButton-5e9SJH5K.js";import"./useLink-CA4JS4F-.js";import"./SpinnerLoader.component-CZvQLF64.js";import"./Loader.component-wPnnWLbJ.js";import"./Flex.component-DQOBdO96.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-CKgxLGDu.js";import"./ProgressCircle.component-BOqryRrp.js";import"./colors-x_YFGAop.js";const m=z.forwardRef((t,E)=>{const{label:q,size:S="medium",error:_,message:w,className:R,variant:a="default",...j}=t;return r.jsx(k,{size:S,className:P(R,{[`aje-input--${a}`]:a}),"data-float":t.value!==void 0&&t.value!==null&&a==="floating"||void 0,...j,children:r.jsx(U,{floating:a==="floating",label:q,message:w,error:_,children:r.jsxs(D,{padding:"both",children:[r.jsx(W,{}),r.jsxs(B,{$direction:"column",isMerged:!0,children:[r.jsx(l,{slot:"increment",icon:"arrow_drop_up",variant:"content",size:"small"}),r.jsx(l,{slot:"decrement",icon:"arrow_drop_down",variant:"content",size:"small"})]})]})})})});try{m.displayName="NumberInput",m.__docgenInfo={description:"Input for number values. Fowards a `ref` to the internal input element",displayName:"NumberInput",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"default" | "floating">'}}}}}catch{}const mr={title:"Inputs/User Input/NumberInput",component:m,parameters:{layout:"centered",cssprops:A("Input")},argTypes:{...O,variant:{options:["default","floating"],description:"Variant of the input"},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled",table:{category:"Common"}}}},e={args:{onChange:C(),size:"medium",label:"Number input"}},o={args:{...e.args,minValue:0,maxValue:100}},i={args:{...e.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},n={args:{...e.args,defaultValue:.5,formatOptions:{style:"percent"}}},s={args:{...e.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var p,u,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    onChange: fn(),
    size: "medium",
    label: "Number input"
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,f,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minValue: 0,
    maxValue: 100
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,b,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "currency",
      currency: "USD"
    }
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,V,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 0.5,
    formatOptions: {
      style: "percent"
    }
  }
}`,...(I=(V=n.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var N,x,F;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "unit",
      unit: "mile-per-hour"
    }
  }
}`,...(F=(x=s.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const lr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];export{i as FormatAsCurrency,n as FormatAsPercent,s as FormatAsUnit,e as Primary,o as WithBounds,lr as __namedExportsOrder,mr as default};
