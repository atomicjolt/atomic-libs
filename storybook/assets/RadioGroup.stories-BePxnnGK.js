import{r as q,$ as me,R as ue,g as $,j as i,a2 as fe}from"./iframe-CGPW5dgX.js";import{R as T,d as be,b as ge}from"./helpers-tUmR_xN7.js";import{$ as P,e as he}from"./useObjectRef-CjsC0YUg.js";import{$ as re}from"./filterDOMProps-CeZl_uWj.js";import{$ as ye}from"./useFormReset-mO407CKi.js";import{$ as E}from"./usePress-BioWcz2v.js";import{$ as ve}from"./useFocusable-DT9_LXVA.js";import{$ as Re}from"./useFormValidation-hpNb-DuC.js";import{$ as oe}from"./context-CLSG1ylv.js";import{H as xe}from"./Inputs.styles-C-Gxmll0.js";import{m as C}from"./mixins-BJuiWlrm.js";import{d as j}from"./utils-DqmNl-Il.js";import{S as Pe}from"./SkeletonLoader.component-DalY9QZY.js";import{u as le}from"./useRenderProps-B7rIWDyP.js";import{M as ne}from"./Message.component-CIEamcUq.js";import{E as de}from"./ErrorMessage.component-DUCD1jzH.js";import{$ as $e}from"./FocusScope-DFxiutEz.js";import{$ as ke}from"./useFocusWithin-BzfIRRcZ.js";import{$ as Ne}from"./useField-DXQ2XZid.js";import{R as Se}from"./RequiredMarker-C4F_ExJL.js";import{$ as Ve}from"./useFormValidationState-CWonILzS.js";import{u as we}from"./Loading.context-EUscm4UA.js";import{L as W}from"./Label.component-Bo8kkSzq.js";import"./preload-helper-Dp1pzeXC.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./ComboInput.styles-CPtnBAXP.js";import"./TextField.component-DJemlHOu.js";import"./useTextField-CPDUiJax.js";import"./Field.styles-CxKAGZMW.js";import"./Provider-CKCHWQEo.js";import"./Label.context-D58S6_wU.js";import"./index-C0dagnaq.js";import"./Message.context-D_Dpg15a.js";import"./ErrorMessage.context-tIEpfdG1.js";import"./ComboInput.context-3NxJI3U3.js";import"./Input.context-DET8yoFh.js";import"./TextArea.context-C9KYZsFH.js";import"./NumberField.component-fcYsibWP.js";import"./displayName-CEXLPPBu.js";import"./useEvent-CiV_uWQE.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-BU1srigh.js";import"./LiveAnnouncer-CAA6IyTk.js";import"./BaseButton-B8bVR-o6.js";import"./useFocusRing-Dbcio0BW.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./layout-Dd7m2B0D.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./colors-PU9nFmCW.js";import"./IconButton.component-CifirOzj.js";import"./index-BjoBGrPA.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";let Ie=Math.round(Math.random()*1e10),Le=0;function De(e){let a=q.useMemo(()=>e.name||`radio-group-${Ie}-${++Le}`,[e.name]);var o;let[r,t]=me(e.value,(o=e.defaultValue)!==null&&o!==void 0?o:null,e.onChange),[m,n]=q.useState(null),s=Ve({...e,value:r}),c=f=>{!e.isReadOnly&&!e.isDisabled&&(t(f),s.commitValidation())},p=s.displayValidation.isInvalid;return{...s,name:a,selectedValue:r,setSelectedValue:c,lastFocusedValue:m,setLastFocusedValue:n,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(p?"invalid":null),isInvalid:p}}const ce=new WeakMap;function qe(e,a,o){let{value:r,children:t,"aria-label":m,"aria-labelledby":n}=e;const s=e.isDisabled||a.isDisabled;let c=t!=null,p=m!=null||n!=null;!c&&!p&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let f=a.selectedValue===r,h=y=>{y.stopPropagation(),a.setSelectedValue(r)},{pressProps:k,isPressed:R}=E({isDisabled:s}),{pressProps:N,isPressed:S}=E({isDisabled:s,onPress(){var y;a.setSelectedValue(r),(y=o.current)===null||y===void 0||y.focus()}}),{focusableProps:F}=ve(P(e,{onFocus:()=>a.setLastFocusedValue(r)}),o),O=P(k,F),_=re(e,{labelable:!0}),x=-1;a.selectedValue!=null?a.selectedValue===r&&(x=0):(a.lastFocusedValue===r||a.lastFocusedValue==null)&&(x=0),s&&(x=void 0);let{name:u,descriptionId:l,errorMessageId:g,validationBehavior:d}=ce.get(a);return ye(o,a.selectedValue,a.setSelectedValue),Re({validationBehavior:d},a,o),{labelProps:P(N,{onClick:y=>y.preventDefault()}),inputProps:P(_,{...O,type:"radio",name:u,tabIndex:x,disabled:s,required:a.isRequired&&d==="native",checked:f,value:r,onChange:h,"aria-describedby":[e["aria-describedby"],a.isInvalid?g:null,l].filter(Boolean).join(" ")||void 0}),isDisabled:s,isSelected:f,isPressed:R||S}}function Fe(e,a){let{name:o,isReadOnly:r,isRequired:t,isDisabled:m,orientation:n="vertical",validationBehavior:s="aria"}=e,{direction:c}=oe(),{isInvalid:p,validationErrors:f,validationDetails:h}=a.displayValidation,{labelProps:k,fieldProps:R,descriptionProps:N,errorMessageProps:S}=Ne({...e,labelElementType:"span",isInvalid:a.isInvalid,errorMessage:e.errorMessage||f}),F=re(e,{labelable:!0}),{focusWithinProps:O}=ke({onBlurWithin(u){var l;(l=e.onBlur)===null||l===void 0||l.call(e,u),a.selectedValue||a.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),_=u=>{let l;switch(u.key){case"ArrowRight":c==="rtl"&&n!=="vertical"?l="prev":l="next";break;case"ArrowLeft":c==="rtl"&&n!=="vertical"?l="next":l="prev";break;case"ArrowDown":l="next";break;case"ArrowUp":l="prev";break;default:return}u.preventDefault();let g=$e(u.currentTarget,{from:u.target}),d;l==="next"?(d=g.nextNode(),d||(g.currentNode=u.currentTarget,d=g.firstChild())):(d=g.previousNode(),d||(g.currentNode=u.currentTarget,d=g.lastChild())),d&&(d.focus(),a.setSelectedValue(d.value))},x=he(o);return ce.set(a,{name:x,descriptionId:N.id,errorMessageId:S.id,validationBehavior:s}),{radioGroupProps:P(F,{role:"radiogroup",onKeyDown:_,"aria-invalid":a.isInvalid||void 0,"aria-errormessage":e["aria-errormessage"],"aria-readonly":r||void 0,"aria-required":t||void 0,"aria-disabled":m||void 0,"aria-orientation":n,...R,...O}),labelProps:k,descriptionProps:N,errorMessageProps:S,isInvalid:p,validationErrors:f,validationDetails:h}}const pe=ue.createContext(null),Oe=$.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,_e=$(Pe)`
  width: 160px;
  height: var(--radio-label-height);
  display: block;
`,D=$.span`
  ${C.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  line-height: 1.5;

  font-size: var(--radio-label-font-size);
  color: var(--radio-text-clr);
  min-height: var(--radio-label-height);

  ${j({ltr:"padding-left: calc(var(--radio-size) + var(--radio-label-spacing));",rtl:"padding-right: calc(var(--radio-size) + var(--radio-label-spacing));"})}

  /* :before contains the box in the "radio" */
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    width: var(--radio-size);
    height: var(--radio-size);
    box-sizing: border-box;
    background-color: var(--radio-bg-clr);
    ${C.Border("radio")}
    ${j({ltr:"left: 2px",rtl:"right: 2px"})}
  }

  /* :after contains the checkmark in the "radio" */
  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 7px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    ${j({ltr:"left: 7px",rtl:"right: 7px"})};
  }
`,M=$.div`
  ${C.ToggleInputLike(D)}

  &[data-selected] .aje-checkbox__label {
    &:before {
      border-color: var(--radio-checked);
    }
    &:after {
      display: block;
      background-color: var(--radio-checked);
    }
  }

  &[data-disabled] ${D}:after, &[data-disabled] ${D} {
    cursor: auto;
    opacity: 0.5;
  }
`,H=$.fieldset`
  padding: 0;
  border: none;

  &[data-disabled] {
    opacity: 0.5;
  }

  ${M} + ${M} {
    margin-top: 12px;
  }
`,je=3;function G(e){const{label:a,message:o,error:r}=e,t=De(e),{radioGroupProps:m,labelProps:n,descriptionProps:s,errorMessageProps:c}=Fe(e,t),{isLoading:p,loadingLabel:f}=we(e),h=le({componentClassName:"aje-radio-group",...e,values:{isDisabled:t.isDisabled,isInvalid:t.isInvalid,isReadOnly:t.isReadOnly,isRequired:t.isRequired},selectors:{"data-disabled":t.isDisabled,"data-invalid":t.isInvalid,"data-readonly":t.isReadOnly,"data-required":t.isRequired}});return p?i.jsxs(H,{...m,...h,name:e.name,children:[i.jsx(W,{as:"legend",...n,children:a}),i.jsx(Oe,{children:Array.from({length:je}).map((k,R)=>i.jsx(_e,{title:R===0?f:void 0,children:i.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"4",ry:"4"})},R))})]}):i.jsxs(H,{...m,...h,name:e.name,children:[i.jsxs(W,{as:"legend",...n,children:[a,t.isRequired&&i.jsx(Se,{}),o&&i.jsx(ne,{...s,children:o}),r&&t.isInvalid&&i.jsx(de,{...c,isInvalid:!0,children:r})]}),i.jsx(pe.Provider,{value:t,children:h.children})]})}try{G.displayName="RadioGroup",G.__docgenInfo={description:`
Radio groups should be used for a choice selection of 3-5 options. There may be a few cases where you can use
these for more than 5, but it isn't common.

- For 2 choices, use a [CheckBox](/docs/inputs-choose-state-checkbox--overview) or [ToggleSwitch](/docs/inputs-choose-state-toggleswitch--overview) instead.
- For more than 5 options, use a [Select](/docs/dropdowns-selection-select--overview) or [CustomSelect](/docs/dropdowns-selection-customselect--overview).`,displayName:"RadioGroup",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Inputs/RadioGroup/RadioGroup.component.tsx",methods:[],props:{name:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/RadioGroup/RadioGroup.component.tsx",name:"RadioGroupProps"}],description:"Name of the radio inputs, submitted with form data",name:"name",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/RadioGroup/RadioGroup.component.tsx",name:"RadioGroupProps"},required:!1,tags:{},type:{name:"string"}},label:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpTextProps"}],description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpTextProps"},required:!1,tags:{},type:{name:"ReactNode"}},message:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"For additional information (ex. date format mm/dd/yy)",name:"message",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}},error:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"Error message for the field",name:"error",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}},isDisabled:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field cannot be interacted with, should be de-emphasized in the UI",name:"isDisabled",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-disabled]"},type:{name:"boolean"}},isReadOnly:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field cannot be modified. Should be made to not look like a editable field",name:"isReadOnly",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-readonly]"},type:{name:"boolean"}},isRequired:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field must be interacted with. Should be indicated in the UI",name:"isRequired",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-required]"},type:{name:"boolean"}},isInvalid:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed",name:"isInvalid",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-invalid]"},type:{name:"boolean"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<FieldStatusProps>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<FieldStatusProps>"}},isLoading:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,tags:{},type:{name:"boolean"}},loadingLabel:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:"aria accessibility label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}function b(e){const{message:a,error:o}=e,r=q.useRef(null),t=q.useContext(pe);if(!t)throw new Error("Radio components must be rendered within a RadioGroup");const{inputProps:m,labelProps:n,...s}=qe({...e,children:!0},t,r),{direction:c}=oe(),p=le({componentClassName:"aje-radio",...e,values:s,selectors:{"data-selected":s.isSelected,"data-disabled":s.isDisabled,"data-pressed":s.isPressed}});return i.jsxs(M,{$rtl:c==="rtl",...p,children:[i.jsx(xe,{...m}),i.jsxs(D,{...n,className:"aje-checkbox__label",$rtl:c==="rtl",children:[p.children,a&&i.jsx(ne,{children:a}),o&&i.jsx(de,{children:o})]})]})}try{b.displayName="Radio",b.__docgenInfo={description:"Radio Elements, must be a descendant of a `<RadioGroup>`",displayName:"Radio",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Inputs/RadioGroup/Radio.component.tsx",methods:[],props:{message:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"For additional information (ex. date format mm/dd/yy)",name:"message",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}},error:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"Error message for the field",name:"error",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<RadioRenderProps>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<RadioRenderProps>"}}},tags:{}}}catch{}const Ka={title:"Inputs/Choose State/RadioGroup",parameters:{layout:"centered",cssprops:{radio:fe}},component:G,subcomponents:{Radio:b},argTypes:{...ge,...be,...T,label:{control:"text",table:{category:"Helper Text"}},error:{control:"text",table:{category:"Helper Text"}},message:{control:"text",table:{category:"Helper Text"}},children:{...T.children,description:"The `Radio` options in the group"},isReadOnly:{table:{category:"State"}},value:{description:"The value of the selected radio in a controlled component",control:"select",options:["opt1","opt2","opt3"]},defaultValue:{description:"The value of the selected radio in an uncontrolled component",control:"select",options:["opt1","opt2","opt3"]},orientation:{control:"select",options:["vertical","horizontal"],description:"Sets `aria-orientation` (and, in right-to-left locales, which way the left and right arrow keys move). It doesn't change the visual layout: the radios always stack vertically.",table:{defaultValue:{summary:'"vertical"'}}},onChange:{action:"onChange",description:"Called with the selected radio's value when it changes",table:{category:"Events"}}}},v={args:{label:"Radio Group Label",children:[i.jsx(b,{value:"opt1",children:"Option 1"},"1"),i.jsx(b,{value:"opt2",children:"Option 2"},"2"),i.jsx(b,{value:"opt3",children:"Option 3"},"3")]}},V={args:{label:"Radio Group Label",children:[i.jsx(b,{value:"opt1",children:"Option 1"},"1"),i.jsx(b,{value:"opt2",isDisabled:!0,children:"Option 2"},"2"),i.jsx(b,{value:"opt3",children:"Option 3"},"3")]}},w={args:{...v.args,defaultValue:"opt2"}},I={args:{...v.args,isInvalid:!0,error:"Please choose an option"}},L={args:{...v.args,isLoading:!0,loadingLabel:"Loading"}},Ja=["Primary","WithDisabledOptions","WithDefaultValue","WithError","Loading"];var B,A,z;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Radio Group Label",
    children: [<Radio key="1" value="opt1">
        Option 1
      </Radio>, <Radio key="2" value="opt2">
        Option 2
      </Radio>, <Radio key="3" value="opt3">
        Option 3
      </Radio>]
  }
}`,...(z=(A=v.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var U,K,J;V.parameters={...V.parameters,docs:{...(U=V.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Radio Group Label",
    children: [<Radio key="1" value="opt1">
        Option 1
      </Radio>, <Radio key="2" value="opt2" isDisabled>
        Option 2
      </Radio>, <Radio key="3" value="opt3">
        Option 3
      </Radio>]
  }
}`,...(J=(K=V.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: "opt2"
  }
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    error: "Please choose an option"
  }
}`,...(ae=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ie,te,se;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(se=(te=L.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};export{L as Loading,v as Primary,w as WithDefaultValue,V as WithDisabledOptions,I as WithError,Ja as __namedExportsOrder,Ka as default};
