import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{C as n}from"./ComboInput.component-DCulYmJh.js";import{M as b}from"./MaterialIcon.component-DVFNi2Fq.js";import{I as p}from"./Input.component-D1kzSUZq.js";import{I as x}from"./IconButton.component-BLxKwVs3.js";import{N as m}from"./NumberField.component-DQr3LT16.js";import{G as j}from"./Group.component-CCh4AWKN.js";import"./index-BCtMShv3.js";import"./ComboInput.styles-GNwh4bFc.js";import"./mixins-XviowZ_6.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./index-CsiUWFDz.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./ComboInput.context-BgrINUmq.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Icons.styles-D-JqKhr6.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DacP9xvE.js";import"./Input.context-CDXu9Ele.js";import"./Button.component-B1VuTqO-.js";import"./useFocusRing-CLjBjOxD.js";import"./useFocusWithin-BshFo8_g.js";import"./usePress-B9aiz4Kw.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useButton-nVeIkIqk.js";import"./useLink-FIfyncSu.js";import"./SpinnerLoader.component-m7qmEdMF.js";import"./Loader.component-CAkSYpHw.js";import"./index-CgV6Zd7Q.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-ByE1AGU6.js";import"./Spinner.component-Bslo7_jG.js";import"./ProgressCircle.component-OpnlU6y-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidationState-CONlS5Wo.js";import"./useEvent-CeKNPFU-.js";import"./useTextField-CQoa95kJ.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useFormValidation-BfT1egZx.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useSpinButton-LE97PPA9.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-D_hvWyI3.js";import"./Provider-op_UCnZE.js";import"./Label.context-BbpE5KUK.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.context-PYwFF-7o.js";const Br={title:"Fields/ComboInput",component:n,parameters:{layout:"centered"},argTypes:{padding:{control:"multi-select",options:["left","right"]}}},t={args:{children:[r.jsx(b,{icon:"search"},"icon"),r.jsx(p,{placeholder:"Search"},"actual-input")]}},o={render:e=>r.jsx(n,{...e}),args:{padding:"left",children:[r.jsx(p,{},"input"),r.jsx("span",{children:"/10"},"total"),r.jsx(x,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(m,{children:r.jsxs(n,{...e,children:[r.jsx(p,{}),r.jsxs(j,{gap:0,children:[r.jsx(m.DecrementButton,{icon:"remove",variant:"ghost",size:"small"}),r.jsx(m.IncrementButton,{icon:"add",variant:"ghost",size:"small"})]})]})}),args:{padding:"left"}};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
