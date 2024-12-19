import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{r as v,R as k}from"./index-DJO9vBfz.js";import{c as y}from"./index-i5X67GZP.js";import{$}from"./useFormValidation-D6UvTinM.js";import{$ as g}from"./useFormValidationState-Cu8bp2uX.js";import{$ as _,a as q}from"./useToggle-DHRxtjis.js";import{$ as C}from"./context-CKyfYUWk.js";import{b as I,c as j,C as R}from"./Inputs.styles-DlKaJ57v.js";import{d as P}from"./styled-components.browser.esm-WCay-hu9.js";import{c as N,u as V}from"./index-B_KxbAnX.js";import{M as D}from"./Message.component-Ccl3wjCe.js";import{E}from"./ErrorMessage.component-CV4lQ-GN.js";function S(e,a,r){let o=g({...e,value:a.isSelected}),{isInvalid:t,validationErrors:m,validationDetails:s}=o.displayValidation,{labelProps:l,inputProps:p,isSelected:d,isPressed:h,isDisabled:f,isReadOnly:b}=_({...e,isInvalid:t},a,r);$(e,o,r);let{isIndeterminate:n,isRequired:c,validationBehavior:u="aria"}=e;return v.useEffect(()=>{r.current&&(r.current.indeterminate=!!n)}),{labelProps:l,inputProps:{...p,checked:d,"aria-required":c&&u==="aria"||void 0,required:c&&u==="native"},isSelected:d,isPressed:h,isDisabled:f,isReadOnly:b,isInvalid:t,validationErrors:m,validationDetails:s}}const w=P(I)`
  --check-box-radius: var(--radius);

  input[type="checkbox"] + .aje-checkbox__label:before {
    border-radius: var(--check-box-radius);
  }

  input[type="checkbox"]:checked ~ .aje-checkbox__label {
    &:before {
      --choose-check-bg-clr: var(--choose-checked);
      --choose-check-border-clr: var(--choose-checked);
    }
    &:after {
      display: block;
      top: 5px;
      ${({$rtl:e})=>e?"right: 9px;":"left: 9px;"}
      width: 4px;
      height: 9px;
      border: solid var(--neutral50);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  input[type="checkbox"][data-indeterminate] ~ .aje-checkbox__label {
    &:before {
      --choose-check-bg-clr: var(--choose-checked);
      --choose-check-border-clr: var(--choose-checked);
    }
    &:after {
      display: block;
      top: 3px;
      ${({$rtl:e})=>e?"right: 6px;":"left: 6px;"}
      width: 12px;
      height: 8px;
      border: solid var(--neutral50);
      border-width: 0 0px 2px 0;
      transform: none;
    }
  }

  //Disabled states
  input[type="checkbox"]:disabled ~ .aje-checkbox__label,
  input[type="checkbox"]:checked:disabled ~ .aje-checkbox__label:before {
    cursor: auto;
    opacity: 0.5;
  }
`,B=N(),x=k.forwardRef((e,a)=>{[e,a]=V(B,e,a);const{children:r,error:o="error",message:t,className:m,isRequired:s,isInvalid:l,isDisabled:p,isReadOnly:d,size:h="medium",isIndeterminate:f=!1}=e,b=q(e),{direction:n}=C(),{inputProps:c,labelProps:u}=S(e,b,a);return i.jsxs(w,{className:y("aje-checkbox",m),size:h,isDisabled:p,isInvalid:l,isReadOnly:d,isRequired:s,$rtl:n==="rtl",...u,children:[i.jsx(j,{...c,ref:a,"data-indeterminate":f||void 0}),i.jsxs(R,{className:"aje-checkbox__label",$rtl:n==="rtl",children:[r,s&&i.jsx("span",{"aria-hidden":"true",children:" *"}),t&&i.jsx(D,{children:t}),l&&i.jsx(E,{isInvalid:!0,children:o})]})]})});try{x.displayName="CheckBox",x.__docgenInfo={description:"Checkbox Component. Accepts a `ref`",displayName:"CheckBox",props:{isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}}}}}catch{}export{x as C,B as a};
