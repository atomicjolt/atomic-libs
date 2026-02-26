import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as X,F as Y}from"./helpers-BHg_Ia2Y.js";import{g as Z}from"./cssprops-DECR0Nbg.js";import{b as g,$ as ee}from"./useObjectRef-D2RG7rRi.js";import{$ as z}from"./filterDOMProps-CeZl_uWj.js";import{$ as ae}from"./FocusScope-DX4qyq_T.js";import{$ as re}from"./useFocusWithin-A-CR497l.js";import{$ as ie}from"./useField-BY78xfaL.js";import{$ as A}from"./context-z6pb9OkM.js";import{r as k,R as oe}from"./index-BCtMShv3.js";import{d as C}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as S}from"./mixins-XviowZ_6.js";import{d as O}from"./utils-DqmNl-Il.js";import{u as H}from"./useRenderProps-CP918x9p.js";import{R as te}from"./RequiredMarker-CwAzCIB3.js";import{$ as le}from"./useFormValidationState-CONlS5Wo.js";import{$ as se}from"./useControlledState-vzCMHZvt.js";import{L as de}from"./Label.component-CkFYuFtU.js";import{M as U}from"./Message.component-BY76Ts6Z.js";import{E as K}from"./ErrorMessage.component-Dcm6zm2l.js";import{$ as ne}from"./useFormReset-BY6BQbOl.js";import{$ as L}from"./usePress-DWgw6o5d.js";import{$ as ce}from"./useFocusable-DacP9xvE.js";import{$ as ue}from"./useFormValidation-BfT1egZx.js";import{H as pe}from"./Inputs.styles--xICwzsT.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-C4fZf6qK.js";import"./CollectionBuilder-BcAYd8lA.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./SSRProvider-DyiXDq2k.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./index-EJ0-2BeM.js";import"./index-CsiUWFDz.js";import"./Label.context-BbpE5KUK.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./ComboInput.styles-GNwh4bFc.js";import"./TextField.component-BvhYwr3I.js";import"./useTextField-CQoa95kJ.js";import"./Field.styles-D_hvWyI3.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-BgrINUmq.js";import"./Input.context-CDXu9Ele.js";import"./TextArea.context-C6JAP7JO.js";import"./NumberField.component-BnNUJfZn.js";import"./useEvent-CeKNPFU-.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-DrKJfbOV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-BxdzJgC_.js";import"./index-ClDOemSS.js";import"./BaseButton-DpKO0hZ6.js";import"./useFocusRing-CzfpHkj_.js";import"./useButton-D1bzctNv.js";import"./useLink-BGiV_6Hq.js";import"./SpinnerLoader.component-Bhl5fj-N.js";import"./Loader.component-CsFH7sO8.js";import"./index-DzGcUmQS.js";import"./layout-Dd7m2B0D.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C44VOTWe.js";import"./ProgressCircle.component-_TQleApR.js";import"./number-nHrFdSb-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-0oB4vHh7.js";import"./Icons.styles-D-JqKhr6.js";let me=Math.round(Math.random()*1e10),fe=0;function be(e){let a=k.useMemo(()=>e.name||`radio-group-${me}-${++fe}`,[e.name]);var l;let[o,r]=se(e.value,(l=e.defaultValue)!==null&&l!==void 0?l:null,e.onChange),[m,c]=k.useState(null),i=le({...e,value:o}),u=h=>{!e.isReadOnly&&!e.isDisabled&&(r(h),i.commitValidation())},d=i.displayValidation.isInvalid;return{...i,name:a,selectedValue:o,setSelectedValue:u,lastFocusedValue:m,setLastFocusedValue:c,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(d?"invalid":null),isInvalid:d}}const J=new WeakMap;function he(e,a,l){let{value:o,children:r,"aria-label":m,"aria-labelledby":c}=e;const i=e.isDisabled||a.isDisabled;let u=r!=null,d=m!=null||c!=null;!u&&!d&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let h=a.selectedValue===o,I=v=>{v.stopPropagation(),a.setSelectedValue(o)},{pressProps:q,isPressed:D}=L({isDisabled:i}),{pressProps:$,isPressed:R}=L({isDisabled:i,onPress(){var v;a.setSelectedValue(o),(v=l.current)===null||v===void 0||v.focus()}}),{focusableProps:w}=ce(g(e,{onFocus:()=>a.setLastFocusedValue(o)}),l),_=g(q,w),F=z(e,{labelable:!0}),y=-1;a.selectedValue!=null?a.selectedValue===o&&(y=0):(a.lastFocusedValue===o||a.lastFocusedValue==null)&&(y=0),i&&(y=void 0);let{name:p,descriptionId:s,errorMessageId:f,validationBehavior:n}=J.get(a);return ne(l,a.selectedValue,a.setSelectedValue),ue({validationBehavior:n},a,l),{labelProps:g($,{onClick:v=>v.preventDefault()}),inputProps:g(F,{..._,type:"radio",name:p,tabIndex:y,disabled:i,required:a.isRequired&&n==="native",checked:h,value:o,onChange:I,"aria-describedby":[e["aria-describedby"],a.isInvalid?f:null,s].filter(Boolean).join(" ")||void 0}),isDisabled:i,isSelected:h,isPressed:D||R}}function ve(e,a){let{name:l,isReadOnly:o,isRequired:r,isDisabled:m,orientation:c="vertical",validationBehavior:i="aria"}=e,{direction:u}=A(),{isInvalid:d,validationErrors:h,validationDetails:I}=a.displayValidation,{labelProps:q,fieldProps:D,descriptionProps:$,errorMessageProps:R}=ie({...e,labelElementType:"span",isInvalid:a.isInvalid,errorMessage:e.errorMessage||h}),w=z(e,{labelable:!0}),{focusWithinProps:_}=re({onBlurWithin(p){var s;(s=e.onBlur)===null||s===void 0||s.call(e,p),a.selectedValue||a.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),F=p=>{let s;switch(p.key){case"ArrowRight":u==="rtl"&&c!=="vertical"?s="prev":s="next";break;case"ArrowLeft":u==="rtl"&&c!=="vertical"?s="next":s="prev";break;case"ArrowDown":s="next";break;case"ArrowUp":s="prev";break;default:return}p.preventDefault();let f=ae(p.currentTarget,{from:p.target}),n;s==="next"?(n=f.nextNode(),n||(f.currentNode=p.currentTarget,n=f.firstChild())):(n=f.previousNode(),n||(f.currentNode=p.currentTarget,n=f.lastChild())),n&&(n.focus(),a.setSelectedValue(n.value))},y=ee(l);return J.set(a,{name:y,descriptionId:$.id,errorMessageId:R.id,validationBehavior:i}),{radioGroupProps:g(w,{role:"radiogroup",onKeyDown:F,"aria-invalid":a.isInvalid||void 0,"aria-errormessage":e["aria-errormessage"],"aria-readonly":o||void 0,"aria-required":r||void 0,"aria-disabled":m||void 0,"aria-orientation":c,...D,..._}),labelProps:q,descriptionProps:$,errorMessageProps:R,isInvalid:d,validationErrors:h,validationDetails:I}}const Q=oe.createContext(null),V=C.span`
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
