import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as V}from"./helpers-B5Ajgn2E.js";import{N as s}from"./NumberField.component-Dt_c_dU5.js";import{L as j}from"./Label.component-DfcWPA-J.js";import{M as E}from"./Message.component-FuO2yEmk.js";import{G as O}from"./Group.component-CCh4AWKN.js";import{I as N}from"./Input.component-BsfNbtH0.js";import{E as P}from"./ErrorMessage.component-ukBp7bMH.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./index-BCtMShv3.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidationState-CONlS5Wo.js";import"./useFocusWithin-BshFo8_g.js";import"./usePress-B9aiz4Kw.js";import"./useEvent-CeKNPFU-.js";import"./useTextField-CQoa95kJ.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useFormValidation-BfT1egZx.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-LE97PPA9.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Field.styles-D_hvWyI3.js";import"./mixins-XviowZ_6.js";import"./Provider-op_UCnZE.js";import"./index-D3soG6-v.js";import"./Button.component-CR9mri1v.js";import"./useFocusRing-CLjBjOxD.js";import"./useButton-nVeIkIqk.js";import"./useLink-FIfyncSu.js";import"./index-CsiUWFDz.js";import"./SpinnerLoader.component-D-tKw9E3.js";import"./Loader.component-D7Erho5g.js";import"./Flex.component-rrKmR1Yr.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-9SUCBX5x.js";import"./Spinner.component-Bslo7_jG.js";import"./ProgressCircle.component-OpnlU6y-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-Ca-Jxrbg.js";import"./Icons.styles-D-JqKhr6.js";import"./Label.context-BbpE5KUK.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./ComboInput.context-BgrINUmq.js";import"./Input.context-CDXu9Ele.js";s.displayName="NumberField";const Gr={title:"Fields/NumberField",component:s,parameters:{layout:"centered"},argTypes:{...V,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(j,{children:"Label"},"label"),e.jsx(E,{children:"Message"},"message"),e.jsxs(O,{isMerged:!0,children:[e.jsx(s.DecrementButton,{icon:"remove"}),e.jsx(N,{},"input"),e.jsx(s.IncrementButton,{icon:"add"})]},"group"),e.jsx(P,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},i={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
