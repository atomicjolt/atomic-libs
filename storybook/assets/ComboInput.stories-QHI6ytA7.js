import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{C as n}from"./ComboInput.component-g1ajjTxC.js";import{M as b}from"./MaterialIcon.component-CjqFRszb.js";import{I as p}from"./Input.component-Cuh-x2Kc.js";import{I as x}from"./IconButton.component-BiREUA8g.js";import{N as m}from"./NumberField.component-C7k8WrWd.js";import{G as j}from"./Group.component-DclGvoAD.js";import"./index-DmM0KDA7.js";import"./ComboInput.styles-BLZOd1-l.js";import"./mixins-CgZ-Dp8B.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./index-CqJC2f1M.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./ComboInput.context-Di7U2yCG.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Icons.styles-D2L4nNgu.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-B7cTVP20.js";import"./Input.context-BTEI3GdY.js";import"./Button.component-BmxzIkf6.js";import"./useFocusRing-4PdL76fJ.js";import"./useFocusWithin-CrVHK3Cv.js";import"./usePress-Cxy0og0d.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useButton-DlM8S39G.js";import"./useLink-CqmZ9M1P.js";import"./SpinnerLoader.component-DL-Ulg37.js";import"./Loader.component-CB4sqF9H.js";import"./Flex.component-DSJ8Mwfi.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-DLnyo3xc.js";import"./ProgressCircle.component-RfFeL5kh.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./useFormReset-DvzwwQm6.js";import"./useFormValidationState-CKAS44yz.js";import"./useEvent-Qm4q9YOK.js";import"./useTextField-B3HDaRNl.js";import"./useControlledState-sJfMLWrs.js";import"./useField-BhG43OVF.js";import"./useFormValidation-CsrNRCZi.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useSpinButton-DS2l_r0R.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-B11u_h4j.js";import"./Provider-op_UCnZE.js";import"./Label.context-8YwVGsEO.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.context-D-RNFvKn.js";const Br={title:"Fields/ComboInput",component:n,parameters:{layout:"centered"},argTypes:{padding:{control:"multi-select",options:["left","right"]}}},t={args:{children:[r.jsx(b,{icon:"search"},"icon"),r.jsx(p,{placeholder:"Search"},"actual-input")]}},o={render:e=>r.jsx(n,{...e}),args:{padding:"left",children:[r.jsx(p,{},"input"),r.jsx("span",{children:"/10"},"total"),r.jsx(x,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(m,{children:r.jsxs(n,{...e,children:[r.jsx(p,{}),r.jsxs(j,{gap:0,children:[r.jsx(m.DecrementButton,{icon:"remove",variant:"ghost",size:"small"}),r.jsx(m.IncrementButton,{icon:"add",variant:"ghost",size:"small"})]})]})}),args:{padding:"left"}};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
