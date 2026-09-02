import{T as O}from"./helpers-DWUIqmOd.js";import{g as z}from"./cssprops-DECR0Nbg.js";import{fn as A}from"./index-BgLytPr-.js";import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as C}from"./index-BCtMShv3.js";import{c as P}from"./index-EJ0-2BeM.js";import{F as U}from"./FloatingFieldInputWrapper-Cb5smU3S.js";import{a as k}from"./Inputs.styles-LgvSP85h.js";import"./index-CxJiuIRp.js";import{C as D}from"./ComboInput.component-CUBhlBPz.js";import{I as W}from"./Input.component-Bn_wIqOT.js";import{G as B}from"./Group.component-DjERy5u8.js";import{I as l}from"./IconButton.component-Cw9Mlyc_.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./index-MEy1pH_-.js";import"./index-vGRGFXvb.js";import"./index-B-ANkEne.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-Km3Ox9s4.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Label.component--VO1UjRS.js";import"./mixins-CcgEHb9c.js";import"./index-CsiUWFDz.js";import"./Label.context-BbpE5KUK.js";import"./useRenderProps-CP918x9p.js";import"./Message.component-A6ZF7Bcz.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.component-Dahdvhcn.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./ComboInput.styles-VPv8l2aB.js";import"./TextField.component-CmIPRo5u.js";import"./useTextField-CQoa95kJ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BY6BQbOl.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useFormValidation-BfT1egZx.js";import"./useFormValidationState-CONlS5Wo.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-BgrINUmq.js";import"./Input.context-CDXu9Ele.js";import"./TextArea.context-C6JAP7JO.js";import"./NumberField.component-BcvPnC1l.js";import"./useFocusWithin-BJ0-_hiU.js";import"./usePress-CqXh5MnK.js";import"./useEvent-CeKNPFU-.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-CEXF7CxP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-BxdzJgC_.js";import"./number-nHrFdSb-.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./BaseButton-D0yT_APa.js";import"./useFocusRing-DIS5Kyrs.js";import"./useButton-9RZc7-Gk.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-D438e5kd.js";import"./Loader.component-1e-F28hS.js";import"./Flex.component-C2PgiZIH.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-B7_86uv1.js";import"./ProgressCircle.component-ddrf-S0A.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-lQlqJgWC.js";import"./Icons.styles-qcj_pyb3.js";const s=C.forwardRef((m,E)=>{const{label:q,size:S="medium",error:_,message:w,className:R,variant:i="default",...j}=m;return r.jsx(k,{size:S,className:P(R,{[`aje-input--${i}`]:i}),...j,children:r.jsx(U,{floating:i==="floating",label:q,message:w,error:_,children:r.jsxs(D,{padding:"both",children:[r.jsx(W,{}),r.jsxs(B,{$direction:"column",isMerged:!0,style:{"--btn-icon-size":"1.9rem"},children:[r.jsx(l,{slot:"increment",icon:"arrow_drop_up",variant:"content",size:"small"}),r.jsx(l,{slot:"decrement",icon:"arrow_drop_down",variant:"content",size:"small"})]})]})})})});try{s.displayName="NumberInput",s.__docgenInfo={description:"Input for number values. Fowards a `ref` to the internal input element",displayName:"NumberInput",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"default" | "floating"> | undefined'}}}}}catch{}const cr={title:"Inputs/User Input/NumberInput",component:s,parameters:{layout:"centered",cssprops:z("Input")},argTypes:{...O,variant:{options:["default","floating"],description:"Variant of the input"},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled",table:{category:"Common"}}}},e={args:{onChange:A(),size:"medium",label:"Number input"}},t={args:{...e.args,minValue:0,maxValue:100}},a={args:{...e.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},o={args:{...e.args,defaultValue:.5,formatOptions:{style:"percent"}}},n={args:{...e.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var p,u,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    onChange: fn(),
    size: "medium",
    label: "Number input"
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,f,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minValue: 0,
    maxValue: 100
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,b,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "currency",
      currency: "USD"
    }
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var V,v,I;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 0.5,
    formatOptions: {
      style: "percent"
    }
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var N,x,F;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "unit",
      unit: "mile-per-hour"
    }
  }
}`,...(F=(x=n.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const fr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];export{a as FormatAsCurrency,o as FormatAsPercent,n as FormatAsUnit,e as Primary,t as WithBounds,fr as __namedExportsOrder,cr as default};
