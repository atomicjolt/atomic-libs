import{g as x}from"./cssprops-DECR0Nbg.js";import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R as $}from"./index-BCtMShv3.js";import{c as S}from"./index-EJ0-2BeM.js";import{$ as P,a as T}from"./useToggle-BPntlL3P.js";import{$ as q}from"./VisuallyHidden-zwVgBnCN.js";import{d as n,m as c}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as w}from"./mixins-XviowZ_6.js";import{u as z}from"./useForwardedRef-Tweo1nQG.js";import{a as R}from"./util-DYWyeGCs.js";import{u as _}from"./useFocusRing-88kjlAJd.js";import{u as j,f as V}from"./useRenderProps-CP918x9p.js";import"./useControlledState-vzCMHZvt.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BY6BQbOl.js";import"./usePress-CzUfyTu7.js";import"./useFocusable-DacP9xvE.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusWithin-AgzTPs3-.js";function I(e,d,a){let{labelProps:s,inputProps:m,isSelected:l,isPressed:t,isDisabled:g,isReadOnly:u}=P(e,d,a);return{labelProps:s,inputProps:{...m,role:"switch",checked:l},isSelected:l,isPressed:t,isDisabled:g,isReadOnly:u}}const N=c`
  0% {
    transform: translateX(0) scale(1, 1);
  }
  50% {
    transform: translateX(calc(var(--toggle-travel) / 2)) scale(1.25, 0.8);
  }
  100% {
    transform: translateX(var(--toggle-travel)) scale(1, 1);
  }
`,X=c`
  0% {
    transform: translateX(var(--toggle-travel)) scale(1, 1);
  }
  50% {
    transform: translateX(calc(var(--toggle-travel) / 2)) scale(1.25, 0.8);
  }
  100% {
    transform: translateX(0) scale(1, 1);
  }
`,C=c`
  0% {
    content: "\\e5cd";
  }
  50% {
    content: "\\e15b";
  }
  100% {
    content: "\\e5ca";
  }
`,F=c`
  0% {
    content: "\e5ca";
  }
  50% {
    content: "\\e15b";
  }
  100% {
    content: "\\e5cd";
  }
`,r=n.div`
  ${w.FocusVisible(2)}
  position: relative;
  width: calc(var(--toggle-size) * 1.666);
  height: var(--toggle-size);
  border-radius: calc(var(--toggle-size) / 2);
  background-color: var(--toggle-unchecked);
  transition: background-color 200ms linear;
  overflow: hidden;
`,D=n.span`
  ${w.Bold}
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
  font-size: 1.3rem;
  line-height: 1.5;
  color: var(--text-clr);

  &.is-checked ${r} {
    background-color: var(--toggle-checked);

    i {
      transform: translateX(var(--toggle-travel)) scale(1, 1);
      border-color: var(--toggle-checked);

      &::before {
        color: var(--toggle-checked);
        translate: translateX(var(--toggle-travel)) scale(1, 1);
        content: "\\e5ca";
      }
    }
  }

  &.check-animation ${r} {
    background-color: var(--toggle-checked);
    i {
      animation: ${N} 200ms linear forwards;
      border-color: var(--toggle-checked);

      &::before {
        animation: ${C} 200ms linear forwards;
        color: var(--toggle-checked);
      }
    }
  }

  &.uncheck-animation ${r} {
    background-color: var(--toggle-unchecked);
    i {
      animation: ${X} 200ms linear forwards;
      border-color: var(--toggle-unchecked);

      &::before {
        animation: ${F} 200ms linear forwards;
        color: var(--text-clr-alt);
      }
    }
  }
`,A=n.label`
  &[data-invalid] ${r} {
    background-color: var(--toggle-error);

    i {
      border-color: var(--toggle-error);

      &::before {
        color: var(--toggle-error);
      }
    }
  }

  &[data-disabled] {
    cursor: auto;
    opacity: 0.5;
  }
`,O=n.i`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--toggle-size);
  height: var(--toggle-size);
  border-radius: 50%;
  box-sizing: border-box;
  background-color: var(--neutral50);
  border: 3px solid var(--toggle-unchecked);
  transform-origin: left center;
  transition: border-color 200ms linear;
  display: flex;
  margin: auto;

  &::before {
    content: "\\e5cd";
    align-self: center;
    margin: auto;
    font-size: 1.4rem;
    font-family: "Material Icons";
    font-style: normal;
    line-height: 1;
    color: var(--text-clr-alt);
    z-index: 2;
  }
`,h=$.forwardRef((e,d)=>{const a=T(e),s=z(d),{inputProps:m,labelProps:l,isSelected:t}=I(e,a,s),{focusProps:g,isFocusVisible:u}=_(),p=R(a.isSelected),{childrenPosition:b="left"}=e,f=j({componentClassName:"aje-toggle-switch",...e,selectors:V(e)});return o.jsx(A,{...f,children:o.jsxs(D,{...l,className:S("aje-toggle-switch__label",{"check-animation":t&&p,"uncheck-animation":!t&&p,"is-checked":t&&!p}),children:[o.jsx(q,{children:o.jsx("input",{...m,...g,ref:s})}),b==="left"&&f.children,o.jsx(r,{"data-focus-visible":u,children:o.jsx(O,{})}),b==="right"&&f.children]})})});try{h.displayName="ToggleSwitch",h.__docgenInfo={description:"A Toggle Switch is similar to a checkbox, but represents on/off values as opposed to selection.",displayName:"ToggleSwitch",props:{childrenPosition:{defaultValue:null,description:"The position of the children relative to the switch",name:"childrenPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}}}}}catch{}const ce={title:"Inputs/Choose State/ToggleSwitch",component:h,parameters:{layout:"centered",cssprops:x("Toggle")},argTypes:{onChange:{control:!1,table:{category:"Events"}},defaultSelected:{control:"boolean",description:"Whether the switch is checked by default for an uncontrolled component"},isSelected:{control:"boolean",description:"Whether the switch is checked for a controlled component"}}},i={args:{children:"Toggle switch"}};var v,k,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Toggle switch"
  }
}`,...(y=(k=i.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const de=["Primary"];export{i as Primary,de as __namedExportsOrder,ce as default};
