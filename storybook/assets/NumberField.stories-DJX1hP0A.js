import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{F as V}from"./helpers-CB0EgwPk.js";import{N as s}from"./NumberField.component-BNJO-Ai-.js";import{L as j}from"./Label.component-DWUg6KQj.js";import{M as E}from"./Message.component-DuLpH4ma.js";import{G as O}from"./Group.component-DEZBPtlu.js";import{I as N}from"./Input.component-aD7FwtmD.js";import{E as P}from"./ErrorMessage.component-NUTqPfNd.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./useObjectRef-CA0MXmrf.js";import"./filterDOMProps-CeZl_uWj.js";import"./focusSafely-BOUv7I-8.js";import"./useFormReset-D24hgWtm.js";import"./useFormValidationState-DFldk10H.js";import"./useFocus-DXSPV_um.js";import"./utils-CrQpPYo7.js";import"./useFocusWithin-Bb3mfDwa.js";import"./useEvent-D91OnqQ2.js";import"./useTextField-Bu86_h4p.js";import"./useControlledState-CN8sBTKq.js";import"./useField-DAe_M2wp.js";import"./useLabel-CTphHQ-t.js";import"./useLabels-6dTMP4oW.js";import"./useFocusable-DHL4UX94.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-CdG9-Yzp.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-CkfgV2Fh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DBLAzBwe.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./Field.styles-wtg9rJuP.js";import"./mixins-B7X2BZyR.js";import"./Provider-B9Eqn13H.js";import"./ProgressCircle.component-BbXhAaqf.js";import"./index-CHPAqjqs.js";import"./colors-x_YFGAop.js";import"./Label.context-BY30H9b8.js";import"./Message.context-BF8cnA0i.js";import"./ErrorMessage.context-Cr_J9O6j.js";import"./ComboInput.context-yOfG-dCd.js";import"./Input.context-Cu61juEz.js";import"./IconButton.component-CFNeuELj.js";import"./index-jGwUeqkW.js";import"./Icons.styles-BaNpbbIh.js";import"./Button.component-7ZEnE2xC.js";import"./useFocusRing-PETNqKnG.js";import"./useButton-Bk3lNUMb.js";import"./useLink-XD5ax7xG.js";import"./SpinnerLoader.component-BvhIBz4v.js";import"./Loader.component-BDvxQSI3.js";import"./index-5u02HfcA.js";import"./layout-UyCWIQlE.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-CK7MNkmm.js";s.displayName="NumberField";const Wr={title:"Fields/NumberField",component:s,parameters:{layout:"centered"},argTypes:{...V,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(j,{children:"Label"},"label"),e.jsx(E,{children:"Message"},"message"),e.jsxs(O,{isMerged:!0,children:[e.jsx(s.DecrementButton,{icon:"remove"}),e.jsx(N,{},"input"),e.jsx(s.IncrementButton,{icon:"add"})]},"group"),e.jsx(P,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},i={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
