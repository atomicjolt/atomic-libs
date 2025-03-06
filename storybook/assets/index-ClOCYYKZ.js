import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{r as g,R}from"./index-DJO9vBfz.js";import{$ as q}from"./useFormValidation-CdG9-Yzp.js";import{$ as C}from"./useFormValidationState-DFldk10H.js";import{$ as I,a as V}from"./useToggle-C8QZ9710.js";import{$ as P}from"./context-BQ3_Es2z.js";import{H as B}from"./Inputs.styles-X1GDHMEw.js";import{d as $}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as y}from"./mixins-B7X2BZyR.js";import{d as b}from"./utils-2VFVy79V.js";import{c as S,u as _}from"./index-CHPAqjqs.js";import{u as N}from"./useRenderProps-Bk8BH60l.js";import{R as w}from"./RequiredMarker-DVRabd4Z.js";import{M as D}from"./Message.component-DuLpH4ma.js";import{E}from"./ErrorMessage.component-NUTqPfNd.js";function F(e,r,i){let o=C({...e,value:r.isSelected}),{isInvalid:t,validationErrors:d,validationDetails:n}=o.displayValidation,{labelProps:m,inputProps:u,isSelected:p,isPressed:s,isDisabled:f,isReadOnly:x}=I({...e,isInvalid:t},r,i);q(e,o,i);let{isIndeterminate:k,isRequired:c,validationBehavior:h="aria"}=e;return g.useEffect(()=>{i.current&&(i.current.indeterminate=!!k)}),{labelProps:m,inputProps:{...u,checked:p,"aria-required":c&&h==="aria"||void 0,required:c&&h==="native"},isSelected:p,isPressed:s,isDisabled:f,isReadOnly:x,isInvalid:t,validationErrors:d,validationDetails:n}}const a=$.span`
  ${y.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  line-height: 1.5;

  font-size: var(--checkbox-label-font-size);
  color: var(--checkbox-text-clr);
  min-height: var(--checkbox-label-height);

  ${b({ltr:"padding-left: calc(var(--checkbox-size) + var(--checkbox-label-spacing));",rtl:"padding-right: calc(var(--checkbox-size) + var(--checkbox-label-spacing));"})}

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
    ${b({ltr:"left: 2px",rtl:"right: 2px"})}
  }

  /* :after contains the checkmark in the "checkbox" */
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`,j=$.div`
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
      ${b({ltr:"left: 9px;",rtl:"right: 9px;"})}
    }
  }

  &[data-indeterminate] ${a} {
    &:after {
      top: 3px;
      width: 12px;
      height: 8px;
      border-width: 0 0px 2px 0;
      transform: none;
      ${b({ltr:"left: 6px;",rtl:"right: 6px;"})}
    }
  }

  &[data-disabled] ${a}, &[data-disabled] ${a}:before {
    cursor: auto;
    opacity: 0.5;
  }
`,z=S(),v=R.forwardRef((e,r)=>{[e,r]=_(z,e,r);const{error:i="error",message:o,isRequired:t=!1,isInvalid:d=!1,isIndeterminate:n=!1,isReadOnly:m=!1,isDisabled:u=!1,name:p}=e,s=V(e),{direction:f}=P(),{inputProps:x,labelProps:k}=F({...e,children:!0},s,r),c=N({componentClassName:"aje-checkbox",values:{isSelected:s.isSelected,isIndeterminate:n,isInvalid:d,isDisabled:u,isReadOnly:m,isRequired:t},selectors:{"data-selected":s.isSelected,"data-indeterminate":n,"data-invalid":d,"data-disabled":u,"data-readonly":m,"data-required":t},...e}),h=n?"mixed":void 0;return l.jsxs(j,{$rtl:f==="rtl",...c,children:[l.jsx(B,{...x,ref:r,"aria-checked":h,name:p}),l.jsxs(a,{...k,$rtl:f==="rtl",children:[c.children,t&&l.jsx(w,{}),o&&l.jsx(D,{children:o}),d&&l.jsx(E,{isInvalid:!0,children:i})]})]})});try{v.displayName="CheckBox",v.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps>"}}}}}catch{}try{CheckBox.displayName="CheckBox",CheckBox.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps>"}}}}}catch{}export{v as C,z as a};
