import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{g as j}from"./cssprops-BO85xpNm.js";import"./index-CiXbT4OJ.js";import"./index-wv7jOzEt.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-DMYB56kE.js";import{I as e,S as b}from"./Collection-DqSZYP0m.js";import"./index-SU87TpAq.js";import{I as f}from"./IconMenu.component--rSdiX2Q.js";import{M as n}from"./MaterialIcon.component-BPfLNDii.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BCtMShv3.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./MenuTrigger-c7_iPJ7S.js";import"./useMenuTrigger-BHVMtN_y.js";import"./useSelectableItem-Kg4f-Zia.js";import"./usePress-B9aiz4Kw.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DX4qyq_T.js";import"./context-z6pb9OkM.js";import"./useDescription-CqPnuqnT.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./PressResponder-DMBUHunT.js";import"./Provider-op_UCnZE.js";import"./Popover.context-C-WvC77F.js";import"./index-CsiUWFDz.js";import"./Menu.component-DdJlSAOR.js";import"./index-EJ0-2BeM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-Ds66KyIO.js";import"./DOMLayoutDelegate-I1X3xMo1.js";import"./useCollator-CKtzjMN3.js";import"./getItemCount-Cm3pwbxO.js";import"./useHover-Cc-utFbH.js";import"./useForwardedRef-Tweo1nQG.js";import"./useCollectionRenderer-qIlVmK1t.js";import"./useControlledState-vzCMHZvt.js";import"./useRenderProps-CP918x9p.js";import"./useFocusRing-CLjBjOxD.js";import"./useFocusWithin-BshFo8_g.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./mixins-XviowZ_6.js";import"./Divider.component-DNSQqAMQ.js";import"./utils-DqmNl-Il.js";import"./context-CHG5exGL.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-P0osIcob.js";import"./IconButton.component-JKw63aNX.js";import"./Button.component-n6YOe3WN.js";import"./useButton-nVeIkIqk.js";import"./useLink-FIfyncSu.js";import"./Button.context-BxdzJgC_.js";import"./SpinnerLoader.component-Dxnx9axg.js";import"./Loader.component-BsgHHDCs.js";import"./Flex.component-rrKmR1Yr.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C44VOTWe.js";import"./ProgressCircle.component-_TQleApR.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Popover.component-DRRrX2CR.js";import"./VisuallyHidden-XQ8XJ7MR.js";import"./useOverlayPosition-CUQlxOSl.js";import"./Icons.styles-D-JqKhr6.js";const Nt={title:"Dropdowns/Menu/IconMenu",component:f,parameters:{layout:"centered",cssprops:j("Dropdown","Menu","Button")},argTypes:{buttonVariant:{control:"select",options:["primary","secondary","error","success","inverted","content"]},iconVariant:{control:"select",options:["default","outlined","round","sharp","two-tone"]},children:{control:!1},onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},onOpenChange:{description:"Callback for when the menu is opened or closed.",table:{category:"Events"}},isOpen:{control:"boolean",description:"Control the open state of the menu externally."},defaultOpen:{control:"boolean",description:"Whether the menu is open by default."},disabledKeys:{control:"multi-select",options:["item1","item2","item3"],description:"Keys of items that should be disabled."}}},r={args:{icon:"more_vert",children:[t.jsx(e,{id:"item1",onAction:()=>alert("Item 1"),children:"Item 1"},"item1"),t.jsx(e,{id:"item2",onAction:()=>alert("Item 2"),children:"Item 2"},"item2"),t.jsx(e,{id:"item3",onAction:()=>alert("Item 3"),children:"Item 3"},"item3")]}},o={args:{...r.args,children:[t.jsx(e,{children:"Item 1"},"item1"),t.jsx(e,{children:"Item 2"},"item2"),t.jsxs(b,{children:[t.jsx(e,{children:"Item 3"},"item3"),t.jsx(e,{children:"Item 4"},"item4")]},"section")]}},i={args:{...r.args,children:[t.jsxs(e,{children:[t.jsx(n,{icon:"edit"}),"Edit"]},"item1"),t.jsxs(e,{children:[t.jsx(n,{icon:"delete"}),"Delete"]},"item2"),t.jsxs(e,{children:[t.jsx(n,{icon:"archive"}),"Archive"]},"item3")]}},m={args:{...r.args,disabledKeys:["item2"]}};var s,p,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(p=r.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const Qt=["Primary","WithSections","WithIcons","DisabledItems"];export{m as DisabledItems,r as Primary,i as WithIcons,o as WithSections,Qt as __namedExportsOrder,Nt as default};
