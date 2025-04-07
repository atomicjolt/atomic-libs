import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./helpers-CeNUlk3Q.js";import{g as s}from"./cssprops-BO85xpNm.js";import{P as l}from"./index-BapQbWJp.js";import{L as a}from"./index-C5aJsvsM.js";import{I as e}from"./Collection-CfmUX7eJ.js";import{M as p}from"./MultiSelectField.component-C2Nmi6ln.js";import{L as c}from"./Label.component-BzbmvXGx.js";import{M as d}from"./Message.component-CVXqUIYh.js";import{E as h}from"./ErrorMessage.component-VwqqJyxZ.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./index-DmM0KDA7.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./useLabels-D0NjiLiF.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./context-BF7eBGFA.js";import"./VisuallyHidden-BPDCoBu-.js";import"./useFocusWithin-CrVHK3Cv.js";import"./useFocusable-B7cTVP20.js";import"./usePress-Cxy0og0d.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./context-D5CkyXRW.js";import"./FocusScope-CLRP0VYY.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayPosition-DkePAkjV.js";import"./ProgressCircle.component-C7gS1D9i.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-B1sX0IQZ.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./index-CqJC2f1M.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./colors-x_YFGAop.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./useOverlayTriggerState-3VWy5d8s.js";import"./PressResponder-D-PDHmhd.js";import"./useControlledState-sJfMLWrs.js";import"./CollectionBuilder-BOiBnYCj.js";import"./useForwardedRef-BWfLegUW.js";import"./Popover.context-CkZWeej5.js";import"./useSelectableList-CerkSCCR.js";import"./useSelectableItem-CQFuthIx.js";import"./useEvent-Qm4q9YOK.js";import"./scrollIntoView-DuDju04b.js";import"./useDescription-CP-qk7_s.js";import"./DOMLayoutDelegate-NFyoR3Uz.js";import"./useCollator-DZEoqIyA.js";import"./getItemCount-CHdBXIUM.js";import"./useHover-BMz_rS5A.js";import"./useFocusRing-4PdL76fJ.js";import"./useCollectionRenderer-Dwym1jfR.js";import"./Provider-op_UCnZE.js";import"./mixins-CgZ-Dp8B.js";import"./useListState-wIipAK1w.js";import"./Divider.component-BFlV1fwZ.js";import"./utils-DqmNl-Il.js";import"./Button.component-DnMutOi6.js";import"./useButton-DlM8S39G.js";import"./useLink-CqmZ9M1P.js";import"./SpinnerLoader.component-ofOICTG5.js";import"./Loader.component-DWq-vdAK.js";import"./index-B1DW8wg7.js";import"./layout-C5ppTKTq.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-CjtUOFd5.js";import"./DropdownButton-OyEnzsjL.js";import"./MaterialIcon.component-CIaYzniN.js";import"./Icons.styles-D2L4nNgu.js";import"./useFormValidationState-CKAS44yz.js";import"./useField-BhG43OVF.js";import"./useMenuTrigger-DLEtYr5F.js";import"./useOverlayTrigger-BaVZjogA.js";import"./Label.context-8YwVGsEO.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.context-D-RNFvKn.js";const At={title:"Fields/MultiSelectField",component:p,parameters:{layout:"centered",cssprops:s("Dropdown","Listbox")},argTypes:{...n,selectedKeys:{control:"multi-select",description:"Control the value of the selected keys in a controlled component",options:["val1","val2","val3"]},defaultSelectedKeys:{control:!1,description:"Control the value of the selected keys in an uncontrolled component"},children:{control:!1},isOpen:{control:"boolean",description:"Control the open state of the menu"},defaultOpen:{control:"boolean",description:"Control the inital state of the menu"},onOpenChange:{control:!1,action:"onOpenChange",description:"Callback for when the menu is opened or closed",table:{category:"Events"}},onSelectionChange:{action:"onSelectionChange",control:!1,description:"Callback for when the selection changes",table:{category:"Events"}}}},o={args:{children:[t.jsx(c,{children:"Select an item"},"label"),t.jsx(d,{children:"Choose an item from the list"},"message"),t.jsx(p.Button,{children:"Select Items"},"button"),t.jsx(l,{children:t.jsxs(a,{children:[t.jsx(e,{id:"1",children:"Item 1"}),t.jsx(e,{id:"2",children:"Item 2"}),t.jsx(e,{id:"3",children:"Item 3"})]})},"popover"),t.jsx(h,{children:"Something went wrong"},"error")]}};var r,i,m;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Gt=["Default"];export{o as Default,Gt as __namedExportsOrder,At as default};
