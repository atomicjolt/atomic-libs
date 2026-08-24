import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CEp9mR5a.js";import"./index-CxJiuIRp.js";import{R as I}from"./helpers-CCCDyuAK.js";import{C as m}from"./ComboInput.component-CUBhlBPz.js";import{N as b}from"./NumberField.component-Be4Wg8jz.js";import{I as n}from"./Input.component-Bn_wIqOT.js";import{G as f}from"./Group.component-BfM5iwh3.js";import{I as p}from"./IconButton.component-BRm_Nwig.js";import{T as j}from"./Text.component-CjSzr6eF.js";import{M as y}from"./MaterialIcon.component-DhvfLpMK.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./index-BCtMShv3.js";import"./index-VDq0Af83.js";import"./index-MEy1pH_-.js";import"./index-B-ANkEne.js";import"./index-CBCMMQRA.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-Km3Ox9s4.js";import"./scale-CqCDTNu0.js";import"./index-CsiUWFDz.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./ComboInput.context-BgrINUmq.js";import"./ComboInput.styles-VPv8l2aB.js";import"./mixins-CcgEHb9c.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidationState-CONlS5Wo.js";import"./useFocusWithin-BJ0-_hiU.js";import"./usePress-CqXh5MnK.js";import"./useEvent-CeKNPFU-.js";import"./useTextField-CQoa95kJ.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useFormValidation-BfT1egZx.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-CEXF7CxP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-BxdzJgC_.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./number-nHrFdSb-.js";import"./Label.context-BbpE5KUK.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./Input.context-CDXu9Ele.js";import"./layout-SmZ-geAZ.js";import"./utils-DqmNl-Il.js";import"./BaseButton-BY-7npTs.js";import"./useFocusRing-DIS5Kyrs.js";import"./useButton-9RZc7-Gk.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-Ci8mpLWf.js";import"./Loader.component-DZKmnb7V.js";import"./Flex.component-aiFXItkY.js";import"./Checkmark.component-BEMNJhu5.js";import"./Spinner.component-C6xKZVWq.js";import"./ProgressCircle.component-BE5Vy4t5.js";import"./colors-x_YFGAop.js";import"./typography-B_qJ0BtB.js";import"./Icons.styles-qcj_pyb3.js";const qr={title:"Fields/ComboInput",component:m,parameters:{layout:"centered"},argTypes:{...I,padding:{control:"select",options:["left","right","both"]}}},o={args:{children:[r.jsx(y,{icon:"search"},"icon"),r.jsx(n,{placeholder:"Search"},"actual-input")],padding:"both"}},t={render:e=>r.jsx(m,{...e}),args:{padding:"left",children:[r.jsx(n,{},"input"),r.jsx(j,{$size:"3",children:"/10"},"text"),r.jsx(p,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(b,{children:r.jsxs(m,{...e,children:[r.jsx(n,{}),r.jsxs(f,{children:[r.jsx(p,{slot:"decrement",icon:"remove",variant:"ghost"}),r.jsx(p,{slot:"increment",icon:"add",variant:"ghost"})]})]})}),args:{padding:"left"}};var s,a,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<MaterialIcon icon="search" key="icon" />, <Input placeholder="Search" key="actual-input" />],
    padding: "both"
  }
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var d,u,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <ComboInput {...args}></ComboInput>,
  args: {
    padding: "left",
    children: [<Input key="input" />, <Text key="text" $size="3">
        /10
      </Text>, <IconButton icon="search" variant="ghost" key="icon" />]
  }
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var h,g,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <NumberField>
      <ComboInput {...args}>
        <FieldInput />
        <Group>
          <IconButton slot="decrement" icon="remove" variant="ghost" />
          <IconButton slot="increment" icon="add" variant="ghost" />
        </Group>
      </ComboInput>
    </NumberField>,
  args: {
    padding: "left"
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const wr=["Primary","NumberInputWithSearch","NumberFieldWithButtons"];export{i as NumberFieldWithButtons,t as NumberInputWithSearch,o as Primary,wr as __namedExportsOrder,qr as default};
