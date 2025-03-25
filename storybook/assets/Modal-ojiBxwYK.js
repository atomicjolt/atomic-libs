import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-CePRvBtH.js";import{M as s,T as a,D as p,P as m,C as l,a as i}from"./index-BNIK8PK4.js";import{M as d,P as c,W as h,a as u}from"./Modal.stories-n-kJTNgX.js";import"./index-DmM0KDA7.js";import"./iframe-tCp2RaKh.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DklmvzLu.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Icons.styles-D2L4nNgu.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./useObjectRef-BMBYa31u.js";import"./SSRProvider-nIDwi1ZO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DDF3Tgcq.js";import"./helpers-CVUqcLcb.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-Blx8idkz.js";import"./CollectionBuilder-C8aBQCuV.js";import"./Modal.component-LYHROGKS.js";import"./context-Cc6JC_Nk.js";import"./FocusScope-DY128LIr.js";import"./useFocusWithin-ypR2cHkl.js";import"./usePress-BejIIMCm.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayTriggerState-DiYlioC9.js";import"./PressResponder-XOPwQlQI.js";import"./useControlledState-sJfMLWrs.js";import"./index-9MQGFWEg.js";import"./Modal.context-CEFDlZ_N.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./Flex.component-CLGTqHVr.js";import"./Heading.component-DNr7a6me.js";import"./typography-B_qJ0BtB.js";import"./colors-x_YFGAop.js";import"./index-DHvmYUXb.js";import"./IconButton.component-8BWc45Fv.js";import"./Button.component-CO_EKNnI.js";import"./useFocusRing-CMFCJy1v.js";import"./useButton-EuBryRSZ.js";import"./useLink-ytEWay4y.js";import"./mixins-CgZ-Dp8B.js";import"./SpinnerLoader.component-C3aOYr0J.js";import"./Loader.component-CkFYGCWL.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-CXWvSCLl.js";import"./ProgressCircle.component-DE6AAkbz.js";import"./useLabel-C1USB2dP.js";import"./useLabels-DqNC8NnF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./Text.component-DChUDnK7.js";import"./OverlayTrigger.component-Cw-UI5v9.js";import"./useOverlayTrigger-DR7rG5da.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./Popover.context-Cb09Dlmi.js";import"./Provider-op_UCnZE.js";function r(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
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
`,o.jsx(i,{of:u})]})}function Do(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(r,{...e})}):r(e)}export{Do as default};
