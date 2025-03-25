import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as V}from"./helpers-CVUqcLcb.js";import{N as s}from"./NumberField.component-C8kgEaHb.js";import{L as j}from"./Label.component-Cjxd55tP.js";import{M as E}from"./Message.component-B6INgsEF.js";import{G as O}from"./Group.component-DclGvoAD.js";import{I as N}from"./Input.component-BZk457BT.js";import{E as P}from"./ErrorMessage.component-Bw4NU7_y.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./index-DmM0KDA7.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-Blx8idkz.js";import"./CollectionBuilder-C8aBQCuV.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useFocusable-DDF3Tgcq.js";import"./useObjectRef-BMBYa31u.js";import"./SSRProvider-nIDwi1ZO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BZUjp8ic.js";import"./useFormValidationState-CKAS44yz.js";import"./useFocusWithin-ypR2cHkl.js";import"./usePress-BejIIMCm.js";import"./useEvent-DX5YI6yT.js";import"./useTextField-DhS2yjr8.js";import"./useControlledState-sJfMLWrs.js";import"./useField-BmPvDaI7.js";import"./useLabel-C1USB2dP.js";import"./useLabels-DqNC8NnF.js";import"./useFormValidation-Dk9gOIEC.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./context-BF7eBGFA.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-DcXDMVC3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Field.styles-B11u_h4j.js";import"./mixins-CgZ-Dp8B.js";import"./Provider-op_UCnZE.js";import"./ProgressCircle.component-DE6AAkbz.js";import"./index-9MQGFWEg.js";import"./colors-x_YFGAop.js";import"./Label.context-BCDtyvV0.js";import"./Message.context-D6YW8C9h.js";import"./ErrorMessage.context-B9WfFUFn.js";import"./ComboInput.context-U0WiImMe.js";import"./Input.context-CrdQundv.js";import"./IconButton.component-8BWc45Fv.js";import"./index-DklmvzLu.js";import"./Icons.styles-D2L4nNgu.js";import"./Button.component-CO_EKNnI.js";import"./useFocusRing-CMFCJy1v.js";import"./useButton-EuBryRSZ.js";import"./useLink-ytEWay4y.js";import"./SpinnerLoader.component-C3aOYr0J.js";import"./Loader.component-CkFYGCWL.js";import"./Flex.component-CLGTqHVr.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-CXWvSCLl.js";s.displayName="NumberField";const Gr={title:"Fields/NumberField",component:s,parameters:{layout:"centered"},argTypes:{...V,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(j,{children:"Label"},"label"),e.jsx(E,{children:"Message"},"message"),e.jsxs(O,{isMerged:!0,children:[e.jsx(s.DecrementButton,{icon:"remove"}),e.jsx(N,{},"input"),e.jsx(s.IncrementButton,{icon:"add"})]},"group"),e.jsx(P,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},i={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: [<FieldLabel key="label">Label</FieldLabel>, <FieldMessage key="message">Message</FieldMessage>, <Group isMerged key="group">
        <NumberField.DecrementButton icon="remove" />
        <FieldInput key="input" />
        <NumberField.IncrementButton icon="add" />
      </Group>, <FieldErrorMessage key="error">Error Message</FieldErrorMessage>]
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var l,u,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minValue: 0,
    maxValue: 10
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,g,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "currency",
      currency: "USD"
    }
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,b,F;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 0.5,
    formatOptions: {
      style: "percent"
    }
  }
}`,...(F=(b=a.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var h,x,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "unit",
      unit: "mile-per-hour"
    }
  }
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const Ur=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];export{t as FormatAsCurrency,a as FormatAsPercent,i as FormatAsUnit,r as Primary,o as WithBounds,Ur as __namedExportsOrder,Gr as default};
