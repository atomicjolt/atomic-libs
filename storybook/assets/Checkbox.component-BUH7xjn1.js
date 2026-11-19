import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as C,R as P}from"./index-BCtMShv3.js";import{b as I}from"./useObjectRef-D2RG7rRi.js";import{$ as S,a as w}from"./useFormValidationState-CONlS5Wo.js";import{$ as V}from"./useFormValidation-BfT1egZx.js";import{$ as j}from"./usePress-CqXh5MnK.js";import{$ as L,a as z}from"./useToggle-iesXfB0X.js";import{$ as B}from"./context-z6pb9OkM.js";import{H as D}from"./Inputs.styles-CZHJatOH.js";import{g as y}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as v}from"./mixins-CcgEHb9c.js";import{d as p}from"./utils-DqmNl-Il.js";import{S as E}from"./SkeletonLoader.component-q75MwwfP.js";import{c as N,u as _}from"./index-CKqsTkFX.js";import{u as O}from"./useRenderProps-CP918x9p.js";import{R as F}from"./RequiredMarker-CwAzCIB3.js";import{u as M}from"./Loading.context-C7II2W1n.js";import{M as W}from"./Message.component-CZ4-z7fs.js";import{E as H}from"./ErrorMessage.component-DBytMZ-8.js";function U(e,r,t){let o=S({...e,value:r.isSelected}),{isInvalid:d,validationErrors:s,validationDetails:c}=o.displayValidation,{labelProps:m,inputProps:h,isSelected:u,isPressed:f,isDisabled:l,isReadOnly:b}=L({...e,isInvalid:d},r,t);V(e,o,t);let{isIndeterminate:$,isRequired:n,validationBehavior:x="aria"}=e;C.useEffect(()=>{t.current&&(t.current.indeterminate=!!$)});let{pressProps:g}=j({isDisabled:l||b,onPress(){let{[w]:k}=e,{commitValidation:q}=k||o;q()}});return{labelProps:I(m,g),inputProps:{...h,checked:u,"aria-required":n&&x==="aria"||void 0,required:n&&x==="native"},isSelected:u,isPressed:f,isDisabled:l,isReadOnly:b,isInvalid:d,validationErrors:s,validationDetails:c}}const A=y(E)`
  position: absolute;
  top: 2px;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  ${p({ltr:"left: 2px;",rtl:"right: 2px;"})}
`,a=y.span`
  ${v.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  line-height: 1.5;

  font-size: var(--checkbox-label-font-size);
  color: var(--checkbox-text-clr);
  min-height: var(--checkbox-label-height);

  ${p({ltr:"padding-left: calc(var(--checkbox-size) + var(--checkbox-label-spacing));",rtl:"padding-right: calc(var(--checkbox-size) + var(--checkbox-label-spacing));"})}

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
    ${p({ltr:"left: 2px",rtl:"right: 2px"})}
  }

  /* :after contains the checkmark in the "checkbox" */
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`,T=y.div`
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
      ${p({ltr:"left: 9px;",rtl:"right: 9px;"})}
    }
  }

  &[data-indeterminate] ${a} {
    &:after {
      top: 3px;
      width: 12px;
      height: 8px;
      border-width: 0 0px 2px 0;
      transform: none;
      ${p({ltr:"left: 6px;",rtl:"right: 6px;"})}
    }
  }

  &[data-disabled] ${a}, &[data-disabled] ${a}:before {
    cursor: auto;
    opacity: 0.5;
  }

  &[data-loading] ${a} {
    cursor: auto;

    &:before,
    &:after {
      visibility: hidden;
    }
  }
`,G=N(),R=P.forwardRef((e,r)=>{[e,r]=_(G,e,r);const{error:t="error",message:o,isRequired:d=!1,isInvalid:s=!1,isIndeterminate:c=!1,isReadOnly:m=!1,isDisabled:h=!1,name:u}=e,f=z(e),{direction:l}=B(),{inputProps:b,labelProps:$}=U({...e,children:!0},f,r),{isLoading:n,loadingLabel:x}=M(e),g=O({componentClassName:"aje-checkbox",values:{isSelected:f.isSelected,isIndeterminate:c,isInvalid:s,isDisabled:h,isReadOnly:m,isRequired:d},selectors:{"data-selected":f.isSelected,"data-indeterminate":c,"data-invalid":s,"data-disabled":h,"data-readonly":m,"data-required":d,"data-loading":n},...e}),k=c?"mixed":void 0;return i.jsxs(T,{$rtl:l==="rtl",...g,children:[i.jsx(D,{...b,ref:r,"aria-checked":k,name:u,disabled:n||b.disabled}),i.jsxs(a,{...$,$rtl:l==="rtl",children:[n&&i.jsx(A,{$rtl:l==="rtl",title:x,children:i.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"var(--checkbox-border-radius, 0)",ry:"var(--checkbox-border-radius, 0)"})}),g.children,d&&i.jsx(F,{}),o&&i.jsx(W,{children:o}),s&&i.jsx(H,{isInvalid:!0,children:t})]})]})});try{R.displayName="CheckBox",R.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps> | undefined"}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}export{R as C,G as a};
