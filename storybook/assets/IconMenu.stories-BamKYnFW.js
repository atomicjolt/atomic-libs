import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{g as j}from"./cssprops-BO85xpNm.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-C0DXmw5d.js";import"./index-CyCRagT9.js";import{I as e,S as b}from"./Collection-CnHW8amz.js";import"./index-SU87TpAq.js";import{I as f}from"./IconMenu.component-D8F5zNXS.js";import{M as n}from"./MaterialIcon.component-Bqs5W7S4.js";import"./index-DJO9vBfz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./MenuTrigger-BW9rTgPe.js";import"./useMenuTrigger-A3nQFss-.js";import"./useObjectRef-BKue9pYL.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useSelectableItem-CDjoIRnz.js";import"./FocusScope-BnAoeAyt.js";import"./focusSafely-BOUv7I-8.js";import"./usePress-Cu0aM-K5.js";import"./useEvent-CXpXU_b4.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./useDescription-DnVXAhCi.js";import"./useOverlayTrigger-DEPcgMBT.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./PressResponder-Dqe7WJHR.js";import"./Provider-B9Eqn13H.js";import"./Popover.context-Iv_xuGDi.js";import"./index-De95zDiF.js";import"./Menu.component-Cvq3lAxX.js";import"./index-i5X67GZP.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-CW_SVv5R.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-BQpRQjOj.js";import"./getItemCount-imedabe4.js";import"./useFocus-DJe2BRHe.js";import"./utils-Df1WEgxG.js";import"./useHover-D34ofACQ.js";import"./useKeyboard-A8_doyNT.js";import"./useForwardedRef-BqZ3RrEL.js";import"./useCollectionRenderer-BjBmU679.js";import"./useControlledState-CN8sBTKq.js";import"./useRenderProps-Bk8BH60l.js";import"./useFocusRing-CPkBIT8D.js";import"./useFocusWithin-DSbUfD8x.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./mixins-B7X2BZyR.js";import"./Divider.component-BK_sltmD.js";import"./utils-2VFVy79V.js";import"./context-C_Tf37_9.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-BXapIe9V.js";import"./IconButton.component-Cg2HWRAW.js";import"./Button.component-Bfqq8odl.js";import"./useButton-AoKYWM9F.js";import"./useFocusable-o0N_IkwX.js";import"./useLink-ByNL9j8X.js";import"./SpinnerLoader.component-qW2PqPLJ.js";import"./Loader.component-l5wuRCiG.js";import"./Flex.component-DqBL6Xjb.js";import"./layout-B6NAx4l9.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-D3qB71XV.js";import"./ProgressCircle.component-DZo3rxOV.js";import"./useLabel-CSTUXoQW.js";import"./useLabels-B24R2YQq.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Popover.component-Dlw6ucoT.js";import"./VisuallyHidden-C_KI20v8.js";import"./useOverlayPosition-DFJP1Pe4.js";import"./Icons.styles-BaNpbbIh.js";const Nt={title:"Dropdowns/Menu/IconMenu",component:f,parameters:{layout:"centered",cssprops:j("Dropdown","Menu","Button")},argTypes:{buttonVariant:{control:"select",options:["primary","secondary","error","success","inverted","content"]},iconVariant:{control:"select",options:["default","outlined","round","sharp","two-tone"]},children:{control:!1},onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},onOpenChange:{description:"Callback for when the menu is opened or closed.",table:{category:"Events"}},isOpen:{control:"boolean",description:"Control the open state of the menu externally."},defaultOpen:{control:"boolean",description:"Whether the menu is open by default."},disabledKeys:{control:"multi-select",options:["item1","item2","item3"],description:"Keys of items that should be disabled."}}},r={args:{icon:"more_vert",children:[t.jsx(e,{id:"item1",onAction:()=>alert("Item 1"),children:"Item 1"},"item1"),t.jsx(e,{id:"item2",onAction:()=>alert("Item 2"),children:"Item 2"},"item2"),t.jsx(e,{id:"item3",onAction:()=>alert("Item 3"),children:"Item 3"},"item3")]}},o={args:{...r.args,children:[t.jsx(e,{children:"Item 1"},"item1"),t.jsx(e,{children:"Item 2"},"item2"),t.jsxs(b,{children:[t.jsx(e,{children:"Item 3"},"item3"),t.jsx(e,{children:"Item 4"},"item4")]},"section")]}},i={args:{...r.args,children:[t.jsxs(e,{children:[t.jsx(n,{icon:"edit"}),"Edit"]},"item1"),t.jsxs(e,{children:[t.jsx(n,{icon:"delete"}),"Delete"]},"item2"),t.jsxs(e,{children:[t.jsx(n,{icon:"archive"}),"Archive"]},"item3")]}},m={args:{...r.args,disabledKeys:["item2"]}};var s,p,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
