import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as X,F as Y}from"./helpers-CVUqcLcb.js";import{g as Z}from"./cssprops-BO85xpNm.js";import{a as g,$ as ee}from"./useObjectRef-BMBYa31u.js";import{$ as z}from"./filterDOMProps-CeZl_uWj.js";import{$ as ae}from"./FocusScope-DY128LIr.js";import{$ as re}from"./useFocusWithin-ypR2cHkl.js";import{$ as ie}from"./useField-BmPvDaI7.js";import{$ as A}from"./context-BF7eBGFA.js";import{r as k,R as oe}from"./index-DmM0KDA7.js";import{d as C}from"./styled-components.browser.esm-B0S50oBn.js";import{m as S}from"./mixins-CgZ-Dp8B.js";import{d as O}from"./utils-DqmNl-Il.js";import{u as H}from"./useRenderProps-BzxgHqRb.js";import{R as te}from"./RequiredMarker-CwAzCIB3.js";import{$ as le}from"./useFormValidationState-CKAS44yz.js";import{$ as se}from"./useControlledState-sJfMLWrs.js";import{L as de}from"./Label.component-Cjxd55tP.js";import{M as U}from"./Message.component-B6INgsEF.js";import{E as K}from"./ErrorMessage.component-Bw4NU7_y.js";import{$ as ne}from"./useFormReset-BZUjp8ic.js";import{$ as L}from"./usePress-BejIIMCm.js";import{$ as ce}from"./useFocusable-DDF3Tgcq.js";import{$ as ue}from"./useFormValidation-Dk9gOIEC.js";import{H as pe}from"./Inputs.styles-BmkDN1M1.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-Blx8idkz.js";import"./CollectionBuilder-C8aBQCuV.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./SSRProvider-nIDwi1ZO.js";import"./useLabel-C1USB2dP.js";import"./useLabels-DqNC8NnF.js";import"./index-CrEZfznw.js";import"./index-9MQGFWEg.js";import"./Label.context-BCDtyvV0.js";import"./Message.context-D6YW8C9h.js";import"./ErrorMessage.context-B9WfFUFn.js";import"./ComboInput.styles-BLZOd1-l.js";import"./TextField.component-CaDaExmI.js";import"./useTextField-DhS2yjr8.js";import"./Field.styles-B11u_h4j.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-U0WiImMe.js";import"./Input.context-CrdQundv.js";import"./TextArea.context-DZF5_oGm.js";import"./NumberField.component-C8kgEaHb.js";import"./useEvent-DX5YI6yT.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-DcXDMVC3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./ProgressCircle.component-DE6AAkbz.js";import"./colors-x_YFGAop.js";import"./IconButton.component-8BWc45Fv.js";import"./index-DklmvzLu.js";import"./Icons.styles-D2L4nNgu.js";import"./Button.component-CO_EKNnI.js";import"./useFocusRing-CMFCJy1v.js";import"./useButton-EuBryRSZ.js";import"./useLink-ytEWay4y.js";import"./SpinnerLoader.component-C3aOYr0J.js";import"./Loader.component-CkFYGCWL.js";import"./Flex.component-CLGTqHVr.js";import"./layout-C5ppTKTq.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-CXWvSCLl.js";let me=Math.round(Math.random()*1e10),fe=0;function be(e){let a=k.useMemo(()=>e.name||`radio-group-${me}-${++fe}`,[e.name]);var l;let[o,r]=se(e.value,(l=e.defaultValue)!==null&&l!==void 0?l:null,e.onChange),[m,c]=k.useState(null),i=le({...e,value:o}),u=h=>{!e.isReadOnly&&!e.isDisabled&&(r(h),i.commitValidation())},d=i.displayValidation.isInvalid;return{...i,name:a,selectedValue:o,setSelectedValue:u,lastFocusedValue:m,setLastFocusedValue:c,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(d?"invalid":null),isInvalid:d}}const J=new WeakMap;function he(e,a,l){let{value:o,children:r,"aria-label":m,"aria-labelledby":c}=e;const i=e.isDisabled||a.isDisabled;let u=r!=null,d=m!=null||c!=null;!u&&!d&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let h=a.selectedValue===o,I=v=>{v.stopPropagation(),a.setSelectedValue(o)},{pressProps:q,isPressed:D}=L({isDisabled:i}),{pressProps:$,isPressed:R}=L({isDisabled:i,onPress(){var v;a.setSelectedValue(o),(v=l.current)===null||v===void 0||v.focus()}}),{focusableProps:w}=ce(g(e,{onFocus:()=>a.setLastFocusedValue(o)}),l),_=g(q,w),F=z(e,{labelable:!0}),y=-1;a.selectedValue!=null?a.selectedValue===o&&(y=0):(a.lastFocusedValue===o||a.lastFocusedValue==null)&&(y=0),i&&(y=void 0);let{name:p,descriptionId:s,errorMessageId:f,validationBehavior:n}=J.get(a);return ne(l,a.selectedValue,a.setSelectedValue),ue({validationBehavior:n},a,l),{labelProps:g($,{onClick:v=>v.preventDefault()}),inputProps:g(F,{..._,type:"radio",name:p,tabIndex:y,disabled:i,required:a.isRequired&&n==="native",checked:h,value:o,onChange:I,"aria-describedby":[e["aria-describedby"],a.isInvalid?f:null,s].filter(Boolean).join(" ")||void 0}),isDisabled:i,isSelected:h,isPressed:D||R}}function ve(e,a){let{name:l,isReadOnly:o,isRequired:r,isDisabled:m,orientation:c="vertical",validationBehavior:i="aria"}=e,{direction:u}=A(),{isInvalid:d,validationErrors:h,validationDetails:I}=a.displayValidation,{labelProps:q,fieldProps:D,descriptionProps:$,errorMessageProps:R}=ie({...e,labelElementType:"span",isInvalid:a.isInvalid,errorMessage:e.errorMessage||h}),w=z(e,{labelable:!0}),{focusWithinProps:_}=re({onBlurWithin(p){var s;(s=e.onBlur)===null||s===void 0||s.call(e,p),a.selectedValue||a.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),F=p=>{let s;switch(p.key){case"ArrowRight":u==="rtl"&&c!=="vertical"?s="prev":s="next";break;case"ArrowLeft":u==="rtl"&&c!=="vertical"?s="next":s="prev";break;case"ArrowDown":s="next";break;case"ArrowUp":s="prev";break;default:return}p.preventDefault();let f=ae(p.currentTarget,{from:p.target}),n;s==="next"?(n=f.nextNode(),n||(f.currentNode=p.currentTarget,n=f.firstChild())):(n=f.previousNode(),n||(f.currentNode=p.currentTarget,n=f.lastChild())),n&&(n.focus(),a.setSelectedValue(n.value))},y=ee(l);return J.set(a,{name:y,descriptionId:$.id,errorMessageId:R.id,validationBehavior:i}),{radioGroupProps:g(w,{role:"radiogroup",onKeyDown:F,"aria-invalid":a.isInvalid||void 0,"aria-errormessage":e["aria-errormessage"],"aria-readonly":o||void 0,"aria-required":r||void 0,"aria-disabled":m||void 0,"aria-orientation":c,...D,..._}),labelProps:q,descriptionProps:$,errorMessageProps:R,isInvalid:d,validationErrors:h,validationDetails:I}}const Q=oe.createContext(null),V=C.span`
  ${S.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  line-height: 1.5;

  font-size: var(--radio-label-font-size);
  color: var(--radio-text-clr);
  min-height: var(--radio-label-height);

  ${O({ltr:"padding-left: calc(var(--radio-size) + var(--radio-label-spacing));",rtl:"padding-right: calc(var(--radio-size) + var(--radio-label-spacing));"})}

  /* :before contains the box in the "radio" */
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    width: var(--radio-size);
    height: var(--radio-size);
    box-sizing: border-box;
    background-color: var(--radio-bg-clr);
    ${S.Border("radio")}
    ${O({ltr:"left: 2px",rtl:"right: 2px"})}
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
    ${O({ltr:"left: 7px",rtl:"right: 7px"})};
  }
`,j=C.div`
  ${S.ToggleInputLike(V)}

  &[data-selected] .aje-checkbox__label {
    &:before {
      border-color: var(--radio-checked);
    }
    &:after {
      display: block;
      background-color: var(--radio-checked);
    }
  }

  &[data-disabled] ${V}:after, &[data-disabled] ${V} {
    cursor: auto;
    opacity: 0.5;
  }
`,ye=C.fieldset`
  padding: 0;
  border: none;

  &[data-disabled] {
    opacity: 0.5;
  }

  ${j} + ${j} {
    margin-top: 12px;
  }
`;function N(e){const{label:a,message:l,error:o}=e,r=be(e),{radioGroupProps:m,labelProps:c,descriptionProps:i,errorMessageProps:u}=ve(e,r),d=H({componentClassName:"aje-radio-group",...e,values:{isDisabled:r.isDisabled,isInvalid:r.isInvalid,isReadOnly:r.isReadOnly,isRequired:r.isRequired},selectors:{"data-disabled":r.isDisabled,"data-invalid":r.isInvalid,"data-readonly":r.isReadOnly,"data-required":r.isRequired}});return t.jsxs(ye,{...m,...d,name:e.name,children:[t.jsxs(de,{as:"legend",...c,children:[a,r.isRequired&&t.jsx(te,{}),l&&t.jsx(U,{...i,children:l}),o&&r.isInvalid&&t.jsx(K,{...u,isInvalid:!0,children:o})]}),t.jsx(Q.Provider,{value:r,children:d.children})]})}try{N.displayName="RadioGroup",N.__docgenInfo={description:`
Radio groups should be used for a choice selection of 3-5 options. There may be a few cases where you can use
these for more than 5, but it isn't common.

- For 2 choices, use a [CheckBox](/docs/inputs-choose-state-checkbox--overview) or [ToggleSwitch](/docs/inputs-choose-state-toggleswitch--overview) instead.
- For more than 5 options, use a [select](/docs/dropdowns-customselect--overview).`,displayName:"RadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldStatusProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldStatusProps>"}}}}}catch{}function b(e){const{message:a,error:l}=e,o=k.useRef(null),r=k.useContext(Q);if(!r)throw new Error("Radio components must be rendered within a RadioGroup");const{inputProps:m,labelProps:c,...i}=he({...e,children:!0},r,o),{direction:u}=A(),d=H({componentClassName:"aje-radio",...e,values:i,selectors:{"data-selected":i.isSelected,"data-disabled":i.isDisabled,"data-pressed":i.isPressed}});return t.jsxs(j,{$rtl:u==="rtl",...d,children:[t.jsx(pe,{...m}),t.jsxs(V,{...c,className:"aje-checkbox__label",$rtl:u==="rtl",children:[d.children,a&&t.jsx(U,{children:a}),l&&t.jsx(K,{children:l})]})]})}try{b.displayName="Radio",b.__docgenInfo={description:"Radio Elements, must be a descendant of a `<RadioGroup>`",displayName:"Radio",props:{message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<RadioRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<RadioRenderProps>"}}}}}catch{}const ja={title:"Inputs/Choose State/RadioGroup",parameters:{layout:"centered",cssprops:Z("Radio")},component:N,argTypes:{...Y,...X,label:{control:"text",table:{category:"Helper Text"}},error:{control:"text",table:{category:"Helper Text"}},message:{control:"text",table:{category:"Helper Text"}},children:{control:!1},isReadOnly:{table:{category:"Field State"}},value:{description:"The value of the selected radio in a controlled component",control:"select",options:["opt1","opt2","opt3"]},defaultValue:{description:"The value of the selected radio in an uncontrolled component",control:"select",options:["opt1","opt2","opt3"]}}},x={args:{label:"Radio Group Label",children:[t.jsx(b,{value:"opt1",children:"Option 1"},"1"),t.jsx(b,{value:"opt2",children:"Option 2"},"2"),t.jsx(b,{value:"opt3",children:"Option 3"},"3")]}},P={args:{label:"Radio Group Label",children:[t.jsx(b,{value:"opt1",children:"Option 1"},"1"),t.jsx(b,{value:"opt2",isDisabled:!0,children:"Option 2"},"2"),t.jsx(b,{value:"opt3",children:"Option 3"},"3")]}};var M,E,G;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(E=x.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var T,B,W;P.parameters={...P.parameters,docs:{...(T=P.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(B=P.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const Na=["Primary","WithDisabledOptions"];export{x as Primary,P as WithDisabledOptions,Na as __namedExportsOrder,ja as default};
