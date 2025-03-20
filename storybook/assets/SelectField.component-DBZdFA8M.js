import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as m,R as y}from"./index-DmM0KDA7.js";import{b as K,$ as L,f as U}from"./useObjectRef-BO7mrmvR.js";import{$ as k}from"./filterDOMProps-CeZl_uWj.js";import{$ as H}from"./useSelectableList-CerkSCCR.js";import{c as W}from"./useSelectableItem-CQFuthIx.js";import{h as A}from"./useFocusable-B7cTVP20.js";import{$ as X}from"./useCollator-DZEoqIyA.js";import{$ as G}from"./useField-BhG43OVF.js";import{$ as J}from"./useMenuTrigger-DLEtYr5F.js";import{$ as Q}from"./useFormReset-DvzwwQm6.js";import{$ as Y}from"./useFormValidation-CsrNRCZi.js";import{a as Z}from"./VisuallyHidden-BPDCoBu-.js";import{$ as _}from"./PressResponder-D-PDHmhd.js";import{$ as ee}from"./CollectionBuilder-BOiBnYCj.js";import{O as w}from"./context-D5CkyXRW.js";import{u as ae}from"./useRenderProps-BzxgHqRb.js";import{c as te,u as le}from"./index-CqJC2f1M.js";import{P as oe}from"./Provider-op_UCnZE.js";import{P as ie}from"./Popover.context-CkZWeej5.js";import{a as re}from"./Button.component-BmxzIkf6.js";import{d as V}from"./styled-components.browser.esm-B0S50oBn.js";import{m as B}from"./mixins-CgZ-Dp8B.js";import{D as ne}from"./DropdownButton-CQHwoqr2.js";import{$ as de}from"./useFormValidationState-CKAS44yz.js";import{$ as se}from"./useOverlayTriggerState-3VWy5d8s.js";import{$ as ce}from"./useSingleSelectListState-LStq8ygZ.js";import{L as ue}from"./Label.context-8YwVGsEO.js";import{M as fe}from"./Message.context-4_rHhebz.js";import{E as me}from"./ErrorMessage.context-D-RNFvKn.js";import{a as pe,b as be}from"./ListBox.component-COEbRk9q.js";function ve(a){let e=se(a),[t,l]=m.useState(null),o=ce({...a,onSelectionChange:n=>{a.onSelectionChange!=null&&a.onSelectionChange(n),e.close(),c.commitValidation()}}),c=de({...a,value:o.selectedKey}),[s,u]=m.useState(!1);return{...c,...o,...e,focusStrategy:t,open(n=null){o.collection.size!==0&&(l(n),e.open())},toggle(n=null){o.collection.size!==0&&(l(n),e.toggle())},isFocused:s,setFocused:u}}const E=new WeakMap;function ye(a,e,t){let{keyboardDelegate:l,isDisabled:o,isRequired:c,name:s,validationBehavior:u="aria"}=a,n=X({usage:"search",sensitivity:"base"}),i=m.useMemo(()=>l||new H(e.collection,e.disabledKeys,t,n),[l,e.collection,e.disabledKeys,n]),{menuTriggerProps:f,menuProps:d}=J({isDisabled:o,type:"listbox"},e,t),h=r=>{switch(r.key){case"ArrowLeft":{var C,F;r.preventDefault();let x=e.selectedKey!=null?(C=i.getKeyAbove)===null||C===void 0?void 0:C.call(i,e.selectedKey):(F=i.getFirstKey)===null||F===void 0?void 0:F.call(i);x&&e.setSelectedKey(x);break}case"ArrowRight":{var R,D;r.preventDefault();let x=e.selectedKey!=null?(R=i.getKeyBelow)===null||R===void 0?void 0:R.call(i,e.selectedKey):(D=i.getFirstKey)===null||D===void 0?void 0:D.call(i);x&&e.setSelectedKey(x);break}}},{typeSelectProps:v}=W({keyboardDelegate:i,selectionManager:e.selectionManager,onTypeSelect(r){e.setSelectedKey(r)}}),{isInvalid:g,validationErrors:$,validationDetails:j}=e.displayValidation,{labelProps:O,fieldProps:S,descriptionProps:T,errorMessageProps:z}=G({...a,labelElementType:"span",isInvalid:g,errorMessage:a.errorMessage||$});v.onKeyDown=v.onKeyDownCapture,delete v.onKeyDownCapture;let N=k(a,{labelable:!0}),p=K(v,f,S),q=L();return E.set(e,{isDisabled:o,isRequired:c,name:s,validationBehavior:u}),{labelProps:{...O,onClick:()=>{if(!a.isDisabled){var r;(r=t.current)===null||r===void 0||r.focus(),A("keyboard")}}},triggerProps:K(N,{...p,isDisabled:o,onKeyDown:U(p.onKeyDown,h,a.onKeyDown),onKeyUp:a.onKeyUp,"aria-labelledby":[q,p["aria-labelledby"],p["aria-label"]&&!p["aria-labelledby"]?p.id:null].filter(Boolean).join(" "),onFocus(r){e.isFocused||(a.onFocus&&a.onFocus(r),a.onFocusChange&&a.onFocusChange(!0),e.setFocused(!0))},onBlur(r){e.isOpen||(a.onBlur&&a.onBlur(r),a.onFocusChange&&a.onFocusChange(!1),e.setFocused(!1))}}),valueProps:{id:q},menuProps:{...d,autoFocus:e.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:"selection",onBlur:r=>{r.currentTarget.contains(r.relatedTarget)||(a.onBlur&&a.onBlur(r),a.onFocusChange&&a.onFocusChange(!1),e.setFocused(!1))},"aria-labelledby":[S["aria-labelledby"],p["aria-label"]&&!S["aria-labelledby"]?p.id:null].filter(Boolean).join(" ")},descriptionProps:T,errorMessageProps:z,isInvalid:g,validationErrors:$,validationDetails:j}}function $e(a,e,t){let l=E.get(e)||{},{autoComplete:o,name:c=l.name,isDisabled:s=l.isDisabled}=a,{validationBehavior:u,isRequired:n}=l,{visuallyHiddenProps:i}=Z();Q(a.selectRef,e.selectedKey,e.setSelectedKey),Y({validationBehavior:u,focus:()=>{var d;return(d=t.current)===null||d===void 0?void 0:d.focus()}},e,a.selectRef);var f;return{containerProps:{...i,"aria-hidden":!0,"data-react-aria-prevent-focus":!0,"data-a11y-ignore":"aria-hidden-focus"},inputProps:{style:{display:"none"}},selectProps:{tabIndex:-1,autoComplete:o,disabled:s,required:u==="native"&&n,name:c,value:(f=e.selectedKey)!==null&&f!==void 0?f:void 0,onChange:d=>e.setSelectedKey(d.target.value)}}}function xe(a){let{state:e,triggerRef:t,label:l,name:o,isDisabled:c}=a,s=m.useRef(null),{containerProps:u,selectProps:n}=$e({...a,selectRef:s},e,t);var i;return e.collection.size<=300?y.createElement("div",{...u,"data-testid":"hidden-select-container"},y.createElement("label",null,l,y.createElement("select",{...n,ref:s},y.createElement("option",null),[...e.collection.getKeys()].map(f=>{let d=e.collection.getItem(f);if(d&&d.type==="item")return y.createElement("option",{key:d.key,value:d.key},d.textValue)})))):o?y.createElement("input",{type:"hidden",autoComplete:n.autoComplete,name:o,disabled:c,value:(i=e.selectedKey)!==null&&i!==void 0?i:""}):null}const Pe=V.div`
  ${B.SizingX}
  ${B.FieldStatus}
`,ge=V.span`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,he=te(),I=m.createContext(null),M=m.createContext(null),P=m.forwardRef(function(e,t){return[e,t]=le(he,e,t),b.jsx(ee,{content:e.children,children:l=>b.jsx(Se,{...e,collection:l,selectRef:t})})});P.displayName="SelectField";function Se(a){const e=ve({...a,children:void 0}),{selectRef:t}=a,{isInvalid:l,isDisabled:o,isRequired:c,isReadOnly:s,name:u,size:n="medium"}=a,{labelProps:i,triggerProps:f,valueProps:d,menuProps:h,errorMessageProps:v,descriptionProps:g}=ye({...a,label:!0},e,t),$=ae({componentClassName:"aje-select",...a,selectors:{"data-invalid":l,"data-disabled":o,"data-required":c,"data-readonly":s}});return b.jsxs(Pe,{...$,...k(a),children:[b.jsx(xe,{isDisabled:o,state:e,triggerRef:t,label:"",name:u}),b.jsx(oe,{values:[[I.Provider,e],[M.Provider,d],[ue.Provider,i],[fe.Provider,g],[me.Provider,{...v,isInvalid:l}],[w.Provider,e],[ie.Provider,{triggerRef:t,isOpen:e.isOpen,variant:"listbox"}],[pe.Provider,h],[be.Provider,e],[w.Provider,e],[re.Provider,{size:n}]],children:b.jsx(_,{...f,ref:t,isPressed:e.isOpen,isDisabled:o||s,children:$.children})})]})}function Ce(a){const{placeholder:e}=a,t=m.useContext(M),l=m.useContext(I);return l?b.jsx(ge,{...t,children:l.selectedItem?l.selectedItem.rendered:e}):null}P.Value=Ce;P.Button=ne;try{P.displayName="SelectField",P.__docgenInfo={description:"",displayName:"SelectField",props:{collection:{defaultValue:null,description:"",name:"collection",required:!0,type:{name:"BaseCollection<T>"}},selectRef:{defaultValue:null,description:"",name:"selectRef",required:!0,type:{name:"RefObject<HTMLButtonElement>"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldRenderProps>"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldRenderProps>"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}export{P as S};
