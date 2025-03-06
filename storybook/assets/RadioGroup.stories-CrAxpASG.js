import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{F as X,R as Y}from"./helpers-D-Gur9Js.js";import{g as Z}from"./cssprops-BO85xpNm.js";import{b as y,$ as ee}from"./useObjectRef-BKue9pYL.js";import{$ as z}from"./filterDOMProps-CeZl_uWj.js";import{$ as ae}from"./FocusScope-BnAoeAyt.js";import{$ as re}from"./useField-mSuDlNxJ.js";import{$ as ie}from"./useFocusWithin-DSbUfD8x.js";import{$ as A}from"./context-BQ3_Es2z.js";import{r as V,R as oe}from"./index-DJO9vBfz.js";import{d as C}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as _}from"./mixins-B7X2BZyR.js";import{d as S}from"./utils-2VFVy79V.js";import{u as H}from"./useRenderProps-Bk8BH60l.js";import{R as te}from"./RequiredMarker-DVRabd4Z.js";import{$ as le}from"./useFormValidationState-DFldk10H.js";import{$ as se}from"./useControlledState-CN8sBTKq.js";import{L as de}from"./Label.component-CeN98k3i.js";import{M as U}from"./Message.component-nkasZM07.js";import{E as K}from"./ErrorMessage.component-CfKzjo8L.js";import{$ as ne}from"./useFormReset-C11SSN19.js";import{$ as ce}from"./useFocusable-o0N_IkwX.js";import{$ as pe}from"./useFormValidation-D05SS9o7.js";import{$ as L}from"./usePress-Cu0aM-K5.js";import{H as ue}from"./Inputs.styles-CyClw_H7.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-C0DXmw5d.js";import"./index-CyCRagT9.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./focusSafely-BOUv7I-8.js";import"./useLabel-CSTUXoQW.js";import"./useLabels-B24R2YQq.js";import"./utils-Df1WEgxG.js";import"./index-i5X67GZP.js";import"./index-De95zDiF.js";import"./Label.context-ChhuUauO.js";import"./Message.context-BObz3Mtj.js";import"./ErrorMessage.context-D3SbpLIU.js";import"./useFocus-DJe2BRHe.js";import"./useKeyboard-A8_doyNT.js";import"./ComboInput.styles-x3aI4rV_.js";import"./TextField.component-Brod2y3c.js";import"./useTextField-DSYflh9X.js";import"./Field.styles-wtg9rJuP.js";import"./Provider-B9Eqn13H.js";import"./ComboInput.context-Dk1bHly0.js";import"./Input.context-KI5tKbdp.js";import"./TextArea.context-BmdJtbM9.js";import"./NumberField.component-CldRs-JV.js";import"./useEvent-CXpXU_b4.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-D0G3eTCL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./ProgressCircle.component-DZo3rxOV.js";import"./colors-x_YFGAop.js";import"./IconButton.component-Cg2HWRAW.js";import"./Button.component-Bfqq8odl.js";import"./useFocusRing-CPkBIT8D.js";import"./useButton-AoKYWM9F.js";import"./useLink-ByNL9j8X.js";import"./SpinnerLoader.component-qW2PqPLJ.js";import"./Loader.component-l5wuRCiG.js";import"./Flex.component-DqBL6Xjb.js";import"./layout-B6NAx4l9.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-D3qB71XV.js";import"./MaterialIcon.component-Bqs5W7S4.js";import"./Icons.styles-BaNpbbIh.js";let me=Math.round(Math.random()*1e10),fe=0;function be(e){let a=V.useMemo(()=>e.name||`radio-group-${me}-${++fe}`,[e.name]);var l;let[o,r]=se(e.value,(l=e.defaultValue)!==null&&l!==void 0?l:null,e.onChange),[m,c]=V.useState(null),i=le({...e,value:o}),p=h=>{!e.isReadOnly&&!e.isDisabled&&(r(h),i.commitValidation())},d=i.displayValidation.isInvalid;return{...i,name:a,selectedValue:o,setSelectedValue:p,lastFocusedValue:m,setLastFocusedValue:c,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(d?"invalid":null),isInvalid:d}}const J=new WeakMap;function he(e,a,l){let{value:o,children:r,"aria-label":m,"aria-labelledby":c}=e;const i=e.isDisabled||a.isDisabled;let p=r!=null,d=m!=null||c!=null;!p&&!d&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let h=a.selectedValue===o,k=O=>{O.stopPropagation(),a.setSelectedValue(o)},{pressProps:I,isPressed:q}=L({isDisabled:i}),{pressProps:g,isPressed:$}=L({isDisabled:i,onPress(){a.setSelectedValue(o)}}),{focusableProps:D}=ce(y(e,{onFocus:()=>a.setLastFocusedValue(o)}),l),w=y(I,D),F=z(e,{labelable:!0}),v=-1;a.selectedValue!=null?a.selectedValue===o&&(v=0):(a.lastFocusedValue===o||a.lastFocusedValue==null)&&(v=0),i&&(v=void 0);let{name:u,descriptionId:s,errorMessageId:f,validationBehavior:n}=J.get(a);return ne(l,a.selectedValue,a.setSelectedValue),pe({validationBehavior:n},a,l),{labelProps:y(g,{onClick:O=>O.preventDefault()}),inputProps:y(F,{...w,type:"radio",name:u,tabIndex:v,disabled:i,required:a.isRequired&&n==="native",checked:h,value:o,onChange:k,"aria-describedby":[e["aria-describedby"],a.isInvalid?f:null,s].filter(Boolean).join(" ")||void 0}),isDisabled:i,isSelected:h,isPressed:q||$}}function ve(e,a){let{name:l,isReadOnly:o,isRequired:r,isDisabled:m,orientation:c="vertical",validationBehavior:i="aria"}=e,{direction:p}=A(),{isInvalid:d,validationErrors:h,validationDetails:k}=a.displayValidation,{labelProps:I,fieldProps:q,descriptionProps:g,errorMessageProps:$}=re({...e,labelElementType:"span",isInvalid:a.isInvalid,errorMessage:e.errorMessage||h}),D=z(e,{labelable:!0}),{focusWithinProps:w}=ie({onBlurWithin(u){var s;(s=e.onBlur)===null||s===void 0||s.call(e,u),a.selectedValue||a.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),F=u=>{let s;switch(u.key){case"ArrowRight":p==="rtl"&&c!=="vertical"?s="prev":s="next";break;case"ArrowLeft":p==="rtl"&&c!=="vertical"?s="next":s="prev";break;case"ArrowDown":s="next";break;case"ArrowUp":s="prev";break;default:return}u.preventDefault();let f=ae(u.currentTarget,{from:u.target}),n;s==="next"?(n=f.nextNode(),n||(f.currentNode=u.currentTarget,n=f.firstChild())):(n=f.previousNode(),n||(f.currentNode=u.currentTarget,n=f.lastChild())),n&&(n.focus(),a.setSelectedValue(n.value))},v=ee(l);return J.set(a,{name:v,descriptionId:g.id,errorMessageId:$.id,validationBehavior:i}),{radioGroupProps:y(D,{role:"radiogroup",onKeyDown:F,"aria-invalid":a.isInvalid||void 0,"aria-errormessage":e["aria-errormessage"],"aria-readonly":o||void 0,"aria-required":r||void 0,"aria-disabled":m||void 0,"aria-orientation":c,...q,...w}),labelProps:I,descriptionProps:g,errorMessageProps:$,isInvalid:d,validationErrors:h,validationDetails:k}}const Q=oe.createContext(null),P=C.span`
  ${_.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  line-height: 1.5;

  font-size: var(--radio-label-font-size);
  color: var(--radio-text-clr);
  min-height: var(--radio-label-height);

  ${S({ltr:"padding-left: calc(var(--radio-size) + var(--radio-label-spacing));",rtl:"padding-right: calc(var(--radio-size) + var(--radio-label-spacing));"})}

  /* :before contains the box in the "radio" */
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    width: var(--radio-size);
    height: var(--radio-size);
    box-sizing: border-box;
    background-color: var(--radio-bg-clr);
    ${_.Border("radio")}
    ${S({ltr:"left: 2px",rtl:"right: 2px"})}
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
    ${S({ltr:"left: 7px",rtl:"right: 7px"})};
  }
`,j=C.div`
  ${_.ToggleInputLike(P)}

  &[data-selected] .aje-checkbox__label {
    &:before {
      border-color: var(--radio-checked);
    }
    &:after {
      display: block;
      background-color: var(--radio-checked);
    }
  }

  &[data-disabled] ${P}:after, &[data-disabled] ${P} {
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
`;function N(e){const{label:a,message:l,error:o}=e,r=be(e),{radioGroupProps:m,labelProps:c,descriptionProps:i,errorMessageProps:p}=ve(e,r),d=H({componentClassName:"aje-radio-group",...e,values:{isDisabled:r.isDisabled,isInvalid:r.isInvalid,isReadOnly:r.isReadOnly,isRequired:r.isRequired},selectors:{"data-disabled":r.isDisabled,"data-invalid":r.isInvalid,"data-readonly":r.isReadOnly,"data-required":r.isRequired}});return t.jsxs(ye,{...m,...d,name:e.name,children:[t.jsxs(de,{as:"legend",...c,children:[a,r.isRequired&&t.jsx(te,{}),l&&t.jsx(U,{...i,children:l}),o&&r.isInvalid&&t.jsx(K,{...p,isInvalid:!0,children:o})]}),t.jsx(Q.Provider,{value:r,children:d.children})]})}try{N.displayName="RadioGroup",N.__docgenInfo={description:`
Radio groups should be used for a choice selection of 3-5 options. There may be a few cases where you can use
these for more than 5, but it isn't common.

- For 2 choices, use a [CheckBox](/docs/inputs-choose-state-checkbox--overview) or [ToggleSwitch](/docs/inputs-choose-state-toggleswitch--overview) instead.
- For more than 5 options, use a [select](/docs/dropdowns-customselect--overview).`,displayName:"RadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldStatusProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldStatusProps>"}}}}}catch{}function b(e){const{message:a,error:l}=e,o=V.useRef(null),r=V.useContext(Q);if(!r)throw new Error("Radio components must be rendered within a RadioGroup");const{inputProps:m,labelProps:c,...i}=he({...e,children:!0},r,o),{direction:p}=A(),d=H({componentClassName:"aje-radio",...e,values:i,selectors:{"data-selected":i.isSelected,"data-disabled":i.isDisabled,"data-pressed":i.isPressed}});return t.jsxs(j,{$rtl:p==="rtl",...d,children:[t.jsx(ue,{...m}),t.jsxs(P,{...c,className:"aje-checkbox__label",$rtl:p==="rtl",children:[d.children,a&&t.jsx(U,{children:a}),l&&t.jsx(K,{children:l})]})]})}try{b.displayName="Radio",b.__docgenInfo={description:"Radio Elements, must be a descendant of a `<RadioGroup>`",displayName:"Radio",props:{message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<RadioRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<RadioRenderProps>"}}}}}catch{}const Ba={title:"Inputs/Choose State/RadioGroup",parameters:{layout:"centered",cssprops:Z("Radio")},component:N,argTypes:{...X,...Y,label:{control:"text",table:{category:"Helper Text"}},error:{control:"text",table:{category:"Helper Text"}},message:{control:"text",table:{category:"Helper Text"}},children:{control:!1},isReadOnly:{table:{category:"Field State"}},value:{description:"The value of the selected radio in a controlled component",control:"select",options:["opt1","opt2","opt3"]},defaultValue:{description:"The value of the selected radio in an uncontrolled component",control:"select",options:["opt1","opt2","opt3"]}}},R={args:{label:"Radio Group Label",children:[t.jsx(b,{value:"opt1",children:"Option 1"},"1"),t.jsx(b,{value:"opt2",children:"Option 2"},"2"),t.jsx(b,{value:"opt3",children:"Option 3"},"3")]}},x={args:{label:"Radio Group Label",children:[t.jsx(b,{value:"opt1",children:"Option 1"},"1"),t.jsx(b,{value:"opt2",isDisabled:!0,children:"Option 2"},"2"),t.jsx(b,{value:"opt3",children:"Option 3"},"3")]}};var M,E,G;R.parameters={...R.parameters,docs:{...(M=R.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(E=R.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var T,B,W;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(B=x.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const Wa=["Primary","WithDisabledOptions"];export{R as Primary,x as WithDisabledOptions,Wa as __namedExportsOrder,Ba as default};
