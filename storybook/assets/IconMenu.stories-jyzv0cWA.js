import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as j}from"./cssprops-DECR0Nbg.js";import{I as b}from"./IconMenu.component-B13jM_xI.js";import{I as t,S as f}from"./Collection-Cmq5KClr.js";import{M as n}from"./MaterialIcon.component-mYkiuQKC.js";import"./MenuTrigger-DCNxc13M.js";import"./index-BCtMShv3.js";import"./useMenuTrigger-DskRE53S.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useFocusable-DacP9xvE.js";import"./useSelectableItem-DFVaGUjR.js";import"./usePress-CqXh5MnK.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-Dv5_DXCK.js";import"./context-z6pb9OkM.js";import"./useDescription-CqPnuqnT.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./PressResponder-BZaXPZ_t.js";import"./Provider-op_UCnZE.js";import"./Popover.context-C-WvC77F.js";import"./index-CsiUWFDz.js";import"./Menu.component-07qXDcR0.js";import"./index-EJ0-2BeM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-DMpX2rIu.js";import"./DOMLayoutDelegate-y3WJR4ir.js";import"./useCollator-CKtzjMN3.js";import"./getItemCount-BoAGj9zy.js";import"./useHover-CQZXfm5n.js";import"./CollectionBuilder-D3rKkOdu.js";import"./useForwardedRef-Tweo1nQG.js";import"./useCollectionRenderer-gXFztQxQ.js";import"./useControlledState-vzCMHZvt.js";import"./useRenderProps-CP918x9p.js";import"./useFocusRing-DIS5Kyrs.js";import"./useFocusWithin-BJ0-_hiU.js";import"./styled-components.browser.esm-CROIn_Sd.js";import"./mixins-CnkRK664.js";import"./Divider.component-6t67wdMk.js";import"./utils-DqmNl-Il.js";import"./context-fqV0sG25.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-wHDN265d.js";import"./IconButton.component-BREk8TeC.js";import"./BaseButton-BT8qRonE.js";import"./useButton-9RZc7-Gk.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-v7dkTF1H.js";import"./Loader.component-B1l2EO1Y.js";import"./Flex.component-CRlckHC-.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./Checkmark.component-DXeF7mwP.js";import"./Spinner.component-B38mr82j.js";import"./ProgressCircle.component-CoB6f8J-.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-BxdzJgC_.js";import"./Popover.component-CtWeX_3C.js";import"./VisuallyHidden-CdgZn78T.js";import"./useOverlayPosition-CUQlxOSl.js";import"./Icons.styles-DL14pUoM.js";const ze={title:"Dropdowns/Menu/IconMenu",component:b,parameters:{layout:"centered",cssprops:j("Dropdown","Menu","Button")},argTypes:{buttonVariant:{control:"select",options:["primary","secondary","error","success","inverted","content"]},iconVariant:{control:"select",options:["default","outlined","round","sharp","two-tone"]},children:{control:!1},onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},onOpenChange:{description:"Callback for when the menu is opened or closed.",table:{category:"Events"}},isOpen:{control:"boolean",description:"Control the open state of the menu externally."},defaultOpen:{control:"boolean",description:"Whether the menu is open by default."},disabledKeys:{control:"multi-select",options:["item1","item2","item3"],description:"Keys of items that should be disabled."}}},r={args:{icon:"more_vert",children:[e.jsx(t,{id:"item1",onAction:()=>alert("Item 1"),children:"Item 1"},"item1"),e.jsx(t,{id:"item2",onAction:()=>alert("Item 2"),children:"Item 2"},"item2"),e.jsx(t,{id:"item3",onAction:()=>alert("Item 3"),children:"Item 3"},"item3")]}},o={args:{...r.args,children:[e.jsx(t,{children:"Item 1"},"item1"),e.jsx(t,{children:"Item 2"},"item2"),e.jsxs(f,{children:[e.jsx(t,{children:"Item 3"},"item3"),e.jsx(t,{children:"Item 4"},"item4")]},"section")]}},i={args:{...r.args,children:[e.jsxs(t,{children:[e.jsx(n,{icon:"edit"}),"Edit"]},"item1"),e.jsxs(t,{children:[e.jsx(n,{icon:"delete"}),"Delete"]},"item2"),e.jsxs(t,{children:[e.jsx(n,{icon:"archive"}),"Archive"]},"item3")]}},m={args:{...r.args,disabledKeys:["item2"]}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const Fe=["Primary","WithSections","WithIcons","DisabledItems"];export{m as DisabledItems,r as Primary,i as WithIcons,o as WithSections,Fe as __namedExportsOrder,ze as default};
