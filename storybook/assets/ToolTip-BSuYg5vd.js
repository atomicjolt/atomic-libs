import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CePRvBtH.js";import{M as l,T as a,S as h,D as d,P as c,C as x,a as i,b as j}from"./index-Bb0V52I-.js";import{T as u,P as T,I as g,W as f,a as r,b as n}from"./ToolTip.stories-CcDOuqkU.js";import{B as p}from"./Button.component-3sKYTEvT.js";import"./index-DmM0KDA7.js";import"./iframe-DDH_jANk.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./cssprops-BO85xpNm.js";import"./useOverlayPosition-BbD5l9N4.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./ProgressCircle.component-dfZhFUDA.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./index-CqJC2f1M.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./colors-x_YFGAop.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./useOverlayTriggerState-3VWy5d8s.js";import"./PressResponder-D-PDHmhd.js";import"./usePress-Cxy0og0d.js";import"./FocusScope-CLRP0VYY.js";import"./useControlledState-sJfMLWrs.js";import"./useHover-BMz_rS5A.js";import"./mixins-CgZ-Dp8B.js";import"./Provider-op_UCnZE.js";import"./TextInput.component-orZ2WaH2.js";import"./variants-D58EA0oR.js";import"./Inputs.styles-BOms08AG.js";import"./ComboInput.styles-BLZOd1-l.js";import"./TextField.component-DjHv_Zmz.js";import"./useTextField-B3HDaRNl.js";import"./useFormReset-DvzwwQm6.js";import"./useField-BhG43OVF.js";import"./useFormValidation-CsrNRCZi.js";import"./useFormValidationState-CKAS44yz.js";import"./Field.styles-B11u_h4j.js";import"./Label.context-8YwVGsEO.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.context-D-RNFvKn.js";import"./ComboInput.context-Di7U2yCG.js";import"./Input.context-BTEI3GdY.js";import"./TextArea.context-D8jqO_QU.js";import"./NumberField.component-EZmYZE-6.js";import"./useFocusWithin-CrVHK3Cv.js";import"./useEvent-Qm4q9YOK.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useSpinButton-DS2l_r0R.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./IconButton.component-BmNQMsrM.js";import"./MaterialIcon.component-KpSPmnjB.js";import"./Icons.styles-D2L4nNgu.js";import"./FloatingFieldInputWrapper-CdOaBO99.js";import"./Label.component-B7CKGK89.js";import"./Message.component-DCrYYuGG.js";import"./ErrorMessage.component-BIgFaI1o.js";import"./Input.component-D1jFzKgG.js";import"./useFocusRing-4PdL76fJ.js";import"./useButton-DlM8S39G.js";import"./useLink-CqmZ9M1P.js";import"./SpinnerLoader.component-B6-1sJZM.js";import"./Loader.component-BJhRk41g.js";import"./index-B1DW8wg7.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-fO3c5uZz.js";function m(e){const t={code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{of:u}),`
`,o.jsx(a,{}),`
`,o.jsx(h,{}),`
`,o.jsx(d,{}),`
`,o.jsx(c,{}),`
`,o.jsx(x,{}),`
`,o.jsx(t.p,{children:"There are three things that compose a tooltip:"}),`
`,o.jsxs(t.ol,{children:[`
`,o.jsxs(t.li,{children:["The ",o.jsx(t.code,{children:"Tooltip"})," component itself. This is the element that will be displayed when the target element is hovered over."]}),`
`,o.jsxs(t.li,{children:["The ",o.jsx(t.code,{children:"ToolTipTrigger"})," component. This component handles the logic of displaying the tooltip when the target element is hovered over."]}),`
`,o.jsx(t.li,{children:"The target component. This is a focusable element that will trigger the tooltip to be displayed when hovered over or foucsed on via keyboard navigation."}),`
`]}),`
`,o.jsxs(t.p,{children:["In the following example, the ",o.jsx(t.code,{children:"Button"})," component is the target element:"]}),`
`,o.jsx(i,{of:T}),`
`,o.jsxs(t.p,{children:["Note than when using ",o.jsx(t.code,{children:"ToolTipTrigger"}),`, it handles setting up the refs and event listeners for you. Any components in this library
that are "focusable" can be used out of the box as the target of a tooltip. So you can use `,o.jsx(t.code,{children:"Button"}),", ",o.jsx(t.code,{children:"TextInput"}),", etc. as the target."]}),`
`,o.jsx(i,{of:g}),`
`,o.jsx(t.h2,{id:"custom-tooltip-target",children:"Custom ToolTip target"}),`
`,o.jsxs(t.p,{children:["If you need to use a custom component as the target of a tooltip, you can wrap your component with the ",o.jsx(t.code,{children:"ToolTipTarget"})," component."]}),`
`,o.jsx(i,{of:f}),`
`,o.jsx(t.h2,{id:"tooltip-warmup-and-cooldown",children:"Tooltip Warmup and Cooldown"}),`
`,o.jsx(t.p,{children:"ToolTips have a warmup / cooldown time. If one tooltip is triggered, and then another is triggered within the cooldown time, the second tooltip will appear immediately."}),`
`,o.jsxs("div",{style:{display:"flex",gap:"12px"},children:[o.jsxs(r,{delay:1500,closeDelay:1e3,children:[o.jsx(p,{children:"Hover me"}),o.jsx(n,{children:"I come up after a delay."})]}),o.jsxs(r,{delay:1500,closeDelay:1e3,children:[o.jsx(p,{children:"Then hover me"}),o.jsx(n,{children:"If you did it quickly, I appear immediately."})]})]}),`
`,o.jsx(t.hr,{}),`
`,o.jsx(j,{})]})}function Jo(e={}){const{wrapper:t}={...s(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(m,{...e})}):m(e)}export{Jo as default};
