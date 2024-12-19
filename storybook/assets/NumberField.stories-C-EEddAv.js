import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{G as V}from"./index-fj-GeAki.js";import{F as j}from"./helpers-vNBwIeRc.js";import{N as s}from"./NumberField.component-tuRmaVk4.js";import{L as E}from"./Label.component-O0nDRyru.js";import{M as O}from"./Message.component-Ccl3wjCe.js";import{I as N}from"./Input.component-D9e4fV7X.js";import{E as P}from"./ErrorMessage.component-CV4lQ-GN.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./index-i5X67GZP.js";import"./CollectionBuilder-DRj8-oKX.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Section-BBepoPM4.js";import"./useObjectRef-B0fXxeND.js";import"./filterDOMProps-CeZl_uWj.js";import"./focusSafely-DAnwb70X.js";import"./useFormReset-CiimGfOH.js";import"./useFormValidationState-Cu8bp2uX.js";import"./useFocus-CqC7M1wJ.js";import"./utils-BwOaQS7j.js";import"./useFocusWithin-Dppy9HPm.js";import"./useEvent-DE_dT4RF.js";import"./useTextField-Cjd9wVl0.js";import"./useControlledState-CN8sBTKq.js";import"./useField-DF4uEtB8.js";import"./useLabel-Dumhvd6m.js";import"./useLabels-DVGDEngn.js";import"./useFocusable-CsZREXhx.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-D6UvTinM.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./context-CKyfYUWk.js";import"./useNumberFormatter-DWLeCNi8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-EKwDCFlL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DLdGKM_D.js";import"./useRenderProps-BqJZ5b79.js";import"./Field.styles-DrMU21uN.js";import"./mixins-TlkgTuSN.js";import"./Provider-B9Eqn13H.js";import"./number-nHrFdSb-.js";import"./Label.context-BAKeKK5_.js";import"./index-B_KxbAnX.js";import"./Message.context-CRQ8oljB.js";import"./ErrorMessage.context-aoPfhCA3.js";import"./ComboInput.context-D8kfzKmb.js";import"./Input.context-DH9IDn3r.js";import"./IconButton.component-Bk3DfWc9.js";import"./Button.component-CvwjrRb6.js";import"./useFocusRing-DokLxauV.js";import"./useButton-CctGfIuY.js";import"./useLink-BfspLt2l.js";import"./SpinnerLoader.component-Bg5XyiJ8.js";import"./Loader.component-D2-tScza.js";import"./index-CiylWqPi.js";import"./utils-CWBnbg5w.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./MaterialIcon.component-DppQdNZ1.js";import"./Icons.styles-Doaby5xe.js";s.displayName="NumberField";const Gr={title:"Fields/NumberField",component:s,parameters:{layout:"centered"},argTypes:{...j,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(E,{children:"Label"},"label"),e.jsx(O,{children:"Message"},"message"),e.jsxs(V,{isMerged:!0,children:[e.jsx(s.DecrementButton,{icon:"remove"}),e.jsx(N,{},"input"),e.jsx(s.IncrementButton,{icon:"add"})]},"group"),e.jsx(P,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},i={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
