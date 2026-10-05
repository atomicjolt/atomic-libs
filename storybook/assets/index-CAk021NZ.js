import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as C,R as V}from"./index-BCtMShv3.js";import{b as w}from"./useObjectRef-D2RG7rRi.js";import{$ as I,a as P}from"./useFormValidationState-CONlS5Wo.js";import{$ as S}from"./useFormValidation-BfT1egZx.js";import{$ as B}from"./usePress-CqXh5MnK.js";import{$ as _,a as L}from"./useToggle-iesXfB0X.js";import{$ as N}from"./context-z6pb9OkM.js";import{H as D}from"./Inputs.styles-Ch7s-CR_.js";import{g as v}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as $}from"./mixins-CcgEHb9c.js";import{d as m}from"./utils-DqmNl-Il.js";import{S as j}from"./SkeletonLoader.component-q75MwwfP.js";import{c as z,u as E}from"./index-CKqsTkFX.js";import{u as F}from"./useRenderProps-CP918x9p.js";import{R as O}from"./RequiredMarker-CwAzCIB3.js";import{u as W}from"./Loading.context-C7II2W1n.js";import{M}from"./Message.component-CZ4-z7fs.js";import{E as U}from"./ErrorMessage.component-DBytMZ-8.js";function A(e,r,t){let d=I({...e,value:r.isSelected}),{isInvalid:n,validationErrors:s,validationDetails:c}=d.displayValidation,{labelProps:p,inputProps:b,isSelected:h,isPressed:u,isDisabled:l,isReadOnly:f}=_({...e,isInvalid:n},r,t);S(e,d,t);let{isIndeterminate:k,isRequired:o,validationBehavior:x="aria"}=e;C.useEffect(()=>{t.current&&(t.current.indeterminate=!!k)});let{pressProps:y}=B({isDisabled:l||f,onPress(){let{[P]:g}=e,{commitValidation:R}=g||d;R()}});return{labelProps:w(p,y),inputProps:{...b,checked:h,"aria-required":o&&x==="aria"||void 0,required:o&&x==="native"},isSelected:h,isPressed:u,isDisabled:l,isReadOnly:f,isInvalid:n,validationErrors:s,validationDetails:c}}const H=v(j)`
  position: absolute;
  top: 2px;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  ${m({ltr:"left: 2px;",rtl:"right: 2px;"})}
`,a=v.span`
  ${$.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  line-height: 1.5;

  font-size: var(--checkbox-label-font-size);
  color: var(--checkbox-text-clr);
  min-height: var(--checkbox-label-height);

  ${m({ltr:"padding-left: calc(var(--checkbox-size) + var(--checkbox-label-spacing));",rtl:"padding-right: calc(var(--checkbox-size) + var(--checkbox-label-spacing));"})}

  /* :before contains the box in the "checkbox" */
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    box-sizing: border-box;
    background-color: var(--checkbox-bg-clr);
    ${$.Border("checkbox")}
    ${m({ltr:"left: 2px",rtl:"right: 2px"})}
  }

  /* :after contains the checkmark in the "checkbox" */
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`,T=v.div`
  ${$.ToggleInputLike(a)}

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
      ${m({ltr:"left: 9px;",rtl:"right: 9px;"})}
    }
  }

  &[data-indeterminate] ${a} {
    &:after {
      top: 3px;
      width: 12px;
      height: 8px;
      border-width: 0 0px 2px 0;
      transform: none;
      ${m({ltr:"left: 6px;",rtl:"right: 6px;"})}
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
`,G=z(),q=V.forwardRef((e,r)=>{[e,r]=E(G,e,r);const{error:t="error",message:d,isRequired:n=!1,isInvalid:s=!1,isIndeterminate:c=!1,isReadOnly:p=!1,isDisabled:b=!1,name:h}=e,u=L(e),{direction:l}=N(),{inputProps:f,labelProps:k}=A({...e,children:!0},u,r),{isLoading:o,loadingLabel:x}=W(e),y=F({componentClassName:"aje-checkbox",values:{isSelected:u.isSelected,isIndeterminate:c,isInvalid:s,isDisabled:b,isReadOnly:p,isRequired:n},selectors:{"data-selected":u.isSelected,"data-indeterminate":c,"data-invalid":s,"data-disabled":b,"data-readonly":p,"data-required":n,"data-loading":o},...e}),g=c?"mixed":void 0;return i.jsxs(T,{$rtl:l==="rtl",...y,children:[i.jsx(D,{...f,ref:r,"aria-checked":g,name:h,disabled:o||f.disabled}),i.jsxs(a,{...k,$rtl:l==="rtl",children:[o&&i.jsx(H,{$rtl:l==="rtl",title:x,children:i.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"var(--checkbox-border-radius, 0)",ry:"var(--checkbox-border-radius, 0)"})}),y.children,n&&i.jsx(O,{}),d&&i.jsx(M,{children:d}),s&&i.jsx(U,{isInvalid:!0,children:t})]})]})});try{q.displayName="CheckBox",q.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps> | undefined"}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}try{CheckBox.displayName="CheckBox",CheckBox.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<CheckBoxRenderProps> | undefined"}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}export{q as C,G as a};
