import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{M as b}from"./index-DaCyrt1s.js";import{C as n}from"./ComboInput.component-Bnl3LcWJ.js";import{I as p}from"./Input.component-CqOxShbu.js";import{I as x}from"./IconButton.component-B1ndx4B1.js";import{N as m}from"./NumberField.component-C4teuLe3.js";import{G as j}from"./Group.component-DclGvoAD.js";import"./index-DmM0KDA7.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Icons.styles-D2L4nNgu.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./useObjectRef-BMBYa31u.js";import"./SSRProvider-nIDwi1ZO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DDF3Tgcq.js";import"./ComboInput.styles-BLZOd1-l.js";import"./mixins-CgZ-Dp8B.js";import"./index-9MQGFWEg.js";import"./ComboInput.context-U0WiImMe.js";import"./Input.context-CrdQundv.js";import"./Button.component-CR20HsxD.js";import"./useFocusRing-CMFCJy1v.js";import"./useFocusWithin-ypR2cHkl.js";import"./usePress-BejIIMCm.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useButton-EuBryRSZ.js";import"./useLink-ytEWay4y.js";import"./SpinnerLoader.component-pPupCEPz.js";import"./Loader.component-CjZASL4X.js";import"./Flex.component-CLGTqHVr.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-CXWvSCLl.js";import"./ProgressCircle.component-DE6AAkbz.js";import"./useLabel-C1USB2dP.js";import"./useLabels-DqNC8NnF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./useFormReset-BZUjp8ic.js";import"./useFormValidationState-CKAS44yz.js";import"./useEvent-DX5YI6yT.js";import"./useTextField-DhS2yjr8.js";import"./useControlledState-sJfMLWrs.js";import"./useField-BmPvDaI7.js";import"./useFormValidation-Dk9gOIEC.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useSpinButton-DcXDMVC3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-B11u_h4j.js";import"./Provider-op_UCnZE.js";import"./Label.context-BCDtyvV0.js";import"./Message.context-D6YW8C9h.js";import"./ErrorMessage.context-B9WfFUFn.js";const Br={title:"Fields/ComboInput",component:n,parameters:{layout:"centered"},argTypes:{padding:{control:"multi-select",options:["left","right"]}}},t={args:{children:[r.jsx(b,{icon:"search"},"icon"),r.jsx(p,{placeholder:"Search"},"actual-input")]}},o={render:e=>r.jsx(n,{...e}),args:{padding:"left",children:[r.jsx(p,{},"input"),r.jsx("span",{children:"/10"},"total"),r.jsx(x,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(m,{children:r.jsxs(n,{...e,children:[r.jsx(p,{}),r.jsxs(j,{gap:0,children:[r.jsx(m.DecrementButton,{icon:"remove",variant:"ghost",size:"small"}),r.jsx(m.IncrementButton,{icon:"add",variant:"ghost",size:"small"})]})]})}),args:{padding:"left"}};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
