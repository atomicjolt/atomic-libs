import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{G as V}from"./index-uJHdaalB.js";import{F as j}from"./helpers-DsiJys5i.js";import{N as s}from"./NumberField.component-nRCwf4HE.js";import{L as E}from"./Label.component-5ShF5vdw.js";import{M as O}from"./Message.component-DgHLwaZZ.js";import{I as N}from"./Input.component-DbyHBw8L.js";import{E as P}from"./ErrorMessage.component-DYIqQ3G7.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./index-i5X67GZP.js";import"./CollectionBuilder-Vf4TV1hX.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Section-BBepoPM4.js";import"./useObjectRef-C4RVQRRU.js";import"./filterDOMProps-CeZl_uWj.js";import"./focusSafely-GXGk_mpd.js";import"./useFormReset-BxS8FGOL.js";import"./useFormValidationState-Cu8bp2uX.js";import"./useFocus-C-we61At.js";import"./utils-DHlq6CLd.js";import"./useFocusWithin-DOCmU_ML.js";import"./useEvent-CWcEg10T.js";import"./useTextField-DlCCrWX2.js";import"./useControlledState-CN8sBTKq.js";import"./useField-4WjA1Loi.js";import"./useLabel-D3wT2o0c.js";import"./useLabels-DtS694vG.js";import"./useFocusable-DyKXFx56.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-B89CjNwR.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./context-CKyfYUWk.js";import"./useNumberFormatter-DWLeCNi8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-Bem_PVW3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DG8LklVH.js";import"./useRenderProps-BqJZ5b79.js";import"./Field.styles-DrMU21uN.js";import"./mixins-TlkgTuSN.js";import"./Provider-B9Eqn13H.js";import"./number-nHrFdSb-.js";import"./Label.context-Cwics8Eu.js";import"./index-CXdyvu6V.js";import"./Message.context-DfHBDHY_.js";import"./ErrorMessage.context-D3nT9BuV.js";import"./ComboInput.context-BK6VI2KB.js";import"./Input.context-B2W9bKHg.js";import"./IconButton.component-C815Wh4m.js";import"./index-C_RUmn9I.js";import"./Icons.styles-Doaby5xe.js";import"./Button.component-Bg3ttyxF.js";import"./useFocusRing-MU4psFt8.js";import"./useButton-GWYvoXvT.js";import"./useLink-ytCU544I.js";import"./SpinnerLoader.component-BS7s8xEm.js";import"./Loader.component-CqkhvLsa.js";import"./index-K1z_EpAd.js";import"./utils-CWBnbg5w.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";s.displayName="NumberField";const Gr={title:"Fields/NumberField",component:s,parameters:{layout:"centered"},argTypes:{...j,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(E,{children:"Label"},"label"),e.jsx(O,{children:"Message"},"message"),e.jsxs(V,{isMerged:!0,children:[e.jsx(s.DecrementButton,{icon:"remove"}),e.jsx(N,{},"input"),e.jsx(s.IncrementButton,{icon:"add"})]},"group"),e.jsx(P,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},i={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
