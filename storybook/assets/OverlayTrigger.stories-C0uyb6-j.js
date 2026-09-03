import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{$ as P}from"./usePress-CqXh5MnK.js";import{$ as y,i as w,p as T}from"./useFocusable-DacP9xvE.js";import{a as k,b as O}from"./useObjectRef-D2RG7rRi.js";import{$ as _}from"./index-CsiUWFDz.js";import{R as p,r as j}from"./index-BCtMShv3.js";import"./index-q4Ci4zqT.js";import{O as N}from"./helpers-COKOCgZ2.js";import{O as C}from"./OverlayTrigger.component-NMNZklfn.js";import{P as g}from"./Popover.component-CMEV1N-R.js";import{B as R}from"./Button.component-Cn3AYlqZ.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./SSRProvider-DyiXDq2k.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./index-CxJiuIRp.js";import"./index-MEy1pH_-.js";import"./index-BwhQhY7a.js";import"./index-B-ANkEne.js";import"./index-CEkc_6Jz.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-Km3Ox9s4.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./PressResponder-BZaXPZ_t.js";import"./Popover.context-C-WvC77F.js";import"./Provider-op_UCnZE.js";import"./context-fqV0sG25.js";import"./FocusScope-Dv5_DXCK.js";import"./useFocusWithin-BJ0-_hiU.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./Modal.context-C8xYzeAB.js";import"./useOverlayTriggerState-wHDN265d.js";import"./useControlledState-vzCMHZvt.js";import"./useLabels-B8dXFA8d.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./VisuallyHidden-CdgZn78T.js";import"./useOverlayPosition-CUQlxOSl.js";import"./number-nHrFdSb-.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./useForwardedRef-Tweo1nQG.js";import"./BaseButton-CUqv1GBj.js";import"./mixins-CcgEHb9c.js";import"./useFocusRing-DIS5Kyrs.js";import"./useButton-9RZc7-Gk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-BuWOnu1_.js";import"./Loader.component-BxVHsopH.js";import"./Flex.component-C2PgiZIH.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-B7_86uv1.js";import"./ProgressCircle.component-ddrf-S0A.js";import"./useLabel-DDcndmXW.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-BxdzJgC_.js";const A=p.forwardRef(({children:i,...m},t)=>{t=k(t);let{pressProps:h}=P({...m,ref:t}),{focusableProps:x}=y(m,t),a=p.Children.only(i);j.useEffect(()=>{let e=t.current;if(!e||!(e instanceof w(e).Element)){console.error("<Pressable> child must forward its ref to a DOM element.");return}if(!T(e)){console.warn("<Pressable> child must be focusable. Please ensure the tabIndex prop is passed through.");return}if(e.localName!=="button"&&e.localName!=="input"&&e.localName!=="select"&&e.localName!=="textarea"&&e.localName!=="a"&&e.localName!=="area"&&e.localName!=="summary"){let r=e.getAttribute("role");r?r!=="application"&&r!=="button"&&r!=="checkbox"&&r!=="combobox"&&r!=="gridcell"&&r!=="link"&&r!=="menuitem"&&r!=="menuitemcheckbox"&&r!=="menuitemradio"&&r!=="option"&&r!=="radio"&&r!=="searchbox"&&r!=="separator"&&r!=="slider"&&r!=="spinbutton"&&r!=="switch"&&r!=="tab"&&r!=="textbox"&&r!=="treeitem"&&console.warn(`<Pressable> child must have an interactive ARIA role. Got "${r}".`):console.warn("<Pressable> child must have an interactive ARIA role.")}},[t]);let $=parseInt(p.version,10)<19?a.ref:a.props.ref;return p.cloneElement(a,{...O(h,x,a.props),ref:_($,t)})});function c(i){return o.jsx(A,{...i})}try{c.displayName="Pressable",c.__docgenInfo={description:"Wraps a react element to make it respond to press events like `Button` does",displayName:"Pressable",props:{}}}catch{}const Jr={title:"Overlays/OverlayTrigger",component:C,parameters:{layout:"centered"},argTypes:{...N,children:{control:!1},type:{control:"select",description:"The type of overlay you want to create",options:["dialog","menu","listbox","tree","grid","composite"]}}},s={args:{children:[o.jsx(R,{children:"Open Popover"}),o.jsx(g,{children:o.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}},n={args:{children:[o.jsx(c,{children:o.jsx("button",{children:"Open Popover"})}),o.jsx(g,{children:o.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}};var l,d,f;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(d=s.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var b,u,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const Kr=["Primary","CustomTriggerTarget"];export{n as CustomTriggerTarget,s as Primary,Kr as __namedExportsOrder,Jr as default};
