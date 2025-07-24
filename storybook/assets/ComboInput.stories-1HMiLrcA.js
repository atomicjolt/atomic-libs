import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{M as I}from"./index-SPKsbD02.js";import{T as b}from"./index-DUZltnz9.js";import{R as f}from"./helpers-DOVaRqs_.js";import{C as m}from"./ComboInput.component-C_PrQCWE.js";import{I as n}from"./Input.component-KkyRTz8W.js";import{I as p}from"./IconButton.component-C57JyDaI.js";import{N as j}from"./NumberField.component-CvvgmO5d.js";import{G as y}from"./Group.component-CCh4AWKN.js";import"./index-BCtMShv3.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Icons.styles-D-JqKhr6.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-B7HbK8LX.js";import"./index-C_lK3xe_.js";import"./typography-B_qJ0BtB.js";import"./scale-CqCDTNu0.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./colors-x_YFGAop.js";import"./Collection-C2kgHJSW.js";import"./CollectionBuilder-4ZFsDDvv.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./ComboInput.context-Dhqk-dVH.js";import"./ComboInput.styles-GNwh4bFc.js";import"./mixins-XviowZ_6.js";import"./Input.context-kYvBQ720.js";import"./Button.component-I4DbnubE.js";import"./useFocusRing-BT9oCgfs.js";import"./useFocusWithin-J-xELNez.js";import"./usePress-CzPFgv00.js";import"./useButton-CIXIyXj7.js";import"./useLink-C_TmUO2i.js";import"./Button.context-e0zTg6D5.js";import"./SpinnerLoader.component-CZyqbQAt.js";import"./Loader.component-Bbv54XPB.js";import"./index-BqqCK9sT.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-CKgxLGDu.js";import"./ProgressCircle.component-BOqryRrp.js";import"./number-nHrFdSb-.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFormReset-GcAVnfXr.js";import"./useFormValidationState-CONlS5Wo.js";import"./useEvent-CI_xZcmG.js";import"./useTextField-D4_p2q36.js";import"./useControlledState-vzCMHZvt.js";import"./useField-D8gfBVj0.js";import"./useFormValidation-CnIG3AAh.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useSpinButton-CUfglx5M.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-D_hvWyI3.js";import"./Provider-op_UCnZE.js";import"./Label.context-Bxyvy4yx.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.context-B4seO6gR.js";const _r={title:"Fields/ComboInput",component:m,parameters:{layout:"centered"},argTypes:{...f,padding:{control:"select",options:["left","right","both"]}}},o={args:{children:[r.jsx(I,{icon:"search"},"icon"),r.jsx(n,{placeholder:"Search"},"actual-input")],padding:"both"}},t={render:e=>r.jsx(m,{...e}),args:{padding:"left",children:[r.jsx(n,{},"input"),r.jsx(b,{$size:"3",children:"/10"},"text"),r.jsx(p,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(j,{children:r.jsxs(m,{...e,children:[r.jsx(n,{}),r.jsxs(y,{children:[r.jsx(p,{slot:"decrement",icon:"remove",variant:"ghost"}),r.jsx(p,{slot:"increment",icon:"add",variant:"ghost"})]})]})}),args:{padding:"left"}};var s,a,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
