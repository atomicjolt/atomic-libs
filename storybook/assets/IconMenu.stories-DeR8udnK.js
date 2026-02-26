import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as j}from"./cssprops-DECR0Nbg.js";import{I as b}from"./IconMenu.component-BfRaS25T.js";import{I as t,S as f}from"./Collection-C4fZf6qK.js";import{M as n}from"./MaterialIcon.component-DGtHwafp.js";import"./index-CmulDOpF.js";import"./index-BCtMShv3.js";import"./useLabels-B8dXFA8d.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./VisuallyHidden-CAaDEiDk.js";import"./useFocusWithin-A-CR497l.js";import"./useFocusable-DacP9xvE.js";import"./usePress-DWgw6o5d.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./context-BQ_LTZSM.js";import"./FocusScope-DX4qyq_T.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayPosition-CUQlxOSl.js";import"./number-nHrFdSb-.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useOverlayTriggerState-B1GSxLCH.js";import"./PressResponder-Cuy-CUqK.js";import"./useControlledState-vzCMHZvt.js";import"./CollectionBuilder-BcAYd8lA.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./index-CsiUWFDz.js";import"./useForwardedRef-Tweo1nQG.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./Popover.context-C-WvC77F.js";import"./MenuTrigger-DkEL919l.js";import"./useMenuTrigger-X5VEQ_wu.js";import"./useSelectableItem-DG3EUeOV.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./useDescription-CqPnuqnT.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./Provider-op_UCnZE.js";import"./Menu.component-BDuYQJbV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-Bxw6w89V.js";import"./DOMLayoutDelegate-CHoMc6K8.js";import"./useCollator-CKtzjMN3.js";import"./getItemCount-o8orwjds.js";import"./useHover-BE1TTE1Q.js";import"./useCollectionRenderer-YX6BTLW_.js";import"./useFocusRing-CzfpHkj_.js";import"./mixins-XviowZ_6.js";import"./Divider.component-DNSQqAMQ.js";import"./utils-DqmNl-Il.js";import"./IconButton.component-DT4uw2DO.js";import"./BaseButton-5H6Te7Zz.js";import"./useButton-D1bzctNv.js";import"./useLink-BGiV_6Hq.js";import"./SpinnerLoader.component-Wqs5Po7c.js";import"./Loader.component-Ct1zfGD-.js";import"./Flex.component-BTH7Jim3.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C59bpdXu.js";import"./ProgressCircle.component-gsiCSqhQ.js";import"./useLabel-DDcndmXW.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-BxdzJgC_.js";import"./Icons.styles-D-JqKhr6.js";const ze={title:"Dropdowns/Menu/IconMenu",component:b,parameters:{layout:"centered",cssprops:j("Dropdown","Menu","Button")},argTypes:{buttonVariant:{control:"select",options:["primary","secondary","error","success","inverted","content"]},iconVariant:{control:"select",options:["default","outlined","round","sharp","two-tone"]},children:{control:!1},onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},onOpenChange:{description:"Callback for when the menu is opened or closed.",table:{category:"Events"}},isOpen:{control:"boolean",description:"Control the open state of the menu externally."},defaultOpen:{control:"boolean",description:"Whether the menu is open by default."},disabledKeys:{control:"multi-select",options:["item1","item2","item3"],description:"Keys of items that should be disabled."}}},r={args:{icon:"more_vert",children:[e.jsx(t,{id:"item1",onAction:()=>alert("Item 1"),children:"Item 1"},"item1"),e.jsx(t,{id:"item2",onAction:()=>alert("Item 2"),children:"Item 2"},"item2"),e.jsx(t,{id:"item3",onAction:()=>alert("Item 3"),children:"Item 3"},"item3")]}},o={args:{...r.args,children:[e.jsx(t,{children:"Item 1"},"item1"),e.jsx(t,{children:"Item 2"},"item2"),e.jsxs(f,{children:[e.jsx(t,{children:"Item 3"},"item3"),e.jsx(t,{children:"Item 4"},"item4")]},"section")]}},i={args:{...r.args,children:[e.jsxs(t,{children:[e.jsx(n,{icon:"edit"}),"Edit"]},"item1"),e.jsxs(t,{children:[e.jsx(n,{icon:"delete"}),"Delete"]},"item2"),e.jsxs(t,{children:[e.jsx(n,{icon:"archive"}),"Archive"]},"item3")]}},m={args:{...r.args,disabledKeys:["item2"]}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
