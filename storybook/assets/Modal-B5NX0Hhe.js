import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as n}from"./index-BrnU7xv7.js";import{ae as s,af as a,ah as p,ai as m,aj as l,ak as e}from"./index-BMIX5h-f.js";import{M as d,P as c,W as h,a as u}from"./Modal.stories-AMNrKHBq.js";import"./index-DJO9vBfz.js";import"./iframe-BRSL7Ns5.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";import"./helpers-D-Gur9Js.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-C0DXmw5d.js";import"./index-CyCRagT9.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./Modal.component-bNfinTgp.js";import"./context-C_Tf37_9.js";import"./FocusScope-BnAoeAyt.js";import"./focusSafely-BOUv7I-8.js";import"./useFocusWithin-DSbUfD8x.js";import"./utils-Df1WEgxG.js";import"./useObjectRef-BKue9pYL.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayTriggerState-BXapIe9V.js";import"./PressResponder-Dqe7WJHR.js";import"./usePress-Cu0aM-K5.js";import"./useControlledState-CN8sBTKq.js";import"./index-De95zDiF.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./Modal.context-CVWuW54q.js";import"./layout-B6NAx4l9.js";import"./utils-2VFVy79V.js";import"./Flex.component-DqBL6Xjb.js";import"./Heading.component-ZSfyCSq-.js";import"./typography-B_qJ0BtB.js";import"./colors-x_YFGAop.js";import"./View.component-BIeQ-0Ai.js";import"./IconButton.component-Cg2HWRAW.js";import"./Button.component-Bfqq8odl.js";import"./useFocusRing-CPkBIT8D.js";import"./useFocus-DJe2BRHe.js";import"./useButton-AoKYWM9F.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-o0N_IkwX.js";import"./useKeyboard-A8_doyNT.js";import"./useLink-ByNL9j8X.js";import"./mixins-B7X2BZyR.js";import"./SpinnerLoader.component-qW2PqPLJ.js";import"./Loader.component-l5wuRCiG.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-D3qB71XV.js";import"./ProgressCircle.component-DZo3rxOV.js";import"./useLabel-CSTUXoQW.js";import"./useLabels-B24R2YQq.js";import"./useNumberFormatter-D5qg7lg6.js";import"./context-BQ3_Es2z.js";import"./NumberFormatter-DNR9MAW-.js";import"./MaterialIcon.component-Bqs5W7S4.js";import"./Icons.styles-BaNpbbIh.js";import"./Text.component-CdF05x9a.js";import"./OverlayTrigger.component-DyBQFlN3.js";import"./useOverlayTrigger-DEPcgMBT.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./Popover.context-Iv_xuGDi.js";import"./Provider-B9Eqn13H.js";function r(i){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
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
`,o.jsx(e,{of:u})]})}function So(i={}){const{wrapper:t}={...n(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(r,{...i})}):r(i)}export{So as default};
