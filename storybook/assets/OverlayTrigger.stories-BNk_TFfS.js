import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{$ as P}from"./usePress-Cxy0og0d.js";import{$ as y,i as w,p as T}from"./useFocusable-B7cTVP20.js";import{a as k,b as O}from"./useObjectRef-BO7mrmvR.js";import{$ as _}from"./index-CqJC2f1M.js";import{R as s,r as j}from"./index-DmM0KDA7.js";import{P as g}from"./index-BapQbWJp.js";import{O as N}from"./helpers-CeNUlk3Q.js";import{O as C}from"./OverlayTrigger.component-C9QlOMhL.js";import{B as R}from"./Button.component-DnMutOi6.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./SSRProvider-nIDwi1ZO.js";import"./useLabels-D0NjiLiF.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./context-BF7eBGFA.js";import"./VisuallyHidden-BPDCoBu-.js";import"./useFocusWithin-CrVHK3Cv.js";import"./context-D5CkyXRW.js";import"./FocusScope-CLRP0VYY.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayPosition-DkePAkjV.js";import"./ProgressCircle.component-C7gS1D9i.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-B1sX0IQZ.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./colors-x_YFGAop.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./useOverlayTriggerState-3VWy5d8s.js";import"./PressResponder-D-PDHmhd.js";import"./useControlledState-sJfMLWrs.js";import"./CollectionBuilder-BOiBnYCj.js";import"./useForwardedRef-BWfLegUW.js";import"./Popover.context-CkZWeej5.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-CfmUX7eJ.js";import"./useOverlayTrigger-BaVZjogA.js";import"./Provider-op_UCnZE.js";import"./Modal.context-CnJk84dQ.js";import"./useFocusRing-4PdL76fJ.js";import"./useButton-DlM8S39G.js";import"./useLink-CqmZ9M1P.js";import"./mixins-CgZ-Dp8B.js";import"./SpinnerLoader.component-ofOICTG5.js";import"./Loader.component-DWq-vdAK.js";import"./index-B1DW8wg7.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-CjtUOFd5.js";const A=s.forwardRef(({children:i,...l},t)=>{t=k(t);let{pressProps:h}=P({...l,ref:t}),{focusableProps:x}=y(l,t),a=s.Children.only(i);j.useEffect(()=>{let e=t.current;if(!e||!(e instanceof w(e).Element)){console.error("<Pressable> child must forward its ref to a DOM element.");return}if(!T(e)){console.warn("<Pressable> child must be focusable. Please ensure the tabIndex prop is passed through.");return}if(e.localName!=="button"&&e.localName!=="input"&&e.localName!=="select"&&e.localName!=="textarea"&&e.localName!=="a"&&e.localName!=="area"&&e.localName!=="summary"){let r=e.getAttribute("role");r?r!=="application"&&r!=="button"&&r!=="checkbox"&&r!=="combobox"&&r!=="gridcell"&&r!=="link"&&r!=="menuitem"&&r!=="menuitemcheckbox"&&r!=="menuitemradio"&&r!=="option"&&r!=="radio"&&r!=="searchbox"&&r!=="separator"&&r!=="slider"&&r!=="spinbutton"&&r!=="switch"&&r!=="tab"&&r!=="textbox"&&r!=="treeitem"&&console.warn(`<Pressable> child must have an interactive ARIA role. Got "${r}".`):console.warn("<Pressable> child must have an interactive ARIA role.")}},[t]);let $=parseInt(s.version,10)<19?a.ref:a.props.ref;return s.cloneElement(a,{...O(h,x,a.props),ref:_($,t)})});function c(i){return o.jsx(A,{...i})}try{c.displayName="Pressable",c.__docgenInfo={description:"Wraps a react element to make it respond to press events like `Button` does",displayName:"Pressable",props:{}}}catch{}const Br={title:"Overlays/OverlayTrigger",component:C,parameters:{layout:"centered"},argTypes:{...N,children:{control:!1},type:{control:"select",description:"The type of overlay you want to create",options:["dialog","menu","listbox","tree","grid","composite"]}}},n={args:{children:[o.jsx(R,{children:"Open Popover"}),o.jsx(g,{children:o.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}},p={args:{children:[o.jsx(c,{children:o.jsx("button",{children:"Open Popover"})}),o.jsx(g,{children:o.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}};var m,d,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(d=n.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var b,u,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(u=p.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const Ir=["Primary","CustomTriggerTarget"];export{p as CustomTriggerTarget,n as Primary,Ir as __namedExportsOrder,Br as default};
