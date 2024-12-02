import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{$ as h}from"./usePress-DG8LklVH.js";import{a as x,$ as y}from"./useObjectRef-C4RVQRRU.js";import{R as p}from"./index-DJO9vBfz.js";import{O as b}from"./helpers-DsiJys5i.js";import{O as P}from"./OverlayTrigger.component-Brd3S4EU.js";import{B as T}from"./Button.component-Bg3ttyxF.js";import{P as v}from"./Popover.component-CB2Nnidh.js";import"./focusSafely-GXGk_mpd.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./CollectionBuilder-Vf4TV1hX.js";import"./index-DJdX7xnk.js";import"./Section-BBepoPM4.js";import"./useOverlayTrigger-DeiYnLln.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./PressResponder-Dd5vRurA.js";import"./context-p027hjsN.js";import"./Provider-B9Eqn13H.js";import"./context-C5Zmhtj1.js";import"./FocusScope-BKSplYEH.js";import"./useFocusWithin-DOCmU_ML.js";import"./utils-DHlq6CLd.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./Modal.context-CgaJxV6U.js";import"./useOverlayTriggerState-DMR8aBHV.js";import"./useControlledState-CN8sBTKq.js";import"./useFocusRing-MU4psFt8.js";import"./useFocus-C-we61At.js";import"./useRenderProps-BqJZ5b79.js";import"./index-i5X67GZP.js";import"./useButton-GWYvoXvT.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DyKXFx56.js";import"./useKeyboard-A8_doyNT.js";import"./useLink-ytCU544I.js";import"./index-CXdyvu6V.js";import"./mixins-TlkgTuSN.js";import"./SpinnerLoader.component-BS7s8xEm.js";import"./Loader.component-CqkhvLsa.js";import"./index-K1z_EpAd.js";import"./utils-CWBnbg5w.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./useLabels-DtS694vG.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./context-CKyfYUWk.js";import"./VisuallyHidden-BPFT_fih.js";import"./useOverlayPosition-DNw_PjS2.js";import"./number-nHrFdSb-.js";import"./useForwardedRef-BqZ3RrEL.js";const $=p.forwardRef(({children:e,...u},o)=>{o=x(o);let{pressProps:f}=h({...u,ref:o}),a=p.Children.only(e);return p.cloneElement(a,{ref:o,...y(a.props,f)})});function n(e){return r.jsx($,{...e})}try{n.displayName="Pressable",n.__docgenInfo={description:"Wraps a react element to make it respond to press events like `Button` does",displayName:"Pressable",props:{}}}catch{}const $r={title:"Overlays/OverlayTrigger",component:P,parameters:{layout:"centered"},argTypes:{...b,children:{control:!1},type:{control:"select",description:"The type of overlay you want to create",options:["dialog","menu","listbox","tree","grid","composite"]}}},t={args:{children:[r.jsx(T,{children:"Open Popover"}),r.jsx(v,{children:r.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}},i={args:{children:[r.jsx(n,{children:r.jsx("button",{children:"Open Popover"})}),r.jsx(v,{children:r.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}};var s,m,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<Button>Open Popover</Button>, <Popover>
        <div style={{
        backgroundColor: "var(--background-clr-inverted",
        color: "var(--text-clr-inverted)",
        width: "var(--trigger-width)",
        fontSize: "20px"
      }}>
          Hi There
        </div>
      </Popover>]
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,l,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: [<Pressable>
        <button>Open Popover</button>
      </Pressable>, <Popover>
        <div style={{
        backgroundColor: "var(--background-clr-inverted",
        color: "var(--text-clr-inverted)",
        width: "var(--trigger-width)",
        fontSize: "20px"
      }}>
          Hi There
        </div>
      </Popover>]
  }
}`,...(g=(l=i.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const Or=["Primary","CustomTriggerTarget"];export{i as CustomTriggerTarget,t as Primary,Or as __namedExportsOrder,$r as default};
