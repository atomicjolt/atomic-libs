import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as X,F as Y}from"./helpers-DgUU647_.js";import{g as Z}from"./cssprops-BO85xpNm.js";import{b as g,$ as ee}from"./useObjectRef-BO7mrmvR.js";import{$ as z}from"./filterDOMProps-CeZl_uWj.js";import{$ as ae}from"./FocusScope-CLRP0VYY.js";import{$ as re}from"./useFocusWithin-CrVHK3Cv.js";import{$ as ie}from"./useField-BhG43OVF.js";import{$ as A}from"./context-BF7eBGFA.js";import{r as k,R as oe}from"./index-DmM0KDA7.js";import{d as C}from"./styled-components.browser.esm-B0S50oBn.js";import{m as S}from"./mixins-CgZ-Dp8B.js";import{d as O}from"./utils-DqmNl-Il.js";import{u as H}from"./useRenderProps-BzxgHqRb.js";import{R as te}from"./RequiredMarker-CwAzCIB3.js";import{$ as le}from"./useFormValidationState-CKAS44yz.js";import{$ as se}from"./useControlledState-sJfMLWrs.js";import{L as de}from"./Label.component-BzbmvXGx.js";import{M as U}from"./Message.component-CufFXYCC.js";import{E as K}from"./ErrorMessage.component-CS4OzHGN.js";import{$ as ne}from"./useFormReset-DvzwwQm6.js";import{$ as L}from"./usePress-Cxy0og0d.js";import{$ as ce}from"./useFocusable-B7cTVP20.js";import{$ as pe}from"./useFormValidation-CsrNRCZi.js";import{H as ue}from"./Inputs.styles-DPN4cDPp.js";import"./index-CLYxO_qr.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-Ci2MViY1.js";import"./Collection-CfmUX7eJ.js";import"./CollectionBuilder-BOiBnYCj.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./SSRProvider-nIDwi1ZO.js";import"./index-SU87TpAq.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./index-CrEZfznw.js";import"./index-CqJC2f1M.js";import"./Label.context-8YwVGsEO.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.context-D-RNFvKn.js";import"./ComboInput.styles-BLZOd1-l.js";import"./TextField.component-BGgGyLh8.js";import"./useTextField-B3HDaRNl.js";import"./Field.styles-B11u_h4j.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-Di7U2yCG.js";import"./Input.context-BTEI3GdY.js";import"./TextArea.context-D8jqO_QU.js";import"./NumberField.component-DICJVKWh.js";import"./useEvent-Qm4q9YOK.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-DS2l_r0R.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./ProgressCircle.component-RfFeL5kh.js";import"./colors-x_YFGAop.js";import"./IconButton.component-DyPTWEfZ.js";import"./Button.component-BYfZ8zv5.js";import"./useFocusRing-4PdL76fJ.js";import"./useButton-DlM8S39G.js";import"./useLink-CqmZ9M1P.js";import"./SpinnerLoader.component-Biwz_qZP.js";import"./Loader.component-CDjyoMXt.js";import"./Flex.component-DSJ8Mwfi.js";import"./layout-C5ppTKTq.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-DLnyo3xc.js";import"./MaterialIcon.component-BRVfLQTV.js";import"./Icons.styles-D2L4nNgu.js";let me=Math.round(Math.random()*1e10),fe=0;function be(e){let a=k.useMemo(()=>e.name||`radio-group-${me}-${++fe}`,[e.name]);var l;let[o,r]=se(e.value,(l=e.defaultValue)!==null&&l!==void 0?l:null,e.onChange),[m,c]=k.useState(null),i=le({...e,value:o}),p=h=>{!e.isReadOnly&&!e.isDisabled&&(r(h),i.commitValidation())},d=i.displayValidation.isInvalid;return{...i,name:a,selectedValue:o,setSelectedValue:p,lastFocusedValue:m,setLastFocusedValue:c,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(d?"invalid":null),isInvalid:d}}const J=new WeakMap;function he(e,a,l){let{value:o,children:r,"aria-label":m,"aria-labelledby":c}=e;const i=e.isDisabled||a.isDisabled;let p=r!=null,d=m!=null||c!=null;!p&&!d&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let h=a.selectedValue===o,I=v=>{v.stopPropagation(),a.setSelectedValue(o)},{pressProps:q,isPressed:D}=L({isDisabled:i}),{pressProps:$,isPressed:R}=L({isDisabled:i,onPress(){var v;a.setSelectedValue(o),(v=l.current)===null||v===void 0||v.focus()}}),{focusableProps:w}=ce(g(e,{onFocus:()=>a.setLastFocusedValue(o)}),l),_=g(q,w),F=z(e,{labelable:!0}),y=-1;a.selectedValue!=null?a.selectedValue===o&&(y=0):(a.lastFocusedValue===o||a.lastFocusedValue==null)&&(y=0),i&&(y=void 0);let{name:u,descriptionId:s,errorMessageId:f,validationBehavior:n}=J.get(a);return ne(l,a.selectedValue,a.setSelectedValue),pe({validationBehavior:n},a,l),{labelProps:g($,{onClick:v=>v.preventDefault()}),inputProps:g(F,{..._,type:"radio",name:u,tabIndex:y,disabled:i,required:a.isRequired&&n==="native",checked:h,value:o,onChange:I,"aria-describedby":[e["aria-describedby"],a.isInvalid?f:null,s].filter(Boolean).join(" ")||void 0}),isDisabled:i,isSelected:h,isPressed:D||R}}function ve(e,a){let{name:l,isReadOnly:o,isRequired:r,isDisabled:m,orientation:c="vertical",validationBehavior:i="aria"}=e,{direction:p}=A(),{isInvalid:d,validationErrors:h,validationDetails:I}=a.displayValidation,{labelProps:q,fieldProps:D,descriptionProps:$,errorMessageProps:R}=ie({...e,labelElementType:"span",isInvalid:a.isInvalid,errorMessage:e.errorMessage||h}),w=z(e,{labelable:!0}),{focusWithinProps:_}=re({onBlurWithin(u){var s;(s=e.onBlur)===null||s===void 0||s.call(e,u),a.selectedValue||a.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),F=u=>{let s;switch(u.key){case"ArrowRight":p==="rtl"&&c!=="vertical"?s="prev":s="next";break;case"ArrowLeft":p==="rtl"&&c!=="vertical"?s="next":s="prev";break;case"ArrowDown":s="next";break;case"ArrowUp":s="prev";break;default:return}u.preventDefault();let f=ae(u.currentTarget,{from:u.target}),n;s==="next"?(n=f.nextNode(),n||(f.currentNode=u.currentTarget,n=f.firstChild())):(n=f.previousNode(),n||(f.currentNode=u.currentTarget,n=f.lastChild())),n&&(n.focus(),a.setSelectedValue(n.value))},y=ee(l);return J.set(a,{name:y,descriptionId:$.id,errorMessageId:R.id,validationBehavior:i}),{radioGroupProps:g(w,{role:"radiogroup",onKeyDown:F,"aria-invalid":a.isInvalid||void 0,"aria-errormessage":e["aria-errormessage"],"aria-readonly":o||void 0,"aria-required":r||void 0,"aria-disabled":m||void 0,"aria-orientation":c,...D,..._}),labelProps:q,descriptionProps:$,errorMessageProps:R,isInvalid:d,validationErrors:h,validationDetails:I}}const Q=oe.createContext(null),V=C.span`
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
`;function N(e){const{label:a,message:l,error:o}=e,r=be(e),{radioGroupProps:m,labelProps:c,descriptionProps:i,errorMessageProps:p}=ve(e,r),d=H({componentClassName:"aje-radio-group",...e,values:{isDisabled:r.isDisabled,isInvalid:r.isInvalid,isReadOnly:r.isReadOnly,isRequired:r.isRequired},selectors:{"data-disabled":r.isDisabled,"data-invalid":r.isInvalid,"data-readonly":r.isReadOnly,"data-required":r.isRequired}});return t.jsxs(ye,{...m,...d,name:e.name,children:[t.jsxs(de,{as:"legend",...c,children:[a,r.isRequired&&t.jsx(te,{}),l&&t.jsx(U,{...i,children:l}),o&&r.isInvalid&&t.jsx(K,{...p,isInvalid:!0,children:o})]}),t.jsx(Q.Provider,{value:r,children:d.children})]})}try{N.displayName="RadioGroup",N.__docgenInfo={description:`
Radio groups should be used for a choice selection of 3-5 options. There may be a few cases where you can use
these for more than 5, but it isn't common.

- For 2 choices, use a [CheckBox](/docs/inputs-choose-state-checkbox--overview) or [ToggleSwitch](/docs/inputs-choose-state-toggleswitch--overview) instead.
- For more than 5 options, use a [select](/docs/dropdowns-customselect--overview).`,displayName:"RadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldStatusProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldStatusProps>"}}}}}catch{}function b(e){const{message:a,error:l}=e,o=k.useRef(null),r=k.useContext(Q);if(!r)throw new Error("Radio components must be rendered within a RadioGroup");const{inputProps:m,labelProps:c,...i}=he({...e,children:!0},r,o),{direction:p}=A(),d=H({componentClassName:"aje-radio",...e,values:i,selectors:{"data-selected":i.isSelected,"data-disabled":i.isDisabled,"data-pressed":i.isPressed}});return t.jsxs(j,{$rtl:p==="rtl",...d,children:[t.jsx(ue,{...m}),t.jsxs(V,{...c,className:"aje-checkbox__label",$rtl:p==="rtl",children:[d.children,a&&t.jsx(U,{children:a}),l&&t.jsx(K,{children:l})]})]})}try{b.displayName="Radio",b.__docgenInfo={description:"Radio Elements, must be a descendant of a `<RadioGroup>`",displayName:"Radio",props:{message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<RadioRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<RadioRenderProps>"}}}}}catch{}const Ea={title:"Inputs/Choose State/RadioGroup",parameters:{layout:"centered",cssprops:Z("Radio")},component:N,argTypes:{...Y,...X,label:{control:"text",table:{category:"Helper Text"}},error:{control:"text",table:{category:"Helper Text"}},message:{control:"text",table:{category:"Helper Text"}},children:{control:!1},isReadOnly:{table:{category:"Field State"}},value:{description:"The value of the selected radio in a controlled component",control:"select",options:["opt1","opt2","opt3"]},defaultValue:{description:"The value of the selected radio in an uncontrolled component",control:"select",options:["opt1","opt2","opt3"]}}},x={args:{label:"Radio Group Label",children:[t.jsx(b,{value:"opt1",children:"Option 1"},"1"),t.jsx(b,{value:"opt2",children:"Option 2"},"2"),t.jsx(b,{value:"opt3",children:"Option 3"},"3")]}},P={args:{label:"Radio Group Label",children:[t.jsx(b,{value:"opt1",children:"Option 1"},"1"),t.jsx(b,{value:"opt2",isDisabled:!0,children:"Option 2"},"2"),t.jsx(b,{value:"opt3",children:"Option 3"},"3")]}};var M,E,G;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(B=P.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const Ga=["Primary","WithDisabledOptions"];export{x as Primary,P as WithDisabledOptions,Ga as __namedExportsOrder,Ea as default};
