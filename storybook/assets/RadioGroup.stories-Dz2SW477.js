import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as X,F as Y}from"./helpers-DOVaRqs_.js";import{g as Z}from"./cssprops-DECR0Nbg.js";import{a as g,$ as ee}from"./useObjectRef-B4hnndUj.js";import{$ as z}from"./filterDOMProps-CeZl_uWj.js";import{$ as ae}from"./FocusScope-BPqc7wak.js";import{$ as re}from"./useFocusWithin-CUff8KyO.js";import{$ as ie}from"./useField-D8gfBVj0.js";import{$ as A}from"./context-z6pb9OkM.js";import{r as k,R as oe}from"./index-BCtMShv3.js";import{d as C}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as S}from"./mixins-XviowZ_6.js";import{d as O}from"./utils-DqmNl-Il.js";import{u as H}from"./useRenderProps-CP918x9p.js";import{R as te}from"./RequiredMarker-CwAzCIB3.js";import{$ as le}from"./useFormValidationState-CONlS5Wo.js";import{$ as se}from"./useControlledState-vzCMHZvt.js";import{L as de}from"./Label.component-B9Ls_jeT.js";import{M as U}from"./Message.component-C2RnBMtT.js";import{E as K}from"./ErrorMessage.component-C4MrFAT_.js";import{$ as ne}from"./useFormReset-GcAVnfXr.js";import{$ as L}from"./usePress-DRrD1IP8.js";import{$ as ce}from"./useFocusable-B7HbK8LX.js";import{$ as ue}from"./useFormValidation-CnIG3AAh.js";import{H as pe}from"./Inputs.styles-DbVw_14a.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-C2kgHJSW.js";import"./CollectionBuilder-4ZFsDDvv.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./SSRProvider-DyiXDq2k.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./index-EJ0-2BeM.js";import"./index-C_lK3xe_.js";import"./Label.context-Bxyvy4yx.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.context-B4seO6gR.js";import"./ComboInput.styles-GNwh4bFc.js";import"./TextField.component-6uN_k8PZ.js";import"./useTextField-D4_p2q36.js";import"./Field.styles-D_hvWyI3.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-Dhqk-dVH.js";import"./Input.context-kYvBQ720.js";import"./TextArea.context-C8nZtAtq.js";import"./NumberField.component-8s2hqyxt.js";import"./useEvent-CI_xZcmG.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton--vl_B8TW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-e0zTg6D5.js";import"./number-nHrFdSb-.js";import"./IconButton.component-D9rXoQfu.js";import"./index-DrYxa4Ea.js";import"./Icons.styles-D-JqKhr6.js";import"./BaseButton-12y0SWZH.js";import"./useFocusRing-C-zHDrKK.js";import"./useButton-5e9SJH5K.js";import"./useLink-CA4JS4F-.js";import"./SpinnerLoader.component-BakStGbE.js";import"./Loader.component-BkKFkjkF.js";import"./index-eHmJUSN_.js";import"./layout-Dd7m2B0D.js";import"./Checkmark.component-9SUCBX5x.js";import"./Spinner.component-BXSi7FUq.js";import"./ProgressCircle.component-BVUiht0Q.js";import"./colors-x_YFGAop.js";let me=Math.round(Math.random()*1e10),fe=0;function be(e){let a=k.useMemo(()=>e.name||`radio-group-${me}-${++fe}`,[e.name]);var l;let[o,r]=se(e.value,(l=e.defaultValue)!==null&&l!==void 0?l:null,e.onChange),[m,c]=k.useState(null),i=le({...e,value:o}),u=h=>{!e.isReadOnly&&!e.isDisabled&&(r(h),i.commitValidation())},d=i.displayValidation.isInvalid;return{...i,name:a,selectedValue:o,setSelectedValue:u,lastFocusedValue:m,setLastFocusedValue:c,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(d?"invalid":null),isInvalid:d}}const J=new WeakMap;function he(e,a,l){let{value:o,children:r,"aria-label":m,"aria-labelledby":c}=e;const i=e.isDisabled||a.isDisabled;let u=r!=null,d=m!=null||c!=null;!u&&!d&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let h=a.selectedValue===o,I=v=>{v.stopPropagation(),a.setSelectedValue(o)},{pressProps:q,isPressed:D}=L({isDisabled:i}),{pressProps:$,isPressed:R}=L({isDisabled:i,onPress(){var v;a.setSelectedValue(o),(v=l.current)===null||v===void 0||v.focus()}}),{focusableProps:w}=ce(g(e,{onFocus:()=>a.setLastFocusedValue(o)}),l),_=g(q,w),F=z(e,{labelable:!0}),y=-1;a.selectedValue!=null?a.selectedValue===o&&(y=0):(a.lastFocusedValue===o||a.lastFocusedValue==null)&&(y=0),i&&(y=void 0);let{name:p,descriptionId:s,errorMessageId:f,validationBehavior:n}=J.get(a);return ne(l,a.selectedValue,a.setSelectedValue),ue({validationBehavior:n},a,l),{labelProps:g($,{onClick:v=>v.preventDefault()}),inputProps:g(F,{..._,type:"radio",name:p,tabIndex:y,disabled:i,required:a.isRequired&&n==="native",checked:h,value:o,onChange:I,"aria-describedby":[e["aria-describedby"],a.isInvalid?f:null,s].filter(Boolean).join(" ")||void 0}),isDisabled:i,isSelected:h,isPressed:D||R}}function ve(e,a){let{name:l,isReadOnly:o,isRequired:r,isDisabled:m,orientation:c="vertical",validationBehavior:i="aria"}=e,{direction:u}=A(),{isInvalid:d,validationErrors:h,validationDetails:I}=a.displayValidation,{labelProps:q,fieldProps:D,descriptionProps:$,errorMessageProps:R}=ie({...e,labelElementType:"span",isInvalid:a.isInvalid,errorMessage:e.errorMessage||h}),w=z(e,{labelable:!0}),{focusWithinProps:_}=re({onBlurWithin(p){var s;(s=e.onBlur)===null||s===void 0||s.call(e,p),a.selectedValue||a.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),F=p=>{let s;switch(p.key){case"ArrowRight":u==="rtl"&&c!=="vertical"?s="prev":s="next";break;case"ArrowLeft":u==="rtl"&&c!=="vertical"?s="next":s="prev";break;case"ArrowDown":s="next";break;case"ArrowUp":s="prev";break;default:return}p.preventDefault();let f=ae(p.currentTarget,{from:p.target}),n;s==="next"?(n=f.nextNode(),n||(f.currentNode=p.currentTarget,n=f.firstChild())):(n=f.previousNode(),n||(f.currentNode=p.currentTarget,n=f.lastChild())),n&&(n.focus(),a.setSelectedValue(n.value))},y=ee(l);return J.set(a,{name:y,descriptionId:$.id,errorMessageId:R.id,validationBehavior:i}),{radioGroupProps:g(w,{role:"radiogroup",onKeyDown:F,"aria-invalid":a.isInvalid||void 0,"aria-errormessage":e["aria-errormessage"],"aria-readonly":o||void 0,"aria-required":r||void 0,"aria-disabled":m||void 0,"aria-orientation":c,...D,..._}),labelProps:q,descriptionProps:$,errorMessageProps:R,isInvalid:d,validationErrors:h,validationDetails:I}}const Q=oe.createContext(null),V=C.span`
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
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldStatusProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldStatusProps>"}}}}}catch{}function b(e){const{message:a,error:l}=e,o=k.useRef(null),r=k.useContext(Q);if(!r)throw new Error("Radio components must be rendered within a RadioGroup");const{inputProps:m,labelProps:c,...i}=he({...e,children:!0},r,o),{direction:u}=A(),d=H({componentClassName:"aje-radio",...e,values:i,selectors:{"data-selected":i.isSelected,"data-disabled":i.isDisabled,"data-pressed":i.isPressed}});return t.jsxs(j,{$rtl:u==="rtl",...d,children:[t.jsx(pe,{...m}),t.jsxs(V,{...c,className:"aje-checkbox__label",$rtl:u==="rtl",children:[d.children,a&&t.jsx(U,{children:a}),l&&t.jsx(K,{children:l})]})]})}try{b.displayName="Radio",b.__docgenInfo={description:"Radio Elements, must be a descendant of a `<RadioGroup>`",displayName:"Radio",props:{message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<RadioRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<RadioRenderProps>"}}}}}catch{}const Ca={title:"Inputs/Choose State/RadioGroup",parameters:{layout:"centered",cssprops:Z("Radio")},component:N,argTypes:{...Y,...X,label:{control:"text",table:{category:"Helper Text"}},error:{control:"text",table:{category:"Helper Text"}},message:{control:"text",table:{category:"Helper Text"}},children:{control:!1},isReadOnly:{table:{category:"Field State"}},value:{description:"The value of the selected radio in a controlled component",control:"select",options:["opt1","opt2","opt3"]},defaultValue:{description:"The value of the selected radio in an uncontrolled component",control:"select",options:["opt1","opt2","opt3"]}}},x={args:{label:"Radio Group Label",children:[t.jsx(b,{value:"opt1",children:"Option 1"},"1"),t.jsx(b,{value:"opt2",children:"Option 2"},"2"),t.jsx(b,{value:"opt3",children:"Option 3"},"3")]}},P={args:{label:"Radio Group Label",children:[t.jsx(b,{value:"opt1",children:"Option 1"},"1"),t.jsx(b,{value:"opt2",isDisabled:!0,children:"Option 2"},"2"),t.jsx(b,{value:"opt3",children:"Option 3"},"3")]}};var M,E,G;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(B=P.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const La=["Primary","WithDisabledOptions"];export{x as Primary,P as WithDisabledOptions,La as __namedExportsOrder,Ca as default};
