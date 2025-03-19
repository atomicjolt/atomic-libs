import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{G as V}from"./index-CEEE0kZq.js";import{F as j}from"./helpers-DIZg5bA6.js";import{N as s}from"./NumberField.component-DCPEEWKt.js";import{L as E}from"./Label.component-Bux1bQyn.js";import{M as O}from"./Message.component-D8ICG7W9.js";import{I as N}from"./Input.component-CA-0UphS.js";import{E as P}from"./ErrorMessage.component-BVX2wl3L.js";import"./styled-components.browser.esm-S-CusIP4.js";import"./index-DmM0KDA7.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./scale-CqCDTNu0.js";import"./Collection-cZH6f0Bi.js";import"./CollectionBuilder-DglRgqo3.js";import"./index-D_Kw7eWP.js";import"./index-nLeaPAJ8.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-DvzwwQm6.js";import"./useFormValidationState-CKAS44yz.js";import"./useFocusWithin-C-e8UI97.js";import"./usePress-Cng8MYxN.js";import"./useEvent-Qm4q9YOK.js";import"./useTextField-B3HDaRNl.js";import"./useControlledState-sJfMLWrs.js";import"./useField-BhG43OVF.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useFormValidation-CsrNRCZi.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./context-BF7eBGFA.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-DrJLqD1D.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-BmW9vKT0.js";import"./mixins-BOHXBJW9.js";import"./Provider-op_UCnZE.js";import"./ProgressCircle.component-BlbtEDe_.js";import"./index-CqJC2f1M.js";import"./colors-x_YFGAop.js";import"./Label.context-8YwVGsEO.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.context-D-RNFvKn.js";import"./ComboInput.context-Di7U2yCG.js";import"./Input.context-BTEI3GdY.js";import"./IconButton.component-Da4ILow8.js";import"./Button.component-BcdaaP2f.js";import"./useFocusRing-BmyBc2tX.js";import"./useButton-CBzhh6F5.js";import"./useLink-BTwsTyp1.js";import"./SpinnerLoader.component-DJXvo7dP.js";import"./Loader.component-Dt3yODGv.js";import"./Flex.component-LqFgqvCS.js";import"./Checkmark.component-CRE6wLUH.js";import"./Spinner.component-C1TzuC8j.js";import"./MaterialIcon.component-hQ9Uu0J7.js";import"./Icons.styles-T5NoJEsB.js";s.displayName="NumberField";const Gr={title:"Fields/NumberField",component:s,parameters:{layout:"centered"},argTypes:{...j,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(E,{children:"Label"},"label"),e.jsx(O,{children:"Message"},"message"),e.jsxs(V,{isMerged:!0,children:[e.jsx(s.DecrementButton,{icon:"remove"}),e.jsx(N,{},"input"),e.jsx(s.IncrementButton,{icon:"add"})]},"group"),e.jsx(P,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},i={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
