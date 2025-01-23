import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{$ as h}from"./usePress-DOH0gK78.js";import{$ as x,a as y}from"./useObjectRef-CjtaasUj.js";import{R as p}from"./index-DJO9vBfz.js";import{O as b}from"./helpers-fQWfWkgV.js";import{O as P}from"./OverlayTrigger.component-DxUIsmls.js";import{B as T}from"./Button.component-DtbpFVXN.js";import{P as v}from"./Popover.component-C_GNLa8i.js";import"./focusSafely-f-NvfehK.js";import"./SSRProvider-DAMUgb6s.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./layout-qoR695S7.js";import"./utils-2VFVy79V.js";import"./Collection-DjPHrlSR.js";import"./CollectionBuilder-JuF9vAdV.js";import"./index-DJdX7xnk.js";import"./index-Co2NqHf1.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./useOverlayTrigger-BMp1DQII.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./PressResponder-DcoPugtK.js";import"./Popover.context--7q0wYv0.js";import"./Provider-B9Eqn13H.js";import"./context-C-yxdEES.js";import"./FocusScope-D8kX7o4N.js";import"./useFocusWithin-BwiFBvMF.js";import"./utils-Bz-oJdcG.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./Modal.context-DYVCbjuu.js";import"./useOverlayTriggerState-D-lvPMs5.js";import"./useControlledState-CN8sBTKq.js";import"./useFocusRing-CkPe2VLa.js";import"./useFocus-zOn8SIU-.js";import"./useButton-CK1XMKNi.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CRaVIClu.js";import"./useKeyboard-A8_doyNT.js";import"./useLink-Bis7wRJn.js";import"./mixins-D6ZuOvce.js";import"./SpinnerLoader.component-CZS0l4HJ.js";import"./Loader.component-DTNPwaWm.js";import"./Flex.component-BqyhhyXT.js";import"./Checkmark.component-DV3x2bJU.js";import"./Spinner.component-LKZLOMLe.js";import"./useLabels-DvZR7g99.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./VisuallyHidden-NGXyR_YU.js";import"./useOverlayPosition-aJa5QpHr.js";import"./number-nHrFdSb-.js";import"./useForwardedRef-BqZ3RrEL.js";const $=p.forwardRef(({children:e,...u},o)=>{o=x(o);let{pressProps:f}=h({...u,ref:o}),a=p.Children.only(e);return p.cloneElement(a,{ref:o,...y(a.props,f)})});function n(e){return r.jsx($,{...e})}try{n.displayName="Pressable",n.__docgenInfo={description:"Wraps a react element to make it respond to press events like `Button` does",displayName:"Pressable",props:{}}}catch{}const $r={title:"Overlays/OverlayTrigger",component:P,parameters:{layout:"centered"},argTypes:{...b,children:{control:!1},type:{control:"select",description:"The type of overlay you want to create",options:["dialog","menu","listbox","tree","grid","composite"]}}},t={args:{children:[r.jsx(T,{children:"Open Popover"}),r.jsx(v,{children:r.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}},i={args:{children:[r.jsx(n,{children:r.jsx("button",{children:"Open Popover"})}),r.jsx(v,{children:r.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}};var s,m,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
