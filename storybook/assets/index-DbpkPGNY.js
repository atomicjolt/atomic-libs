import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as C,R as V}from"./index-DmM0KDA7.js";import{b as I}from"./useObjectRef-BO7mrmvR.js";import{$ as P,a as S}from"./useFormValidationState-CKAS44yz.js";import{$ as B}from"./useFormValidation-CsrNRCZi.js";import{$ as _}from"./usePress-Cxy0og0d.js";import{$ as N,a as w}from"./useToggle-m3163Lci.js";import{$ as D}from"./context-BF7eBGFA.js";import{H as E}from"./Inputs.styles-D8qW3yD8.js";import{d as g}from"./styled-components.browser.esm-B0S50oBn.js";import{m as y}from"./mixins-CgZ-Dp8B.js";import{d as x}from"./utils-DqmNl-Il.js";import{c as F,u as j}from"./index-CqJC2f1M.js";import{u as z}from"./useRenderProps-BzxgHqRb.js";import{R as O}from"./RequiredMarker-CwAzCIB3.js";import{M}from"./Message.component-CVXqUIYh.js";import{E as U}from"./ErrorMessage.component-VwqqJyxZ.js";function A(e,r,i){let t=P({...e,value:r.isSelected}),{isInvalid:o,validationErrors:l,validationDetails:s}=t.displayValidation,{labelProps:p,inputProps:u,isSelected:f,isPressed:n,isDisabled:c,isReadOnly:b}=N({...e,isInvalid:o},r,i);B(e,t,i);let{isIndeterminate:k,isRequired:m,validationBehavior:h="aria"}=e;C.useEffect(()=>{i.current&&(i.current.indeterminate=!!k)});let{pressProps:R}=_({isDisabled:c||b,onPress(){let{[S]:$}=e,{commitValidation:q}=$||t;q()}});return{labelProps:I(p,R),inputProps:{...u,checked:f,"aria-required":m&&h==="aria"||void 0,required:m&&h==="native"},isSelected:f,isPressed:n,isDisabled:c,isReadOnly:b,isInvalid:o,validationErrors:l,validationDetails:s}}const a=g.span`
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
`,L=F(),v=V.forwardRef((e,r)=>{[e,r]=j(L,e,r);const{error:i="error",message:t,isRequired:o=!1,isInvalid:l=!1,isIndeterminate:s=!1,isReadOnly:p=!1,isDisabled:u=!1,name:f}=e,n=w(e),{direction:c}=D(),{inputProps:b,labelProps:k}=A({...e,children:!0},n,r),m=z({componentClassName:"aje-checkbox",values:{isSelected:n.isSelected,isIndeterminate:s,isInvalid:l,isDisabled:u,isReadOnly:p,isRequired:o},selectors:{"data-selected":n.isSelected,"data-indeterminate":s,"data-invalid":l,"data-disabled":u,"data-readonly":p,"data-required":o},...e}),h=s?"mixed":void 0;return d.jsxs(H,{$rtl:c==="rtl",...m,children:[d.jsx(E,{...b,ref:r,"aria-checked":h,name:f}),d.jsxs(a,{...k,$rtl:c==="rtl",children:[m.children,o&&d.jsx(O,{}),t&&d.jsx(M,{children:t}),l&&d.jsx(U,{isInvalid:!0,children:i})]})]})});try{v.displayName="CheckBox",v.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps>"}}}}}catch{}try{CheckBox.displayName="CheckBox",CheckBox.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps>"}}}}}catch{}export{v as C,L as a};
