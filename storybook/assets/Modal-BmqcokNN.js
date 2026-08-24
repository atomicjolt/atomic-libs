import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-CdGsxv5d.js";import{M as s,T as a,D as p,P as m,C as l,a as i}from"./index-CoJj3zVt.js";import{M as d,P as c,W as h,a as u}from"./Modal.stories-DFRxpjTI.js";import"./index-BCtMShv3.js";import"./iframe-VnQcOYfe.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-BF7xWl-o.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Icons.styles-qcj_pyb3.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-B7HbK8LX.js";import"./index-DQ-tAGWh.js";import"./index-C_lK3xe_.js";import"./typography-B_qJ0BtB.js";import"./scale-CqCDTNu0.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./colors-x_YFGAop.js";import"./helpers-B3wxvxjs.js";import"./Collection-DwMxgycI.js";import"./CollectionBuilder-L_wKxqRd.js";import"./Modal.component-CQL55af4.js";import"./context-BGWN95Kf.js";import"./FocusScope-CZScMWlh.js";import"./useFocusWithin-dfJl9rAf.js";import"./usePress-BJ4Xpz5E.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayTriggerState-B3l5rho6.js";import"./PressResponder-BmlOUkeL.js";import"./useControlledState-vzCMHZvt.js";import"./Modal.context-DeNpn0p-.js";import"./index-BKev5x84.js";import"./Heading.component-sM17ECyq.js";import"./index-DAyhWPJ6.js";import"./Button.component-JOg2k4vO.js";import"./BaseButton-CwnCOld0.js";import"./mixins-CcgEHb9c.js";import"./useFocusRing-zxvArQTZ.js";import"./useButton-B6TSBwA2.js";import"./useLink-C7Cuty20.js";import"./SpinnerLoader.component-BFCzRJko.js";import"./Loader.component-NaMQrsd0.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-TZts3DK4.js";import"./ProgressCircle.component-C9C-EnQN.js";import"./number-nHrFdSb-.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./Button.context-e0zTg6D5.js";import"./IconButton.component-D9hucJFA.js";import"./OverlayTrigger.component-CWJ07qUx.js";import"./useOverlayTrigger-DK-ooV0I.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./Popover.context-wYAB1U4T.js";import"./Provider-op_UCnZE.js";function r(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
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
`,o.jsx(i,{of:c}),`
`,o.jsx(t.p,{children:"By default:"}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"Modal.Title"})," fills the entire width of the Modal"]}),`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"Modal.Body"})," adds padding to the top and bottom of the content"]}),`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"Modal.Footer"})," content is right-aligned"]}),`
`]}),`
`,o.jsx(t.p,{children:"Note that these components are optional and you can use them as you see fit."}),`
`,o.jsx(i,{of:h}),`
`,o.jsx(t.h2,{id:"managing-modal-state",children:"Managing Modal State"}),`
`,o.jsxs(t.p,{children:["When using the Modal by itself, you can manage it's state using the ",o.jsx(t.code,{children:"isOpen"})," prop. This prop is a boolean that determines if the Modal is open or not."]}),`
`,o.jsxs(t.p,{children:["You're also able to employ the ",o.jsx(t.a,{href:"?path=/docs/overlays-overlaytrigger--overview",children:"OverlayTrigger"}),` component to manage the state of the Modal.
This component is a wrapper that manages the state of the Modal for you. Make note thatn when you do this, the children of the modal should
be a function that takes a `,o.jsx(t.code,{children:"close"})," function as an argument. Call this function to close the Modal."]}),`
`,o.jsx(i,{of:u})]})}function Wo(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(r,{...e})}):r(e)}export{Wo as default};
