import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as I}from"./helpers-BHg_Ia2Y.js";import{C as m}from"./ComboInput.component-Df08LWxV.js";import{M as b}from"./MaterialIcon.component-CcHTZ3Rq.js";import{I as n}from"./Input.component-CAQ61nF2.js";import{T as f}from"./Text.component-DG9tjbcq.js";import{I as p}from"./IconButton.component-BYiDX0Ru.js";import{N as j}from"./NumberField.component-DmDnX0I9.js";import{G as y}from"./Group.component-B0CNXgbj.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./index-BCtMShv3.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-C4fZf6qK.js";import"./CollectionBuilder-BcAYd8lA.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-CsiUWFDz.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./ComboInput.context-BgrINUmq.js";import"./ComboInput.styles-GNwh4bFc.js";import"./mixins-XviowZ_6.js";import"./Icons.styles-D-JqKhr6.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input.context-CDXu9Ele.js";import"./typography-B_qJ0BtB.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./colors-x_YFGAop.js";import"./BaseButton-D0Q1fJdO.js";import"./useFocusRing-CzfpHkj_.js";import"./useFocusWithin-A-CR497l.js";import"./usePress-DWgw6o5d.js";import"./useButton-D1bzctNv.js";import"./useLink-BGiV_6Hq.js";import"./SpinnerLoader.component-DkmcyQeJ.js";import"./Loader.component-D27auKhk.js";import"./index-DzGcUmQS.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C44VOTWe.js";import"./ProgressCircle.component-_TQleApR.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./Button.context-BxdzJgC_.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidationState-CONlS5Wo.js";import"./useEvent-CeKNPFU-.js";import"./useTextField-CQoa95kJ.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useFormValidation-BfT1egZx.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useSpinButton-DrKJfbOV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-D_hvWyI3.js";import"./Provider-op_UCnZE.js";import"./Label.context-BbpE5KUK.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.context-PYwFF-7o.js";const _r={title:"Fields/ComboInput",component:m,parameters:{layout:"centered"},argTypes:{...I,padding:{control:"select",options:["left","right","both"]}}},o={args:{children:[r.jsx(b,{icon:"search"},"icon"),r.jsx(n,{placeholder:"Search"},"actual-input")],padding:"both"}},t={render:e=>r.jsx(m,{...e}),args:{padding:"left",children:[r.jsx(n,{},"input"),r.jsx(f,{$size:"3",children:"/10"},"text"),r.jsx(p,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(j,{children:r.jsxs(m,{...e,children:[r.jsx(n,{}),r.jsxs(y,{children:[r.jsx(p,{slot:"decrement",icon:"remove",variant:"ghost"}),r.jsx(p,{slot:"increment",icon:"add",variant:"ghost"})]})]})}),args:{padding:"left"}};var s,a,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
