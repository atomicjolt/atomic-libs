import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{M as I}from"./index-zUouzmwD.js";import{T as b}from"./index-BLCL1vPL.js";import{R as f}from"./helpers-B3wxvxjs.js";import{C as m}from"./ComboInput.component-NBPhVkq1.js";import{N as j}from"./NumberField.component-DE0JltjX.js";import{I as n}from"./Input.component-BxVMOp1U.js";import{G as y}from"./Group.component-DjERy5u8.js";import{I as p}from"./IconButton.component-CYWvWfON.js";import"./index-BCtMShv3.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Icons.styles-qcj_pyb3.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-B7HbK8LX.js";import"./index-C_lK3xe_.js";import"./typography-B_qJ0BtB.js";import"./scale-CqCDTNu0.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./colors-x_YFGAop.js";import"./Collection-DwMxgycI.js";import"./CollectionBuilder-L_wKxqRd.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./ComboInput.context-Dhqk-dVH.js";import"./ComboInput.styles-VPv8l2aB.js";import"./mixins-CcgEHb9c.js";import"./useFormReset-GcAVnfXr.js";import"./useFormValidationState-CONlS5Wo.js";import"./useFocusWithin-dfJl9rAf.js";import"./usePress-BJ4Xpz5E.js";import"./useEvent-CI_xZcmG.js";import"./useTextField-D4_p2q36.js";import"./useControlledState-vzCMHZvt.js";import"./useField-D8gfBVj0.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useFormValidation-CnIG3AAh.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-B52iW2OY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-e0zTg6D5.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./number-nHrFdSb-.js";import"./Label.context-Bxyvy4yx.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.context-B4seO6gR.js";import"./Input.context-kYvBQ720.js";import"./BaseButton-2ZuT2Jet.js";import"./useFocusRing-zxvArQTZ.js";import"./useButton-B6TSBwA2.js";import"./useLink-C7Cuty20.js";import"./SpinnerLoader.component-BajFQvUK.js";import"./Loader.component-CdKgI0wc.js";import"./index-BKev5x84.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-TZts3DK4.js";import"./ProgressCircle.component-C9C-EnQN.js";const _r={title:"Fields/ComboInput",component:m,parameters:{layout:"centered"},argTypes:{...f,padding:{control:"select",options:["left","right","both"]}}},o={args:{children:[r.jsx(I,{icon:"search"},"icon"),r.jsx(n,{placeholder:"Search"},"actual-input")],padding:"both"}},t={render:e=>r.jsx(m,{...e}),args:{padding:"left",children:[r.jsx(n,{},"input"),r.jsx(b,{$size:"3",children:"/10"},"text"),r.jsx(p,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(j,{children:r.jsxs(m,{...e,children:[r.jsx(n,{}),r.jsxs(y,{children:[r.jsx(p,{slot:"decrement",icon:"remove",variant:"ghost"}),r.jsx(p,{slot:"increment",icon:"add",variant:"ghost"})]})]})}),args:{padding:"left"}};var s,a,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
