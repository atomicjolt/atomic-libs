import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as g,R}from"./index-DJO9vBfz.js";import{$ as q}from"./useFormValidation-D05SS9o7.js";import{$ as C}from"./useFormValidationState-DFldk10H.js";import{$ as I,a as P}from"./useToggle-DGjsrD1W.js";import{$ as S}from"./context-BQ3_Es2z.js";import{H as B}from"./Inputs.styles-DfujkgJy.js";import{d as y}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as v}from"./mixins-B7X2BZyR.js";import{d as u}from"./utils-2VFVy79V.js";import{c as V,u as j}from"./index-De95zDiF.js";import{u as w}from"./useRenderProps-Bk8BH60l.js";import{R as D}from"./RequiredMarker-DVRabd4Z.js";import{M as E}from"./Message.component-nkasZM07.js";import{E as z}from"./ErrorMessage.component-CfKzjo8L.js";function N(e,r,i){let d=C({...e,value:r.isSelected}),{isInvalid:t,validationErrors:l,validationDetails:s}=d.displayValidation,{labelProps:p,inputProps:m,isSelected:f,isPressed:n,isDisabled:b,isReadOnly:x}=I({...e,isInvalid:t},r,i);q(e,d,i);let{isIndeterminate:k,isRequired:c,validationBehavior:h="aria"}=e;return g.useEffect(()=>{i.current&&(i.current.indeterminate=!!k)}),{labelProps:p,inputProps:{...m,checked:f,"aria-required":c&&h==="aria"||void 0,required:c&&h==="native"},isSelected:f,isPressed:n,isDisabled:b,isReadOnly:x,isInvalid:t,validationErrors:l,validationDetails:s}}const a=y.span`
  ${v.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  line-height: 1.5;

  font-size: var(--checkbox-label-font-size);
  color: var(--checkbox-text-clr);
  min-height: var(--checkbox-label-height);

  ${u({ltr:"padding-left: calc(var(--checkbox-size) + var(--checkbox-label-spacing));",rtl:"padding-right: calc(var(--checkbox-size) + var(--checkbox-label-spacing));"})}

  /* :before contains the box in the "checkbox" */
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    box-sizing: border-box;
    background-color: var(--checkbox-bg-clr);
    ${v.Border("checkbox")}
    ${u({ltr:"left: 2px",rtl:"right: 2px"})}
  }

  /* :after contains the checkmark in the "checkbox" */
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`,_=y.div`
  ${v.ToggleInputLike(a)}

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
      ${u({ltr:"left: 9px;",rtl:"right: 9px;"})}
    }
  }

  &[data-indeterminate] ${a} {
    &:after {
      top: 3px;
      width: 12px;
      height: 8px;
      border-width: 0 0px 2px 0;
      transform: none;
      ${u({ltr:"left: 6px;",rtl:"right: 6px;"})}
    }
  }

  &[data-disabled] ${a}, &[data-disabled] ${a}:before {
    cursor: auto;
    opacity: 0.5;
  }
`,O=V(),$=R.forwardRef((e,r)=>{[e,r]=j(O,e,r);const{error:i="error",message:d,isRequired:t=!1,isInvalid:l=!1,isIndeterminate:s=!1,isReadOnly:p=!1,isDisabled:m=!1,name:f}=e,n=P(e),{direction:b}=S(),{inputProps:x,labelProps:k}=N({...e,children:!0},n,r),c=w({componentClassName:"aje-checkbox",values:{isSelected:n.isSelected,isIndeterminate:s,isInvalid:l,isDisabled:m,isReadOnly:p,isRequired:t},selectors:{"data-selected":n.isSelected,"data-indeterminate":s,"data-invalid":l,"data-disabled":m,"data-readonly":p,"data-required":t},...e}),h=s?"mixed":void 0;return o.jsxs(_,{$rtl:b==="rtl",...c,children:[o.jsx(B,{...x,ref:r,"aria-checked":h,name:f}),o.jsxs(a,{...k,$rtl:b==="rtl",children:[c.children,t&&o.jsx(D,{}),d&&o.jsx(E,{children:d}),l&&o.jsx(z,{isInvalid:!0,children:i})]})]})});try{$.displayName="CheckBox",$.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps>"}}}}}catch{}export{$ as C,O as a};
