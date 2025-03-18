import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as C,R as P}from"./index-DmM0KDA7.js";import{b as I}from"./useObjectRef-BO7mrmvR.js";import{$ as S,a as V}from"./useFormValidationState-CKAS44yz.js";import{$ as B}from"./useFormValidation-CsrNRCZi.js";import{$ as D}from"./usePress-Cng8MYxN.js";import{$ as j,a as w}from"./useToggle-nYxxvtGk.js";import{$ as E}from"./context-BF7eBGFA.js";import{H as z}from"./Inputs.styles-Cdp01wCc.js";import{d as y}from"./styled-components.browser.esm-S-CusIP4.js";import{m as k}from"./mixins-BOHXBJW9.js";import{d as x}from"./utils-DqmNl-Il.js";import{c as N,u as _}from"./index-CqJC2f1M.js";import{u as O}from"./useRenderProps-BzxgHqRb.js";import{R as F}from"./RequiredMarker-CwAzCIB3.js";import{M}from"./Message.component-D8ICG7W9.js";import{E as H}from"./ErrorMessage.component-BVX2wl3L.js";function L(e,r,t){let i=S({...e,value:r.isSelected}),{isInvalid:o,validationErrors:s,validationDetails:l}=i.displayValidation,{labelProps:m,inputProps:f,isSelected:b,isPressed:n,isDisabled:c,isReadOnly:h}=j({...e,isInvalid:o},r,t);B(e,i,t);let{isIndeterminate:$,isRequired:p,validationBehavior:u="aria"}=e;C.useEffect(()=>{t.current&&(t.current.indeterminate=!!$)});let{pressProps:R}=D({isDisabled:c||h,onPress(){let{[V]:v}=e,{commitValidation:q}=v||i;q()}});return{labelProps:I(m,R),inputProps:{...f,checked:b,"aria-required":p&&u==="aria"||void 0,required:p&&u==="native"},isSelected:b,isPressed:n,isDisabled:c,isReadOnly:h,isInvalid:o,validationErrors:s,validationDetails:l}}const a=y.span`
  ${k.Regular}
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
    ${k.Border("checkbox")}
    ${x({ltr:"left: 2px",rtl:"right: 2px"})}
  }

  /* :after contains the checkmark in the "checkbox" */
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`,U=y.div`
  ${k.ToggleInputLike(a)}

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
`,A=N(),g=P.forwardRef((e,r)=>{[e,r]=_(A,e,r);const{error:t="error",message:i,isRequired:o=!1,isInvalid:s=!1,isIndeterminate:l=!1,isReadOnly:m=!1,isDisabled:f=!1,name:b}=e,n=w(e),{direction:c}=E(),{inputProps:h,labelProps:$}=L({...e,children:!0},n,r),p=O({componentClassName:"aje-checkbox",values:{isSelected:n.isSelected,isIndeterminate:l,isInvalid:s,isDisabled:f,isReadOnly:m,isRequired:o},selectors:{"data-selected":n.isSelected,"data-indeterminate":l,"data-invalid":s,"data-disabled":f,"data-readonly":m,"data-required":o},...e}),u=l?"mixed":void 0;return d.jsxs(U,{$rtl:c==="rtl",...p,children:[d.jsx(z,{...h,ref:r,"aria-checked":u,name:b}),d.jsxs(a,{...$,$rtl:c==="rtl",children:[p.children,o&&d.jsx(F,{}),i&&d.jsx(M,{children:i}),s&&d.jsx(H,{isInvalid:!0,children:t})]})]})});try{g.displayName="CheckBox",g.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps>"}}}}}catch{}export{g as C,A as a};
