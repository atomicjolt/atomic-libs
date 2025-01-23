import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{g as j}from"./cssprops-BTVAmD30.js";import{I as b}from"./IconMenu.component-CjAXmTBn.js";import{I as t,S as f}from"./Collection-DjPHrlSR.js";import{M as n}from"./MaterialIcon.component-Bb94pzqW.js";import"./index-DJO9vBfz.js";import"./MenuTrigger-l6M71u5l.js";import"./useMenuTrigger-CZON2-u9.js";import"./useObjectRef-CjtaasUj.js";import"./SSRProvider-DAMUgb6s.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useSelectableItem-CQRiYui4.js";import"./index-DJdX7xnk.js";import"./FocusScope-D8kX7o4N.js";import"./focusSafely-f-NvfehK.js";import"./usePress-DOH0gK78.js";import"./useEvent-CWl__ymk.js";import"./scrollIntoView-DWX27Gz-.js";import"./isScrollable-BSEN4xi5.js";import"./useDescription-B_JleuLr.js";import"./useOverlayTrigger-BMp1DQII.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./PressResponder-DcoPugtK.js";import"./Provider-B9Eqn13H.js";import"./Popover.context--7q0wYv0.js";import"./index-Co2NqHf1.js";import"./Menu.component-B9Ir2Bbr.js";import"./index-i5X67GZP.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-mEN2zsP6.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-BQpRQjOj.js";import"./getItemCount-DIKwApTf.js";import"./useFocus-zOn8SIU-.js";import"./utils-Bz-oJdcG.js";import"./useHover-D34ofACQ.js";import"./useKeyboard-A8_doyNT.js";import"./CollectionBuilder-JuF9vAdV.js";import"./useForwardedRef-BqZ3RrEL.js";import"./useCollectionRenderer-Crm-vNbA.js";import"./useControlledState-CN8sBTKq.js";import"./useRenderProps-Bk8BH60l.js";import"./useFocusRing-CkPe2VLa.js";import"./useFocusWithin-BwiFBvMF.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./mixins-D6ZuOvce.js";import"./Divider.component-BK_sltmD.js";import"./utils-2VFVy79V.js";import"./context-C-yxdEES.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-D-lvPMs5.js";import"./IconButton.component-Dg_s0u7A.js";import"./Button.component-DtbpFVXN.js";import"./useButton-CK1XMKNi.js";import"./useFocusable-CRaVIClu.js";import"./useLink-Bis7wRJn.js";import"./SpinnerLoader.component-CZS0l4HJ.js";import"./Loader.component-DTNPwaWm.js";import"./Flex.component-BqyhhyXT.js";import"./layout-qoR695S7.js";import"./Checkmark.component-DV3x2bJU.js";import"./Spinner.component-LKZLOMLe.js";import"./Popover.component-C_GNLa8i.js";import"./useLabels-DvZR7g99.js";import"./VisuallyHidden-NGXyR_YU.js";import"./useOverlayPosition-aJa5QpHr.js";import"./number-nHrFdSb-.js";import"./Icons.styles-BaNpbbIh.js";const Be={title:"Dropdowns/Menu/IconMenu",component:b,parameters:{layout:"centered",cssprops:j("Dropdown","Menu","Button")},argTypes:{buttonVariant:{control:"select",options:["primary","secondary","error","success","inverted","content"]},iconVariant:{control:"select",options:["default","outlined","round","sharp","two-tone"]},children:{control:!1},onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},onOpenChange:{description:"Callback for when the menu is opened or closed.",table:{category:"Events"}},isOpen:{control:"boolean",description:"Control the open state of the menu externally."},defaultOpen:{control:"boolean",description:"Whether the menu is open by default."},disabledKeys:{control:"multi-select",options:["item1","item2","item3"],description:"Keys of items that should be disabled."}}},r={args:{icon:"more_vert",children:[e.jsx(t,{id:"item1",onAction:()=>alert("Item 1"),children:"Item 1"},"item1"),e.jsx(t,{id:"item2",onAction:()=>alert("Item 2"),children:"Item 2"},"item2"),e.jsx(t,{id:"item3",onAction:()=>alert("Item 3"),children:"Item 3"},"item3")]}},o={args:{...r.args,children:[e.jsx(t,{children:"Item 1"},"item1"),e.jsx(t,{children:"Item 2"},"item2"),e.jsxs(f,{children:[e.jsx(t,{children:"Item 3"},"item3"),e.jsx(t,{children:"Item 4"},"item4")]},"section")]}},i={args:{...r.args,children:[e.jsxs(t,{children:[e.jsx(n,{icon:"edit"}),"Edit"]},"item1"),e.jsxs(t,{children:[e.jsx(n,{icon:"delete"}),"Delete"]},"item2"),e.jsxs(t,{children:[e.jsx(n,{icon:"archive"}),"Archive"]},"item3")]}},m={args:{...r.args,disabledKeys:["item2"]}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    icon: "more_vert",
    children: [<Item id="item1" key="item1" onAction={() => alert("Item 1")}>
        Item 1
      </Item>, <Item id="item2" key="item2" onAction={() => alert("Item 2")}>
        Item 2
      </Item>, <Item id="item3" key="item3" onAction={() => alert("Item 3")}>
        Item 3
      </Item>]
  }
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [<Item key="item1">Item 1</Item>, <Item key="item2">Item 2</Item>, <Section key="section">
        <Item key="item3">Item 3</Item>
        <Item key="item4">Item 4</Item>
      </Section>]
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var I,h,u;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [<Item key="item1">
        <MaterialIcon icon="edit" />
        Edit
      </Item>, <Item key="item2">
        <MaterialIcon icon="delete" />
        Delete
      </Item>, <Item key="item3">
        <MaterialIcon icon="archive" />
        Archive
      </Item>]
  }
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,g,x;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabledKeys: ["item2"]
  }
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const Re=["Primary","WithSections","WithIcons","DisabledItems"];export{m as DisabledItems,r as Primary,i as WithIcons,o as WithSections,Re as __namedExportsOrder,Be as default};
