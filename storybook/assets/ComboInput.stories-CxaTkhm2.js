import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{G as b}from"./index-CEEE0kZq.js";import{C as n}from"./ComboInput.component-ChwLRff1.js";import{M as x}from"./MaterialIcon.component-hQ9Uu0J7.js";import{I as p}from"./Input.component-CA-0UphS.js";import{I as j}from"./IconButton.component-Da4ILow8.js";import{N as m}from"./NumberField.component-DCPEEWKt.js";import"./styled-components.browser.esm-S-CusIP4.js";import"./index-DmM0KDA7.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./ComboInput.styles-Cjo-Ms-Y.js";import"./mixins-BOHXBJW9.js";import"./index-CqJC2f1M.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./ComboInput.context-Di7U2yCG.js";import"./Icons.styles-T5NoJEsB.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-B7cTVP20.js";import"./Input.context-BTEI3GdY.js";import"./Button.component-BcdaaP2f.js";import"./useFocusRing-BmyBc2tX.js";import"./useFocusWithin-C-e8UI97.js";import"./usePress-Cng8MYxN.js";import"./index-D_Kw7eWP.js";import"./index-nLeaPAJ8.js";import"./useButton-CBzhh6F5.js";import"./useLink-BTwsTyp1.js";import"./SpinnerLoader.component-DJXvo7dP.js";import"./Loader.component-Dt3yODGv.js";import"./Flex.component-LqFgqvCS.js";import"./Checkmark.component-CRE6wLUH.js";import"./Spinner.component-C1TzuC8j.js";import"./ProgressCircle.component-BlbtEDe_.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./useFormReset-DvzwwQm6.js";import"./useFormValidationState-CKAS44yz.js";import"./useEvent-Qm4q9YOK.js";import"./useTextField-B3HDaRNl.js";import"./useControlledState-sJfMLWrs.js";import"./useField-BhG43OVF.js";import"./useFormValidation-CsrNRCZi.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useSpinButton-DrJLqD1D.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-BmW9vKT0.js";import"./Provider-op_UCnZE.js";import"./Label.context-8YwVGsEO.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.context-D-RNFvKn.js";const Br={title:"Fields/ComboInput",component:n,parameters:{layout:"centered"},argTypes:{padding:{control:"multi-select",options:["left","right"]}}},t={args:{children:[r.jsx(x,{icon:"search"},"icon"),r.jsx(p,{placeholder:"Search"},"actual-input")]}},o={render:e=>r.jsx(n,{...e}),args:{padding:"left",children:[r.jsx(p,{},"input"),r.jsx("span",{children:"/10"},"total"),r.jsx(j,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(m,{children:r.jsxs(n,{...e,children:[r.jsx(p,{}),r.jsxs(b,{gap:0,children:[r.jsx(m.DecrementButton,{icon:"remove",variant:"ghost",size:"small"}),r.jsx(m.IncrementButton,{icon:"add",variant:"ghost",size:"small"})]})]})}),args:{padding:"left"}};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
