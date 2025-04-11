import{g as X,h as Q,b as Y,a as ee}from"./createCalendar-DPWCFX_y.js";import{T as ae}from"./helpers-B5Ajgn2E.js";import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-BCtMShv3.js";import{c as ie,d as te,e as w,f as U,g as re,h as le,i as oe,D as ne}from"./DateInput.component-CK9KOw2X.js";import{c as de}from"./FocusScope-DX4qyq_T.js";import{$ as q,b as se}from"./useObjectRef-D2RG7rRi.js";import{$ as H}from"./filterDOMProps-CeZl_uWj.js";import{$ as ue}from"./useDescription-CqPnuqnT.js";import{$ as me}from"./useFocusWithin-BshFo8_g.js";import{$ as ce,a as fe}from"./useFormValidationState-CONlS5Wo.js";import{$ as be}from"./useField-BY78xfaL.js";import{$ as pe}from"./context-z6pb9OkM.js";import{$ as he}from"./useLocalizedStringFormatter-BmC8c4z2.js";import{d as J}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as N}from"./mixins-XviowZ_6.js";import{S as $e}from"./ComboInput.styles-GNwh4bFc.js";import{C as ye}from"./ComboInput.component-C6gl0cY0.js";import{I as M}from"./index-D3soG6-v.js";import{P as ve}from"./index-DtFyGqjN.js";import{O as ge}from"./context-CHG5exGL.js";import{u as xe,f as Ve}from"./useRenderProps-CP918x9p.js";import{a as L}from"./useDateFormatter-CD4PzWIn.js";import{$ as De}from"./useOverlayTriggerState-P0osIcob.js";import{$ as Pe}from"./useControlledState-vzCMHZvt.js";import{L as Ie}from"./Label.component-DfcWPA-J.js";import{M as Te}from"./Message.component-FuO2yEmk.js";import{E as Se}from"./ErrorMessage.component-ukBp7bMH.js";import{C as R}from"./Calendar.component-CskbELMw.js";import{F as Ce}from"./Flex.component-rrKmR1Yr.js";import"./usePress-B9aiz4Kw.js";import"./useFocusable-DacP9xvE.js";import"./SSRProvider-DyiXDq2k.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-EJ0-2BeM.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidation-BfT1egZx.js";import"./useLabels-B8dXFA8d.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./useSpinButton-LE97PPA9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-Coud15oo.js";import"./useCollator-CKtzjMN3.js";import"./useLabel-DDcndmXW.js";import"./index-CsiUWFDz.js";import"./ComboInput.context-BgrINUmq.js";import"./Button.component-CR9mri1v.js";import"./useFocusRing-CLjBjOxD.js";import"./useButton-nVeIkIqk.js";import"./useLink-FIfyncSu.js";import"./SpinnerLoader.component-D-tKw9E3.js";import"./Loader.component-D7Erho5g.js";import"./Checkmark.component-9SUCBX5x.js";import"./Spinner.component-Bslo7_jG.js";import"./ProgressCircle.component-OpnlU6y-.js";import"./useNumberFormatter-BHOsbS6G.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-Ca-Jxrbg.js";import"./Icons.styles-D-JqKhr6.js";import"./VisuallyHidden-XQ8XJ7MR.js";import"./useOverlayPosition-BbsEgUQ6.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useForwardedRef-Tweo1nQG.js";import"./Popover.context-C-WvC77F.js";import"./PressResponder-DMBUHunT.js";import"./Label.context-BbpE5KUK.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./useUpdateEffect-B888oq-t.js";import"./Provider-op_UCnZE.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";function Oe(e){let i=De(e),[t,s]=Pe(e.value,e.defaultValue||null,e.onChange),u=t||e.placeholderValue||null,[n,d]=ie(u,e.granularity),y=t!=null?t.toDate(d??"UTC"):null,b=n==="hour"||n==="minute"||n==="second";var v;let p=(v=e.shouldCloseOnSelect)!==null&&v!==void 0?v:!0,[l,D]=V.useState(null),[m,g]=V.useState(null);if(t&&(l=t,"hour"in t&&(m=t)),u&&!(n in u))throw new Error("Invalid granularity "+n+" for value "+u.toString());let c=(t==null?void 0:t.calendar.identifier)==="gregory"&&t.era==="BC",h=V.useMemo(()=>({granularity:n,timeZone:d,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,showEra:c}),[n,e.hourCycle,e.shouldForceLeadingZeros,d,e.hideTimeZone,c]),{minValue:x,maxValue:P,isDateUnavailable:I}=e,S=V.useMemo(()=>te(t,x,P,I,h),[t,x,P,I,h]),T=ce({...e,value:t,builtinValidation:S}),F=T.displayValidation.isInvalid,C=e.validationState||(F?"invalid":null),O=(a,o)=>{s("timeZone"in o?o.set(Q(a)):X(a,o)),D(null),g(null),T.commitValidation()};return{...T,value:t,setValue:s,dateValue:l,timeValue:m,setDateValue:a=>{let o=typeof p=="function"?p():p;b?m||o?O(a,m||U(e.defaultValue||e.placeholderValue)):D(a):(s(a),T.commitValidation()),o&&i.setOpen(!1)},setTimeValue:a=>{l&&a?O(l,a):g(a)},granularity:n,hasTime:b,...i,setOpen(a){!a&&!t&&l&&b&&O(l,m||U(e.defaultValue||e.placeholderValue)),i.setOpen(a)},validationState:C,isInvalid:F,formatValue(a,o){if(!y)return"";let k=w(o,h);return new L(a,k).format(y)},getDateFormatter(a,o){let k={...h,...o},E=w({},k);return new L(a,E)}}}function je(e){return e&&e.__esModule?e.default:e}function Fe(e,i,t){let s=q(),u=q(),n=q(),d=he(je(oe),"@react-aria/datepicker"),{isInvalid:y,validationErrors:b,validationDetails:v}=i.displayValidation,{labelProps:p,fieldProps:l,descriptionProps:D,errorMessageProps:m}=be({...e,labelElementType:"span",isInvalid:y,errorMessage:e.errorMessage||b}),g=re(i,t),c=l["aria-labelledby"]||l.id,{locale:h}=pe(),x=i.formatValue(h,{month:"long"}),P=x?d.format("selectedDateDescription",{date:x}):"",I=ue(P),S=[I["aria-describedby"],l["aria-describedby"]].filter(Boolean).join(" ")||void 0,T=H(e),F=V.useMemo(()=>de(t),[t]),C=V.useRef(!1),{focusWithinProps:O}=me({...e,isDisabled:i.isOpen,onBlurWithin:f=>{let $=document.getElementById(u);if(!($!=null&&$.contains(f.relatedTarget))){var a,o;C.current=!1,(a=e.onBlur)===null||a===void 0||a.call(e,f),(o=e.onFocusChange)===null||o===void 0||o.call(e,!1)}},onFocusWithin:f=>{if(!C.current){var $,a;C.current=!0,($=e.onFocus)===null||$===void 0||$.call(e,f),(a=e.onFocusChange)===null||a===void 0||a.call(e,!0)}}});return{groupProps:se(T,g,l,I,O,{role:"group","aria-disabled":e.isDisabled||null,"aria-labelledby":c,"aria-describedby":S,onKeyDown(f){i.isOpen||e.onKeyDown&&e.onKeyDown(f)},onKeyUp(f){i.isOpen||e.onKeyUp&&e.onKeyUp(f)}}),labelProps:{...p,onClick:()=>{F.focusFirst()}},fieldProps:{...l,id:n,[le]:"presentation","aria-describedby":S,value:i.value,onChange:i.setValue,placeholderValue:e.placeholderValue,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,granularity:e.granularity,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isRequired:e.isRequired,validationBehavior:e.validationBehavior,[fe]:i,autoFocus:e.autoFocus,name:e.name},descriptionProps:D,errorMessageProps:m,buttonProps:{...I,id:s,"aria-haspopup":"dialog","aria-label":d.format("calendar"),"aria-labelledby":`${s} ${c}`,"aria-describedby":S,"aria-expanded":i.isOpen,isDisabled:e.isDisabled||e.isReadOnly,onPress:()=>i.setOpen(!0)},dialogProps:{id:u,"aria-labelledby":`${s} ${c}`},calendarProps:{autoFocus:!0,value:i.dateValue,onChange:i.setDateValue,minValue:e.minValue,maxValue:e.maxValue,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isDateUnavailable:e.isDateUnavailable,defaultFocusedValue:i.dateValue?void 0:e.placeholderValue,isInvalid:i.isInvalid,errorMessage:typeof e.errorMessage=="function"?e.errorMessage(i.displayValidation):e.errorMessage||i.displayValidation.validationErrors.join(" ")},isInvalid:y,validationErrors:b,validationDetails:v}}const Re=J.div`
  ${N.FieldStatus}
  ${N.SizingX}

  --size-sm-x: 265px;
  --size-md-x: 265px;
  --size-lg-x: 400px;
