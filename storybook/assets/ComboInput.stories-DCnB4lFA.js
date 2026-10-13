import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{M as y}from"./index-D0UYfcsL.js";import{I as a}from"./index-DnOMPDxK.js";import{R as L}from"./helpers-DpMr3oGb.js";import{C as p}from"./ComboInput.component-DKd_jgPF.js";import{I as m}from"./Input.component-zI-G4JAx.js";import{N as S}from"./NumberField.component-CrCEMCoL.js";import{G as F}from"./Group.component-DjERy5u8.js";import{T as v}from"./Text.component-CJChDMZO.js";import"./index-BCtMShv3.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Icons.styles-qcj_pyb3.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-B7HbK8LX.js";import"./BaseButton-DBbmnCO8.js";import"./mixins-CcgEHb9c.js";import"./useFocusRing-zxvArQTZ.js";import"./useFocusWithin-dfJl9rAf.js";import"./usePress-BJ4Xpz5E.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useButton-B6TSBwA2.js";import"./useLink-C7Cuty20.js";import"./Loading.context-C7II2W1n.js";import"./SpinnerLoader.component-D4g-QhUe.js";import"./Loader.component-C9qA52Gf.js";import"./Flex.component-CMKfz10l.js";import"./index-BIzvBz7y.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DPw8o_SY.js";import"./Spinner.component-4On_l0hw.js";import"./ProgressCircle.component-D1QqNNgO.js";import"./number-nHrFdSb-.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-DHqbpAmX.js";import"./scale-CqCDTNu0.js";import"./Collection-DwMxgycI.js";import"./CollectionBuilder-L_wKxqRd.js";import"./ComboInput.context-D__g77G8.js";import"./ComboInput.styles-kOaziVwv.js";import"./SkeletonLoader.component-q75MwwfP.js";import"./Input.context-WAk7TvcM.js";import"./useFormReset-GcAVnfXr.js";import"./useFormValidationState-CONlS5Wo.js";import"./useEvent-CI_xZcmG.js";import"./useTextField-D4_p2q36.js";import"./useControlledState-vzCMHZvt.js";import"./useField-D8gfBVj0.js";import"./useFormValidation-CnIG3AAh.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useSpinButton-B52iW2OY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./Label.context-CXmZcjY3.js";import"./Message.context-BSLt3c3C.js";import"./ErrorMessage.context-C6OyzACS.js";import"./typography-B_qJ0BtB.js";const Or={title:"Fields/ComboInput",component:p,parameters:{layout:"centered"},argTypes:{...L,padding:{control:"select",options:["left","right","both"]},isLoading:{control:"boolean",table:{category:"Field State"}},loadingLabel:{control:"text",table:{category:"Field State"}}}},o={args:{children:[r.jsx(y,{icon:"search"},"icon"),r.jsx(m,{placeholder:"Search"},"actual-input")],padding:"both"}},t={args:{...o.args,isLoading:!0,loadingLabel:"Loading"}},i={render:n=>r.jsx(p,{...n}),args:{padding:"left",children:[r.jsx(m,{},"input"),r.jsx(v,{$size:"3",children:"/10"},"text"),r.jsx(a,{icon:"search",variant:"ghost"},"icon")]}},e={render:n=>r.jsx(S,{children:r.jsxs(p,{...n,children:[r.jsx(m,{}),r.jsxs(F,{children:[r.jsx(a,{slot:"decrement",icon:"remove",variant:"ghost"}),r.jsx(a,{slot:"increment",icon:"add",variant:"ghost"})]})]})}),args:{padding:"left"}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
