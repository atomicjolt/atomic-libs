import{R as s,r as $,j as o}from"./iframe-CGPW5dgX.js";import{$ as y}from"./usePress-BioWcz2v.js";import{$ as w,a as T,o as k}from"./useFocusable-DT9_LXVA.js";import{d as O,$ as _}from"./useObjectRef-CjsC0YUg.js";import{$ as j}from"./index-C0dagnaq.js";import{O as N}from"./helpers-tUmR_xN7.js";import{O as C}from"./OverlayTrigger.component-7L8D-EzU.js";import{P as v}from"./Popover.component-DVBx73LK.js";import{B as R}from"./Button.component-Bd4z0Gnh.js";import"./preload-helper-Dp1pzeXC.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./useOverlayTrigger-Bavuc6A6.js";import"./useCloseOnScroll-CTNw5Yby.js";import"./PressResponder-xHF_wXhX.js";import"./Popover.context-D_v2VeGP.js";import"./Provider-CKCHWQEo.js";import"./context-ID_07sjv.js";import"./FocusScope-DFxiutEz.js";import"./useFocusWithin-BzfIRRcZ.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./Modal.context-RwEURKo4.js";import"./useOverlayTriggerState-DfGm2mCW.js";import"./useLabels-Bveo7T3X.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./context-CLSG1ylv.js";import"./VisuallyHidden-BPd2hceK.js";import"./useOverlayPosition-HaX0xHeb.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BytR9cji.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./colors-PU9nFmCW.js";import"./useForwardedRef-DFbI-FzN.js";import"./BaseButton-B8bVR-o6.js";import"./mixins-BJuiWlrm.js";import"./useFocusRing-Dbcio0BW.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";const A=s.forwardRef(({children:i,...p},t)=>{t=O(t);let{pressProps:h}=y({...p,ref:t}),{focusableProps:x}=w(p,t),a=s.Children.only(i);$.useEffect(()=>{let r=t.current;if(!r||!(r instanceof T(r).Element)){console.error("<Pressable> child must forward its ref to a DOM element.");return}if(!k(r)){console.warn("<Pressable> child must be focusable. Please ensure the tabIndex prop is passed through.");return}if(r.localName!=="button"&&r.localName!=="input"&&r.localName!=="select"&&r.localName!=="textarea"&&r.localName!=="a"&&r.localName!=="area"&&r.localName!=="summary"){let e=r.getAttribute("role");e?e!=="application"&&e!=="button"&&e!=="checkbox"&&e!=="combobox"&&e!=="gridcell"&&e!=="link"&&e!=="menuitem"&&e!=="menuitemcheckbox"&&e!=="menuitemradio"&&e!=="option"&&e!=="radio"&&e!=="searchbox"&&e!=="separator"&&e!=="slider"&&e!=="spinbutton"&&e!=="switch"&&e!=="tab"&&e!=="textbox"&&e!=="treeitem"&&console.warn(`<Pressable> child must have an interactive ARIA role. Got "${e}".`):console.warn("<Pressable> child must have an interactive ARIA role.")}},[t]);let P=parseInt(s.version,10)<19?a.ref:a.props.ref;return s.cloneElement(a,{..._(h,x,a.props),ref:j(P,t)})});function l(i){return o.jsx(A,{...i})}try{l.displayName="Pressable",l.__docgenInfo={description:"Wraps a react element to make it respond to press events like `Button` does",displayName:"Pressable",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Overlays/OverlayTrigger/Pressable.tsx",methods:[],props:{},tags:{}}}catch{}const Re={title:"Overlays/OverlayTrigger",component:C,parameters:{layout:"centered"},argTypes:{...N,children:{control:!1,description:"The trigger element followed by the overlay element (e.g. `Popover` or `Modal`)."},type:{control:"select",description:"The type of overlay you want to create",options:["dialog","menu","listbox","tree","grid"]}}},n={args:{children:[o.jsx(R,{children:"Open Popover"}),o.jsx(v,{children:o.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted)",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}},c={args:{children:[o.jsx(l,{children:o.jsx("button",{children:"Open Popover"})}),o.jsx(v,{children:o.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted)",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}},Ae=["Primary","CustomTriggerTarget"];var m,d,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: [<Button>Open Popover</Button>, <Popover>
        <div style={{
        backgroundColor: "var(--background-clr-inverted)",
        color: "var(--text-clr-inverted)",
        width: "var(--trigger-width)",
        fontSize: "20px"
      }}>
          Hi There
        </div>
      </Popover>]
  }
}`,...(b=(d=n.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var f,u,g;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<Pressable>
        <button>Open Popover</button>
      </Pressable>, <Popover>
        <div style={{
        backgroundColor: "var(--background-clr-inverted)",
        color: "var(--text-clr-inverted)",
        width: "var(--trigger-width)",
        fontSize: "20px"
      }}>
          Hi There
        </div>
      </Popover>]
  }
}`,...(g=(u=c.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};export{c as CustomTriggerTarget,n as Primary,Ae as __namedExportsOrder,Re as default};
