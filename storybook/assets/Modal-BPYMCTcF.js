import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as n}from"./index-BrnU7xv7.js";import{ae as s,af as a,ah as p,ai as m,aj as l,ak as e}from"./index-d1QbLqAM.js";import{M as d,P as c,W as h,a as u}from"./Modal.stories-4dgjukkL.js";import"./index-DJO9vBfz.js";import"./iframe-Cu1kCRda.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";import"./index-jGwUeqkW.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./Icons.styles-BaNpbbIh.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./useObjectRef-CA0MXmrf.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DHL4UX94.js";import"./focusSafely-BOUv7I-8.js";import"./useFocus-DXSPV_um.js";import"./utils-CrQpPYo7.js";import"./useKeyboard-A8_doyNT.js";import"./helpers-CB0EgwPk.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./Modal.component-BriGRKUn.js";import"./context-BILoGgXl.js";import"./FocusScope-BnAoeAyt.js";import"./useFocusWithin-Bb3mfDwa.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayTriggerState-B9DFGNg6.js";import"./PressResponder-DHeHotEt.js";import"./usePress-DBLAzBwe.js";import"./useControlledState-CN8sBTKq.js";import"./index-CHPAqjqs.js";import"./Modal.context-D1I3T6SQ.js";import"./layout-UyCWIQlE.js";import"./utils-2VFVy79V.js";import"./index-5u02HfcA.js";import"./Heading.component-C5AnD8Hw.js";import"./typography-B_qJ0BtB.js";import"./colors-x_YFGAop.js";import"./index-CwFJb3A2.js";import"./IconButton.component-CFNeuELj.js";import"./Button.component-7ZEnE2xC.js";import"./useFocusRing-PETNqKnG.js";import"./useButton-Bk3lNUMb.js";import"./useLink-XD5ax7xG.js";import"./mixins-B7X2BZyR.js";import"./SpinnerLoader.component-BvhIBz4v.js";import"./Loader.component-BDvxQSI3.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-CK7MNkmm.js";import"./ProgressCircle.component-BbXhAaqf.js";import"./useLabel-CTphHQ-t.js";import"./useLabels-6dTMP4oW.js";import"./useNumberFormatter-D5qg7lg6.js";import"./context-BQ3_Es2z.js";import"./NumberFormatter-DNR9MAW-.js";import"./Text.component-EtjVwgso.js";import"./OverlayTrigger.component-DOWxlJTN.js";import"./useOverlayTrigger-1aF1CP0g.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./Popover.context-aAMlw-9Y.js";import"./Provider-B9Eqn13H.js";function r(i){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
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
`,o.jsx(e,{of:u})]})}function Fo(i={}){const{wrapper:t}={...n(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(r,{...i})}):r(i)}export{Fo as default};
