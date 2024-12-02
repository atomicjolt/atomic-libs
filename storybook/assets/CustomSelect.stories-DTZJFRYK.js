import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{I as S}from"./helpers-DsiJys5i.js";import{I as e,S as C}from"./Collection-Bcaq8CIK.js";import{g as j}from"./cssprops-BGfeK0jo.js";import{M as m}from"./index-C_RUmn9I.js";import{F as a}from"./index-K1z_EpAd.js";import{C as y}from"./CustomSelect.component-DdiB8TpK.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./CollectionBuilder-Vf4TV1hX.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Section-BBepoPM4.js";import"./useRenderProps-BqJZ5b79.js";import"./index-i5X67GZP.js";import"./Icons.styles-Doaby5xe.js";import"./useObjectRef-C4RVQRRU.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DyKXFx56.js";import"./focusSafely-GXGk_mpd.js";import"./useFocus-C-we61At.js";import"./utils-DHlq6CLd.js";import"./useKeyboard-A8_doyNT.js";import"./utils-CWBnbg5w.js";import"./FloatingFieldInputWrapper-CEMLf6YP.js";import"./Label.component-5ShF5vdw.js";import"./mixins-TlkgTuSN.js";import"./index-CXdyvu6V.js";import"./Label.context-Cwics8Eu.js";import"./Message.component-DgHLwaZZ.js";import"./Message.context-DfHBDHY_.js";import"./ErrorMessage.component-DYIqQ3G7.js";import"./ErrorMessage.context-D3nT9BuV.js";import"./Dropdowns.styles-98uzmGSa.js";import"./SelectField.component-Bw0yr8VG.js";import"./useSelectableList-B62EEucu.js";import"./useSelectableItem-ohL7oXES.js";import"./useControlledState-CN8sBTKq.js";import"./FocusScope-BKSplYEH.js";import"./usePress-DG8LklVH.js";import"./useEvent-CWcEg10T.js";import"./scrollIntoView-DWX27Gz-.js";import"./isScrollable-BSEN4xi5.js";import"./context-CKyfYUWk.js";import"./useDescription-DnVXAhCi.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-DksGeqLW.js";import"./useField-4WjA1Loi.js";import"./useLabel-D3wT2o0c.js";import"./useLabels-DtS694vG.js";import"./useMenuTrigger-RuJE9uUm.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./useOverlayTrigger-DeiYnLln.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./useFormReset-BxS8FGOL.js";import"./useFormValidation-B89CjNwR.js";import"./VisuallyHidden-BPFT_fih.js";import"./useFocusWithin-DOCmU_ML.js";import"./PressResponder-Dd5vRurA.js";import"./context-C5Zmhtj1.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-B9Eqn13H.js";import"./context-p027hjsN.js";import"./Button.component-Bg3ttyxF.js";import"./useFocusRing-MU4psFt8.js";import"./useButton-GWYvoXvT.js";import"./useLink-ytCU544I.js";import"./SpinnerLoader.component-BS7s8xEm.js";import"./Loader.component-CqkhvLsa.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./DropdownButton-CxluEss9.js";import"./useFormValidationState-Cu8bp2uX.js";import"./useOverlayTriggerState-DMR8aBHV.js";import"./useSingleSelectListState-CcBly1Od.js";import"./useListState-sdH-ZySf.js";import"./ListBox.component-BRgs0b2E.js";import"./getItemCount-77JuFrxk.js";import"./useHover-D34ofACQ.js";import"./useForwardedRef-BqZ3RrEL.js";import"./useCollectionRenderer-DooeD2Pa.js";import"./Divider.component-DwvL9aOv.js";import"./Popover.component-CB2Nnidh.js";import"./useOverlayPosition-DNw_PjS2.js";import"./number-nHrFdSb-.js";const oe={title:"Dropdowns/Selection/CustomSelect",component:y,parameters:{layout:"centered",cssprops:j("Dropdown","Listbox","Button")},argTypes:{...S,variant:{control:"select",options:["default","floating"]},selectedKey:{control:"select",description:"Control the value of the selected key in a controlled component",options:["val1","val2","val3",null]},defaultSelectedKey:{control:!1,description:"Control the value of the selected key in an uncontrolled component"},children:{control:!1},isOpen:{control:"boolean",description:"Control the open state of the menu"},defaultOpen:{control:"boolean",description:"Control the inital state of the menu"},onOpenChange:{control:!1,action:"onOpenChange",description:"Callback for when the menu is opened or closed",table:{category:"Events"}},onSelectionChange:{action:"onSelectionChange",control:!1,description:"Callback for when the selection changes",table:{category:"Events"}}}},o={args:{size:"medium",variant:"default",label:"Custom Select Label",children:[t.jsx(e,{id:"val1",children:"Item 1"}),t.jsx(e,{id:"val2",children:"Item 2"}),t.jsx(e,{id:"val3",children:"Item 3"})]}},r={args:{...o.args,children:[t.jsx(e,{id:"val1",children:"Item 1"}),t.jsx(e,{id:"val2",children:"Item 2"}),t.jsx(e,{id:"val3",children:"Item 3"}),t.jsxs(C,{title:"Section Title",children:[t.jsx(e,{id:"val4",children:"Item 4"}),t.jsx(e,{id:"val5",children:"Item 5"})]})]}},i={args:{...o.args,defaultSelectedKey:"undefined",variant:"floating"}},n={args:{...o.args,children:[t.jsx(e,{textValue:"Home",children:t.jsxs(a,{gap:4,alignItems:"center",children:[t.jsx(m,{icon:"home"}),"Home"]})},"1"),t.jsx(e,{textValue:"Settings",children:t.jsxs(a,{gap:4,alignItems:"center",children:[t.jsx(m,{icon:"settings"}),"Settings"]})},"2"),t.jsx(e,{textValue:"Profile",children:t.jsxs(a,{gap:4,alignItems:"center",children:[t.jsx(m,{icon:"account_circle"}),"Profile"]})},"3")]}};var s,l,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const re=["Primary","WithSections","Floating","WithCustomContent"];export{i as Floating,o as Primary,n as WithCustomContent,r as WithSections,re as __namedExportsOrder,oe as default};
