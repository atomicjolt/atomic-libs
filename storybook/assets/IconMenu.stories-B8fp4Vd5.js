import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as j}from"./cssprops-BO85xpNm.js";import{I as b}from"./IconMenu.component-DfgQnbNc.js";import{I as t,S as f}from"./Collection-cZH6f0Bi.js";import{M as n}from"./MaterialIcon.component-hQ9Uu0J7.js";import"./index-DlO4Jvyt.js";import"./index-DmM0KDA7.js";import"./useLabels-D0NjiLiF.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./context-BF7eBGFA.js";import"./VisuallyHidden-Yvqu08fX.js";import"./useFocusWithin-C-e8UI97.js";import"./useFocusable-B7cTVP20.js";import"./usePress-Cng8MYxN.js";import"./index-D_Kw7eWP.js";import"./index-nLeaPAJ8.js";import"./context-DYfCRJJJ.js";import"./FocusScope-CLRP0VYY.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayPosition-Pku7IVZb.js";import"./ProgressCircle.component-BlbtEDe_.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-B1sX0IQZ.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./index-CqJC2f1M.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./colors-x_YFGAop.js";import"./styled-components.browser.esm-S-CusIP4.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./useOverlayTriggerState-BxLf_MI7.js";import"./PressResponder-CHEeukYG.js";import"./useControlledState-sJfMLWrs.js";import"./CollectionBuilder-DglRgqo3.js";import"./useForwardedRef-BWfLegUW.js";import"./Popover.context-CkZWeej5.js";import"./MenuTrigger-VoBxaPK4.js";import"./useMenuTrigger-Cre1gTLs.js";import"./useSelectableItem-C-hNvN1k.js";import"./useEvent-Qm4q9YOK.js";import"./scrollIntoView-DuDju04b.js";import"./useDescription-CP-qk7_s.js";import"./useOverlayTrigger-BaVZjogA.js";import"./Provider-op_UCnZE.js";import"./Menu.component-B9Gb2uf9.js";import"./useSelectableList-Ca_ZI4zK.js";import"./DOMLayoutDelegate-Dsrs9r60.js";import"./useCollator-DZEoqIyA.js";import"./getItemCount-C96_vkqw.js";import"./useHover-WxTHsieF.js";import"./useCollectionRenderer-BeqeLBJu.js";import"./useFocusRing-BmyBc2tX.js";import"./mixins-BOHXBJW9.js";import"./Divider.component-Bpnxmsv4.js";import"./utils-DqmNl-Il.js";import"./IconButton.component-Da4ILow8.js";import"./Button.component-BcdaaP2f.js";import"./useButton-CBzhh6F5.js";import"./useLink-BTwsTyp1.js";import"./SpinnerLoader.component-DJXvo7dP.js";import"./Loader.component-Dt3yODGv.js";import"./Flex.component-LqFgqvCS.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./Checkmark.component-CRE6wLUH.js";import"./Spinner.component-C1TzuC8j.js";import"./Icons.styles-T5NoJEsB.js";const Te={title:"Dropdowns/Menu/IconMenu",component:b,parameters:{layout:"centered",cssprops:j("Dropdown","Menu","Button")},argTypes:{buttonVariant:{control:"select",options:["primary","secondary","error","success","inverted","content"]},iconVariant:{control:"select",options:["default","outlined","round","sharp","two-tone"]},children:{control:!1},onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},onOpenChange:{description:"Callback for when the menu is opened or closed.",table:{category:"Events"}},isOpen:{control:"boolean",description:"Control the open state of the menu externally."},defaultOpen:{control:"boolean",description:"Whether the menu is open by default."},disabledKeys:{control:"multi-select",options:["item1","item2","item3"],description:"Keys of items that should be disabled."}}},r={args:{icon:"more_vert",children:[e.jsx(t,{id:"item1",onAction:()=>alert("Item 1"),children:"Item 1"},"item1"),e.jsx(t,{id:"item2",onAction:()=>alert("Item 2"),children:"Item 2"},"item2"),e.jsx(t,{id:"item3",onAction:()=>alert("Item 3"),children:"Item 3"},"item3")]}},o={args:{...r.args,children:[e.jsx(t,{children:"Item 1"},"item1"),e.jsx(t,{children:"Item 2"},"item2"),e.jsxs(f,{children:[e.jsx(t,{children:"Item 3"},"item3"),e.jsx(t,{children:"Item 4"},"item4")]},"section")]}},i={args:{...r.args,children:[e.jsxs(t,{children:[e.jsx(n,{icon:"edit"}),"Edit"]},"item1"),e.jsxs(t,{children:[e.jsx(n,{icon:"delete"}),"Delete"]},"item2"),e.jsxs(t,{children:[e.jsx(n,{icon:"archive"}),"Archive"]},"item3")]}},m={args:{...r.args,disabledKeys:["item2"]}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const qe=["Primary","WithSections","WithIcons","DisabledItems"];export{m as DisabledItems,r as Primary,i as WithIcons,o as WithSections,qe as __namedExportsOrder,Te as default};
