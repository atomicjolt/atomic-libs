import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{M as I}from"./MenuTrigger-VoBxaPK4.js";import{P as c}from"./index-DlO4Jvyt.js";import{O as d}from"./helpers-DIZg5bA6.js";import{I as o}from"./Collection-cZH6f0Bi.js";import{B as u}from"./Button.component-BcdaaP2f.js";import{M as g}from"./MaterialIcon.component-hQ9Uu0J7.js";import{M as l}from"./Menu.component-B9Gb2uf9.js";import{I as h}from"./IconButton.component-Da4ILow8.js";import"./index-DmM0KDA7.js";import"./useMenuTrigger-Cre1gTLs.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./useFocusable-B7cTVP20.js";import"./useSelectableItem-C-hNvN1k.js";import"./usePress-Cng8MYxN.js";import"./index-D_Kw7eWP.js";import"./index-nLeaPAJ8.js";import"./useEvent-Qm4q9YOK.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-CLRP0VYY.js";import"./context-BF7eBGFA.js";import"./useDescription-CP-qk7_s.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useOverlayTrigger-BaVZjogA.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./PressResponder-CHEeukYG.js";import"./Provider-op_UCnZE.js";import"./Popover.context-CkZWeej5.js";import"./index-CqJC2f1M.js";import"./context-DYfCRJJJ.js";import"./useFocusWithin-C-e8UI97.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-BxLf_MI7.js";import"./useControlledState-sJfMLWrs.js";import"./useLabels-D0NjiLiF.js";import"./VisuallyHidden-Yvqu08fX.js";import"./useOverlayPosition-Pku7IVZb.js";import"./ProgressCircle.component-BlbtEDe_.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-B1sX0IQZ.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./colors-x_YFGAop.js";import"./styled-components.browser.esm-S-CusIP4.js";import"./CollectionBuilder-DglRgqo3.js";import"./useForwardedRef-BWfLegUW.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./useFocusRing-BmyBc2tX.js";import"./useButton-CBzhh6F5.js";import"./useLink-BTwsTyp1.js";import"./mixins-BOHXBJW9.js";import"./SpinnerLoader.component-DJXvo7dP.js";import"./Loader.component-Dt3yODGv.js";import"./Flex.component-LqFgqvCS.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CRE6wLUH.js";import"./Spinner.component-C1TzuC8j.js";import"./Icons.styles-T5NoJEsB.js";import"./useSelectableList-Ca_ZI4zK.js";import"./DOMLayoutDelegate-Dsrs9r60.js";import"./useCollator-DZEoqIyA.js";import"./getItemCount-C96_vkqw.js";import"./useHover-WxTHsieF.js";import"./useCollectionRenderer-BeqeLBJu.js";import"./Divider.component-Bpnxmsv4.js";const Dt={title:"Dropdowns/Menu/MenuTrigger",component:I,parameters:{layout:"centered"},argTypes:{...d,trigger:{control:"select",options:["press","longPress"],description:"The trigger type for opening the menu."}}},r={args:{children:[t.jsxs(u,{children:["Open Me",t.jsx(g,{icon:"arrow_drop_down"})]},"button"),t.jsx(c,{placement:"bottom left",children:t.jsxs(l,{children:[t.jsx(o,{onAction:()=>alert("Item 1"),children:"Item 1"}),t.jsx(o,{onAction:()=>alert("Item 2"),children:"Item 2"}),t.jsx(o,{onAction:()=>alert("Item 3"),children:"Item 3"})]})},"popover")]}},e={args:{children:[t.jsx(h,{icon:"arrow_drop_down"}),t.jsx(c,{placement:"bottom left",children:t.jsxs(l,{children:[t.jsx(o,{onAction:()=>alert("Item 1"),children:"Item 1"}),t.jsx(o,{onAction:()=>alert("Item 2"),children:"Item 2"}),t.jsx(o,{onAction:()=>alert("Item 3"),children:"Item 3"})]})},"popover")]}};var m,i,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
