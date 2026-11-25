import{u as r,j as o,M as s,T as a,D as p,P as l,C as d,a as n}from"./iframe-CGPW5dgX.js";import{M as m,W as h,P as c,C as x,a as u}from"./Modal.stories-D1FUBTCq.js";import"./preload-helper-Dp1pzeXC.js";import"./helpers-tUmR_xN7.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Modal.component-FNfoIcVj.js";import"./context-ID_07sjv.js";import"./FocusScope-DFxiutEz.js";import"./useFocusWithin-BzfIRRcZ.js";import"./usePress-BioWcz2v.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayTriggerState-DfGm2mCW.js";import"./PressResponder-xHF_wXhX.js";import"./index-C0dagnaq.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./Modal.context-RwEURKo4.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Flex.component-BDldr6hG.js";import"./Heading.component-OIsccaQK.js";import"./typography-DqSTiArL.js";import"./colors-PU9nFmCW.js";import"./View.component-BOuwyr5T.js";import"./IconButton.component-CifirOzj.js";import"./BaseButton-B8bVR-o6.js";import"./mixins-BJuiWlrm.js";import"./useFocusRing-Dbcio0BW.js";import"./useButton-CjI92Tj6.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useNumberFormatter-CgBbBkmi.js";import"./context-CLSG1ylv.js";import"./NumberFormatter-DNR9MAW-.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";import"./Text.component-Br2J6Hgv.js";import"./Button.component-Bd4z0Gnh.js";import"./OverlayTrigger.component-7L8D-EzU.js";import"./useOverlayTrigger-Bavuc6A6.js";import"./useCloseOnScroll-CTNw5Yby.js";import"./Popover.context-D_v2VeGP.js";import"./Provider-CKCHWQEo.js";function i(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:m}),`
`,o.jsx(a,{}),`
`,o.jsx(t.p,{children:"Modals are used to display content on top of other content. They are often used to display alerts, notifications, or to prompt users to take an action."}),`
`,o.jsxs(t.blockquote,{children:[`
`,o.jsx(t.p,{children:"NOTE: The controls in this page are not working currently. Go to a specific story to see the controls in action."}),`
`]}),`
`,o.jsx(p,{}),`
`,o.jsx(l,{}),`
`,o.jsx(d,{}),`
`,o.jsx(t.h2,{id:"composing-modals",children:"Composing Modals"}),`
`,o.jsxs(t.p,{children:[`The presentation of Modals is meant to be composable. Elements provides a set of utility components to help you build your own Modals such as
`,o.jsx(t.code,{children:"Modal.Header"}),", ",o.jsx(t.code,{children:"Modal.Body"}),", and ",o.jsx(t.code,{children:"Modal.Footer"}),", as in the Primary story above."]}),`
`,o.jsx(t.p,{children:"By default:"}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"Modal.Title"})," fills the entire width of the Modal"]}),`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"Modal.Body"})," adds padding to the top and bottom of the content"]}),`
`,o.jsxs(t.li,{children:[o.jsx(t.code,{children:"Modal.Footer"})," content is right-aligned"]}),`
`]}),`
`,o.jsx(t.p,{children:"Note that these components are optional and you can use them as you see fit."}),`
`,o.jsx(n,{of:h}),`
`,o.jsxs(t.p,{children:[`The same helper components work for smaller, single-purpose modals. Use the
style props (here `,o.jsx(t.code,{children:"$width"}),") to size the modal."]}),`
`,o.jsx(n,{of:c}),`
`,o.jsx(t.h2,{id:"centering",children:"Centering"}),`
`,o.jsxs(t.p,{children:["By default the Modal is placed near the top of the viewport. Set ",o.jsx(t.code,{children:"isCentered"})," to center it vertically."]}),`
`,o.jsx(n,{of:x}),`
`,o.jsx(t.h2,{id:"managing-modal-state",children:"Managing Modal State"}),`
`,o.jsxs(t.p,{children:["When using the Modal by itself, you can manage its state using the ",o.jsx(t.code,{children:"isOpen"})," prop. This prop is a boolean that determines if the Modal is open or not."]}),`
`,o.jsxs(t.p,{children:["You're also able to employ the ",o.jsx(t.a,{href:"?path=/docs/overlays-overlaytrigger--overview",children:"OverlayTrigger"}),` component to manage the state of the Modal.
This component is a wrapper that manages the state of the Modal for you. Make note that when you do this, the children of the modal should
be a function that takes a `,o.jsx(t.code,{children:"close"})," function as an argument. Call this function to close the Modal."]}),`
`,o.jsx(n,{of:u})]})}function Mo(e={}){const{wrapper:t}={...r(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(i,{...e})}):i(e)}export{Mo as default};
