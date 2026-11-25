import{j as r}from"./iframe-CGPW5dgX.js";import{d as y,R as L}from"./helpers-tUmR_xN7.js";import{C as p}from"./ComboInput.component-CE8IM2YS.js";import{M as v}from"./MaterialIcon.component-Dhrh5rCP.js";import{I as m}from"./Input.component-dygiXatG.js";import{N as C}from"./NumberField.component-fcYsibWP.js";import{G as N}from"./Group.component-DBQBcqJr.js";import{I as a}from"./IconButton.component-CifirOzj.js";import{T as S}from"./Text.component-Br2J6Hgv.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./index-C0dagnaq.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./ComboInput.context-3NxJI3U3.js";import"./ComboInput.styles-CPtnBAXP.js";import"./mixins-BJuiWlrm.js";import"./SkeletonLoader.component-DalY9QZY.js";import"./context-CLSG1ylv.js";import"./Loading.context-EUscm4UA.js";import"./Icons.styles-tJBW4wd9.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input.context-DET8yoFh.js";import"./displayName-CEXLPPBu.js";import"./useFormReset-mO407CKi.js";import"./useFormValidationState-CWonILzS.js";import"./useFocusWithin-BzfIRRcZ.js";import"./usePress-BioWcz2v.js";import"./useEvent-CiV_uWQE.js";import"./useTextField-CPDUiJax.js";import"./useField-DXQ2XZid.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useFormValidation-hpNb-DuC.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-BU1srigh.js";import"./LiveAnnouncer-CAA6IyTk.js";import"./BaseButton-B8bVR-o6.js";import"./useFocusRing-Dbcio0BW.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./colors-PU9nFmCW.js";import"./Field.styles-CxKAGZMW.js";import"./Provider-CKCHWQEo.js";import"./Label.context-D58S6_wU.js";import"./Message.context-D_Dpg15a.js";import"./ErrorMessage.context-tIEpfdG1.js";import"./typography-DqSTiArL.js";const Rr={title:"Fields/ComboInput",component:p,parameters:{layout:"centered"},argTypes:{...L,padding:{control:"select",options:["left","right","both"]},...y}},o={args:{children:[r.jsx(v,{icon:"search"},"icon"),r.jsx(m,{placeholder:"Search"},"actual-input")],padding:"both"}},t={args:{...o.args,isLoading:!0,loadingLabel:"Loading"}},e={render:n=>r.jsx(p,{...n}),args:{padding:"left",children:[r.jsx(m,{},"input"),r.jsx(S,{$size:"3",children:"/10"},"text"),r.jsx(a,{icon:"search",variant:"ghost"},"icon")]}},i={render:n=>r.jsx(C,{children:r.jsxs(p,{...n,children:[r.jsx(m,{}),r.jsxs(N,{children:[r.jsx(a,{slot:"decrement",icon:"remove",variant:"ghost"}),r.jsx(a,{slot:"increment",icon:"add",variant:"ghost"})]})]})}),args:{padding:"left"}},_r=["Primary","Loading","NumberInputWithSearch","NumberFieldWithButtons"];var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<MaterialIcon icon="search" key="icon" />, <Input placeholder="Search" key="actual-input" />],
    padding: "both"
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ComboInput {...args}></ComboInput>,
  args: {
    padding: "left",
    children: [<Input key="input" />, <Text key="text" $size="3">
        /10
      </Text>, <IconButton icon="search" variant="ghost" key="icon" />]
  }
}`,...(I=(x=e.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var b,f,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <NumberField>
      <ComboInput {...args}>
        <Input />
        <Group>
          <IconButton slot="decrement" icon="remove" variant="ghost" />
          <IconButton slot="increment" icon="add" variant="ghost" />
        </Group>
      </ComboInput>
    </NumberField>,
  args: {
    padding: "left"
  }
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};export{t as Loading,i as NumberFieldWithButtons,e as NumberInputWithSearch,o as Primary,_r as __namedExportsOrder,Rr as default};
