import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-CdGsxv5d.js";import{M as s,T as a,D as p,P as m,C as l,a as i}from"./index-ClruFn70.js";import{M as d,P as c,W as h,a as u}from"./Modal.stories-CFJr8hcU.js";import"./index-BCtMShv3.js";import"./iframe-39mtZpPK.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-SPKsbD02.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Icons.styles-D-JqKhr6.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-B7HbK8LX.js";import"./index-DUZltnz9.js";import"./index-C_lK3xe_.js";import"./typography-B_qJ0BtB.js";import"./scale-CqCDTNu0.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./colors-x_YFGAop.js";import"./helpers-DOVaRqs_.js";import"./Collection-C2kgHJSW.js";import"./CollectionBuilder-4ZFsDDvv.js";import"./Modal.component-CpsDR-wK.js";import"./context-XEak4h-o.js";import"./FocusScope-BPqc7wak.js";import"./useFocusWithin-J-xELNez.js";import"./usePress-CzPFgv00.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayTriggerState-RNOws59S.js";import"./PressResponder-BCICcMDM.js";import"./useControlledState-vzCMHZvt.js";import"./Modal.context-DeNpn0p-.js";import"./index-BqqCK9sT.js";import"./Heading.component-KWSE8gU8.js";import"./index-Da1sTSEb.js";import"./IconButton.component-C57JyDaI.js";import"./Button.component-I4DbnubE.js";import"./useFocusRing-BT9oCgfs.js";import"./useButton-CIXIyXj7.js";import"./useLink-C_TmUO2i.js";import"./mixins-XviowZ_6.js";import"./Button.context-e0zTg6D5.js";import"./SpinnerLoader.component-CZyqbQAt.js";import"./Loader.component-Bbv54XPB.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-CKgxLGDu.js";import"./ProgressCircle.component-BOqryRrp.js";import"./number-nHrFdSb-.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./OverlayTrigger.component-pOX8prd7.js";import"./useOverlayTrigger-DK-ooV0I.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./Popover.context-wYAB1U4T.js";import"./Provider-op_UCnZE.js";function r(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
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
`,o.jsx(i,{of:u})]})}function Po(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(r,{...e})}):r(e)}export{Po as default};
