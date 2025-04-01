import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./helpers-3z31DEgW.js";import{g as s}from"./cssprops-BO85xpNm.js";import"./index-DN54I2_N.js";import{I as e}from"./Collection-CfmUX7eJ.js";import{M as p}from"./MultiSelectField.component-tZFiJRGF.js";import{L as l}from"./Label.component-B7CKGK89.js";import{M as a}from"./Message.component-DCrYYuGG.js";import{P as c}from"./Popover.component-CyFmQFCp.js";import{L as d}from"./ListBox.component-HFNxo25W.js";import{E as h}from"./ErrorMessage.component-BIgFaI1o.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./index-DmM0KDA7.js";import"./index-Do_mbUnv.js";import"./index-BDzxygkP.js";import"./index-CyCRagT9.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./CollectionBuilder-BOiBnYCj.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./PressResponder-D-PDHmhd.js";import"./usePress-Cxy0og0d.js";import"./context-D5CkyXRW.js";import"./FocusScope-CLRP0VYY.js";import"./useFocusWithin-CrVHK3Cv.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./index-CqJC2f1M.js";import"./Provider-op_UCnZE.js";import"./Popover.context-CkZWeej5.js";import"./Button.component-BAz68fOY.js";import"./useFocusRing-4PdL76fJ.js";import"./useButton-DlM8S39G.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-CqmZ9M1P.js";import"./mixins-CgZ-Dp8B.js";import"./SpinnerLoader.component-BwJ7Xb9x.js";import"./Loader.component-BERkQ2Yj.js";import"./Flex.component-DMTf3CTF.js";import"./layout-ez2uQdt_.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-fO3c5uZz.js";import"./ProgressCircle.component-dfZhFUDA.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./DropdownButton-CoQ7aQC0.js";import"./MaterialIcon.component-M2WH0SUi.js";import"./Icons.styles-D2L4nNgu.js";import"./useFormValidationState-CKAS44yz.js";import"./useOverlayTriggerState-3VWy5d8s.js";import"./useControlledState-sJfMLWrs.js";import"./useListState-wIipAK1w.js";import"./useCollectionRenderer-Dwym1jfR.js";import"./useSelectableItem-CQFuthIx.js";import"./useEvent-Qm4q9YOK.js";import"./scrollIntoView-DuDju04b.js";import"./useDescription-CP-qk7_s.js";import"./useSelectableList-CerkSCCR.js";import"./DOMLayoutDelegate-NFyoR3Uz.js";import"./useCollator-DZEoqIyA.js";import"./useField-BhG43OVF.js";import"./useMenuTrigger-DLEtYr5F.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useOverlayTrigger-BaVZjogA.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./Label.context-8YwVGsEO.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.context-D-RNFvKn.js";import"./VisuallyHidden-BPDCoBu-.js";import"./useOverlayPosition-BbD5l9N4.js";import"./useForwardedRef-BWfLegUW.js";import"./getItemCount-CHdBXIUM.js";import"./useHover-BMz_rS5A.js";import"./Divider.component-Cp_2XO01.js";const Nt={title:"Fields/MultiSelectField",component:p,parameters:{layout:"centered",cssprops:s("Dropdown","Listbox")},argTypes:{...n,selectedKeys:{control:"multi-select",description:"Control the value of the selected keys in a controlled component",options:["val1","val2","val3"]},defaultSelectedKeys:{control:!1,description:"Control the value of the selected keys in an uncontrolled component"},children:{control:!1},isOpen:{control:"boolean",description:"Control the open state of the menu"},defaultOpen:{control:"boolean",description:"Control the inital state of the menu"},onOpenChange:{control:!1,action:"onOpenChange",description:"Callback for when the menu is opened or closed",table:{category:"Events"}},onSelectionChange:{action:"onSelectionChange",control:!1,description:"Callback for when the selection changes",table:{category:"Events"}}}},o={args:{children:[t.jsx(l,{children:"Select an item"},"label"),t.jsx(a,{children:"Choose an item from the list"},"message"),t.jsx(p.Button,{children:"Select Items"},"button"),t.jsx(c,{children:t.jsxs(d,{children:[t.jsx(e,{id:"1",children:"Item 1"}),t.jsx(e,{id:"2",children:"Item 2"}),t.jsx(e,{id:"3",children:"Item 3"})]})},"popover"),t.jsx(h,{children:"Something went wrong"},"error")]}};var r,i,m;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: [<FieldLabel key="label">Select an item</FieldLabel>, <FieldMessage key="message">Choose an item from the list</FieldMessage>, <MultiSelectField.Button key="button">
        Select Items
      </MultiSelectField.Button>, <Popover key="popover">
        <ListBox>
          <Item id="1">Item 1</Item>
          <Item id="2">Item 2</Item>
          <Item id="3">Item 3</Item>
        </ListBox>
      </Popover>, <FieldErrorMessage key="error">Something went wrong</FieldErrorMessage>]
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Qt=["Default"];export{o as Default,Qt as __namedExportsOrder,Nt as default};
