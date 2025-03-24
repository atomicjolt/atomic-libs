import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as V}from"./helpers-2OzYQ_mY.js";import{N as s}from"./NumberField.component-zoS1S0bJ.js";import{L as j}from"./Label.component-B7CKGK89.js";import{M as E}from"./Message.component-DCrYYuGG.js";import{G as O}from"./Group.component-Do19NS05.js";import{I as N}from"./Input.component-Cuh-x2Kc.js";import{E as P}from"./ErrorMessage.component-BIgFaI1o.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./index-DmM0KDA7.js";import"./index-Cb-P59qZ.js";import"./index-C0OdgCuT.js";import"./index-Do_mbUnv.js";import"./index-BDzxygkP.js";import"./index-CyCRagT9.js";import"./Collection-CfmUX7eJ.js";import"./CollectionBuilder-BOiBnYCj.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./scale-CqCDTNu0.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-DvzwwQm6.js";import"./useFormValidationState-CKAS44yz.js";import"./useFocusWithin-CrVHK3Cv.js";import"./usePress-Cxy0og0d.js";import"./useEvent-Qm4q9YOK.js";import"./useTextField-B3HDaRNl.js";import"./useControlledState-sJfMLWrs.js";import"./useField-BhG43OVF.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useFormValidation-CsrNRCZi.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./context-BF7eBGFA.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-DS2l_r0R.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Field.styles-B11u_h4j.js";import"./mixins-CgZ-Dp8B.js";import"./Provider-op_UCnZE.js";import"./ProgressCircle.component-RfFeL5kh.js";import"./index-CqJC2f1M.js";import"./colors-x_YFGAop.js";import"./Label.context-8YwVGsEO.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.context-D-RNFvKn.js";import"./ComboInput.context-Di7U2yCG.js";import"./Input.context-BTEI3GdY.js";import"./IconButton.component-D4JO6xKq.js";import"./Button.component-Dc1ZAzQB.js";import"./useFocusRing-4PdL76fJ.js";import"./useButton-DlM8S39G.js";import"./useLink-CqmZ9M1P.js";import"./SpinnerLoader.component-Cx6WLnJp.js";import"./Loader.component-CUDKQpo5.js";import"./Flex.component-DMTf3CTF.js";import"./layout-ez2uQdt_.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-DLnyo3xc.js";import"./MaterialIcon.component-CNQJc1ns.js";import"./Icons.styles-D2L4nNgu.js";s.displayName="NumberField";const Wr={title:"Fields/NumberField",component:s,parameters:{layout:"centered"},argTypes:{...V,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(j,{children:"Label"},"label"),e.jsx(E,{children:"Message"},"message"),e.jsxs(O,{isMerged:!0,children:[e.jsx(s.DecrementButton,{icon:"remove"}),e.jsx(N,{},"input"),e.jsx(s.IncrementButton,{icon:"add"})]},"group"),e.jsx(P,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},i={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const Rr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];export{t as FormatAsCurrency,a as FormatAsPercent,i as FormatAsUnit,r as Primary,o as WithBounds,Rr as __namedExportsOrder,Wr as default};
