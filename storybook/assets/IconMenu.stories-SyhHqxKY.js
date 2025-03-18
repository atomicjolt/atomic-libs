import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as j}from"./cssprops-BO85xpNm.js";import{I as b}from"./IconMenu.component-BEKu7I3b.js";import{I as t,S as f}from"./Collection-Blx8idkz.js";import{M as n}from"./index-DGavfVYP.js";import"./MenuTrigger-ml9qve3R.js";import"./index-DmM0KDA7.js";import"./useMenuTrigger-DUYA4yl7.js";import"./useObjectRef-BMBYa31u.js";import"./SSRProvider-nIDwi1ZO.js";import"./useFocusable-DDF3Tgcq.js";import"./useSelectableItem-BlMo16Kr.js";import"./usePress-BejIIMCm.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useEvent-DX5YI6yT.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DY128LIr.js";import"./context-BF7eBGFA.js";import"./useDescription-DEja_w9s.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useOverlayTrigger-DR7rG5da.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./PressResponder-XOPwQlQI.js";import"./Provider-op_UCnZE.js";import"./Popover.context-Cb09Dlmi.js";import"./index-9MQGFWEg.js";import"./Menu.component-BkVPOCSj.js";import"./index-CrEZfznw.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-BlmLA-dr.js";import"./DOMLayoutDelegate-CYEMPlg-.js";import"./useCollator-DZEoqIyA.js";import"./getItemCount-bvAGpgdb.js";import"./useHover-BXnVJtPw.js";import"./CollectionBuilder-C8aBQCuV.js";import"./useForwardedRef-CeqQ-Fh5.js";import"./useCollectionRenderer-D0KC5ksC.js";import"./useControlledState-sJfMLWrs.js";import"./useRenderProps-BzxgHqRb.js";import"./useFocusRing-CMFCJy1v.js";import"./useFocusWithin-ypR2cHkl.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./mixins-CgZ-Dp8B.js";import"./Divider.component-Cp_2XO01.js";import"./utils-DqmNl-Il.js";import"./context-Cc6JC_Nk.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-DiYlioC9.js";import"./IconButton.component-D_uitLdX.js";import"./Button.component-Bc8mRpye.js";import"./useButton-EuBryRSZ.js";import"./useLink-ytEWay4y.js";import"./SpinnerLoader.component-CKnzGd3o.js";import"./Loader.component-BVJk9SjC.js";import"./Flex.component-CLGTqHVr.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-Dtx1YsdI.js";import"./ProgressCircle.component-DRcKSkPB.js";import"./useLabel-C1USB2dP.js";import"./useLabels-DqNC8NnF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Popover.component-ClG-26Ia.js";import"./VisuallyHidden-CdaVAzx-.js";import"./useOverlayPosition-DlQxrloi.js";import"./Icons.styles-D2L4nNgu.js";const Te={title:"Dropdowns/Menu/IconMenu",component:b,parameters:{layout:"centered",cssprops:j("Dropdown","Menu","Button")},argTypes:{buttonVariant:{control:"select",options:["primary","secondary","error","success","inverted","content"]},iconVariant:{control:"select",options:["default","outlined","round","sharp","two-tone"]},children:{control:!1},onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},onOpenChange:{description:"Callback for when the menu is opened or closed.",table:{category:"Events"}},isOpen:{control:"boolean",description:"Control the open state of the menu externally."},defaultOpen:{control:"boolean",description:"Whether the menu is open by default."},disabledKeys:{control:"multi-select",options:["item1","item2","item3"],description:"Keys of items that should be disabled."}}},r={args:{icon:"more_vert",children:[e.jsx(t,{id:"item1",onAction:()=>alert("Item 1"),children:"Item 1"},"item1"),e.jsx(t,{id:"item2",onAction:()=>alert("Item 2"),children:"Item 2"},"item2"),e.jsx(t,{id:"item3",onAction:()=>alert("Item 3"),children:"Item 3"},"item3")]}},o={args:{...r.args,children:[e.jsx(t,{children:"Item 1"},"item1"),e.jsx(t,{children:"Item 2"},"item2"),e.jsxs(f,{children:[e.jsx(t,{children:"Item 3"},"item3"),e.jsx(t,{children:"Item 4"},"item4")]},"section")]}},i={args:{...r.args,children:[e.jsxs(t,{children:[e.jsx(n,{icon:"edit"}),"Edit"]},"item1"),e.jsxs(t,{children:[e.jsx(n,{icon:"delete"}),"Delete"]},"item2"),e.jsxs(t,{children:[e.jsx(n,{icon:"archive"}),"Archive"]},"item3")]}},m={args:{...r.args,disabledKeys:["item2"]}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
