import{j as $}from"./jsx-runtime-CkxqCPlQ.js";import{r as p,R as y}from"./index-DJO9vBfz.js";import{b as C,$ as O,e as _}from"./useObjectRef-BKue9pYL.js";import{$ as K}from"./filterDOMProps-CeZl_uWj.js";import{$ as T}from"./useSelectableList-CW_SVv5R.js";import{b as z}from"./useSelectableItem-CDjoIRnz.js";import{c as N,m as L}from"./focusSafely-BOUv7I-8.js";import{$ as U}from"./useCollator-BQpRQjOj.js";import{$ as H}from"./useField-mSuDlNxJ.js";import{$ as A}from"./useMenuTrigger-A3nQFss-.js";import{$ as W}from"./useFormReset-C11SSN19.js";import{$ as X}from"./useFormValidation-D05SS9o7.js";import{a as G}from"./VisuallyHidden-C_KI20v8.js";import{$ as J}from"./PressResponder-Dqe7WJHR.js";import{$ as Q}from"./CollectionBuilder-Xbel4YvD.js";import{O as R}from"./context-C_Tf37_9.js";import{u as Y}from"./useRenderProps-Bk8BH60l.js";import{c as Z,u as ee}from"./index-De95zDiF.js";import{P as te}from"./Provider-B9Eqn13H.js";import{P as ae}from"./Popover.context-Iv_xuGDi.js";import{a as le}from"./Button.component-SZWKT3t6.js";import{d as q}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as D}from"./mixins-B7X2BZyR.js";import{D as oe}from"./DropdownButton-CDpP5r3C.js";import{$ as re}from"./useFormValidationState-DFldk10H.js";import{$ as ie}from"./useOverlayTriggerState-BXapIe9V.js";import{$ as ne}from"./useSingleSelectListState-Daifh6qz.js";import{L as se}from"./Label.context-ChhuUauO.js";import{M as de}from"./Message.context-BObz3Mtj.js";import{E as ce}from"./ErrorMessage.context-D3SbpLIU.js";import{a as ue,b as fe}from"./ListBox.component-BIzhMUOm.js";function me(t){let e=ie(t),[a,l]=p.useState(null),o=ne({...t,onSelectionChange:r=>{t.onSelectionChange!=null&&t.onSelectionChange(r),e.close(),d.commitValidation()}}),d=re({...t,value:o.selectedKey}),[n,c]=p.useState(!1);return{...d,...o,...e,focusStrategy:a,open(r=null){o.collection.size!==0&&(l(r),e.open())},toggle(r=null){o.collection.size!==0&&(l(r),e.toggle())},isFocused:n,setFocused:c}}const w=new WeakMap;function pe(t,e,a){let{keyboardDelegate:l,isDisabled:o,isRequired:d,name:n,validationBehavior:c="aria"}=t,r=U({usage:"search",sensitivity:"base"}),s=p.useMemo(()=>l||new T(e.collection,e.disabledKeys,null,r),[l,e.collection,e.disabledKeys,r]),{menuTriggerProps:f,menuProps:m}=A({isDisabled:o,type:"listbox"},e,a),u=i=>{switch(i.key){case"ArrowLeft":{i.preventDefault();let x=e.selectedKey!=null?s.getKeyAbove(e.selectedKey):s.getFirstKey();x&&e.setSelectedKey(x);break}case"ArrowRight":{i.preventDefault();let x=e.selectedKey!=null?s.getKeyBelow(e.selectedKey):s.getFirstKey();x&&e.setSelectedKey(x);break}}},{typeSelectProps:v}=z({keyboardDelegate:s,selectionManager:e.selectionManager,onTypeSelect(i){e.setSelectedKey(i)}}),{isInvalid:h,validationErrors:g,validationDetails:E}=e.displayValidation,{labelProps:I,fieldProps:S,descriptionProps:V,errorMessageProps:M}=H({...t,labelElementType:"span",isInvalid:h,errorMessage:t.errorMessage||g});v.onKeyDown=v.onKeyDownCapture,delete v.onKeyDownCapture;let j=K(t,{labelable:!0}),b=C(v,f,S),F=O();return w.set(e,{isDisabled:o,isRequired:d,name:n,validationBehavior:c}),{labelProps:{...I,onClick:()=>{t.isDisabled||(a.current.focus(),N("keyboard"))}},triggerProps:C(j,{...b,isDisabled:o,onKeyDown:_(b.onKeyDown,u,t.onKeyDown),onKeyUp:t.onKeyUp,"aria-labelledby":[F,b["aria-labelledby"],b["aria-label"]&&!b["aria-labelledby"]?b.id:null].filter(Boolean).join(" "),onFocus(i){e.isFocused||(t.onFocus&&t.onFocus(i),t.onFocusChange&&t.onFocusChange(!0),e.setFocused(!0))},onBlur(i){e.isOpen||(t.onBlur&&t.onBlur(i),t.onFocusChange&&t.onFocusChange(!1),e.setFocused(!1))}}),valueProps:{id:F},menuProps:{...m,autoFocus:e.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:"selection",onBlur:i=>{i.currentTarget.contains(i.relatedTarget)||(t.onBlur&&t.onBlur(i),t.onFocusChange&&t.onFocusChange(!1),e.setFocused(!1))},"aria-labelledby":[S["aria-labelledby"],b["aria-label"]&&!S["aria-labelledby"]?b.id:null].filter(Boolean).join(" ")},descriptionProps:V,errorMessageProps:M,isInvalid:h,validationErrors:g,validationDetails:E}}function be(t,e,a){let l=w.get(e)||{},{autoComplete:o,name:d=l.name,isDisabled:n=l.isDisabled}=t,{validationBehavior:c,isRequired:r}=l,s=L(),{visuallyHiddenProps:f}=G();W(t.selectRef,e.selectedKey,e.setSelectedKey),X({validationBehavior:c,focus:()=>a.current.focus()},e,t.selectRef);var m;return{containerProps:{...f,"aria-hidden":!0,"data-react-aria-prevent-focus":!0,"data-a11y-ignore":"aria-hidden-focus"},inputProps:{type:"text",tabIndex:s==null||e.isFocused||e.isOpen?-1:0,style:{fontSize:16},onFocus:()=>a.current.focus(),disabled:n},selectProps:{tabIndex:-1,autoComplete:o,disabled:n,required:c==="native"&&r,name:d,value:(m=e.selectedKey)!==null&&m!==void 0?m:"",onChange:u=>e.setSelectedKey(u.target.value)}}}function ye(t){let{state:e,triggerRef:a,label:l,name:o,isDisabled:d}=t,n=p.useRef(null),{containerProps:c,inputProps:r,selectProps:s}=be({...t,selectRef:n},e,a);var f;return e.collection.size<=300?y.createElement("div",{...c,"data-testid":"hidden-select-container"},y.createElement("input",r),y.createElement("label",null,l,y.createElement("select",{...s,ref:n},y.createElement("option",null),[...e.collection.getKeys()].map(m=>{let u=e.collection.getItem(m);if(u.type==="item")return y.createElement("option",{key:u.key,value:u.key},u.textValue)})))):o?y.createElement("input",{type:"hidden",autoComplete:s.autoComplete,name:o,disabled:d,value:(f=e.selectedKey)!==null&&f!==void 0?f:""}):null}const $e=q.div`
  ${D.SizingX}
  ${D.FieldStatus}
`,ve=q.span`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ge=Z(),B=p.createContext(null),k=p.createContext(null),P=p.forwardRef(function(e,a){return[e,a]=ee(ge,e,a),$.jsx(Q,{content:e.children,children:l=>$.jsx(xe,{...e,collection:l,selectRef:a})})});P.displayName="SelectField";function xe(t){const e=me({...t,children:void 0}),{selectRef:a}=t,{isInvalid:l,isDisabled:o,isRequired:d,isReadOnly:n,name:c,size:r="medium"}=t,{labelProps:s,triggerProps:f,valueProps:m,menuProps:u,errorMessageProps:v,descriptionProps:h}=pe({...t,label:!0},e,a),g=Y({componentClassName:"aje-select",...t,selectors:{"data-invalid":l,"data-disabled":o,"data-required":d,"data-readonly":n}});return $.jsxs($e,{...g,...K(t),children:[$.jsx(ye,{isDisabled:o,state:e,triggerRef:a,label:"",name:c}),$.jsx(te,{values:[[B.Provider,e],[k.Provider,m],[se.Provider,s],[de.Provider,h],[ce.Provider,{...v,isInvalid:l}],[R.Provider,e],[ae.Provider,{triggerRef:a,isOpen:e.isOpen,variant:"listbox"}],[ue.Provider,u],[fe.Provider,e],[R.Provider,e],[le.Provider,{size:r}]],children:$.jsx(J,{...f,ref:a,isPressed:e.isOpen,isDisabled:o||n,children:g.children})})]})}function Pe(t){const{placeholder:e}=t,a=p.useContext(k),l=p.useContext(B);return l?$.jsx(ve,{...a,children:l.selectedItem?l.selectedItem.rendered:e}):null}P.Value=Pe;P.Button=oe;try{P.displayName="SelectField",P.__docgenInfo={description:"",displayName:"SelectField",props:{collection:{defaultValue:null,description:"",name:"collection",required:!0,type:{name:"BaseCollection<T>"}},selectRef:{defaultValue:null,description:"",name:"selectRef",required:!0,type:{name:"RefObject<HTMLButtonElement>"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldRenderProps>"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}}}}}catch{}export{P as S};
