import{I as J}from"./helpers-eqtGz5yy.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as O,r as Z}from"./index-BCtMShv3.js";import{$ as G}from"./useButton-9RZc7-Gk.js";import{$ as g,b as K}from"./useObjectRef-D2RG7rRi.js";import{u as Q}from"./useRenderProps-CP918x9p.js";import{g as t}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as b}from"./mixins-rvS92GN5.js";import{S as X}from"./SkeletonLoader.component-q75MwwfP.js";import{u as Y}from"./useFocusRing-DIS5Kyrs.js";import"./index-Km3Ox9s4.js";import{u as ee}from"./Loading.context-C7II2W1n.js";import{D as re}from"./DropZone.component-BPingj7j.js";import{F as ae}from"./FileTrigger.component-CUwG1WoM.js";import{M as ie}from"./Message.component-DFztKYb4.js";import{E as te}from"./ErrorMessage.component-qu0ZRxE-.js";import"./index-D6p6eVJg.js";import"./index-CU-NnRvR.js";import"./index-DK2N7Sdf.js";import"./index-DDEbtPEF.js";import"./index-B-ANkEne.js";import"./index-CBCMMQRA.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./SSRProvider-DyiXDq2k.js";import"./scale-CqCDTNu0.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CqXh5MnK.js";import"./index-EJ0-2BeM.js";import"./context-z6pb9OkM.js";import"./useFocusWithin-BJ0-_hiU.js";import"./useDescription-CqPnuqnT.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useHover-CQZXfm5n.js";import"./VisuallyHidden-CdgZn78T.js";import"./useForwardedRef-Tweo1nQG.js";import"./PressResponder-BZaXPZ_t.js";import"./index-CKqsTkFX.js";import"./Message.context-Dd4cT4rL.js";import"./ErrorMessage.context-AYC8UfzI.js";const le=t(X)`
  width: 287px;
  height: 38px;
  display: inline-block;
`,ne=t.span`
  width: 200px;
  min-height: 38px;
  display: inline-block;
  padding: 11px 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,z=t.strong`
  ${b.Bold}
  background-color: var(--background-clr-subtle);
  color: var(--text-clr-secondary);
  min-height: 38px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-left: 1px solid var(--file-input-border-clr);
`,T=t.button`
  ${b.Regular}
  ${b.FocusVisible(2)}
  text-align: left;
  background-color: var(--background-clr);
  padding: 0;
  font-size: 1.6rem;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid var(--file-input-border-clr);
  border-radius: 5px;
  overflow: hidden;
  background-color: none;
  padding: 0;
  color: var(--text-clr);

  &:hover {
    ${z} {
      color: var(--text-clr);
      background-color: var(--background-clr-subtle-hover);
    }
  }
`,V=t.div`
  --file-input-border-clr: var(--input-border-clr);

  &[data-disabled] {
    ${T} {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`,h=O.forwardRef(function(a,y){const s=g(a.id),d=g(),u=g(),{file:p,onChange:r,label:c,error:x,message:v,isDisabled:F=!1,isRequired:q=!1,isInvalid:w=!1,className:W,placeholder:A="No file selected",size:C="medium",id:se=s,acceptedFileTypes:E,name:M,isLoading:de,loadingLabel:ue,...U}=a,{isLoading:B,loadingLabel:H}=ee(a),I=Q({componentClassName:"aje-input__file",className:W,size:C,selectors:{"data-invalid":w,"data-disabled":F,"data-required":q}});return B?e.jsx(V,{...I,children:e.jsx(le,{title:H,children:e.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"5",ry:"5"})})}):e.jsx(V,{...I,...U,children:e.jsx(re,{onDrop:m=>{const L=m.items.filter(f=>f.kind==="file");L.length>0&&L[0].getFile().then(f=>r==null?void 0:r(f))},children:e.jsxs(ae,{acceptedFileTypes:E,onSelect:m=>r==null?void 0:r(m[0]||null),name:M,children:[e.jsx(oe,{file:p,label:c,placeholder:A,isRequired:q,isDisabled:F}),v&&e.jsx(ie,{id:u,children:v}),w&&x&&e.jsx(te,{id:d,children:x})]})})})});function oe(o){const{file:a,label:y,placeholder:s,isRequired:d,isDisabled:u}=o,p=Z.useRef(null),{buttonProps:r}=G({isDisabled:u},p),{focusProps:c}=Y();return e.jsxs(T,{...K(r,c),children:[e.jsx(ne,{children:a?a.name:s}),e.jsxs(z,{children:[y,d&&e.jsx("span",{"aria-hidden":"true",children:" *"})]})]})}try{h.displayName="FileInput",h.__docgenInfo={description:`FileInput component. Used to select singular files

Checkout [FileTrigger](?path=/docs/buttons-filetrigger--overview) For a more general file selection component`,displayName:"FileInput",props:{file:{defaultValue:null,description:"",name:"file",required:!1,type:{name:"File | null | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((f: File | null) => void) | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},acceptedFileTypes:{defaultValue:null,description:`Array of accepted file types

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)`,name:"acceptedFileTypes",required:!1,type:{name:"string[] | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string | undefined"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string | undefined"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string | undefined"}}}}}catch{}const er={title:"Inputs/Choose State/FileInput",component:h,parameters:{layout:"centered"},argTypes:{...J,file:{control:!1}}},i={args:{label:"Choose a file..."}},l={args:{...i.args,file:new File(["test"],"test.txt")}},n={args:{...i.args,isLoading:!0,loadingLabel:"Loading"}};var R,j,S;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Choose a file..."
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var $,k,_;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    file: new File(["test"], "test.txt")
  }
}`,...(_=(k=l.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var N,D,P;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(P=(D=n.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const rr=["Primary","WithFile","Loading"];export{n as Loading,i as Primary,l as WithFile,rr as __namedExportsOrder,er as default};
