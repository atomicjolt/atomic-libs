import{r as N,g as v,R as C,j as t}from"./iframe-CGPW5dgX.js";import{$ as R}from"./useObjectRef-CjsC0YUg.js";import{$ as q,a as B}from"./useFormValidationState-CWonILzS.js";import{$ as I}from"./useFormValidation-hpNb-DuC.js";import{$ as w}from"./usePress-BioWcz2v.js";import{$ as V,a as F}from"./useToggle-IjgFUxMK.js";import{$ as L}from"./context-CLSG1ylv.js";import{H as j}from"./Inputs.styles-C-Gxmll0.js";import{m as $}from"./mixins-BJuiWlrm.js";import{d as f}from"./utils-DqmNl-Il.js";import{S as z}from"./SkeletonLoader.component-DalY9QZY.js";import{c as D,u as E}from"./index-C0dagnaq.js";import{u as M}from"./useRenderProps-B7rIWDyP.js";import{R as _}from"./RequiredMarker-C4F_ExJL.js";import{u as H}from"./Loading.context-EUscm4UA.js";import{M as O}from"./Message.component-CIEamcUq.js";import{E as T}from"./ErrorMessage.component-DUCD1jzH.js";function W(e,s,i){let r=q({...e,value:s.isSelected}),{isInvalid:o,validationErrors:c,validationDetails:d}=r.displayValidation,{labelProps:b,inputProps:h,isSelected:u,isPressed:m,isDisabled:l,isReadOnly:p}=V({...e,isInvalid:o},s,i);I(e,r,i);let{isIndeterminate:y,isRequired:n,validationBehavior:x="aria"}=e;N.useEffect(()=>{i.current&&(i.current.indeterminate=!!y)});let{pressProps:g}=w({isDisabled:l||p,onPress(){let{[B]:k}=e,{commitValidation:S}=k||r;S()}});return{labelProps:R(b,g),inputProps:{...h,checked:u,"aria-required":n&&x==="aria"||void 0,required:n&&x==="native"},isSelected:u,isPressed:m,isDisabled:l,isReadOnly:p,isInvalid:o,validationErrors:c,validationDetails:d}}const U=v(z)`
  position: absolute;
  top: 2px;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  ${f({ltr:"left: 2px;",rtl:"right: 2px;"})}
`,a=v.span`
  ${$.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  line-height: 1.5;

  font-size: var(--checkbox-label-font-size);
  color: var(--checkbox-text-clr);
  min-height: var(--checkbox-label-height);

  ${f({ltr:"padding-left: calc(var(--checkbox-size) + var(--checkbox-label-spacing));",rtl:"padding-right: calc(var(--checkbox-size) + var(--checkbox-label-spacing));"})}

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
    ${f({ltr:"left: 2px",rtl:"right: 2px"})}
  }

  /* :after contains the checkmark in the "checkbox" */
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`,A=v.div`
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
      ${f({ltr:"left: 9px;",rtl:"right: 9px;"})}
    }
  }

  &[data-indeterminate] ${a} {
    &:after {
      top: 3px;
      width: 12px;
      height: 8px;
      border-width: 0 0px 2px 0;
      transform: none;
      ${f({ltr:"left: 6px;",rtl:"right: 6px;"})}
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
`,G=D(),P=C.forwardRef((e,s)=>{[e,s]=E(G,e,s);const{error:i,message:r,isRequired:o=!1,isInvalid:c=!1,isIndeterminate:d=!1,isReadOnly:b=!1,isDisabled:h=!1,name:u}=e,m=F(e),{direction:l}=L(),{inputProps:p,labelProps:y}=W({...e,children:!0},m,s),{isLoading:n,loadingLabel:x}=H(e),g=M({componentClassName:"aje-checkbox",values:{isSelected:m.isSelected,isIndeterminate:d,isInvalid:c,isDisabled:h,isReadOnly:b,isRequired:o},selectors:{"data-selected":m.isSelected,"data-indeterminate":d,"data-invalid":c,"data-disabled":h,"data-readonly":b,"data-required":o,"data-loading":n},...e}),k=d?"mixed":void 0;return t.jsxs(A,{$rtl:l==="rtl",...g,children:[t.jsx(j,{...p,ref:s,"aria-checked":k,name:u,disabled:n||p.disabled}),t.jsxs(a,{...y,$rtl:l==="rtl",children:[n&&t.jsx(U,{$rtl:l==="rtl",title:x,children:t.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"var(--checkbox-border-radius, 0)",ry:"var(--checkbox-border-radius, 0)"})}),g.children,o&&t.jsx(_,{}),r&&t.jsx(O,{children:r}),c&&i&&t.jsx(T,{isInvalid:!0,children:i})]})]})});try{P.displayName="CheckBox",P.__docgenInfo={description:"CheckBox Component. Accepts a `ref`",displayName:"CheckBox",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Inputs/CheckBox/CheckBox.component.tsx",methods:[],props:{name:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/CheckBox/CheckBox.component.tsx",name:"CheckBoxProps"}],description:"Name of the input, submitted with form data",name:"name",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/CheckBox/CheckBox.component.tsx",name:"CheckBoxProps"},required:!1,tags:{},type:{name:"string"}},error:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"Error message for the field",name:"error",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}},message:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"For additional information (ex. date format mm/dd/yy)",name:"message",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}},isDisabled:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field cannot be interacted with, should be de-emphasized in the UI",name:"isDisabled",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-disabled]"},type:{name:"boolean"}},isReadOnly:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field cannot be modified. Should be made to not look like a editable field",name:"isReadOnly",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-readonly]"},type:{name:"boolean"}},isRequired:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field must be interacted with. Should be indicated in the UI",name:"isRequired",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-required]"},type:{name:"boolean"}},isInvalid:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed",name:"isInvalid",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-invalid]"},type:{name:"boolean"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<CheckBoxRenderProps>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<CheckBoxRenderProps>"}},isLoading:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,tags:{},type:{name:"boolean"}},loadingLabel:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:"aria accessibility label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,tags:{},type:{name:"string"}},slot:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/hooks/useSlottedContext.ts",name:"SlotProps"}],description:"",name:"slot",parent:{fileName:"atomic-libs/packages/atomic-elements/src/hooks/useSlottedContext.ts",name:"SlotProps"},required:!1,tags:{},type:{name:"string | null"}}},tags:{}}}catch{}export{P as C,G as a};
