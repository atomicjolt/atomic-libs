import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{$ as h}from"./usePress-Cu0aM-K5.js";import{a as x,b}from"./useObjectRef-BKue9pYL.js";import{R as p}from"./index-DJO9vBfz.js";import{O as y}from"./helpers-D-Gur9Js.js";import{O as P}from"./OverlayTrigger.component-DyBQFlN3.js";import{B as T}from"./Button.component-Bfqq8odl.js";import{P as v}from"./Popover.component-Dlw6ucoT.js";import"./focusSafely-BOUv7I-8.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-C0DXmw5d.js";import"./index-CyCRagT9.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./useOverlayTrigger-DEPcgMBT.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./PressResponder-Dqe7WJHR.js";import"./Popover.context-Iv_xuGDi.js";import"./index-De95zDiF.js";import"./Provider-B9Eqn13H.js";import"./context-C_Tf37_9.js";import"./FocusScope-BnAoeAyt.js";import"./useFocusWithin-DSbUfD8x.js";import"./utils-Df1WEgxG.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./Modal.context-CVWuW54q.js";import"./useOverlayTriggerState-BXapIe9V.js";import"./useControlledState-CN8sBTKq.js";import"./useFocusRing-CPkBIT8D.js";import"./useFocus-DJe2BRHe.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./useButton-AoKYWM9F.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-o0N_IkwX.js";import"./useKeyboard-A8_doyNT.js";import"./useLink-ByNL9j8X.js";import"./mixins-B7X2BZyR.js";import"./SpinnerLoader.component-qW2PqPLJ.js";import"./Loader.component-l5wuRCiG.js";import"./Flex.component-DqBL6Xjb.js";import"./layout-B6NAx4l9.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-D3qB71XV.js";import"./ProgressCircle.component-DZo3rxOV.js";import"./useLabel-CSTUXoQW.js";import"./useLabels-B24R2YQq.js";import"./useNumberFormatter-D5qg7lg6.js";import"./context-BQ3_Es2z.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./VisuallyHidden-C_KI20v8.js";import"./useOverlayPosition-DFJP1Pe4.js";import"./useForwardedRef-BqZ3RrEL.js";const $=p.forwardRef(({children:o,...u},e)=>{e=x(e);let{pressProps:f}=h({...u,ref:e}),a=p.Children.only(o);return p.cloneElement(a,{ref:e,...b(a.props,f)})});function n(o){return r.jsx($,{...o})}try{n.displayName="Pressable",n.__docgenInfo={description:"Wraps a react element to make it respond to press events like `Button` does",displayName:"Pressable",props:{}}}catch{}const Rr={title:"Overlays/OverlayTrigger",component:P,parameters:{layout:"centered"},argTypes:{...y,children:{control:!1},type:{control:"select",description:"The type of overlay you want to create",options:["dialog","menu","listbox","tree","grid","composite"]}}},t={args:{children:[r.jsx(T,{children:"Open Popover"}),r.jsx(v,{children:r.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}},i={args:{children:[r.jsx(n,{children:r.jsx("button",{children:"Open Popover"})}),r.jsx(v,{children:r.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}};var m,s,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,l,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(l=i.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const Er=["Primary","CustomTriggerTarget"];export{i as CustomTriggerTarget,t as Primary,Er as __namedExportsOrder,Rr as default};
