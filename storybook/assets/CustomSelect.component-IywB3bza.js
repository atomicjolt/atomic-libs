import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DmM0KDA7.js";import{P as v}from"./index-BapQbWJp.js";import{L as b}from"./index-C5aJsvsM.js";import{F as g}from"./FloatingFieldInputWrapper-sNfhsp6k.js";import{d as o}from"./styled-components.browser.esm-B0S50oBn.js";import{m as y}from"./mixins-CgZ-Dp8B.js";import{F as x}from"./Dropdowns.styles-BNfmDUhX.js";import{S as l}from"./SelectField.component-tSm4nmMs.js";import{u as q}from"./useRenderProps-BzxgHqRb.js";const w=o(l)`
  &.aje-select--floating {
    ${x}
  }
`;o.input`
  ${y.Regular}
  border: none;
  background-color: var(--listbox-bg-clr);
  height: var(--listbox-item-height);
  width: 100%;
  font-size: var(--listbox-font-size);
  color: var(--listbox-text-clr);

  &:focus {
    outline: 2px solid var(--outline-clr-primary);
    outline-offset: -2px;
  }
`;o.span`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;const r=h.forwardRef(function(t,n){const{label:s,error:d,message:u,placeholder:m="Select an option",variant:a="default",maxHeight:c=300,dropdownPlacement:p="bottom start"}=t,f=q({componentClassName:"aje-select",variant:a,selectors:{"data-float":!!t.selectedKey&&a==="floating"}});return e.jsxs(w,{...t,...f,ref:n,children:[e.jsx(g,{floating:a==="floating",label:s,message:u,error:d,children:e.jsx(l.Button,{variant:a,children:e.jsx(l.Value,{placeholder:a==="floating"?null:m})})}),e.jsx(v,{maxHeight:c,placement:p,children:e.jsx(b,{items:t.items,children:t.children})})]})});try{r.displayName="CustomSelect",r.__docgenInfo={description:"A custom version of the builtin `select` component to\nallow for consistent styling & an extended feature set",displayName:"CustomSelect",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"SuggestStrings<CustomSelectVariants>"}},maxHeight:{defaultValue:{value:"height of the viewport"},description:"The maximum height of the the dropdown.",name:"maxHeight",required:!1,type:{name:"number"}},dropdownPlacement:{defaultValue:null,description:"",name:"dropdownPlacement",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"bottom start"'},{value:'"bottom end"'},{value:'"top"'},{value:'"top left"'},{value:'"top right"'},{value:'"top start"'},{value:'"top end"'},{value:'"left top"'},{value:'"left bottom"'},{value:'"start"'},{value:'"start top"'},{value:'"start bottom"'},{value:'"right top"'},{value:'"right bottom"'},{value:'"end top"'},{value:'"end bottom"'}]}}}}}catch{}export{r as C};
