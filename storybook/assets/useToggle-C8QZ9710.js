import{$ as C}from"./useControlledState-CN8sBTKq.js";import{a as o}from"./useObjectRef-CA0MXmrf.js";import{$ as O}from"./filterDOMProps-CeZl_uWj.js";import{$ as R}from"./useFormReset-D24hgWtm.js";import{$ as I}from"./useFocusable-DHL4UX94.js";import{$ as f}from"./usePress-DBLAzBwe.js";function z(e={}){let{isReadOnly:a}=e,[i,l]=C(e.isSelected,e.defaultSelected||!1,e.onChange);function s(r){a||l(r)}function d(){a||l(!i)}return{isSelected:i,setSelected:s,toggle:d}}function B(e,a,i){let{isDisabled:l=!1,isReadOnly:s=!1,value:d,name:r,children:b,"aria-label":$,"aria-labelledby":u,validationState:n="valid",isInvalid:c}=e,p=t=>{t.stopPropagation(),a.setSelected(t.target.checked)},m=b!=null,P=$!=null||u!=null;!m&&!P&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:S,isPressed:v}=f({isDisabled:l}),{pressProps:g,isPressed:y}=f({isDisabled:l||s,onPress(){a.toggle()}}),{focusableProps:h}=I(e,i),x=o(S,h),D=O(e,{labelable:!0});return R(i,a.isSelected,a.setSelected),{labelProps:o(g,{onClick:t=>t.preventDefault()}),inputProps:o(D,{"aria-invalid":c||n==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":s||void 0,onChange:p,disabled:l,...d==null?{}:{value:d},name:r,type:"checkbox",...x}),isSelected:a.isSelected,isPressed:v||y,isDisabled:l,isReadOnly:s,isInvalid:c||n==="invalid"}}export{B as $,z as a};
