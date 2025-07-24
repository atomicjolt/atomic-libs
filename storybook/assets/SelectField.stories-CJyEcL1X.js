import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{fn as n}from"./index-BgJgh-x_.js";import{c as I,R as j,F as y}from"./helpers-DOVaRqs_.js";import{g as b}from"./cssprops-BO85xpNm.js";import{I as o,S as m}from"./Collection-C2kgHJSW.js";import{M as h}from"./index-SPKsbD02.js";import{S as i}from"./SelectField.component-Bkhfg_DU.js";import{L as g}from"./Label.component-B9Ls_jeT.js";import{M as f}from"./Message.component-C2RnBMtT.js";import{B as u}from"./Button.component-I4DbnubE.js";import{P as S}from"./Popover.component-DXMSqQQZ.js";import{L as x}from"./ListBox.component-Da2sBc6I.js";import{E as C}from"./ErrorMessage.component-C4MrFAT_.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./index-BCtMShv3.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./CollectionBuilder-4ZFsDDvv.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Icons.styles-D-JqKhr6.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-D9su3VTu.js";import"./useSelectableItem-D3m3t1p1.js";import"./usePress-CzPFgv00.js";import"./useEvent-CI_xZcmG.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-BPqc7wak.js";import"./context-z6pb9OkM.js";import"./useDescription-BfD2gYva.js";import"./DOMLayoutDelegate-B_mVtI8s.js";import"./useCollator-CKtzjMN3.js";import"./useField-D8gfBVj0.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useMenuTrigger-CN6-7slb.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useOverlayTrigger-DK-ooV0I.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useFormReset-GcAVnfXr.js";import"./useFormValidation-CnIG3AAh.js";import"./VisuallyHidden-B9f1mXg1.js";import"./useFocusWithin-J-xELNez.js";import"./PressResponder-BCICcMDM.js";import"./context-XEak4h-o.js";import"./getScrollParent-BL0kfGii.js";import"./index-C_lK3xe_.js";import"./Provider-op_UCnZE.js";import"./Popover.context-wYAB1U4T.js";import"./mixins-XviowZ_6.js";import"./useFormValidationState-CONlS5Wo.js";import"./useOverlayTriggerState-RNOws59S.js";import"./useControlledState-vzCMHZvt.js";import"./useSingleSelectListState-CfGrmvDz.js";import"./useListState-Tb9DJULI.js";import"./useCollectionRenderer-Dbyt1FhG.js";import"./Label.context-Bxyvy4yx.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.context-B4seO6gR.js";import"./Button.context-e0zTg6D5.js";import"./useFocusRing-BT9oCgfs.js";import"./useButton-CIXIyXj7.js";import"./useLink-C_TmUO2i.js";import"./SpinnerLoader.component-CZyqbQAt.js";import"./Loader.component-Bbv54XPB.js";import"./index-BqqCK9sT.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-CKgxLGDu.js";import"./ProgressCircle.component-BOqryRrp.js";import"./number-nHrFdSb-.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./useOverlayPosition-CwzQS3_v.js";import"./useForwardedRef-DuXBQIpF.js";import"./getItemCount-Wvv0CPgU.js";import"./useHover-BOO5kGTb.js";import"./Divider.component-DNSQqAMQ.js";const to={title:"Fields/SelectField",component:i,parameters:{layout:"centered",cssprops:b("Dropdown","Listbox","Button")},argTypes:{...y,...j,...I,selectedKey:{control:"select",description:"Control the value of the selected key in a controlled component",options:["1","2","3",null]},defaultSelectedKey:{control:!1,description:"Control the value of the selected key in an uncontrolled component"},children:{control:!1},isOpen:{control:"boolean",description:"Control the open state of the menu"},defaultOpen:{control:"boolean",description:"Control the inital state of the menu"},onOpenChange:{control:!1,action:"onOpenChange",description:"Callback for when the menu is opened or closed",table:{category:"Events"}},onSelectionChange:{action:"onSelectionChange",control:!1,description:"Callback for when the selection changes",table:{category:"Events"}}}},t={args:{onSelectionChange:n(),onOpenChange:n(),children:[e.jsx(g,{children:"Select an item"},"label"),e.jsx(f,{children:"Choose an item from the list"},"message"),e.jsxs(u,{variant:"dropdown",children:[e.jsx(i.Value,{placeholder:"Select an option"}),e.jsx(h,{icon:"arrow_drop_down",style:{marginLeft:"auto"}})]},"button"),e.jsx(S,{children:e.jsxs(x,{children:[e.jsx(o,{id:"1",children:"Item 1"}),e.jsx(o,{id:"2",children:"Item 2"}),e.jsx(o,{id:"3",children:"Item 3"})]})},"popover"),e.jsx(C,{children:"Something went wrong"},"error")]}},r={args:{...t.args,children:[e.jsx(g,{children:"Select an item"},"label"),e.jsx(f,{children:"Choose an item from the list"},"message"),e.jsxs(u,{variant:"dropdown",children:[e.jsx(i.Value,{placeholder:"Select an option"}),e.jsx(h,{icon:"arrow_drop_down",style:{marginLeft:"auto"}})]},"button"),e.jsx(S,{children:e.jsxs(x,{children:[e.jsxs(m,{title:"Section 1",children:[e.jsx(o,{id:"1",children:"Item 1"}),e.jsx(o,{id:"2",children:"Item 2"})]}),e.jsxs(m,{title:"Section 1",children:[e.jsx(o,{id:"3",children:"Item 3"}),e.jsx(o,{id:"4",children:"Item 4"})]})]})},"popover")]}};var s,p,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    onSelectionChange: fn(),
    onOpenChange: fn(),
    children: [<FieldLabel key="label">Select an item</FieldLabel>, <FieldMessage key="message">Choose an item from the list</FieldMessage>, <Button key="button" variant="dropdown">
        <SelectField.Value placeholder="Select an option" />
        <MaterialIcon icon="arrow_drop_down" style={{
        marginLeft: "auto"
      }} />
      </Button>, <Popover key="popover">
        <ListBox>
          <Item id="1">Item 1</Item>
          <Item id="2">Item 2</Item>
          <Item id="3">Item 3</Item>
        </ListBox>
      </Popover>, <FieldErrorMessage key="error">Something went wrong</FieldErrorMessage>]
  }
}`,...(a=(p=t.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [<FieldLabel key="label">Select an item</FieldLabel>, <FieldMessage key="message">Choose an item from the list</FieldMessage>, <Button key="button" variant="dropdown">
        <SelectField.Value placeholder="Select an option" />
        <MaterialIcon icon="arrow_drop_down" style={{
        marginLeft: "auto"
      }} />
      </Button>, <Popover key="popover">
        <ListBox>
          <Section title="Section 1">
            <Item id="1">Item 1</Item>
            <Item id="2">Item 2</Item>
          </Section>

          <Section title="Section 1">
            <Item id="3">Item 3</Item>
            <Item id="4">Item 4</Item>
          </Section>
        </ListBox>
      </Popover>]
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const ro=["Primary","WithSections"];export{t as Primary,r as WithSections,ro as __namedExportsOrder,to as default};
