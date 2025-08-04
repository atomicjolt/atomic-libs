import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-CdGsxv5d.js";import{M as s,T as a,D as p,P as m,C as l,a as i}from"./index-BkUeMI0T.js";import{M as d,P as c,W as h,a as u}from"./Modal.stories-DB-f-bWm.js";import"./index-BCtMShv3.js";import"./iframe-GegOmZBR.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-Kxe94rmw.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./Button.component-hmpGVD3T.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useFocusRing-88kjlAJd.js";import"./useFocusable-DacP9xvE.js";import"./useFocusWithin-AgzTPs3-.js";import"./usePress-CzUfyTu7.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./useButton-DYDUZLxM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-D8UViwUR.js";import"./index-CsiUWFDz.js";import"./mixins-XviowZ_6.js";import"./Button.context-BxdzJgC_.js";import"./SpinnerLoader.component-C_K4mxuU.js";import"./Loader.component-Dn_RRXu2.js";import"./Flex.component-BTH7Jim3.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C44VOTWe.js";import"./ProgressCircle.component-_TQleApR.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-D-WEWX5Y.js";import"./Icons.styles-D-JqKhr6.js";import"./helpers-C1PCfQ2p.js";import"./scale-CqCDTNu0.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./Modal.component-B2D8MVQ0.js";import"./context-AES9ne4t.js";import"./FocusScope-DX4qyq_T.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayTriggerState-e1JH9f22.js";import"./PressResponder-Ct7jIFb_.js";import"./useControlledState-vzCMHZvt.js";import"./Modal.context-C8xYzeAB.js";import"./Heading.component-7pgoIKIJ.js";import"./typography-B_qJ0BtB.js";import"./index-V5Hbp4UL.js";import"./Text.component-DcLYVgn1.js";import"./OverlayTrigger.component-WdRwzR9I.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./Popover.context-C-WvC77F.js";import"./Provider-op_UCnZE.js";function r(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
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
