import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as C,R as V}from"./index-BCtMShv3.js";import{a as I}from"./useObjectRef-B4hnndUj.js";import{$ as P,a as S}from"./useFormValidationState-CONlS5Wo.js";import{$ as B}from"./useFormValidation-CnIG3AAh.js";import{$ as _}from"./usePress-BJ4Xpz5E.js";import{$ as N,a as w}from"./useToggle-CZMQfoUA.js";import{$ as D}from"./context-z6pb9OkM.js";import{H as E}from"./Inputs.styles-Bns-pyQJ.js";import{g}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as y}from"./mixins-CcgEHb9c.js";import{d as x}from"./utils-DqmNl-Il.js";import{c as F,u as j}from"./index-C_lK3xe_.js";import{u as z}from"./useRenderProps-CP918x9p.js";import{R as O}from"./RequiredMarker-CwAzCIB3.js";import{M}from"./Message.component-BkeRZygz.js";import{E as U}from"./ErrorMessage.component-B_60Itgy.js";function A(e,i,r){let t=P({...e,value:i.isSelected}),{isInvalid:d,validationErrors:l,validationDetails:n}=t.displayValidation,{labelProps:f,inputProps:m,isSelected:p,isPressed:s,isDisabled:c,isReadOnly:b}=N({...e,isInvalid:d},i,r);B(e,t,r);let{isIndeterminate:k,isRequired:u,validationBehavior:h="aria"}=e;C.useEffect(()=>{r.current&&(r.current.indeterminate=!!k)});let{pressProps:R}=_({isDisabled:c||b,onPress(){let{[S]:$}=e,{commitValidation:q}=$||t;q()}});return{labelProps:I(f,R),inputProps:{...m,checked:p,"aria-required":u&&h==="aria"||void 0,required:u&&h==="native"},isSelected:p,isPressed:s,isDisabled:c,isReadOnly:b,isInvalid:d,validationErrors:l,validationDetails:n}}const a=g.span`
  ${y.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  line-height: 1.5;

  font-size: var(--checkbox-label-font-size);
  color: var(--checkbox-text-clr);
  min-height: var(--checkbox-label-height);

  ${x({ltr:"padding-left: calc(var(--checkbox-size) + var(--checkbox-label-spacing));",rtl:"padding-right: calc(var(--checkbox-size) + var(--checkbox-label-spacing));"})}

  /* :before contains the box in the "checkbox" */
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    box-sizing: border-box;
    background-color: var(--checkbox-bg-clr);
    ${y.Border("checkbox")}
    ${x({ltr:"left: 2px",rtl:"right: 2px"})}
  }

  /* :after contains the checkmark in the "checkbox" */
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`,H=g.div`
  ${y.ToggleInputLike(a)}

  &[data-selected] ${a}, &[data-indeterminate] ${a} {
    &:before {
      --checkbox-bg-clr: var(--checkbox-checked);
      --checkbox-border-clr: var(--checkbox-checked);
    }

    &:after {
      display: block;
      border: solid var(--checkbox-icon-clr);
    }
  }

  &[data-selected] ${a} {
    &:after {
      top: 5px;
      width: 4px;
      height: 9px;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      ${x({ltr:"left: 9px;",rtl:"right: 9px;"})}
    }
  }

  &[data-indeterminate] ${a} {
    &:after {
      top: 3px;
      width: 12px;
      height: 8px;
      border-width: 0 0px 2px 0;
      transform: none;
      ${x({ltr:"left: 6px;",rtl:"right: 6px;"})}
    }
  }

  &[data-disabled] ${a}, &[data-disabled] ${a}:before {
    cursor: auto;
    opacity: 0.5;
  }
`,L=F(),v=V.forwardRef((e,i)=>{[e,i]=j(L,e,i);const{error:r="error",message:t,isRequired:d=!1,isInvalid:l=!1,isIndeterminate:n=!1,isReadOnly:f=!1,isDisabled:m=!1,name:p}=e,s=w(e),{direction:c}=D(),{inputProps:b,labelProps:k}=A({...e,children:!0},s,i),u=z({componentClassName:"aje-checkbox",values:{isSelected:s.isSelected,isIndeterminate:n,isInvalid:l,isDisabled:m,isReadOnly:f,isRequired:d},selectors:{"data-selected":s.isSelected,"data-indeterminate":n,"data-invalid":l,"data-disabled":m,"data-readonly":f,"data-required":d},...e}),h=n?"mixed":void 0;return o.jsxs(H,{$rtl:c==="rtl",...u,children:[o.jsx(E,{...b,ref:i,"aria-checked":h,name:p}),o.jsxs(a,{...k,$rtl:c==="rtl",children:[u.children,d&&o.jsx(O,{}),t&&o.jsx(M,{children:t}),l&&o.jsx(U,{isInvalid:!0,children:r})]})]})});try{v.displayName="CheckBox",v.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps> | undefined"}}}}}catch{}try{CheckBox.displayName="CheckBox",CheckBox.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps> | undefined"}}}}}catch{}export{v as C,L as a};
