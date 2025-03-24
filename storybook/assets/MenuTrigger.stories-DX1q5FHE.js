import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{M as I}from"./MenuTrigger-Cl8qP7UA.js";import{O as d}from"./helpers-CeNUlk3Q.js";import{I as o}from"./Collection-CfmUX7eJ.js";import{B as u}from"./Button.component-3sKYTEvT.js";import{M as g}from"./MaterialIcon.component-KpSPmnjB.js";import{P as c}from"./Popover.component-CyFmQFCp.js";import{M as l}from"./Menu.component-D9F0mhW0.js";import{I as h}from"./IconButton.component-BmNQMsrM.js";import"./index-DmM0KDA7.js";import"./useMenuTrigger-DLEtYr5F.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./useFocusable-B7cTVP20.js";import"./useSelectableItem-CQFuthIx.js";import"./usePress-Cxy0og0d.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useEvent-Qm4q9YOK.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-CLRP0VYY.js";import"./context-BF7eBGFA.js";import"./useDescription-CP-qk7_s.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useOverlayTrigger-BaVZjogA.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./PressResponder-D-PDHmhd.js";import"./Provider-op_UCnZE.js";import"./Popover.context-CkZWeej5.js";import"./index-CqJC2f1M.js";import"./context-D5CkyXRW.js";import"./useFocusWithin-CrVHK3Cv.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-3VWy5d8s.js";import"./useControlledState-sJfMLWrs.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./CollectionBuilder-BOiBnYCj.js";import"./useFocusRing-4PdL76fJ.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./useButton-DlM8S39G.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-CqmZ9M1P.js";import"./mixins-CgZ-Dp8B.js";import"./SpinnerLoader.component-B6-1sJZM.js";import"./Loader.component-BJhRk41g.js";import"./index-B1DW8wg7.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-fO3c5uZz.js";import"./ProgressCircle.component-dfZhFUDA.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Icons.styles-D2L4nNgu.js";import"./VisuallyHidden-BPDCoBu-.js";import"./useOverlayPosition-BbD5l9N4.js";import"./useForwardedRef-BWfLegUW.js";import"./useSelectableList-CerkSCCR.js";import"./DOMLayoutDelegate-NFyoR3Uz.js";import"./useCollator-DZEoqIyA.js";import"./getItemCount-CHdBXIUM.js";import"./useHover-BMz_rS5A.js";import"./useCollectionRenderer-Dwym1jfR.js";import"./Divider.component-Cp_2XO01.js";const Dt={title:"Dropdowns/Menu/MenuTrigger",component:I,parameters:{layout:"centered"},argTypes:{...d,trigger:{control:"select",options:["press","longPress"],description:"The trigger type for opening the menu."}}},r={args:{children:[t.jsxs(u,{children:["Open Me",t.jsx(g,{icon:"arrow_drop_down"})]},"button"),t.jsx(c,{placement:"bottom left",children:t.jsxs(l,{children:[t.jsx(o,{onAction:()=>alert("Item 1"),children:"Item 1"}),t.jsx(o,{onAction:()=>alert("Item 2"),children:"Item 2"}),t.jsx(o,{onAction:()=>alert("Item 3"),children:"Item 3"})]})},"popover")]}},e={args:{children:[t.jsx(h,{icon:"arrow_drop_down"}),t.jsx(c,{placement:"bottom left",children:t.jsxs(l,{children:[t.jsx(o,{onAction:()=>alert("Item 1"),children:"Item 1"}),t.jsx(o,{onAction:()=>alert("Item 2"),children:"Item 2"}),t.jsx(o,{onAction:()=>alert("Item 3"),children:"Item 3"})]})},"popover")]}};var m,i,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
