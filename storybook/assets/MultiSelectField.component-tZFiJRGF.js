import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DmM0KDA7.js";import{$ as w}from"./PressResponder-D-PDHmhd.js";import"./index-DN54I2_N.js";import{O as F}from"./context-D5CkyXRW.js";import{u as D}from"./useRenderProps-BzxgHqRb.js";import{c as B,u as I}from"./index-CqJC2f1M.js";import{$ as _}from"./CollectionBuilder-BOiBnYCj.js";import{P as k}from"./Provider-op_UCnZE.js";import{P as K}from"./Popover.context-CkZWeej5.js";import{a as N}from"./Button.component-BAz68fOY.js";import{D as j}from"./DropdownButton-CoQ7aQC0.js";import{d as z}from"./styled-components.browser.esm-B0S50oBn.js";import{m as P}from"./mixins-CgZ-Dp8B.js";import{$ as U}from"./useFormValidationState-CKAS44yz.js";import{$ as E}from"./useOverlayTriggerState-3VWy5d8s.js";import{$ as T}from"./useListState-wIipAK1w.js";import{b as q,$ as L,f as H}from"./useObjectRef-BO7mrmvR.js";import{$ as W}from"./filterDOMProps-CeZl_uWj.js";import{$ as A}from"./useSelectableList-CerkSCCR.js";import{c as X}from"./useSelectableItem-CQFuthIx.js";import{h as G}from"./useFocusable-B7cTVP20.js";import{$ as J}from"./useCollator-DZEoqIyA.js";import{$ as Q}from"./useField-BhG43OVF.js";import{$ as Y}from"./useMenuTrigger-DLEtYr5F.js";import{L as Z}from"./Label.context-8YwVGsEO.js";import{M as ee}from"./Message.context-4_rHhebz.js";import{E as ae}from"./ErrorMessage.context-D-RNFvKn.js";import{a as te,b as le}from"./ListBox.component-HFNxo25W.js";const ne=z.div`
  ${P.SizingX}
  ${P.FieldStatus}
`,oe=B(),ie=u.createContext(null);function re(e){const a=E(e),[l,i]=u.useState("first"),n=T({...e,selectionMode:"multiple",onSelectionChange:t=>{var s;(s=e.onSelectionChange)==null||s.call(e,t)}}),[c,m]=u.useState(!1),f=U({...e,value:n.selectionManager.selectedKeys.values().next().value});return{...n,...a,...f,selectionMode:"multiple",focusStrategy:l,setSelectedKeys(t){t===null?n.selectionManager.clearSelection():n.selectionManager.setSelectedKeys(t)},open(t="first"){n.collection.size!==0&&(i(t),a.open())},toggle(t="first"){n.collection.size!==0&&(i(t),a.toggle())},isFocused:c,setFocused:m}}const se=new WeakMap;function de(e,a,l){const{keyboardDelegate:i,isDisabled:n,isRequired:c,name:m,validationBehavior:f="aria"}=e,t=J({usage:"search",sensitivity:"base"}),s=u.useMemo(()=>i||new A(a.collection,a.disabledKeys,null,t),[i,a.collection,a.disabledKeys,t]),{menuTriggerProps:h,menuProps:y}=Y({isDisabled:n,type:"listbox"},a,l),{typeSelectProps:d}=X({keyboardDelegate:s,selectionManager:a.selectionManager,onTypeSelect(o){a.selectionManager.toggleSelection(o)}}),{isInvalid:p,validationErrors:S,validationDetails:C}=a.displayValidation,{labelProps:M,fieldProps:g,descriptionProps:O,errorMessageProps:R}=Q({...e,labelElementType:"label",isInvalid:p,errorMessage:e.errorMessage||S});d.onKeyDown=d.onKeyDownCapture,delete d.onKeyDownCapture;const V=W(e,{labelable:!0}),r=q(d,h,g),x=L();return se.set(a,{isDisabled:n,isRequired:c,name:m,validationBehavior:f}),{labelProps:{...M,onClick:()=>{var o;e.isDisabled||((o=l.current)==null||o.focus(),G("keyboard"))}},triggerProps:q(V,{...r,isDisabled:n,onKeyDown:H(r.onKeyDown,e.onKeyDown),onKeyUp:e.onKeyUp,"aria-labelledby":[x,r["aria-labelledby"],r["aria-label"]&&!r["aria-labelledby"]?r.id:null].filter(Boolean).join(" "),onFocus(o){a.isFocused||(e.onFocus&&e.onFocus(o),e.onFocusChange&&e.onFocusChange(!0),a.setFocused(!0))},onBlur(o){a.isOpen||(e.onBlur&&e.onBlur(o),e.onFocusChange&&e.onFocusChange(!1),a.setFocused(!1))}}),valueProps:{id:x},menuProps:{...y,autoFocus:a.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:"selection",selectionMode:"multiple",onBlur:o=>{o.currentTarget.contains(o.relatedTarget)||(e.onBlur&&e.onBlur(o),e.onFocusChange&&e.onFocusChange(!1),a.setFocused(!1))},"aria-labelledby":[g["aria-labelledby"],r["aria-label"]&&!g["aria-labelledby"]?r.id:null].filter(Boolean).join(" ")},descriptionProps:O,errorMessageProps:R,isInvalid:p,validationErrors:S,validationDetails:C}}const $=u.forwardRef(function(a,l){return[a,l]=I(oe,a,l),b.jsx(_,{content:a.children,children:i=>b.jsx(v,{...a,collection:i,selectRef:l})})});function v(e){const a=re({...e,label:!0,children:void 0}),l=u.useRef(null),{labelProps:i,triggerProps:n,menuProps:c,errorMessageProps:m,descriptionProps:f}=de({...e,label:!0},a,l),{isInvalid:t,isDisabled:s,isRequired:h,isReadOnly:y,size:d="medium"}=e,p=D({componentClassName:"aje-multiselect",...e,selectors:{"data-invalid":t,"data-disabled":s,"data-required":h,"data-readonly":y}});return b.jsx(ne,{...p,children:b.jsx(k,{values:[[ie.Provider,a],[Z.Provider,i],[ee.Provider,f],[ae.Provider,{...m,isInvalid:t}],[F.Provider,a],[K.Provider,{triggerRef:l,isOpen:a.isOpen,variant:"listbox"}],[te.Provider,c],[le.Provider,a],[F.Provider,a],[N.Provider,{size:d}]],children:b.jsx(w,{...n,ref:l,isPressed:a.isOpen,isDisabled:s||y,children:p.children})})})}$.Button=j;try{v.displayName="MultiSelectFieldInner",v.__docgenInfo={description:"MultiSelect is a dropdown that allows the user to select multiple options from a list",displayName:"MultiSelectFieldInner",props:{collection:{defaultValue:null,description:"A pre-constructed collection to use instead of building one from items and children.",name:"collection",required:!0,type:{name:"BaseCollection<T>"}},selectRef:{defaultValue:null,description:"",name:"selectRef",required:!0,type:{name:"RefObject<HTMLButtonElement>"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldRenderProps>"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}try{$.displayName="MultiSelectField",$.__docgenInfo={description:"Building blocks for building custom & accessible select components",displayName:"MultiSelectField",props:{isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldRenderProps>"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}export{$ as M,ie as a};
