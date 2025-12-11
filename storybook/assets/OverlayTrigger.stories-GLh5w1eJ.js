import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{$ as P}from"./usePress-CzUfyTu7.js";import{$ as y,i as w,p as T}from"./useFocusable-DacP9xvE.js";import{a as k,b as O}from"./useObjectRef-D2RG7rRi.js";import{$ as _}from"./index-CsiUWFDz.js";import{R as s,r as j}from"./index-BCtMShv3.js";import{O as N}from"./helpers-C1PCfQ2p.js";import{O as C}from"./OverlayTrigger.component-Daj8tzJT.js";import{B as R}from"./Button.component-1z4llAVV.js";import{P as g}from"./Popover.component-DU1QQjMh.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./SSRProvider-DyiXDq2k.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./PressResponder-Ct7jIFb_.js";import"./Popover.context-C-WvC77F.js";import"./Provider-op_UCnZE.js";import"./context-AES9ne4t.js";import"./FocusScope-DX4qyq_T.js";import"./useFocusWithin-AgzTPs3-.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./Modal.context-C8xYzeAB.js";import"./useOverlayTriggerState-e1JH9f22.js";import"./useControlledState-vzCMHZvt.js";import"./BaseButton-DkkfbyGM.js";import"./mixins-XviowZ_6.js";import"./useFocusRing-88kjlAJd.js";import"./useButton-DYDUZLxM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-D8UViwUR.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./SpinnerLoader.component-BBuqQ2fu.js";import"./Loader.component-oO6726Rg.js";import"./index-DzGcUmQS.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C44VOTWe.js";import"./ProgressCircle.component-_TQleApR.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-BxdzJgC_.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./VisuallyHidden-zwVgBnCN.js";import"./useOverlayPosition-CUQlxOSl.js";import"./useForwardedRef-Tweo1nQG.js";const A=s.forwardRef(({children:i,...l},t)=>{t=k(t);let{pressProps:h}=P({...l,ref:t}),{focusableProps:x}=y(l,t),a=s.Children.only(i);j.useEffect(()=>{let e=t.current;if(!e||!(e instanceof w(e).Element)){console.error("<Pressable> child must forward its ref to a DOM element.");return}if(!T(e)){console.warn("<Pressable> child must be focusable. Please ensure the tabIndex prop is passed through.");return}if(e.localName!=="button"&&e.localName!=="input"&&e.localName!=="select"&&e.localName!=="textarea"&&e.localName!=="a"&&e.localName!=="area"&&e.localName!=="summary"){let r=e.getAttribute("role");r?r!=="application"&&r!=="button"&&r!=="checkbox"&&r!=="combobox"&&r!=="gridcell"&&r!=="link"&&r!=="menuitem"&&r!=="menuitemcheckbox"&&r!=="menuitemradio"&&r!=="option"&&r!=="radio"&&r!=="searchbox"&&r!=="separator"&&r!=="slider"&&r!=="spinbutton"&&r!=="switch"&&r!=="tab"&&r!=="textbox"&&r!=="treeitem"&&console.warn(`<Pressable> child must have an interactive ARIA role. Got "${r}".`):console.warn("<Pressable> child must have an interactive ARIA role.")}},[t]);let $=parseInt(s.version,10)<19?a.ref:a.props.ref;return s.cloneElement(a,{...O(h,x,a.props),ref:_($,t)})});function c(i){return o.jsx(A,{...i})}try{c.displayName="Pressable",c.__docgenInfo={description:"Wraps a react element to make it respond to press events like `Button` does",displayName:"Pressable",props:{}}}catch{}const Hr={title:"Overlays/OverlayTrigger",component:C,parameters:{layout:"centered"},argTypes:{...N,children:{control:!1},type:{control:"select",description:"The type of overlay you want to create",options:["dialog","menu","listbox","tree","grid","composite"]}}},n={args:{children:[o.jsx(R,{children:"Open Popover"}),o.jsx(g,{children:o.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}},p={args:{children:[o.jsx(c,{children:o.jsx("button",{children:"Open Popover"})}),o.jsx(g,{children:o.jsx("div",{style:{backgroundColor:"var(--background-clr-inverted",color:"var(--text-clr-inverted)",width:"var(--trigger-width)",fontSize:"20px"},children:"Hi There"})})]}};var m,d,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(u=p.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const Dr=["Primary","CustomTriggerTarget"];export{p as CustomTriggerTarget,n as Primary,Dr as __namedExportsOrder,Hr as default};
