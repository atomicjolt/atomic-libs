import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as C,R as P}from"./index-BCtMShv3.js";import{b as I}from"./useObjectRef-D2RG7rRi.js";import{$ as S,a as V}from"./useFormValidationState-CONlS5Wo.js";import{$ as B}from"./useFormValidation-BfT1egZx.js";import{$ as D}from"./usePress-CqXh5MnK.js";import{$ as j,a as w}from"./useToggle-iesXfB0X.js";import{$ as E}from"./context-z6pb9OkM.js";import{H as z}from"./Inputs.styles-DMr63soV.js";import{g as y}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as k}from"./mixins-CcgEHb9c.js";import{d as x}from"./utils-DqmNl-Il.js";import{c as N,u as _}from"./index-CsiUWFDz.js";import{u as O}from"./useRenderProps-CP918x9p.js";import{R as F}from"./RequiredMarker-CwAzCIB3.js";import{M}from"./Message.component-A6ZF7Bcz.js";import{E as H}from"./ErrorMessage.component-Dahdvhcn.js";function L(e,r,i){let t=S({...e,value:r.isSelected}),{isInvalid:o,validationErrors:s,validationDetails:l}=t.displayValidation,{labelProps:p,inputProps:m,isSelected:b,isPressed:n,isDisabled:c,isReadOnly:u}=j({...e,isInvalid:o},r,i);B(e,t,i);let{isIndeterminate:$,isRequired:f,validationBehavior:h="aria"}=e;C.useEffect(()=>{i.current&&(i.current.indeterminate=!!$)});let{pressProps:R}=D({isDisabled:c||u,onPress(){let{[V]:v}=e,{commitValidation:q}=v||t;q()}});return{labelProps:I(p,R),inputProps:{...m,checked:b,"aria-required":f&&h==="aria"||void 0,required:f&&h==="native"},isSelected:b,isPressed:n,isDisabled:c,isReadOnly:u,isInvalid:o,validationErrors:s,validationDetails:l}}const a=y.span`
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
`,A=N(),g=P.forwardRef((e,r)=>{[e,r]=_(A,e,r);const{error:i="error",message:t,isRequired:o=!1,isInvalid:s=!1,isIndeterminate:l=!1,isReadOnly:p=!1,isDisabled:m=!1,name:b}=e,n=w(e),{direction:c}=E(),{inputProps:u,labelProps:$}=L({...e,children:!0},n,r),f=O({componentClassName:"aje-checkbox",values:{isSelected:n.isSelected,isIndeterminate:l,isInvalid:s,isDisabled:m,isReadOnly:p,isRequired:o},selectors:{"data-selected":n.isSelected,"data-indeterminate":l,"data-invalid":s,"data-disabled":m,"data-readonly":p,"data-required":o},...e}),h=l?"mixed":void 0;return d.jsxs(U,{$rtl:c==="rtl",...f,children:[d.jsx(z,{...u,ref:r,"aria-checked":h,name:b}),d.jsxs(a,{...$,$rtl:c==="rtl",children:[f.children,o&&d.jsx(F,{}),t&&d.jsx(M,{children:t}),s&&d.jsx(H,{isInvalid:!0,children:i})]})]})});try{g.displayName="CheckBox",g.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps> | undefined"}}}}}catch{}export{g as C,A as a};
