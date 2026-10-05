import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{R as re,F as oe}from"./helpers-KKeMmUAi.js";import{g as te}from"./cssprops-DECR0Nbg.js";import{b as $,$ as le}from"./useObjectRef-D2RG7rRi.js";import{$ as Q}from"./filterDOMProps-CeZl_uWj.js";import{$ as de}from"./FocusScope-Dv5_DXCK.js";import{$ as ne}from"./useFocusWithin-BJ0-_hiU.js";import{$ as se}from"./useField-BY78xfaL.js";import{$ as X}from"./context-z6pb9OkM.js";import{r as O,R as ce}from"./index-BCtMShv3.js";import{g as P}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as F}from"./mixins-CcgEHb9c.js";import{d as j}from"./utils-DqmNl-Il.js";import{S as ue}from"./SkeletonLoader.component-q75MwwfP.js";import{u as Y}from"./useRenderProps-CP918x9p.js";import{R as pe}from"./RequiredMarker-CwAzCIB3.js";import{$ as me}from"./useFormValidationState-CONlS5Wo.js";import{$ as fe}from"./useControlledState-vzCMHZvt.js";import{u as be}from"./Loading.context-C7II2W1n.js";import{L as M}from"./Label.component-BWEgwSKL.js";import{M as Z}from"./Message.component-CZ4-z7fs.js";import{E as ee}from"./ErrorMessage.component-DBytMZ-8.js";import{$ as he}from"./useFormReset-BY6BQbOl.js";import{$ as T}from"./usePress-CqXh5MnK.js";import{$ as ge}from"./useFocusable-DacP9xvE.js";import{$ as ve}from"./useFormValidation-BfT1egZx.js";import{H as ye}from"./Inputs.styles-Ch7s-CR_.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./SSRProvider-DyiXDq2k.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./index-EJ0-2BeM.js";import"./index-CKqsTkFX.js";import"./Label.context-CCD9MV1z.js";import"./Message.context-Dd4cT4rL.js";import"./ErrorMessage.context-AYC8UfzI.js";import"./ComboInput.styles-kOaziVwv.js";import"./TextField.component-N2s51dq8.js";import"./useTextField-CQoa95kJ.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-_UpYbRGR.js";import"./Input.context-Cyaw3phX.js";import"./TextArea.context-AnZs5gnW.js";import"./NumberField.component-BL-NgYzA.js";import"./useEvent-CeKNPFU-.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-CEXF7CxP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-CorcCtTC.js";import"./index-DAiKQP8B.js";import"./BaseButton-hqyUXOtf.js";import"./useFocusRing-DIS5Kyrs.js";import"./useButton-9RZc7-Gk.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-KlnkCnHe.js";import"./Loader.component-CrjS-2nc.js";import"./index-CB5SOmuf.js";import"./layout-Dd7m2B0D.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-CbEi-nNZ.js";import"./ProgressCircle.component-Cto4SYF5.js";import"./number-nHrFdSb-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-wzFBvnrE.js";import"./Icons.styles-qcj_pyb3.js";let xe=Math.round(Math.random()*1e10),$e=0;function Re(e){let a=O.useMemo(()=>e.name||`radio-group-${xe}-${++$e}`,[e.name]);var l;let[t,r]=fe(e.value,(l=e.defaultValue)!==null&&l!==void 0?l:null,e.onChange),[p,n]=O.useState(null),o=me({...e,value:t}),c=f=>{!e.isReadOnly&&!e.isDisabled&&(r(f),o.commitValidation())},u=o.displayValidation.isInvalid;return{...o,name:a,selectedValue:t,setSelectedValue:c,lastFocusedValue:p,setLastFocusedValue:n,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(u?"invalid":null),isInvalid:u}}const ae=new WeakMap;function Pe(e,a,l){let{value:t,children:r,"aria-label":p,"aria-labelledby":n}=e;const o=e.isDisabled||a.isDisabled;let c=r!=null,u=p!=null||n!=null;!c&&!u&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let f=a.selectedValue===t,g=v=>{v.stopPropagation(),a.setSelectedValue(t)},{pressProps:V,isPressed:y}=T({isDisabled:o}),{pressProps:L,isPressed:k}=T({isDisabled:o,onPress(){var v;a.setSelectedValue(t),(v=l.current)===null||v===void 0||v.focus()}}),{focusableProps:D}=ge($(e,{onFocus:()=>a.setLastFocusedValue(t)}),l),S=$(V,D),_=Q(e,{labelable:!0}),x=-1;a.selectedValue!=null?a.selectedValue===t&&(x=0):(a.lastFocusedValue===t||a.lastFocusedValue==null)&&(x=0),o&&(x=void 0);let{name:m,descriptionId:d,errorMessageId:b,validationBehavior:s}=ae.get(a);return he(l,a.selectedValue,a.setSelectedValue),ve({validationBehavior:s},a,l),{labelProps:$(L,{onClick:v=>v.preventDefault()}),inputProps:$(_,{...S,type:"radio",name:m,tabIndex:x,disabled:o,required:a.isRequired&&s==="native",checked:f,value:t,onChange:g,"aria-describedby":[e["aria-describedby"],a.isInvalid?b:null,d].filter(Boolean).join(" ")||void 0}),isDisabled:o,isSelected:f,isPressed:y||k}}function Ve(e,a){let{name:l,isReadOnly:t,isRequired:r,isDisabled:p,orientation:n="vertical",validationBehavior:o="aria"}=e,{direction:c}=X(),{isInvalid:u,validationErrors:f,validationDetails:g}=a.displayValidation,{labelProps:V,fieldProps:y,descriptionProps:L,errorMessageProps:k}=se({...e,labelElementType:"span",isInvalid:a.isInvalid,errorMessage:e.errorMessage||f}),D=Q(e,{labelable:!0}),{focusWithinProps:S}=ne({onBlurWithin(m){var d;(d=e.onBlur)===null||d===void 0||d.call(e,m),a.selectedValue||a.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),_=m=>{let d;switch(m.key){case"ArrowRight":c==="rtl"&&n!=="vertical"?d="prev":d="next";break;case"ArrowLeft":c==="rtl"&&n!=="vertical"?d="next":d="prev";break;case"ArrowDown":d="next";break;case"ArrowUp":d="prev";break;default:return}m.preventDefault();let b=de(m.currentTarget,{from:m.target}),s;d==="next"?(s=b.nextNode(),s||(b.currentNode=m.currentTarget,s=b.firstChild())):(s=b.previousNode(),s||(b.currentNode=m.currentTarget,s=b.lastChild())),s&&(s.focus(),a.setSelectedValue(s.value))},x=le(l);return ae.set(a,{name:x,descriptionId:L.id,errorMessageId:k.id,validationBehavior:o}),{radioGroupProps:$(D,{role:"radiogroup",onKeyDown:_,"aria-invalid":a.isInvalid||void 0,"aria-errormessage":e["aria-errormessage"],"aria-readonly":t||void 0,"aria-required":r||void 0,"aria-disabled":p||void 0,"aria-orientation":n,...y,...S}),labelProps:V,descriptionProps:L,errorMessageProps:k,isInvalid:u,validationErrors:f,validationDetails:g}}const ie=ce.createContext(null),Le=P.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ke=P(ue)`
  width: 160px;
  height: var(--radio-label-height);
  display: block;
`,q=P.span`
  ${F.Regular}
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
    ${F.Border("radio")}
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
`,N=P.div`
  ${F.ToggleInputLike(q)}

  &[data-selected] .aje-checkbox__label {
    &:before {
      border-color: var(--radio-checked);
    }
    &:after {
      display: block;
      background-color: var(--radio-checked);
    }
  }

  &[data-disabled] ${q}:after, &[data-disabled] ${q} {
    cursor: auto;
    opacity: 0.5;
  }
`,G=P.fieldset`
  padding: 0;
  border: none;

  &[data-disabled] {
    opacity: 0.5;
  }

  ${N} + ${N} {
    margin-top: 12px;
  }
`,Ie=3;function C(e){const{label:a,message:l,error:t}=e,r=Re(e),{radioGroupProps:p,labelProps:n,descriptionProps:o,errorMessageProps:c}=Ve(e,r),{isLoading:u,loadingLabel:f}=be(e),g=Y({componentClassName:"aje-radio-group",...e,values:{isDisabled:r.isDisabled,isInvalid:r.isInvalid,isReadOnly:r.isReadOnly,isRequired:r.isRequired},selectors:{"data-disabled":r.isDisabled,"data-invalid":r.isInvalid,"data-readonly":r.isReadOnly,"data-required":r.isRequired}});return u?i.jsxs(G,{...p,...g,name:e.name,children:[i.jsx(M,{as:"legend",...n,children:a}),i.jsx(Le,{children:Array.from({length:Ie}).map((V,y)=>i.jsx(ke,{title:y===0?f:void 0,children:i.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"4",ry:"4"})},y))})]}):i.jsxs(G,{...p,...g,name:e.name,children:[i.jsxs(M,{as:"legend",...n,children:[a,r.isRequired&&i.jsx(pe,{}),l&&i.jsx(Z,{...o,children:l}),t&&r.isInvalid&&i.jsx(ee,{...c,isInvalid:!0,children:t})]}),i.jsx(ie.Provider,{value:r,children:g.children})]})}try{C.displayName="RadioGroup",C.__docgenInfo={description:`
Radio groups should be used for a choice selection of 3-5 options. There may be a few cases where you can use
these for more than 5, but it isn't common.

- For 2 choices, use a [CheckBox](/docs/inputs-choose-state-checkbox--overview) or [ToggleSwitch](/docs/inputs-choose-state-toggleswitch--overview) instead.
- For more than 5 options, use a [select](/docs/dropdowns-customselect--overview).`,displayName:"RadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<FieldStatusProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<FieldStatusProps> | undefined"}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}function h(e){const{message:a,error:l}=e,t=O.useRef(null),r=O.useContext(ie);if(!r)throw new Error("Radio components must be rendered within a RadioGroup");const{inputProps:p,labelProps:n,...o}=Pe({...e,children:!0},r,t),{direction:c}=X(),u=Y({componentClassName:"aje-radio",...e,values:o,selectors:{"data-selected":o.isSelected,"data-disabled":o.isDisabled,"data-pressed":o.isPressed}});return i.jsxs(N,{$rtl:c==="rtl",...u,children:[i.jsx(ye,{...p}),i.jsxs(q,{...n,className:"aje-checkbox__label",$rtl:c==="rtl",children:[u.children,a&&i.jsx(Z,{children:a}),l&&i.jsx(ee,{children:l})]})]})}try{h.displayName="Radio",h.__docgenInfo={description:"Radio Elements, must be a descendant of a `<RadioGroup>`",displayName:"Radio",props:{message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<RadioRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<RadioRenderProps> | undefined"}}}}}catch{}const Ua={title:"Inputs/Choose State/RadioGroup",parameters:{layout:"centered",cssprops:te("Radio")},component:C,argTypes:{...oe,...re,label:{control:"text",table:{category:"Helper Text"}},error:{control:"text",table:{category:"Helper Text"}},message:{control:"text",table:{category:"Helper Text"}},children:{control:!1},isReadOnly:{table:{category:"Field State"}},value:{description:"The value of the selected radio in a controlled component",control:"select",options:["opt1","opt2","opt3"]},defaultValue:{description:"The value of the selected radio in an uncontrolled component",control:"select",options:["opt1","opt2","opt3"]}}},R={args:{label:"Radio Group Label",children:[i.jsx(h,{value:"opt1",children:"Option 1"},"1"),i.jsx(h,{value:"opt2",children:"Option 2"},"2"),i.jsx(h,{value:"opt3",children:"Option 3"},"3")]}},I={args:{label:"Radio Group Label",children:[i.jsx(h,{value:"opt1",children:"Option 1"},"1"),i.jsx(h,{value:"opt2",isDisabled:!0,children:"Option 2"},"2"),i.jsx(h,{value:"opt3",children:"Option 3"},"3")]}},w={args:{...R.args,isLoading:!0,loadingLabel:"Loading"}};var E,B,W;R.parameters={...R.parameters,docs:{...(E=R.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(B=R.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var A,z,H;I.parameters={...I.parameters,docs:{...(A=I.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(H=(z=I.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var U,K,J;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(J=(K=w.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};const Ka=["Primary","WithDisabledOptions","Loading"];export{w as Loading,R as Primary,I as WithDisabledOptions,Ka as __namedExportsOrder,Ua as default};
