import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import"./index-C0DXmw5d.js";import{C as p}from"./ComboInput.component-D4sIyXOw.js";import{M as b}from"./MaterialIcon.component-Bqs5W7S4.js";import{I as n}from"./Input.component-Bg4qoZRQ.js";import{I as x}from"./IconButton.component-Cg2HWRAW.js";import{N as m}from"./NumberField.component-CldRs-JV.js";import{G as j}from"./Group.component-CIkbtIFW.js";import"./index-DJO9vBfz.js";import"./ComboInput.styles-x3aI4rV_.js";import"./mixins-B7X2BZyR.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./index-De95zDiF.js";import"./useObjectRef-BKue9pYL.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./ComboInput.context-Dk1bHly0.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./Icons.styles-BaNpbbIh.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-o0N_IkwX.js";import"./focusSafely-BOUv7I-8.js";import"./useFocus-DJe2BRHe.js";import"./utils-Df1WEgxG.js";import"./useKeyboard-A8_doyNT.js";import"./Input.context-KI5tKbdp.js";import"./Button.component-Bfqq8odl.js";import"./useFocusRing-CPkBIT8D.js";import"./useFocusWithin-DSbUfD8x.js";import"./useButton-AoKYWM9F.js";import"./usePress-Cu0aM-K5.js";import"./useLink-ByNL9j8X.js";import"./SpinnerLoader.component-qW2PqPLJ.js";import"./Loader.component-l5wuRCiG.js";import"./index-CyCRagT9.js";import"./Flex.component-DqBL6Xjb.js";import"./layout-B6NAx4l9.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-D3qB71XV.js";import"./ProgressCircle.component-DZo3rxOV.js";import"./useLabel-CSTUXoQW.js";import"./useLabels-B24R2YQq.js";import"./useNumberFormatter-D5qg7lg6.js";import"./context-BQ3_Es2z.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./useFormReset-C11SSN19.js";import"./useFormValidationState-DFldk10H.js";import"./useEvent-CXpXU_b4.js";import"./useTextField-DSYflh9X.js";import"./useControlledState-CN8sBTKq.js";import"./useField-mSuDlNxJ.js";import"./useFormValidation-D05SS9o7.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./useSpinButton-D0G3eTCL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-wtg9rJuP.js";import"./Provider-B9Eqn13H.js";import"./Label.context-ChhuUauO.js";import"./Message.context-BObz3Mtj.js";import"./ErrorMessage.context-D3SbpLIU.js";const zr={title:"Fields/ComboInput",component:p,parameters:{layout:"centered"},argTypes:{padding:{control:"multi-select",options:["left","right"]}}},t={args:{children:[r.jsx(b,{icon:"search"},"icon"),r.jsx(n,{placeholder:"Search"},"actual-input")]}},o={render:e=>r.jsx(p,{...e}),args:{padding:"left",children:[r.jsx(n,{},"input"),r.jsx("span",{children:"/10"},"total"),r.jsx(x,{icon:"search",variant:"ghost"},"icon")]}},i={render:e=>r.jsx(m,{children:r.jsxs(p,{...e,children:[r.jsx(n,{}),r.jsxs(j,{gap:0,children:[r.jsx(m.DecrementButton,{icon:"remove",variant:"ghost",size:"small"}),r.jsx(m.IncrementButton,{icon:"add",variant:"ghost",size:"small"})]})]})}),args:{padding:"left"}};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const Gr=["Primary","NumberInputWithSearch","NumberFieldWithButtons"];export{i as NumberFieldWithButtons,o as NumberInputWithSearch,t as Primary,Gr as __namedExportsOrder,zr as default};
