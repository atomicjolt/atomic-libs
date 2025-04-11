import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as S}from"./helpers-B5Ajgn2E.js";import{I as e,S as C}from"./Collection-DqSZYP0m.js";import{g as j}from"./cssprops-BO85xpNm.js";import{C as y}from"./CustomSelect.component-CYfXrV_B.js";import{F as m}from"./Flex.component-rrKmR1Yr.js";import{M as a}from"./MaterialIcon.component-Ca-Jxrbg.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./index-BCtMShv3.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-DtFyGqjN.js";import"./useLabels-B8dXFA8d.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./VisuallyHidden-XQ8XJ7MR.js";import"./useFocusWithin-BshFo8_g.js";import"./usePress-B9aiz4Kw.js";import"./context-CHG5exGL.js";import"./FocusScope-DX4qyq_T.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayPosition-BbsEgUQ6.js";import"./ProgressCircle.component-OpnlU6y-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DDcndmXW.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./index-CsiUWFDz.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./colors-x_YFGAop.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useOverlayTriggerState-P0osIcob.js";import"./PressResponder-DMBUHunT.js";import"./useControlledState-vzCMHZvt.js";import"./useForwardedRef-Tweo1nQG.js";import"./Popover.context-C-WvC77F.js";import"./index-66t8MbvJ.js";import"./useSelectableList-Ds66KyIO.js";import"./useSelectableItem-Kg4f-Zia.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./useDescription-CqPnuqnT.js";import"./DOMLayoutDelegate-I1X3xMo1.js";import"./useCollator-CKtzjMN3.js";import"./getItemCount-Cm3pwbxO.js";import"./useHover-Cc-utFbH.js";import"./useFocusRing-CLjBjOxD.js";import"./useCollectionRenderer-qIlVmK1t.js";import"./Provider-op_UCnZE.js";import"./mixins-XviowZ_6.js";import"./Label.component-DfcWPA-J.js";import"./Label.context-BbpE5KUK.js";import"./useListState-CznNPLiL.js";import"./Divider.component-BrVxhPI1.js";import"./utils-DqmNl-Il.js";import"./FloatingFieldInputWrapper-BXDekG5Z.js";import"./Message.component-FuO2yEmk.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.component-ukBp7bMH.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./Dropdowns.styles-N-QU7Zui.js";import"./SelectField.component-DmxuhRB4.js";import"./useField-BY78xfaL.js";import"./useMenuTrigger-BHVMtN_y.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidation-BfT1egZx.js";import"./Button.component-CR9mri1v.js";import"./useButton-nVeIkIqk.js";import"./useLink-FIfyncSu.js";import"./SpinnerLoader.component-D-tKw9E3.js";import"./Loader.component-D7Erho5g.js";import"./Checkmark.component-9SUCBX5x.js";import"./Spinner.component-Bslo7_jG.js";import"./DropdownButton-CcO8_Pk9.js";import"./useFormValidationState-CONlS5Wo.js";import"./useSingleSelectListState-CYv7PGb3.js";import"./layout-C5ppTKTq.js";import"./Icons.styles-D-JqKhr6.js";const re={title:"Dropdowns/Selection/CustomSelect",component:y,parameters:{layout:"centered",cssprops:j("Dropdown","Listbox","Button")},argTypes:{...S,variant:{control:"select",options:["default","floating"]},selectedKey:{control:"select",description:"Control the value of the selected key in a controlled component",options:["val1","val2","val3",null]},defaultSelectedKey:{control:!1,description:"Control the value of the selected key in an uncontrolled component"},children:{control:!1},isOpen:{control:"boolean",description:"Control the open state of the menu"},defaultOpen:{control:"boolean",description:"Control the inital state of the menu"},onOpenChange:{control:!1,action:"onOpenChange",description:"Callback for when the menu is opened or closed",table:{category:"Events"}},onSelectionChange:{action:"onSelectionChange",control:!1,description:"Callback for when the selection changes",table:{category:"Events"}}}},o={args:{size:"medium",variant:"default",label:"Custom Select Label",children:[t.jsx(e,{id:"val1",children:"Item 1"}),t.jsx(e,{id:"val2",children:"Item 2"}),t.jsx(e,{id:"val3",children:"Item 3"})]}},r={args:{...o.args,children:[t.jsx(e,{id:"val1",children:"Item 1"}),t.jsx(e,{id:"val2",children:"Item 2"}),t.jsx(e,{id:"val3",children:"Item 3"}),t.jsxs(C,{title:"Section Title",children:[t.jsx(e,{id:"val4",children:"Item 4"}),t.jsx(e,{id:"val5",children:"Item 5"})]})]}},i={args:{...o.args,defaultSelectedKey:"undefined",variant:"floating"}},n={args:{...o.args,children:[t.jsx(e,{textValue:"Home",children:t.jsxs(m,{gap:4,alignItems:"center",children:[t.jsx(a,{icon:"home"}),"Home"]})},"1"),t.jsx(e,{textValue:"Settings",children:t.jsxs(m,{gap:4,alignItems:"center",children:[t.jsx(a,{icon:"settings"}),"Settings"]})},"2"),t.jsx(e,{textValue:"Profile",children:t.jsxs(m,{gap:4,alignItems:"center",children:[t.jsx(a,{icon:"account_circle"}),"Profile"]})},"3")]}};var s,l,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: "medium",
    variant: "default",
    label: "Custom Select Label",
    children: [<Item id="val1">Item 1</Item>, <Item id="val2">Item 2</Item>, <Item id="val3">Item 3</Item>]
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,I;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [<Item id="val1">Item 1</Item>, <Item id="val2">Item 2</Item>, <Item id="val3">Item 3</Item>, <Section title="Section Title">
        <Item id="val4">Item 4</Item>
        <Item id="val5">Item 5</Item>
      </Section>]
  }
}`,...(I=(d=r.parameters)==null?void 0:d.docs)==null?void 0:I.source}}};var g,u,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultSelectedKey: "undefined",
    variant: "floating"
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,f,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [<Item key="1" textValue="Home">
        <Flex gap={4} alignItems="center">
          <MaterialIcon icon="home" />
          Home
        </Flex>
      </Item>, <Item key="2" textValue="Settings">
        <Flex gap={4} alignItems="center">
          <MaterialIcon icon="settings" />
          Settings
        </Flex>
      </Item>, <Item key="3" textValue="Profile">
        <Flex gap={4} alignItems="center">
          <MaterialIcon icon="account_circle" />
          Profile
        </Flex>
      </Item>]
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ie=["Primary","WithSections","Floating","WithCustomContent"];export{i as Floating,o as Primary,n as WithCustomContent,r as WithSections,ie as __namedExportsOrder,re as default};
