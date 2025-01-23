import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{G as V}from"./index-D6eVVUl-.js";import{F as j}from"./helpers-fQWfWkgV.js";import{N as s}from"./NumberField.component-D2hNFcer.js";import{L as E}from"./Label.component-BZ-jUZHh.js";import{M as O}from"./Message.component-DWiHyL-P.js";import{I as N}from"./Input.component-Bl1fklny.js";import{E as P}from"./ErrorMessage.component-DPAek6pW.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./layout-qoR695S7.js";import"./utils-2VFVy79V.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./Collection-DjPHrlSR.js";import"./CollectionBuilder-JuF9vAdV.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useObjectRef-CjtaasUj.js";import"./index-Co2NqHf1.js";import"./filterDOMProps-CeZl_uWj.js";import"./focusSafely-f-NvfehK.js";import"./useFormReset-Bq2IuLnF.js";import"./useFormValidationState-DFldk10H.js";import"./useFocus-zOn8SIU-.js";import"./utils-Bz-oJdcG.js";import"./useFocusWithin-BwiFBvMF.js";import"./useEvent-CWl__ymk.js";import"./useTextField-Fhkucs1k.js";import"./useControlledState-CN8sBTKq.js";import"./useField-c4_Ph5j6.js";import"./useLabel-7v3RoPQd.js";import"./useLabels-DvZR7g99.js";import"./useFocusable-CRaVIClu.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-CkGNgIJp.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-DOEyhSS3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DOH0gK78.js";import"./Field.styles-CsRBBplX.js";import"./mixins-D6ZuOvce.js";import"./Provider-B9Eqn13H.js";import"./number-nHrFdSb-.js";import"./Label.context-BBG6Xa_C.js";import"./Message.context-DZr9m1_6.js";import"./ErrorMessage.context-Buhm2lRy.js";import"./ComboInput.context-ocWXhSuv.js";import"./Input.context-Bkm7QTcU.js";import"./IconButton.component-Dg_s0u7A.js";import"./Button.component-DtbpFVXN.js";import"./useFocusRing-CkPe2VLa.js";import"./useButton-CK1XMKNi.js";import"./useLink-Bis7wRJn.js";import"./SpinnerLoader.component-CZS0l4HJ.js";import"./Loader.component-DTNPwaWm.js";import"./Flex.component-BqyhhyXT.js";import"./Checkmark.component-DV3x2bJU.js";import"./Spinner.component-LKZLOMLe.js";import"./MaterialIcon.component-Bb94pzqW.js";import"./Icons.styles-BaNpbbIh.js";s.displayName="NumberField";const Gr={title:"Fields/NumberField",component:s,parameters:{layout:"centered"},argTypes:{...j,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(E,{children:"Label"},"label"),e.jsx(O,{children:"Message"},"message"),e.jsxs(V,{isMerged:!0,children:[e.jsx(s.DecrementButton,{icon:"remove"}),e.jsx(N,{},"input"),e.jsx(s.IncrementButton,{icon:"add"})]},"group"),e.jsx(P,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},i={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
