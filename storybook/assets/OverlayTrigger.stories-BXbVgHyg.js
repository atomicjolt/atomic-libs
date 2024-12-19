import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{$ as h}from"./usePress-DLdGKM_D.js";import{$ as x,a as y}from"./useObjectRef-B0fXxeND.js";import{R as p}from"./index-DJO9vBfz.js";import{O as b}from"./helpers-vNBwIeRc.js";import{O as P}from"./OverlayTrigger.component-CJ8FdTiR.js";import{B as T}from"./Button.component-CvwjrRb6.js";import{P as v}from"./Popover.component-DzwRr1Vg.js";import"./focusSafely-DAnwb70X.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./CollectionBuilder-DRj8-oKX.js";import"./index-DJdX7xnk.js";import"./Section-BBepoPM4.js";import"./useOverlayTrigger-CznOZ0w1.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./PressResponder-BPXFM0Rx.js";import"./Popover.context-8QQeO7WZ.js";import"./index-B_KxbAnX.js";import"./Provider-B9Eqn13H.js";import"./context-C20uxASh.js";import"./FocusScope-F7zojRTj.js";import"./useFocusWithin-Dppy9HPm.js";import"./utils-BwOaQS7j.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./Modal.context-COWGSB41.js";import"./useOverlayTriggerState-CQYPpINQ.js";import"./useControlledState-CN8sBTKq.js";import"./useFocusRing-DokLxauV.js";import"./useFocus-CqC7M1wJ.js";import"./useRenderProps-BqJZ5b79.js";import"./index-i5X67GZP.js";import"./useButton-CctGfIuY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CsZREXhx.js";import"./useKeyboard-A8_doyNT.js";import"./useLink-BfspLt2l.js";import"./mixins-TlkgTuSN.js";import"./SpinnerLoader.component-Bg5XyiJ8.js";import"./Loader.component-D2-tScza.js";import"./index-CiylWqPi.js";import"./utils-CWBnbg5w.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./useLabels-DVGDEngn.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./context-CKyfYUWk.js";import"./VisuallyHidden-Co53BRDr.js";import"./useOverlayPosition-C9xJM2-X.js";import"./number-nHrFdSb-.js";import"./useForwardedRef-BqZ3RrEL.js";const $=p.forwardRef(({children:e,...u},o)=>{o=x(o);let{pressProps:f}=h({...u,ref:o}),a=p.Children.only(e);return p.cloneElement(a,{ref:o,...y(a.props,f)})});function n(e){return r.jsx($,{...e})}try{n.displayName="Pressable",n.__docgenInfo={description:"Wraps a react element to make it respond to press events like `Button` does",displayName:"Pressable",props:{}}}catch{}const $r={title:"Overlays/OverlayTrigger",component:P,parameters:{layout:"centered"},argTypes:{...b,children:{control:!1},type:{control:"select",description:"The type of overlay you want to create",options:["dialog","menu","listbox","tree","grid","composite"]}}},t={args:{children:[r.jsx(T,{children:"Open Popover"}),r.jsx(v,{children:r.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}},i={args:{children:[r.jsx(n,{children:r.jsx("button",{children:"Open Popover"})}),r.jsx(v,{children:r.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}};var s,m,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
