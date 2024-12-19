import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{M as I}from"./MenuTrigger-ChdLEjke.js";import{O as d}from"./helpers-vNBwIeRc.js";import{I as o}from"./Collection-_kdosoh5.js";import{B as u}from"./Button.component-CvwjrRb6.js";import{M as g}from"./MaterialIcon.component-DppQdNZ1.js";import{P as c}from"./Popover.component-DzwRr1Vg.js";import{M as l}from"./Menu.component-CBFymae4.js";import{I as h}from"./IconButton.component-Bk3DfWc9.js";import"./index-DJO9vBfz.js";import"./useMenuTrigger-Cw5CX3Pa.js";import"./useObjectRef-B0fXxeND.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./context-CKyfYUWk.js";import"./useSelectableItem-DvhFvnzE.js";import"./index-DJdX7xnk.js";import"./FocusScope-F7zojRTj.js";import"./focusSafely-DAnwb70X.js";import"./usePress-DLdGKM_D.js";import"./useEvent-DE_dT4RF.js";import"./scrollIntoView-DWX27Gz-.js";import"./isScrollable-BSEN4xi5.js";import"./useDescription-DnVXAhCi.js";import"./useOverlayTrigger-CznOZ0w1.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./PressResponder-BPXFM0Rx.js";import"./Provider-B9Eqn13H.js";import"./Popover.context-8QQeO7WZ.js";import"./index-B_KxbAnX.js";import"./context-C20uxASh.js";import"./useFocusWithin-Dppy9HPm.js";import"./utils-BwOaQS7j.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-CQYPpINQ.js";import"./useControlledState-CN8sBTKq.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./CollectionBuilder-DRj8-oKX.js";import"./Section-BBepoPM4.js";import"./useFocusRing-DokLxauV.js";import"./useFocus-CqC7M1wJ.js";import"./useRenderProps-BqJZ5b79.js";import"./index-i5X67GZP.js";import"./useButton-CctGfIuY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CsZREXhx.js";import"./useKeyboard-A8_doyNT.js";import"./useLink-BfspLt2l.js";import"./mixins-TlkgTuSN.js";import"./SpinnerLoader.component-Bg5XyiJ8.js";import"./Loader.component-D2-tScza.js";import"./index-CiylWqPi.js";import"./utils-CWBnbg5w.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./Icons.styles-Doaby5xe.js";import"./useLabels-DVGDEngn.js";import"./VisuallyHidden-Co53BRDr.js";import"./useOverlayPosition-C9xJM2-X.js";import"./number-nHrFdSb-.js";import"./useForwardedRef-BqZ3RrEL.js";import"./useSelectableList-D3ubgvA_.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-DksGeqLW.js";import"./getItemCount-v0kWppE5.js";import"./useHover-D34ofACQ.js";import"./useCollectionRenderer-DqbkNnVh.js";import"./Divider.component-DwvL9aOv.js";const Et={title:"Dropdowns/Menu/MenuTrigger",component:I,parameters:{layout:"centered"},argTypes:{...d,trigger:{control:"select",options:["press","longPress"],description:"The trigger type for opening the menu."}}},r={args:{children:[t.jsxs(u,{children:["Open Me",t.jsx(g,{icon:"arrow_drop_down"})]},"button"),t.jsx(c,{placement:"bottom left",children:t.jsxs(l,{children:[t.jsx(o,{onAction:()=>alert("Item 1"),children:"Item 1"}),t.jsx(o,{onAction:()=>alert("Item 2"),children:"Item 2"}),t.jsx(o,{onAction:()=>alert("Item 3"),children:"Item 3"})]})},"popover")]}},e={args:{children:[t.jsx(h,{icon:"arrow_drop_down"}),t.jsx(c,{placement:"bottom left",children:t.jsxs(l,{children:[t.jsx(o,{onAction:()=>alert("Item 1"),children:"Item 1"}),t.jsx(o,{onAction:()=>alert("Item 2"),children:"Item 2"}),t.jsx(o,{onAction:()=>alert("Item 3"),children:"Item 3"})]})},"popover")]}};var m,i,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: [<Button key="button">
        Open Me
        <MaterialIcon icon="arrow_drop_down" />
      </Button>, <Popover placement="bottom left" key="popover">
        <Menu>
          <Item onAction={() => alert("Item 1")}>Item 1</Item>
          <Item onAction={() => alert("Item 2")}>Item 2</Item>
          <Item onAction={() => alert("Item 3")}>Item 3</Item>
        </Menu>
      </Popover>]
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var p,s,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: [<IconButton icon="arrow_drop_down" />, <Popover placement="bottom left" key="popover">
        <Menu>
          <Item onAction={() => alert("Item 1")}>Item 1</Item>
          <Item onAction={() => alert("Item 2")}>Item 2</Item>
          <Item onAction={() => alert("Item 3")}>Item 3</Item>
        </Menu>
      </Popover>]
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const St=["Primary","IconButtonTrigger"];export{e as IconButtonTrigger,r as Primary,St as __namedExportsOrder,Et as default};
