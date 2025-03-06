import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{$ as h}from"./usePress-DBLAzBwe.js";import{b as x,a as b}from"./useObjectRef-CA0MXmrf.js";import{R as p}from"./index-DJO9vBfz.js";import{O as y}from"./helpers-CB0EgwPk.js";import{O as P}from"./OverlayTrigger.component-DOWxlJTN.js";import{B as T}from"./Button.component-7ZEnE2xC.js";import{P as v}from"./Popover.component-CMdXs4Vo.js";import"./focusSafely-BOUv7I-8.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./useOverlayTrigger-1aF1CP0g.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./PressResponder-DHeHotEt.js";import"./Popover.context-aAMlw-9Y.js";import"./index-CHPAqjqs.js";import"./Provider-B9Eqn13H.js";import"./context-BILoGgXl.js";import"./FocusScope-BnAoeAyt.js";import"./useFocusWithin-Bb3mfDwa.js";import"./utils-CrQpPYo7.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./Modal.context-D1I3T6SQ.js";import"./useOverlayTriggerState-B9DFGNg6.js";import"./useControlledState-CN8sBTKq.js";import"./useFocusRing-PETNqKnG.js";import"./useFocus-DXSPV_um.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./useButton-Bk3lNUMb.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DHL4UX94.js";import"./useKeyboard-A8_doyNT.js";import"./useLink-XD5ax7xG.js";import"./mixins-B7X2BZyR.js";import"./SpinnerLoader.component-BvhIBz4v.js";import"./Loader.component-BDvxQSI3.js";import"./index-5u02HfcA.js";import"./layout-UyCWIQlE.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-CK7MNkmm.js";import"./ProgressCircle.component-BbXhAaqf.js";import"./useLabel-CTphHQ-t.js";import"./useLabels-6dTMP4oW.js";import"./useNumberFormatter-D5qg7lg6.js";import"./context-BQ3_Es2z.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./VisuallyHidden-CFly2HD4.js";import"./useOverlayPosition-DJHgNtuZ.js";import"./useForwardedRef-BqZ3RrEL.js";const $=p.forwardRef(({children:o,...u},e)=>{e=x(e);let{pressProps:f}=h({...u,ref:e}),a=p.Children.only(o);return p.cloneElement(a,{ref:e,...b(a.props,f)})});function n(o){return r.jsx($,{...o})}try{n.displayName="Pressable",n.__docgenInfo={description:"Wraps a react element to make it respond to press events like `Button` does",displayName:"Pressable",props:{}}}catch{}const Sr={title:"Overlays/OverlayTrigger",component:P,parameters:{layout:"centered"},argTypes:{...y,children:{control:!1},type:{control:"select",description:"The type of overlay you want to create",options:["dialog","menu","listbox","tree","grid","composite"]}}},t={args:{children:[r.jsx(T,{children:"Open Popover"}),r.jsx(v,{children:r.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}},i={args:{children:[r.jsx(n,{children:r.jsx("button",{children:"Open Popover"})}),r.jsx(v,{children:r.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}};var s,m,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(g=(l=i.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const Br=["Primary","CustomTriggerTarget"];export{i as CustomTriggerTarget,t as Primary,Br as __namedExportsOrder,Sr as default};
