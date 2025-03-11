import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-C0DXmw5d.js";import{F as V}from"./helpers-D-Gur9Js.js";import{N as m}from"./NumberField.component-BJAds9vk.js";import{L as j}from"./Label.component-CeN98k3i.js";import{M as E}from"./Message.component-nkasZM07.js";import{G as O}from"./Group.component-CIkbtIFW.js";import{I as N}from"./Input.component-Ci0setjS.js";import{E as P}from"./ErrorMessage.component-CfKzjo8L.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-CyCRagT9.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./useObjectRef-BKue9pYL.js";import"./filterDOMProps-CeZl_uWj.js";import"./focusSafely-BOUv7I-8.js";import"./useFormReset-C11SSN19.js";import"./useFormValidationState-DFldk10H.js";import"./useFocus-DJe2BRHe.js";import"./utils-Df1WEgxG.js";import"./useFocusWithin-DSbUfD8x.js";import"./useEvent-CXpXU_b4.js";import"./useTextField-DSYflh9X.js";import"./useControlledState-CN8sBTKq.js";import"./useField-mSuDlNxJ.js";import"./useLabel-CSTUXoQW.js";import"./useLabels-B24R2YQq.js";import"./useFocusable-o0N_IkwX.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-D05SS9o7.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-D0G3eTCL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cu0aM-K5.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./Field.styles-wtg9rJuP.js";import"./mixins-B7X2BZyR.js";import"./Provider-B9Eqn13H.js";import"./ProgressCircle.component-DZo3rxOV.js";import"./index-De95zDiF.js";import"./colors-x_YFGAop.js";import"./Label.context-ChhuUauO.js";import"./Message.context-BObz3Mtj.js";import"./ErrorMessage.context-D3SbpLIU.js";import"./ComboInput.context-Dk1bHly0.js";import"./Input.context-KI5tKbdp.js";import"./IconButton.component-BC26b8KI.js";import"./Button.component-SZWKT3t6.js";import"./useFocusRing-CPkBIT8D.js";import"./useButton-AoKYWM9F.js";import"./useLink-ByNL9j8X.js";import"./SpinnerLoader.component-CF9bxXo5.js";import"./Loader.component-TyckDnEn.js";import"./Flex.component-DqBL6Xjb.js";import"./layout-B6NAx4l9.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-D3qB71XV.js";import"./MaterialIcon.component-2YMyWhOU.js";import"./Icons.styles-BaNpbbIh.js";m.displayName="NumberField";const Hr={title:"Fields/NumberField",component:m,parameters:{layout:"centered"},argTypes:{...V,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(j,{children:"Label"},"label"),e.jsx(E,{children:"Message"},"message"),e.jsxs(O,{isMerged:!0,children:[e.jsx(m.DecrementButton,{icon:"remove"}),e.jsx(N,{},"input"),e.jsx(m.IncrementButton,{icon:"add"})]},"group"),e.jsx(P,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},i={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var s,n,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const Jr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];export{t as FormatAsCurrency,a as FormatAsPercent,i as FormatAsUnit,r as Primary,o as WithBounds,Jr as __namedExportsOrder,Hr as default};
