import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as S}from"./helpers-B3wxvxjs.js";import{I as e,S as C}from"./Collection-DwMxgycI.js";import{g as j}from"./cssprops-DECR0Nbg.js";import{M as m}from"./index-Cfxh8j0A.js";import{F as a}from"./index-BKev5x84.js";import{C as y}from"./CustomSelect.component-CBLjGEEy.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./index-BCtMShv3.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./CollectionBuilder-L_wKxqRd.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Icons.styles-qcj_pyb3.js";import"./filterDOMProps-CeZl_uWj.js";import"./index-C_lK3xe_.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./useTranslations-lvMpgG-n.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./FloatingFieldInputWrapper-CcQPXBOU.js";import"./Label.component-Cug8xlkg.js";import"./mixins-CcgEHb9c.js";import"./Label.context-Bxyvy4yx.js";import"./Message.component-B9rKbZxs.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.component-Ilwe58nC.js";import"./ErrorMessage.context-B4seO6gR.js";import"./Dropdowns.styles-BgGXBCyL.js";import"./SelectField.component-D0H4l-6f.js";import"./useSelectableList-am-fquo2.js";import"./useSelectableItem-CB6YxwGd.js";import"./usePress-BJ4Xpz5E.js";import"./useEvent-CI_xZcmG.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-CZScMWlh.js";import"./useDescription-BfD2gYva.js";import"./DOMLayoutDelegate-Cf7ai49Z.js";import"./useCollator-CKtzjMN3.js";import"./useField-D8gfBVj0.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useMenuTrigger-BrUw3rky.js";import"./useOverlayTrigger-DK-ooV0I.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useFormReset-GcAVnfXr.js";import"./useFormValidation-CnIG3AAh.js";import"./VisuallyHidden-DMkWAsdD.js";import"./useFocusWithin-dfJl9rAf.js";import"./PressResponder-BmlOUkeL.js";import"./context-BGWN95Kf.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-op_UCnZE.js";import"./Popover.context-wYAB1U4T.js";import"./useFormValidationState-CONlS5Wo.js";import"./useOverlayTriggerState-B3l5rho6.js";import"./useControlledState-vzCMHZvt.js";import"./useSingleSelectListState-DG2mThDA.js";import"./useListState-DzwI-ba9.js";import"./useCollectionRenderer-BmZBBt5O.js";import"./ListBox.component-C50t9cjj.js";import"./getItemCount-DoOlIVRG.js";import"./useHover-Cvy3Ip4i.js";import"./useFocusRing-zxvArQTZ.js";import"./useForwardedRef-DuXBQIpF.js";import"./Divider.component-DY9fDTTW.js";import"./Button.context-e0zTg6D5.js";import"./Button.component-B6pmc1GB.js";import"./BaseButton-DN81bJV_.js";import"./useButton-B6TSBwA2.js";import"./useLink-C7Cuty20.js";import"./SpinnerLoader.component-Brqh9rtd.js";import"./Loader.component-2Lbsssw7.js";import"./Checkmark.component-BEMNJhu5.js";import"./Spinner.component-TZts3DK4.js";import"./ProgressCircle.component-C9C-EnQN.js";import"./number-nHrFdSb-.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Popover.component-BZ1X2Dho.js";import"./useOverlayPosition-CwzQS3_v.js";const me={title:"Dropdowns/Selection/CustomSelect",component:y,parameters:{layout:"centered",cssprops:j("Dropdown","Listbox","Button")},argTypes:{...S,variant:{control:"select",options:["default","floating"]},selectedKey:{control:"select",description:"Control the value of the selected key in a controlled component",options:["val1","val2","val3",null]},defaultSelectedKey:{control:!1,description:"Control the value of the selected key in an uncontrolled component"},children:{control:!1},isOpen:{control:"boolean",description:"Control the open state of the menu"},defaultOpen:{control:"boolean",description:"Control the inital state of the menu"},onOpenChange:{control:!1,action:"onOpenChange",description:"Callback for when the menu is opened or closed",table:{category:"Events"}},onSelectionChange:{action:"onSelectionChange",control:!1,description:"Callback for when the selection changes",table:{category:"Events"}}}},o={args:{size:"medium",variant:"default",label:"Custom Select Label",children:[t.jsx(e,{id:"val1",children:"Item 1"}),t.jsx(e,{id:"val2",children:"Item 2"}),t.jsx(e,{id:"val3",children:"Item 3"})]}},r={args:{...o.args,children:[t.jsx(e,{id:"val1",children:"Item 1"}),t.jsx(e,{id:"val2",children:"Item 2"}),t.jsx(e,{id:"val3",children:"Item 3"}),t.jsxs(C,{title:"Section Title",children:[t.jsx(e,{id:"val4",children:"Item 4"}),t.jsx(e,{id:"val5",children:"Item 5"})]})]}},i={args:{...o.args,defaultSelectedKey:"undefined",variant:"floating"}},n={args:{...o.args,children:[t.jsx(e,{textValue:"Home",children:t.jsxs(a,{gap:4,alignItems:"center",children:[t.jsx(m,{icon:"home"}),"Home"]})},"1"),t.jsx(e,{textValue:"Settings",children:t.jsxs(a,{gap:4,alignItems:"center",children:[t.jsx(m,{icon:"settings"}),"Settings"]})},"2"),t.jsx(e,{textValue:"Profile",children:t.jsxs(a,{gap:4,alignItems:"center",children:[t.jsx(m,{icon:"account_circle"}),"Profile"]})},"3")]}};var s,l,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ae=["Primary","WithSections","Floating","WithCustomContent"];export{i as Floating,o as Primary,n as WithCustomContent,r as WithSections,ae as __namedExportsOrder,me as default};