`,ze=J(ye)`
  ${$e} {
    border: none;
    padding: 0px;

    &:focus-within {
      outline: none;
    }
  }
`;function Z(e){const i=Oe(e),t=V.useRef(null),{groupProps:s,labelProps:u,fieldProps:n,buttonProps:d,calendarProps:y,errorMessageProps:b,descriptionProps:v}=Fe(e,i,t),{size:p="medium",error:l,isRequired:D,isInvalid:m,label:g,message:c}=e,h=["auto","full"].includes(p)?"medium":p,x=xe({componentClassName:"aje-date-picker",...e,selectors:Ve(e)});return r.jsxs(Re,{...H(e),...x,children:[g&&r.jsx(Ie,{...u,children:g}),c&&r.jsx(Te,{...v,children:c}),r.jsxs(ze,{...s,ref:t,className:"aje-input__date-segments",padding:"both",children:[r.jsx(ne,{...n,size:"full",isRequired:D}),r.jsx(M,{icon:"today",variant:"content",...d})]}),r.jsx(Se,{...b,isInvalid:m,children:l}),r.jsx(ge.Provider,{value:i,children:r.jsx(ve,{triggerRef:t,placement:"bottom start",variant:"datepicker",children:r.jsxs(R,{...y,size:h,children:[r.jsxs(Ce,{$justify:"space-between",$align:"center",children:[r.jsx(M,{icon:"chevron_left",variant:"ghost",slot:"previous-month"}),r.jsx(R.Title,{}),r.jsx(M,{icon:"chevron_right",variant:"ghost",slot:"next-month"})]}),r.jsx(R.Grid,{children:P=>r.jsx(R.Cell,{date:P})})]})})})]})}try{Z.displayName="DatePicker",Z.__docgenInfo={description:"DatePicker is a combination of a `<DateInput/>` component and a dropdown `<Calendar />` component.",displayName:"DatePicker",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"auto"'},{value:'"medium"'},{value:'"large"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}const di={title:"Inputs/Date & Time/DatePicker",component:Z,argTypes:{...ae,value:{control:!1,description:"The value of the date input. Accepts a value from `@internationalized/date` library"},granularity:{control:"select",options:["day","hour","minute","second"],description:"The granularity of the date input"},hideTimeZone:{description:"Hides the timezone"},shouldForceLeadingZeros:{control:"boolean",description:"Forces leading zeros on the date input. If this is not set it is determined by the user's locale"},maxValue:{control:!1,description:"The maximum value of the date input. Accepts a value from `@internationalized/date` library"},minValue:{control:!1,description:"The minmum value of the date input. Accepts a value from `@internationalized/date` library"},hourCycle:{control:"select",options:[12,24],defaultValue:"12",description:"Use a 12 or 24 hour cycle"},isDateUnavailable:{control:!1,description:"A function that is called for every date on the calendar. If it returns true, the date is disabled"}}},ke=Y(ee()),j={args:{defaultValue:ke,label:"Date Picker",size:"medium",hideTimeZone:!0}},z={args:{...j.args,granularity:"day"}};var A,B,K;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultValue: date,
    label: "Date Picker",
    size: "medium",
    hideTimeZone: true
  }
}`,...(K=(B=j.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var W,G,_;z.parameters={...z.parameters,docs:{...(W=z.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    granularity: "day"
  }
}`,...(_=(G=z.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};const si=["Primary","DayGranularity"];export{z as DayGranularity,j as Primary,si as __namedExportsOrder,di as default};
