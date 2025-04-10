import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{M as I}from"./MenuTrigger-CjolrmSF.js";import{P as c}from"./index-CNUwzMAm.js";import{O as d}from"./helpers-B5Ajgn2E.js";import{I as o}from"./Collection-DqSZYP0m.js";import{B as u}from"./Button.component-B1VuTqO-.js";import{M as g}from"./MaterialIcon.component-DVFNi2Fq.js";import{M as l}from"./Menu.component-KAiXXrZk.js";import{I as h}from"./IconButton.component-BLxKwVs3.js";import"./index-BCtMShv3.js";import"./useMenuTrigger-BHVMtN_y.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useFocusable-DacP9xvE.js";import"./useSelectableItem-Kg4f-Zia.js";import"./usePress-B9aiz4Kw.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DX4qyq_T.js";import"./context-z6pb9OkM.js";import"./useDescription-CqPnuqnT.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./PressResponder-DMBUHunT.js";import"./Provider-op_UCnZE.js";import"./Popover.context-C-WvC77F.js";import"./index-CsiUWFDz.js";import"./context-CHG5exGL.js";import"./useFocusWithin-BshFo8_g.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-P0osIcob.js";import"./useControlledState-vzCMHZvt.js";import"./useLabels-B8dXFA8d.js";import"./VisuallyHidden-XQ8XJ7MR.js";import"./useOverlayPosition-BbsEgUQ6.js";import"./ProgressCircle.component-OpnlU6y-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DDcndmXW.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./colors-x_YFGAop.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./CollectionBuilder-D7AJqdfd.js";import"./useForwardedRef-Tweo1nQG.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./useFocusRing-CLjBjOxD.js";import"./useButton-nVeIkIqk.js";import"./useLink-FIfyncSu.js";import"./mixins-XviowZ_6.js";import"./SpinnerLoader.component-m7qmEdMF.js";import"./Loader.component-CAkSYpHw.js";import"./index-CgV6Zd7Q.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-ByE1AGU6.js";import"./Spinner.component-Bslo7_jG.js";import"./Icons.styles-D-JqKhr6.js";import"./useSelectableList-Ds66KyIO.js";import"./DOMLayoutDelegate-I1X3xMo1.js";import"./useCollator-CKtzjMN3.js";import"./getItemCount-Cm3pwbxO.js";import"./useHover-Cc-utFbH.js";import"./useCollectionRenderer-qIlVmK1t.js";import"./Divider.component-B3utIuXm.js";const Dt={title:"Dropdowns/Menu/MenuTrigger",component:I,parameters:{layout:"centered"},argTypes:{...d,trigger:{control:"select",options:["press","longPress"],description:"The trigger type for opening the menu."}}},r={args:{children:[t.jsxs(u,{children:["Open Me",t.jsx(g,{icon:"arrow_drop_down"})]},"button"),t.jsx(c,{placement:"bottom left",children:t.jsxs(l,{children:[t.jsx(o,{onAction:()=>alert("Item 1"),children:"Item 1"}),t.jsx(o,{onAction:()=>alert("Item 2"),children:"Item 2"}),t.jsx(o,{onAction:()=>alert("Item 3"),children:"Item 3"})]})},"popover")]}},e={args:{children:[t.jsx(h,{icon:"arrow_drop_down"}),t.jsx(c,{placement:"bottom left",children:t.jsxs(l,{children:[t.jsx(o,{onAction:()=>alert("Item 1"),children:"Item 1"}),t.jsx(o,{onAction:()=>alert("Item 2"),children:"Item 2"}),t.jsx(o,{onAction:()=>alert("Item 3"),children:"Item 3"})]})},"popover")]}};var m,i,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Rt=["Primary","IconButtonTrigger"];export{e as IconButtonTrigger,r as Primary,Rt as __namedExportsOrder,Dt as default};
