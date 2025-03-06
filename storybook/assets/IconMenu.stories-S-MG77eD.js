import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{g as j}from"./cssprops-BO85xpNm.js";import{I as b}from"./IconMenu.component-jCMSkjHd.js";import{I as t,S as f}from"./Collection-CnHW8amz.js";import{M as n}from"./index-jGwUeqkW.js";import"./index-DJO9vBfz.js";import"./MenuTrigger-DlxnHLa7.js";import"./useMenuTrigger-D4JZZ4oE.js";import"./useObjectRef-CA0MXmrf.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useSelectableItem-c4_FIivV.js";import"./index-DJdX7xnk.js";import"./FocusScope-BnAoeAyt.js";import"./focusSafely-BOUv7I-8.js";import"./usePress-DBLAzBwe.js";import"./useEvent-D91OnqQ2.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./useDescription-DnVXAhCi.js";import"./useOverlayTrigger-1aF1CP0g.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./PressResponder-DHeHotEt.js";import"./Provider-B9Eqn13H.js";import"./Popover.context-aAMlw-9Y.js";import"./index-CHPAqjqs.js";import"./Menu.component-1yj9E0ST.js";import"./index-i5X67GZP.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-Cco9av5W.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-BQpRQjOj.js";import"./getItemCount-DVbD48h8.js";import"./useFocus-DXSPV_um.js";import"./utils-CrQpPYo7.js";import"./useHover-D34ofACQ.js";import"./useKeyboard-A8_doyNT.js";import"./CollectionBuilder-Xbel4YvD.js";import"./useForwardedRef-BqZ3RrEL.js";import"./useCollectionRenderer-DZUEjMJ2.js";import"./useControlledState-CN8sBTKq.js";import"./useRenderProps-Bk8BH60l.js";import"./useFocusRing-PETNqKnG.js";import"./useFocusWithin-Bb3mfDwa.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./mixins-B7X2BZyR.js";import"./Divider.component-BK_sltmD.js";import"./utils-2VFVy79V.js";import"./context-BILoGgXl.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-B9DFGNg6.js";import"./IconButton.component-CFNeuELj.js";import"./Button.component-7ZEnE2xC.js";import"./useButton-Bk3lNUMb.js";import"./useFocusable-DHL4UX94.js";import"./useLink-XD5ax7xG.js";import"./SpinnerLoader.component-BvhIBz4v.js";import"./Loader.component-BDvxQSI3.js";import"./index-5u02HfcA.js";import"./layout-UyCWIQlE.js";import"./spacing-Bd-CIscW.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-CK7MNkmm.js";import"./ProgressCircle.component-BbXhAaqf.js";import"./useLabel-CTphHQ-t.js";import"./useLabels-6dTMP4oW.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Popover.component-CMdXs4Vo.js";import"./VisuallyHidden-CFly2HD4.js";import"./useOverlayPosition-DJHgNtuZ.js";import"./Icons.styles-BaNpbbIh.js";const Ge={title:"Dropdowns/Menu/IconMenu",component:b,parameters:{layout:"centered",cssprops:j("Dropdown","Menu","Button")},argTypes:{buttonVariant:{control:"select",options:["primary","secondary","error","success","inverted","content"]},iconVariant:{control:"select",options:["default","outlined","round","sharp","two-tone"]},children:{control:!1},onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},onOpenChange:{description:"Callback for when the menu is opened or closed.",table:{category:"Events"}},isOpen:{control:"boolean",description:"Control the open state of the menu externally."},defaultOpen:{control:"boolean",description:"Whether the menu is open by default."},disabledKeys:{control:"multi-select",options:["item1","item2","item3"],description:"Keys of items that should be disabled."}}},r={args:{icon:"more_vert",children:[e.jsx(t,{id:"item1",onAction:()=>alert("Item 1"),children:"Item 1"},"item1"),e.jsx(t,{id:"item2",onAction:()=>alert("Item 2"),children:"Item 2"},"item2"),e.jsx(t,{id:"item3",onAction:()=>alert("Item 3"),children:"Item 3"},"item3")]}},o={args:{...r.args,children:[e.jsx(t,{children:"Item 1"},"item1"),e.jsx(t,{children:"Item 2"},"item2"),e.jsxs(f,{children:[e.jsx(t,{children:"Item 3"},"item3"),e.jsx(t,{children:"Item 4"},"item4")]},"section")]}},i={args:{...r.args,children:[e.jsxs(t,{children:[e.jsx(n,{icon:"edit"}),"Edit"]},"item1"),e.jsxs(t,{children:[e.jsx(n,{icon:"delete"}),"Delete"]},"item2"),e.jsxs(t,{children:[e.jsx(n,{icon:"archive"}),"Archive"]},"item3")]}},m={args:{...r.args,disabledKeys:["item2"]}};var s,p,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const He=["Primary","WithSections","WithIcons","DisabledItems"];export{m as DisabledItems,r as Primary,i as WithIcons,o as WithSections,He as __namedExportsOrder,Ge as default};
