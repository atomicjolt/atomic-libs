import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as S}from"./helpers-DIZg5bA6.js";import{I as e,S as C}from"./Collection-cZH6f0Bi.js";import{g as j}from"./cssprops-BO85xpNm.js";import{C as y}from"./CustomSelect.component-Dr1G6H8L.js";import{F as m}from"./Flex.component-LqFgqvCS.js";import{M as a}from"./MaterialIcon.component-hQ9Uu0J7.js";import"./styled-components.browser.esm-S-CusIP4.js";import"./index-DmM0KDA7.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./CollectionBuilder-DglRgqo3.js";import"./index-D_Kw7eWP.js";import"./index-nLeaPAJ8.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./index-DlO4Jvyt.js";import"./useLabels-D0NjiLiF.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./context-BF7eBGFA.js";import"./VisuallyHidden-Yvqu08fX.js";import"./useFocusWithin-C-e8UI97.js";import"./usePress-Cng8MYxN.js";import"./context-DYfCRJJJ.js";import"./FocusScope-CLRP0VYY.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayPosition-Pku7IVZb.js";import"./ProgressCircle.component-BlbtEDe_.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-B1sX0IQZ.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./index-CqJC2f1M.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./colors-x_YFGAop.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./useOverlayTriggerState-BxLf_MI7.js";import"./PressResponder-CHEeukYG.js";import"./useControlledState-sJfMLWrs.js";import"./useForwardedRef-BWfLegUW.js";import"./Popover.context-CkZWeej5.js";import"./index-CQoer24W.js";import"./useSelectableList-Ca_ZI4zK.js";import"./useSelectableItem-C-hNvN1k.js";import"./useEvent-Qm4q9YOK.js";import"./scrollIntoView-DuDju04b.js";import"./useDescription-CP-qk7_s.js";import"./DOMLayoutDelegate-Dsrs9r60.js";import"./useCollator-DZEoqIyA.js";import"./getItemCount-C96_vkqw.js";import"./useHover-WxTHsieF.js";import"./useFocusRing-BmyBc2tX.js";import"./useCollectionRenderer-BeqeLBJu.js";import"./Provider-op_UCnZE.js";import"./mixins-BOHXBJW9.js";import"./Label.component-Bux1bQyn.js";import"./Label.context-8YwVGsEO.js";import"./useListState-BOwdsj8-.js";import"./Divider.component-Bpnxmsv4.js";import"./utils-DqmNl-Il.js";import"./FloatingFieldInputWrapper-BYUYsVjJ.js";import"./Message.component-D8ICG7W9.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.component-BVX2wl3L.js";import"./ErrorMessage.context-D-RNFvKn.js";import"./Dropdowns.styles-c5wm-1S0.js";import"./SelectField.component-CfP0305I.js";import"./useField-BhG43OVF.js";import"./useMenuTrigger-Cre1gTLs.js";import"./useOverlayTrigger-BaVZjogA.js";import"./useFormReset-DvzwwQm6.js";import"./useFormValidation-CsrNRCZi.js";import"./Button.component-BcdaaP2f.js";import"./useButton-CBzhh6F5.js";import"./useLink-BTwsTyp1.js";import"./SpinnerLoader.component-DJXvo7dP.js";import"./Loader.component-Dt3yODGv.js";import"./Checkmark.component-CRE6wLUH.js";import"./Spinner.component-C1TzuC8j.js";import"./DropdownButton-D8Cb2nd-.js";import"./useFormValidationState-CKAS44yz.js";import"./useSingleSelectListState-CT1HfnY0.js";import"./layout-C5ppTKTq.js";import"./Icons.styles-T5NoJEsB.js";const re={title:"Dropdowns/Selection/CustomSelect",component:y,parameters:{layout:"centered",cssprops:j("Dropdown","Listbox","Button")},argTypes:{...S,variant:{control:"select",options:["default","floating"]},selectedKey:{control:"select",description:"Control the value of the selected key in a controlled component",options:["val1","val2","val3",null]},defaultSelectedKey:{control:!1,description:"Control the value of the selected key in an uncontrolled component"},children:{control:!1},isOpen:{control:"boolean",description:"Control the open state of the menu"},defaultOpen:{control:"boolean",description:"Control the inital state of the menu"},onOpenChange:{control:!1,action:"onOpenChange",description:"Callback for when the menu is opened or closed",table:{category:"Events"}},onSelectionChange:{action:"onSelectionChange",control:!1,description:"Callback for when the selection changes",table:{category:"Events"}}}},o={args:{size:"medium",variant:"default",label:"Custom Select Label",children:[t.jsx(e,{id:"val1",children:"Item 1"}),t.jsx(e,{id:"val2",children:"Item 2"}),t.jsx(e,{id:"val3",children:"Item 3"})]}},r={args:{...o.args,children:[t.jsx(e,{id:"val1",children:"Item 1"}),t.jsx(e,{id:"val2",children:"Item 2"}),t.jsx(e,{id:"val3",children:"Item 3"}),t.jsxs(C,{title:"Section Title",children:[t.jsx(e,{id:"val4",children:"Item 4"}),t.jsx(e,{id:"val5",children:"Item 5"})]})]}},i={args:{...o.args,defaultSelectedKey:"undefined",variant:"floating"}},n={args:{...o.args,children:[t.jsx(e,{textValue:"Home",children:t.jsxs(m,{gap:4,alignItems:"center",children:[t.jsx(a,{icon:"home"}),"Home"]})},"1"),t.jsx(e,{textValue:"Settings",children:t.jsxs(m,{gap:4,alignItems:"center",children:[t.jsx(a,{icon:"settings"}),"Settings"]})},"2"),t.jsx(e,{textValue:"Profile",children:t.jsxs(m,{gap:4,alignItems:"center",children:[t.jsx(a,{icon:"account_circle"}),"Profile"]})},"3")]}};var s,l,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
