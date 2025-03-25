import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{M as I}from"./MenuTrigger-ml9qve3R.js";import{M as d}from"./index-DklmvzLu.js";import{P as c}from"./index-BE-2BqCX.js";import{O as u}from"./helpers-CVUqcLcb.js";import{I as o}from"./Collection-Blx8idkz.js";import{B as g}from"./Button.component-CO_EKNnI.js";import{M as l}from"./Menu.component-BkVPOCSj.js";import{I as h}from"./IconButton.component-8BWc45Fv.js";import"./index-DmM0KDA7.js";import"./useMenuTrigger-DUYA4yl7.js";import"./useObjectRef-BMBYa31u.js";import"./SSRProvider-nIDwi1ZO.js";import"./useFocusable-DDF3Tgcq.js";import"./useSelectableItem-BlMo16Kr.js";import"./usePress-BejIIMCm.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useEvent-DX5YI6yT.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DY128LIr.js";import"./context-BF7eBGFA.js";import"./useDescription-DEja_w9s.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useOverlayTrigger-DR7rG5da.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./PressResponder-XOPwQlQI.js";import"./Provider-op_UCnZE.js";import"./Popover.context-Cb09Dlmi.js";import"./index-9MQGFWEg.js";import"./context-Cc6JC_Nk.js";import"./useFocusWithin-ypR2cHkl.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-DiYlioC9.js";import"./useControlledState-sJfMLWrs.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Icons.styles-D2L4nNgu.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DqNC8NnF.js";import"./VisuallyHidden-CdaVAzx-.js";import"./useOverlayPosition-DY7J2sl_.js";import"./ProgressCircle.component-DE6AAkbz.js";import"./useLabel-C1USB2dP.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./CollectionBuilder-C8aBQCuV.js";import"./useForwardedRef-CeqQ-Fh5.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./useFocusRing-CMFCJy1v.js";import"./useButton-EuBryRSZ.js";import"./useLink-ytEWay4y.js";import"./mixins-CgZ-Dp8B.js";import"./SpinnerLoader.component-C3aOYr0J.js";import"./Loader.component-CkFYGCWL.js";import"./Flex.component-CLGTqHVr.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-CXWvSCLl.js";import"./useSelectableList-BlmLA-dr.js";import"./DOMLayoutDelegate-CYEMPlg-.js";import"./useCollator-DZEoqIyA.js";import"./getItemCount-bvAGpgdb.js";import"./useHover-BXnVJtPw.js";import"./useCollectionRenderer-D0KC5ksC.js";import"./Divider.component-Cp_2XO01.js";const Dt={title:"Dropdowns/Menu/MenuTrigger",component:I,parameters:{layout:"centered"},argTypes:{...u,trigger:{control:"select",options:["press","longPress"],description:"The trigger type for opening the menu."}}},r={args:{children:[t.jsxs(g,{children:["Open Me",t.jsx(d,{icon:"arrow_drop_down"})]},"button"),t.jsx(c,{placement:"bottom left",children:t.jsxs(l,{children:[t.jsx(o,{onAction:()=>alert("Item 1"),children:"Item 1"}),t.jsx(o,{onAction:()=>alert("Item 2"),children:"Item 2"}),t.jsx(o,{onAction:()=>alert("Item 3"),children:"Item 3"})]})},"popover")]}},e={args:{children:[t.jsx(h,{icon:"arrow_drop_down"}),t.jsx(c,{placement:"bottom left",children:t.jsxs(l,{children:[t.jsx(o,{onAction:()=>alert("Item 1"),children:"Item 1"}),t.jsx(o,{onAction:()=>alert("Item 2"),children:"Item 2"}),t.jsx(o,{onAction:()=>alert("Item 3"),children:"Item 3"})]})},"popover")]}};var m,i,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
