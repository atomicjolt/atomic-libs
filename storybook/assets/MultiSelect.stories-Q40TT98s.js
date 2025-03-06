import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{I as O}from"./helpers-D-Gur9Js.js";import{I as s}from"./Collection-CnHW8amz.js";import{g as V}from"./cssprops-BO85xpNm.js";import{r as b}from"./index-DJO9vBfz.js";import{F as w}from"./FloatingFieldInputWrapper-ClPwAkE1.js";import{d as C}from"./styled-components.browser.esm-BQf_XqKi.js";import{F as I}from"./Dropdowns.styles-DEj6YwAG.js";import{M as y,a as M}from"./MultiSelectField.component-BBEsEHoI.js";import{P as F}from"./Popover.component-Dlw6ucoT.js";import{L as j}from"./ListBox.component-_1TeZ9_i.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-C0DXmw5d.js";import"./index-CyCRagT9.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Label.component-CeN98k3i.js";import"./mixins-B7X2BZyR.js";import"./index-De95zDiF.js";import"./useObjectRef-BKue9pYL.js";import"./Label.context-ChhuUauO.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./Message.component-nkasZM07.js";import"./Message.context-BObz3Mtj.js";import"./ErrorMessage.component-CfKzjo8L.js";import"./ErrorMessage.context-D3SbpLIU.js";import"./PressResponder-Dqe7WJHR.js";import"./usePress-Cu0aM-K5.js";import"./focusSafely-BOUv7I-8.js";import"./context-C_Tf37_9.js";import"./FocusScope-BnAoeAyt.js";import"./useFocusWithin-DSbUfD8x.js";import"./utils-Df1WEgxG.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./Provider-B9Eqn13H.js";import"./Popover.context-Iv_xuGDi.js";import"./Button.component-Bfqq8odl.js";import"./useFocusRing-CPkBIT8D.js";import"./useFocus-DJe2BRHe.js";import"./useButton-AoKYWM9F.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-o0N_IkwX.js";import"./useKeyboard-A8_doyNT.js";import"./useLink-ByNL9j8X.js";import"./SpinnerLoader.component-qW2PqPLJ.js";import"./Loader.component-l5wuRCiG.js";import"./Flex.component-DqBL6Xjb.js";import"./layout-B6NAx4l9.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-D3qB71XV.js";import"./ProgressCircle.component-DZo3rxOV.js";import"./useLabel-CSTUXoQW.js";import"./useLabels-B24R2YQq.js";import"./useNumberFormatter-D5qg7lg6.js";import"./context-BQ3_Es2z.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./DropdownButton-F2cos4Mf.js";import"./MaterialIcon.component-Bqs5W7S4.js";import"./Icons.styles-BaNpbbIh.js";import"./useFormValidationState-DFldk10H.js";import"./useOverlayTriggerState-BXapIe9V.js";import"./useControlledState-CN8sBTKq.js";import"./useListState-CDCY5W5g.js";import"./useCollectionRenderer-BjBmU679.js";import"./useSelectableItem-CDjoIRnz.js";import"./useEvent-CXpXU_b4.js";import"./scrollIntoView-DuDju04b.js";import"./useDescription-DnVXAhCi.js";import"./useSelectableList-CW_SVv5R.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-BQpRQjOj.js";import"./useField-mSuDlNxJ.js";import"./useMenuTrigger-A3nQFss-.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./useOverlayTrigger-DEPcgMBT.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./VisuallyHidden-C_KI20v8.js";import"./useOverlayPosition-DFJP1Pe4.js";import"./useForwardedRef-BqZ3RrEL.js";import"./getItemCount-imedabe4.js";import"./useHover-D34ofACQ.js";import"./Divider.component-BK_sltmD.js";const k=C(y)`
  &.aje-multiselect--floating {
    ${I}
  }
`;function m(t){const l=b.useRef(null),{label:i,error:n,message:o,placeholder:p="Select an option",selectionPlaceholder:S=p,variant:d="default",maxHeight:x=300,dropdownPlacement:q="bottom start"}=t;return e.jsxs(k,{...t,ref:l,children:[e.jsx(w,{label:i,message:o,error:n,floating:d==="floating",children:e.jsx(y.Button,{children:e.jsx(_,{selectionPlaceholder:S,placeholder:p,variant:d})})}),e.jsx(F,{maxHeight:x,placement:q,children:e.jsx(j,{items:t.items,children:t.children})})]})}function _(t){const{selectionPlaceholder:l,placeholder:i,variant:n}=t,o=b.useContext(M);if(o)return n==="floating"?o.selectionManager.selectedKeys.size>0?l:"":o.selectionManager.selectedKeys.size>0?l:i}try{m.displayName="MultiSelect",m.__docgenInfo={description:"MultiSelect is a dropdown that allows the user to select multiple options from a list",displayName:"MultiSelect",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"floating"'}]}},selectionPlaceholder:{defaultValue:null,description:"",name:"selectionPlaceholder",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},maxHeight:{defaultValue:{value:"height of the viewport"},description:"The maximum height of the the dropdown.",name:"maxHeight",required:!1,type:{name:"number"}},dropdownPlacement:{defaultValue:null,description:"",name:"dropdownPlacement",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'},{value:'"end"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"bottom start"'},{value:'"bottom end"'},{value:'"top left"'},{value:'"top right"'},{value:'"top start"'},{value:'"top end"'},{value:'"left top"'},{value:'"left bottom"'},{value:'"start top"'},{value:'"start bottom"'},{value:'"right top"'},{value:'"right bottom"'},{value:'"end top"'},{value:'"end bottom"'}]}}}}}catch{}const vt={title:"Dropdowns/Selection/MultiSelect",component:m,parameters:{layout:"centered",cssprops:V("Dropdown","Listbox")},argTypes:{...O,selectedKeys:{control:"multi-select",description:"Control the value of the selected keys in a controlled component",options:["val1","val2","val3"]},defaultSelectedKeys:{control:!1,description:"Control the value of the selected keys in an uncontrolled component"},children:{control:!1},isOpen:{control:"boolean",description:"Control the open state of the menu"},defaultOpen:{control:"boolean",description:"Control the inital state of the menu"},onOpenChange:{control:!1,action:"onOpenChange",description:"Callback for when the menu is opened or closed",table:{category:"Events"}},onSelectionChange:{action:"onSelectionChange",control:!1,description:"Callback for when the selection changes",table:{category:"Events"}}}},a={args:{label:"Multiselect Label",children:[e.jsx(s,{children:"Option 1"},"val1"),e.jsx(s,{children:"Option 2"},"val2"),e.jsx(s,{children:"Option 3"},"val3")]}},r={args:{...a.args,variant:"floating"}};var u,c,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Multiselect Label",
    children: [<Item key="val1">Option 1</Item>, <Item key="val2">Option 2</Item>, <Item key="val3">Option 3</Item>]
  }
}`,...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var h,v,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "floating"
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const gt=["Default","Floating"];export{a as Default,r as Floating,gt as __namedExportsOrder,vt as default};
