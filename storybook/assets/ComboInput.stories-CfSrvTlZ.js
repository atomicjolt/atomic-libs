import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{M as b}from"./index-jGwUeqkW.js";import{C as p}from"./ComboInput.component-2ZX8DCSM.js";import{I as n}from"./Input.component-aD7FwtmD.js";import{I as x}from"./IconButton.component-CFNeuELj.js";import{N as m}from"./NumberField.component-BNJO-Ai-.js";import{G as j}from"./Group.component-DEZBPtlu.js";import"./index-DJO9vBfz.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./Icons.styles-BaNpbbIh.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./useObjectRef-CA0MXmrf.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DHL4UX94.js";import"./focusSafely-BOUv7I-8.js";import"./useFocus-DXSPV_um.js";import"./utils-CrQpPYo7.js";import"./useKeyboard-A8_doyNT.js";import"./ComboInput.styles-x3aI4rV_.js";import"./mixins-B7X2BZyR.js";import"./index-CHPAqjqs.js";import"./ComboInput.context-yOfG-dCd.js";import"./Input.context-Cu61juEz.js";import"./Button.component-7ZEnE2xC.js";import"./useFocusRing-PETNqKnG.js";import"./useFocusWithin-Bb3mfDwa.js";import"./useButton-Bk3lNUMb.js";import"./usePress-DBLAzBwe.js";import"./useLink-XD5ax7xG.js";import"./SpinnerLoader.component-BvhIBz4v.js";import"./Loader.component-BDvxQSI3.js";import"./index-5u02HfcA.js";import"./layout-UyCWIQlE.js";import"./spacing-Bd-CIscW.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-CK7MNkmm.js";import"./ProgressCircle.component-BbXhAaqf.js";import"./useLabel-CTphHQ-t.js";import"./useLabels-6dTMP4oW.js";import"./useNumberFormatter-D5qg7lg6.js";import"./context-BQ3_Es2z.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./useFormReset-D24hgWtm.js";import"./useFormValidationState-DFldk10H.js";import"./useEvent-D91OnqQ2.js";import"./useTextField-Bu86_h4p.js";import"./useControlledState-CN8sBTKq.js";import"./useField-DAe_M2wp.js";import"./useFormValidation-CdG9-Yzp.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./useSpinButton-CkfgV2Fh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-wtg9rJuP.js";import"./Provider-B9Eqn13H.js";import"./Label.context-BY30H9b8.js";import"./Message.context-BF8cnA0i.js";import"./ErrorMessage.context-Cr_J9O6j.js";const kr={title:"Fields/ComboInput",component:p,parameters:{layout:"centered"},argTypes:{padding:{control:"multi-select",options:["left","right"]}}},t={args:{children:[r.jsx(b,{icon:"search"},"icon"),r.jsx(n,{placeholder:"Search"},"actual-input")]}},o={render:e=>r.jsx(p,{...e}),args:{padding:"left",children:[r.jsx(n,{},"input"),r.jsx("span",{children:"/10"},"total"),r.jsx(x,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(m,{children:r.jsxs(p,{...e,children:[r.jsx(n,{}),r.jsxs(j,{gap:0,children:[r.jsx(m.DecrementButton,{icon:"remove",variant:"ghost",size:"small"}),r.jsx(m.IncrementButton,{icon:"add",variant:"ghost",size:"small"})]})]})}),args:{padding:"left"}};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const zr=["Primary","NumberInputWithSearch","NumberFieldWithButtons"];export{i as NumberFieldWithButtons,o as NumberInputWithSearch,t as Primary,zr as __namedExportsOrder,kr as default};
