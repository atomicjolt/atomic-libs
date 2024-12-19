import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{G as b}from"./index-fj-GeAki.js";import{C as n}from"./ComboInput.component-1XYuvlap.js";import{M as x}from"./MaterialIcon.component-DppQdNZ1.js";import{I as p}from"./Input.component-D9e4fV7X.js";import{I as j}from"./IconButton.component-Bk3DfWc9.js";import{N as m}from"./NumberField.component-tuRmaVk4.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./index-i5X67GZP.js";import"./ComboInput.styles-BWDkoKPy.js";import"./mixins-TlkgTuSN.js";import"./index-B_KxbAnX.js";import"./useObjectRef-B0fXxeND.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./ComboInput.context-D8kfzKmb.js";import"./useRenderProps-BqJZ5b79.js";import"./Icons.styles-Doaby5xe.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CsZREXhx.js";import"./focusSafely-DAnwb70X.js";import"./useFocus-CqC7M1wJ.js";import"./utils-BwOaQS7j.js";import"./useKeyboard-A8_doyNT.js";import"./Input.context-DH9IDn3r.js";import"./Button.component-CvwjrRb6.js";import"./useFocusRing-DokLxauV.js";import"./useFocusWithin-Dppy9HPm.js";import"./useButton-CctGfIuY.js";import"./usePress-DLdGKM_D.js";import"./useLink-BfspLt2l.js";import"./SpinnerLoader.component-Bg5XyiJ8.js";import"./Loader.component-D2-tScza.js";import"./index-CiylWqPi.js";import"./utils-CWBnbg5w.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./useFormReset-CiimGfOH.js";import"./useFormValidationState-Cu8bp2uX.js";import"./useEvent-DE_dT4RF.js";import"./useTextField-Cjd9wVl0.js";import"./useControlledState-CN8sBTKq.js";import"./useField-DF4uEtB8.js";import"./useLabel-Dumhvd6m.js";import"./useLabels-DVGDEngn.js";import"./useFormValidation-D6UvTinM.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./context-CKyfYUWk.js";import"./useNumberFormatter-DWLeCNi8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-EKwDCFlL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-DrMU21uN.js";import"./Provider-B9Eqn13H.js";import"./number-nHrFdSb-.js";import"./Label.context-BAKeKK5_.js";import"./Message.context-CRQ8oljB.js";import"./ErrorMessage.context-aoPfhCA3.js";const Br={title:"Fields/ComboInput",component:n,parameters:{layout:"centered"},argTypes:{padding:{control:"multi-select",options:["left","right"]}}},t={args:{children:[r.jsx(x,{icon:"search"},"icon"),r.jsx(p,{placeholder:"Search"},"actual-input")]}},o={render:e=>r.jsx(n,{...e}),args:{padding:"left",children:[r.jsx(p,{},"input"),r.jsx("span",{children:"/10"},"total"),r.jsx(j,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(m,{children:r.jsxs(n,{...e,children:[r.jsx(p,{}),r.jsxs(b,{gap:0,children:[r.jsx(m.DecrementButton,{icon:"remove",variant:"ghost",size:"small"}),r.jsx(m.IncrementButton,{icon:"add",variant:"ghost",size:"small"})]})]})}),args:{padding:"left"}};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
