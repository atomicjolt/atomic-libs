import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{M as b}from"./index-C_RUmn9I.js";import{G as x}from"./index-uJHdaalB.js";import{C as n}from"./ComboInput.component-RIhuyD9y.js";import{I as p}from"./Input.component-DbyHBw8L.js";import{I as j}from"./IconButton.component-C815Wh4m.js";import{N as m}from"./NumberField.component-nRCwf4HE.js";import"./index-DJO9vBfz.js";import"./useRenderProps-BqJZ5b79.js";import"./index-i5X67GZP.js";import"./Icons.styles-Doaby5xe.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./useObjectRef-C4RVQRRU.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DyKXFx56.js";import"./focusSafely-GXGk_mpd.js";import"./useFocus-C-we61At.js";import"./utils-DHlq6CLd.js";import"./useKeyboard-A8_doyNT.js";import"./ComboInput.styles-BWDkoKPy.js";import"./mixins-TlkgTuSN.js";import"./index-CXdyvu6V.js";import"./ComboInput.context-BK6VI2KB.js";import"./Input.context-B2W9bKHg.js";import"./Button.component-Bg3ttyxF.js";import"./useFocusRing-MU4psFt8.js";import"./useFocusWithin-DOCmU_ML.js";import"./useButton-GWYvoXvT.js";import"./usePress-DG8LklVH.js";import"./useLink-ytCU544I.js";import"./SpinnerLoader.component-BS7s8xEm.js";import"./Loader.component-CqkhvLsa.js";import"./index-K1z_EpAd.js";import"./utils-CWBnbg5w.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./useFormReset-BxS8FGOL.js";import"./useFormValidationState-Cu8bp2uX.js";import"./useEvent-CWcEg10T.js";import"./useTextField-DlCCrWX2.js";import"./useControlledState-CN8sBTKq.js";import"./useField-4WjA1Loi.js";import"./useLabel-D3wT2o0c.js";import"./useLabels-DtS694vG.js";import"./useFormValidation-B89CjNwR.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./context-CKyfYUWk.js";import"./useNumberFormatter-DWLeCNi8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-Bem_PVW3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-DrMU21uN.js";import"./Provider-B9Eqn13H.js";import"./number-nHrFdSb-.js";import"./Label.context-Cwics8Eu.js";import"./Message.context-DfHBDHY_.js";import"./ErrorMessage.context-D3nT9BuV.js";const Br={title:"Fields/ComboInput",component:n,parameters:{layout:"centered"},argTypes:{padding:{control:"multi-select",options:["left","right"]}}},t={args:{children:[r.jsx(b,{icon:"search"},"icon"),r.jsx(p,{placeholder:"Search"},"actual-input")]}},o={render:e=>r.jsx(n,{...e}),args:{padding:"left",children:[r.jsx(p,{},"input"),r.jsx("span",{children:"/10"},"total"),r.jsx(j,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(m,{children:r.jsxs(n,{...e,children:[r.jsx(p,{}),r.jsxs(x,{gap:0,children:[r.jsx(m.DecrementButton,{icon:"remove",variant:"ghost",size:"small"}),r.jsx(m.IncrementButton,{icon:"add",variant:"ghost",size:"small"})]})]})}),args:{padding:"left"}};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: [<MaterialIcon icon="search" key="icon" />, <Input placeholder="Search" key="actual-input" />]
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var u,d,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <ComboInput {...args}></ComboInput>,
  args: {
    padding: "left",
    children: [<Input key="input" />, <span key="total">/10</span>, <IconButton icon="search" variant="ghost" key="icon" />]
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,g,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <NumberField>
      <ComboInput {...args}>
        <FieldInput />
        <Group gap={0}>
          <NumberField.DecrementButton icon="remove" variant="ghost" size="small" />
          <NumberField.IncrementButton icon="add" variant="ghost" size="small" />
        </Group>
      </ComboInput>
    </NumberField>,
  args: {
    padding: "left"
  }
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const Cr=["Primary","NumberInputWithSearch","NumberFieldWithButtons"];export{i as NumberFieldWithButtons,o as NumberInputWithSearch,t as Primary,Cr as __namedExportsOrder,Br as default};
