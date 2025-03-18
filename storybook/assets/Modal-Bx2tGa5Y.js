import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-CePRvBtH.js";import{M as s,T as a,D as p,P as m,C as l,a as i}from"./index-UFm6KxWd.js";import{M as d,P as c,W as h,a as u}from"./Modal.stories-VvGvUI18.js";import"./index-DmM0KDA7.js";import"./iframe-B_2duqtn.js";import"./index-D_Kw7eWP.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CmTRtbgT.js";import"./helpers-DnLJB5bk.js";import"./styled-components.browser.esm-S-CusIP4.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-CyCRagT9.js";import"./Collection-cZH6f0Bi.js";import"./CollectionBuilder-DglRgqo3.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./Modal.component-DfUFtAS1.js";import"./context-DYfCRJJJ.js";import"./FocusScope-CLRP0VYY.js";import"./useFocusWithin-C-e8UI97.js";import"./usePress-Cng8MYxN.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayTriggerState-BxLf_MI7.js";import"./PressResponder-CHEeukYG.js";import"./useControlledState-sJfMLWrs.js";import"./index-CqJC2f1M.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Modal.context-CnJk84dQ.js";import"./layout-ez2uQdt_.js";import"./utils-DqmNl-Il.js";import"./Flex.component-CUA2hDLx.js";import"./Heading.component--8ScbQc7.js";import"./typography-B_qJ0BtB.js";import"./colors-x_YFGAop.js";import"./View.component-BgJoxNiB.js";import"./IconButton.component-blxnUvMB.js";import"./Button.component-DRJR9m07.js";import"./useFocusRing-BmyBc2tX.js";import"./useButton-CBzhh6F5.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-BTwsTyp1.js";import"./mixins-BOHXBJW9.js";import"./SpinnerLoader.component-uF9SY2FS.js";import"./Loader.component-C9UWSKIc.js";import"./Checkmark.component-CRE6wLUH.js";import"./Spinner.component-BQyrLFoY.js";import"./ProgressCircle.component-D57_vbeK.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./MaterialIcon.component-DZmnA2mz.js";import"./Icons.styles-T5NoJEsB.js";import"./Text.component-BvK-Gpbf.js";import"./OverlayTrigger.component-BUfIF373.js";import"./useOverlayTrigger-BaVZjogA.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./Popover.context-CkZWeej5.js";import"./Provider-op_UCnZE.js";function r(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
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
`,o.jsx(i,{of:u})]})}function qo(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(r,{...e})}):r(e)}export{qo as default};
