import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-CdGsxv5d.js";import{M as s,T as a,D as p,P as m,C as l,a as e}from"./index-DCLp_H62.js";import{M as d,P as c,W as h,a as u}from"./Modal.stories-wxSVgM5d.js";import"./index-BCtMShv3.js";import"./iframe-DlczCwSh.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-CxJiuIRp.js";import"./index-vGRGFXvb.js";import"./helpers-DWUIqmOd.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./index-MEy1pH_-.js";import"./index-B-ANkEne.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-Km3Ox9s4.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Modal.component-BVpQxWQH.js";import"./context-fqV0sG25.js";import"./FocusScope-Dv5_DXCK.js";import"./useFocusWithin-BJ0-_hiU.js";import"./usePress-CqXh5MnK.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayTriggerState-wHDN265d.js";import"./PressResponder-BZaXPZ_t.js";import"./useControlledState-vzCMHZvt.js";import"./index-CsiUWFDz.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Modal.context-C8xYzeAB.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Flex.component-C2PgiZIH.js";import"./Heading.component-BEHmqwND.js";import"./typography-B_qJ0BtB.js";import"./colors-x_YFGAop.js";import"./View.component-DSguns9r.js";import"./MaterialIcon.component-lQlqJgWC.js";import"./Icons.styles-qcj_pyb3.js";import"./filterDOMProps-CeZl_uWj.js";import"./Text.component-BJHGTitm.js";import"./Button.component-DI2Y7mE3.js";import"./BaseButton-D0yT_APa.js";import"./mixins-CcgEHb9c.js";import"./useFocusRing-DIS5Kyrs.js";import"./useButton-9RZc7-Gk.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-D438e5kd.js";import"./Loader.component-1e-F28hS.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-B7_86uv1.js";import"./ProgressCircle.component-ddrf-S0A.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./Button.context-BxdzJgC_.js";import"./IconButton.component-Cw9Mlyc_.js";import"./OverlayTrigger.component-CyRCRlXp.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./Popover.context-C-WvC77F.js";import"./Provider-op_UCnZE.js";function r(i){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
`,o.jsx(a,{}),`
`,o.jsx(t.p,{children:"Modals are used to display content on top of other content. They are often used to display alerts, notifications, or to prompt users to take an action."}),`
`,o.jsxs(t.blockquote,{children:[`
`,o.jsx(t.p,{children:"NOTE: The controls in this page are not working currently. Go to a specific story to see the controls in action."}),`
`]}),`
`,o.jsx(p,{}),`
`,o.jsx(m,{}),`
`,o.jsx(l,{}),`
`,o.jsx(t.h2,{id:"composing-modals",children:"Composing Modals"}),`
`,o.jsxs(t.p,{children:[`The presentation of Modals is meant to be composable. Elements provides a set of utility component to help you build your own Modals such as
`,o.jsx(t.code,{children:"Modal.Header"}),", ",o.jsx(t.code,{children:"Modal.Body"}),", and ",o.jsx(t.code,{children:"Modal.Footer"}),"."]}),`
`,o.jsx(e,{of:c}),`
`,o.jsx(t.p,{children:"By default:"}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"Modal.Title"})," fills the entire width of the Modal"]}),`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"Modal.Body"})," adds padding to the top and bottom of the content"]}),`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"Modal.Footer"})," content is right-aligned"]}),`
`]}),`
`,o.jsx(t.p,{children:"Note that these components are optional and you can use them as you see fit."}),`
`,o.jsx(e,{of:h}),`
`,o.jsx(t.h2,{id:"managing-modal-state",children:"Managing Modal State"}),`
`,o.jsxs(t.p,{children:["When using the Modal by itself, you can manage it's state using the ",o.jsx(t.code,{children:"isOpen"})," prop. This prop is a boolean that determines if the Modal is open or not."]}),`
`,o.jsxs(t.p,{children:["You're also able to employ the ",o.jsx(t.a,{href:"?path=/docs/overlays-overlaytrigger--overview",children:"OverlayTrigger"}),` component to manage the state of the Modal.
This component is a wrapper that manages the state of the Modal for you. Make note thatn when you do this, the children of the modal should
be a function that takes a `,o.jsx(t.code,{children:"close"})," function as an argument. Call this function to close the Modal."]}),`
`,o.jsx(e,{of:u})]})}function Xo(i={}){const{wrapper:t}={...n(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(r,{...i})}):r(i)}export{Xo as default};
