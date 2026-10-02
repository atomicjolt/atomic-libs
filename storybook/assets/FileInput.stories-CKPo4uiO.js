import{I as J}from"./helpers-KKeMmUAi.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as O,r as Z}from"./index-BCtMShv3.js";import{$ as G}from"./useButton-9RZc7-Gk.js";import{$ as g,b as K}from"./useObjectRef-D2RG7rRi.js";import{u as Q}from"./useRenderProps-CP918x9p.js";import{g as l}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as b}from"./mixins-CcgEHb9c.js";import{S as X}from"./SkeletonLoader.component-q75MwwfP.js";import{u as Y}from"./useFocusRing-DIS5Kyrs.js";import{D as ee}from"./index-DIel7O-C.js";import{u as ae}from"./Loading.context-C7II2W1n.js";import{F as re}from"./FileTrigger.component-CUwG1WoM.js";import{M as ie}from"./Message.component-CZ4-z7fs.js";import{E as le}from"./ErrorMessage.component-DBytMZ-8.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CqXh5MnK.js";import"./index-EJ0-2BeM.js";import"./context-z6pb9OkM.js";import"./useFocusWithin-BJ0-_hiU.js";import"./useDescription-CqPnuqnT.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useHover-CQZXfm5n.js";import"./VisuallyHidden-CdgZn78T.js";import"./useForwardedRef-Tweo1nQG.js";import"./PressResponder-BZaXPZ_t.js";import"./index-CKqsTkFX.js";import"./Message.context-Dd4cT4rL.js";import"./ErrorMessage.context-AYC8UfzI.js";const te=l(X)`
  width: 287px;
  height: 38px;
  display: inline-block;
`,ne=l.span`
  width: 200px;
  min-height: 38px;
  display: inline-block;
  padding: 11px 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,z=l.strong`
  ${b.Bold}
  background-color: var(--neutral100);
  color: var(--text-clr-alt);
  min-height: 38px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-left: 1px solid var(--border-clr);
`,T=l.button`
  ${b.Regular}
  ${b.FocusVisible(2)}
  text-align: left;
  background-color: white;
  padding: 0;
  font-size: 1.6rem;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid var(--border-clr);
  border-radius: 5px;
  overflow: hidden;
  background-color: none;
  padding: 0;
  color: var(--text-clr);

  &:hover {
    ${z} {
      color: var(--text-clr);
      background-color: var(--neutral200);
    }
  }
`,V=l.div`
  --border-clr: var(--input-border-clr);

  &[data-disabled] {
    ${T} {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`,h=O.forwardRef(function(r,y){const s=g(r.id),d=g(),u=g(),{file:p,onChange:a,label:c,error:x,message:v,isDisabled:F=!1,isRequired:q=!1,isInvalid:w=!1,className:W,placeholder:A="No file selected",size:C="medium",id:se=s,acceptedFileTypes:E,name:M,isLoading:de,loadingLabel:ue,...U}=r,{isLoading:B,loadingLabel:H}=ae(r),I=Q({componentClassName:"aje-input__file",className:W,size:C,selectors:{"data-invalid":w,"data-disabled":F,"data-required":q}});return B?e.jsx(V,{...I,children:e.jsx(te,{title:H,children:e.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"5",ry:"5"})})}):e.jsx(V,{...I,...U,children:e.jsx(ee,{onDrop:m=>{const L=m.items.filter(f=>f.kind==="file");L.length>0&&L[0].getFile().then(f=>a==null?void 0:a(f))},children:e.jsxs(re,{acceptedFileTypes:E,onSelect:m=>a==null?void 0:a(m[0]||null),name:M,children:[e.jsx(oe,{file:p,label:c,placeholder:A,isRequired:q,isDisabled:F}),v&&e.jsx(ie,{id:u,children:v}),w&&x&&e.jsx(le,{id:d,children:x})]})})})});function oe(o){const{file:r,label:y,placeholder:s,isRequired:d,isDisabled:u}=o,p=Z.useRef(null),{buttonProps:a}=G({isDisabled:u},p),{focusProps:c}=Y();return e.jsxs(T,{...K(a,c),children:[e.jsx(ne,{children:r?r.name:s}),e.jsxs(z,{children:[y,d&&e.jsx("span",{"aria-hidden":"true",children:" *"})]})]})}try{h.displayName="FileInput",h.__docgenInfo={description:`FileInput component. Used to select singular files

Checkout [FileTrigger](?path=/docs/buttons-filetrigger--overview) For a more general file selection component`,displayName:"FileInput",props:{file:{defaultValue:null,description:"",name:"file",required:!1,type:{name:"File | null | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((f: File | null) => void) | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},acceptedFileTypes:{defaultValue:null,description:`Array of accepted file types

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)`,name:"acceptedFileTypes",required:!1,type:{name:"string[] | undefined"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string | undefined"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string | undefined"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string | undefined"}}}}}catch{}const Ze={title:"Inputs/Choose State/FileInput",component:h,parameters:{layout:"centered"},argTypes:{...J,file:{control:!1}}},i={args:{label:"Choose a file..."}},t={args:{...i.args,file:new File(["test"],"test.txt")}},n={args:{...i.args,isLoading:!0,loadingLabel:"Loading"}};var R,j,S;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Choose a file..."
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var $,_,N;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    file: new File(["test"], "test.txt")
  }
}`,...(N=(_=t.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var k,D,P;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(P=(D=n.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const Ge=["Primary","WithFile","Loading"];export{n as Loading,i as Primary,t as WithFile,Ge as __namedExportsOrder,Ze as default};
