import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{G as I}from"./index-Cy5L048i.js";import{R as b}from"./helpers-BllF-HW7.js";import{C as m}from"./ComboInput.component-CBgMLQ3I.js";import{M as f}from"./MaterialIcon.component-mYkiuQKC.js";import{I as n}from"./Input.component-EN4IGPNz.js";import{T as j}from"./Text.component-DHEqjjVY.js";import{I as p}from"./IconButton.component-BREk8TeC.js";import{N as y}from"./NumberField.component-CNFRwnbV.js";import"./styled-components.browser.esm-CROIn_Sd.js";import"./index-BCtMShv3.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./scale-CqCDTNu0.js";import"./Collection-Cmq5KClr.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-CsiUWFDz.js";import"./ComboInput.context-BgrINUmq.js";import"./ComboInput.styles-BoxA3r13.js";import"./mixins-CnkRK664.js";import"./Icons.styles-DL14pUoM.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input.context-CDXu9Ele.js";import"./typography-B_qJ0BtB.js";import"./colors-x_YFGAop.js";import"./BaseButton-BT8qRonE.js";import"./useFocusRing-DIS5Kyrs.js";import"./useFocusWithin-BJ0-_hiU.js";import"./usePress-CqXh5MnK.js";import"./useButton-9RZc7-Gk.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-v7dkTF1H.js";import"./Loader.component-B1l2EO1Y.js";import"./Flex.component-CRlckHC-.js";import"./Checkmark.component-DXeF7mwP.js";import"./Spinner.component-B38mr82j.js";import"./ProgressCircle.component-CoB6f8J-.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./Button.context-BxdzJgC_.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidationState-CONlS5Wo.js";import"./useEvent-CeKNPFU-.js";import"./useTextField-CQoa95kJ.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useFormValidation-BfT1egZx.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useSpinButton-CEXF7CxP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-BaCiwxaG.js";import"./Provider-op_UCnZE.js";import"./Label.context-BbpE5KUK.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.context-PYwFF-7o.js";const _r={title:"Fields/ComboInput",component:m,parameters:{layout:"centered"},argTypes:{...b,padding:{control:"select",options:["left","right","both"]}}},o={args:{children:[r.jsx(f,{icon:"search"},"icon"),r.jsx(n,{placeholder:"Search"},"actual-input")],padding:"both"}},t={render:e=>r.jsx(m,{...e}),args:{padding:"left",children:[r.jsx(n,{},"input"),r.jsx(j,{$size:"3",children:"/10"},"text"),r.jsx(p,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(y,{children:r.jsxs(m,{...e,children:[r.jsx(n,{}),r.jsxs(I,{children:[r.jsx(p,{slot:"decrement",icon:"remove",variant:"ghost"}),r.jsx(p,{slot:"increment",icon:"add",variant:"ghost"})]})]})}),args:{padding:"left"}};var s,a,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const zr=["Primary","NumberInputWithSearch","NumberFieldWithButtons"];export{i as NumberFieldWithButtons,t as NumberInputWithSearch,o as Primary,zr as __namedExportsOrder,_r as default};
