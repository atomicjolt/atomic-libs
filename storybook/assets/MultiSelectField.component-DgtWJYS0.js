import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DmM0KDA7.js";import{$ as w}from"./PressResponder-D-PDHmhd.js";import{a as D,b as B}from"./index-Xbl1yJRj.js";import{O as F}from"./context-D5CkyXRW.js";import{u as I}from"./useRenderProps-BzxgHqRb.js";import{c as _,u as k}from"./index-CqJC2f1M.js";import{$ as K}from"./CollectionBuilder-BOiBnYCj.js";import{P as N}from"./Provider-op_UCnZE.js";import{P as j}from"./Popover.context-CkZWeej5.js";import{a as z}from"./Button.component-3sKYTEvT.js";import{D as U}from"./DropdownButton-2W46Csc9.js";import{d as E}from"./styled-components.browser.esm-B0S50oBn.js";import{m as P}from"./mixins-CgZ-Dp8B.js";import{$ as T}from"./useFormValidationState-CKAS44yz.js";import{$ as L}from"./useOverlayTriggerState-3VWy5d8s.js";import{$ as H}from"./useListState-wIipAK1w.js";import{b as q,$ as W,f as A}from"./useObjectRef-BO7mrmvR.js";import{$ as X}from"./filterDOMProps-CeZl_uWj.js";import{$ as G}from"./useSelectableList-CerkSCCR.js";import{c as J}from"./useSelectableItem-CQFuthIx.js";import{h as Q}from"./useFocusable-B7cTVP20.js";import{$ as Y}from"./useCollator-DZEoqIyA.js";import{$ as Z}from"./useField-BhG43OVF.js";import{$ as ee}from"./useMenuTrigger-DLEtYr5F.js";import{L as ae}from"./Label.context-8YwVGsEO.js";import{M as le}from"./Message.context-4_rHhebz.js";import{E as te}from"./ErrorMessage.context-D-RNFvKn.js";const ne=E.div`
  ${P.SizingX}
  ${P.FieldStatus}
`,oe=_(),ie=u.createContext(null);function re(e){const a=L(e),[t,i]=u.useState("first"),n=H({...e,selectionMode:"multiple",onSelectionChange:l=>{var s;(s=e.onSelectionChange)==null||s.call(e,l)}}),[c,m]=u.useState(!1),f=T({...e,value:n.selectionManager.selectedKeys.values().next().value});return{...n,...a,...f,selectionMode:"multiple",focusStrategy:t,setSelectedKeys(l){l===null?n.selectionManager.clearSelection():n.selectionManager.setSelectedKeys(l)},open(l="first"){n.collection.size!==0&&(i(l),a.open())},toggle(l="first"){n.collection.size!==0&&(i(l),a.toggle())},isFocused:c,setFocused:m}}const se=new WeakMap;function de(e,a,t){const{keyboardDelegate:i,isDisabled:n,isRequired:c,name:m,validationBehavior:f="aria"}=e,l=Y({usage:"search",sensitivity:"base"}),s=u.useMemo(()=>i||new G(a.collection,a.disabledKeys,null,l),[i,a.collection,a.disabledKeys,l]),{menuTriggerProps:h,menuProps:y}=ee({isDisabled:n,type:"listbox"},a,t),{typeSelectProps:d}=J({keyboardDelegate:s,selectionManager:a.selectionManager,onTypeSelect(o){a.selectionManager.toggleSelection(o)}}),{isInvalid:p,validationErrors:S,validationDetails:C}=a.displayValidation,{labelProps:M,fieldProps:g,descriptionProps:O,errorMessageProps:R}=Z({...e,labelElementType:"label",isInvalid:p,errorMessage:e.errorMessage||S});d.onKeyDown=d.onKeyDownCapture,delete d.onKeyDownCapture;const V=X(e,{labelable:!0}),r=q(d,h,g),x=W();return se.set(a,{isDisabled:n,isRequired:c,name:m,validationBehavior:f}),{labelProps:{...M,onClick:()=>{var o;e.isDisabled||((o=t.current)==null||o.focus(),Q("keyboard"))}},triggerProps:q(V,{...r,isDisabled:n,onKeyDown:A(r.onKeyDown,e.onKeyDown),onKeyUp:e.onKeyUp,"aria-labelledby":[x,r["aria-labelledby"],r["aria-label"]&&!r["aria-labelledby"]?r.id:null].filter(Boolean).join(" "),onFocus(o){a.isFocused||(e.onFocus&&e.onFocus(o),e.onFocusChange&&e.onFocusChange(!0),a.setFocused(!0))},onBlur(o){a.isOpen||(e.onBlur&&e.onBlur(o),e.onFocusChange&&e.onFocusChange(!1),a.setFocused(!1))}}),valueProps:{id:x},menuProps:{...y,autoFocus:a.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:"selection",selectionMode:"multiple",onBlur:o=>{o.currentTarget.contains(o.relatedTarget)||(e.onBlur&&e.onBlur(o),e.onFocusChange&&e.onFocusChange(!1),a.setFocused(!1))},"aria-labelledby":[g["aria-labelledby"],r["aria-label"]&&!g["aria-labelledby"]?r.id:null].filter(Boolean).join(" ")},descriptionProps:O,errorMessageProps:R,isInvalid:p,validationErrors:S,validationDetails:C}}const $=u.forwardRef(function(a,t){return[a,t]=k(oe,a,t),b.jsx(K,{content:a.children,children:i=>b.jsx(v,{...a,collection:i,selectRef:t})})});function v(e){const a=re({...e,label:!0,children:void 0}),t=u.useRef(null),{labelProps:i,triggerProps:n,menuProps:c,errorMessageProps:m,descriptionProps:f}=de({...e,label:!0},a,t),{isInvalid:l,isDisabled:s,isRequired:h,isReadOnly:y,size:d="medium"}=e,p=I({componentClassName:"aje-multiselect",...e,selectors:{"data-invalid":l,"data-disabled":s,"data-required":h,"data-readonly":y}});return b.jsx(ne,{...p,children:b.jsx(N,{values:[[ie.Provider,a],[ae.Provider,i],[le.Provider,f],[te.Provider,{...m,isInvalid:l}],[F.Provider,a],[j.Provider,{triggerRef:t,isOpen:a.isOpen,variant:"listbox"}],[D.Provider,c],[B.Provider,a],[F.Provider,a],[z.Provider,{size:d}]],children:b.jsx(w,{...n,ref:t,isPressed:a.isOpen,isDisabled:s||y,children:p.children})})})}$.Button=U;try{v.displayName="MultiSelectFieldInner",v.__docgenInfo={description:"MultiSelect is a dropdown that allows the user to select multiple options from a list",displayName:"MultiSelectFieldInner",props:{collection:{defaultValue:null,description:"A pre-constructed collection to use instead of building one from items and children.",name:"collection",required:!0,type:{name:"BaseCollection<T>"}},selectRef:{defaultValue:null,description:"",name:"selectRef",required:!0,type:{name:"RefObject<HTMLButtonElement>"}},isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldRenderProps>"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}try{$.displayName="MultiSelectField",$.__docgenInfo={description:"Building blocks for building custom & accessible select components",displayName:"MultiSelectField",props:{isOpen:{defaultValue:null,description:"Sets the open state of the menu.",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Sets the default open state of the menu.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldRenderProps>"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}export{$ as M,ie as a};
