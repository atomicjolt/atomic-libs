import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{ae as a,af as l,ag as h,ah as d,ai as c,aj as x,ak as e,al as j}from"./index-1_t9u-PO.js";import{T as u,P as T,I as g,W as f,a as r,b as n}from"./ToolTip.stories-CbmIhJ6N.js";import{B as p}from"./Button.component-SZWKT3t6.js";import"./index-DJO9vBfz.js";import"./iframe-XBwgiehv.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";import"./cssprops-BO85xpNm.js";import"./useOverlayPosition-DFJP1Pe4.js";import"./focusSafely-BOUv7I-8.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./ProgressCircle.component-DZo3rxOV.js";import"./useObjectRef-BKue9pYL.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CSTUXoQW.js";import"./useLabels-B24R2YQq.js";import"./useNumberFormatter-D5qg7lg6.js";import"./context-BQ3_Es2z.js";import"./NumberFormatter-DNR9MAW-.js";import"./index-De95zDiF.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./colors-x_YFGAop.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./useOverlayTriggerState-BXapIe9V.js";import"./PressResponder-Dqe7WJHR.js";import"./usePress-Cu0aM-K5.js";import"./FocusScope-BnAoeAyt.js";import"./useControlledState-CN8sBTKq.js";import"./useHover-D34ofACQ.js";import"./mixins-B7X2BZyR.js";import"./useFocusable-o0N_IkwX.js";import"./useFocus-DJe2BRHe.js";import"./utils-Df1WEgxG.js";import"./useKeyboard-A8_doyNT.js";import"./Provider-B9Eqn13H.js";import"./TextInput.component-DxunprAa.js";import"./variants-Dln-jX-v.js";import"./Inputs.styles-DfujkgJy.js";import"./ComboInput.styles-x3aI4rV_.js";import"./TextField.component-Brod2y3c.js";import"./useTextField-DSYflh9X.js";import"./useFormReset-C11SSN19.js";import"./useField-mSuDlNxJ.js";import"./useFormValidation-D05SS9o7.js";import"./useFormValidationState-DFldk10H.js";import"./Field.styles-wtg9rJuP.js";import"./Label.context-ChhuUauO.js";import"./Message.context-BObz3Mtj.js";import"./ErrorMessage.context-D3SbpLIU.js";import"./ComboInput.context-Dk1bHly0.js";import"./Input.context-KI5tKbdp.js";import"./TextArea.context-BmdJtbM9.js";import"./NumberField.component-BJAds9vk.js";import"./useFocusWithin-DSbUfD8x.js";import"./useEvent-CXpXU_b4.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./useSpinButton-D0G3eTCL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./IconButton.component-BC26b8KI.js";import"./MaterialIcon.component-2YMyWhOU.js";import"./Icons.styles-BaNpbbIh.js";import"./FloatingFieldInputWrapper-ClPwAkE1.js";import"./Label.component-CeN98k3i.js";import"./Message.component-nkasZM07.js";import"./ErrorMessage.component-CfKzjo8L.js";import"./Input.component-Ci0setjS.js";import"./useFocusRing-CPkBIT8D.js";import"./useButton-AoKYWM9F.js";import"./useLink-ByNL9j8X.js";import"./SpinnerLoader.component-CF9bxXo5.js";import"./Loader.component-TyckDnEn.js";import"./index-CyCRagT9.js";import"./Flex.component-DqBL6Xjb.js";import"./layout-B6NAx4l9.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-D3qB71XV.js";function m(i){const t={code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",...s(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:u}),`
`,o.jsx(l,{}),`
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
`,o.jsx(e,{of:T}),`
`,o.jsxs(t.p,{children:["Note than when using ",o.jsx(t.code,{children:"ToolTipTrigger"}),`, it handles setting up the refs and event listeners for you. Any components in this library
that are "focusable" can be used out of the box as the target of a tooltip. So you can use `,o.jsx(t.code,{children:"Button"}),", ",o.jsx(t.code,{children:"TextInput"}),", etc. as the target."]}),`
`,o.jsx(e,{of:g}),`
`,o.jsx(t.h2,{id:"custom-tooltip-target",children:"Custom ToolTip target"}),`
`,o.jsxs(t.p,{children:["If you need to use a custom component as the target of a tooltip, you can wrap your component with the ",o.jsx(t.code,{children:"ToolTipTarget"})," component."]}),`
`,o.jsx(e,{of:f}),`
`,o.jsx(t.h2,{id:"tooltip-warmup-and-cooldown",children:"Tooltip Warmup and Cooldown"}),`
`,o.jsx(t.p,{children:"ToolTips have a warmup / cooldown time. If one tooltip is triggered, and then another is triggered within the cooldown time, the second tooltip will appear immediately."}),`
`,o.jsxs("div",{style:{display:"flex",gap:"12px"},children:[o.jsxs(r,{delay:1500,closeDelay:1e3,children:[o.jsx(p,{children:"Hover me"}),o.jsx(n,{children:"I come up after a delay."})]}),o.jsxs(r,{delay:1500,closeDelay:1e3,children:[o.jsx(p,{children:"Then hover me"}),o.jsx(n,{children:"If you did it quickly, I appear immediately."})]})]}),`
`,o.jsx(t.hr,{}),`
`,o.jsx(j,{})]})}function Yo(i={}){const{wrapper:t}={...s(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(m,{...i})}):m(i)}export{Yo as default};
