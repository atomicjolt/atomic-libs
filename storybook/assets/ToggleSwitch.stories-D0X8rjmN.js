import{g as q}from"./cssprops-BGfeK0jo.js";import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{R as z}from"./index-DJO9vBfz.js";import{c as v}from"./index-i5X67GZP.js";import{$ as R,a as _}from"./useToggle-F9_xYzmQ.js";import{$ as j}from"./VisuallyHidden-BPFT_fih.js";import{m as n,d as c}from"./styled-components.browser.esm-WCay-hu9.js";import{m as x}from"./mixins-TlkgTuSN.js";import{F as I}from"./FieldWrapper-CecreuUM.js";import{u as N}from"./useForwardedRef-BqZ3RrEL.js";import{a as V}from"./util-o2DwfYmN.js";import{u as F}from"./useFocusRing-MU4psFt8.js";import"./useControlledState-CN8sBTKq.js";import"./useObjectRef-C4RVQRRU.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BxS8FGOL.js";import"./useFocusable-DyKXFx56.js";import"./focusSafely-GXGk_mpd.js";import"./useFocus-C-we61At.js";import"./utils-DHlq6CLd.js";import"./useKeyboard-A8_doyNT.js";import"./usePress-DG8LklVH.js";import"./useFocusWithin-DOCmU_ML.js";function X(e,d,a){let{labelProps:s,inputProps:m,isSelected:l,isPressed:g,isDisabled:p,isReadOnly:r}=R(e,d,a);return{labelProps:s,inputProps:{...m,role:"switch",checked:l},isSelected:l,isPressed:g,isDisabled:p,isReadOnly:r}}const D=n`
  0% {
    transform: translateX(0) scale(1, 1);
  }
  50% {
    transform: translateX(calc(var(--toggle-travel) / 2)) scale(1.25, 0.8);
  }
  100% {
    transform: translateX(var(--toggle-travel)) scale(1, 1);
  }
`,A=n`
  0% {
    transform: translateX(var(--toggle-travel)) scale(1, 1);
  }
  50% {
    transform: translateX(calc(var(--toggle-travel) / 2)) scale(1.25, 0.8);
  }
  100% {
    transform: translateX(0) scale(1, 1);
  }
`,C=n`
  0% {
    content: "\\e5cd";
  }
  50% {
    content: "\\e15b";
  }
  100% {
    content: "\\e5ca";
  }
`,O=n`
  0% {
    content: "\e5ca";
  }
  50% {
    content: "\\e15b";
  }
  100% {
    content: "\\e5cd";
  }
`,t=c.div`
  ${x.FocusVisible(2)}
  position: relative;
  width: calc(var(--toggle-size) * 1.666);
  height: var(--toggle-size);
  border-radius: calc(var(--toggle-size) / 2);
  background-color: var(--toggle-unchecked);
  transition: background-color 200ms linear;
  overflow: hidden;
`,W=c.span`
  ${x.Bold}
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
  font-size: 1.3rem;
  line-height: 1.5;
  color: var(--text-clr);

  &.is-checked ${t} {
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

  &.check-animation ${t} {
    background-color: var(--toggle-checked);
    i {
      animation: ${D} 200ms linear forwards;
      border-color: var(--toggle-checked);

      &::before {
        animation: ${C} 200ms linear forwards;
        color: var(--toggle-checked);
      }
    }
  }

  &.uncheck-animation ${t} {
    background-color: var(--toggle-unchecked);
    i {
      animation: ${A} 200ms linear forwards;
      border-color: var(--toggle-unchecked);

      &::before {
        animation: ${O} 200ms linear forwards;
        color: var(--text-clr-alt);
      }
    }
  }
`,B=c(I)`
  &[data-invalid] ${t} {
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
`,E=c.i`
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
`,f=z.forwardRef((e,d)=>{const a=_(e),s=N(d),{inputProps:m,labelProps:l,isDisabled:g,isReadOnly:p,isSelected:r}=X(e,a,s),{focusProps:$,isFocusVisible:S}=F(),u=V(a.isSelected),{children:h,className:P,childrenPosition:b="left",isInvalid:T}=e;return o.jsx(B,{forwardedAs:"label",className:v("aje-toggle-switch",P),isDisabled:g,isInvalid:T,isReadOnly:p,children:o.jsxs(W,{...l,className:v("aje-toggle-switch__label",{"check-animation":r&&u,"uncheck-animation":!r&&u,"is-checked":r&&!u}),children:[o.jsx(j,{children:o.jsx("input",{...m,...$,ref:s})}),b==="left"&&h,o.jsx(t,{"data-focus-visible":S,children:o.jsx(E,{})}),b==="right"&&h]})})});try{f.displayName="ToggleSwitch",f.__docgenInfo={description:"A Toggle Switch is similar to a checkbox, but represents on/off values as opposed to selection.",displayName:"ToggleSwitch",props:{childrenPosition:{defaultValue:null,description:"The position of the children relative to the switch",name:"childrenPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}}}}}catch{}const fe={title:"Inputs/Choose State/ToggleSwitch",component:f,parameters:{layout:"centered",cssprops:q("Toggle")},argTypes:{onChange:{control:!1,table:{category:"Events"}},defaultSelected:{control:"boolean",description:"Whether the switch is checked by default for an uncontrolled component"},isSelected:{control:"boolean",description:"Whether the switch is checked for a controlled component"}}},i={args:{children:"Toggle switch"}};var y,k,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Toggle switch"
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const he=["Primary"];export{i as Primary,he as __namedExportsOrder,fe as default};
