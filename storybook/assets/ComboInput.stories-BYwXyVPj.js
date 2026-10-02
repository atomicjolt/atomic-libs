import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{G as y}from"./index-C5FB09Y9.js";import{R as L}from"./helpers-KKeMmUAi.js";import{C as p}from"./ComboInput.component-AZYKBBz8.js";import{M as S}from"./MaterialIcon.component-CrbLbUZZ.js";import{I as m}from"./Input.component-BV7OW4Aw.js";import{N as F}from"./NumberField.component-CoWZrm97.js";import{I as a}from"./IconButton.component-CgWNtqWH.js";import{T as v}from"./Text.component-BFPr0tnf.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./index-BCtMShv3.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./scale-CqCDTNu0.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-CKqsTkFX.js";import"./ComboInput.context-_UpYbRGR.js";import"./ComboInput.styles-kOaziVwv.js";import"./mixins-CcgEHb9c.js";import"./SkeletonLoader.component-q75MwwfP.js";import"./context-z6pb9OkM.js";import"./Loading.context-C7II2W1n.js";import"./Icons.styles-qcj_pyb3.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input.context-Cyaw3phX.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidationState-CONlS5Wo.js";import"./useFocusWithin-BJ0-_hiU.js";import"./usePress-CqXh5MnK.js";import"./useEvent-CeKNPFU-.js";import"./useTextField-CQoa95kJ.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useFormValidation-BfT1egZx.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-CEXF7CxP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-CorcCtTC.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./number-nHrFdSb-.js";import"./Label.context-CCD9MV1z.js";import"./Message.context-Dd4cT4rL.js";import"./ErrorMessage.context-AYC8UfzI.js";import"./BaseButton-vMGD2aCH.js";import"./useFocusRing-DIS5Kyrs.js";import"./useButton-9RZc7-Gk.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-DSWkxcW2.js";import"./Loader.component-OwwaJ-iM.js";import"./Flex.component-CDWV5CIf.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-CbEi-nNZ.js";import"./ProgressCircle.component-Cto4SYF5.js";import"./colors-x_YFGAop.js";import"./typography-B_qJ0BtB.js";const Or={title:"Fields/ComboInput",component:p,parameters:{layout:"centered"},argTypes:{...L,padding:{control:"select",options:["left","right","both"]},isLoading:{control:"boolean",table:{category:"Field State"}},loadingLabel:{control:"text",table:{category:"Field State"}}}},o={args:{children:[r.jsx(S,{icon:"search"},"icon"),r.jsx(m,{placeholder:"Search"},"actual-input")],padding:"both"}},t={args:{...o.args,isLoading:!0,loadingLabel:"Loading"}},i={render:n=>r.jsx(p,{...n}),args:{padding:"left",children:[r.jsx(m,{},"input"),r.jsx(v,{$size:"3",children:"/10"},"text"),r.jsx(a,{icon:"search",variant:"ghost"},"icon")]}},e={render:n=>r.jsx(F,{children:r.jsxs(p,{...n,children:[r.jsx(m,{}),r.jsxs(y,{children:[r.jsx(a,{slot:"decrement",icon:"remove",variant:"ghost"}),r.jsx(a,{slot:"increment",icon:"add",variant:"ghost"})]})]})}),args:{padding:"left"}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<MaterialIcon icon="search" key="icon" />, <Input placeholder="Search" key="actual-input" />],
    padding: "both"
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,b,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ComboInput {...args}></ComboInput>,
  args: {
    padding: "left",
    children: [<Input key="input" />, <Text key="text" $size="3">
        /10
      </Text>, <IconButton icon="search" variant="ghost" key="icon" />]
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var I,f,j;e.parameters={...e.parameters,docs:{...(I=e.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(f=e.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const qr=["Primary","Loading","NumberInputWithSearch","NumberFieldWithButtons"];export{t as Loading,e as NumberFieldWithButtons,i as NumberInputWithSearch,o as Primary,qr as __namedExportsOrder,Or as default};
