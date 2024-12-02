import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{g as j}from"./cssprops-BGfeK0jo.js";import{I as b}from"./IconMenu.component-Bsk5ezXJ.js";import{I as t,S as f}from"./Collection-Bcaq8CIK.js";import{M as n}from"./index-C_RUmn9I.js";import"./index-DJO9vBfz.js";import"./MenuTrigger-DNRHgdZg.js";import"./useMenuTrigger-RuJE9uUm.js";import"./useObjectRef-C4RVQRRU.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./context-CKyfYUWk.js";import"./useSelectableItem-ohL7oXES.js";import"./useControlledState-CN8sBTKq.js";import"./index-DJdX7xnk.js";import"./FocusScope-BKSplYEH.js";import"./focusSafely-GXGk_mpd.js";import"./usePress-DG8LklVH.js";import"./useEvent-CWcEg10T.js";import"./scrollIntoView-DWX27Gz-.js";import"./isScrollable-BSEN4xi5.js";import"./useDescription-DnVXAhCi.js";import"./useOverlayTrigger-DeiYnLln.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./PressResponder-Dd5vRurA.js";import"./Provider-B9Eqn13H.js";import"./context-p027hjsN.js";import"./Menu.component-D8pl1557.js";import"./index-i5X67GZP.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-B62EEucu.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-DksGeqLW.js";import"./getItemCount-77JuFrxk.js";import"./useFocus-C-we61At.js";import"./utils-DHlq6CLd.js";import"./useHover-D34ofACQ.js";import"./useKeyboard-A8_doyNT.js";import"./CollectionBuilder-Vf4TV1hX.js";import"./useForwardedRef-BqZ3RrEL.js";import"./useCollectionRenderer-DooeD2Pa.js";import"./useRenderProps-BqJZ5b79.js";import"./useFocusRing-MU4psFt8.js";import"./useFocusWithin-DOCmU_ML.js";import"./index-CXdyvu6V.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./mixins-TlkgTuSN.js";import"./Divider.component-DwvL9aOv.js";import"./utils-CWBnbg5w.js";import"./context-C5Zmhtj1.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-DMR8aBHV.js";import"./IconButton.component-C815Wh4m.js";import"./Button.component-Bg3ttyxF.js";import"./useButton-GWYvoXvT.js";import"./useFocusable-DyKXFx56.js";import"./useLink-ytCU544I.js";import"./SpinnerLoader.component-BS7s8xEm.js";import"./Loader.component-CqkhvLsa.js";import"./index-K1z_EpAd.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./Popover.component-CB2Nnidh.js";import"./useLabels-DtS694vG.js";import"./VisuallyHidden-BPFT_fih.js";import"./useOverlayPosition-DNw_PjS2.js";import"./number-nHrFdSb-.js";import"./Section-BBepoPM4.js";import"./Icons.styles-Doaby5xe.js";const Re={title:"Dropdowns/Menu/IconMenu",component:b,parameters:{layout:"centered",cssprops:j("Dropdown","Menu","Button")},argTypes:{buttonVariant:{control:"select",options:["primary","secondary","error","success","inverted","content"]},iconVariant:{control:"select",options:["default","outlined","round","sharp","two-tone"]},children:{control:!1},onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},onOpenChange:{description:"Callback for when the menu is opened or closed.",table:{category:"Events"}},isOpen:{control:"boolean",description:"Control the open state of the menu externally."},defaultOpen:{control:"boolean",description:"Whether the menu is open by default."},disabledKeys:{control:"multi-select",options:["item1","item2","item3"],description:"Keys of items that should be disabled."}}},r={args:{icon:"more_vert",children:[e.jsx(t,{id:"item1",onAction:()=>alert("Item 1"),children:"Item 1"},"item1"),e.jsx(t,{id:"item2",onAction:()=>alert("Item 2"),children:"Item 2"},"item2"),e.jsx(t,{id:"item3",onAction:()=>alert("Item 3"),children:"Item 3"},"item3")]}},o={args:{...r.args,children:[e.jsx(t,{children:"Item 1"},"item1"),e.jsx(t,{children:"Item 2"},"item2"),e.jsxs(f,{children:[e.jsx(t,{children:"Item 3"},"item3"),e.jsx(t,{children:"Item 4"},"item4")]},"section")]}},i={args:{...r.args,children:[e.jsxs(t,{children:[e.jsx(n,{icon:"edit"}),"Edit"]},"item1"),e.jsxs(t,{children:[e.jsx(n,{icon:"delete"}),"Delete"]},"item2"),e.jsxs(t,{children:[e.jsx(n,{icon:"archive"}),"Archive"]},"item3")]}},m={args:{...r.args,disabledKeys:["item2"]}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const Te=["Primary","WithSections","WithIcons","DisabledItems"];export{m as DisabledItems,r as Primary,i as WithIcons,o as WithSections,Te as __namedExportsOrder,Re as default};
