import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{G as b}from"./index-D6eVVUl-.js";import{C as n}from"./ComboInput.component-BfExnJkY.js";import{M as x}from"./MaterialIcon.component-Bb94pzqW.js";import{I as p}from"./Input.component-Bl1fklny.js";import{I as j}from"./IconButton.component-Dg_s0u7A.js";import{N as m}from"./NumberField.component-D2hNFcer.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./layout-qoR695S7.js";import"./utils-2VFVy79V.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./ComboInput.styles-BpY8b9Fd.js";import"./mixins-D6ZuOvce.js";import"./index-Co2NqHf1.js";import"./useObjectRef-CjtaasUj.js";import"./SSRProvider-DAMUgb6s.js";import"./ComboInput.context-ocWXhSuv.js";import"./Icons.styles-BaNpbbIh.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CRaVIClu.js";import"./focusSafely-f-NvfehK.js";import"./useFocus-zOn8SIU-.js";import"./utils-Bz-oJdcG.js";import"./useKeyboard-A8_doyNT.js";import"./Input.context-Bkm7QTcU.js";import"./Button.component-DtbpFVXN.js";import"./useFocusRing-CkPe2VLa.js";import"./useFocusWithin-BwiFBvMF.js";import"./useButton-CK1XMKNi.js";import"./usePress-DOH0gK78.js";import"./useLink-Bis7wRJn.js";import"./SpinnerLoader.component-CZS0l4HJ.js";import"./Loader.component-DTNPwaWm.js";import"./Flex.component-BqyhhyXT.js";import"./Checkmark.component-DV3x2bJU.js";import"./Spinner.component-LKZLOMLe.js";import"./useFormReset-Bq2IuLnF.js";import"./useFormValidationState-DFldk10H.js";import"./useEvent-CWl__ymk.js";import"./useTextField-Fhkucs1k.js";import"./useControlledState-CN8sBTKq.js";import"./useField-c4_Ph5j6.js";import"./useLabel-7v3RoPQd.js";import"./useLabels-DvZR7g99.js";import"./useFormValidation-CkGNgIJp.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-DOEyhSS3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-CsRBBplX.js";import"./Provider-B9Eqn13H.js";import"./number-nHrFdSb-.js";import"./Label.context-BBG6Xa_C.js";import"./Message.context-DZr9m1_6.js";import"./ErrorMessage.context-Buhm2lRy.js";const Br={title:"Fields/ComboInput",component:n,parameters:{layout:"centered"},argTypes:{padding:{control:"multi-select",options:["left","right"]}}},t={args:{children:[r.jsx(x,{icon:"search"},"icon"),r.jsx(p,{placeholder:"Search"},"actual-input")]}},o={render:e=>r.jsx(n,{...e}),args:{padding:"left",children:[r.jsx(p,{},"input"),r.jsx("span",{children:"/10"},"total"),r.jsx(j,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(m,{children:r.jsxs(n,{...e,children:[r.jsx(p,{}),r.jsxs(b,{gap:0,children:[r.jsx(m.DecrementButton,{icon:"remove",variant:"ghost",size:"small"}),r.jsx(m.IncrementButton,{icon:"add",variant:"ghost",size:"small"})]})]})}),args:{padding:"left"}};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
