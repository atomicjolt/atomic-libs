import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{I as K}from"./helpers-DsiJys5i.js";import{g as H}from"./cssprops-BGfeK0jo.js";import{c as j}from"./index-i5X67GZP.js";import{$ as y,c as Q}from"./useObjectRef-C4RVQRRU.js";import{$ as G}from"./filterDOMProps-CeZl_uWj.js";import{$ as X}from"./FocusScope-BKSplYEH.js";import{$ as Y}from"./useField-4WjA1Loi.js";import{$ as Z}from"./useFocusWithin-DOCmU_ML.js";import{$ as W}from"./context-CKyfYUWk.js";import{r as V,R as ee}from"./index-DJO9vBfz.js";import{d as B}from"./styled-components.browser.esm-WCay-hu9.js";import{b as ae,c as oe,C as re}from"./Inputs.styles-D8K_qOL9.js";import{F as ie}from"./FieldWrapper-CecreuUM.js";import{$ as te}from"./useFormValidationState-Cu8bp2uX.js";import{$ as le}from"./useControlledState-CN8sBTKq.js";import{L as se}from"./Label.component-5ShF5vdw.js";import{M as T}from"./Message.component-DgHLwaZZ.js";import{E as z}from"./ErrorMessage.component-DYIqQ3G7.js";import{$ as de}from"./useFormReset-BxS8FGOL.js";import{$ as ne}from"./useFocusable-DyKXFx56.js";import{$ as ce}from"./useFormValidation-B89CjNwR.js";import{$ as O}from"./usePress-DG8LklVH.js";import"./CollectionBuilder-Vf4TV1hX.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Section-BBepoPM4.js";import"./focusSafely-GXGk_mpd.js";import"./useLabel-D3wT2o0c.js";import"./useLabels-DtS694vG.js";import"./utils-DHlq6CLd.js";import"./mixins-TlkgTuSN.js";import"./ComboInput.styles-BWDkoKPy.js";import"./TextField.component-D_6mN1w8.js";import"./useTextField-DlCCrWX2.js";import"./Field.styles-DrMU21uN.js";import"./Provider-B9Eqn13H.js";import"./useRenderProps-BqJZ5b79.js";import"./Label.context-Cwics8Eu.js";import"./index-CXdyvu6V.js";import"./Message.context-DfHBDHY_.js";import"./ErrorMessage.context-D3nT9BuV.js";import"./ComboInput.context-BK6VI2KB.js";import"./Input.context-B2W9bKHg.js";import"./NumberField.component-nRCwf4HE.js";import"./useFocus-C-we61At.js";import"./useEvent-CWcEg10T.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./useNumberFormatter-DWLeCNi8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-Bem_PVW3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./number-nHrFdSb-.js";import"./IconButton.component-C815Wh4m.js";import"./index-C_RUmn9I.js";import"./Icons.styles-Doaby5xe.js";import"./Button.component-Bg3ttyxF.js";import"./useFocusRing-MU4psFt8.js";import"./useButton-GWYvoXvT.js";import"./useLink-ytCU544I.js";import"./SpinnerLoader.component-BS7s8xEm.js";import"./Loader.component-CqkhvLsa.js";import"./index-K1z_EpAd.js";import"./utils-CWBnbg5w.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./useKeyboard-A8_doyNT.js";let ue=Math.round(Math.random()*1e10),pe=0;function me(e){let a=V.useMemo(()=>e.name||`radio-group-${ue}-${++pe}`,[e.name]);var t;let[o,p]=le(e.value,(t=e.defaultValue)!==null&&t!==void 0?t:null,e.onChange),[m,r]=V.useState(null),l=te({...e,value:o}),c=f=>{!e.isReadOnly&&!e.isDisabled&&(p(f),l.commitValidation())},n=l.displayValidation.isInvalid;return{...l,name:a,selectedValue:o,setSelectedValue:c,lastFocusedValue:m,setLastFocusedValue:r,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(n?"invalid":null),isInvalid:n}}const U=new WeakMap;function fe(e,a,t){let{value:o,children:p,"aria-label":m,"aria-labelledby":r}=e;const l=e.isDisabled||a.isDisabled;let c=p!=null,n=m!=null||r!=null;!c&&!n&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let f=a.selectedValue===o,_=D=>{D.stopPropagation(),a.setSelectedValue(o)},{pressProps:P,isPressed:I}=O({isDisabled:l}),{pressProps:g,isPressed:R}=O({isDisabled:l,onPress(){a.setSelectedValue(o)}}),{focusableProps:N}=ne(y(e,{onFocus:()=>a.setLastFocusedValue(o)}),t),q=y(P,N),k=G(e,{labelable:!0}),v=-1;a.selectedValue!=null?a.selectedValue===o&&(v=0):(a.lastFocusedValue===o||a.lastFocusedValue==null)&&(v=0),l&&(v=void 0);let{name:u,descriptionId:s,errorMessageId:h,validationBehavior:d}=U.get(a);return de(t,a.selectedValue,a.setSelectedValue),ce({validationBehavior:d},a,t),{labelProps:y(g,{onClick:D=>D.preventDefault()}),inputProps:y(k,{...q,type:"radio",name:u,tabIndex:v,disabled:l,required:a.isRequired&&d==="native",checked:f,value:o,onChange:_,"aria-describedby":[e["aria-describedby"],a.isInvalid?h:null,s].filter(Boolean).join(" ")||void 0}),isDisabled:l,isSelected:f,isPressed:I||R}}function be(e,a){let{name:t,isReadOnly:o,isRequired:p,isDisabled:m,orientation:r="vertical",validationBehavior:l="aria"}=e,{direction:c}=W(),{isInvalid:n,validationErrors:f,validationDetails:_}=a.displayValidation,{labelProps:P,fieldProps:I,descriptionProps:g,errorMessageProps:R}=Y({...e,labelElementType:"span",isInvalid:a.isInvalid,errorMessage:e.errorMessage||f}),N=G(e,{labelable:!0}),{focusWithinProps:q}=Z({onBlurWithin(u){var s;(s=e.onBlur)===null||s===void 0||s.call(e,u),a.selectedValue||a.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),k=u=>{let s;switch(u.key){case"ArrowRight":c==="rtl"&&r!=="vertical"?s="prev":s="next";break;case"ArrowLeft":c==="rtl"&&r!=="vertical"?s="next":s="prev";break;case"ArrowDown":s="next";break;case"ArrowUp":s="prev";break;default:return}u.preventDefault();let h=X(u.currentTarget,{from:u.target}),d;s==="next"?(d=h.nextNode(),d||(h.currentNode=u.currentTarget,d=h.firstChild())):(d=h.previousNode(),d||(h.currentNode=u.currentTarget,d=h.lastChild())),d&&(d.focus(),a.setSelectedValue(d.value))},v=Q(t);return U.set(a,{name:v,descriptionId:g.id,errorMessageId:R.id,validationBehavior:l}),{radioGroupProps:y(N,{role:"radiogroup",onKeyDown:k,"aria-invalid":a.isInvalid||void 0,"aria-errormessage":e["aria-errormessage"],"aria-readonly":o||void 0,"aria-required":p||void 0,"aria-disabled":m||void 0,"aria-orientation":r,...I,...q}),labelProps:P,descriptionProps:g,errorMessageProps:R,isInvalid:n,validationErrors:f,validationDetails:_}}const J=ee.createContext({}),w=B(ae)`
  input[type="radio"] + .aje-checkbox__label:before {
    border-radius: 50%;
  }

  input[type="radio"]:checked ~ .aje-checkbox__label {
    &:before {
      border-color: var(--choose-checked);
    }
    &:after {
      display: block;
      top: 7px;
      ${({$rtl:e})=>e?"right: 7px;":"left: 7px;"}
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--choose-checked);
    }
  }

  //Disabled states
  input[type="radio"]:disabled ~ .aje-checkbox__label:after,
  input[type="radio"]:disabled ~ .aje-checkbox__label {
    cursor: auto;
    opacity: 0.5;
  }
`,he=B(ie)`
  padding: 0;
  border: none;

  &[data-disabled] {
    opacity: 0.5;
  }

  ${w} + ${w} {
    margin-top: 12px;
  }
`;function b(e){const{className:a,message:t,error:o,children:p}=e,m=V.useContext(J),r=V.useRef(null),{inputProps:l,labelProps:c}=fe(e,m,r),{direction:n}=W();return i.jsxs(w,{className:j("aje-radio",a),...c,$rtl:n==="rtl",children:[i.jsx(oe,{...l}),i.jsxs(re,{className:"aje-checkbox__label",$rtl:n==="rtl",children:[p,t&&i.jsx(T,{children:t}),o&&i.jsx(z,{children:o})]})]})}try{b.displayName="Radio",b.__docgenInfo={description:"Radio Elements, must be a descendant of a `<RadioGroup>`",displayName:"Radio",props:{children:{defaultValue:null,description:"The label for the Radio. Accepts any renderable node.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}}}}}catch{}function F(e){const{label:a,message:t,error:o,children:p,className:m}=e,r=me(e),{radioGroupProps:l,labelProps:c,descriptionProps:n,errorMessageProps:f}=be(e,r);return i.jsxs(he,{forwardedAs:"fieldset",className:j("aje-radio-group",m),isDisabled:r.isDisabled,isInvalid:r.isInvalid,isRequired:r.isRequired,isReadOnly:r.isReadOnly,...l,children:[i.jsxs(se,{as:"legend",className:j("aje-radio-group__label"),...c,children:[a,r.isRequired&&i.jsx("span",{"aria-hidden":"true",children:" *"}),t&&i.jsx(T,{...n,children:t}),o&&r.isInvalid&&i.jsx(z,{...f,children:o})]}),i.jsx(J.Provider,{value:r,children:p})]})}try{F.displayName="RadioGroup",F.__docgenInfo={description:`
Radio groups should be used for a choice selection of 3-5 options. There may be a few cases where you can use
these for more than 5, but it isn't common.

- For 2 choices, use a [CheckBox](/docs/inputs-choose-state-checkbox--overview) or [ToggleSwitch](/docs/inputs-choose-state-toggleswitch--overview) instead.
- For more than 5 options, use a [select](/docs/dropdowns-customselect--overview).

Any \`<Radio />\` element nested under a \`<RadioGroup />\` will be considered part of that group,
do note that it does not need to nested directly under. As such, you can add additional strucuture
between the over-lying \`<RadioGroup />\` and it's \`<Radio />\`s`,displayName:"RadioGroup",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}try{Radio.displayName="Radio",Radio.__docgenInfo={description:"Radio Elements, must be a descendant of a `<RadioGroup>`",displayName:"Radio",props:{children:{defaultValue:null,description:"The label for the Radio. Accepts any renderable node.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}}}}}catch{}const ja={title:"Inputs/Choose State/RadioGroup",parameters:{layout:"centered",cssprops:H("Choose")},component:F,subcomponents:{Radio:b},argTypes:{...K,children:{control:!1},isReadOnly:{table:{category:"Field State"}},value:{description:"The value of the selected radio in a controlled component",control:"select",options:["opt1","opt2","opt3"]},defaultValue:{description:"The value of the selected radio in an uncontrolled component",control:"select",options:["opt1","opt2","opt3"]}}},$={args:{label:"Radio Group Label",children:[i.jsx(b,{value:"opt1",children:"Option 1"},"1"),i.jsx(b,{value:"opt2",children:"Option 2"},"2"),i.jsx(b,{value:"opt3",children:"Option 3"},"3")]}},x={args:{label:"Radio Group Label",children:[i.jsx(b,{value:"opt1",children:"Option 1"},"1"),i.jsx(b,{value:"opt2",isDisabled:!0,children:"Option 2"},"2"),i.jsx(b,{value:"opt3",children:"Option 3"},"3")]}};var C,S,A;$.parameters={...$.parameters,docs:{...(C=$.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(S=$.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var L,M,E;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(M=x.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const wa=["Primary","WithDisabledOptions"];export{$ as Primary,x as WithDisabledOptions,wa as __namedExportsOrder,ja as default};
